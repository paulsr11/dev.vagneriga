import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [];
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dev2.vagneriga.lv',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'dev.vagneriga.lv',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
