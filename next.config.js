/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5171/api/:path*',
      },
      {
        source: '/Login',
        destination: 'http://localhost:5171/Login',
      },
      {
        source: '/Register',
        destination: 'http://localhost:5171/Register',
      },
      {
        source: '/Logout',
        destination: 'http://localhost:5171/Logout',
      }
    ]
  }
}

module.exports = nextConfig
