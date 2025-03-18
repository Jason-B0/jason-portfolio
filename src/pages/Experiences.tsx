import experienceFiles from '../misc/ExperienceFiles.tsx';
import HomeBtn from '../components/HomeButton.tsx';
import Footer from '../components/Footer.tsx';

import "../styles/app.css";


function ExperienceEntry() {
	return (
		<div className="mx-auto w-full max-h-full min-h-full justify-center items-center">
			
			{Object.entries(experienceFiles).map(([key, entry]) => (
				<div key={key} className="h-auto pb-10 relative overflow-hidden">
					<img
						src={entry['bgrd']}
						alt={`${entry['company']} background`}
						className="absolute inset-0 w-full h-full object-cover opacity-40"
					/>
					
					<section className="my-5 mx-[20%] z-10 relative flex">
						<div className="w-full">
							
							{/* job title */}
							<div className="flex justify-between space-x-15 w-full align-middle">
								<p className="text-xl font-bold">{entry['role']}, {entry['company']}</p>
								<p className="text-sm mt-1.5">{entry['start']} {entry['end']}</p>
							</div>
							
							<span className="horizontal-line-green"></span>
							
							{/* location & project name */}
							<div className="flex justify-between space-x-15 w-full align-middle">
								<p className="text-md">{entry['location']}</p>
								<p className="text-md italic">{entry['project-name']}</p>
							</div>
							
							<div className="experience-list my-5 mx-[2.5%]" dangerouslySetInnerHTML={{ __html: entry['description'] }}></div>
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
			
			<Footer />
		</main>
	)
}
