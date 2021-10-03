module.exports = {
  reactStrictMode: true,
  env: {
    PROJECT_NAME: process.env.PROJECT_NAME,
    PROJECT_URL: process.env.PROJECT_URL,
    PROJECT_DESCRIPTION: process.env.PROJECT_DESCRIPTION,
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
  images: {
    domains: ['images.microcms-assets.io']
  }
};
