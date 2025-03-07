import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    CLERK_WEBHOOK_SECRET: process.env.CLERK_WEBHOOK_SECRET,
  },
};

export default nextConfig;
