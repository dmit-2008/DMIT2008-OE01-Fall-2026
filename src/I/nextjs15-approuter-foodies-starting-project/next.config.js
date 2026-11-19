/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    localPatterns: [
      {
        pathname: '/assets/**',
        search: '',
      },
    ],
  },
};

module.exports = nextConfig
