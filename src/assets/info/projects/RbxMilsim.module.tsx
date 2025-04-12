const RBX_MILSIM_1 = {
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
				"images/past-projects/cia-sac-npc.png",
				"images/past-projects/cia-sac-npc-2.png",
				"images/past-projects/cia-sac-npc-4.png",
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
				"images/past-projects/galveston-1.png",
				"images/past-projects/galveston-2.png",
				"images/past-projects/galveston-4.png",
				"images/past-projects/galveston-3.png",
			]
		},
		
		{
			'project-name': "FIOSS: Field Intelligence & Operation Support System",
			'start-end': "Mar 2022 - Sep 2024",
			'intro': "An in-game software with UIs supporting data entry, mission planning, and file transfers",
			'description': `
					<p>
						<u>FIOSS</u>, taken from military movies and documentaries, is a mimic of intraweb terminal with the goal of allowing users to input data, plan missions, and share/transfer files between each other.<br/><br/>
					</p>
				`,

			"imgs": [
				"images/past-projects/cia-sac-fioss-2.png"
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

	"bgrd": "images/past-projects/cia-sac-training.png",
};

export default RBX_MILSIM_1;
