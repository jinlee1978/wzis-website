const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // ZSA page moved from /sports-academy to /zsa (Sept 2026); keep old links and search results working
      { source: '/sports-academy', destination: '/zsa', permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
