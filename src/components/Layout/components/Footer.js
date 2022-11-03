import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const SocialLink = ({ href, icon, label }) => (
	<a href={href} target="_blank" rel="noreferrer">
		<div className="group flex flex-nowrap transition-colors text-sky-100 hover:text-sky-200 cursor-pointer">
			<FontAwesomeIcon icon={icon} />
			<span className="pl-2 text-base transition-opacity md:opacity-0 group-hover:opacity-100 ">
				/{label}
			</span>
		</div>
	</a>
);

const Footer = () => (
	<footer className="p-10 mt-10 bg-slate-800 z-50 border-t border-slate-600">
		<div className="max-w-6xl	mx-auto px-8 flex flex-col md:flex-row">
			<div className="flex flex-row space-x-5 text-2xl">
				<SocialLink
					href="https://www.linkedin.com/in/ghalldev/"
					icon={faLinkedin}
					label="ghalldev"
				/>
				<SocialLink
					href="https://github.com/ghall89"
					icon={faGithub}
					label="ghall89"
				/>
			</div>
			<span className="text-center md:text-right w-full text-slate-300 mt-8 md:mt-0">
				Made with <FontAwesomeIcon icon={faMugHot} /> in Rhode Island.
			</span>
		</div>
	</footer>
);

export default Footer;
