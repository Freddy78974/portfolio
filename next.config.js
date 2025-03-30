/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [],
    },
    // Configuration pour les assets statiques
    async headers() {
      return [
        {
          source: '/assets/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;