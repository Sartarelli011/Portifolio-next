/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "akamai",
    path: "/Portifolio-next/_next/static/media/",
  },
  basePath: "/Portifolio-next",
  assetPrefix: "/Portifolio-next",
};

module.exports = nextConfig;
