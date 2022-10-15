import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

import { getBlogPosts } from '../../lib/cosmicApi';
import ParsedJSX from '../sharedComponents/ParsedJsx';

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
            <div className="mb-10 p-3 border rounded-md" key={post.slug}>
              <H3>{post.title}</H3>
              <span className="text-sky-800">
                <FontAwesomeIcon icon={faCalendarAlt} /> Posted on{' '}
                {format(new Date(post.metadata.post_date), 'MMM Lo, y')}
              </span>
              <article className="gradient-mask-b-0 max-h-52 overflow-hidden mb-7">
                <ParsedJSX input={post.content} />
              </article>
              <InlineLink href={`./blog/${post.slug}`}>Read More...</InlineLink>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Blog;
