import { Link } from "react-router";

export default function Social() {

	return (
		<>
			<div className="flex py-5 space-x-2 md:flex-row dark:text-white">
				<Link to={"https://www.linkedin.com/in/christopher-nguyen-3b3795247/"}>Linkedin</Link>
				<Link to={"https://github.com/Christopher-NguyenCS"}>GitHub</Link>
			</div>
		</>
	)
}
