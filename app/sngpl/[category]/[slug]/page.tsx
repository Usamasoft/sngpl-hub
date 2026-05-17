import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AdUnit from '../../../components/AdUnit';
import BillChecker from '../../../components/BillChecker';
import TableOfContents from '../../../components/TableOfContents';
import {
  CATEGORIES,
  SLUG_TYPES,
  parseSlug,
  getTopStaticParams,
  getCategoryLabel,
  getTypeLabel,
  getAllSlugsForCategory,
  type Category,
} from '../../../../lib/seo-data';
import { generatePageContent } from '../../../../lib/content-generator';

// ─── ISR CONFIG ───────────────────────────────────────────────────
export const dynamic = 'force-static';
export const dynamicParams = true;
export const revalidate = 86400; // 24-hour ISR

// ─── STATIC PARAMS (top 400 pre-built at deploy) ─────────────────
export async function generateStaticParams() {
  return getTopStaticParams(400);
}

// ─── METADATA ────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  if (!CATEGORIES.includes(category as Category)) return {};

  const parsed = parseSlug(category as Category, slug);
  if (!parsed) return {};

  const content = generatePageContent(category as Category, parsed.city, parsed.type);
  const canonicalUrl = `https://sngplbillcheck.pk/sngpl/${category}/${slug}`;

  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url: canonicalUrl,
      siteName: 'SNGPL Bill Check Hub',
      locale: 'en_PK',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.metaDescription,
    },
  };
}

// ─── PAGE COMPONENT ──────────────────────────────────────────────
export default async function ProgrammaticPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;

  if (!CATEGORIES.includes(category as Category)) notFound();

  const parsed = parseSlug(category as Category, slug);
  if (!parsed) notFound();

  const { city, type } = parsed;
  const content = generatePageContent(category as Category, city, type);
  const catLabel = getCategoryLabel(category as Category);
  const typeLabel = getTypeLabel(type);
  const canonicalUrl = `https://sngplbillcheck.pk/sngpl/${category}/${slug}`;

  // Related pages (3 other types for same city, same category)
  const allSlugs = getAllSlugsForCategory(category as Category);
  const relatedSlugs = allSlugs
    .filter(s => s.startsWith(city.slug + '-') && s !== slug)
    .slice(0, 6);

  // Cross-category links for same city (internal linking network)
  const crossCategoryLinks = CATEGORIES
    .filter(c => c !== category)
    .map(c => {
      const topType = SLUG_TYPES[c]?.[0] ?? '';
      return {
        cat: c,
        label: getCategoryLabel(c),
        href: `/sngpl/${c}/${city.slug}-${topType}`,
        cityHubHref: `/sngpl/cities/${city.slug}`,
      };
    });

  // JSON-LD schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
      { '@type': 'ListItem', position: 2, name: catLabel, item: `https://sngplbillcheck.pk/sngpl/${category}` },
      { '@type': 'ListItem', position: 3, name: content.h1, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: content.faqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const howToSchema = content.howToSteps ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: content.h1,
    description: content.metaDescription,
    step: content.howToSteps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  } : null;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: content.h1,
    description: content.metaDescription,
    url: canonicalUrl,
    publisher: {
      '@type': 'Organization',
      name: 'SNGPL Bill Check Hub',
      url: 'https://sngplbillcheck.pk',
    },
    about: {
      '@type': 'Thing',
      name: `SNGPL ${city.name}`,
    },
  };

  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {howToSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center flex-wrap gap-1.5 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/sngpl/${category}`} className="hover:text-white transition-colors capitalize">{catLabel}</Link>
            <span>/</span>
            <span className="text-white font-medium truncate max-w-xs">{city.name} — {typeLabel}</span>
          </nav>
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{city.province}</span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{city.region}</span>
            <span className="bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1 text-xs font-medium text-green-200">{city.consumers} Consumers</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 leading-tight">{content.h1}</h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">{content.metaDescription}</p>
        </div>
      </section>

      {/* ── QUICK BILL CHECKER ── */}
      <section className="bg-blue-50 border-b border-blue-100 py-8 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-4">⚡ Check Your {city.name} SNGPL Bill Instantly</p>
          <BillChecker compact />
        </div>
      </section>

      {/* ── MAIN CONTENT + SIDEBAR ── */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-10">

          {/* MAIN ARTICLE */}
          <article className="prose-content min-w-0">

            {/* Intro */}
            <div className="mb-6">
              {content.intro.split('\n\n').map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed mb-4 text-base">{para}</p>
              ))}
            </div>

            {/* Table of Contents */}
            <TableOfContents items={[
              ...content.sections.map((s, i) => ({
                id: `section-${i}`,
                label: s.h2,
              })),
              ...(content.howToSteps ? [{ id: 'steps', label: 'Quick Step-by-Step Summary' }] : []),
              { id: 'summary', label: 'Summary' },
              { id: 'faq', label: 'Frequently Asked Questions' },
            ]} />

            {/* Sections */}
            {content.sections.map((section, si) => (
              <section key={si} id={`section-${si}`} className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                  {section.h2}
                </h2>
                {section.body.split('\n\n').map((para, pi) => {
                  // Render bold markdown inline
                  const rendered = para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
                  if (para.trim().startsWith('- ') || para.trim().startsWith('**') && para.includes('\n-')) {
                    return (
                      <div key={pi} className="mb-3 text-gray-700 leading-relaxed text-base"
                        dangerouslySetInnerHTML={{ __html: rendered }} />
                    );
                  }
                  return (
                    <p key={pi} className="text-gray-700 leading-relaxed mb-3 text-base"
                      dangerouslySetInnerHTML={{ __html: rendered }} />
                  );
                })}

                {section.subsections?.map((sub, ssi) => (
                  <div key={ssi} className="mt-6 mb-4 pl-4 border-l-4 border-blue-200">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{sub.h3}</h3>
                    {sub.body.split('\n\n').map((para, pi) => (
                      <p key={pi} className="text-gray-600 leading-relaxed mb-2 text-sm"
                        dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
                    ))}
                  </div>
                ))}
              </section>
            ))}

            <AdUnit slot="1122334455" className="my-8" />

            {/* HowTo Steps (if applicable) */}
            {content.howToSteps && content.howToSteps.length > 0 && (
              <section id="steps" className="mb-10">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Quick Step-by-Step Summary
                </h2>
                <ol className="space-y-4">
                  {content.howToSteps.map((step, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                        {i + 1}
                      </span>
                      <div>
                        <strong className="text-gray-900 text-sm font-bold">{step.name}</strong>
                        <p className="text-gray-600 text-sm mt-1 leading-relaxed">{step.text}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {/* Conclusion */}
            <section id="summary" className="mb-10">
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h2 className="text-lg font-bold text-blue-900 mb-3">Summary</h2>
                <p className="text-blue-800 text-sm leading-relaxed">{content.conclusion}</p>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-10" id="faq">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                Frequently Asked Questions — SNGPL {city.name}
              </h2>
              <div className="space-y-4">
                {content.faqs.map((faq, fi) => (
                  <details key={fi} className="group border border-gray-200 rounded-xl overflow-hidden">
                    <summary className="flex items-center justify-between cursor-pointer p-4 bg-white hover:bg-gray-50 transition-colors">
                      <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                      <span className="flex-shrink-0 w-5 h-5 text-blue-600 group-open:rotate-180 transition-transform">▾</span>
                    </summary>
                    <div className="p-4 pt-0 bg-white border-t border-gray-100">
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </section>

          </article>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-6 self-start">

            {/* City Info Card */}
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">📍 SNGPL {city.name} Info</h3>
              <dl className="space-y-2 text-xs">
                <div><dt className="text-gray-500 font-medium">Province</dt><dd className="text-gray-800">{city.province}</dd></div>
                <div><dt className="text-gray-500 font-medium">Region</dt><dd className="text-gray-800">{city.region}</dd></div>
                <div><dt className="text-gray-500 font-medium">Division</dt><dd className="text-gray-800">{city.division}</dd></div>
                <div><dt className="text-gray-500 font-medium">Consumers</dt><dd className="text-gray-800 font-semibold text-blue-700">{city.consumers}</dd></div>
                <div><dt className="text-gray-500 font-medium">Areas Served</dt><dd className="text-gray-800">{city.areas}</dd></div>
                <div><dt className="text-gray-500 font-medium">Office</dt><dd className="text-gray-800">{city.office}</dd></div>
              </dl>
              <div className="mt-4 pt-4 border-t border-gray-100 space-y-2">
                <a href="tel:1199" className="flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800">
                  📞 1199 — SNGPL Helpline (24/7)
                </a>
                <a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-semibold text-blue-700 hover:text-blue-800">
                  🌐 selfservice.sngpl.com.pk
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="card">
              <h3 className="font-bold text-gray-900 mb-3 text-sm">🔗 Quick Links</h3>
              <div className="space-y-2">
                {[
                  { href: '/', label: '🔍 Check Bill Now', desc: 'Official portal redirect' },
                  { href: '/calculator', label: '🧮 Bill Calculator', desc: 'Estimate gas charges' },
                  { href: '/guides', label: '📚 All Guides', desc: 'Consumer resources' },
                  { href: '/bill-check', label: '📖 Bill Check Guide', desc: 'Full step-by-step guide' },
                ].map(l => (
                  <Link key={l.href} href={l.href}
                    className="flex flex-col p-3 bg-gray-50 rounded-xl hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all no-underline">
                    <span className="text-xs font-bold text-blue-700">{l.label}</span>
                    <span className="text-xs text-gray-500">{l.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            <AdUnit slot="5566778899" className="" />

            {/* Related Pages */}
            {relatedSlugs.length > 0 && (
              <div className="card">
                <h3 className="font-bold text-gray-900 mb-3 text-sm">📄 More {city.name} Guides</h3>
                <div className="space-y-1">
                  {relatedSlugs.map(rs => {
                    const rsType = rs.slice(city.slug.length + 1);
                    return (
                      <Link key={rs} href={`/sngpl/${category}/${rs}`}
                        className="block text-xs text-blue-700 hover:text-blue-900 hover:underline py-1 border-b border-gray-50 last:border-0 no-underline">
                        {city.name} — {getTypeLabel(rsType)}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

            {/* City Hub Link */}
            <div className="card bg-blue-50 border-blue-200">
              <h3 className="font-bold text-blue-900 mb-2 text-sm">🏙️ {city.name} Complete Guide</h3>
              <p className="text-xs text-blue-700 mb-3">All 5 SNGPL guide categories for {city.name} in one place.</p>
              <Link href={`/sngpl/cities/${city.slug}`}
                className="block text-center text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 py-2 rounded-lg transition-colors no-underline">
                View City Hub →
              </Link>
            </div>

          </aside>
        </div>
      </div>

      {/* ── BOTTOM INTERNAL LINKS ── */}
      <section className="bg-gray-50 border-t border-gray-200 py-10 px-4">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Cross-category same-city links */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 text-center">More {city.name} SNGPL Guides</h2>
            <p className="text-sm text-gray-500 text-center mb-6">Complete guide series for {city.name} consumers across all topics</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {crossCategoryLinks.map(l => (
                <Link key={l.cat} href={l.href}
                  className="card hover:border-blue-200 hover:shadow-md transition-all no-underline">
                  <div className="font-bold text-blue-700 text-sm mb-1">{l.label}</div>
                  <div className="text-xs text-gray-500">{city.name} guide →</div>
                </Link>
              ))}
              <Link href={`/sngpl/cities/${city.slug}`}
                className="card hover:border-blue-200 hover:shadow-md transition-all no-underline bg-blue-50 border-blue-100">
                <div className="font-bold text-blue-900 text-sm mb-1">🏙️ {city.name} Hub</div>
                <div className="text-xs text-blue-700">All 5 categories →</div>
              </Link>
            </div>
          </div>

          {/* Category browse */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-5 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { href: '/sngpl/bill-check',      icon: '🔍', label: 'Bill Check',       desc: '45 cities' },
                { href: '/sngpl/consumer-number',  icon: '🔢', label: 'Consumer No.',     desc: '45 cities' },
                { href: '/sngpl/duplicate-bill',   icon: '📄', label: 'Duplicate Bill',   desc: '45 cities' },
                { href: '/sngpl/payment',          icon: '💳', label: 'Payment',          desc: '45 cities' },
                { href: '/sngpl/troubleshooting',  icon: '⚠️', label: 'Troubleshoot',    desc: '45 cities' },
              ].map(l => (
                <Link key={l.href} href={l.href}
                  className="card hover:border-blue-200 hover:shadow-md transition-all no-underline text-center py-4">
                  <span className="text-2xl mb-2 block">{l.icon}</span>
                  <span className="text-xs font-bold text-blue-700 block">{l.label}</span>
                  <span className="text-xs text-gray-400">{l.desc}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* All Cities link */}
          <div className="text-center">
            <Link href="/sngpl/cities"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
              Browse All 44 City Guides →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
