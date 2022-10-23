const Cosmic = require('cosmicjs');
const api = Cosmic();

const bucket = api.bucket({
	slug: process.env.BUCKET_SLUG,
	read_key: process.env.BUCKET_READ_KEY,
});

const getBlogPosts = async (setBlogPosts, setLoading, offset) => {
	const data = await bucket.objects
		.find({
			type: 'blog-posts',
			locale: 0,
		})
		.props('slug,title,content,metadata,locale')
		.limit(5)
		.skip(offset);
	setBlogPosts(data);
	setLoading(false);
};

const getBlogPost = async (setBlogPost, setLoading, slug) => {
	const data = await bucket.objects
		.find({
			type: 'blog-posts',
			slug: {
				$eq: slug,
			},
		})
		.props('slug,title,content,metadata')
		.limit(1)
		.then(response => {
			if (response) {
				setBlogPost(response);
			}
			setLoading(false);
		});
};

const getPortfolio = async (setPortfolio, setLoading) => {
	const data = await bucket.objects
		.find({
			type: 'portfolio-pieces',
		})
		.props('slug,title,content,metadata')
		.limit(20);
	setPortfolio(data.objects);
	setLoading(false);
};

export { getBlogPosts, getBlogPost, getPortfolio };
