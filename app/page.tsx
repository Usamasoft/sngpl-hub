import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from './components/BillChecker';

export const metadata: Metadata = {
  title: 'SNGPL Bill Check Online | Pakistan Gas Bill Hub — Free Tool',
  description: 'Check SNGPL gas bill online instantly. Enter consumer number for official portal redirect. Duplicate bill, payment guide & calculator. Free — no login.',
  alternates: { canonical: 'https://sngplbillcheck.pk' },
  openGraph: {
    title: 'SNGPL Bill Check Online | Pakistan Gas Bill Hub',
    description: 'Check SNGPL gas bill online instantly. Consumer number guide, duplicate bill, payment methods & calculator. 100% free Pakistan gas utility resource.',
    url: 'https://sngplbillcheck.pk',
    siteName: 'SNGPL Bill Check Hub',
    locale: 'en_PK',
    type: 'website',
  },
};

/* ─── DATA ──────────────────────────────────────────────────────────────── */

const quickCards = [
  { href: '/bill-check',      icon: '🔍', title: 'Bill Check Guide',     desc: 'Step-by-step guide to check your SNGPL gas bill online using your consumer number',  badge: 'Popular',   bc: 'bg-blue-100 text-blue-700' },
  { href: '/consumer-number', icon: '🔢', title: 'Consumer Number Help',  desc: 'Find, recover, and understand your SNGPL consumer number format and usage',           badge: 'Essential', bc: 'bg-green-100 text-green-700' },
  { href: '/duplicate-bill',  icon: '📄', title: 'Duplicate Bill',        desc: 'Download a duplicate SNGPL gas bill via portal, app, WhatsApp, or SMS instantly',    badge: 'Guide',     bc: 'bg-purple-100 text-purple-700' },
  { href: '/payment-guide',   icon: '💳', title: 'Payment Guide',         desc: 'Pay SNGPL bill via Easypaisa, JazzCash, HBL, ATM, or bank branch — full guide',      badge: 'How-To',    bc: 'bg-orange-100 text-orange-700' },
  { href: '/calculator',      icon: '🧮', title: 'Gas Bill Calculator',   desc: 'Estimate your SNGPL bill using HHM units and current OGRA-approved slab rates',       badge: 'Tool',      bc: 'bg-yellow-100 text-yellow-700' },
  { href: '/guides',          icon: '📚', title: 'All Guides',            desc: 'Complete library of SNGPL consumer guides, troubleshooting, and bill explanations',    badge: 'Resource',  bc: 'bg-red-100 text-red-700' },
];

const steps = [
  { n: '01', title: 'Find Consumer Number', desc: 'Locate your 10–13 digit SNGPL consumer number on the top of your printed gas bill or on your meter card.' },
  { n: '02', title: 'Enter the Number',     desc: 'Type your consumer number in the checker above — no login, no registration, nothing else required.' },
  { n: '03', title: 'Click Check Bill',     desc: 'Press the button and get instantly redirected to the official SNGPL portal with your consumer number pre-filled.' },
];

const slabRates = [
  { slab: '1', range: '0 – 100 HHM',     rate: 'Flat Rs. 200/month',  note: 'Minimum bill — lowest-use households' },
  { slab: '2', range: '101 – 300 HHM',   rate: 'Rs. 130 per HHM',    note: 'Light to moderate domestic usage' },
  { slab: '3', range: '301 – 500 HHM',   rate: 'Rs. 150 per HHM',    note: 'Moderate — geyser + cooking' },
  { slab: '4', range: '501 – 800 HHM',   rate: 'Rs. 170 per HHM',    note: 'Above-average — heating included' },
  { slab: '5', range: '801 – 1,200 HHM', rate: 'Rs. 200 per HHM',    note: 'High usage — large households' },
  { slab: '6', range: 'Above 1,200 HHM', rate: 'Rs. 250 per HHM',    note: 'Very high — commercial-level usage' },
];

const paymentMethods = [
  { icon: '📱', name: 'Easypaisa',       desc: 'Bill Payments → Gas → SNGPL',         steps: ['Open Easypaisa app', 'Tap Bill Payments', 'Select Gas → SNGPL', 'Enter consumer no.', 'Confirm & pay'] },
  { icon: '💚', name: 'JazzCash',        desc: 'Pay Bills → Gas Bills → SNGPL',        steps: ['Open JazzCash app', 'Tap Pay Bills', 'Choose Gas Bills', 'Select SNGPL', 'Enter consumer no.'] },
  { icon: '🏦', name: 'Internet Banking', desc: 'Utility Payments → SNGPL',            steps: ['Log in to HBL/UBL/MCB', 'Go to Utility Payments', 'Select Gas → SNGPL', 'Enter consumer no.', 'Pay & save receipt'] },
  { icon: '🏧', name: 'ATM',             desc: 'Other Services → Bill Payment → Gas',  steps: ['Insert card & enter PIN', 'Select Other Services', 'Choose Bill Payment', 'Select Gas → SNGPL', 'Enter consumer no.'] },
  { icon: '🏪', name: 'Bank Branch',     desc: 'Over-counter with bill or consumer no.', steps: ['Bring printed bill', 'Visit any bank branch', 'Fill payment slip', 'Submit at counter', 'Keep paid receipt'] },
  { icon: '💬', name: 'JazzCash *786#', desc: 'USSD — works without internet',         steps: ['Dial *786#', 'Select Pay Bills', 'Choose Gas', 'Enter consumer no.', 'Confirm with PIN'] },
];

const faqItems = [
  { q: 'How do I check my SNGPL gas bill online?', a: 'Visit billchecker.sngpl.com.pk, enter your 10–13 digit consumer number (printed on your bill under "Consumer No."), and click "Get Bill." Your current bill with amount due, meter readings, and due date will appear. You can also use the SNGPL Consumer mobile app (Android/iOS) or send your consumer number via WhatsApp to SNGPL\'s official number.' },
  { q: 'What is an SNGPL consumer number?', a: 'Your SNGPL consumer number is a unique 10–13 digit account identifier assigned to your gas connection. It is printed on every gas bill in the top section labeled "Consumer No." or "Cust. No." This number is required for checking bills online, making payments via Easypaisa/JazzCash, and registering complaints.' },
  { q: 'What is the SNGPL helpline number?', a: 'The SNGPL helpline number is 1199, available 24 hours a day, 7 days a week. You can call for billing inquiries, complaint registration, gas emergency reports, and consumer number recovery. SNGPL\'s online self-service portal is at selfservice.sngpl.com.pk.' },
  { q: 'How do I pay my SNGPL bill online?', a: 'Pay via Easypaisa (Bill Payments → Gas → SNGPL), JazzCash (Pay Bills → Gas), HBL/UBL/MCB internet banking (Utility Payments → SNGPL), or any ATM (Bill Payment → Gas → SNGPL). Enter your consumer number to fetch your bill amount and confirm payment. JazzCash USSD *786# works on basic phones without internet.' },
  { q: 'How do I download a duplicate SNGPL bill?', a: 'Visit billchecker.sngpl.com.pk, enter your consumer number, and click "Download PDF" on the results page. Alternatively, use the SNGPL Consumer mobile app (stores 12 months of bills) or contact SNGPL helpline 1199. A duplicate bill is equally valid for bank payments and address verification.' },
  { q: 'What is HHM in SNGPL gas bill?', a: 'HHM stands for Hundred Heat Meter — the unit SNGPL uses to measure natural gas consumption. One HHM equals 100 cubic feet of gas. Your meter display shows cumulative HHM readings. The difference between current and previous month readings gives your HHM consumed, which is applied to SNGPL\'s slab tariff to calculate your bill.' },
  { q: 'What is GIDC on my gas bill?', a: 'GIDC is the Gas Infrastructure Development Cess — a government levy charged at 10% of your base gas consumption amount. It funds gas infrastructure development projects across Pakistan. GIDC appears as a separate line item on your SNGPL bill and is applied before the 17% GST calculation.' },
  { q: 'What happens if I miss the SNGPL payment due date?', a: 'A 10% late payment surcharge is added to your next bill for overdue payment. If the bill remains unpaid for multiple months, SNGPL may issue a disconnection notice and eventually disconnect your gas supply. After disconnection, a reconnection fee applies. Always pay by the due date printed on your bill.' },
];

const cities = [
  { city: 'Lahore',      province: 'Punjab',  href: '/sngpl/bill-check/lahore-check-online' },
  { city: 'Islamabad',   province: 'Capital', href: '/sngpl/bill-check/islamabad-check-online' },
  { city: 'Rawalpindi',  province: 'Punjab',  href: '/sngpl/bill-check/rawalpindi-check-online' },
  { city: 'Faisalabad',  province: 'Punjab',  href: '/sngpl/bill-check/faisalabad-check-online' },
  { city: 'Peshawar',    province: 'KPK',     href: '/sngpl/bill-check/peshawar-check-online' },
  { city: 'Gujranwala',  province: 'Punjab',  href: '/sngpl/bill-check/gujranwala-check-online' },
  { city: 'Sialkot',     province: 'Punjab',  href: '/sngpl/bill-check/sialkot-check-online' },
  { city: 'Multan',      province: 'Punjab',  href: '/sngpl/bill-check/multan-check-online' },
  { city: 'Abbottabad',  province: 'KPK',     href: '/sngpl/bill-check/abbottabad-check-online' },
  { city: 'Sargodha',    province: 'Punjab',  href: '/sngpl/bill-check/sargodha-check-online' },
  { city: 'Bahawalpur',  province: 'Punjab',  href: '/sngpl/bill-check/bahawalpur-check-online' },
  { city: 'Mardan',      province: 'KPK',     href: '/sngpl/bill-check/mardan-check-online' },
  { city: 'Gujrat',      province: 'Punjab',  href: '/sngpl/bill-check/gujrat-check-online' },
  { city: 'Sheikhupura', province: 'Punjab',  href: '/sngpl/bill-check/sheikhupura-check-online' },
  { city: 'Sahiwal',     province: 'Punjab',  href: '/sngpl/bill-check/sahiwal-check-online' },
  { city: 'Nowshera',    province: 'KPK',     href: '/sngpl/bill-check/nowshera-check-online' },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'SNGPL Bill Check Hub',
        url: 'https://sngplbillcheck.pk',
        description: 'Pakistan SNGPL gas bill checker, guides, calculator and consumer help.',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://sngplbillcheck.pk/?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }) }} />

      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden py-14 md:py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-blue-400/10 rounded-full animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center">

            {/* Left — text */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-1.5 text-sm font-medium mb-5 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Free · Official Redirect · No Data Stored
              </div>
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-black leading-tight mb-4">
                Check Your SNGPL Gas Bill{' '}
                <span className="text-yellow-300">Online Instantly</span>
              </h1>
              <p className="text-blue-100 text-base md:text-lg mb-6 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Enter your consumer number and get redirected straight to the official SNGPL portal — no registration, no waiting, completely free.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-7">
                <Link href="#checker"
                  className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm shadow-lg">
                  Check Bill Now ↓
                </Link>
                <Link href="/guides"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm">
                  📚 View All Guides
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-blue-100">
                {['Official Portal Redirect', 'No Registration', 'Completely Free'].map(t => (
                  <span key={t} className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — BillChecker */}
            <div>
              <BillChecker />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ TRUST BAR ══════════════════════ */}
      <div className="bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/20">
            {[
              { v: '7M+',  l: 'SNGPL Consumers' },
              { v: '100%', l: 'Official Redirects' },
              { v: '24/7', l: 'Always Available' },
              { v: 'Free', l: 'No Registration' },
            ].map(s => (
              <div key={s.l} className="text-center py-4 px-2">
                <div className="text-xl font-black text-yellow-300">{s.v}</div>
                <div className="text-[11px] text-blue-200 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════ HOW IT WORKS ══════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-blue-100 text-blue-700 mb-3">Simple Process</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How to Check SNGPL Bill Online</h2>
            <p className="text-gray-500 mt-2 text-sm">Takes less than 30 seconds — no account needed</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="card text-center group hover:scale-105 transition-transform overflow-visible">
                {i < 2 && (
                  <div className="hidden sm:flex absolute -right-3 top-9 z-10 items-center justify-center">
                    <svg className="w-6 h-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </div>
                )}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl flex items-center justify-center mx-auto mb-4 text-lg font-black shadow-lg">
                  {s.n}
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ QUICK ACCESS CARDS ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-purple-100 text-purple-700 mb-3">Guides &amp; Tools</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Complete SNGPL Resource Hub</h2>
            <p className="text-gray-500 mt-2 text-sm">Everything you need to manage your SNGPL gas account</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickCards.map(l => (
              <Link key={l.href} href={l.href}
                className="card group hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 no-underline">
                <span className="text-3xl mb-3 block">{l.icon}</span>
                <span className={`badge ${l.bc} mb-2`}>{l.badge}</span>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors text-base">{l.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-3">{l.desc}</p>
                <span className="flex items-center gap-1 text-blue-600 text-xs font-semibold">
                  Read Guide <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ SLAB RATE TABLE ══════════════════════ */}
      <section className="section-pad bg-white" id="slab-rates">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-blue-100 text-blue-700 mb-3">OGRA Approved</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">SNGPL Gas Tariff Slab Rates 2025</h2>
            <p className="text-gray-500 mt-2 text-sm">Domestic consumer rates — GIDC (10%) and GST (17%) are charged on top of these base rates</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Slab</th>
                  <th className="px-4 py-3 text-left font-semibold">Consumption Range</th>
                  <th className="px-4 py-3 text-left font-semibold">Rate (before taxes)</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Usage Type</th>
                </tr>
              </thead>
              <tbody>
                {slabRates.map((r, i) => (
                  <tr key={r.slab} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100 hover:bg-blue-50 transition-colors`}>
                    <td className="px-4 py-3 font-bold text-blue-700">{r.slab}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{r.range}</td>
                    <td className="px-4 py-3 text-gray-700">{r.rate}</td>
                    <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <div className="flex-1 bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800">
              <strong>Cumulative slabs:</strong> A consumer using 400 HHM pays Slab 1 rate for 0–100 HHM, Slab 2 rate for 101–300 HHM, and Slab 3 rate for 301–400 HHM. Use our calculator for exact figures.
            </div>
            <Link href="/calculator"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition-colors text-sm whitespace-nowrap">
              🧮 Calculate My Bill
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SEO CONTENT A ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="badge bg-blue-100 text-blue-700 mb-3">About SNGPL</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">What is SNGPL?</h2>
          </div>
          <div className="prose-content">
            <p>Sui Northern Gas Pipelines Limited (SNGPL) is Pakistan&apos;s largest natural gas utility, serving over 7 million consumers across Punjab, KPK, and Azad Kashmir. Every consumer receives a monthly bill showing HHM consumption, slab-based gas charges, GIDC (10%), and GST (17%).</p>
            <p>You can check your SNGPL bill online via <strong>billchecker.sngpl.com.pk</strong>, the SNGPL mobile app (Android/iOS), WhatsApp, or SMS — each method takes under a minute and only requires your consumer number.</p>
            <p className="mt-2">
              <Link href="/bill-check" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-800">
                Read the complete bill-check guide — all 4 methods explained →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PAYMENT METHODS ══════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-green-100 text-green-700 mb-3">6 Easy Methods</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">How to Pay Your SNGPL Gas Bill</h2>
            <p className="text-gray-500 mt-2 text-sm">Online, via app, ATM, or bank branch — choose what suits you</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {paymentMethods.map(m => (
              <div key={m.name} className="card hover:border-green-200 hover:shadow-md transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{m.name}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{m.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/payment-guide"
              className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-7 py-3 rounded-xl hover:bg-green-700 transition-colors text-sm">
              View Complete Payment Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ SEO CONTENT B ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <span className="badge bg-purple-100 text-purple-700 mb-3">Consumer Guides</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Essential SNGPL Consumer Information</h2>
          </div>
          <div className="space-y-5">

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">SNGPL Consumer Number</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Your 10–13 digit consumer number is the single most important identifier for your gas account — required for bill checks, payments, and complaints. It appears on every printed bill under &ldquo;Consumer No.&rdquo; Lost it? Call 1199 with your CNIC or check Easypaisa/JazzCash payment history.</p>
              <Link href="/consumer-number" className="text-blue-600 text-sm font-semibold hover:text-blue-800">Complete consumer number guide →</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Duplicate SNGPL Bill</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Need a copy of your gas bill? Download instantly from billchecker.sngpl.com.pk or the SNGPL app (12-month history). A duplicate PDF is accepted by all banks, ATMs, and payment apps — no stamp needed for payments.</p>
              <Link href="/duplicate-bill" className="text-blue-600 text-sm font-semibold hover:text-blue-800">Download duplicate bill guide →</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Billing Problems &amp; Troubleshooting</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">High bill? Estimated reading? Payment not reflecting? Gas disconnected? Each issue has a structured resolution path — from self-checking your meter to filing with OGRA if needed.</p>
              <Link href="/guides" className="text-blue-600 text-sm font-semibold hover:text-blue-800">See full troubleshooting guide →</Link>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">7 Ways to Reduce Your Gas Bill</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">Insulate your home, upgrade to an instant geyser, use pressure cookers, fix gas line leaks, service appliances annually, set the geyser to 50–55°C, and read your meter monthly to catch billing errors early.</p>
              <Link href="/guides" className="text-blue-600 text-sm font-semibold hover:text-blue-800">View all energy-saving guides →</Link>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════ CITY GUIDES ══════════════════════ */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-blue-100 text-blue-700 mb-3">City Guides</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">SNGPL Bill Check by City</h2>
            <p className="text-gray-500 mt-2 text-sm">Select your city for a dedicated SNGPL guide</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {cities.map(c => (
              <Link key={c.city} href={c.href}
                className="flex items-center justify-between p-3.5 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all group no-underline">
                <div>
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">{c.city}</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">{c.province}</div>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-blue-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/sngpl/bill-check"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
              View all 45 city bill-check guides →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════ FAQ ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-green-100 text-green-700 mb-3">FAQ</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="text-gray-500 mt-2 text-sm">Quick answers to the most common SNGPL consumer questions</p>
          </div>
          <div className="space-y-3">
            {faqItems.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-gray-50 transition-colors select-none">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                  <span className="flex-shrink-0 text-blue-500 group-open:rotate-180 transition-transform duration-200 text-lg leading-none">▾</span>
                </summary>
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════ STATS + CTA ══════════════════════ */}
      <section className="section-pad bg-white" id="cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-black mb-3">Ready to Check Your SNGPL Bill?</h2>
            <p className="text-blue-100 mb-6 text-base max-w-lg mx-auto">
              Enter your consumer number above or go directly to the official SNGPL portal — free, instant, and 100% safe.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="#checker" className="bg-white text-blue-700 font-bold px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors">
                Check Bill Now
              </Link>
              <a href="https://billchecker.sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all">
                Official SNGPL Portal ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════ PROGRAMMATIC PAGES GRID ══════════════════════ */}
      <section className="section-pad bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="badge bg-blue-100 text-blue-700 mb-3">10,000+ Guides</span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">SNGPL Guide Categories</h2>
            <p className="text-gray-500 mt-2 text-sm">Comprehensive guides organized by topic — covering all 45 SNGPL cities</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { href: '/sngpl/bill-check',      icon: '🔍', label: 'Bill Check',       count: '45 cities' },
              { href: '/sngpl/consumer-number',  icon: '🔢', label: 'Consumer Number',  count: '45 cities' },
              { href: '/sngpl/duplicate-bill',   icon: '📄', label: 'Duplicate Bill',   count: '45 cities' },
              { href: '/sngpl/payment',          icon: '💳', label: 'Payment Guides',   count: '45 cities' },
              { href: '/sngpl/troubleshooting',  icon: '⚠️', label: 'Troubleshooting', count: '45 cities' },
            ].map(l => (
              <Link key={l.href} href={l.href}
                className="card text-center hover:border-blue-200 hover:shadow-md transition-all no-underline">
                <div className="text-2xl mb-2">{l.icon}</div>
                <div className="font-bold text-blue-700 text-sm mb-1">{l.label}</div>
                <div className="text-xs text-gray-400">{l.count}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
