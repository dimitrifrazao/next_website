// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: "/next_website",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
