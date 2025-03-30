const isProd = process.env.NODE_ENV === 'production'
const nextConfig = {
  output: 'export', // Génère des fichiers statiques
  assetPrefix: isProd ? '/portfolio/' : '', 
  images: {
    unoptimized: true // Désactive l'optimisation pour l'export
  }
}

module.exports = nextConfig