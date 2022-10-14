import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { getBlogPosts } from '../../lib/cosmicApi';
import parseHtml from '../../lib/parseHtml';

import { H3, InlineLink } from '../sharedComponents/Typography';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPosts(setBlogPosts, setLoading);
  }, []);

  return (
    <>
      {loading ? null : (
        <>
          {blogPosts.objects.map((post) => (
            <>
              <H3>{post.title}</H3>
              <span className="text-sky-800">
                Posted on{' '}
                {format(new Date(post.metadata.post_date), 'MMM Lo, y')}
              </span>
              <article>
                {parseHtml(`${post.content.substr(0, 400)}...</p>`)}
              </article>
              <InlineLink href={`./blog/${post.slug}`}>Read More...</InlineLink>
            </>
          ))}
        </>
      )}
    </>
  );
};

export default Blog;
