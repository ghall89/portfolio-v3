import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getPortfolio } from '../../lib/cosmicApi';

import { H4 } from '../sharedComponents/Typography';
import ParsedJSX from '../sharedComponents/ParsedJsx';

const PortfolioButton = ({ href, children }) => (
  <Link href={href} target="_blank">
    <span className="text-blue-400 bg-white shadow py-1 w-full text-center rounded-md hover:bg-blue-400 hover:text-white transition-colors cursor-pointer dark:bg-slate-500 dark:text-sky-200 dark:hover:bg-sky-200 dark:hover:text-slate-500">
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
      {loading ? null : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((item) => (
            <div
              key={item.slug}
              className="p-4 bg-slate-100 border rounded-md flex flex-col dark:bg-slate-600 dark:border-slate-500"
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
              <H4 className="text-gray-600">{item.title}</H4>
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
