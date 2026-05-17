// Dynamic sitemap per category — /sitemaps/[category]
// Serves XML sitemap for all slugs in that category

import { NextRequest, NextResponse } from 'next/server';
import {
  CATEGORIES,
  getAllSlugsForCategory,
  type Category,
} from '../../../lib/seo-data';

export const dynamic = 'force-static';
export const revalidate = 3600; // 1 hour

function escapeXml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  if (!CATEGORIES.includes(category as Category)) {
    return new NextResponse('Not Found', { status: 404 });
  }

  const slugs = getAllSlugsForCategory(category as Category);
  const baseUrl = 'https://sngplbillcheck.pk';
  const today = new Date().toISOString().split('T')[0];

  const urls = slugs.map(
    slug =>
      `  <url>
    <loc>${escapeXml(`${baseUrl}/sngpl/${category}/${slug}`)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
