/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};
const isProd = process.env.NODE_ENV === 'production';
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: !isProd,
});

module.exports = nextConfig;

module.exports = withPWA({
  // next config
});
