import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SNGPL Gas Bill Taxes Explained 2026 — GIDC, GST, OGRA Charges & Calculation',
  description: 'Understand every tax on your SNGPL gas bill: GIDC (10%), GST (17%), meter rent, and OGRA levies. Complete calculation guide with examples. Free reference 2026.',
  alternates: { canonical: 'https://sngplbillcheck.pk/sngpl-taxes-explained' },
  openGraph: {
    title: 'SNGPL Gas Bill Taxes Explained 2026 — GIDC, GST & All Charges',
    description: 'Comprehensive breakdown of every charge on your SNGPL gas bill — GIDC, GST, meter rent, OGRA regulation, and how tariff revisions happen.',
    url: 'https://sngplbillcheck.pk/sngpl-taxes-explained',
    siteName: 'SNGPL Bill Check Hub',
  },
};

const faqItems = [
  { q: 'What is GIDC on SNGPL gas bill?', a: 'GIDC stands for Gas Infrastructure Development Cess — a government levy charged at 10% of your base gas consumption amount. It was introduced under the Gas Infrastructure Development Cess Act, 2011, and funds gas pipeline expansion, LNG terminal development, and gas infrastructure projects across Pakistan. GIDC is collected by SNGPL on behalf of the federal government.' },
  { q: 'How is GST calculated on SNGPL bill?', a: 'GST (General Sales Tax) is charged at 17% on the combined total of your base gas charges AND GIDC. For example, if your base gas amount is Rs. 10,000 and GIDC is Rs. 1,000 (10%), the taxable amount for GST is Rs. 11,000. GST = Rs. 11,000 × 17% = Rs. 1,870. Your total bill would be Rs. 12,870 before any fixed charges.' },
  { q: 'Can SNGPL increase gas rates without notice?', a: 'No. SNGPL can only revise domestic gas tariff rates with formal approval from OGRA (Oil and Gas Regulatory Authority). OGRA conducts a public hearing process where consumers can submit comments before any tariff revision is approved. Approved rate changes are published in the official gazette and SNGPL\'s website before implementation.' },
  { q: 'What is meter rent on SNGPL bill?', a: 'Meter rent is a small fixed monthly charge for the use and maintenance of the gas meter installed at your property. It is set by OGRA and is the same for all domestic consumers of the same meter type. Meter rent is typically Rs. 10–50 per month and appears as "Fixed Charges" on your bill.' },
  { q: 'Why did my SNGPL gas bill increase even though consumption stayed the same?', a: 'A bill increase with unchanged consumption means either: (1) a tariff revision by OGRA increased the per-HHM rate, (2) a GIDC rate increase was implemented, (3) GST rate changed, or (4) you moved into a higher slab due to cumulative consumption. Check SNGPL\'s website for any recent tariff revision notices.' },
  { q: 'Is the GIDC legal and can I contest it?', a: 'Yes, GIDC is a legislated cess under the Gas Infrastructure Development Cess Act, 2011. It has been upheld by the courts as a valid government levy. You cannot opt out of GIDC as an individual consumer — it applies to all SNGPL consumers uniformly as a federal levy.' },
  { q: 'What is the NIT (Net Incremental Tariff) on gas bills?', a: 'NIT or Net Incremental Tariff is an additional levy sometimes applied to certain consumer categories during periods of high gas supply cost. It reflects the incremental cost of importing LNG (Liquefied Natural Gas) above the price of domestic gas supply. NIT may appear as a separate line item on commercial or higher-slab domestic bills.' },
];

const chargesBreakdown = [
  { charge: 'Base Gas Charges', basis: 'HHM consumed × OGRA slab rate', tax: 'Not itself a tax', example: 'Rs. 26,000 for 200 HHM in Slab 2' },
  { charge: 'Fixed Charge / Meter Rent', basis: 'Flat monthly amount per connection', tax: 'Set by OGRA', example: 'Rs. 10–50/month depending on meter size' },
  { charge: 'GIDC', basis: '10% of base gas charges', tax: 'Federal cess', example: 'Rs. 2,600 on Rs. 26,000 base' },
  { charge: 'GST', basis: '17% of (base gas + GIDC)', tax: 'Federal tax', example: 'Rs. 4,862 on Rs. 28,600 subtotal' },
  { charge: 'Late Payment Surcharge', basis: '10% of overdue amount', tax: 'SNGPL penalty', example: 'Only if paid after due date' },
  { charge: 'Arrears', basis: 'Unpaid balance from previous bills', tax: 'Not a tax', example: 'Shown separately; added to current total' },
];

export default function TaxesExplainedPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'Gas Bill Taxes Explained', item: 'https://sngplbillcheck.pk/sngpl-taxes-explained' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'SNGPL Gas Bill Taxes Explained 2026 — GIDC, GST, OGRA Charges',
        description: 'Complete reference guide to every tax and charge on your SNGPL gas bill including GIDC, GST, meter rent, and OGRA tariff regulation.',
        url: 'https://sngplbillcheck.pk/sngpl-taxes-explained',
        datePublished: '2026-01-01',
        dateModified: new Date().toISOString().split('T')[0],
        publisher: { '@type': 'Organization', name: 'SNGPL Bill Check Hub', url: 'https://sngplbillcheck.pk' },
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
            <span className="text-white">Gas Bill Taxes Explained</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-3 py-1 text-xs font-medium mb-4 border border-white/20">
            📊 Reference Guide · Updated 2026
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            SNGPL Gas Bill Taxes Explained 2026<br />
            <span className="text-yellow-300">GIDC, GST, Meter Rent & OGRA Charges</span>
          </h1>
          <p className="text-blue-100 text-base md:text-lg max-w-3xl leading-relaxed">
            Every line item on your SNGPL gas bill — base gas charges, GIDC, GST, meter rent, and late fees — explained clearly. Includes calculation examples, legal basis, and how OGRA regulates tariff revisions.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <article className="prose-content">

          <h2>All Charges on Your SNGPL Gas Bill — Quick Reference</h2>
          <p>Your SNGPL monthly gas bill contains multiple line items, each with a different legal basis and calculation method. Understanding each component is the first step to verifying your bill is correct.</p>

          <div className="overflow-x-auto rounded-xl border border-gray-200 my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Charge</th>
                  <th className="px-4 py-3 text-left font-semibold">Calculation Basis</th>
                  <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Type</th>
                  <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Example</th>
                </tr>
              </thead>
              <tbody>
                {chargesBreakdown.map((row, i) => (
                  <tr key={i} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                    <td className="px-4 py-3 font-semibold text-gray-900">{row.charge}</td>
                    <td className="px-4 py-3 text-gray-700 text-xs sm:text-sm">{row.basis}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden sm:table-cell">{row.tax}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{row.example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2>GIDC — Gas Infrastructure Development Cess</h2>
          <p>The Gas Infrastructure Development Cess (GIDC) is a federal levy introduced under the <strong>Gas Infrastructure Development Cess Act, 2011</strong>. It is charged at <strong>10% of your base gas consumption charges</strong> and is shown as a separate line item on every SNGPL bill.</p>

          <p>GIDC revenue is directed to a dedicated fund managed by the federal government for gas infrastructure development — including the expansion of the national gas pipeline network, development of LNG (Liquefied Natural Gas) import terminals, and gas distribution in unserved areas. The Sui Northern Gas Pipelines expansion into new cities and the development of the SSGC RLNG pipeline are partially funded through GIDC collections.</p>

          <p>GIDC is calculated as: <strong>Base Gas Amount × 10%</strong>. It is applied before GST, meaning GST is calculated on the combined base + GIDC amount. A Rs. 30,000 base gas bill would carry Rs. 3,000 in GIDC.</p>

          <h2>GST — General Sales Tax on Gas Bills</h2>
          <p>General Sales Tax (GST) is a federal tax collected under the Sales Tax Act, 1990. On SNGPL gas bills, GST is charged at <strong>17% of the combined total of base gas charges plus GIDC</strong>. SNGPL acts as a tax collector on behalf of the Federal Board of Revenue (FBR).</p>

          <p>The calculation sequence is: (1) base gas charges based on HHM consumed and slab rates, (2) add GIDC at 10% of base gas, (3) add fixed meter rent charges, (4) apply 17% GST on the sum of steps 1 and 2 (fixed charges may be GST-exempt depending on current FBR rules). This layered calculation means that a tariff increase in the base gas rate has a compounding effect on your final bill — the higher base increases both GIDC and GST proportionally.</p>

          <h2>OGRA Tariff Regulation — How Gas Prices Are Set</h2>
          <p>SNGPL cannot set its own gas prices. All domestic tariff rates are regulated by the <strong>Oil and Gas Regulatory Authority (OGRA)</strong>, established under the OGRA Ordinance, 2002. The tariff-setting process works as follows:</p>

          <p><strong>Annual Revenue Requirement:</strong> Each year, SNGPL submits a Revenue Requirement Determination (RRD) petition to OGRA. This document details SNGPL's operational costs, infrastructure capital expenditure, gas procurement costs (domestic + imported LNG), and projected distribution volumes.</p>

          <p><strong>OGRA Public Hearing:</strong> OGRA holds a public hearing where consumer advocacy groups, industry associations, and individual consumers can submit written comments and attend proceedings. Hearing schedules are announced in major national newspapers and on OGRA's website at ogra.org.pk.</p>

          <p><strong>Tariff Determination:</strong> OGRA reviews the RRD, factoring in regulatory benchmarks, efficiency targets, and consumer impact assessments. The final tariff determination is issued as an official OGRA order, specifying exact per-HHM rates for each slab. These rates apply uniformly across all SNGPL service cities.</p>

          <p>Consumers wishing to participate in the tariff revision process can register comments on OGRA's website during the public consultation period. Consumer Rights Commission of Pakistan (CRCP) also files representations at OGRA hearings on behalf of domestic consumers.</p>

          <h2>Complete Bill Calculation Example</h2>
          <p>Here is a complete calculation example for a household consuming <strong>450 HHM</strong> in December (winter peak):</p>
          <ul>
            <li>Slab 1: 100 HHM × flat rate = Rs. 200</li>
            <li>Slab 2: 200 HHM (101–300) × Rs. 130 = Rs. 26,000</li>
            <li>Slab 3: 150 HHM (301–450) × Rs. 150 = Rs. 22,500</li>
            <li><strong>Base gas total: Rs. 48,700</strong></li>
            <li>Fixed meter rent: Rs. 20</li>
            <li>GIDC (10% of Rs. 48,700): Rs. 4,870</li>
            <li>GST taxable amount (Rs. 48,700 + Rs. 4,870): Rs. 53,570</li>
            <li>GST (17% of Rs. 53,570): Rs. 9,107</li>
            <li><strong>Estimated Total Bill: Rs. 62,697</strong></li>
          </ul>
          <p>Use the <Link href="/calculator">SNGPL bill calculator</Link> to verify your own bill at any HHM level, with automatic slab and tax computation.</p>

          <h2>Late Payment Surcharge — The Hidden Cost</h2>
          <p>If your SNGPL bill is not paid by the printed due date, a <strong>10% late payment surcharge</strong> is automatically added to your next bill. This surcharge applies to the base gas amount and is not waivable after the fact — no grace period, no exceptions for first-time late payers.</p>

          <p>At a Rs. 50,000 winter bill, a 10% surcharge means an additional Rs. 5,000 penalty. Paying one day late costs the same surcharge as paying one month late — SNGPL's system triggers the surcharge automatically at the next billing cycle regardless of how overdue the payment is.</p>

          <p>The only way to avoid or reduce a surcharge is to call SNGPL helpline 1199 <em>before</em> the due date and request a payment extension. Extensions are granted on a case-by-case basis for consumers with a clean payment history.</p>
        </article>

        {/* FAQ */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">FAQ — SNGPL Gas Bill Taxes & Charges</h2>
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

        <section className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100">
          <h3 className="font-bold text-blue-900 mb-4">Related Guides</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: '/calculator', label: '🧮 Bill Calculator', desc: 'Compute exact bill with all taxes' },
              { href: '/hhm-explained', label: '📊 HHM Guide', desc: 'Understand gas consumption units' },
              { href: '/bill-check', label: '🔍 Check Bill Online', desc: 'View current bill instantly' },
              { href: '/payment-guide', label: '💳 Payment Guide', desc: 'Pay via Easypaisa, JazzCash, bank' },
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
