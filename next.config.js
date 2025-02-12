/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    GMAPS_API_KEY: process.env.GMAPS_API_KEY,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    IMMOSCOUT_API_KEY: process.env.IMMOSCOUT_API_KEY,
    IMMOSCOUT_API_SECRET: process.env.IMMOSCOUT_API_SECRET,
    IMMOSCOUT_ACCESS_TOKEN: process.env.IMMOSCOUT_ACCESS_TOKEN,
    IMMOSCOUT_ACCESS_SECRET: process.env.IMMOSCOUT_ACCESS_SECRET,
  },
};

module.exports = nextConfig;
