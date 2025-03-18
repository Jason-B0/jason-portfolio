const projects = {
	
	SOCCERNS: {
		'association': "Soccer Nova Scotia - Special Projects",
		'start-end': "Summer 2024",
		'description': `
			<p>
				In addition to the assigned work duty as a league administrative assistant, I completed a few special projects for Soccer Nova Scotia's departments.
			</p>
		`,
		"bgrd": "../assets/images/past-projects/soccerns-ball.jpg",

		projects: [
			{
				'project-name': "Game Day Social Media Manager",
				'start-end': "",
				'intro': "",
				'description': `
					<p>
						I managed the Soccer Nova Scotia's social media accounts for provincial championship and cup games, broadcasted starting line-up photos, game updates, results, and schedules for more than 5000 people.
					</p>`,
				"imgs": []
			},
			{
				'project-name': "Rural Media Outreach Photography Project",
				'start-end': "",
				'intro': "",
				'description': `
					<p>
						 Our goal was to showcase grassroot soccer leagues outside of Halifax Regional Municipality of Nova Scotia through photography and social media.  With that, I was tasked to photograph soccer activity in those remote regions, and then edit the photos for media use.<br/><br/>
						 Over the summer, I was able to photograph the Amanda Forster Memorial Soccer Tournament in the Valley region, as well as a cup game in the Highland region, capturing and editing a combined count of more than 500 quality photos.
					</p>`,
				"imgs": []
			},
			{
				'project-name': "Census Data Analysis Project",
				'start-end': "",
				'intro': "",
				'description': `
					<p>
						We conducted a census data analysis project to better understand participation of soccer as a sport across Nova Scotia.  As a part of our goal to grow the game, we analyzed various data of the residences in each region, using various data like population density, econmical activity, as well as self-reported data such as average household income, age, and race to better understand the demographics of soccer players in Nova Scotia.<br/><br/>
						Given the Canadian census data for the Atlantics dissemination area, I was tasked to understand the census data, then assist the project by writing a program that filters the dissemination area, and in return providing us the necessary data we were interested in.
					</p>`,
				"imgs": []
			}
		],


	},
	
	DAL_UNI: {
		'association': "Dalhousie University - Course Related Projects",
		'start-end': "Jan 2021 - Mar 2025",
		"platform": "Full stack & front-end web development",
		'description': `
			<p>
				As a university students, I am required to complete a number of projects for my courses.<br/>
				Here are some of the projects I have completed or are ongoing.
			</p>
		`,
		"bgrd": "../assets/images/past-projects/dalu-walkway.jpg",

		projects: [
			{
				'project-name': "Website Programmer: CSCI-2691",
				'start-end': "Jan 2025 - Apr 2025",
				'intro': "A full-stack website for a start-up immigration consultancy firm.",
				'description': `
					<p>
						CSCI-X691 is a course that allows us to participate in projects and provide a service for companies, start-ups, or student-ran organizations using software development.  In this project, we were tasked with creating a website for a start-up immigration consultancy firm.
					</p>
				`,

				"imgs": []
			},
			
			{
				'project-name': "Project Lead & Backend Programmer: CSCI-2690",
				'start-end': "Jan 2024 - Apr 2024",
				'intro': "A grade calculator website application.",
				'description': `
					<p>
						CSCI-2690 is a course that gives us an introduction on software development, and a part of the curriculum is to create some sort of project using technology.  My team and I decided to create a grade calculator website application, where students can input their grades and the website will calculate their final grade for them with various considerations like "lowest-mark dropped".  This was our first introduction to a self-directed website project.<br/><br/>
						The front-end was rendered largely incomplete due to timing constraints, but the backend had been implemented and was able to calculate grades based on the user's input.<br/><br/>
						<a href="https://github.com/Jason-B0/GradeCalculator.git"><u>You can view the project by clicking here</u></a>.
					</p>
				`,

				"imgs": [
				]
			}

		],
		
		
	},

	RBX_MILSIM_1: {
		'association': "ROBLOX MILSIM Group",
		'start-end': "Jan 2021 - Mar 2025",
		'description': `
			<p>
				Our friend group and I ran a small military simulation community of around 20 people on ROBLOX, focusing on highly-realistic first-person shooting gameplay and objectives.  We wrote our own lore-book, created our own maps, and developed our own game mechanics derived from a few open sourced engines.<br/><br/>
				The bulk of my advanced gameplay programming projects, as well as some introduction to higher-level system designing,
				occured during these projects.<br/><br/>
			</p>
		`,
		
		projects: [
			{
				'project-name': "Programming: NPC Framework",
				'start-end': "Jan 2023 - Dec 2023",
				'intro': "An attempt to recreate advanced NPC behaviour from Hitman on ROBLOX",
				'description': `
					<p>
						In line with the <u>Port of Galveston</u> project, I developed an NPC framework for our game.  The goal was to create a system where NPCs can react to the player's actions, such as running away when they see a firearm, or calling the police when they see a dead body.<br/><br/>
						The system was inspired by the well-known Hitman series.  NPCs would patrol, perform tasks, detect their surroundings, and react to it according to the player's strategy.<br/><br/>
						Impressively, the system was able to handle up to 100 NPCs at once in a fifteen-player server, with each NPC having their own unique behaviour and pathfinding.  The system was also able to handle multiple NPCs reacting to the same event, or chasing after a particular player if required.<br/><br/>
						A future plan was in place to add a dialogue system and have NPCs interact proactively with the surrounding environment and the player, but this was ultimately scrapped.<br/><br/>
						<a href="https://www.linkedin.com/feed/update/urn:li:activity:7133455059517894657/"><u>You can click here to see a demonstration of the NPC system on my LinkedIn post here</u></a>.
					</p>
				`,

				"imgs": [
					"../assets/images/past-projects/cia-sac-npc.png",
					"../assets/images/past-projects/cia-sac-npc-2.png",
					"../assets/images/past-projects/cia-sac-npc-4.png",
				]
			},
		
			{
				'project-name': "Project Lead & Scenery Designing: Port of Galveston",
				'start-end': "Jan 2023 - Dec 2023",
				"platform": "ROBLOX",
				'intro': "A 3k by 3k attempt to recreate pier 16, Port of Galveston, Texas, USA on ROBLOX",
				'description': `
					<p>
						Our past "operations" developed had been similar to old call-of-duty games where the objective was a linear "capture-and-kill" missions.  However, I chose to explore a more open-world approach to the game, where players can choose to perform covert operations amongst the public or go "guns and blazing" —— a gameplay style to games like "Battlefield: Hardline", "Call of Duty Black Ops 6", or "Hitman".  Thus, the <u>Port of Galveston</u> idea was born.
						<br><br>
						I led and assisted in this project with two other friends and coordinated the map's architecture, scenery construction, and layout organization, with the goal of trying to recreate pier 16 of Port of Galveston and the surrounding area in a fairly realistic manner.  The result was a 3k by 3k map featuring a suburban area, construction sites, and pier 16 itself.
					</p>
				`,

				"imgs": [
					"../assets/images/past-projects/galveston-1.png",
					"../assets/images/past-projects/galveston-2.png",
					"../assets/images/past-projects/galveston-4.png",
					"../assets/images/past-projects/galveston-3.png",
				]
			},
			
		],
		
		"bgrd": "../assets/images/past-projects/cia-sac-training.png",
	},
	
	RBX_MILSIM_2: {
		'association': "",
		'start-end': "",
		'description': `
		`,

		projects: [
			{
				'project-name': "FIOSS: Field Intelligence & Operation Support System",
				'start-end': "Mar 2022 - Sep 2024",
				'intro': "An in-game software with UIs supporting data entry, mission planning, and file transfers",
				'description': `
					<p>
						<u>FIOSS</u>, taken from military movies and documentaries, is a mimic of intraweb terminal with the goal of allowing users to input data, plan missions, and share\/transfer files between each other.<br/><br/>
					</p>
				`,

				"imgs": [
					"../assets/images/past-projects/cia-sac-fioss-2.png"
				]
			},
			{
				'project-name': "Combative Breaching Framework",
				'start-end': "May 2022 - June 2022",
				'intro': "An integration of independent breaching mechanics into the game using an open-sourced gun engine",
				'description': `
					<p>
						We modified a widely available firearm engine to support an independently made breaching mechanics, such as door breaching, wall breaching, and window breaching.  The goal was to allow players to use breaching charges, shotguns, and other tools to breach into buildings and rooms, and to allow players to interact with the environment in a more dynamic way.
					</p>
				`,

				"imgs": [
				]
			}

		],

		"bgrd": "../assets/images/past-projects/cia-sac-training-2.png",
	},
	
	RBX_USM: {
		'association': "ROBLOX Military Roleplay Games",
		'start-end': "Mar 2020 - Mar 2023",
		'description': `
			<p>
				2020 to 2023 saw a rise in US-based military roleplay games on ROBLOX, and I was involved in a few of them.  Many of them included some form of "military academy" roleplay games, PVP games, practice games, and many more. <br/><br/>
				Many of these projects were done entirely out of voluntary time, or with virtual compensation.  However, these projects were my first introduction to any level of software development, and thus still very valuable.
			</p>
		`,

		projects: [
			{
				'project-name': "MCB Camp Pendleton",
				'start-end': "Mar 2020 - Dec 2021",
				'intro': "An attempt to recreate the Marine Corps Base Camp Pendleton on ROBLOX.",
				'description': `
					<p>
						This was a solo-project that started during the pandemic lockdown when I was associated with the ROBLOX modern military roleplaying community and had a lot of free time.  Ambitiously, my goal was to try to recreate MCB Camp Pendleton at a 0.5:1 scale on ROBLOX as a solo developer, and thus to provide some sort of open-combat and versatile activity grounds for a USMC-based roleplaying community.<br/><br/>
						The project was completed in April 2021, but ultimately scrapped in December that year due to 1) the lack of foot flow, and 2) technological limitations of ROBLOX in respect to the scale of the map.  However, the concept was well received by the community members, and many kinds of activities were conducted there.<br/><br/>
						<a href="https://www.youtube.com/watch?v=NBUqu2gWALI"><u>You can view a small timelapse of the project here</u></a>.
					</p>
				`,

				"imgs": [
					"../assets/images/past-projects/mcb-rblx-2020.png",
					"../assets/images/past-projects/mcb-rblx-airfield-1.png",
					"../assets/images/past-projects/mcb-rblx-airfield-2.jpg",
					"../assets/images/past-projects/mcb-rblx-scn-1.png",
					"../assets/images/past-projects/mcb-rblx-las-flores-1-1.png",
					"../assets/images/past-projects/mcb-rblx-las-flores-2-1.jpg",
				]
			},

		],

		"bgrd": "../assets/images/past-projects/mcb-rblx-2019.jpg",
	},
	
}

export default projects;