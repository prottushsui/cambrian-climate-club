// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... any other existing configuration options you might have ...

  // Configure allowed image hostnames for next/image
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**', // Allows all paths under the hostname
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**', // Allows all paths under the hostname
      },
      // Add other allowed hosts here if needed in the future
      // Example:
      // {
      //   protocol: 'https',
      //   hostname: 'cdn.example.com',
      //   port: '',
      //   pathname: '/account123/**',
      // },
    ],
  },
};

module.exports = nextConfig;
