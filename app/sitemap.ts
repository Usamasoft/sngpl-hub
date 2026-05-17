import { MetadataRoute } from 'next';
import { CATEGORIES, getCategoryLabel } from '../lib/seo-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sngplbillcheck.pk';
  const now  = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: base,                  lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/bill-check`,  lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/guides`,      lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/calculator`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];

  // Category index pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map(cat => ({
    url: `${base}/sngpl/${cat}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...corePages, ...categoryPages];
}
