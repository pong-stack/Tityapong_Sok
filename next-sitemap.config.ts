import type { IConfig } from 'next-sitemap';

const config: IConfig = {
  siteUrl: 'https://tityapong-dev.vercel.app',
  generateRobotsTxt: true, // Generate robots.txt alongside sitemap
  outDir: './public', // Output sitemap to /public folder
  exclude: ['/server-sitemap.xml', '/private/*'], // Exclude dynamic or private routes
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/', // Allow crawling of all pages
      },
    ],
    additionalSitemaps: [
      'https://tityapong-dev.vercel.app/sitemap.xml', // Main sitemap
      // Add more sitemaps if needed (e.g., for dynamic routes)
    ],
  },
  // Optional: Add dynamic routes to the sitemap
  generateIndexSitemap: false, // Set to true if you have many pages
};

export default config;
