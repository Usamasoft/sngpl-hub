import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What is HHM in SNGPL Gas Bill? Complete Guide 2026 — HHM, GCV & Meter Readings',
  description: 'HHM (Hundred Heat Meter) is how SNGPL measures gas consumption. Learn how to read your meter, calculate HHM consumed, understand GCV, and estimate your bill. Free guide.',
  alternates: { canonical: 'https://sngplbillcheck.pk/hhm-explained' },
  openGraph: {
    title: 'What is HHM in SNGPL Gas Bill? Complete HHM Guide 2026',
    description: 'Comprehensive reference guide to HHM, GCV, gas meter readings, and SNGPL bill calculation. Learn what HHM means and how your gas bill is calculated.',
    url: 'https://sngplbillcheck.pk/hhm-explained',
    siteName: 'SNGPL Bill Check Hub',
  },
};

const faqItems = [
  { q: 'What does HHM stand for in SNGPL gas bill?', a: 'HHM stands for Hundred Heat Meter — the unit SNGPL uses to measure natural gas consumption. One HHM equals 100 cubic feet of natural gas. Your meter displays cumulative HHM readings and the difference between two consecutive readings gives your monthly consumption in HHM.' },
  { q: 'What is GCV in natural gas measurement?', a: 'GCV stands for Gross Calorific Value — the amount of heat energy released when one unit of gas is completely burned. SNGPL uses GCV to convert the volume of gas consumed (in cubic feet) into HHM units. The GCV of natural gas in Pakistan is approximately 1,000 BTU per cubic foot, making 100 cubic feet = 1 HHM.' },
  { q: 'How do I calculate HHM consumed from my meter reading?', a: 'Subtract last month\'s meter reading from this month\'s reading. The difference is your HHM consumed. For example, if your meter showed 1,250 last month and 1,390 this month, you consumed 140 HHM this billing period.' },
  { q: 'Why does my SNGPL bill show a different HHM than I calculated?', a: 'Differences may occur because SNGPL sometimes uses an estimated reading (marked "E" on the bill) instead of an actual meter reading. If you suspect an error, take a meter photograph, compare it with the bill reading, and call 1199 to request a meter inspection.' },
  { q: 'How many HHM does a gas geyser use per month?', a: 'A standard gas storage geyser uses approximately 40–80 HHM per month in winter, depending on usage. An instant geyser uses 25–50 HHM per month. A gas room heater uses 60–150 HHM per month depending on size and hours of use.' },
  { q: 'What is the difference between HHM and cubic meters?', a: 'SNGPL bills in HHM (Hundred cubic feet), not cubic meters. One cubic meter = approximately 3.28 cubic feet. So one HHM (100 cubic feet) ≈ 30.5 cubic meters. When comparing gas costs internationally, note this unit difference.' },
  { q: 'How accurate are SNGPL gas meters?', a: 'SNGPL gas meters are required to meet OGRA accuracy standards. Meters must be tested periodically and replaced if found to be outside the ±2% accuracy range. If you suspect your meter is running fast, request a meter inspection through selfservice.sngpl.com.pk or by calling 1199.' },
];

const applianceData = [
  { appliance: 'Gas Stove (4 burners, daily cooking)', winter: '25–40', summer: '20–30', notes: 'Average household cooking 2–3 meals/day' },
  { appliance: 'Storage Geyser (40-gallon)', winter: '60–100', summer: '20–40', notes: 'Higher in winter due to cold water inlet temp' },
  { appliance: 'Instant/Instantaneous Geyser', winter: '40–70', summer: '15–30', notes: 'More efficient than storage type' },
  { appliance: 'Gas Room Heater (small, 1–2 rooms)', winter: '80–150', summer: '0', notes: 'Depends on hours of use per day' },
  { appliance: 'Gas Floor Heater / Bukhari', winter: '100–200', summer: '0', notes: 'Very high consumption; main winter driver' },
  { appliance: 'Gas Tandoor / Roti Naan', winter: '30–60', summer: '25–50', notes: 'Used for bread baking in households/bakeries' },
  { appliance: 'Clothes Iron (gas-heated)', winter: '10–20', summer: '8–15', notes: 'Low consumption appliance' },
];

export default function HHMExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'What is HHM in SNGPL Gas Bill? Complete Guide to HHM, GCV & Meter Readings',
        description: 'Comprehensive reference guide to understanding HHM, GCV, gas meter readings, and how SNGPL calculates your monthly gas bill.',
        url: 'https://sngplbillcheck.pk/hhm-explained',
        datePublished: '2026-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        publisher: { '@type': 'Organization', name: 'SNGPL Bill Check Hub', url: 'https://sngplbillcheck.pk' },
        about: { '@type': 'Thing', name: 'SNGPL HHM Gas Measurement' },
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'HHM & Meter Reading Guide', item: 'https://sngplbillcheck.pk/hhm-explained' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-white">Guides</Link>
            <span>/</span>
            <span className="text-white">HHM Explained</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            📊 Reference Guide · Updated 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            What is HHM in SNGPL Gas Bill?<br />
            <span className="text-yellow-300">Complete HHM & GCV Reference Guide</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            HHM (Hundred Heat Meter) is the unit SNGPL uses to measure your gas consumption. This guide explains exactly what HHM means, how your meter works, what GCV is, how to calculate your bill, and how much each appliance consumes.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose-content">

          <h2>What Does HHM Stand For?</h2>
          <p>HHM stands for <strong>Hundred Heat Meter</strong> — specifically, it represents the measurement of 100 cubic feet of natural gas. SNGPL uses HHM as the billing unit because it conveniently scales gas consumption into manageable numbers for monthly billing. One HHM equals exactly 100 cubic feet of natural gas at standard temperature and pressure.</p>

          <p>Your gas meter constantly records the cumulative total of gas used since installation, displayed in HHM on the meter dial. Each month, an SNGPL meter reader records the current HHM reading and subtracts the previous month's reading to determine how much gas you consumed in that billing period. This monthly consumption figure is what appears on your bill as "Units Consumed (HHM)."</p>

          <h2>What is GCV (Gross Calorific Value)?</h2>
          <p>GCV stands for <strong>Gross Calorific Value</strong> — the amount of heat energy produced when one unit of natural gas is completely burned. In the context of SNGPL billing, GCV is the conversion factor that links the volume of gas (measured in cubic feet by your meter) to the HHM heat energy units used for tariff calculation.</p>

          <p>The GCV of Pakistan's natural gas varies slightly by region and source (domestic wellhead gas vs. imported LNG), but SNGPL uses a standardised GCV for billing purposes. The current GCV used for billing is published by OGRA (Oil and Gas Regulatory Authority) and is applied uniformly across all SNGPL service areas — from Lahore to Peshawar to Islamabad and all other cities in the SNGPL network.</p>

          <p>In practical terms: if the GCV-adjusted calculation yields exactly 100 cubic feet = 1 HHM, then your meter reading difference directly equals your HHM consumption. Small GCV adjustments may appear as a correction factor on some bills — this is normal and represents seasonal or supply-source variation in gas energy content.</p>

          <h2>How to Read Your SNGPL Gas Meter</h2>
          <p>Reading your gas meter correctly is the most reliable way to verify your SNGPL bill before payment. Here is the step-by-step process:</p>

          <p><strong>Step 1 — Locate the meter display:</strong> Your gas meter is usually installed on an external wall or in a designated meter box near the gas inlet to your property. The display shows a series of digits, often in two groups separated by a decimal point or a visual break.</p>

          <p><strong>Step 2 — Read the whole number:</strong> Read only the digits to the left of the decimal point (or the black-background digits if your meter has colour-coded dials). These represent your cumulative consumption in HHM. Do not include any red or decimal digits — those are sub-unit fractions that SNGPL does not bill for.</p>

          <p><strong>Step 3 — Record the reading:</strong> Write down the number you see. For example, if the display shows <strong>1,847</strong>, your current meter reading is 1,847 HHM.</p>

          <p><strong>Step 4 — Compare with your bill:</strong> Your SNGPL gas bill shows "Previous Reading" and "Current Reading." Subtract previous from current to get "Units Consumed." If this matches what you calculate from your physical meter (within ±2 HHM for rounding), your bill is accurate. A larger discrepancy warrants a call to SNGPL helpline 1199.</p>

          <p><strong>Tip — photograph monthly:</strong> Take a dated photograph of your meter on the 1st of each month. This creates a timestamped record that is invaluable evidence in any billing dispute.</p>

          <h2>How SNGPL Calculates Your Bill from HHM</h2>
          <p>Once your monthly HHM consumption is determined, SNGPL applies the <strong>OGRA-approved progressive slab tariff</strong> to calculate your gas charge. The slab system is <em>cumulative</em> — you pay different rates for different consumption bands, not a single rate on all units.</p>

          <p>For a domestic consumer who used <strong>350 HHM</strong> in a month:</p>
          <ul>
            <li>First 100 HHM = Flat Rs. 200 (Slab 1)</li>
            <li>Next 200 HHM (101–300) × Rs. 130 = Rs. 26,000 (Slab 2)</li>
            <li>Remaining 50 HHM (301–350) × Rs. 150 = Rs. 7,500 (Slab 3)</li>
            <li><strong>Base gas amount = Rs. 33,700</strong></li>
            <li>GIDC (10%) = Rs. 3,370</li>
            <li>GST (17%) on Rs. 37,070 = Rs. 6,302</li>
            <li><strong>Estimated total bill ≈ Rs. 43,372</strong></li>
          </ul>

          <p>Use our <Link href="/calculator">free SNGPL bill calculator</Link> to compute the exact figure for any HHM consumption level. The calculator applies current OGRA-approved slab rates and includes all government taxes.</p>

          <h2>HHM Consumption by Appliance — Reference Table</h2>
          <p>Understanding how much each gas appliance consumes in HHM per month helps you identify the primary drivers of your bill and make energy-saving decisions. The table below provides estimated ranges for common domestic gas appliances in Pakistan:</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Appliance</th>
                  <th className="px-4 py-3 text-left font-semibold">Winter (HHM/mo)</th>
                  <th className="px-4 py-3 text-left font-semibold">Summer (HHM/mo)</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {applianceData.map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                    <td className="px-4 py-3 font-medium text-gray-900 text-xs sm:text-sm">{row.appliance}</td>
                    <td className="px-4 py-3 text-blue-700 font-semibold">{row.winter}</td>
                    <td className="px-4 py-3 text-gray-700">{row.summer}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-500 -mt-2 mb-6">* Estimates based on average Pakistani household usage patterns. Actual consumption varies by appliance age, maintenance, and hours of daily use.</p>

          <h2>Why Your HHM Consumption Changes Seasonally</h2>
          <p>Gas consumption in Pakistan follows a predictable seasonal pattern that directly affects your SNGPL bill amount. Understanding this pattern helps you anticipate billing changes and plan your budget.</p>

          <p><strong>Winter (November – February):</strong> This is the peak consumption period. Space heating — gas room heaters, floor heaters (bukharis), and radiant heaters — accounts for the dramatic increase in HHM consumption. A household consuming 100–150 HHM per month in summer can easily consume 400–700 HHM per month in January. The cold water inlet temperature also increases geyser consumption as the appliance works harder to raise water temperature to the thermostat setting.</p>

          <p><strong>Summer (May – August):</strong> HHM consumption drops to its annual minimum. Gas use is limited to cooking and hot water (at lower demand). Most households consuming purely for cooking and a single geyser will fall into Slab 1 or Slab 2, paying the minimum or near-minimum bill.</p>

          <p><strong>Shoulder months (March-April, September-October):</strong> Transition periods with moderate consumption as heating demand tapers off but geyser usage remains significant.</p>

          <h2>Estimated vs. Actual Meter Readings</h2>
          <p>When SNGPL's meter reader cannot access your property, they issue an <strong>estimated reading</strong> (marked "E" on your bill). Estimated readings are computer-generated based on your historical consumption pattern. While usually reasonable, an estimated reading can be significantly higher or lower than your actual consumption — particularly if your usage pattern has recently changed.</p>

          <p>If you receive an estimated bill you believe is inaccurate:</p>
          <ul>
            <li>Read your physical meter immediately and note the reading with a photograph</li>
            <li>Submit the actual reading via the SNGPL Consumer App's "Meter Reading" feature</li>
            <li>Call 1199 to report the discrepancy</li>
            <li>The correction will be applied to the next bill (the over-billed amount is deducted)</li>
          </ul>

          <p>To prevent repeated estimated readings, ensure your meter is accessible to SNGPL meter readers. If your meter is in a locked compound, inform your building guard of the typical reading days (visible on your bill as "Reading Date") and arrange access.</p>

          <h2>HHM and the OGRA Slab System — Why It Matters</h2>
          <p>The progressive slab system means that every additional HHM above 300 is charged at a higher rate than the first 100 HHM. This has significant implications for winter bills:</p>

          <p>A household consuming 200 HHM in summer (Slab 2) sees a bill of approximately Rs. 26,200 (before taxes). The same household consuming 600 HHM in winter moves into Slab 4 (Rs. 170/HHM), with a bill exceeding Rs. 87,000 before taxes — a 3× increase for 3× the consumption, with the slab escalation adding extra proportional cost.</p>

          <p>This is why accurate meter reading — not estimates — is particularly important in winter. An over-estimated reading that pushes you into Slab 4 or 5 unnecessarily can add thousands of rupees to your bill that you are legally entitled to dispute.</p>
        </article>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Frequently Asked Questions — HHM & Gas Meters</h2>
          <div className="space-y-3">
            {faqItems.map((f, i) => (
              <details key={i} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                  <span className="flex-shrink-0 text-blue-500 group-open:rotate-180 transition-transform">▾</span>
                </summary>
                <div className="px-5 pb-5 border-t border-gray-100">
                  <p className="text-gray-600 text-sm leading-relaxed pt-4">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Related SNGPL Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/calculator', label: '🧮 Gas Bill Calculator', desc: 'Calculate exact bill from HHM reading' },
              { href: '/bill-check', label: '🔍 Bill Check Guide', desc: 'Check your current bill online' },
              { href: '/sngpl-taxes-explained', label: '📊 Gas Bill Taxes Explained', desc: 'GIDC, GST & OGRA charges guide' },
              { href: '/duplicate-bill', label: '📄 Duplicate Bill Download', desc: 'Download previous bills as PDF' },
            ].map(l => (
              <Link key={l.href} href={l.href} className="flex items-start gap-3 p-3 bg-white rounded-xl hover:shadow-sm transition-shadow no-underline border border-blue-100">
                <span className="font-semibold text-blue-700 text-sm">{l.label}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
