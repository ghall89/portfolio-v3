import { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

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
			<H3 className="text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-yellow-400">
				Check out some of the projects I&apos;ve built...
			</H3>
			{loading ? null : (
				<>
					<div className="hidden mt-8 md:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
						{portfolio.map(item => (
							<PortfolioCard item={item} />
						))}
					</div>
					<div className="md:hidden w-full">
						<Swiper
							pagination={true}
							modules={[Pagination]}
							slidesPerView={1}
							pagination={{ clickable: true }}
							className="w-full"
						>
							{portfolio.map(item => (
								<SwiperSlide>
									<PortfolioCard item={item} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</>
			)}
		</>
	);
};
export default Portfolio;
