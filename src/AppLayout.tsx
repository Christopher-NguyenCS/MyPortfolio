import { Outlet } from "react-router";
import Header from "./components/Header";

function AppLayout() {

	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<Header />
				<Outlet />
			</div>
		</>

	)
}

export default AppLayout;
