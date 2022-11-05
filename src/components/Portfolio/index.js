import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getPortfolio } from '../../lib/cosmicApi';

import { H4, H3 } from '../sharedComponents/Typography';
import ParsedJSX from '../sharedComponents/ParsedJsx';

const PortfolioButton = ({ href, children }) => (
	<Link href={href} target="_blank">
		<span className="shadow py-1 w-full text-center rounded-md transition-colors cursor-pointer bg-slate-500 text-sky-50 hover:bg-sky-500">
			{children}
		</span>
	</Link>
);

const Portfolio = () => {
	const [portfolio, setPortfolio] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPortfolio(setPortfolio, setLoading);
	}, []);

	return (
		<>
			<H3 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-yellow-400">
				Check out some of the projects I&apos;ve built...
			</H3>
			{loading ? null : (
				<div className="mt-8 grid grid-rows-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{portfolio.map(item => (
						<div
							key={item.slug}
							className="p-4 bg-slate-100 border rounded-md flex flex-col bg-slate-600 border-slate-500"
						>
							<div className="mb-4">
								<Image
									className="rounded"
									src={item.metadata.image.url}
									alt={`screenshot of ${item.title}`}
									height={1024 / 2}
									width={1280 / 2}
								/>
							</div>
							<H4 className="text-slate-300">{item.title}</H4>
							<div className="flex-grow">
								<ParsedJSX input={item.content} />
							</div>
							<div className="flex flex-row space-x-4 justify-center">
								{item.metadata.project_url ? (
									<PortfolioButton href={item.metadata.project_url}>
										Visit Page
									</PortfolioButton>
								) : null}
								{item.metadata.github_url ? (
									<PortfolioButton href={item.metadata.github_url}>
										Github Repo
									</PortfolioButton>
								) : null}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};
export default Portfolio;
