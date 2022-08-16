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
  basePath: "/Portifolio-next/out",
  assetPrefix: "/Portifolio-next/out",
};

module.exports = nextConfig;
