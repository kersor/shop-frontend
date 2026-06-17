import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "regard.ru",
      },
      {
        protocol: "https",
        hostname: "www.regard.ru",
      },
      {
        protocol: "https",
        hostname: "catalog-images.x5static.net",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8080",
        pathname: "/uploads/**",
      },
    ],
    dangerouslyAllowLocalIP: true,
  }
};

export default nextConfig;
