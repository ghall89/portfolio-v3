import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

const NavItem = ({ href, label, color }) => {
	const router = useRouter();
	let colors;

	switch (color) {
		case 'blue':
			colors = {
				hover: 'hover:border-blue-300 ',
				active:
					'border-blue-400 text-transparent bg-clip-text bg-gradient-to-br from-sky-400 to-green-400',
			};
			break;
		case 'purple':
			colors = {
				hover: 'hover:border-purple-300',
				active:
					'border-purple-400 text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-yellow-400',
			};
			break;
		case 'green':
			colors = {
				hover: 'hover:border-green-300',
				active:
					'border-green-400 text-transparent bg-clip-text bg-gradient-to-br from-green-300 to-orange-400',
			};
			break;
	}

	return (
		<Link href={href}>
			<span
				className={`text-lg cursor-pointer transition-colors ${colors.hover} ${
					router.pathname === href ? colors.active : 'text-white'
				} `}
			>
				{label}
			</span>
		</Link>
	);
};

const Nav = () => {
	return (
		<nav className="flex flex-row gap-8 mt-8 justify-self-end justify-center">
			<NavItem href="/" label="Home" color="blue" />
			<NavItem href="/projects" label="Projects" color="purple" />
			<NavItem href="/blog" label="Blog" color="green" />
		</nav>
	);
};

export default Nav;
