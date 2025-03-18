import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/app.css";

import portrait from "../assets/portrait.png";

const navItems = [
	{ title: "Home", path: "/" },
	{ title: "About Me", path: "/About" },
	{ title: "Experiences", path: "/Experiences" },
	{ title: "Projects", path: "/Projects" },
];

export function Welcome() {
	const [activeItem, setActiveItem] = useState(0);
	const navigate = useNavigate();
	
	const handleNavClick = (index: number) => {
		setActiveItem(index);
	};

	// Handle keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			// Arrow up or W key
			if ((e.key === 'ArrowUp' || e.key.toLowerCase() === 'w') && activeItem > 0) {
				setActiveItem(prevItem => {
					const newItem = prevItem - 1;
					return newItem;
				});
			}
			// Arrow down or S key
			else if ((e.key === 'ArrowDown' || e.key.toLowerCase() === 's') && activeItem < navItems.length - 1) {
				setActiveItem(prevItem => {
					const newItem = prevItem + 1;
					return newItem;
				});
			}
			// Enter key
			else if (e.key === 'Enter' || e.key === 'Return') {
				// Navigate to page
				const selectedItem = navItems[activeItem];
				navigate(selectedItem.path);
			}
		};

		// Add event listener
		window.addEventListener('keydown', handleKeyDown);

		// Clean up
		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [activeItem, navItems, navigate]);
	
	return (
		<div className="flex h-auto max-h-200">
			<section className="grid grid-cols-2 grid-rows-1" id="me">

				<div className="col-start-1 col-end-2 flex flex-col justify-center items-center">

					{/* My face and my name */}
					<div className="NAME flex p-5">
						<h1 className="text-5xl">Jason&ensp;</h1>
						<h1 className="text-5xl text-green-700">Bai</h1>
					</div>

					{/* GO TO */}
					<h3 className="text-xl text-center">
						GO TO:
					</h3>

					{/* TODO: add a second list to use as display arrow key */}
					<ul className="mt-2 text-left">
						{navItems.map((item, index) => (
							<li key={index} onClick={() => handleNavClick(index)}
								className={`
										'menus duration-75' 
										transition-colors ${activeItem === index ? 'text-green-600' : ''
									}
									`}
							>
								<Link to={item.path}>
									{item.title}
								</Link>
							</li>
						))}
					</ul>
					<p className="hint">Hint: You can also use arrow keys or W/S to navigate</p>
				</div>

				<div className="col-start-2 col-end-2 flex justify-center items-left">
					<img className="portrait-photo" src={portrait} alt="Jason Bai" />
				</div>

			</section>

		</div>
	);
}