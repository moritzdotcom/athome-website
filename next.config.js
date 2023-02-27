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
    IMMOSCOUT_SANDBOX_KEY: process.env.IMMOSCOUT_SANDBOX_KEY,
    IMMOSCOUT_USER_EMAIL: process.env.IMMOSCOUT_USER_EMAIL,
    IMMOSCOUT_USER_NAME: process.env.IMMOSCOUT_USER_NAME,
    IMMOSCOUT_USER_PW: process.env.IMMOSCOUT_USER_PW,
  },
};

module.exports = nextConfig;
