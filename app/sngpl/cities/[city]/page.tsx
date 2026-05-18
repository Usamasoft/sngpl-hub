import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CITIES,
  CATEGORIES,
  SLUG_TYPES,
  getCategoryLabel,
  getTypeLabel,
  type Category,
  type CityData,
} from '../../../../lib/seo-data';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return CITIES.map(c => ({ city: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) return {};
  return {
    title: `SNGPL ${city.name} — Bill Check, Consumer Number, Payment & Guides 2025`,
    description: `Complete SNGPL guide for ${city.name} consumers. Bill check, consumer number, duplicate bill, payment methods, troubleshooting — all in one place. ${city.consumers} consumers served.`,
    alternates: { canonical: `https://sngplbillcheck.pk/sngpl/cities/${citySlug}` },
    openGraph: {
      title: `SNGPL ${city.name} Complete Consumer Guide 2025`,
      description: `Everything SNGPL consumers in ${city.name} need: bill check, consumer number, payment, troubleshooting. Serving ${city.consumers} consumers in ${city.division}.`,
      url: `https://sngplbillcheck.pk/sngpl/cities/${citySlug}`,
    },
  };
}

const categoryMeta: Record<Category, { icon: string; color: string; topTypes: string[]; desc: string }> = {
  'bill-check': {
    icon: '🔍',
    color: 'blue',
    topTypes: ['check-online', 'check-monthly-bill', 'view-current-bill', 'download-bill', 'check-via-app', 'check-via-whatsapp'],
    desc: 'View your current bill, download PDF copies, check payment status and monthly consumption.',
  },
  'consumer-number': {
    icon: '🔢',
    color: 'green',
    topTypes: ['find-consumer-number', 'locate-consumer-number', 'lost-consumer-number', 'consumer-number-format', 'consumer-number-recovery', 'consumer-number-on-bill'],
    desc: 'Find, understand, and recover your SNGPL consumer number. Essential for all digital services.',
  },
  'duplicate-bill': {
    icon: '📄',
    color: 'purple',
    topTypes: ['download-duplicate-bill', 'get-duplicate-copy', 'duplicate-bill-online', 'pdf-download', 'download-via-app', 'download-via-whatsapp'],
    desc: 'Download official duplicate gas bills via portal, app, WhatsApp, SMS, or in-person.',
  },
  'payment': {
    icon: '💳',
    color: 'orange',
    topTypes: ['pay-online', 'pay-easypaisa', 'pay-jazzcash', 'pay-hbl', 'pay-atm', 'payment-methods'],
    desc: 'Pay your gas bill through Easypaisa, JazzCash, bank apps, ATMs, or bank branch.',
  },
  'troubleshooting': {
    icon: '⚠️',
    color: 'red',
    topTypes: ['high-bill', 'wrong-amount', 'disconnection-notice', 'payment-not-reflected', 'meter-fault', 'billing-dispute'],
    desc: 'Resolve billing disputes, payment issues, disconnection notices, and meter problems.',
  },
};

const colorMap: Record<string, string> = {
  blue:   'bg-blue-50 border-blue-200 hover:border-blue-400',
  green:  'bg-green-50 border-green-200 hover:border-green-400',
  purple: 'bg-purple-50 border-purple-200 hover:border-purple-400',
  orange: 'bg-orange-50 border-orange-200 hover:border-orange-400',
  red:    'bg-red-50 border-red-200 hover:border-red-400',
};
const iconBg: Record<string, string> = {
  blue:   'bg-blue-100 text-blue-700',
  green:  'bg-green-100 text-green-700',
  purple: 'bg-purple-100 text-purple-700',
  orange: 'bg-orange-100 text-orange-700',
  red:    'bg-red-100 text-red-700',
};

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: citySlug } = await params;
  const city = CITIES.find(c => c.slug === citySlug);
  if (!city) notFound();

  const canonicalUrl = `https://sngplbillcheck.pk/sngpl/cities/${citySlug}`;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
      { '@type': 'ListItem', position: 2, name: 'City Guides', item: 'https://sngplbillcheck.pk/sngpl/cities' },
      { '@type': 'ListItem', position: 3, name: city.name, item: canonicalUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: `How do I check my SNGPL bill in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Visit sngpl.com.pk, enter your consumer number, and click "Get Bill." Your current bill, meter readings, amount due, and due date will appear instantly. You can also use the SNGPL Consumer app or send your consumer number to SNGPL's WhatsApp.` } },
      { '@type': 'Question', name: `How do I find my SNGPL consumer number in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Your consumer number is on the top of every gas bill under "Consumer No." or "Cust. No." It is also on your meter card near the gas meter. Call SNGPL helpline 1199 with your CNIC and address if you cannot find it.` } },
      { '@type': 'Question', name: `Where is the SNGPL office in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `The SNGPL Service Delivery Center for ${city.name} is located at: ${city.office}. Working hours are Monday to Friday, 9 AM to 5 PM. Call SNGPL helpline 1199 (24/7) for immediate assistance.` } },
      { '@type': 'Question', name: `How do I pay SNGPL bill online in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Pay via Easypaisa (Bill Payments → Gas → SNGPL), JazzCash (Pay Bills → Gas), HBL/UBL/MCB bank apps (Utility Bills → SNGPL), or any bank ATM (Bill Payment → Gas → SNGPL). Enter your consumer number to fetch the bill and confirm payment.` } },
      { '@type': 'Question', name: `How do I download a duplicate SNGPL bill in ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `Visit sngpl.com.pk, enter your consumer number, and click "Download PDF." The SNGPL mobile app provides access to 12 months of bill history. For a stamped physical copy, visit ${city.office}.` } },
      { '@type': 'Question', name: `What is the SNGPL helpline number for ${city.name}?`, acceptedAnswer: { '@type': 'Answer', text: `SNGPL helpline 1199 is available 24/7 for all consumers in ${city.name} and ${city.division}. Use it for billing disputes, consumer number recovery, gas emergencies, complaint registration, and service requests.` } },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center flex-wrap gap-1.5 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/sngpl/cities" className="hover:text-white">City Guides</Link>
            <span>/</span>
            <span className="text-white font-medium">{city.name}</span>
          </nav>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{city.province}</span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{city.division}</span>
            <span className="bg-green-500/20 border border-green-400/30 rounded-full px-3 py-1 text-xs font-medium text-green-200">{city.consumers} Consumers</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL {city.name} — Complete Consumer Hub</h1>
          <p className="text-blue-100 text-lg max-w-3xl leading-relaxed">
            Everything SNGPL consumers in {city.name} need: bill checking, consumer number, duplicate bills, payment guide, and troubleshooting — all in one place.
          </p>
        </div>
      </section>

      {/* ── City Info Strip ── */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <div><span className="text-gray-400 block text-xs">Province</span><span className="font-semibold text-gray-900">{city.province}</span></div>
            <div><span className="text-gray-400 block text-xs">Region</span><span className="font-semibold text-gray-900">{city.region}</span></div>
            <div><span className="text-gray-400 block text-xs">Consumers</span><span className="font-semibold text-blue-700">{city.consumers}</span></div>
            <div><span className="text-gray-400 block text-xs">Helpline</span><a href="tel:1199" className="font-bold text-blue-600">1199 (24/7)</a></div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* ── Category Guide Clusters ── */}
        <section className="mb-14">
          <h2 className="text-2xl font-black text-gray-900 mb-2">Complete SNGPL Guide for {city.name}</h2>
          <p className="text-gray-500 mb-8 text-sm">Select a guide category below for detailed, {city.name}-specific instructions.</p>

          <div className="space-y-6">
            {CATEGORIES.map(cat => {
              const meta = categoryMeta[cat];
              return (
                <div key={cat} className={`rounded-2xl border-2 p-6 transition-all ${colorMap[meta.color]}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${iconBg[meta.color]}`}>
                      {meta.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="font-bold text-gray-900 text-lg">{getCategoryLabel(cat)}</h3>
                        <Link
                          href={`/sngpl/${cat}`}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          View All →
                        </Link>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{meta.desc}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {meta.topTypes.map(type => (
                      <Link
                        key={type}
                        href={`/sngpl/${cat}/${city.slug}-${type}`}
                        className="bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50 rounded-xl px-3 py-2 text-xs font-medium text-gray-700 hover:text-blue-700 transition-all no-underline block"
                      >
                        {getTypeLabel(type)}
                      </Link>
                    ))}
                    <Link
                      href={`/sngpl/${cat}`}
                      className="bg-white border border-dashed border-gray-300 hover:border-blue-400 rounded-xl px-3 py-2 text-xs font-medium text-gray-400 hover:text-blue-600 transition-all no-underline flex items-center justify-center"
                    >
                      + More guides
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── SNGPL Office Info ── */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-5">SNGPL {city.name} Office & Contact</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Service Delivery Center</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">{city.office}</p>
              <p className="text-gray-500 text-xs">Working Hours: Monday–Friday, 9:00 AM – 5:00 PM</p>
              <div className="mt-4 space-y-2">
                <a href="tel:1199" className="flex items-center gap-2 text-sm font-bold text-blue-700">📞 1199 — SNGPL Helpline (24/7)</a>
                <a href="https://selfservice.sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">🌐 selfservice.sngpl.com.pk</a>
                <a href="https://sngpl.com.pk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline">🔍 sngpl.com.pk</a>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-3 text-sm">Areas Served in {city.name}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{city.areas}</p>
              <div className="mt-4 p-3 bg-blue-50 rounded-xl">
                <p className="text-xs text-blue-800 font-semibold mb-1">Quick Emergency Contact</p>
                <p className="text-xs text-blue-700">For gas leakage or emergency: Call 1199 immediately, evacuate premises, do not use electrical switches.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Comprehensive City Content ── */}
        <section className="mb-14 prose-content">
          <h2>SNGPL Gas Service in {city.name} — Consumer Guide</h2>

          <p>Sui Northern Gas Pipelines Limited (SNGPL) serves {city.consumers} consumers in {city.name} and the surrounding {city.division} area. {city.name} is one of the key cities in SNGPL's {city.region} service territory, with distribution infrastructure covering {city.areas}. The local Service Delivery Center at {city.office} manages all consumer services for the city, from new connection applications to billing disputes and meter replacements.</p>

          <p>As an SNGPL consumer in {city.name}, you have access to a comprehensive range of digital services that allow you to manage your gas account entirely online — from checking your monthly bill and downloading duplicate copies to making payments and registering complaints. This guide consolidates everything you need to know about SNGPL services specific to {city.name}.</p>

          <h3>Checking Your SNGPL Bill in {city.name}</h3>
          <p>The official SNGPL bill checking portal at sngpl.com.pk gives {city.name} consumers instant access to their current gas bill. Enter your 10–13 digit consumer number (found on any printed bill) and your complete bill details appear immediately — including this month's meter readings, HHM consumed, slab-wise charges, GIDC, GST, total amount due, and payment due date. The portal is available 24/7 and requires no registration.</p>
          <p>The SNGPL Consumer mobile app (available on Google Play and App Store) provides an even more comprehensive bill management experience for {city.name} consumers, including up to 12 months of billing history, push notifications when new bills are generated, and direct payment integration. After registering with your consumer number and mobile OTP, your {city.name} account is permanently accessible through the app.</p>

          <h3>Consumer Number Guide for {city.name}</h3>
          <p>Your SNGPL consumer number is the foundational identifier for your {city.name} gas account. This 10–13 digit number is required for every digital service — bill checking, online payment, complaint registration, and mobile app registration. It appears on every printed gas bill in the top section labeled "Consumer No." or "Cust. No." and is also printed on the meter card near your gas meter installation.</p>
          <p>If you have lost your consumer number, {city.name} consumers have several recovery options: call SNGPL helpline 1199 with your CNIC and complete connection address, visit {city.office} in person with your CNIC, check old Easypaisa or JazzCash payment receipts (which reference the consumer number used), or review old emails from SNGPL if you are on e-billing.</p>

          <h3>Duplicate Bill Download for {city.name} Consumers</h3>
          <p>Lost or never received your SNGPL gas bill in {city.name}? A duplicate bill is available instantly through the official portal — no need to visit the SNGPL office. Simply enter your consumer number on sngpl.com.pk and click "Download PDF." The downloaded PDF is legally equivalent to the original posted bill and is accepted for bank payments, address verification (bank account opening, CNIC renewal, visa applications), and all other official purposes.</p>
          <p>SNGPL's postal delivery of original bills can be unreliable in some parts of {city.name}, particularly in densely populated areas like {city.areas}. Making it a habit to download and archive your bill digitally each month — via the portal or mobile app — ensures you always have a copy regardless of postal reliability.</p>

          <h3>Paying Your SNGPL Bill in {city.name}</h3>
          <p>SNGPL gas bill payment in {city.name} is available through multiple convenient channels. Easypaisa (Bill Payments → Gas → SNGPL → enter consumer number) and JazzCash (Pay Bills → Gas → SNGPL) are the most widely used methods, both available on smartphones and basic phones (via *786# USSD). All major banks in {city.name} — HBL, UBL, MCB, Meezan Bank, Allied Bank, Bank Alfalah — support SNGPL payment through their mobile apps and internet banking portals under "Utility Bills → Gas → SNGPL."</p>
          <p>For consumers in {city.name} who prefer in-person payment, any bank branch ATM or counter accepts SNGPL bill payments. SNGPL-authorized franchise outlets in {city.name} also accept cash payments without any surcharge. Always pay before the due date printed on your bill to avoid the 10% late payment surcharge. After paying digitally, wait 24–48 hours and verify on sngpl.com.pk that your payment has reflected before assuming the transaction is complete.</p>

          <h3>Troubleshooting SNGPL Issues in {city.name}</h3>
          <p>The most common SNGPL issues reported by {city.name} consumers include: unexpectedly high bill amounts (typically caused by winter heating demand pushing consumption into higher tariff slabs, or estimated readings that overestimated actual usage), payment not reflecting on the portal (digital payments take 24–48 hours to process; call 1199 with your transaction ID if not reflected after 48 hours), and gas supply interruptions (call 1199 for area-wide outages or check SNGPL's social media for announcements).</p>
          <p>For billing disputes in {city.name}, the most effective approach is: (1) verify your meter reading against the billed reading, (2) calculate your expected bill using the slab tariff (or our free calculator), (3) if there is a discrepancy, call 1199 or register a complaint at selfservice.sngpl.com.pk with your consumer number, bill copy, and meter photo. SNGPL is required to investigate and respond within 14 working days under OGRA's service quality standards. If unsatisfied with the resolution, escalate to OGRA at ogra.org.pk.</p>

          <h3>Understanding Your {city.name} SNGPL Bill Structure</h3>
          <p>Your SNGPL gas bill is a detailed statement of consumption and charges. Understanding each component helps verify accuracy. The gas consumption charge uses SNGPL's progressive slab tariff — the first 100 HHM (Hundred Cubic Meters) is billed at a flat Rs. 200. Consumption between 101–300 HHM is charged at Rs. 130 per HHM. The 301–500 HHM band costs Rs. 150/HHM. Above 500 HHM, rates escalate further through higher slabs. These rates apply uniformly across all of SNGPL's service territory including {city.name}.</p>
          <p>On top of the gas consumption amount, GIDC (Gas Infrastructure Development Cess) of 10% is added. Then GST (General Sales Tax) of 17% is applied to the combined gas charges and GIDC. Fixed monthly charges (covering meter maintenance and infrastructure) also appear as a separate line item. Any arrears from previous billing periods are added, and any advance payment credit is deducted. The result is your total payable amount for the month.</p>

          <h3>SNGPL Service Standards for {city.name}</h3>
          <p>OGRA (the Oil and Gas Regulatory Authority) sets mandatory service quality benchmarks that SNGPL must meet across all cities including {city.name}. Key standards include: meter reading complaints resolved within 14 working days, new connection installations completed within 60 days of demand notice payment, meter inspection requests fulfilled within 14 working days, 24/7 emergency response availability for gas leakage and safety emergencies, and minimum gas pressure maintained in distribution mains during normal supply hours.</p>
          <p>If SNGPL fails to meet these standards in {city.name}, you have the right to escalate directly to OGRA without additional approval from SNGPL. OGRA's consumer complaint portal at ogra.org.pk accepts complaints with a formal acknowledgment within 5 working days and mandatory resolution or escalation within 30 working days. SNGPL's compliance with OGRA standards is regularly audited, giving {city.name} consumers meaningful regulatory protection.</p>
        </section>

        {/* ── FAQ ── */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions — SNGPL {city.name}</h2>
          <div className="space-y-3">
            {[
              { q: `How do I check my SNGPL bill in ${city.name}?`, a: `Visit sngpl.com.pk, enter your 10–13 digit consumer number, and click "Get Bill." Your current bill details appear immediately — no registration required.` },
              { q: `What is my SNGPL consumer number and where is it?`, a: `Your consumer number is on the top of every gas bill under "Consumer No." or "Cust. No." Also on your meter card. Call 1199 with your CNIC to recover it if lost.` },
              { q: `How do I pay my SNGPL ${city.name} bill online?`, a: `Open Easypaisa → Bill Payments → Gas → SNGPL → enter consumer number. Or JazzCash → Pay Bills → Gas → SNGPL. Or your bank app (HBL, UBL, MCB) → Utility Bills → SNGPL.` },
              { q: `Where is the SNGPL office in ${city.name}?`, a: `${city.office}. Working hours: Monday–Friday, 9 AM–5 PM. Call 1199 (24/7) for remote assistance.` },
              { q: `How do I download a duplicate SNGPL bill in ${city.name}?`, a: `Visit sngpl.com.pk, enter your consumer number, and click "Download PDF." Free and instant — no registration needed.` },
              { q: `My SNGPL bill is very high this month in ${city.name}. Why?`, a: `Common reasons: winter heating increased consumption into higher tariff slabs, an estimated reading was used that overestimated usage, or arrears from a previous month were added. Compare your meter reading to the billed reading — if different, call 1199.` },
            ].map((faq, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{faq.q}</span>
                  <span className="flex-shrink-0 text-blue-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="p-4 pt-0 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ── Other Cities ── */}
        <section className="mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Other SNGPL City Guides</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
            {CITIES.filter(c => c.slug !== citySlug).slice(0, 16).map(c => (
              <Link
                key={c.slug}
                href={`/sngpl/cities/${c.slug}`}
                className="block p-3 bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-xl transition-all no-underline"
              >
                <div className="font-semibold text-gray-900 text-xs">{c.name}</div>
                <div className="text-[11px] text-gray-400 mt-0.5">{c.province}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="bg-blue-600 rounded-2xl p-6 md:p-8 text-white text-center">
          <h2 className="text-xl font-black mb-2">Check Your {city.name} SNGPL Bill Now</h2>
          <p className="text-blue-100 text-sm mb-4">Instant redirect to official SNGPL portal. Free — no registration needed.</p>
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-sm">
            Check Bill Now →
          </Link>
        </div>

      </div>
    </>
  );
}
