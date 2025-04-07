** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Configure environment variables
  env: {
    MAILGUN_API_KEY: process.env.MAILGUN_API_KEY,
    MAILGUN_DOMAIN: process.env.MAILGUN_DOMAIN,
    EMAIL_RECEIVER: process.env.EMAIL_RECEIVER,
  },
  // Modify as needed for your project
  images: {
    domains: [],
  },
};

module.exports = nextConfig;