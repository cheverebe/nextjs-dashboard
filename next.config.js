/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aws.worldathletics.org',
      },
    ],
  },
};

module.exports = nextConfig;
