import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "catalog-images.x5static.net",
      },
      
    ],
  },
};

export default nextConfig;
