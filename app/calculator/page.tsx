import type { Metadata } from 'next';
import GasCalculator from '../components/GasCalculator';
import AdUnit from '../components/AdUnit';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SNGPL Gas Bill Calculator 2024 — Estimate Monthly Bill Online',
  description: 'Calculate your SNGPL gas bill instantly. Enter HHM units or meter readings — see full breakdown with GST, GIDC and slab rates. Free online tool.',
  alternates: { canonical: 'https://sngplbillcheck.pk/calculator' },
};

const faqItems = [
  { q: 'What is HHM in gas bill?', a: 'HHM stands for Hundred Heat Meter — the unit used by SNGPL to measure gas consumption. One HHM equals 100 cubic feet of gas. Your meter displays this reading and it is printed on your bill.' },
  { q: 'How does SNGPL calculate gas bill?', a: 'SNGPL uses a progressive slab system. Low users (0–100 HHM) pay a flat Rs. 200. Above 100 HHM, each band has a per-unit rate ranging from Rs. 130 to Rs. 250. GST (17%) and GIDC charges are added on top.' },
  { q: 'Why is my gas bill high in winter?', a: 'Gas consumption increases in winter due to heating, hot water, and cooking needs. Seasonal usage can push you into higher slabs, significantly increasing your bill. Consider insulation and energy-saving practices.' },
  { q: 'What is GIDC on gas bill?', a: 'GIDC is the Gas Infrastructure Development Cess — a government levy to fund gas infrastructure projects. It is charged as a percentage of your base gas amount before GST is applied.' },
  { q: 'Can I use this calculator for commercial connections?', a: 'This calculator uses residential/domestic slab rates. Commercial and industrial connections have different tariffs. For accurate commercial billing, contact SNGPL directly or visit their official portal.' },
];

export default function CalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map(f => ({
          '@type': 'Question', name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-4 border border-white/20">🧮 Free Calculator Tool</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Gas Bill Calculator</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Estimate your monthly gas bill before it arrives. Enter your HHM units or meter readings to get a full breakdown.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-100 py-2 px-4 text-sm text-gray-500">
        <div className="max-w-5xl mx-auto flex items-center gap-1">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span className="text-gray-800 font-medium">Calculator</span>
        </div>
      </nav>

      {/* Calculator */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <GasCalculator />
      </section>

      <AdUnit slot="2345678901" className="max-w-5xl mx-auto px-4" />

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 py-12 prose-content">
        <h2>How to Use the SNGPL Gas Bill Calculator</h2>
        <p>The SNGPL Gas Bill Calculator is designed to give Pakistani households a clear picture of their expected monthly gas charges. By entering either your HHM reading or the previous and current meter readings, the tool calculates your estimated bill using OGRA-approved domestic slab rates.</p>
        <p>This is especially useful if you want to budget for winter months when consumption typically rises, or to verify that your actual bill from SNGPL is consistent with your usage. Simply choose your input method — HHM units or meter readings — enter the figures, and the calculator instantly shows a detailed breakdown.</p>

        <h2>Understanding SNGPL Gas Billing Slabs</h2>
        <p>SNGPL uses a tiered slab system for billing domestic consumers. The slabs are designed so that low-usage households pay less per unit, while higher consumers pay progressively more. This structure encourages conservation and provides relief to low-income families.</p>
        <p>The current slab structure approved by OGRA for the 2024-25 period begins with a flat charge of Rs. 200 for households consuming up to 100 HHM per month. Beyond that threshold, the rate per unit increases as consumption rises through each slab. Additionally, a fixed customer charge, GIDC levy, and 17% GST are applied to arrive at the final bill amount.</p>

        <h2>What is HHM and How to Read Your Meter</h2>
        <p>HHM stands for Hundred Heat Meter — the standard unit used by SNGPL to measure natural gas consumption. Your gas meter has a dial or digital display showing cumulative readings. The difference between your current and previous monthly reading gives you the HHM consumed for that billing period.</p>
        <p>On your gas bill, you will find the previous reading, current reading, and the calculated difference (units consumed). This is the figure used to determine your slab and calculate your charges. If you suspect your meter is faulty or your reading seems unusually high or low, you can request a meter inspection from SNGPL.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((f, i) => (
            <div key={i} className="border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
              <p className="text-gray-600 text-sm">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 highlight-box">
          <p className="text-blue-800 font-semibold mb-1">Ready to check your actual bill?</p>
          <p className="text-blue-700 text-sm mb-3">Use our bill checker to see your real bill on the official SNGPL portal.</p>
          <Link href="/" className="btn-primary text-sm py-2.5 px-5">Check SNGPL Bill Now →</Link>
        </div>
      </section>
    </>
  );
}
