import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheHandler: require.resolve('./cache-handler.js'),
  cacheMaxMemorySize: 0,
  output: 'standalone',
};

export default nextConfig;
