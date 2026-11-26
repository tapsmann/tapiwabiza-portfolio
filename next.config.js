/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // This portfolio is static. Cloudflare Pages serves the generated `out/` directory.
  output: 'export',
  trailingSlash: true,

  // Static exports cannot use the Next.js image optimizer.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
