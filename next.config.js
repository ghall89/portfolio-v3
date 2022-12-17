/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		BUCKET_SLUG: process.env.BUCKET_SLUG,
		BUCKET_READ_KEY: process.env.BUCKET_READ_KEY,
	},
	images: {
		domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
	},
};

module.exports = nextConfig;
