// src/components/NavigationTab.jsx

import { Outlet, Link } from 'react-router';

export default function NavigationTab() {
	return (
		<div className="flex flex-col bg-gray-50 min-w-full">
			<nav className="bg-gray-800 text-white p-4 shadow-lg flex min-w-full">
				<Link
					to="/"
					className="block py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200 mr-4 md:mr-0 md:mb-2"
				>
					Home
				</Link>
				<Link
					to="/projects"
					className="block py-2 px-3 rounded-md text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
				>
					Projects
				</Link>
			</nav>

			<main className="flex-grow p-6 bg-white overflow-y-auto">
				<Outlet />
			</main>


		</div>
	);
}


