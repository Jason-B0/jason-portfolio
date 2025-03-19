import projectFiles from '../misc/ProjectFiles.tsx';
import HomeBtn from '../components/HomeButton.tsx';
import Footer from '../components/Footer.tsx';

import "../styles/app.css";
import HorizontalLine from '../components/HorizontalLine.tsx';

function ProjectsEntry() {
	return (
		<div className="mx-auto w-full max-h-full min-h-full justify-center items-center">
			
			{Object.entries(projectFiles).map(([key, entry]) => (
				<div key={key} className="h-auto pb-10 relative overflow-hidden">
					<img
						src={entry['bgrd']}
						alt={`background image`}
						className="absolute inset-0 w-full h-full object-cover opacity-50"
					/>
					
					{/* project-name */}
					<div className="my-5 mx-[10%] z-10 relative mb-10">
						<div className="flex justify-between spacex-x-15 w-full align-middle">
							<p className="text-xl font-bold">{entry['association']}</p>
							<p className="text-lg mt-1">{entry['start-end']}</p>
						</div>
						{entry['association'] === '' ? null : <HorizontalLine inColor="green" />}
						<div className="text-lg mt-1" dangerouslySetInnerHTML={{__html: entry['description']}} ></div>
					</div>
					
					<section className="my-5 mx-[10%] z-10 relative flex">
						<div className="w-full">
							
							{/* Check if entry is an array (multiple projects) */}
							{(
								
								// If entry has multiple projects, map through them
								entry.projects.map((project, projectIndex) => (
									<div key={projectIndex} className="mb-10 last:mb-0">
										
										{/* location & project name */}
										<div className="flex justify-between space-x-15 w-full align-middle">
											<p className="text-lg">{project['project-name']}</p>
											<p className="text-lg">{project['start-end']}</p>
										</div>
										
										<p className="my-5 font-bold">{project['intro']}</p>
										
										<div className="experience-list my-5 mx-[2.5%]" dangerouslySetInnerHTML={{ __html: project['description'] }}></div>
										
										<div className="flex flex-col gap-4">
											{/* Group images into rows of max 2 */}
											{Array.from({ length: Math.ceil(project['imgs'].length / 2) }, (_, i) => {
												const startIdx = i * 2;
												const rowImages = project['imgs'].slice(startIdx, startIdx + 2);
												return (
													<div key={i} className="flex justify-around gap-2 my-2">
														{rowImages.map((imagePath: string, index: number) => (
															<img
																key={index}
																src={imagePath}
																alt={`${project['project-name']} image ${startIdx + index + 1}`}
																className={`h-auto object-contain ${rowImages.length === 1 ? 'w-[90%]' : 'w-[40%]'}`}
															/>
														))}
													</div>
												);
											})}
										</div>
									</div>
								))
							)}
						</div>
					</section>
				</div>
			))}
			
		</div>
	);
}

export function Projects() {
	return (
		<main className="mx-auto">
			<section id="experience">
				
				<div className="mx-[15%] mt-10 mb-10 flex p-5">
					<h1 className="text-5xl">Past&ensp;</h1>
					<h1 className="text-5xl text-green-500">Projects</h1>
				</div>
				
				<HomeBtn />
				
				<ProjectsEntry />
			</section>
			<Footer />
		</main>
	)
}
