/** @type {import('next').NextConfig} */
module.exports = {
  webpack5: true,
  image: {
    domain: ['drive.google.com']
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};

