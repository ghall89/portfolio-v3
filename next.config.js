/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    BUCKET_SLUG: process.env.BUCKET_SLUG,
    BUCKET_READ_KEY: process.env.BUCKET_READ_KEY,
  },
};

module.exports = nextConfig;
