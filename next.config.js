/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com", "cs5425imagedata.blob.core.windows.net"],
  },
};

module.exports = nextConfig;
