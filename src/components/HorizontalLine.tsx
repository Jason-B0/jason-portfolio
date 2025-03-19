import '../styles/app.css';

const colors: Record<string, string> = {
	'green': '#007302',
	'orange': '#d86900',
};

const HorizontalLine = ({inColor = 'green'}: {inColor?: string}) => {
	return (
		<span 
			className="horizontal-line" 
			style={{ backgroundColor: colors[inColor] }}
		></span>
	);
}

export default HorizontalLine;
