import type { NextConfig } from "next";

const isProduction = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_API_URL: isProduction
      ? process.env.NEXT_PUBLIC_API_URL_PROD
      : process.env.NEXT_PUBLIC_API_URL_DEV,
  },
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
