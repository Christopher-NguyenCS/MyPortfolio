import { Link } from "react-router";

export default function NavigationTab() {
	return (
		<nav className="bg-gray-800 text-white flex space-x-4">
			<Link
				to="/"
				className="py-5"
			>
				Home
			</Link>
			<Link
				to="/projects"
				className="py-5"
			>
				Projects
			</Link>
		</nav>
	);
}


