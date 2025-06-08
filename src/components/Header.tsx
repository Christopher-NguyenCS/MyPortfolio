import NavigationTab from "./NavigationTab"

export default function Header() {

	return (
		<>
			<header className="flex justify-center md:flex-row bg-gray-800 w-full">
				<h1 className=" text-white p-5 mt-5 mb-5">
					Christopher Nguyen
				</h1>
				<NavigationTab />
			</header>


		</>
	)
}
