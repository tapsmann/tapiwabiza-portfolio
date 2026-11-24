/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
  // COMPLETELY DISABLE SWC to fix Windows compatibility
  swcMinify: false,
  // Use Babel for all compilation
  compiler: {
    removeConsole: false,
    styledComponents: {
      ssr: true,
      displayName: true,
      cssProp: true,
    },
  },
  // Webpack config to use Babel loader
  webpack: (config, { isServer }) => {
    // Use Babel loader for JS/TS/TSX files
    config.module.rules.push({
      test: /\.(js|ts)x?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript',
          ],
          plugins: [
            '@babel/plugin-proposal-objectRestSpread',
            '@babel/plugin-proposal-export-default-from',
            '@babel/plugin-proposal-class-properties',
          ],
        },
      },
    })
    return config
  },
  // Allow builds even with TypeScript errors
  typescript: {
    ignoreBuildErrors: true,
  },
  // Skip ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Experimental features
  experimental: {
    optimizeCss: true,
  },
  // Output settings for standalone mode
  output: 'standalone',
}

module.exports = nextConfig