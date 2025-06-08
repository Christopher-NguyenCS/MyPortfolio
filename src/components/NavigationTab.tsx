// src/components/NavigationTab.jsx
import { Link } from "react-router";

export default function NavigationTab() {
	return (
		<nav className="bg-gray-800 text-white p-5 shadow-lg flex ">
			<Link
				to="/"
				className="m-5"
			>
				Home
			</Link>
			<Link
				to="/projects"
				className="m-5"
			>
				Projects
			</Link>
		</nav>
	);
}


