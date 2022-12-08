import Head from 'next/head';

import { useEffect, useState } from 'react';

import { getPortfolio } from '../../lib/cosmicApi';
import { H3 } from '../sharedComponents/Typography';
import PortfolioCard from './components/PortfolioCard';

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPortfolio(setPortfolio, setLoading);
	}, []);

	return (
		<>
			<Head>
				<title>ghall.dev - Projects</title>
			</Head>
			<H3 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-yellow-400">
				Check out some of the projects I&apos;ve built...
			</H3>
			{loading ? null : (
				<div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
					{portfolio.map(item => (
						<PortfolioCard item={item} />
					))}
				</div>
			)}
		</>
	);
};
export default Portfolio;
