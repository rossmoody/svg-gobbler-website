/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, max-age=0',
          },
        ],
        source: '/api/get-counter',
      },
    ]
  },
  images: { unoptimized: true },
  output: 'export',
}

module.exports = nextConfig
