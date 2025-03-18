import { Link } from 'react-router-dom';
import '../styles/app.css';
import { useState } from 'react';

const homeBtn = () => {
	return (
		<Link to="/" className="flex m-10 justify-center items-center h-1vh">
			<button 
				className="bg-transparent border-none cursor-pointer text-xl hover:text-green-500 transition-none"
			>
				{(() => {
					const [isHovered, setIsHovered] = useState(false);
					return (
						<span 
							onMouseEnter={() => setIsHovered(true)}
							onMouseLeave={() => setIsHovered(false)}
						>
							{isHovered ? `>RETURN TO HOME<` : `> RETURN TO HOME <`}
						</span>
					);
				})()}
			</button>
		</Link>
	);
}

export default homeBtn;
