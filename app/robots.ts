import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/api/', '/_next/'] }],
    sitemap: 'https://sngplbillcheck.pk/sitemap.xml',
    host:    'https://sngplbillcheck.pk',
  };
}
