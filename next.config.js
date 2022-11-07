const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})
const { withContentlayer } = require('next-contentlayer')

/**
 * @link https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
const nextConfig = withContentlayer({
  images: {
    domains: ['i.pravatar.cc', 'avatars.githubusercontent.com', 'placeimg.com'],
  },
})
module.exports = withPWA(nextConfig)
