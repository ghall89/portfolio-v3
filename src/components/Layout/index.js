import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSun,
	faMoon,
	faToggleOff,
	faToggleOn,
} from '@fortawesome/free-solid-svg-icons';

import { Footer, Nav } from './components';

const Layout = ({ children }) => {
	const [darkMode, setDarkMode] = useState(false);
	// const [darkModeLs, setDarkModeLs] = useState();

	const enableDarkMode = () => {
		if (darkMode) {
			return 'dark';
		}
		return '';
	};

	const darkModeIcon = () => {
		if (darkMode) {
			return faMoon;
		}
		return faSun;
	};

	// useEffect(() => setDarkModeLs(localStorage.getItem('darkMode')));

	// useEffect(() => {
	//   if (darkModeLs !== null) {
	//     setDarkMode(darkModeLs);
	//   }
	// }, [darkModeLs]);

	const handleDarkModeToggle = () => {
		setDarkMode(!darkMode);
		localStorage.setItem('darkMode', !darkMode);
	};

	return (
		<div className={`${enableDarkMode()}`}>
			<div className="min-h-screen flex flex-col bg-slate-700 text-white">
				<header className="p-10 mb-10 border-b w-full bg-slate-800 border-slate-600">
					<div className="max-w-6xl	mx-auto px-8 flex flex-col md:flex-row">
						{/* <button
              className="mx-6 text-lg text-white"
              onClick={() => handleDarkModeToggle()}
            >
              <FontAwesomeIcon icon={darkModeIcon()} />
            </button> */}
						<div className="text-center md:text-left">
							<h1 className="text-3xl text-slate-300">Graham Hall</h1>
							<h2 className="text-xl  text-slate-200">Web Developer</h2>
						</div>
						<div className="flex-grow" />
						<Nav />
					</div>
				</header>
				<div className="max-w-6xl	mx-auto px-8 flex-grow flex flex-col justify-center items-center overflow-hidden">
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
