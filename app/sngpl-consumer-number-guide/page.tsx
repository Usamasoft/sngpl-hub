import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import TableOfContents from '../components/TableOfContents';
import AdUnit from '../components/AdUnit';
import SNGPLChecker from '../components/SNGPLChecker';

export const metadata: Metadata = {
  title: 'SNGPL Consumer Number Guide 2024 | Where to Find Your Gas Bill Number',
  description: 'Complete guide to your SNGPL consumer number — what it is, where to find it on your bill and meter, region codes, how to recover it if lost, and FAQs.',
  keywords: ['SNGPL consumer number', 'SNGPL account number', 'how to find SNGPL consumer number', 'SNGPL consumer number guide Pakistan'],
  alternates: { canonical: 'https://sngplbillcheck.pk/sngpl-consumer-number-guide' },
};

const toc = [
  { id: 'what-is-consumer-number',    label: 'What is the SNGPL Consumer Number?' },
  { id: 'format-and-structure',       label: 'Format and Structure Explained' },
  { id: 'where-to-find-on-bill',      label: 'Where to Find on Your Bill' },
  { id: 'where-to-find-on-meter',     label: 'Where to Find on Your Meter' },
  { id: 'region-codes',               label: 'SNGPL Region Codes' },
  { id: 'consumer-vs-meter-number',   label: 'Consumer Number vs Meter Number' },
  { id: 'how-to-recover',             label: 'How to Recover Lost Consumer Number' },
  { id: 'update-consumer-details',    label: 'How to Update Consumer Details' },
  { id: 'types-of-consumers',         label: 'Types of SNGPL Consumer Accounts' },
  { id: 'faq',                        label: 'Frequently Asked Questions' },
];

const faqs = [
  { q: 'What is an SNGPL consumer number?', a: 'An SNGPL consumer number (also called account number) is a unique 10-digit identifier assigned to each gas connection by Sui Northern Gas Pipelines Limited. It is used to identify your account in their system, check your bill online, and for all correspondence with SNGPL.' },
  { q: 'Where is my consumer number on the SNGPL bill?', a: 'Your consumer number is printed prominently at the top section of your SNGPL gas bill. It is labeled as "Consumer No.", "Account No.", or "Ref No." Look for a 10-digit number near your name and address on the bill slip.' },
  { q: 'Is the consumer number the same as the meter number?', a: 'No, they are different. The consumer number is a unique account identifier in SNGPL\'s billing system. The meter number is a physical identifier stamped on your gas meter. The SNGPL online portal requires your consumer number, not the meter number.' },
  { q: 'What do I do if I cannot find my consumer number?', a: 'If you cannot find your consumer number: (1) Check old gas bills, (2) Call SNGPL helpline 1199 with your name and address, (3) Visit your nearest SNGPL subdivision office with your CNIC, (4) Check with your landlord if you are renting, (5) Contact SNGPL via WhatsApp at 0311-7000-786.' },
  { q: 'Can my consumer number change?', a: 'SNGPL consumer numbers are permanent and do not change as long as the gas connection remains active at the same location. Even if you change your name or transfer the connection to a new owner, the consumer number typically remains the same for that specific gas connection.' },
  { q: 'How many digits is the SNGPL consumer number?', a: 'SNGPL consumer numbers are typically 10 digits long. Some older connections may have shorter numbers. Always enter the full number exactly as printed on your bill without spaces or dashes.' },
  { q: 'What if I have multiple gas connections?', a: 'If you have multiple gas connections (e.g., at different properties), each connection will have its own unique consumer number. You need to use the specific consumer number for the connection whose bill you want to check.' },
  { q: 'Can I find my consumer number from the SNGPL website?', a: 'You cannot retrieve your consumer number from the SNGPL website without already knowing it, as it requires verification. To get your consumer number, contact SNGPL helpline 1199 or visit your local SNGPL office with your CNIC and address details.' },
  { q: 'What is a domestic SNGPL consumer?', a: 'A domestic SNGPL consumer is a residential household using natural gas for cooking, heating water, and space heating. Domestic consumers are billed according to the residential tariff slabs set by OGRA, which are different (and generally lower) than commercial or industrial tariffs.' },
  { q: 'How do I transfer SNGPL consumer number to a new owner?', a: 'To transfer an SNGPL connection: (1) Both buyer and seller must visit the SNGPL subdivision office, (2) Bring CNIC copies of both parties, (3) Property documents (deed, agreement), (4) No objection certificate (NOC), (5) Last paid bill. SNGPL will process the transfer and update their records. The consumer number typically stays the same.' },
];

export default function ConsumerNumberGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'SNGPL Consumer Number Guide', item: 'https://sngplbillcheck.pk/sngpl-consumer-number-guide' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <nav className="flex items-center gap-2 text-green-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">Consumer Number Guide</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-white/20 text-white border border-white/30 mb-4">Complete 2024 Guide</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                SNGPL Consumer Number — Complete Guide
              </h1>
              <p className="text-green-100 text-lg leading-relaxed mb-6">
                Everything about your SNGPL consumer number — what it is, where to find it, how to recover it, and how to use it to check your gas bill online.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#where-to-find-on-bill" className="btn-secondary bg-white text-green-700 border-white">Find My Number ↓</Link>
                <Link href="/#checker" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm">Check Bill Now</Link>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=700&q=80"
                alt="SNGPL gas bill showing consumer number location"
                fill className="object-cover" priority />
              <div className="absolute inset-0 bg-green-900/30" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-3 text-sm">
                <p className="font-bold text-gray-900">📍 Consumer Number Location</p>
                <p className="text-gray-600 text-xs mt-1">Printed at the top of your gas bill slip — labeled as &quot;Consumer No.&quot;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <TableOfContents items={toc} />
        <AdUnit slot="4444444444" />

        {/* SECTION 1 */}
        <section id="what-is-consumer-number" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">What is the SNGPL Consumer Number?</h2>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80"
              alt="Understanding SNGPL consumer number — digital identification system"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>The <strong>SNGPL Consumer Number</strong> is the unique identification number assigned by Sui Northern Gas Pipelines Limited (SNGPL) to every gas connection in their network. Think of it as your gas account&apos;s unique ID — just like your CNIC is your national identity, your consumer number is your gas identity in SNGPL&apos;s system.</p>
            <p>This number is crucial for multiple purposes:</p>
            <ul>
              <li>Checking your gas bill online at the SNGPL portal</li>
              <li>Downloading duplicate gas bills</li>
              <li>Paying your gas bill through mobile banking apps</li>
              <li>Filing complaints or inquiries with SNGPL</li>
              <li>Transferring the gas connection to a new owner</li>
              <li>Updating your account details</li>
              <li>Applying for changes to your gas connection</li>
            </ul>
            <p>Without your consumer number, you cannot access any SNGPL online services. It is the foundational identifier for your gas account, and knowing it is essential for every Pakistani household connected to the SNGPL network.</p>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">🔑 Key Facts</p>
              <ul className="text-blue-800 text-sm mt-2 space-y-1">
                <li>• Unique 10-digit number per connection</li>
                <li>• Assigned at the time of connection</li>
                <li>• Does not change unless connection is terminated</li>
                <li>• Required for online bill checking</li>
                <li>• Different from meter number</li>
              </ul>
            </div>

            <h3>History of SNGPL Consumer Numbering</h3>
            <p>SNGPL&apos;s consumer numbering system has evolved over the decades. Early connections from the 1970s and 1980s may have shorter or differently formatted numbers compared to newer connections. As SNGPL modernized its billing infrastructure and expanded its network, the standardized 10-digit consumer number became the norm across all regions.</p>
            <p>Today, every new gas connection in Punjab, KPK, and AJK receives a computer-generated 10-digit consumer number that is embedded in SNGPL&apos;s centralized billing system, enabling seamless online access.</p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="format-and-structure" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Format and Structure of SNGPL Consumer Number</h2>
          <div className="prose-content">
            <p>Understanding the structure of the SNGPL consumer number helps you identify and use it correctly. Here is a breakdown of the typical format:</p>

            <div className="bg-gray-900 rounded-2xl p-6 my-6 font-mono text-center">
              <p className="text-gray-400 text-xs mb-3">SNGPL Consumer Number Format</p>
              <p className="text-3xl text-white font-black tracking-widest">XX XX XXXXXX</p>
              <div className="grid grid-cols-3 gap-4 mt-4 text-xs text-gray-400">
                <span>Region<br/>Code (2)</span>
                <span>Sub-division<br/>Code (2)</span>
                <span>Connection<br/>Number (6)</span>
              </div>
            </div>

            <h3>Breaking Down the Consumer Number</h3>
            <table>
              <thead><tr><th>Segment</th><th>Digits</th><th>Description</th></tr></thead>
              <tbody>
                <tr><td>Region Code</td><td>First 2 digits</td><td>Identifies the SNGPL region (Lahore, Rawalpindi, Peshawar, etc.)</td></tr>
                <tr><td>Sub-division Code</td><td>Next 2 digits</td><td>Identifies the sub-division within the region</td></tr>
                <tr><td>Connection Number</td><td>Last 6 digits</td><td>Unique sequential number for the specific connection</td></tr>
              </tbody>
            </table>

            <h3>Example Consumer Numbers</h3>
            <table>
              <thead><tr><th>Consumer Number</th><th>Region</th><th>Type</th></tr></thead>
              <tbody>
                <tr><td>01-23-456789</td><td>Lahore Central</td><td>Residential (Domestic)</td></tr>
                <tr><td>05-12-234567</td><td>Rawalpindi</td><td>Residential</td></tr>
                <tr><td>08-45-789012</td><td>Faisalabad</td><td>Residential</td></tr>
                <tr><td>12-67-345678</td><td>Peshawar</td><td>Residential</td></tr>
                <tr><td>15-34-567890</td><td>Gujranwala</td><td>Residential</td></tr>
              </tbody>
            </table>

            <div className="warning-box">
              <p className="font-semibold text-amber-800">⚠️ Format Variations</p>
              <p className="text-amber-700 text-sm mt-1">Some SNGPL portals and apps display the consumer number with dashes (01-23-456789) while others show it without dashes (0123456789). When entering your number online, try both formats if one doesn&apos;t work. The underlying digits are the same.</p>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="where-to-find-on-bill" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Where to Find Consumer Number on Your Bill</h2>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=900&q=80"
              alt="SNGPL gas bill showing consumer number location highlighted"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Your SNGPL consumer number is printed on every gas bill you receive. Here is exactly where to find it:</p>

            <h3>On the Physical Bill Slip</h3>
            <p>The traditional SNGPL bill is a paper slip approximately A5 size (half of an A4 page). The consumer number appears in the <strong>top section</strong> of this bill, typically in the upper-left or upper-right area.</p>
            <ul>
              <li>Look for the label: <strong>&quot;Consumer No.&quot;</strong>, <strong>&quot;Account No.&quot;</strong>, or <strong>&quot;Ref No.&quot;</strong></li>
              <li>The number is printed in larger, bolder font than surrounding text</li>
              <li>It appears alongside your name and registered address</li>
              <li>It is also printed in the barcode section at the bottom of the bill</li>
            </ul>

            <h3>Bill Sections and Their Contents</h3>
            <table>
              <thead><tr><th>Section of Bill</th><th>What It Contains</th></tr></thead>
              <tbody>
                <tr><td>Top Header</td><td>SNGPL logo, bill period, issue date</td></tr>
                <tr><td>Account Information</td><td><strong>Consumer Number</strong>, name, address, meter number</td></tr>
                <tr><td>Billing Details</td><td>Meter readings, HHM consumed, billing month</td></tr>
                <tr><td>Charge Breakdown</td><td>Gas charges, fixed charges, taxes, GST</td></tr>
                <tr><td>Payment Summary</td><td>Total payable, due date, arrears</td></tr>
                <tr><td>Barcode Section</td><td>Machine-readable consumer number for payment scanning</td></tr>
              </tbody>
            </table>

            <h3>On the Electronic Bill (PDF)</h3>
            <p>If you have previously downloaded a duplicate bill as PDF, the consumer number appears in the same location as on the physical bill — in the account information section near the top of the document. You can use your PDF reader&apos;s search function (Ctrl+F) and search for &quot;Consumer No&quot; to find it quickly.</p>

            <div className="success-box">
              <p className="font-semibold text-green-800">✅ Quick Find Tip</p>
              <p className="text-green-700 text-sm mt-1">On a physical bill, the consumer number is the largest number printed in the account information section. It is always 10 digits. If you see a different number that is also 10 digits, compare with the labels — your consumer number will be labeled as Consumer No., Account No., or Ref No.</p>
            </div>
          </div>
        </section>

        <AdUnit slot="5555555555" />

        {/* SECTION 4 */}
        <section id="where-to-find-on-meter" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Where to Find Consumer Number on Your Gas Meter</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?auto=format&fit=crop&w=900&q=80"
              alt="Natural gas meter showing meter number and consumer details"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Many people wonder if they can find their SNGPL consumer number directly on their gas meter. Here is what you need to know:</p>

            <h3>What Information is on the Gas Meter?</h3>
            <p>Your gas meter has a metal or plastic plate stamped or printed with the following information:</p>
            <ul>
              <li><strong>Meter Number (Serial Number):</strong> The physical identifier of the meter itself</li>
              <li><strong>Meter Type:</strong> Domestic, commercial, or industrial</li>
              <li><strong>Meter Capacity:</strong> Maximum flow rate in cubic meters per hour</li>
              <li><strong>Manufacturer Details:</strong> Brand and manufacturing year</li>
              <li><strong>Current Reading:</strong> Digital or dial display showing cumulative consumption</li>
            </ul>

            <h3>Consumer Number vs Meter Number</h3>
            <p>Importantly, the <strong>consumer number is NOT printed on the meter</strong>. The meter shows the meter serial number, which is a different identifier. The consumer number is an administrative identifier in SNGPL&apos;s billing database that links your account to your physical meter.</p>
            <p>The connection between your consumer number and meter number is maintained in SNGPL&apos;s central database. When SNGPL reads your meter each month, they know which consumer account to bill because the meter number is linked to your consumer number in their system.</p>

            <h3>How SNGPL Reads Your Meter</h3>
            <p>SNGPL meter readers visit each consumer&apos;s premises monthly to record the current meter reading. They record the reading on a handheld device that is pre-loaded with your consumer number and address. The difference between this month&apos;s and last month&apos;s readings gives your consumption in cubic meters, which is converted to HHM for billing.</p>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">📌 Important Distinction</p>
              <p className="text-blue-800 text-sm mt-1">Always use your <strong>Consumer Number</strong> (from your bill) for online bill checking and payments. The meter number on your physical meter is a different identifier and is NOT accepted on the SNGPL online portal for bill checking.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="region-codes" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">SNGPL Region Codes — Which One is Yours?</h2>
          <div className="prose-content">
            <p>SNGPL divides its vast service area into regions and sub-divisions, each with a unique code that forms part of your consumer number. Knowing your region helps you verify your consumer number format and contact the right SNGPL office:</p>

            <table>
              <thead><tr><th>Region Code (First 2 Digits)</th><th>Region/City</th><th>Province</th></tr></thead>
              <tbody>
                <tr><td>01–05</td><td>Lahore Zone</td><td>Punjab</td></tr>
                <tr><td>06–09</td><td>Rawalpindi / Islamabad Zone</td><td>Punjab / ICT</td></tr>
                <tr><td>10–13</td><td>Faisalabad Zone</td><td>Punjab</td></tr>
                <tr><td>14–17</td><td>Gujranwala Zone</td><td>Punjab</td></tr>
                <tr><td>18–20</td><td>Multan Zone</td><td>Punjab</td></tr>
                <tr><td>21–23</td><td>Bahawalpur Zone</td><td>Punjab</td></tr>
                <tr><td>24–27</td><td>Peshawar Zone</td><td>KPK</td></tr>
                <tr><td>28–31</td><td>Abbottabad / Hazara Zone</td><td>KPK</td></tr>
                <tr><td>32–35</td><td>AJK Zone</td><td>Azad Kashmir</td></tr>
                <tr><td>36–40</td><td>Sargodha / DG Khan Zone</td><td>Punjab</td></tr>
              </tbody>
            </table>
            <p className="text-xs text-gray-400 mt-2">* Region codes are approximate and may vary. Contact SNGPL 1199 for exact sub-division information for your area.</p>

            <h3>Finding Your Nearest SNGPL Sub-Division</h3>
            <p>Each city and town in SNGPL&apos;s service area has one or more subdivision offices. These are the local SNGPL offices where consumers can:</p>
            <ul>
              <li>Report gas leaks and emergencies</li>
              <li>File billing complaints</li>
              <li>Apply for new connections</li>
              <li>Transfer connections to new owners</li>
              <li>Get duplicate bills printed</li>
              <li>Update account information</li>
            </ul>
            <p>To find your nearest SNGPL sub-division office, call the SNGPL helpline at <strong>1199</strong> or visit <strong>sngpl.com.pk</strong> and navigate to the &quot;Contact Us&quot; or &quot;Office Locations&quot; section.</p>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="consumer-vs-meter-number" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Consumer Number vs Meter Number — Key Differences</h2>
          <div className="prose-content">
            <p>One of the most common sources of confusion for SNGPL consumers is the difference between the consumer number and the meter number. Here is a comprehensive comparison:</p>

            <table>
              <thead><tr><th>Feature</th><th>Consumer Number</th><th>Meter Number</th></tr></thead>
              <tbody>
                <tr><td>Purpose</td><td>Identifies your billing account</td><td>Identifies the physical meter</td></tr>
                <tr><td>Where Found</td><td>On your gas bill</td><td>On the physical meter</td></tr>
                <tr><td>Format</td><td>10 digits (billing code)</td><td>Varies (alphanumeric)</td></tr>
                <tr><td>Changes</td><td>Permanent (unless disconnected)</td><td>Changes when meter is replaced</td></tr>
                <tr><td>Used For</td><td>Online portal, bill payment</td><td>Internal SNGPL tracking</td></tr>
                <tr><td>Visible to Consumer</td><td>Yes, on every bill</td><td>Yes, on the meter plate</td></tr>
                <tr><td>Required Online</td><td>Yes — for bill checking</td><td>No</td></tr>
              </tbody>
            </table>

            <h3>Why Do People Confuse These Numbers?</h3>
            <p>Many consumers confuse these numbers because:</p>
            <ul>
              <li>Both are long numerical codes</li>
              <li>Both are associated with the same gas connection</li>
              <li>Some older bills may label them similarly</li>
              <li>Non-technical users may not understand the distinction</li>
              <li>The meter number sometimes appears on bills alongside the consumer number</li>
            </ul>
            <div className="success-box">
              <p className="font-semibold text-green-800">✅ Simple Rule</p>
              <p className="text-green-700 text-sm mt-1">If you&apos;re trying to check your bill online or make a payment, always use the number from your gas bill labeled &quot;Consumer No.&quot; or &quot;Account No.&quot; — NOT the number stamped on your physical gas meter.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="how-to-recover" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">How to Recover a Lost SNGPL Consumer Number</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=900&q=80"
              alt="Calling SNGPL customer service to recover lost consumer number"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Don&apos;t worry if you&apos;ve lost or cannot find your SNGPL consumer number. There are several ways to recover it:</p>

            <h3>Method 1: Call SNGPL Helpline (Quickest)</h3>
            <ol>
              <li>Call SNGPL helpline: <strong>1199</strong> (24/7 available)</li>
              <li>Select the option for &quot;Bill Inquiry&quot; or &quot;Consumer Services&quot;</li>
              <li>Provide your <strong>complete address</strong> including street, mohalla/area, city</li>
              <li>Provide your <strong>CNIC number</strong> for verification</li>
              <li>The SNGPL representative will provide your consumer number</li>
            </ol>

            <h3>Method 2: Visit SNGPL Subdivision Office</h3>
            <ol>
              <li>Find your nearest SNGPL subdivision office</li>
              <li>Bring your <strong>original CNIC</strong></li>
              <li>Bring any <strong>property document</strong> or lease agreement</li>
              <li>The SNGPL staff will verify your identity and provide your consumer number</li>
              <li>They can also print a duplicate bill if you need immediate payment</li>
            </ol>

            <h3>Method 3: WhatsApp SNGPL</h3>
            <ol>
              <li>Save SNGPL WhatsApp: <strong>0311-7000-786</strong></li>
              <li>Send a message with your complete address</li>
              <li>Include your CNIC number in the message</li>
              <li>SNGPL will respond during business hours with your consumer number</li>
            </ol>

            <h3>Method 4: Check Old Bills or Receipts</h3>
            <ul>
              <li>Look for old gas bills in your home — even a year-old bill will have the same consumer number</li>
              <li>Check bank statements — payments made via internet banking often show the consumer number</li>
              <li>Check EasyPaisa or JazzCash transaction history if you&apos;ve paid bills through these apps</li>
              <li>Check your email — some consumers receive digital bills via email from SNGPL</li>
            </ul>

            <h3>Method 5: Ask Your Landlord</h3>
            <p>If you are renting, your landlord should have the SNGPL consumer number for the property. Contact them and request the number. As a tenant, having this number allows you to check bills independently without relying on the landlord each month.</p>

            <div className="warning-box">
              <p className="font-semibold text-amber-800">⚠️ Security Note</p>
              <p className="text-amber-700 text-sm mt-1">When sharing your consumer number for recovery purposes, only provide it to official SNGPL channels (helpline 1199, official WhatsApp, or SNGPL offices). Never share it with unauthorized third parties claiming to help with your bill.</p>
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="update-consumer-details" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">How to Update Your SNGPL Consumer Details</h2>
          <div className="prose-content">
            <p>Your SNGPL account may need to be updated if you have changed your name, phone number, address, or if you want to transfer the connection to a new owner. Here is how to update each type of information:</p>

            <h3>Updating Contact Information (Phone/Email)</h3>
            <ol>
              <li>Call SNGPL helpline 1199</li>
              <li>Provide your consumer number and CNIC for verification</li>
              <li>Request a change of phone number or email address</li>
              <li>Provide the new contact details</li>
              <li>Changes are typically processed within 2-3 business days</li>
            </ol>

            <h3>Changing Name on Account</h3>
            <ol>
              <li>Visit your nearest SNGPL subdivision office</li>
              <li>Bring original CNIC</li>
              <li>Bring supporting documents (marriage certificate for name changes due to marriage, court order for legal name changes)</li>
              <li>Fill out the &quot;Change of Consumer Name&quot; form</li>
              <li>Processing time: 7-14 business days</li>
            </ol>

            <h3>Transferring Connection to New Owner</h3>
            <p>When a property with an SNGPL connection is sold or transferred:</p>
            <ol>
              <li>Both current consumer and new owner must visit SNGPL office</li>
              <li>Required documents: CNIC copies of both, property sale deed or transfer agreement, last paid gas bill, no-dues certificate</li>
              <li>Pay the applicable transfer fee</li>
              <li>Processing time: 14-30 business days</li>
            </ol>
          </div>
        </section>

        {/* SECTION 9 */}
        <section id="types-of-consumers" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Types of SNGPL Consumer Accounts</h2>
          <div className="prose-content">
            <p>SNGPL serves different categories of consumers, each with different tariff rates and billing structures. Understanding which category you fall under helps you verify your bill charges:</p>

            <table>
              <thead><tr><th>Consumer Type</th><th>Usage</th><th>Tariff</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Domestic (Residential)</td><td>Cooking, heating, water heating</td><td>Slab-based (lowest rates)</td><td>Most common category</td></tr>
                <tr><td>Commercial</td><td>Restaurants, hotels, shops</td><td>Higher flat rate</td><td>No slab protection</td></tr>
                <tr><td>Industrial</td><td>Factories, manufacturing</td><td>Highest rate</td><td>Large-volume consumers</td></tr>
                <tr><td>CNG Stations</td><td>Compressed natural gas for vehicles</td><td>Regulated CNG rate</td><td>Seasonal availability</td></tr>
                <tr><td>Power Plants</td><td>Electricity generation</td><td>Special bulk rate</td><td>Government negotiated</td></tr>
              </tbody>
            </table>

            <h3>Domestic Consumer Subcategories</h3>
            <p>Within the domestic category, SNGPL has further subcategories based on connection size and usage pattern:</p>
            <ul>
              <li><strong>Standard Domestic:</strong> Regular household with standard meter (most common)</li>
              <li><strong>Lifeline Consumer:</strong> Low-income households consuming less than 1 HHM, eligible for subsidized rates</li>
              <li><strong>Combined Residential-Commercial:</strong> Homes with small commercial activities (e.g., home-based business)</li>
            </ul>

            <h3>How to Know Your Consumer Category</h3>
            <p>Your consumer category is printed on your gas bill. Look for the field labeled &quot;Consumer Type&quot; or &quot;Category&quot;. If you believe your category is incorrect (e.g., charged commercial rates instead of domestic), file a complaint with SNGPL for re-categorization.</p>
          </div>
        </section>

        {/* Quick Checker CTA */}
        <section className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl border border-green-100 mb-12">
          <h3 className="font-bold text-gray-900 mb-2">Found Your Consumer Number? Check Your Bill Now!</h3>
          <p className="text-gray-600 text-sm mb-4">Use our SNGPL bill checker above to get instantly redirected to the official portal.</p>
          <SNGPLChecker />
        </section>

        {/* Internal links */}
        <section className="p-5 bg-blue-50 rounded-2xl border border-blue-100 mb-12">
          <h3 className="font-bold text-gray-900 mb-3">Continue Reading</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/sngpl-bill-check-online" className="btn-primary py-2.5 px-5 text-sm">🔍 Bill Check Guide</Link>
            <Link href="/sngpl-duplicate-bill" className="btn-secondary py-2.5 px-5 text-sm">📄 Duplicate Bill</Link>
            <Link href="/gas-bill-calculator" className="btn-secondary py-2.5 px-5 text-sm">🧮 Calculator</Link>
          </div>
        </section>
      </article>

      <FAQ items={faqs} title="SNGPL Consumer Number — FAQs" />
    </>
  );
}
