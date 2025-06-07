import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import NavigationTab from './components/NavigationTab.tsx';
import { Projects } from './Projects.tsx';
createRoot(document.getElementById('root')!).render(
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<App />} />
			<Route element={<NavigationTab />}>
				<Route path="projects" element={<Projects />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
