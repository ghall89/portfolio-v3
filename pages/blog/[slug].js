import { useRouter } from 'next/router';

import Post from '../../src/components/Blog/components/Post';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <Post slug={slug} />;
};

export default PostPage;
