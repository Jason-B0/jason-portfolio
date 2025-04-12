import HomeBtn from '../components/HomeButton.tsx';
import "../styles/app.css";
import HorizontalLine from '../components/HorizontalLine.tsx';

import parseDate from '../utils/parseDate.tsx';

interface Association {
	default: never;
	association: string;
	'start-end': string;
	platform: string;
	description: string;
	bgrd: string;
	projects: Project[];
}

interface Project {
	'project-name': string;
	'start-end': string;
	intro: string;
	description: string;
	imgs: string[];
}

const projectModules = import.meta.glob('../assets/info/projects/*.tsx', { eager: true });

const importedProjects = Object.entries(projectModules).reduce((acc, [path, module]) => {
	const key = path.split('/').pop()?.replace(/\.[^/.]+$/, '') || '';
	acc[key] = (module as Association).default || module;
	return acc;
}, {} as Record<string, Association>);


// Sort project by start date, latest first (Desc)
const sortProjectsByDate = (entries: [string, Association][]): [string, Association][] => {
	return [...entries].sort((a, b) => {
		const aDateStr = a[1]['start-end'];
		const bDateStr = b[1]['start-end'];

		const dateA: [Date, Date] = parseDate(aDateStr);
		const dateB: [Date, Date] = parseDate(bDateStr);

		// Compare start date
		if (dateA[0].getTime() !== dateB[0].getTime()) {
			return dateB[0].getTime() - dateA[0].getTime();
		}
		
		// Compare end date
		if (dateA[1].getTime() !== dateB[1].getTime()) {
			return dateB[1].getTime() - dateA[1].getTime();
		}

		// If dates are identical, sort by association name
		return a[1]['association'].localeCompare(b[1]['association']);
	});
};

// Get all project entries
function getEntries(entry: Association) {
	return entry.projects.map((project, projectIndex) => (
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
									className={`h-auto object-contain ${rowImages.length === 1 ? 'w-[90%]' : 'w-[40%]'}`} />
							))}
						</div>
					);
				})}
			</div>
		</div>
	));
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
				
				<div className="mx-auto w-full max-h-full min-h-full justify-center items-center">

					{sortProjectsByDate(Object.entries(importedProjects)).map(([key, entry]) => (
						<div key={key} className="h-auto pb-10 relative overflow-hidden">
							<img
								src={entry['bgrd']}
								alt={`background image`}
								className="absolute inset-0 w-full h-full object-cover opacity-50"
							/>

							{/* project-name */}
							<div className="my-5 mx-[15%] z-10 relative mb-10">
								<div className="flex justify-between spacex-x-15 w-full align-middle">
									<p className="text-xl font-bold">{entry['association']}</p>
									<p className="text-lg mt-1">{entry['start-end']}</p>
								</div>
								{entry['association'] === '' ? null : <HorizontalLine inColor="green" />}
								<div className="text-lg mt-1" dangerouslySetInnerHTML={{ __html: entry['description'] }} ></div>
							</div>

							<section className="my-5 mx-[15%] z-10 relative flex">
								<div className="w-full">
									{getEntries(entry)}
								</div>
							</section>
							
						</div>
					))}

				</div>
				
			</section>
		</main>
	)
}
