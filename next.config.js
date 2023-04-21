/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'lit-hollows-47786.herokuapp.com',
        pathname: '/images/**',
      }
    ],
  },
}

module.exports = nextConfig
