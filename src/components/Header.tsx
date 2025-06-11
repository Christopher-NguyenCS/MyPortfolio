import Social from "@/Social"
import NavigationTab from "./NavigationTab"
import ToggleTheme from "@/ToggleTheme"
export default function Header() {

	return (
		<>
			<header className="flex justify-center space-x-4 md:flex-row dark:text-white w-full p-5">
				<h1 className="text-white py-5">
					Christopher Nguyen
				</h1>
				<NavigationTab />
				<Social />
				<ToggleTheme />
			</header>
		</>
	)
}
