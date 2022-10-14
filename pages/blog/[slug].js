import { useRouter } from 'next/router';

import Layout from '../../src/components/Layout';
import Post from '../../src/components/Blog/components/Post';

const PostPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <Layout>
      <Post slug={slug} />
    </Layout>
  );
};

export default PostPage;
