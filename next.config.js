// @ts-check

const withPlugins = require('next-compose-plugins')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/login',
        destination: '/auth/signin',
        permanent: false
      }
    ]
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'c.tenor.com', 'source.boringavatars.com']
  }
}

module.exports = withPlugins([[withBundleAnalyzer]], nextConfig)
