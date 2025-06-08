import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import { Projects } from './Projects.tsx';
import AppLayout from './AppLayout.tsx';
createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route element={<AppLayout />}>
				<Route path='/' element={<App />} />
				<Route path='/projects' element={<Projects />} />
			</Route>
		</Routes>
	</BrowserRouter >
);
