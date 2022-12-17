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
	const [stickyNav, setStickyNav] = useState(false);

	const handleScroll = () => {
		const position = window.pageYOffset;
		if (position > 300) {
			setStickyNav(true);
		} else {
			setStickyNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<div className="min-h-screen flex flex-col bg-slate-700 text-white">
				<header className="p-10 mb-10 border-b w-full bg-slate-800 border-slate-600">
					<div className="max-w-6xl	mx-auto px-8 flex flex-col md:flex-row">
						<div className="text-center md:text-left">
							<h1 className="text-3xl text-slate-300">Graham Hall</h1>
							<h2 className="text-xl  text-slate-200">Web Developer</h2>
						</div>
						<div className="flex-grow " />
						<Nav />
					</div>
				</header>
				<div
					className={`z-50 fixed bg-[#1e293bE6] w-full pb-8 backdrop-blur-md top-[-100px] transition-transform duration-500 ease-in-out ${
						!stickyNav ? 'translate-y-0' : 'translate-y-full'
					}`}
				>
					<Nav />
				</div>
				<div className="max-w-6xl	mx-auto px-8 flex-grow flex flex-col justify-center items-center overflow-hidden">
					{children}
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
