import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://sngplbillcheck.pk';
  const now  = new Date();
  return [
    { url: base,                                      lastModified: now, changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/sngpl-bill-check-online`,         lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/sngpl-consumer-number-guide`,     lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/sngpl-duplicate-bill`,            lastModified: now, changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${base}/gas-bill-calculator`,             lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ];
}
