import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CATEGORIES,
  CITIES,
  SLUG_TYPES,
  getCategoryLabel,
  getTypeLabel,
  type Category,
} from '../../../lib/seo-data';

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ category: c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) return {};
  const label = getCategoryLabel(category as Category);
  return {
    title: `SNGPL ${label} — All Cities Guide | Pakistan 2025`,
    description: `Complete SNGPL ${label.toLowerCase()} guide for all cities in Punjab, KPK, and Pakistan. Find your city and get specific, detailed information.`,
    alternates: { canonical: `https://sngplbillcheck.pk/sngpl/${category}` },
  };
}

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();

  const cat = category as Category;
  const label = getCategoryLabel(cat);
  const types = SLUG_TYPES[cat] ?? [];

  // Group cities by province
  const byProvince: Record<string, typeof CITIES> = {};
  for (const city of CITIES) {
    const prov = city.province === 'ICT' ? 'Federal (ICT)' : city.province;
    if (!byProvince[prov]) byProvince[prov] = [];
    byProvince[prov].push(city);
  }

  // Top types to feature
  const featuredTypes = types.slice(0, 12);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">{label}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL {label} — All Cities</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Detailed {label.toLowerCase()} guides for every city served by SNGPL across Punjab,
            Khyber Pakhtunkhwa, and Islamabad.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              {CITIES.length} Cities
            </span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              {types.length} Guide Types
            </span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              {CITIES.length * types.length}+ Specific Guides
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Popular Guide Types */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular {label} Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {featuredTypes.map(type => (
              <div key={type} className="bg-white border border-gray-200 rounded-xl p-3">
                <p className="text-xs font-semibold text-gray-900 mb-2">{getTypeLabel(type)}</p>
                <div className="flex flex-wrap gap-1">
                  {CITIES.slice(0, 6).map(city => (
                    <Link
                      key={city.slug}
                      href={`/sngpl/${cat}/${city.slug}-${type}`}
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <span className="text-xs text-gray-400">+{CITIES.length - 6} more</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cities by Province */}
        {Object.entries(byProvince).map(([province, cities]) => (
          <section key={province} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full block" />
              {province} — SNGPL {label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map(city => (
                <div key={city.slug} className="card hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{city.name}</h3>
                      <p className="text-xs text-gray-500">{city.division}</p>
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {city.consumers}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {types.slice(0, 5).map(type => (
                      <Link
                        key={type}
                        href={`/sngpl/${cat}/${city.slug}-${type}`}
                        className="text-xs bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-600 rounded-lg px-2 py-1 transition-colors no-underline"
                      >
                        {getTypeLabel(type)}
                      </Link>
                    ))}
                    {types.length > 5 && (
                      <span className="text-xs text-gray-400 px-2 py-1">+{types.length - 5} more</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom CTA */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center mt-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Check Your SNGPL Bill Now</h2>
          <p className="text-blue-700 text-sm mb-4">Enter your consumer number for an instant redirect to the official SNGPL portal.</p>
          <Link href="/" className="btn-primary inline-flex">
            Check Bill → Official Portal
          </Link>
        </section>

      </div>
    </>
  );
}
