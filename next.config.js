// @ts-check

/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: process.env.NODE_ENV === "production" ? "/next_website" : "",
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
