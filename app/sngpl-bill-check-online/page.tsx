import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SNGPLChecker from '../components/SNGPLChecker';
import FAQ from '../components/FAQ';
import TableOfContents from '../components/TableOfContents';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Bill Check Online 2024 | Complete Step-by-Step Guide Pakistan',
  description: 'Learn how to check your SNGPL gas bill online in Pakistan. Step-by-step guide for desktop and mobile, consumer number help, duplicate bill download, troubleshooting and FAQs.',
  keywords: ['SNGPL bill check online', 'sui northern gas bill check', 'SNGPL online bill Pakistan', 'gas bill check online Pakistan', 'SNGPL bill checker'],
  alternates: { canonical: 'https://sngplbillcheck.pk/sngpl-bill-check-online' },
};

const toc = [
  { id: 'what-is-sngpl-online-bill', label: 'What is SNGPL Online Bill Check?' },
  { id: 'before-you-start',          label: 'What You Need Before You Start' },
  { id: 'step-by-step-desktop',      label: 'Step-by-Step: Desktop Guide' },
  { id: 'step-by-step-mobile',       label: 'Step-by-Step: Mobile Guide' },
  { id: 'understanding-your-bill',   label: 'Understanding Your SNGPL Bill' },
  { id: 'download-duplicate',        label: 'How to Download Duplicate Bill' },
  { id: 'common-errors',             label: 'Common Errors & Solutions' },
  { id: 'payment-options',           label: 'Online Payment Options' },
  { id: 'troubleshooting',           label: 'Troubleshooting Guide' },
  { id: 'faq',                       label: 'Frequently Asked Questions' },
];

const faqs = [
  { q: 'How do I check my SNGPL bill online?', a: 'To check your SNGPL bill online, visit our checker above or go directly to sngpl.com.pk. Enter your 10-digit consumer number and click submit. Your current bill details, amount due, due date, and consumption will be displayed immediately.' },
  { q: 'What is the official SNGPL bill checking website?', a: 'The official SNGPL bill checking portal is sngpl.com.pk. This is the only official website for SNGPL bill verification. Our website safely redirects you to this portal — we do not display bill data ourselves.' },
  { q: 'Can I check my SNGPL bill on mobile?', a: 'Yes! The SNGPL bill portal is fully mobile-responsive. You can check your bill on any smartphone browser. Additionally, SNGPL has an official mobile app available for both Android and iOS for convenient bill checking.' },
  { q: 'What if my bill is not showing online?', a: 'If your bill is not showing, it may not have been generated yet. SNGPL generates bills after meter reading, which happens monthly. Bills typically appear online 3-5 days after the meter reading date. Also verify you are entering the correct consumer number.' },
  { q: 'Is it safe to check my SNGPL bill online?', a: 'Yes, it is completely safe to check your bill on the official SNGPL portal (sngpl.com.pk). The portal uses secure HTTPS encryption. Our site also uses HTTPS and never stores your consumer number — we only redirect you to the official site.' },
  { q: 'How do I pay my SNGPL bill online after checking?', a: 'After checking your bill on the SNGPL portal, you can pay through multiple channels: mobile banking apps (HBL, UBL, MCB, Meezan Bank), EasyPaisa, JazzCash, 1Bill platform, bank branches, Pakistan Post offices, and selected retail outlets like Ufone franchises.' },
  { q: 'What is the SNGPL helpline number?', a: 'SNGPL helpline number is 1199. This is available 24/7 for bill inquiries, complaints, and emergencies. You can also contact SNGPL on WhatsApp at 0311-7000-786 or visit their official website sngpl.com.pk for more contact options.' },
  { q: 'Can I download my SNGPL bill as PDF?', a: 'Yes. After checking your bill on the official SNGPL portal, there is a "Print Bill" or "Download Bill" option. You can save it as a PDF using your browser\'s print function (select "Save as PDF" instead of a printer). See our dedicated duplicate bill download guide for full instructions.' },
  { q: 'How many months of bill history can I see online?', a: 'The official SNGPL portal allows you to view current and recent bill history. Typically, you can see the last 6-12 months of bills. For older records, you may need to contact your nearest SNGPL customer service center.' },
  { q: 'What if I enter the wrong consumer number?', a: 'If you enter an incorrect consumer number, the SNGPL portal will show an error message saying the consumer number is not found. Double-check your number on your physical bill. Make sure to enter all digits correctly without spaces or dashes.' },
];

export default function SNGPLBillCheckOnlinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'SNGPL Bill Check Online', item: 'https://sngplbillcheck.pk/sngpl-bill-check-online' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'HowTo',
        name: 'How to Check SNGPL Gas Bill Online',
        description: 'Step-by-step guide to check SNGPL gas bill online in Pakistan',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Find Consumer Number', text: 'Locate your 10-digit SNGPL consumer number on your gas bill.' },
          { '@type': 'HowToStep', position: 2, name: 'Visit SNGPL Portal', text: 'Go to sngpl.com.pk or use our checker above.' },
          { '@type': 'HowToStep', position: 3, name: 'Enter Consumer Number', text: 'Type your consumer number in the input field.' },
          { '@type': 'HowToStep', position: 4, name: 'View Bill', text: 'Your bill details will appear on screen.' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-hero-blue text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-white/5 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <nav className="flex items-center gap-2 text-blue-200 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">SNGPL Bill Check Online</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-white/20 text-white border border-white/30 mb-4">Complete 2024 Guide</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                SNGPL Bill Check Online — Complete Guide
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                Everything you need to know about checking your Sui Northern Gas bill online in Pakistan. Step-by-step instructions for both desktop and mobile, with screenshots and expert tips.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#checker-section" className="btn-secondary bg-white text-blue-700 border-white">Check Your Bill Now</Link>
                <Link href="#step-by-step-desktop" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm">Read Guide ↓</Link>
              </div>
            </div>
            <div id="checker-section">
              <SNGPLChecker />
            </div>
          </div>
        </div>
      </section>

      {/* Main Article */}
      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">

        <TableOfContents items={toc} />

        <AdUnit slot="1111111111" />

        {/* SECTION 1 */}
        <section id="what-is-sngpl-online-bill" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">What is SNGPL Online Bill Check?</h2>

          <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="SNGPL gas bill document — understanding your monthly gas bill in Pakistan"
              fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <div className="prose-content">
            <p>The <strong>SNGPL online bill checking service</strong> is a digital platform provided by Sui Northern Gas Pipelines Limited (SNGPL) that allows residential, commercial, and industrial consumers across Pakistan to view, verify, and download their monthly gas bills without visiting any SNGPL office.</p>
            <p>Before this service was introduced, Pakistani households had to either wait for the paper bill to arrive, visit the local SNGPL subdivision office, or call the helpline to get their bill details. The introduction of the online portal revolutionized how over 7 million SNGPL consumers manage their utility accounts.</p>
            <p>Today, the <strong>SNGPL bill portal at sngpl.com.pk</strong> provides instant access to:</p>
            <ul>
              <li>Current monthly bill amount and due date</li>
              <li>Previous bill history and consumption trends</li>
              <li>Meter reading details (previous and current)</li>
              <li>Units consumed in HHM (Hundred Cubic Meters)</li>
              <li>Detailed bill breakdown including tariff, taxes, and surcharges</li>
              <li>Arrears or advance payment status</li>
              <li>Duplicate bill download as PDF</li>
              <li>Connection status information</li>
            </ul>
            <p>This guide covers everything from the basics of online bill checking to advanced troubleshooting for when things go wrong. Whether you&apos;re checking your bill for the first time or looking to understand the charges on your bill, this is your complete resource.</p>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">🔒 Important Safety Note</p>
              <p className="text-blue-800 text-sm mt-1">Always check your bill at the official SNGPL portal (sngpl.com.pk). Our website safely redirects you there — we never display or store your bill data. Beware of unofficial websites that claim to show your bill data.</p>
            </div>

            <h3>What is SNGPL?</h3>
            <p>Sui Northern Gas Pipelines Limited (SNGPL) is one of Pakistan&apos;s two major natural gas distribution companies. Established in 1963, it serves the northern half of Pakistan covering Punjab, Khyber Pakhtunkhwa (KPK), and Azad Jammu &amp; Kashmir.</p>
            <p>SNGPL operates one of the world&apos;s largest gas distribution networks, with over 150,000 kilometers of pipeline infrastructure. The company is listed on the Pakistan Stock Exchange (PSX) and is regulated by the Oil and Gas Regulatory Authority (OGRA).</p>
            <p>Key facts about SNGPL:</p>
            <ul>
              <li>Established: 1963</li>
              <li>Headquarters: Lahore, Punjab, Pakistan</li>
              <li>Consumer base: 7+ million consumers</li>
              <li>Coverage area: Punjab, KPK, AJK</li>
              <li>Helpline: 1199 (24/7)</li>
              <li>Official website: sngpl.com.pk</li>
              <li>Bill portal: sngpl.com.pk</li>
            </ul>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="before-you-start" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">What You Need Before You Start</h2>

          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80"
              alt="Person holding smartphone ready to check SNGPL gas bill online"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Before you begin checking your SNGPL gas bill online, make sure you have the following ready. This will ensure a smooth, error-free experience.</p>

            <h3>1. Your SNGPL Consumer Number</h3>
            <p>The most critical piece of information you need is your <strong>SNGPL consumer number</strong> (also sometimes called the account number or reference number). This is a unique 10-digit identifier assigned to your gas connection when it was first installed.</p>
            <p>Your consumer number can be found:</p>
            <ul>
              <li>Printed prominently at the top of your gas bill slip</li>
              <li>On your SNGPL connection agreement documents</li>
              <li>Via the SNGPL helpline (1199) with identity verification</li>
              <li>At your nearest SNGPL customer service center</li>
            </ul>
            <div className="warning-box">
              <p className="font-semibold text-amber-800">⚠️ Double-Check Your Number</p>
              <p className="text-amber-700 text-sm mt-1">Many people confuse the consumer number with the meter number or account number. Make sure you are using the correct number. The consumer number is typically labeled as "Consumer No." or "Account No." on your bill.</p>
            </div>

            <h3>2. A Device with Internet Connection</h3>
            <p>You can check your SNGPL bill from any device with an internet connection:</p>
            <ul>
              <li><strong>Smartphone:</strong> Android or iPhone — any modern browser works</li>
              <li><strong>Tablet:</strong> iPad, Android tablet — full portal support</li>
              <li><strong>Laptop or Desktop:</strong> Any computer with a modern browser</li>
              <li><strong>Browser recommendation:</strong> Chrome, Firefox, Safari, or Edge (latest versions)</li>
            </ul>

            <h3>3. Stable Internet Connection</h3>
            <p>While the SNGPL portal is lightweight and loads quickly even on slow connections, a stable internet connection ensures you can view and download your bill without interruption. Even a basic 2G/3G mobile connection is usually sufficient.</p>

            <h3>4. PDF Reader (for Duplicate Bill)</h3>
            <p>If you plan to download a duplicate bill as PDF, make sure you have a PDF viewer installed. Most modern devices have this built-in, but you can download Adobe Reader or any PDF app from your device&apos;s app store.</p>

            <div className="success-box">
              <p className="font-semibold text-green-800">✅ Quick Checklist</p>
              <ul className="text-green-700 text-sm mt-2 space-y-1">
                <li>☑ SNGPL Consumer Number (10 digits)</li>
                <li>☑ Smartphone, tablet, or computer</li>
                <li>☑ Internet connection (any speed)</li>
                <li>☑ Modern web browser (Chrome recommended)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="step-by-step-desktop" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Step-by-Step Guide: Checking SNGPL Bill on Desktop</h2>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1588776814546-1ffbb5a7aba5?auto=format&fit=crop&w=900&q=80"
              alt="Person checking SNGPL gas bill online on laptop computer"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Checking your SNGPL bill on a desktop or laptop computer is the most comfortable experience due to the larger screen size. Follow these detailed steps:</p>

            <h3>Method 1: Using Our Bill Checker (Recommended)</h3>
            <ol>
              <li>Scroll to the top of this page and find the <strong>SNGPL Bill Checker</strong> widget</li>
              <li>Click on the input field labeled &quot;Consumer Number&quot;</li>
              <li>Type your 10-digit SNGPL consumer number carefully</li>
              <li>Click the <strong>&quot;Check SNGPL Bill Now&quot;</strong> button</li>
              <li>A new tab will open with the official SNGPL portal automatically populated</li>
              <li>Your bill details will appear on screen</li>
            </ol>

            <h3>Method 2: Visiting SNGPL Portal Directly</h3>
            <ol>
              <li>Open your preferred web browser (Chrome, Firefox, Edge, Safari)</li>
              <li>In the address bar, type: <strong>sngpl.com.pk</strong></li>
              <li>Press Enter to navigate to the official SNGPL bill portal</li>
              <li>Look for the input field labeled &quot;Consumer Number&quot; or &quot;Account Number&quot;</li>
              <li>Enter your 10-digit consumer number</li>
              <li>Complete any CAPTCHA or verification if shown</li>
              <li>Click the &quot;Submit&quot; or &quot;Check Bill&quot; button</li>
              <li>Your current bill information will be displayed on screen</li>
            </ol>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">💡 Pro Tip</p>
              <p className="text-blue-800 text-sm mt-1">Bookmark the SNGPL portal in your browser so you can access it quickly every month. You can also save your consumer number in a secure note app for quick reference.</p>
            </div>

            <h3>What Information is Displayed</h3>
            <p>After entering your consumer number, the SNGPL portal displays a detailed bill summary including:</p>
            <table>
              <thead>
                <tr><th>Bill Field</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>Consumer Name</td><td>Name registered with SNGPL</td></tr>
                <tr><td>Consumer Number</td><td>Your unique 10-digit account number</td></tr>
                <tr><td>Billing Month</td><td>Month for which bill is generated</td></tr>
                <tr><td>Bill Issue Date</td><td>Date when the bill was generated</td></tr>
                <tr><td>Due Date</td><td>Last date to pay without surcharge</td></tr>
                <tr><td>Previous Reading</td><td>Meter reading from last month</td></tr>
                <tr><td>Current Reading</td><td>This month&apos;s meter reading</td></tr>
                <tr><td>Units Consumed</td><td>Gas used in HHM this month</td></tr>
                <tr><td>Gas Charges</td><td>Tariff-based consumption charges</td></tr>
                <tr><td>Fixed Charges</td><td>Monthly fixed service charge</td></tr>
                <tr><td>GST</td><td>General Sales Tax (17%)</td></tr>
                <tr><td>Total Payable</td><td>Final amount to be paid</td></tr>
                <tr><td>Arrears</td><td>Outstanding balance if any</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <AdUnit slot="2222222222" />

        {/* SECTION 4 */}
        <section id="step-by-step-mobile" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Step-by-Step Guide: Checking SNGPL Bill on Mobile</h2>

          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80"
              alt="Pakistani consumer checking SNGPL gas bill on mobile phone"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Most Pakistanis access the internet primarily through their mobile phones. The good news is that the SNGPL bill portal is mobile-friendly and works well on all modern smartphones. Here&apos;s how to check your bill on mobile:</p>

            <h3>Via Mobile Browser</h3>
            <ol>
              <li>Open <strong>Chrome</strong> or <strong>Safari</strong> on your smartphone</li>
              <li>Type <strong>sngpl.com.pk</strong> in the address bar</li>
              <li>The portal will load in mobile-friendly format</li>
              <li>Enter your SNGPL consumer number in the input field</li>
              <li>Tap the submit button</li>
              <li>Your bill details will appear on screen</li>
              <li>Scroll down to see all bill components</li>
            </ol>

            <h3>Via SNGPL Mobile App</h3>
            <p>SNGPL also offers an official mobile app for both Android and iOS devices:</p>
            <ol>
              <li>Open <strong>Google Play Store</strong> (Android) or <strong>App Store</strong> (iPhone)</li>
              <li>Search for &quot;SNGPL&quot; in the search bar</li>
              <li>Download the official SNGPL app (verify it&apos;s from the official SNGPL developer)</li>
              <li>Open the app after installation</li>
              <li>Navigate to the &quot;Bill Check&quot; or &quot;My Bill&quot; section</li>
              <li>Enter your consumer number</li>
              <li>View your current bill instantly</li>
            </ol>

            <div className="warning-box">
              <p className="font-semibold text-amber-800">📱 Mobile Data Tip</p>
              <p className="text-amber-700 text-sm mt-1">If you are on a limited mobile data plan, don&apos;t worry — the SNGPL portal is very lightweight. Checking your bill typically uses less than 100KB of data, roughly equivalent to loading a small webpage.</p>
            </div>

            <h3>Checking SNGPL Bill via SMS</h3>
            <p>For consumers without internet access, SNGPL also provides bill checking via SMS:</p>
            <ol>
              <li>Open your phone&apos;s messaging app</li>
              <li>Create a new message to <strong>5051</strong></li>
              <li>Type: <strong>BILL [space] [ConsumerNumber]</strong></li>
              <li>Example: BILL 1234567890</li>
              <li>Send the message</li>
              <li>You will receive an SMS with your current bill amount</li>
            </ol>
            <p>Note: Standard SMS charges may apply. This service may not always be active — verify with SNGPL 1199 for current availability.</p>

            <h3>Checking SNGPL Bill via WhatsApp</h3>
            <p>SNGPL also provides customer service via WhatsApp:</p>
            <ol>
              <li>Save SNGPL WhatsApp number: <strong>0311-7000-786</strong></li>
              <li>Send a message with your consumer number</li>
              <li>A SNGPL representative will assist you with bill details</li>
              <li>This service typically operates during business hours</li>
            </ol>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="understanding-your-bill" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Understanding Your SNGPL Gas Bill</h2>

          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?auto=format&fit=crop&w=900&q=80"
              alt="SNGPL gas bill on computer screen — understanding bill components"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Many SNGPL consumers are confused by the various charges and line items on their gas bills. Here is a comprehensive breakdown of every component you might see on your SNGPL bill:</p>

            <h3>Gas Consumption Charges</h3>
            <p>This is the main portion of your bill, calculated based on your gas consumption in HHM (Hundred Cubic Meters) during the billing period. SNGPL uses a progressive slab tariff system, meaning the rate per HHM increases as you consume more gas.</p>
            <p>The current residential slab rates for 2024-25 are approximately:</p>
            <ul>
              <li>0 to 1 HHM: PKR 200 per HHM</li>
              <li>1 to 2 HHM: PKR 400 per HHM</li>
              <li>2 to 3 HHM: PKR 600 per HHM</li>
              <li>3 to 4 HHM: PKR 800 per HHM</li>
              <li>Above 4 HHM: PKR 1,200 per HHM</li>
            </ul>
            <p>These rates are set by OGRA and may be revised periodically. Use our <Link href="/gas-bill-calculator" className="text-blue-600 underline font-semibold">Gas Bill Calculator</Link> to estimate your charges based on these slabs.</p>

            <h3>Fixed Charges</h3>
            <p>SNGPL charges a fixed monthly service charge regardless of how much gas you use. This covers the basic cost of maintaining your gas connection, meter reading services, and administrative expenses. The fixed charge is approximately PKR 100 per month for residential consumers.</p>

            <h3>Infrastructure Development Surcharge (IDS)</h3>
            <p>The Infrastructure Development Surcharge is a government-mandated charge applied to gas bills to fund the expansion and maintenance of Pakistan&apos;s gas pipeline infrastructure. It is calculated as a percentage of your gas consumption charges.</p>

            <h3>Fuel Cost Component (FCC)</h3>
            <p>Similar to the Fuel Cost Adjustment in electricity bills, the FCC on gas bills varies monthly based on the actual cost of natural gas procurement. When gas import prices rise, the FCC increases. This charge may appear as a separate line item or may be included in the tariff rate.</p>

            <h3>General Sales Tax (GST)</h3>
            <p>GST at 17% is applied on the total of consumption charges, fixed charges, and other applicable surcharges. This is a federal tax levied by the government of Pakistan and collected by SNGPL on behalf of FBR.</p>

            <h3>Meter Rent</h3>
            <p>A small monthly charge for the gas meter installed at your premises. Consumers who own their meters may see a reduced or zero meter rent charge.</p>

            <h3>Arrears/Advance Balance</h3>
            <p>If you have any unpaid balance from previous months, it appears as &quot;arrears&quot; and is added to your current bill. If you have overpaid previously, a credit (advance balance) will be shown and deducted from your current bill.</p>

            <h3>Sample Bill Calculation</h3>
            <p>Here&apos;s a worked example for a household consuming 2.5 HHM of gas:</p>
            <table>
              <thead><tr><th>Component</th><th>Calculation</th><th>Amount</th></tr></thead>
              <tbody>
                <tr><td>Slab 1 (0-1 HHM)</td><td>1 × PKR 200</td><td>PKR 200</td></tr>
                <tr><td>Slab 2 (1-2 HHM)</td><td>1 × PKR 400</td><td>PKR 400</td></tr>
                <tr><td>Slab 3 (2-2.5 HHM)</td><td>0.5 × PKR 600</td><td>PKR 300</td></tr>
                <tr><td>Gas Charges Subtotal</td><td></td><td>PKR 900</td></tr>
                <tr><td>Fixed Charges</td><td>Monthly flat rate</td><td>PKR 100</td></tr>
                <tr><td>Infrastructure Cess (5%)</td><td>5% × PKR 900</td><td>PKR 45</td></tr>
                <tr><td>GST (17%)</td><td>17% × (900+100+45)</td><td>PKR 179</td></tr>
                <tr><td><strong>Total Payable</strong></td><td></td><td><strong>PKR 1,224</strong></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="download-duplicate" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">How to Download a Duplicate SNGPL Bill</h2>

          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=80"
              alt="Downloading duplicate SNGPL gas bill as PDF on laptop"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Lost your original gas bill? Need a printed copy for payment or documentation? You can easily download a duplicate SNGPL bill online. Here&apos;s how:</p>

            <h3>Online Method (Most Convenient)</h3>
            <ol>
              <li>Visit the official SNGPL portal at <strong>sngpl.com.pk</strong></li>
              <li>Enter your consumer number and view your bill</li>
              <li>Look for the <strong>&quot;Print Bill&quot;</strong> or <strong>&quot;Download&quot;</strong> button on the bill page</li>
              <li>Click it to open your bill in printable format</li>
              <li>Use <strong>Ctrl+P</strong> (Windows) or <strong>Cmd+P</strong> (Mac) to open print dialog</li>
              <li>Select <strong>&quot;Save as PDF&quot;</strong> as your printer destination</li>
              <li>Choose your save location and click Save</li>
              <li>Your duplicate bill is now saved as a PDF</li>
            </ol>

            <p>For a complete, dedicated guide on downloading duplicate bills, visit our <Link href="/sngpl-duplicate-bill" className="text-blue-600 underline font-semibold">SNGPL Duplicate Bill Guide</Link>.</p>

            <div className="success-box">
              <p className="font-semibold text-green-800">✅ Duplicate Bill Tip</p>
              <p className="text-green-700 text-sm mt-1">Duplicate bills downloaded from the official SNGPL portal are accepted at all banks and payment centers for bill payment purposes. They are legally equivalent to the original printed bill.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="common-errors" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Common Errors and How to Fix Them</h2>

          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1580584126903-c17d41830450?auto=format&fit=crop&w=900&q=80"
              alt="Troubleshooting SNGPL bill check errors on computer"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Sometimes things don&apos;t go as expected when checking your SNGPL bill online. Here are the most common errors consumers encounter and how to resolve them:</p>

            <h3>Error: &quot;Consumer Number Not Found&quot;</h3>
            <p><strong>Cause:</strong> This happens when the consumer number entered does not match any record in the SNGPL database.</p>
            <p><strong>Solutions:</strong></p>
            <ul>
              <li>Double-check the consumer number on your physical bill</li>
              <li>Make sure you are entering all 10 digits correctly</li>
              <li>Remove any spaces, dashes, or special characters</li>
              <li>Verify you are using the consumer number and not the meter number</li>
              <li>Try the number from a previous bill if the current bill is not available</li>
            </ul>

            <h3>Error: &quot;Bill Not Generated Yet&quot;</h3>
            <p><strong>Cause:</strong> Your bill for the current month has not been generated yet in the SNGPL system.</p>
            <p><strong>Solutions:</strong></p>
            <ul>
              <li>Wait 3-5 days after your meter reading date</li>
              <li>Check again the following week</li>
              <li>Call SNGPL helpline 1199 for exact bill generation date</li>
            </ul>

            <h3>Error: Website Not Loading or Slow</h3>
            <p><strong>Cause:</strong> SNGPL portal may be under maintenance or experiencing high traffic.</p>
            <p><strong>Solutions:</strong></p>
            <ul>
              <li>Try refreshing the page (F5 or pull-to-refresh on mobile)</li>
              <li>Clear your browser cache and cookies</li>
              <li>Try a different browser</li>
              <li>Try checking at a different time (avoid peak hours 8am–10am)</li>
              <li>Check if sngpl.com.pk is accessible — if not, there may be server maintenance</li>
            </ul>

            <h3>Error: CAPTCHA Not Working</h3>
            <p><strong>Cause:</strong> Browser settings or extensions may be blocking the CAPTCHA.</p>
            <p><strong>Solutions:</strong></p>
            <ul>
              <li>Disable ad blockers temporarily for the SNGPL portal</li>
              <li>Enable JavaScript in your browser settings</li>
              <li>Try in an incognito/private browser window</li>
              <li>Try a different browser</li>
            </ul>

            <h3>Error: Incorrect Bill Amount</h3>
            <p><strong>Cause:</strong> You believe the bill amount shown is incorrect.</p>
            <p><strong>Solutions:</strong></p>
            <ul>
              <li>Compare with your previous months&apos; bills</li>
              <li>Check if it&apos;s a high-consumption winter month</li>
              <li>Use our <Link href="/gas-bill-calculator" className="text-blue-600 underline">Gas Bill Calculator</Link> to verify the calculation</li>
              <li>File a complaint at SNGPL helpline 1199</li>
              <li>Visit your local SNGPL subdivision office with your meter reading</li>
            </ul>
          </div>
        </section>

        <AdUnit slot="3333333333" />

        {/* SECTION 8 */}
        <section id="payment-options" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">SNGPL Online Payment Options in Pakistan</h2>

          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80"
              alt="Online payment options for SNGPL gas bill in Pakistan — mobile banking and apps"
              fill className="object-cover" />
          </div>

          <div className="prose-content">
            <p>Once you&apos;ve checked your SNGPL bill online, you can pay it through multiple convenient channels. Here are all the payment options available to SNGPL consumers:</p>

            <h3>Mobile Banking Apps</h3>
            <p>All major Pakistani banks provide bill payment features in their mobile apps:</p>
            <table>
              <thead><tr><th>Bank</th><th>App Name</th><th>Method</th></tr></thead>
              <tbody>
                <tr><td>HBL</td><td>HBL Mobile</td><td>Bill Payments → Utilities → SNGPL</td></tr>
                <tr><td>UBL</td><td>UBL Digital App</td><td>Pay Bills → Gas → SNGPL</td></tr>
                <tr><td>MCB</td><td>MCB Mobile</td><td>Payments → Utility Bills</td></tr>
                <tr><td>Meezan Bank</td><td>Meezan Mobile Banking</td><td>Bill Payment → SNGPL</td></tr>
                <tr><td>Bank Alfalah</td><td>Alfalah Mobile</td><td>Utility Payments → Gas</td></tr>
                <tr><td>Allied Bank</td><td>ABL Pay</td><td>Bill Payments → Gas Bills</td></tr>
              </tbody>
            </table>

            <h3>Mobile Payment Apps</h3>
            <ul>
              <li><strong>EasyPaisa:</strong> Go to Bills → Gas → SNGPL → Enter consumer number → Pay</li>
              <li><strong>JazzCash:</strong> Bills &amp; Payments → Gas Bills → SNGPL → Enter details</li>
              <li><strong>NayaPay:</strong> Payments → Utility → Gas → SNGPL</li>
              <li><strong>SadaPay:</strong> Bills → Gas → SNGPL consumer number</li>
            </ul>

            <h3>Online Banking (Internet Banking)</h3>
            <p>Almost all Pakistani banks provide internet banking portals where you can pay SNGPL bills:</p>
            <ol>
              <li>Log into your bank&apos;s internet banking portal</li>
              <li>Navigate to &quot;Bill Payments&quot; or &quot;Utility Payments&quot;</li>
              <li>Select &quot;Gas&quot; or &quot;SNGPL&quot; from the list</li>
              <li>Enter your consumer number</li>
              <li>Verify the bill amount and confirm payment</li>
            </ol>

            <h3>Physical Payment Locations</h3>
            <ul>
              <li>All bank branches across Pakistan</li>
              <li>Pakistan Post offices</li>
              <li>SNGPL customer service centers</li>
              <li>Designated retail outlets (Ufone, Jazz franchises, Pak Qaumi)</li>
              <li>1LINK ATM network (select ATMs)</li>
            </ul>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">💡 Payment Tip</p>
              <p className="text-blue-800 text-sm mt-1">Always pay your SNGPL bill before the due date printed on your bill. Late payments attract a 10% surcharge on the outstanding amount. Keep the payment receipt (physical or screenshot) for at least 30 days after payment as proof.</p>
            </div>
          </div>
        </section>

        {/* SECTION 9 */}
        <section id="troubleshooting" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Advanced Troubleshooting Guide</h2>

          <div className="prose-content">
            <p>If you&apos;re experiencing persistent issues with SNGPL bill checking, here are advanced troubleshooting steps and SNGPL contact information to get help:</p>

            <h3>SNGPL Contact Information</h3>
            <table>
              <thead><tr><th>Channel</th><th>Contact</th><th>Hours</th></tr></thead>
              <tbody>
                <tr><td>Helpline</td><td>1199</td><td>24/7</td></tr>
                <tr><td>WhatsApp</td><td>0311-7000-786</td><td>Business hours</td></tr>
                <tr><td>Email</td><td>info@sngpl.com.pk</td><td>Response in 48hrs</td></tr>
                <tr><td>Official Website</td><td>sngpl.com.pk</td><td>24/7</td></tr>
                <tr><td>Bill Portal</td><td>sngpl.com.pk</td><td>24/7</td></tr>
              </tbody>
            </table>

            <h3>When to Contact SNGPL</h3>
            <ul>
              <li>You&apos;ve been unable to check your bill for more than 7 days</li>
              <li>You believe there is a billing error</li>
              <li>Your consumer number is not found despite double-checking</li>
              <li>You have not received a bill for 2+ months</li>
              <li>There are arrears on your account that you believe you&apos;ve already paid</li>
            </ul>

            <h3>How to File a Bill Complaint</h3>
            <ol>
              <li>Call SNGPL helpline <strong>1199</strong></li>
              <li>Provide your consumer number</li>
              <li>Explain the issue clearly (billing discrepancy, account error, etc.)</li>
              <li>Get a complaint reference number</li>
              <li>SNGPL will investigate within 7-14 business days</li>
              <li>Follow up with your complaint reference number if not resolved</li>
            </ol>

            <h3>Regional SNGPL Offices</h3>
            <p>For in-person assistance, visit your nearest SNGPL regional office. Major offices are located in:</p>
            <ul>
              <li>Lahore (Head Office) — WAPDA House, The Mall, Lahore</li>
              <li>Rawalpindi — Main office on Murree Road</li>
              <li>Faisalabad — Regional office, Main Boulevard</li>
              <li>Multan — Regional office near City Circle</li>
              <li>Gujranwala — Regional subdivision office</li>
              <li>Peshawar — Main regional office</li>
              <li>Islamabad — Sector G-7/2, Near PTCL Exchange</li>
            </ul>
          </div>
        </section>

        {/* Related Guides */}
        <section className="p-6 bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl border border-blue-100 mb-12">
          <h3 className="font-bold text-gray-900 mb-4">Related SNGPL Guides</h3>
          <div className="grid sm:grid-cols-3 gap-3">
            <Link href="/sngpl-consumer-number-guide" className="card-green hover:border-green-300 transition-colors p-4">
              <span className="text-xl mb-2 block">🔢</span>
              <span className="font-semibold text-sm text-gray-900">Consumer Number Guide</span>
            </Link>
            <Link href="/sngpl-duplicate-bill" className="card hover:border-blue-300 transition-colors p-4">
              <span className="text-xl mb-2 block">📄</span>
              <span className="font-semibold text-sm text-gray-900">Duplicate Bill Download</span>
            </Link>
            <Link href="/gas-bill-calculator" className="card hover:border-purple-300 transition-colors p-4">
              <span className="text-xl mb-2 block">🧮</span>
              <span className="font-semibold text-sm text-gray-900">Gas Bill Calculator</span>
            </Link>
          </div>
        </section>
      </article>

      <FAQ items={faqs} title="SNGPL Bill Check Online — FAQs" />
    </>
  );
}
