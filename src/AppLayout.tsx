import { Outlet } from "react-router";
import Header from "./components/Header";
import { ThemeProvider } from "./components/theme-provider";

function AppLayout() {

	return (
		<>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<div className="flex flex-col justify-center items-center">
					<Header />
					<Outlet />
				</div>
			</ThemeProvider>
		</>

	)
}

export default AppLayout;
