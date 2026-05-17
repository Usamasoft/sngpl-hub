import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SNGPLChecker from './components/SNGPLChecker';
import AdUnit from './components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Gas Bill Check Online | Pakistan Gas Bill Hub',
  description: 'Check your SNGPL gas bill online instantly. Enter consumer number and get redirected to official Sui Northern Gas portal. Free guides, calculator & duplicate bill help.',
  alternates: { canonical: 'https://sngplbillcheck.pk' },
};

const features = [
  { icon: '⚡', title: 'Instant Redirect', desc: 'One click sends you directly to the official SNGPL bill portal. No delays, no confusion.' },
  { icon: '🔒', title: '100% Safe', desc: 'We never store or share your consumer number. Pure safe redirect to official portal.' },
  { icon: '🧮', title: 'Bill Calculator', desc: 'Estimate your monthly gas bill using SNGPL slab rates before the bill arrives.' },
  { icon: '📚', title: 'Expert Guides', desc: 'Detailed step-by-step guides on consumer numbers, duplicate bills, and more.' },
  { icon: '📱', title: 'Mobile Friendly', desc: 'Optimized for mobile phones — check your bill from anywhere in Pakistan.' },
  { icon: '🆓', title: 'Completely Free', desc: 'No registration, no payment, no hidden fees. 100% free utility bill service.' },
];

const quickLinks = [
  {
    href: '/sngpl-bill-check-online',
    icon: '🔍',
    title: 'SNGPL Bill Check Guide',
    desc: 'Complete step-by-step guide to check your SNGPL gas bill online with screenshots',
    badge: 'Popular',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    href: '/sngpl-consumer-number-guide',
    icon: '🔢',
    title: 'Consumer Number Guide',
    desc: 'Find your SNGPL consumer number — where it is, what it means, and how to use it',
    badge: 'Essential',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    href: '/sngpl-duplicate-bill',
    icon: '📄',
    title: 'Download Duplicate Bill',
    desc: 'How to download and print a duplicate SNGPL gas bill — online, app, and WhatsApp methods',
    badge: 'Guide',
    badgeColor: 'bg-purple-100 text-purple-700',
  },
  {
    href: '/gas-bill-calculator',
    icon: '🧮',
    title: 'Gas Bill Calculator',
    desc: 'Estimate your SNGPL gas bill using current slab rates and meter readings',
    badge: 'Tool',
    badgeColor: 'bg-orange-100 text-orange-700',
  },
];

const steps = [
  { step: '01', title: 'Find Consumer Number', desc: 'Locate your 10-digit SNGPL consumer number printed on your gas bill.' },
  { step: '02', title: 'Enter the Number', desc: 'Type it into the checker above — no login or registration needed.' },
  { step: '03', title: 'Click Check Bill', desc: 'Press the button and get instantly redirected to the official SNGPL portal.' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'WebSite',
        name: 'SNGPL Bill Check Hub', url: 'https://sngplbillcheck.pk',
        description: 'Pakistan SNGPL gas bill checker, guides, and calculator.',
        potentialAction: { '@type': 'SearchAction', target: 'https://sngplbillcheck.pk/?q={search_term_string}', 'query-input': 'required name=search_term_string' },
      }) }} />

      {/* ── HERO ── */}
      <section className="relative bg-hero-sngpl text-white overflow-hidden py-16 md:py-24">
        {/* BG decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-white/5 rounded-full" />
          <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-green-500/10 rounded-full animate-pulse-slow" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Free · Official Redirects · No Data Stored
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-5">
                Check Your SNGPL Gas Bill{' '}
                <span className="text-yellow-300">Instantly</span>
              </h1>
              <p className="text-blue-100 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Online SNGPL Bill Checking, Guides, Calculators &amp; Consumer Help — Pakistan&apos;s most complete Sui Northern Gas resource.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <Link href="#checker" className="btn-secondary bg-white text-blue-700 border-white hover:bg-blue-50 py-3.5 px-7 text-base">
                  Check Bill Now ↓
                </Link>
                <Link href="/gas-bill-calculator" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-base">
                  🧮 Calculator
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-blue-100">
                {['Official Portal Redirect', 'No Registration', 'Completely Free'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            {/* Checker widget */}
            <div className="animate-fade-in">
              <SNGPLChecker />
            </div>
          </div>
        </div>
      </section>

      <AdUnit slot="1234567890" />

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-blue-100 text-blue-700 mb-3">Simple Process</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How to Check SNGPL Bill Online</h2>
            <p className="text-gray-500 mt-2">3 steps — takes less than 30 seconds</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="relative card text-center group hover:scale-105 transition-transform">
                {i < 2 && <div className="hidden sm:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-blue-100 -translate-x-4 z-0" />}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-black shadow-lg group-hover:shadow-xl transition-shadow">
                  {s.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO IMAGE ── */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <div className="relative w-full h-56 md:h-80 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80"
            alt="Natural gas pipeline infrastructure in Pakistan — SNGPL gas network"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent flex items-center px-8 md:px-12">
            <div className="text-white max-w-md">
              <h2 className="text-2xl md:text-3xl font-black mb-2">SNGPL — Serving 7+ Million Consumers</h2>
              <p className="text-blue-100 text-sm md:text-base">Sui Northern Gas Pipelines Limited covers Punjab, KPK, and Azad Kashmir with the largest gas distribution network in Pakistan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-green-100 text-green-700 mb-3">Why Us</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Why Use SNGPL Bill Check Hub?</h2>
            <p className="text-gray-500 mt-2">Pakistan&apos;s most trusted SNGPL bill checking resource</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(f => (
              <div key={f.title} className="card hover:-translate-y-1 transition-transform duration-200">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdUnit slot="0987654321" />

      {/* ── QUICK LINKS / SEO ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="badge bg-purple-100 text-purple-700 mb-3">Guides & Tools</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Complete SNGPL Resource Hub</h2>
            <p className="text-gray-500 mt-2">Everything you need to manage your SNGPL gas bill</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {quickLinks.map(l => (
              <Link key={l.href} href={l.href}
                className="card group cursor-pointer hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <span className={`badge ${l.badgeColor} mb-2`}>{l.badge}</span>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-sm">{l.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{l.desc}</p>
                <span className="mt-3 flex items-center gap-1 text-blue-600 text-xs font-semibold">Read Guide <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT ── */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
            <div>
              <span className="badge bg-blue-100 text-blue-700 mb-3">About SNGPL</span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Pakistan&apos;s #1 SNGPL Bill Resource</h2>
              <div className="text-gray-600 space-y-3 text-base leading-relaxed">
                <p><strong>SNGPL Bill Check Hub</strong> is the most comprehensive online resource for Sui Northern Gas Pipelines Limited (SNGPL) bill management in Pakistan.</p>
                <p>Whether you need to check your current bill, download a duplicate, find your consumer number, or estimate your gas charges using our calculator — this is your one-stop resource.</p>
                <p>We follow <strong>Google AdSense policies</strong> strictly: no data scraping, no storing of personal information, only informational guides and safe official redirects.</p>
              </div>
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80"
                alt="Person checking SNGPL gas bill online on smartphone in Pakistan"
                fill className="object-cover"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { v: '7M+',  l: 'SNGPL Consumers' },
              { v: '4',    l: 'Complete Guides' },
              { v: '100%', l: 'Safe Redirects' },
              { v: '24/7', l: 'Always Available' },
            ].map(s => (
              <div key={s.l} className="text-center p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                <div className="text-2xl font-black text-blue-700">{s.v}</div>
                <div className="text-xs text-gray-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Official Portal CTA ── */}
      <section className="section-pad">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Ready to Check Your SNGPL Bill?</h2>
            <p className="text-blue-100 mb-6 text-base">Enter your consumer number above or go directly to the official SNGPL portal.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="#checker" className="btn-secondary bg-white text-blue-700 border-white py-3.5 px-8">Check Bill Now</Link>
              <a href="https://billchecker.sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all">
                Official SNGPL Portal ↗
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
