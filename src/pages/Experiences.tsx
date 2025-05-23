import { useEffect, useRef } from 'react';
import HomeBtn from '../components/HomeButton.tsx';
import HorizontalLine from '../components/HorizontalLine.tsx';

import "../styles/app.css";
import TypewriterEffect from '../components/TypewriterEffect.tsx';
import parseDate from '../utils/parseDate.tsx';

const PARALLAX_SPEED_PERCENT = 20;
const PARALLAX_SPEED_ACTUAL = PARALLAX_SPEED_PERCENT * 0.01;

interface Experience {
	default: never;
	role: string;
	company: string;
	location: string;
	'start-end': string;
	'project-name': string;
	description: string;
	bgrd: string;
}

const experienceModules = import.meta.glob('../assets/info/experiences/*.tsx', { eager: true });

const importedExperiences = Object.entries(experienceModules).reduce((acc, [path, module]) => {
	const key = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
	acc[key] = (module as Experience).default || module;
	return acc;
}, {} as Record<string, Experience>);

const sortExperiencesByDate = (entries: [string, Experience][]): [string, Experience][] => {
	return [...entries].sort((a, b) => {
		const aDateStr = a[1]['start-end'];
		const bDateStr = b[1]['start-end'];

		const dateA: [Date, Date] = parseDate(aDateStr);
		const dateB: [Date, Date] = parseDate(bDateStr);

		// Compare end dates first
		if (dateA[1].getTime() !== dateB[1].getTime()) {
			return dateB[1].getTime() - dateA[1].getTime();
		}

		// If end dates are the same, compare start dates
		if (dateA[0].getTime() !== dateB[0].getTime()) {
			return dateB[0].getTime() - dateA[0].getTime();
		}

		// If dates are identical, sort by company name
		return a[1]['company'].localeCompare(b[1]['company']);
	});
};

function ExperienceEntry() {
	const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);

	useEffect(() => {
		const handleScroll = () => {
			parallaxRefs.current.forEach((ref) => {
				if (ref) {
					const scrollPosition = window.scrollY;
					const elementPosition = ref.offsetTop;
					const distance = scrollPosition - elementPosition;
					const image = ref.querySelector('img');

					if (image && isElementInViewport(ref)) {
						// Adjust the translateY value to control parallax intensity
						image.style.transform = `translateY(${distance * PARALLAX_SPEED_ACTUAL}px)`;
					}
				}
			});
		};

		// Check if element is in vp
		const isElementInViewport = (el: HTMLElement) => {
			const rect = el.getBoundingClientRect();
			return (
				rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.bottom >= 0
			);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="mx-auto w-full max-h-full min-h-full justify-center items-center">

			{sortExperiencesByDate(Object.entries(importedExperiences)).map(([key, entry], index) => (
				<div
					key={key}
					className="h-auto pb-10 relative overflow-hidden"
					ref={el => { parallaxRefs.current[index] = el; }}
				>
					<img
						src={entry['bgrd']}
						alt={`${entry['company']} background`}
						className="absolute inset-0 w-full h-[120%] object-cover opacity-40 transition-transform duration-300 ease-out"
					/>

					<section className="my-5 mx-[20%] z-10 relative flex">
						<div className="w-full">

							{/* job title */}
							<div className="flex justify-between space-x-15 w-full align-middle">
								<TypewriterEffect
									content={`${entry['role']}, ${entry['company']}`}
									isHtml={false}
									className="text-xl font-bold"
									speed={10}
								/>
								<TypewriterEffect
									content={`${entry['start-end']}`}
									isHtml={false}
									className="text-sm mt-1.5"
									speed={10}
								/>
							</div>

							<HorizontalLine inColor="green" />
							
							{/* location & project name */}
							<div className="flex justify-between space-x-15 w-full align-middle">
								<TypewriterEffect
									content={entry['location']}
									isHtml={false}
									className="text-md"
									speed={10}
								/>
								<TypewriterEffect
									content={entry['project-name']}
									isHtml={false}
									className="text-md italic"
									speed={10}
								/>
							</div>

							<div className="experience-list my-5 mx-[2.5%]">
								<TypewriterEffect
									content={
										entry['description']
									}
									isHtml={true}
									className="mt-5 mb-10 text-lg text-left"
									speed={10}
								></TypewriterEffect>
							</div>
						</div>
					</section>
				</div>
			))}

		</div>
	);
}

export function Experiences() {
	return (
		<main className="mx-auto">
			<section id="experience">
				
				<div className="mx-[15%] mt-10 mb-10 flex p-5">
					<h1 className="text-5xl">Professional&ensp;</h1>
					<h1 className="text-5xl text-green-500">Experiences</h1>
				</div>
				
				<HomeBtn />
				
				<ExperienceEntry />
			</section>
		</main>
	)
}
