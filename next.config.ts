import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0,
  /* config options here */
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return process.env.GIT_HASH!;
  },

  output: 'standalone',
};

export default nextConfig;
