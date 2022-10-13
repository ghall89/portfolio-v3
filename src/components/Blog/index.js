import { useEffect, useState } from 'react';

import { getBlogPosts } from '../../lib/cosmicApi';

import Post from './components/Post';

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
            <Post key={post.slug} data={post} />
          ))}
        </>
      )}
    </>
  );
};

export default Blog;
