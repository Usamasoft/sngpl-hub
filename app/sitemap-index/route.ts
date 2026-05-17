// Sitemap Index — /sitemap-index
// Lists all category sitemaps for Google/Bing discovery

import { NextResponse } from 'next/server';
import { CATEGORIES } from '../../lib/seo-data';

export const dynamic = 'force-static';
export const revalidate = 86400;

export async function GET() {
  const baseUrl = 'https://sngplbillcheck.pk';
  const today = new Date().toISOString().split('T')[0];

  const sitemaps = [
    `${baseUrl}/sitemap.xml`, // core pages
    ...CATEGORIES.map(cat => `${baseUrl}/sitemaps/${cat}`),
  ];

  const entries = sitemaps
    .map(
      loc =>
        `  <sitemap>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</sitemapindex>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
