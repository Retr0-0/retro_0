// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // This is crucial for static export
  // If you're deploying to username.github.io/your-repo-name/
  // You might also need basePath and assetPrefix:
  basePath: process.env.NODE_ENV === 'production' ? '/Retr0-0portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Retr0-0portfolio/' : '',
  // Other configurations
};

module.exports = nextConfig;