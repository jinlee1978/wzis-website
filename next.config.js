const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
  },
  async redirects() {
    return [
      // Canonical ZSA route is /sports-academy; keep /zsa links and bookmarks working.
      { source: '/zsa', destination: '/sports-academy', permanent: true },
    ];
  },
};

module.exports = withNextIntl(nextConfig);
