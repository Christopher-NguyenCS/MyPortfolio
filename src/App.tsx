import { useState } from 'react';
import { Button } from "@/components/ui/button";
import './App.css';
import { NavigationTab } from './components/NavigationTab';
function App() {


	return (
		<>
			<NavigationTab />
			<div className="flex flex-col justify-center items-center">
				<header>
					<h1>
						Hi this is Christopher Nguyen. I am an aspiring software developer focus in full stack development!
					</h1>
				</header>
			</div>

		</>
	)
}

export default App
