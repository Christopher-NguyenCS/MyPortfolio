import { Link } from "react-router";

type styleType = {
	style:boolean
}

export default function NavigationTab({style}:styleType) {
	return (
		<>
			{style ?
			(
				<nav className=" dark:text-white flex flex-row space-x-4 ml-0 m-5">
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
			)
			:
			(
				<nav className=" dark:text-white flex flex-col ">
					<Link
						to="/"
						className=""
					>
						Home
					</Link>
					<Link
						to="/projects"
						className=""
					>
						Projects
					</Link>
				</nav>
			)
			}
		
		</>

	);
}


