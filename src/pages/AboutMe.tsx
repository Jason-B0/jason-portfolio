import HomeBtn from '../components/HomeButton.tsx';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import TypewriterEffect from '../components/TypewriterEffect.tsx';

import "../styles/app.css";

import portrait from "/images/about-me/JB-referee.png";
import aboutmePath from "../assets/info/aboutme.txt";
import HorizontalLine from '../components/HorizontalLine.tsx';

const TYPING_SPEED = 5; // measured in ms
const PAGES = {
	"Experiences": { title: "Experiences", path: "/Experiences" },
	"Projects": { title: "Projects", path: "/Projects" },
}

export function AboutMe() {
	const [aboutMeText, setAboutMeText] = useState('');

	useEffect(() => {
		fetch(aboutmePath)
			.then(response => response.text())
			.then(text => setAboutMeText(text))
			.catch(error => console.error('Error loading about me text:', error));
	}, []);
	
	return (
		<main className="mx-[10%]">
			<section id="about-me">

				<div className="mt-10 mb-10 flex p-5">
					<h1 className="text-5xl">About&ensp;</h1>
					<h1 className="text-5xl text-green-500">Me</h1>
				</div>

				<HomeBtn />
				
				<HorizontalLine inColor="orange" />
				
				<section className="h-auto grid grid-cols-3 grid-rows-1" id="me">
					
					{/* Left Column*/}
					<div className="col-start-1 col-end-1 flex justify-center items-left">
						<img className="portrait-photo" src={portrait} alt="Jason Bai" />
					</div>

					{/* Right Column */}
					<div className="col-start-2 col-end-4 flex flex-col justify-top items-left">
						
						<Link rel="noreferrer" className="text-lg mt-5 text-green-500" to={PAGES.Experiences.path}>
							{"> " + PAGES.Experiences.title}
						</Link>

						<Link rel="noreferrer" className="text-lg mt-5 text-green-500" to={PAGES.Projects.path}>
							{"> " + PAGES.Projects.title}
						</Link>
						
						<TypewriterEffect
							content={
								aboutMeText
							}
							isHtml={true}
							className="mt-5 mb-10 text-lg text-left"
						/>
					</div>

				</section>

				<HorizontalLine inColor="orange" />
				
				<div className='my-10 mx-[10%] text-lg'>
					<TypewriterEffect
						content={`
							<ul>
								<li>Email: jc_bai@outlook.com | jbai@dal.ca<br /><br /></li>
								<li>
									<a href="https://www.linkedin.com/in/jason-ck-bai/">
										LinkedIn: jason-ck-bai
									</a>
									<br /><br />
								</li>
							</ul>
						`}
						isHtml={true}
						speed={TYPING_SPEED * 3}
					
					></TypewriterEffect>
				</div>
				
			</section>
		</main>
		
	);
}