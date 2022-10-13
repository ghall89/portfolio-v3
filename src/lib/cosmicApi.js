const Cosmic = require('cosmicjs');
const api = Cosmic();

const bucket = api.bucket({
  slug: process.env.BUCKET_SLUG,
  read_key: process.env.BUCKET_READ_KEY,
});

const getBlogPosts = async (setBlogPosts, setLoading) => {
  const data = await bucket.objects
    .find({
      type: 'blog-posts', // Object Type slug
    })
    .props('slug,title,content') // response properties
    .limit(10); // number of Objects to be returned
  setBlogPosts(data);
  setLoading(false);
};

export { getBlogPosts };
