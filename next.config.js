/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  env: {
    APP_URL: process.env.REACT_APP_URL
  },
  images: {
    domains: ['localhost']
  },
  async rewrites() {
    return [
      {
        source: '/api/:paths*',
        destination: 'http://localhost:4000/api/:path*'
      },
      {
        source: '/uploads/:paths*',
        destination: 'http://localhost:4000/uploads/:path*'

      }
    ]
  }
}

module.exports = nextConfig
