import { Link } from 'react-router-dom';
import '../styles/app.css';

const homeBtn = () => {
	return (
		<Link to="/" className="flex m-10 justify-center items-center h-1vh">
			<button 
				className="bg-transparent border-none cursor-pointer text-xl"
			>
				{`> RETURN TO HOME <`}
			</button>
		</Link>
	);
}

export default homeBtn;
