import { useEffect, useState } from 'react';
import Image from 'next/image';

import { getPortfolio } from '../../lib/cosmicApi';
import parseHtml from '../../lib/parseHtml';

import { H4, InlineLink } from '../sharedComponents/Typography';
import { data } from 'autoprefixer';

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
            <div key={item.slug} className="p-4 bg-slate-100 flex flex-col">
              <div className="mb-4">
                <Image
                  src={item.metadata.image.url}
                  alt={`screenshot of ${item.title}`}
                  height={1024 / 2}
                  width={1280 / 2}
                />
              </div>
              <H4>{item.title}</H4>
              <div className="flex-grow">{parseHtml(item.content)}</div>
              <div className="flex flex-row space-x-7">
                {item.metadata.project_url ? (
                  <InlineLink href={item.metadata.project_url} target="_blank">
                    Visit Page
                  </InlineLink>
                ) : null}
                {item.metadata.github_url ? (
                  <InlineLink href={item.metadata.github_url} target="_blank">
                    Github Repo
                  </InlineLink>
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
