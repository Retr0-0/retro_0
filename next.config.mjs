/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/retr0portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/retr0portfolio/' : '',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Required for static export
}

export default nextConfig
