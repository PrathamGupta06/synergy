/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'team-momentum.vercel.app',
      },
    ],
  },
};

export default nextConfig;
