import { useState } from 'react';
import { Button } from "@/components/ui/button";
import './App.css';

function App() {
	const [count, setCount] = useState<number>(0);
	const handleClick = () => {
		setCount(count + 1);
	}

	return (
		<>
			<div className="flex min-h-svh flex-col items-center justify-center">
				<Button onClick={handleClick}>Click Me {count}!</Button>
			</div>
		</>
	)
}

export default App
