import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0,
  output: 'standalone',
  generateBuildId: async () => {
    return process.env.GIT_HASH!;
  },
};

export default nextConfig;
