import type { Metadata } from 'next';
import GasCalculator from '../components/GasCalculator';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SNGPL Gas Bill Calculator 2026 — Estimate Monthly Bill Online',
  description: 'Calculate your SNGPL gas bill instantly. Enter HHM units or meter readings — full breakdown with GST, GIDC and slab rates. Free online tool 2026.',
  alternates: { canonical: 'https://sngplbillcheck.pk/calculator' },
  openGraph: {
    title: 'SNGPL Gas Bill Calculator 2026 — Estimate Monthly Gas Bill',
    description: 'Free SNGPL gas bill calculator. Enter HHM units or meter readings for a full breakdown with GST, GIDC, and OGRA slab rates.',
    url: 'https://sngplbillcheck.pk/calculator',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNGPL Gas Bill Calculator 2026',
    description: 'Estimate your SNGPL gas bill. Enter HHM units, see full breakdown with slabs, GIDC & GST. Free tool.',
  },
};

const slabTable = [
  { slab: 1, range: '0 – 100 HHM',     rate: 'Flat Rs. 200/month',  perHHM: '—',      example100: 'Rs. 200',    example250: '—',          example450: '—'         },
  { slab: 2, range: '101 – 300 HHM',   rate: 'Rs. 130 per HHM',    perHHM: 'Rs. 130', example100: '—',          example250: 'Rs. 19,500', example450: '—'         },
  { slab: 3, range: '301 – 500 HHM',   rate: 'Rs. 150 per HHM',    perHHM: 'Rs. 150', example100: '—',          example250: '—',          example450: 'Rs. 22,500'},
  { slab: 4, range: '501 – 800 HHM',   rate: 'Rs. 170 per HHM',    perHHM: 'Rs. 170', example100: '—',          example250: '—',          example450: '—'         },
  { slab: 5, range: '801 – 1,200 HHM', rate: 'Rs. 200 per HHM',    perHHM: 'Rs. 200', example100: '—',          example250: '—',          example450: '—'         },
  { slab: 6, range: 'Above 1,200 HHM', rate: 'Rs. 250 per HHM',    perHHM: 'Rs. 250', example100: '—',          example250: '—',          example450: '—'         },
];

const appliances = [
  { name: 'Gas Geyser (Instant)',      usage: '5–8 HHM/month',   season: 'Year-round',  note: 'Per person bathing ~20 min/day' },
  { name: 'Gas Geyser (Storage 35L)',  usage: '12–20 HHM/month', season: 'Year-round',  note: 'Higher standby heat loss' },
  { name: 'Cooking Range (4 burners)', usage: '8–15 HHM/month',  season: 'Year-round',  note: 'Family of 4–5, 3 meals/day' },
  { name: 'Room Heater (Small)',        usage: '30–50 HHM/month', season: 'Winter only', note: '6 hours/day use in Dec–Feb' },
  { name: 'Room Heater (Large/Bukhari)', usage: '60–120 HHM/month', season: 'Winter only', note: '8+ hours/day continuous use' },
  { name: 'Gas Dryer (Clothes)',        usage: '15–25 HHM/month', season: 'Winter only', note: 'Daily use cycle' },
  { name: 'Tanoor / Roti Maker',       usage: '10–18 HHM/month', season: 'Year-round',  note: '2 roti sessions/day' },
  { name: 'Central Gas Heating System',usage: '150–300 HHM/month', season: 'Winter only', note: 'Large house, peak winter' },
];

const faqItems = [
  { q: 'What is HHM in gas bill?', a: 'HHM stands for Hundred Heat Meter — the unit used by SNGPL to measure gas consumption. One HHM equals 100 cubic feet of natural gas. Your meter displays cumulative HHM readings, and the difference between current and previous month readings is your monthly consumption.' },
  { q: 'How does SNGPL calculate gas bill?', a: 'SNGPL uses a cumulative progressive slab system. Consumption up to 100 HHM is charged at a flat Rs. 200. Above 100 HHM, each additional unit is charged at slab rates: Rs. 130 (101–300), Rs. 150 (301–500), Rs. 170 (501–800), Rs. 200 (801–1200), and Rs. 250 (above 1200). GIDC (10%) and GST (17%) are added on top.' },
  { q: 'Why is my gas bill high in winter?', a: 'Winter bills spike because gas geysers, room heaters, and bukharis run for far more hours than in summer. A single large room heater used 8 hours daily can add 80–120 HHM per month, pushing you into higher and more expensive slabs. This is the primary reason winter bills in Pakistan can be 5–10x summer bills.' },
  { q: 'What is GIDC on gas bill?', a: 'GIDC is the Gas Infrastructure Development Cess — a government levy charged at 10% of your base gas consumption amount (before GST). It funds gas pipeline infrastructure development and expansion projects across Pakistan. It appears as a separate line item on your SNGPL bill.' },
  { q: 'What is GST on gas bill?', a: 'GST (General Sales Tax) of 17% is applied to the sum of your base gas charges plus GIDC. For example, if base charges are Rs. 10,000 and GIDC is Rs. 1,000, GST is 17% of Rs. 11,000 = Rs. 1,870. Total bill = Rs. 12,870. GST is collected by SNGPL on behalf of the Federal Board of Revenue (FBR).' },
  { q: 'Can I use this calculator for commercial connections?', a: 'This calculator uses domestic/residential slab rates approved by OGRA. Commercial, industrial, and CNG connections have different tariff structures. For accurate commercial billing, check the OGRA website for current commercial gas tariffs or contact SNGPL directly at helpline 1199.' },
  { q: 'How do I read my gas meter?', a: 'Your gas meter has a digital or mechanical dial display showing cumulative HHM consumed since installation. The current reading minus the previous month\'s reading (shown on your bill) gives the HHM consumed for the billing period. Check your meter monthly and compare with your bill to spot discrepancies early.' },
  { q: 'What is a good monthly HHM consumption for a family of 4?', a: 'A typical Pakistani family of 4 with a gas cooking range, instant geyser, and no heaters uses 20–50 HHM in summer. In winter with a room heater running, this can jump to 150–350 HHM. Using a bukhari or larger central heating system can push winter consumption above 400–500 HHM.' },
  { q: 'Why does my calculated amount differ from my actual bill?', a: 'Small differences are normal because actual bills include fixed meter charges, possible subsidy adjustments, surcharges for late payments, or adjustments from previous month estimates. Significant differences may indicate a reading error — compare your meter reading with what SNGPL recorded on the bill and call 1199 if there is a large discrepancy.' },
  { q: 'Is there a subsidy for low-income SNGPL consumers?', a: 'Yes. The government periodically offers subsidies to low-income domestic consumers using below a threshold level of gas (typically below 100 HHM per month). Lifeline consumers may pay reduced rates. Check with SNGPL helpline 1199 or the SNGPL website for current subsidy eligibility criteria in your area.' },
  { q: 'How do I reduce my SNGPL gas bill?', a: 'Key strategies: upgrade to an instant geyser (saves 30–40% over storage), use a pressure cooker for cooking (saves 50–70% vs open pots), insulate your home to reduce heater run time, set your geyser thermostat to 50°C (not 70°C), fix all gas leaks promptly, and schedule appliance servicing annually before winter.' },
  { q: 'What is the typical winter gas bill in Lahore?', a: 'In Lahore, a medium-sized household with an instant geyser, cooking range, and one or two room heaters typically consumes 200–400 HHM in peak winter (December–February). At 300 HHM, the approximate bill would be: base Rs. 19,700 + GIDC Rs. 1,970 + GST Rs. 3,684 = approximately Rs. 25,354.' },
  { q: 'How do meter readings get estimated on SNGPL bills?', a: 'When SNGPL\'s meter reader cannot physically access your meter (locked gate, aggressive dog, property inaccessible), they issue an "E" (estimated) reading based on your historical average consumption. Estimated readings may be higher or lower than actual. Always check if your reading is actual (A) or estimated (E) on your bill.' },
  { q: 'Can gas bills be checked from abroad?', a: 'Yes. You can check SNGPL bills and pay them from anywhere in the world with internet access. Visit sngpl.com.pk from any country to view bills. For payment, family members in Pakistan can pay via Easypaisa/JazzCash, or you can use international bank transfers through your Pakistani bank\'s mobile app.' },
  { q: 'What happens to my SNGPL balance if I overpay?', a: 'If you pay more than the amount due, the excess is recorded as an advance credit on your SNGPL account and automatically applied to reduce your next month\'s bill. SNGPL does not refund small overpayments — they roll over to future bills. For large overpayments, you can request a refund through SNGPL\'s self-service portal.' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'Gas Bill Calculator', item: 'https://sngplbillcheck.pk/calculator' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-4 border border-white/20">🧮 Free Calculator Tool</span>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Gas Bill Calculator 2025</h1>
          <p className="text-blue-100 text-lg max-w-xl mx-auto">
            Estimate your monthly gas bill before it arrives. Enter HHM units or meter readings for a full breakdown with all slabs, GIDC, and GST.
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

      {/* SEO Content */}
      <section className="max-w-4xl mx-auto px-4 pb-16 prose-content">

        <h2>How to Use the SNGPL Gas Bill Calculator</h2>
        <p>The SNGPL Gas Bill Calculator provides Pakistani households with a precise estimate of their monthly gas charges before the actual bill arrives. By entering either your direct HHM reading or the previous and current meter readings, the tool applies the current OGRA-approved domestic slab tariffs and calculates your estimated bill with a full component-by-component breakdown.</p>
        <p>This is particularly useful for budgeting during winter months when gas consumption rises dramatically, for verifying that your actual SNGPL bill is consistent with your meter readings, and for understanding how changes in usage habits translate to rupee savings on your monthly bill. Simply choose your preferred input method, enter the figures, and the calculator instantly shows base charges, GIDC, GST, and total amount due.</p>
        <p>The calculator uses the domestic consumer tariff structure applicable for 2024–25, as approved by the Oil and Gas Regulatory Authority (OGRA). Note that this calculator covers domestic connections only. Commercial, industrial, and CNG tariffs are different and are not included in this tool.</p>

        <h2>SNGPL Gas Tariff Slab Rates 2025 — Complete Reference Table</h2>
        <p>SNGPL uses a cumulative progressive slab system for billing domestic consumers. This means each additional unit of gas consumed is charged at progressively higher rates as you move through the slabs. You do not pay the higher slab rate for ALL units — only for the units within that slab. Here is the complete rate structure:</p>
      </section>

      {/* Slab table */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Slab</th>
                <th className="px-4 py-3 text-left font-semibold">Consumption Range</th>
                <th className="px-4 py-3 text-left font-semibold">Rate</th>
                <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Rate per HHM</th>
              </tr>
            </thead>
            <tbody>
              {slabTable.map((r, i) => (
                <tr key={r.slab} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                  <td className="px-4 py-3 font-bold text-blue-700">{r.slab}</td>
                  <td className="px-4 py-3 font-semibold text-gray-900">{r.range}</td>
                  <td className="px-4 py-3 text-gray-700">{r.rate}</td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{r.perHHM}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-gray-500 bg-amber-50 border border-amber-200 rounded-xl p-3">
          <strong>Important:</strong> All slabs are cumulative. GIDC (10%) and GST (17%) are added on top of the base slab charges. Fixed meter and infrastructure charges also apply each month regardless of consumption.
        </p>
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-16 prose-content">

        <h2>Step-by-Step Bill Calculation — Three Real Examples</h2>
        <p>Understanding how SNGPL applies its slab system requires working through actual examples. Here are three calculations at different consumption levels to show how cumulative billing works:</p>

        <h3>Example 1: Light User — 80 HHM (Summer family of 4)</h3>
        <p>A family of four using gas only for cooking and a small instant geyser during summer months might consume just 80 HHM. Since this is below the Slab 1 threshold of 100 HHM, they pay the flat rate:</p>
        <ul>
          <li>Consumption: 80 HHM (within Slab 1 limit)</li>
          <li>Base gas charge: <strong>Rs. 200 (flat)</strong></li>
          <li>GIDC at 10% of Rs. 200: <strong>Rs. 20</strong></li>
          <li>GST at 17% of (Rs. 200 + Rs. 20): <strong>Rs. 37.40</strong></li>
          <li><strong>Estimated total bill: approximately Rs. 260</strong></li>
        </ul>
        <p>This is the minimum bill level for SNGPL domestic consumers. Any household consuming 100 HHM or less pays the same flat Rs. 200 base charge. With GIDC and GST, the all-in bill is approximately Rs. 257–260. This is why light users in summer pay very low gas bills.</p>

        <h3>Example 2: Moderate User — 250 HHM (Autumn with geyser and cooking)</h3>
        <p>A household using gas for cooking, hot water via geyser, and occasional heating might consume 250 HHM in shoulder seasons (October or March). Calculation:</p>
        <ul>
          <li>First 100 HHM at flat rate: <strong>Rs. 200</strong></li>
          <li>Next 150 HHM (101–250 units) at Rs. 130 per HHM: <strong>Rs. 19,500</strong></li>
          <li>Base gas total: <strong>Rs. 19,700</strong></li>
          <li>GIDC at 10% of Rs. 19,700: <strong>Rs. 1,970</strong></li>
          <li>GST at 17% of (Rs. 19,700 + Rs. 1,970): <strong>Rs. 3,684</strong></li>
          <li><strong>Estimated total bill: approximately Rs. 25,354</strong></li>
        </ul>
        <p>Notice how the jump from 80 HHM (Rs. 260) to 250 HHM (Rs. 25,354) is extremely large. This is because crossing the 100 HHM threshold moves you from Slab 1's flat Rs. 200 into Slab 2's per-unit charging. Managing consumption to stay below 100 HHM in summer is highly cost-effective.</p>

        <h3>Example 3: Heavy Winter User — 450 HHM (Peak winter with heater)</h3>
        <p>A family running a gas room heater 6–8 hours daily in December might consume 450 HHM. The cumulative calculation:</p>
        <ul>
          <li>First 100 HHM (Slab 1 flat): <strong>Rs. 200</strong></li>
          <li>Next 200 HHM (101–300, Slab 2 at Rs. 130): <strong>Rs. 26,000</strong></li>
          <li>Next 150 HHM (301–450, Slab 3 at Rs. 150): <strong>Rs. 22,500</strong></li>
          <li>Base gas total: <strong>Rs. 48,700</strong></li>
          <li>GIDC at 10%: <strong>Rs. 4,870</strong></li>
          <li>GST at 17% of Rs. 53,570: <strong>Rs. 9,107</strong></li>
          <li><strong>Estimated total bill: approximately Rs. 62,677</strong></li>
        </ul>
        <p>This example clearly shows why winter bills can be shocking. The difference between the summer light-use bill (Rs. 260) and the peak winter heavy-use bill (Rs. 62,677) illustrates the importance of energy management and heating efficiency in Pakistani households.</p>

        <h2>What is HHM? How to Read Your SNGPL Gas Meter</h2>
        <p>HHM stands for Hundred Heat Meter — the standard unit of natural gas measurement used by SNGPL throughout its network. One HHM equals 100 cubic feet of natural gas at standard temperature and pressure. Your gas meter measures the cumulative total of gas that has flowed through it since installation, displayed in HHM units.</p>

        <h3>Types of Gas Meters in Pakistan</h3>
        <p>SNGPL installs two main types of meters at residential connections:</p>
        <ul>
          <li><strong>Mechanical (dial) meters:</strong> Older-style meters with a series of rotating dials or drum counters, similar to older electricity meters. Read from left to right, noting the number each pointer is passing. The reading is the number of HHM consumed cumulatively.</li>
          <li><strong>Digital (electronic) meters:</strong> Newer meters with a digital display showing the reading directly in numbers. Simply read the displayed figure. These are more accurate and tamper-evident.</li>
        </ul>

        <h3>How to Calculate Monthly Consumption</h3>
        <p>To find your monthly HHM consumption, take your current meter reading and subtract the previous month's reading shown on your latest bill. The difference is your HHM consumed for that billing period. For example, if your previous reading was 1,240 HHM and your current reading is 1,490 HHM, your monthly consumption is 250 HHM — which you can enter into our calculator above.</p>

        <h3>When Your Meter Shows &ldquo;E&rdquo; on the Bill</h3>
        <p>If your bill shows an &ldquo;E&rdquo; next to the meter reading, it means SNGPL used an estimated reading rather than an actual meter read. This happens when the meter reader could not access your property. Estimated readings are based on your historical average. If the estimate seems significantly different from your actual reading, call SNGPL helpline 1199 to request a corrected bill based on your actual meter reading.</p>

        <h2>Gas Consumption by Appliance — Reference Guide</h2>
        <p>Understanding how much gas each appliance consumes helps you identify where your monthly HHM is going and where you can make savings. The figures below are typical ranges for Pakistani conditions and usage patterns:</p>
      </section>

      {/* Appliance table */}
      <div className="max-w-4xl mx-auto px-4 pb-10">
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 text-left font-semibold">Appliance</th>
                <th className="px-4 py-3 text-left font-semibold">Typical Monthly HHM</th>
                <th className="px-4 py-3 text-left font-semibold hidden sm:table-cell">Season</th>
                <th className="px-4 py-3 text-left font-semibold hidden md:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {appliances.map((a, i) => (
                <tr key={a.name} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                  <td className="px-4 py-3 font-semibold text-gray-900">{a.name}</td>
                  <td className="px-4 py-3 text-blue-700 font-bold">{a.usage}</td>
                  <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{a.season}</td>
                  <td className="px-4 py-3 text-gray-500 text-xs hidden md:table-cell">{a.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-gray-400">These are estimates based on typical Pakistani usage. Actual consumption varies by appliance efficiency, insulation, and usage habits.</p>
      </div>

      <section className="max-w-4xl mx-auto px-4 pb-16 prose-content">

        <h2>Seasonal Gas Bill Analysis — Winter vs Summer in Pakistan</h2>
        <p>Gas consumption in Pakistan follows a dramatic seasonal pattern, largely driven by the subcontinent&apos;s climate extremes. Understanding this pattern helps you budget accurately throughout the year and avoid bill shock in winter.</p>

        <h3>Summer (April – September): Low Consumption</h3>
        <p>During summer months, gas use is primarily limited to cooking and occasional hot water needs. Geysers may be turned off entirely in peak summer (June–August) when cold water is comfortable. A typical household of 4–5 people consuming only for cooking and minimal hot water uses 20–60 HHM per month. At these levels, most households stay within the Slab 1 flat charge (Rs. 200), paying under Rs. 300 per month including all taxes. This is when it pays to be disciplined — avoid using any gas heating appliances in shoulder months to stay below the 100 HHM threshold.</p>

        <h3>Winter (November – February): High Consumption</h3>
        <p>Winter is when Pakistani gas bills become significant. The primary drivers are gas geysers running longer (20–30 minutes per person vs 10 minutes in summer), room heaters and bukharis running 6–10 hours daily, and cooking on cold days taking longer. A family of 5 with one large room heater, an instant geyser, and a cooking range might consume 300–600 HHM in December and January. At 400 HHM, the estimated bill is approximately Rs. 42,000–55,000 with taxes. This represents a 150–200x increase over the summer minimum bill of Rs. 260.</p>

        <h3>Shoulder Seasons (March, October): Moderate Consumption</h3>
        <p>March and October represent transitional months. In October, nights start getting cold and geysers come back into heavy use, while room heaters may be used occasionally on cold evenings. March sees the tail end of heavy heating use. Typical consumption in these months is 100–200 HHM, resulting in bills of approximately Rs. 5,000–25,000. Planning ahead by servicing your geyser and heater in September (before peak winter) ensures maximum efficiency when you need it most.</p>

        <h2>10 Proven Ways to Reduce Your SNGPL Gas Bill</h2>
        <p>The following strategies are proven, practical, and applicable to typical Pakistani households. Implementing even 3–4 of these can significantly reduce your annual gas expenditure:</p>
        <ul>
          <li><strong>Replace storage geysers with instant geysers:</strong> Storage geysers keep water hot 24/7, continuously consuming gas even when you are not using hot water. Instant (instantaneous) geysers only heat water on demand. The switch can reduce geyser-related gas consumption by 30–40% and pays for itself within 1–2 winters.</li>
          <li><strong>Insulate your geyser and pipes:</strong> Wrap your geyser and hot water pipes in insulating foam sleeves (available at any hardware store for Rs. 200–500). This prevents heat loss and reduces how often the geyser reheats stored water. Even on storage geysers, insulation can reduce gas use by 15–20%.</li>
          <li><strong>Set geyser thermostat to 50°C:</strong> Most Pakistani geysers are factory-set to 60–70°C, which is unnecessarily hot and wastes gas. Setting it to 50°C (comfortable for bathing with no cold water mixing needed) reduces gas consumption by 15–25% with no comfort loss. Find the thermostat dial on the back of your geyser and adjust it with a screwdriver.</li>
          <li><strong>Use pressure cookers for daily cooking:</strong> A pressure cooker reduces cooking time by 60–70% for dals, lentils, meat, and rice — the staple items in a Pakistani kitchen. Shorter cooking time means significantly less gas consumed. A quality pressure cooker purchased for Rs. 3,000–6,000 can save Rs. 500–1,000 per month in gas costs.</li>
          <li><strong>Keep gas burner flame at medium, not high:</strong> A roaring blue flame does not cook food faster once your vessel is hot — it just wastes gas. Once the pot is at temperature, reduce the flame to medium-low. Keeping pots and pans covered during cooking also traps heat and reduces cook time by 20–30%.</li>
          <li><strong>Insulate your home before winter:</strong> Installing weather stripping on doors, sealing gaps under doors and windows, and adding curtains significantly reduces heat loss. Better-insulated homes need less heater run time to reach the same comfort level. A Rs. 5,000–15,000 weatherization investment can save Rs. 10,000–30,000 per winter in heating costs.</li>
          <li><strong>Service gas appliances annually:</strong> Gas burners accumulate food residue that distorts the flame pattern, reducing heat transfer efficiency. Geyser heat exchangers accumulate limescale from hard water, requiring more gas to heat the same amount of water. Annual service by a certified gas appliance technician in September (before winter) restores peak efficiency.</li>
          <li><strong>Use a timer on your room heater:</strong> Most Pakistanis leave room heaters running all night, but body temperature regulation during sleep means you need much less heating after the first hour. A simple outlet timer set to run the heater for 90 minutes after bedtime, then switch off, can save 4–5 hours of heater use per night without discomfort.</li>
          <li><strong>Fix gas leaks immediately:</strong> A slow leak at a hose joint or burner valve can waste 2–5 HHM per month invisibly — adding Rs. 1,000–5,000 to your annual bill for gas you never used. Check all connections monthly with soapy water (bubbles indicate a leak). Never use a flame to test for leaks. Call SNGPL helpline 1199 for free leak inspection.</li>
          <li><strong>Monitor your meter monthly:</strong> Take a photograph of your meter reading on the same day each month and track it in a notes app or spreadsheet. Compare with your bill reading each month. Spotting a sudden spike in recorded consumption early allows you to identify a leak, a meter error, or a faulty appliance before it causes a large surprise bill.</li>
        </ul>

        <h2>Understanding GIDC and GST on Your SNGPL Bill</h2>
        <p>Two government taxes make up a significant portion of every SNGPL gas bill. Understanding what they are and how they are calculated helps you interpret your bill correctly:</p>

        <h3>GIDC — Gas Infrastructure Development Cess</h3>
        <p>The Gas Infrastructure Development Cess (GIDC) is a federal government levy introduced under the Gas Infrastructure Development Cess Act. It is charged at 10% of your base gas consumption amount (before GST). The funds collected from GIDC across all gas consumers in Pakistan are designated for financing the development, expansion, and upgrading of the country&apos;s natural gas transmission and distribution infrastructure — including pipeline construction, compressor stations, and city gate stations.</p>
        <p>GIDC applies to all gas consumer categories: domestic, commercial, industrial, and CNG. The rate has varied over the years as the government adjusts the cess based on infrastructure financing needs. For domestic consumers in 2025, GIDC is 10% of your base gas charges. On a bill with Rs. 20,000 in base gas charges, GIDC adds Rs. 2,000.</p>

        <h3>GST — General Sales Tax (17%)</h3>
        <p>GST is a federal consumption tax applied at 17% on the combined total of your base gas charges and GIDC. SNGPL collects GST on behalf of the Federal Board of Revenue (FBR) and remits it monthly. You cannot opt out of GST — it is mandatory on all utility services in Pakistan.</p>
        <p>The GST calculation is: 17% × (Base Gas Charges + GIDC). So if your base charges are Rs. 30,000 and GIDC is Rs. 3,000, GST = 17% × Rs. 33,000 = Rs. 5,610. Your bill would then total Rs. 38,610 plus any fixed charges. Notice that GST is applied to GIDC as well — so you pay tax on a tax, which is a common feature of layered Pakistani utility billing.</p>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 mt-6">
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

        <div className="mt-10 highlight-box">
          <p className="text-blue-800 font-semibold mb-1">Ready to check your actual bill?</p>
          <p className="text-blue-700 text-sm mb-3">Use our bill checker to see your real current bill on the official SNGPL portal — free and instant.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/" className="btn-primary text-sm py-2.5 px-5">Check SNGPL Bill Now →</Link>
            <Link href="/bill-check" className="btn-secondary text-sm py-2.5 px-5">Bill Check Guide →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
