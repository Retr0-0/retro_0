/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // REMOVED for Vercel deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // Required for static export (optional, can be removed if not needed)
}

export default nextConfig
