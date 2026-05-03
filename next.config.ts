import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        // Allow Next.js <Image> to fetch from Unsplash (used for placeholder project cards).
        // Replace with your own CDN/domain once real project photos are available.
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
