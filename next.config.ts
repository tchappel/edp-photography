import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "emanueldellapia.com",
      },
    ],
  },
};

export default nextConfig;
