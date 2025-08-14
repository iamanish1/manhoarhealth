/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://menorahhealth.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://menorahhealth.com/sitemap.xml',
    ],
  },
  exclude: [
    '/api/*',
    '/_next/*',
    '/admin/*',
  ],
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
}
