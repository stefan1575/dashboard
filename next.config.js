const { withBlitz } = require("@blitzjs/next")

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  // Todo - remove the images property after the site has been rebranded
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flowbite.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

module.exports = withBlitz(nextConfig)
