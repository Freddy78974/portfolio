/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export', // Remplace next export
  basePath: isProd ? '/portfolio' : '', // Remplacez par votre nom de dépôt
  assetPrefix: isProd ? '/portfolio/' : '',
  images: {
    unoptimized: true
  },
  trailingSlash: true // Recommandé pour GitHub Pages
}

module.exports = nextConfig