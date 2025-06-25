/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '',
  assetPrefix: isProd ? '/portfolio' : '',
  images: {
    unoptimized: true,
    domains: [],
  },
  trailingSlash: true // Recommandé pour GitHub Pages
}

module.exports = nextConfig