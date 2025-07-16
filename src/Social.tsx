import { Link } from "react-router";

type styleType = {
	style?:boolean
}

export default function Social({style}:styleType) {

	return (
		<>
			{
				style ? (
					<div className="flex flex-row py-5 space-x-4 mr-5 dark:text-white">
						<Link to={"https://www.linkedin.com/in/christopher-nguyen-3b3795247/"}>Linkedin</Link>
						<Link to={"https://github.com/Christopher-NguyenCS"}>GitHub</Link>
					</div>
				)
				:
				(
					<div className="flex flex-col dark:text-white">
						<Link to={"https://www.linkedin.com/in/christopher-nguyen-3b3795247/"}>Linkedin</Link>
						<Link to={"https://github.com/Christopher-NguyenCS"}>GitHub</Link>
					</div>
				)
			}
		</>
	)
}
