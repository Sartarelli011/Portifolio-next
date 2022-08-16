/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    loader: "akamai",
    path: "",
  },
  imagesPublicPath: "/Portifolio-next/_next/static/images/",
  basePath: "/Portifolio-next/",
  assetPrefix: "/Portifolio-next/",
};

module.exports = nextConfig;
