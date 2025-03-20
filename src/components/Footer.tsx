import '../styles/app.css';

export default function Footer()
{
	const year = new Date().getFullYear();
	return (
		<footer className="flex justify-center items-center h-[10%] my-20">
			<p className="text-lg">Jason Bai &copy; {year}</p>
			<p className="text-lg mx-5">Powered by Github Pages</p>
		</footer>
	);
}
