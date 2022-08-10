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
  basePath: "/Portifolio-next-pages",
  assetPrefix: "/Portifolio-next-pages",
};

module.exports = nextConfig;
