import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/contract-treasury", destination: "/shop", permanent: true },
      { source: "/contract-treasury/:slug", destination: "/shop/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
