import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import GasCalculator from '../components/GasCalculator';
import FAQ from '../components/FAQ';
import TableOfContents from '../components/TableOfContents';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Gas Bill Calculator 2024 | Pakistan Gas Bill Estimator',
  description: 'Free SNGPL gas bill calculator for Pakistan. Estimate your monthly gas bill using current slab rates. Enter HHM or meter readings for instant calculation with full breakdown.',
  keywords: ['SNGPL gas bill calculator', 'gas bill calculator Pakistan', 'SNGPL bill estimator', 'Pakistan gas bill calculation', 'SNGPL tariff calculator 2024'],
  alternates: { canonical: 'https://sngplbillcheck.pk/gas-bill-calculator' },
};

const toc = [
  { id: 'calculator-tool',         label: 'Gas Bill Calculator Tool' },
  { id: 'how-sngpl-bills',         label: 'How SNGPL Calculates Your Bill' },
  { id: 'what-is-hhm',             label: 'What is HHM? Reading Your Meter' },
  { id: 'sngpl-tariff-slabs',      label: 'SNGPL Tariff Slabs 2024-25' },
  { id: 'bill-components',         label: 'All Bill Components Explained' },
  { id: 'seasonal-billing',        label: 'Seasonal Gas Billing in Pakistan' },
  { id: 'why-bill-is-high',        label: 'Why Your Gas Bill is High' },
  { id: 'reduce-gas-bill',         label: 'How to Reduce Your Gas Bill' },
  { id: 'formula-examples',        label: 'Worked Calculation Examples' },
  { id: 'comparison',              label: 'Bill Comparison: Month by Month' },
  { id: 'faq',                     label: 'Frequently Asked Questions' },
];

const faqs = [
  { q: 'How accurate is the SNGPL gas bill calculator?', a: 'Our calculator uses approximate SNGPL residential tariff slab rates for 2024-25 and includes energy charges, fixed charges, infrastructure cess, and GST. The estimate is typically within 5-15% of the actual bill. Actual bills may vary due to OGRA-approved tariff revisions, special surcharges, meter rent, and arrears. Always check your exact bill at the official SNGPL portal.' },
  { q: 'What is HHM in gas billing?', a: 'HHM stands for Hundred Cubic Meters (or sometimes Hundred Cubic Feet depending on region). It is the unit SNGPL uses to measure and bill gas consumption. 1 HHM = 100 cubic meters of natural gas. Your monthly HHM consumption is printed on your gas bill under the "Consumption" or "Units" field. It is calculated by subtracting your previous meter reading from the current reading and dividing by 100.' },
  { q: 'How do I read my SNGPL gas meter?', a: 'Your SNGPL gas meter shows cumulative consumption in cubic meters (m³) or cubic feet. Read the digits displayed on the digital or dial readout. Your current month\'s consumption in HHM is calculated as: (Current Reading - Previous Reading) ÷ 100 = HHM consumed. The meter reader records this monthly, but you can read it yourself to verify your bill.' },
  { q: 'Why do gas bills increase in winter?', a: 'Gas bills increase significantly in winter (November to February) because Pakistani households consume more gas for space heating (gas heaters, room heaters), hot water, and increased cooking time. The same tariff slabs apply, but higher consumption pushes households into higher slab rates, resulting in disproportionately higher bills. A household consuming 1 HHM in summer may consume 4-5 HHM in winter.' },
  { q: 'What are SNGPL tariff slabs?', a: 'SNGPL uses a progressive slab system where the rate per HHM increases with consumption. The system is designed to protect low-income consumers (who consume less) while charging more for excessive use. Rates are set by OGRA and revised periodically. Our calculator uses the approximate 2024-25 residential rates.' },
  { q: 'What is Infrastructure Development Surcharge on gas bills?', a: 'The Infrastructure Development Surcharge (IDS) is a government-mandated levy added to gas bills to fund expansion of Pakistan\'s gas pipeline network. It is calculated as a percentage (approximately 5%) of your gas consumption charges. This charge appears as a separate line item on your bill.' },
  { q: 'How does GST apply to SNGPL bills?', a: 'General Sales Tax (GST) at 17% is applied on the total of gas consumption charges, fixed charges, and infrastructure cess. GST is a federal tax collected by SNGPL on behalf of the Federal Board of Revenue (FBR). It is clearly shown as a separate line item on every SNGPL bill.' },
  { q: 'Can I use this calculator for commercial connections?', a: 'Our calculator is optimized for domestic (residential) SNGPL connections. Commercial and industrial connections have different, usually higher, tariff rates set by OGRA. Using this calculator for commercial connections will give an underestimate. For commercial bill estimates, contact SNGPL directly at 1199.' },
  { q: 'What is the minimum gas bill for SNGPL?', a: 'Even if you consume zero gas in a month, you will still receive a bill for the fixed monthly charges (approximately PKR 100) plus applicable taxes. This covers the cost of maintaining your gas connection and meter service.' },
  { q: 'How can I dispute a high SNGPL gas bill?', a: 'If you believe your gas bill is incorrect, first use our calculator to estimate the expected amount based on your meter readings. If there is a significant discrepancy: (1) Call SNGPL helpline 1199, (2) Provide your consumer number, (3) Request a meter inspection, (4) File a formal billing complaint. SNGPL will send an officer to verify your meter reading within 7-14 days.' },
];

export default function GasBillCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'Gas Bill Calculator', item: 'https://sngplbillcheck.pk/gas-bill-calculator' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-800 to-indigo-700 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-indigo-500/20 rounded-full animate-pulse-slow" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <nav className="flex items-center gap-2 text-blue-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Gas Bill Calculator</span>
          </nav>
          <div className="text-center max-w-3xl mx-auto">
            <span className="badge bg-white/20 text-white border border-white/30 mb-4">Free Online Tool</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
              SNGPL Gas Bill Calculator Pakistan
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Estimate your monthly SNGPL gas bill instantly using current tariff slab rates. Enter your HHM consumption or meter readings for a complete bill breakdown including all charges and taxes.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="#calculator-tool" className="btn-secondary bg-white text-blue-700 border-white py-3.5 px-7">Use Calculator ↓</Link>
              <Link href="/sngpl-bill-check-online" className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all">Check Actual Bill</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator section */}
      <section id="calculator-tool" className="section-pad bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">SNGPL Gas Bill Estimator</h2>
            <p className="text-gray-500 mt-2">Enter your consumption details for an instant estimate</p>
          </div>
          <GasCalculator />
        </div>
      </section>

      <AdUnit slot="8888888888" />

      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <TableOfContents items={toc.filter(t => t.id !== 'calculator-tool')} />

        {/* SECTION 1 */}
        <section id="how-sngpl-bills" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">How Does SNGPL Calculate Your Monthly Gas Bill?</h2>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=900&q=80"
              alt="SNGPL gas bill calculation — understanding tariff and slab rates"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Understanding how SNGPL calculates your gas bill empowers you to verify your charges, plan your budget, and identify any billing discrepancies. The billing process involves several steps:</p>

            <h3>Step 1: Meter Reading</h3>
            <p>An SNGPL meter reader visits your premises monthly and records the current reading shown on your gas meter. The meter displays cumulative gas consumption in cubic meters (m³) since the meter was installed or last reset.</p>

            <h3>Step 2: Consumption Calculation</h3>
            <p>SNGPL calculates your monthly consumption by subtracting the previous reading from the current reading:</p>
            <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-sm my-4">
              <p>Monthly Consumption (m³) = Current Reading − Previous Reading</p>
              <p className="mt-2 text-yellow-300">Monthly Consumption (HHM) = Monthly Consumption (m³) ÷ 100</p>
            </div>
            <p>For example: If current reading = 5,250 and previous reading = 5,000, then consumption = 250 m³ = 2.5 HHM</p>

            <h3>Step 3: Tariff Slab Application</h3>
            <p>SNGPL applies a progressive slab rate system. This means different portions of your consumption are billed at different rates. The first HHM is billed at the lowest rate, the next HHM at a higher rate, and so on. This protects low-income consumers while discouraging excessive use.</p>

            <h3>Step 4: Adding Fixed Charges and Taxes</h3>
            <p>After calculating the energy charge, SNGPL adds:</p>
            <ul>
              <li>Fixed monthly charge (regardless of consumption)</li>
              <li>Infrastructure Development Surcharge (% of energy charge)</li>
              <li>GST (17% on subtotal)</li>
              <li>Meter rent (if applicable)</li>
              <li>Previous arrears or advance balance</li>
            </ul>

            <h3>Step 5: Bill Generation</h3>
            <p>SNGPL&apos;s billing system generates your bill approximately 3-5 days after the meter reading date. The bill is then posted to your address and made available on the online portal simultaneously.</p>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">📊 Complete Bill Formula</p>
              <div className="text-blue-800 text-sm mt-2 font-mono space-y-1">
                <p>Energy Charges  = Σ (consumption_in_slab × slab_rate)</p>
                <p>Fixed Charges   = PKR 100 (flat)</p>
                <p>Infra Cess      = Energy Charges × 5%</p>
                <p>Sub-total       = Energy + Fixed + Infra Cess</p>
                <p>GST             = Sub-total × 17%</p>
                <p className="text-yellow-600 font-bold">Total Payable   = Sub-total + GST + Arrears</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="what-is-hhm" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">What is HHM? How to Read Your Gas Meter</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=900&q=80"
              alt="Gas meter showing reading in cubic meters — how to read SNGPL gas meter"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p><strong>HHM (Hundred Cubic Meters)</strong> is the billing unit used by SNGPL to measure natural gas consumption. One HHM equals 100 cubic meters of gas. Your gas meter physically measures consumption in cubic meters (m³), and SNGPL converts this to HHM for billing purposes.</p>

            <h3>Types of SNGPL Gas Meters</h3>
            <table>
              <thead><tr><th>Meter Type</th><th>Display</th><th>How to Read</th></tr></thead>
              <tbody>
                <tr><td>Diaphragm Meter (traditional)</td><td>Rotating dials</td><td>Read dials left to right, record numbers</td></tr>
                <tr><td>Electronic Meter (modern)</td><td>Digital LCD display</td><td>Read the numerical display directly</td></tr>
                <tr><td>Smart Meter (new installations)</td><td>Digital with wireless</td><td>Remote reading — no visual check needed</td></tr>
              </tbody>
            </table>

            <h3>How to Read Your Gas Meter</h3>
            <ol>
              <li>Locate your gas meter — usually mounted on the outside wall of your home or in a meter box</li>
              <li>Look at the numeric display — it shows cumulative consumption in m³</li>
              <li>Record all digits from left to right</li>
              <li>Ignore any red-colored dials or digits (these are decimal fractions)</li>
              <li>Your previous reading can be found on last month&apos;s gas bill</li>
              <li>Subtract previous from current to get this month&apos;s consumption in m³</li>
              <li>Divide by 100 to convert to HHM</li>
            </ol>

            <h3>HHM Conversion Examples</h3>
            <table>
              <thead><tr><th>Consumption (m³)</th><th>HHM</th><th>Typical Household</th></tr></thead>
              <tbody>
                <tr><td>0 – 100 m³</td><td>0 – 1 HHM</td><td>Summer (cooking only)</td></tr>
                <tr><td>100 – 200 m³</td><td>1 – 2 HHM</td><td>Small household, mild weather</td></tr>
                <tr><td>200 – 300 m³</td><td>2 – 3 HHM</td><td>Average household</td></tr>
                <tr><td>300 – 400 m³</td><td>3 – 4 HHM</td><td>Large household, winter</td></tr>
                <tr><td>400+ m³</td><td>4+ HHM</td><td>Heavy winter usage or commercial</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="sngpl-tariff-slabs" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">SNGPL Tariff Slabs 2024-25 — Complete Rate Table</h2>
          <div className="prose-content">
            <p>SNGPL&apos;s residential tariff is structured in progressive slabs set by OGRA (Oil and Gas Regulatory Authority). Here is the complete rate structure for 2024-25:</p>

            <table>
              <thead>
                <tr>
                  <th>Slab</th><th>Consumption Range (HHM)</th>
                  <th>Rate per HHM (PKR)</th><th>Monthly Bill at Top of Slab</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Slab 1</td><td>0 – 1 HHM</td><td>PKR 200</td><td>~PKR 334</td></tr>
                <tr><td>Slab 2</td><td>1 – 2 HHM</td><td>PKR 400</td><td>~PKR 804</td></tr>
                <tr><td>Slab 3</td><td>2 – 3 HHM</td><td>PKR 600</td><td>~PKR 1,509</td></tr>
                <tr><td>Slab 4</td><td>3 – 4 HHM</td><td>PKR 800</td><td>~PKR 2,448</td></tr>
                <tr><td>Slab 5</td><td>4+ HHM</td><td>PKR 1,200</td><td>Increases steeply</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">* Monthly bill estimates include fixed charges, infrastructure cess, and GST. Rates are approximate for 2024-25 and subject to OGRA revision.</p>

            <h3>How Progressive Slab Billing Works</h3>
            <p>Many consumers misunderstand slab billing — they think if they fall in Slab 3, ALL their gas is charged at PKR 600/HHM. This is <strong>incorrect</strong>.</p>
            <p>Progressive billing means:</p>
            <ul>
              <li>The <strong>first 1 HHM</strong> is always charged at PKR 200 — regardless of total consumption</li>
              <li>The <strong>next 1 HHM</strong> (1-2 HHM) is charged at PKR 400</li>
              <li>Only the consumption <strong>above 2 HHM</strong> is charged at PKR 600, and so on</li>
            </ul>
            <p>So for a household consuming 2.5 HHM: the first 1 HHM costs PKR 200, the next 1 HHM costs PKR 400, and the remaining 0.5 HHM costs PKR 300 (0.5 × 600) = Total gas charge of PKR 900.</p>

            <h3>Lifeline Consumer Category</h3>
            <p>OGRA designates consumers using less than 1 HHM per month as &quot;Lifeline&quot; consumers — typically low-income households. These consumers benefit from the lowest slab rate and in some periods may receive subsidized rates. Check your bill to see if you qualify for this category.</p>
          </div>
        </section>

        <AdUnit slot="9999999999" />

        {/* SECTION 4 */}
        <section id="bill-components" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">All SNGPL Bill Components Explained</h2>
          <div className="prose-content">
            <p>Your SNGPL bill may look complex with multiple line items. Here is what every charge on your bill means:</p>

            <div className="space-y-4">
              {[
                { name: 'Gas Consumption Charges', color: 'blue', desc: 'The main energy charge calculated using the progressive slab tariff based on your HHM consumption. This is typically 50-70% of your total bill.' },
                { name: 'Fixed Monthly Charges', color: 'green', desc: 'A flat charge of approximately PKR 100 per month for residential consumers. This covers meter reading costs, administrative expenses, and basic connection maintenance. Charged even if you consumed zero gas.' },
                { name: 'Infrastructure Development Surcharge (IDS)', color: 'purple', desc: 'Approximately 5% of gas consumption charges. This government-mandated levy funds expansion of Pakistan\'s gas network, new pipeline construction, and system upgrades.' },
                { name: 'General Sales Tax (GST)', color: 'orange', desc: '17% tax on the subtotal of all above charges. Collected by SNGPL and deposited with the Federal Board of Revenue (FBR). Mandatory for all consumers regardless of category.' },
                { name: 'Fuel Cost Component (FCC)', color: 'red', desc: 'A variable monthly charge based on SNGPL\'s actual gas procurement cost. When international gas prices rise, FCC increases. It may be incorporated into the tariff rate or shown separately.' },
                { name: 'Meter Rent', color: 'gray', desc: 'A small monthly charge for the gas meter installed at your premises. Consumers who own their meters (self-purchased) may have zero meter rent. Amount is typically PKR 10-50/month.' },
                { name: 'Arrears/Advance Balance', color: 'yellow', desc: 'Previous unpaid balances are added as arrears. Overpayments appear as advance credit and are deducted from the current bill. Always check the arrears figure and compare with your payment records.' },
                { name: 'Late Payment Surcharge', color: 'red', desc: 'If you paid your previous bill after the due date, a 10% surcharge on the late amount is added to your current bill. Always pay before the due date to avoid this extra charge.' },
              ].map(item => (
                <div key={item.name} className={`flex gap-4 p-4 bg-${item.color}-50 rounded-xl border border-${item.color}-100`}>
                  <div className={`w-2 rounded-full bg-${item.color}-500 shrink-0 my-1`} />
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="seasonal-billing" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Seasonal Gas Billing in Pakistan</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=900&q=80"
              alt="Pakistani household gas usage changes with seasons — winter billing"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Gas consumption in Pakistan is highly seasonal, and understanding this pattern helps you budget and plan for higher winter bills:</p>

            <table>
              <thead><tr><th>Season</th><th>Months</th><th>Typical Consumption</th><th>Reason</th></tr></thead>
              <tbody>
                <tr><td>Summer</td><td>April – September</td><td>0.5 – 1 HHM</td><td>Cooking only, no heating</td></tr>
                <tr><td>Monsoon/Autumn</td><td>September – November</td><td>1 – 2 HHM</td><td>Water heating, light cooking</td></tr>
                <tr><td>Peak Winter</td><td>December – February</td><td>3 – 6 HHM</td><td>Space heating, hot water, cooking</td></tr>
                <tr><td>Late Winter</td><td>March</td><td>1.5 – 3 HHM</td><td>Tapering off heating needs</td></tr>
              </tbody>
            </table>

            <h3>Why Winter Bills Shock Consumers</h3>
            <p>Many Pakistani households are surprised by steep winter gas bills. The reason is the combination of:</p>
            <ul>
              <li><strong>Higher consumption:</strong> Running room heaters, gas geysers, and more cooking uses 4-6x more gas than summer</li>
              <li><strong>Slab escalation:</strong> Higher consumption pushes into higher slab rates, increasing the per-unit cost</li>
              <li><strong>Compounding effect:</strong> Even a 4x consumption increase can result in a 8-12x bill increase due to progressive tariffs</li>
            </ul>

            <h3>Estimated Bills by Season</h3>
            <p>Based on a typical Lahore household:</p>
            <table>
              <thead><tr><th>Month</th><th>Est. Consumption</th><th>Est. Bill (PKR)</th></tr></thead>
              <tbody>
                <tr><td>July (Summer)</td><td>0.7 HHM</td><td>~PKR 250</td></tr>
                <tr><td>October (Autumn)</td><td>1.2 HHM</td><td>~PKR 500</td></tr>
                <tr><td>December (Early Winter)</td><td>2.5 HHM</td><td>~PKR 1,300</td></tr>
                <tr><td>January (Peak Winter)</td><td>4.0 HHM</td><td>~PKR 2,800</td></tr>
                <tr><td>February (Winter)</td><td>3.5 HHM</td><td>~PKR 2,300</td></tr>
                <tr><td>March (Late Winter)</td><td>2.0 HHM</td><td>~PKR 900</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">* Estimates based on 2024-25 rates. Actual bills vary by household size, appliance efficiency, and heating habits.</p>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="why-bill-is-high" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Why is Your SNGPL Gas Bill Higher Than Expected?</h2>
          <div className="prose-content">
            <p>If your bill seems unexpectedly high, here are the most common reasons and what you can do about each:</p>

            <div className="space-y-3">
              {[
                { reason: 'Meter Reading Error', detail: 'The meter reader may have made a clerical error. Compare your bill\'s "Previous Reading" with your own recorded reading from last month. If they don\'t match, file a complaint with SNGPL (1199) requesting a re-reading.' },
                { reason: 'Estimated Bill', detail: 'If SNGPL could not read your meter (access denied, reader absent), they generate an estimated bill based on your historical usage. Estimated bills are often higher than actual consumption. Request a proper meter reading at your next opportunity.' },
                { reason: 'Gas Leak', detail: 'An internal gas leak wastes gas you are paying for without actually using it. If consumption appears high but you haven\'t changed your habits, call SNGPL emergency 1199 immediately to inspect for leaks.' },
                { reason: 'Faulty Meter', detail: 'Gas meters can malfunction and show higher readings than actual consumption. Request a meter accuracy test from SNGPL — they will replace the meter and adjust any over-billing if confirmed faulty.' },
                { reason: 'Tariff Revision', detail: 'OGRA periodically revises gas tariffs. If your bill increased without a change in consumption, a tariff revision may have occurred. Check sngpl.com.pk or call 1199 for recent tariff changes.' },
                { reason: 'Accumulated Arrears', detail: 'If previous bills were partially paid or missed, arrears accumulate and are added to current bills, making them appear much higher. Check the arrears section of your bill and settle outstanding balances to normalize billing.' },
              ].map(item => (
                <details key={item.reason} className="border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors list-none">
                    <span>❓ {item.reason}</span>
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-sm text-gray-700 bg-amber-50 leading-relaxed">
                    {item.detail}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="reduce-gas-bill" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">12 Proven Ways to Reduce Your SNGPL Gas Bill</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1440778303588-435521a205bc?auto=format&fit=crop&w=900&q=80"
              alt="Energy efficient gas stove — reducing SNGPL gas consumption in Pakistan"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { tip: 'Install Insulation', detail: 'Insulating your walls, roof, and windows reduces heat loss, cutting gas heater usage by 30-40%.' },
                { tip: 'Use Timer on Geyser', detail: 'Set your gas geyser on a timer to heat water only when needed — typically morning and evening.' },
                { tip: 'Reduce Geyser Temperature', detail: 'Lower geyser thermostat to 50°C. Hotter water wastes gas and increases scaling in pipes.' },
                { tip: 'Pressure Cooker Cooking', detail: 'Using a pressure cooker cuts cooking time by 50-70%, directly reducing gas consumption.' },
                { tip: 'Solar Water Heating', detail: 'A solar geyser can reduce gas water heating bills by 60-80% even in winter months.' },
                { tip: 'Seal Doors and Windows', detail: 'Weatherstripping on doors and double-glazed windows reduces heating load significantly.' },
                { tip: 'Service Gas Appliances', detail: 'Annual servicing of gas heaters and stoves ensures they burn efficiently, preventing waste.' },
                { tip: 'Room Heater Alternatives', detail: 'Electric blankets and heated mattress pads use electricity but can be cheaper than running room gas heaters all night.' },
                { tip: 'Cook in Bulk', detail: 'Batch cooking on weekends saves daily cooking gas. Reheating uses far less gas than fresh cooking.' },
                { tip: 'Monitor HHM Monthly', detail: 'Read your meter monthly and track HHM. Early detection of unusual increases can reveal leaks or errors.' },
                { tip: 'Fix Gas Leaks Promptly', detail: 'Even tiny leaks accumulate to significant consumption. Service all gas appliance valves and connections annually.' },
                { tip: 'Consider CNG for Vehicles', detail: 'If you have a car, switching to CNG reduces petrol/diesel costs, freeing budget to pay gas bills comfortably.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 p-4 bg-green-50 rounded-xl border border-green-100">
                  <span className="text-lg shrink-0 mt-0.5">✅</span>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">{item.tip}</h4>
                    <p className="text-gray-600 text-xs mt-1">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="formula-examples" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Worked Calculation Examples</h2>
          <div className="prose-content">
            <p>Here are three complete, worked examples of SNGPL gas bill calculations to help you understand and verify your bills:</p>

            <h3>Example 1: Low Consumer (Summer Month)</h3>
            <p>Consumption: 0.8 HHM (80 m³)</p>
            <table>
              <thead><tr><th>Component</th><th>Calculation</th><th>Amount</th></tr></thead>
              <tbody>
                <tr><td>Slab 1 (0–0.8 HHM)</td><td>0.8 × PKR 200</td><td>PKR 160</td></tr>
                <tr><td>Fixed Charges</td><td>Flat rate</td><td>PKR 100</td></tr>
                <tr><td>Infrastructure Cess (5%)</td><td>5% × 160</td><td>PKR 8</td></tr>
                <tr><td>GST (17%)</td><td>17% × (160+100+8)</td><td>PKR 46</td></tr>
                <tr><td><strong>Total</strong></td><td></td><td><strong>PKR 314</strong></td></tr>
              </tbody>
            </table>

            <h3>Example 2: Average Consumer (October)</h3>
            <p>Consumption: 1.8 HHM (180 m³)</p>
            <table>
              <thead><tr><th>Component</th><th>Calculation</th><th>Amount</th></tr></thead>
              <tbody>
                <tr><td>Slab 1 (0–1 HHM)</td><td>1.0 × PKR 200</td><td>PKR 200</td></tr>
                <tr><td>Slab 2 (1–1.8 HHM)</td><td>0.8 × PKR 400</td><td>PKR 320</td></tr>
                <tr><td>Gas Subtotal</td><td></td><td>PKR 520</td></tr>
                <tr><td>Fixed Charges</td><td>Flat rate</td><td>PKR 100</td></tr>
                <tr><td>Infrastructure Cess (5%)</td><td>5% × 520</td><td>PKR 26</td></tr>
                <tr><td>GST (17%)</td><td>17% × (520+100+26)</td><td>PKR 110</td></tr>
                <tr><td><strong>Total</strong></td><td></td><td><strong>PKR 756</strong></td></tr>
              </tbody>
            </table>

            <h3>Example 3: Heavy Winter Consumer</h3>
            <p>Consumption: 4.5 HHM (450 m³) — typical January for large household</p>
            <table>
              <thead><tr><th>Component</th><th>Calculation</th><th>Amount</th></tr></thead>
              <tbody>
                <tr><td>Slab 1 (0–1 HHM)</td><td>1.0 × PKR 200</td><td>PKR 200</td></tr>
                <tr><td>Slab 2 (1–2 HHM)</td><td>1.0 × PKR 400</td><td>PKR 400</td></tr>
                <tr><td>Slab 3 (2–3 HHM)</td><td>1.0 × PKR 600</td><td>PKR 600</td></tr>
                <tr><td>Slab 4 (3–4 HHM)</td><td>1.0 × PKR 800</td><td>PKR 800</td></tr>
                <tr><td>Slab 5 (4–4.5 HHM)</td><td>0.5 × PKR 1,200</td><td>PKR 600</td></tr>
                <tr><td>Gas Subtotal</td><td></td><td>PKR 2,600</td></tr>
                <tr><td>Fixed Charges</td><td>Flat rate</td><td>PKR 100</td></tr>
                <tr><td>Infrastructure Cess (5%)</td><td>5% × 2,600</td><td>PKR 130</td></tr>
                <tr><td>GST (17%)</td><td>17% × (2,600+100+130)</td><td>PKR 481</td></tr>
                <tr><td><strong>Total</strong></td><td></td><td><strong>PKR 3,411</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Internal links */}
        <section className="p-6 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl border border-indigo-100 mb-12">
          <h3 className="font-bold text-gray-900 mb-3">Check Your Actual SNGPL Bill</h3>
          <p className="text-gray-600 text-sm mb-4">Our calculator gives estimates — for your exact bill amount, use our checker to visit the official SNGPL portal.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sngpl-bill-check-online" className="btn-primary py-2.5 px-5 text-sm">🔍 Check Actual Bill</Link>
            <Link href="/sngpl-duplicate-bill" className="btn-secondary py-2.5 px-5 text-sm">📄 Download Duplicate Bill</Link>
            <Link href="/sngpl-consumer-number-guide" className="btn-secondary py-2.5 px-5 text-sm">🔢 Find Consumer Number</Link>
          </div>
        </section>
      </article>

      <FAQ items={faqs} title="Gas Bill Calculator — FAQs" />
    </>
  );
}
