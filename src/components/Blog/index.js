import { useEffect, useState } from 'react';
import { format } from 'date-fns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleLeft,
  faCalendarAlt,
  faLink,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { getBlogPosts } from '../../lib/cosmicApi';
import ParsedJSX from '../sharedComponents/ParsedJsx';

import { H3, InlineLink, LinkButton } from '../sharedComponents/Typography';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState();

  useEffect(() => {
    getBlogPosts(setBlogPosts, setLoading);
  }, []);

  const isExpanded = (slug) => {
    if (slug === selectedPost) {
      return 'h-fit';
    }
    return 'gradient-mask-b-0 h-52 overflow-hidden';
  };

  return (
    <>
      {loading ? null : (
        <>
          {blogPosts.objects.map((post) => (
            <div key={post.slug}>
              {!selectedPost || selectedPost === post.slug ? (
                <div className="mb-10 p-3 border rounded-md">
                  <H3>{post.title}</H3>
                  <span className="text-sky-800">
                    <FontAwesomeIcon icon={faCalendarAlt} /> Posted on{' '}
                    {format(new Date(post.metadata.post_date), 'MMM Lo, y')}
                  </span>
                  <article
                    className={`mb-7 transition-[height] ${isExpanded(
                      post.slug
                    )}`}
                  >
                    <ParsedJSX input={post.content} />
                  </article>
                  {!selectedPost ? (
                    <LinkButton onClick={() => setSelectedPost(post.slug)}>
                      <FontAwesomeIcon icon={faUpRightFromSquare} /> Read
                      More...
                    </LinkButton>
                  ) : (
                    <div className="flex flex-row gap-5">
                      <LinkButton onClick={() => setSelectedPost()}>
                        <FontAwesomeIcon icon={faAngleLeft} /> Back
                      </LinkButton>
                      <InlineLink href={`/blog/${post.slug}`}>
                        <FontAwesomeIcon icon={faLink} /> Permalink
                      </InlineLink>
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Blog;
