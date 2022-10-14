import { format } from 'date-fns';
import { useEffect, useState } from 'react';

import parseHtml from '../../../lib/parseHtml';
import { getBlogPost } from '../../../lib/cosmicApi';

import { H3, InlineLink, P } from '../../sharedComponents/Typography';
import FourOhFour from '../../404';

const Post = ({ slug }) => {
  const [blogPost, setBlogPost] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogPost(setBlogPost, setLoading, slug);
  }, [slug]);

  useEffect(() => {
    console.log(blogPost);
  }, [blogPost]);

  return (
    <>
      {loading ? null : (
        <>
          {blogPost.total === 0 ? (
            <FourOhFour />
          ) : (
            <>
              <H3>{blogPost.objects[0].title}</H3>
              <span className="text-sky-800">
                Posted on{' '}
                {format(
                  new Date(blogPost.objects[0].metadata.post_date),
                  'MMM Lo, y'
                )}
              </span>
              <article>{parseHtml(blogPost.objects[0].content)}</article>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Post;
