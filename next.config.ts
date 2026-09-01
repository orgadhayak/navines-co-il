import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/blog-Blog", destination: "/blog", permanent: true },
      { source: "/products-Products", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
