import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import FAQ from '../components/FAQ';
import TableOfContents from '../components/TableOfContents';
import AdUnit from '../components/AdUnit';
import SNGPLChecker from '../components/SNGPLChecker';

export const metadata: Metadata = {
  title: 'SNGPL Duplicate Bill Download 2024 | How to Get Duplicate Gas Bill',
  description: 'How to download your SNGPL duplicate gas bill online in Pakistan. Step-by-step guide for PDF download, mobile app, WhatsApp method, printing instructions, and troubleshooting.',
  keywords: ['SNGPL duplicate bill', 'SNGPL bill download', 'duplicate gas bill Pakistan', 'SNGPL bill PDF download', 'how to get duplicate SNGPL bill'],
  alternates: { canonical: 'https://sngplbillcheck.pk/sngpl-duplicate-bill' },
};

const toc = [
  { id: 'what-is-duplicate-bill',   label: 'What is a Duplicate Gas Bill?' },
  { id: 'why-you-need-it',          label: 'Why You Need a Duplicate Bill' },
  { id: 'online-method',            label: 'Method 1: Online Portal (Desktop)' },
  { id: 'mobile-method',            label: 'Method 2: Mobile Browser' },
  { id: 'app-method',               label: 'Method 3: SNGPL Mobile App' },
  { id: 'whatsapp-method',          label: 'Method 4: WhatsApp Method' },
  { id: 'sms-method',               label: 'Method 5: SMS Method' },
  { id: 'pdf-and-print',            label: 'Saving as PDF and Printing' },
  { id: 'office-method',            label: 'Method 6: SNGPL Office Visit' },
  { id: 'troubleshooting',          label: 'Troubleshooting Common Issues' },
  { id: 'faq',                      label: 'Frequently Asked Questions' },
];

const faqs = [
  { q: 'How can I download my SNGPL duplicate bill?', a: 'You can download your SNGPL duplicate bill by visiting the official portal at sngpl.com.pk, entering your consumer number, and clicking the Print/Download option. Use your browser\'s "Save as PDF" option to save it to your device. It takes less than 2 minutes.' },
  { q: 'Is a duplicate SNGPL bill valid for payment?', a: 'Yes, a duplicate SNGPL bill downloaded from the official portal is completely valid for payment. Banks, mobile apps (EasyPaisa, JazzCash), and payment centers all accept it. It carries the same legal status as the original printed bill.' },
  { q: 'How many times can I download my SNGPL duplicate bill?', a: 'There is no limit on how many times you can download your SNGPL duplicate bill from the official portal. You can download it as many times as needed, for as many months as available in the system (typically the last 6-12 months).' },
  { q: 'Can I get a duplicate bill for previous months?', a: 'Yes. The SNGPL portal allows you to access bills for previous months (typically the last 6-12 months). After entering your consumer number, look for options to select different billing months or navigate through bill history.' },
  { q: 'My SNGPL bill did not arrive. Can I get a duplicate?', a: 'Absolutely. If your physical bill did not arrive by post, or was lost or damaged, you can immediately download a duplicate from sngpl.com.pk. This is the recommended way to ensure you always have your bill on time.' },
  { q: 'What if the SNGPL website is not working?', a: 'If the SNGPL portal is temporarily down, try again after a few hours. Alternatively, contact SNGPL via WhatsApp (0311-7000-786) or call 1199 to get your bill amount. For urgent payment needs, most banks\' mobile apps can retrieve your bill amount using just your consumer number.' },
  { q: 'Can I print my SNGPL duplicate bill at home?', a: 'Yes. After downloading the bill as PDF, you can print it on any printer at home or at a nearby printing shop. The printout is accepted at all payment locations. Make sure to print in black and white or color — both are accepted.' },
  { q: 'Is there a fee for getting a duplicate SNGPL bill?', a: 'No. Downloading a duplicate SNGPL bill from the official online portal is completely free. There are no charges for accessing or downloading your bill online. If you visit an SNGPL office for a printed duplicate, a nominal printing fee may apply.' },
  { q: 'Can I get an SNGPL duplicate bill via email?', a: 'SNGPL does not currently offer automatic email delivery of bills for most consumers. However, you can download your bill from the portal and email it to yourself or save it in cloud storage. Contact SNGPL helpline 1199 to inquire if email bill delivery is available for your account.' },
  { q: 'What details are on the SNGPL duplicate bill?', a: 'The duplicate bill contains all the same information as the original: consumer name, consumer number, billing period, meter readings, units consumed (HHM), gas charges, taxes, total payable, due date, payment barcode, and SNGPL contact information.' },
];

export default function SNGPLDuplicateBillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'SNGPL Duplicate Bill', item: 'https://sngplbillcheck.pk/sngpl-duplicate-bill' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'HowTo',
        name: 'How to Download SNGPL Duplicate Bill',
        description: 'Step-by-step guide to download SNGPL duplicate gas bill online',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Visit SNGPL Portal', text: 'Go to sngpl.com.pk' },
          { '@type': 'HowToStep', position: 2, name: 'Enter Consumer Number', text: 'Type your 10-digit SNGPL consumer number' },
          { '@type': 'HowToStep', position: 3, name: 'View Bill', text: 'Your bill details will be displayed' },
          { '@type': 'HowToStep', position: 4, name: 'Download PDF', text: 'Click Print/Download and save as PDF' },
        ],
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-white/5 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <nav className="flex items-center gap-2 text-purple-200 text-sm mb-6">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white">SNGPL Duplicate Bill</span>
          </nav>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge bg-white/20 text-white border border-white/30 mb-4">6 Methods Explained</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight">
                SNGPL Duplicate Bill — Download Guide
              </h1>
              <p className="text-purple-100 text-lg leading-relaxed mb-6">
                Lost your SNGPL gas bill? Learn how to download a duplicate bill online in minutes. Step-by-step guide covering all 6 methods — portal, mobile, app, WhatsApp, SMS, and office visit.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="#online-method" className="btn-secondary bg-white text-purple-700 border-white">Download My Bill ↓</Link>
                <a href="https://sngpl.com.pk/" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-white/40 text-white font-semibold hover:bg-white/10 transition-all text-sm">
                  Official Portal ↗
                </a>
              </div>
            </div>
            <div className="relative h-72 rounded-2xl overflow-hidden shadow-2xl">
              <Image src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=700&q=80"
                alt="Downloading SNGPL duplicate gas bill as PDF on laptop"
                fill className="object-cover" priority />
              <div className="absolute inset-0 bg-purple-900/40" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 rounded-xl p-3 text-sm">
                <p className="font-bold text-gray-900">✅ Free &amp; Instant Download</p>
                <p className="text-gray-600 text-xs mt-1">Your duplicate bill is available 24/7 at the official SNGPL portal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <TableOfContents items={toc} />
        <AdUnit slot="6666666666" />

        {/* SECTION 1 */}
        <section id="what-is-duplicate-bill" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">What is an SNGPL Duplicate Bill?</h2>
          <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80"
              alt="SNGPL gas bill document — what is a duplicate bill"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>An <strong>SNGPL duplicate bill</strong> is an official copy of your monthly gas bill that you can download or print from the SNGPL portal. It contains exactly the same information as the original bill that SNGPL delivers to your doorstep — but you can access it digitally at any time, from anywhere.</p>
            <p>The term &quot;duplicate&quot; simply means it is a reprinted or re-downloaded version of your original bill. It carries the exact same legal validity as the original for all purposes including:</p>
            <ul>
              <li>Paying at bank branches or ATMs</li>
              <li>Paying via mobile banking apps</li>
              <li>Keeping as a record for tax or account purposes</li>
              <li>Providing proof of address or utility service</li>
              <li>Dispute resolution with SNGPL</li>
            </ul>

            <h3>Difference Between Original and Duplicate Bill</h3>
            <table>
              <thead><tr><th>Feature</th><th>Original Bill</th><th>Duplicate Bill</th></tr></thead>
              <tbody>
                <tr><td>Delivery Method</td><td>Physical post / mail carrier</td><td>Online download (PDF)</td></tr>
                <tr><td>Cost</td><td>Free (included in tariff)</td><td>Free (online download)</td></tr>
                <tr><td>Availability</td><td>Once per month by post</td><td>24/7 unlimited downloads</td></tr>
                <tr><td>Legal Validity</td><td>Yes</td><td>Yes — equally valid</td></tr>
                <tr><td>Accepted for Payment</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Accepted as Proof</td><td>Yes</td><td>Yes</td></tr>
                <tr><td>Risk of Loss</td><td>Can be lost in mail</td><td>Saved digitally — never lost</td></tr>
              </tbody>
            </table>

            <div className="success-box">
              <p className="font-semibold text-green-800">✅ Digital is Better</p>
              <p className="text-green-700 text-sm mt-1">Many SNGPL consumers have switched entirely to digital duplicate bills, avoiding reliance on physical mail delivery. The digital bill is more reliable, available immediately, and can be shared via WhatsApp or email instantly.</p>
            </div>
          </div>
        </section>

        {/* SECTION 2 */}
        <section id="why-you-need-it" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Why You Might Need a Duplicate SNGPL Bill</h2>
          <div className="prose-content">
            <p>There are many common scenarios where Pakistani consumers need to download a duplicate SNGPL bill:</p>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { icon: '📬', title: 'Bill Not Delivered', desc: 'Physical bill lost in transit or not delivered by the postman — extremely common in Pakistan.' },
                { icon: '🌧️', title: 'Bill Damaged', desc: 'Original bill damaged by rain, humidity, or handling before payment could be made.' },
                { icon: '🏠', title: 'Proof of Residence', desc: 'Utility bills are widely accepted as proof of address for CNIC verification, bank accounts, and government applications.' },
                { icon: '💳', title: 'Bank Account Opening', desc: 'Banks require recent utility bills for KYC (Know Your Customer) compliance when opening accounts.' },
                { icon: '📊', title: 'Tax Documentation', desc: 'Business owners need utility bills for tax filing, expense claims, and accounting records.' },
                { icon: '🔍', title: 'Billing Dispute', desc: 'When disputing a charge with SNGPL, having a clear copy of the bill is essential for reference.' },
                { icon: '🏢', title: 'Rental Purposes', desc: 'Landlords and tenants often need copies of utility bills for rental agreements.' },
                { icon: '📱', title: 'Digital Payments', desc: 'Some payment apps require you to manually enter bill details — having the bill handy ensures accuracy.' },
              ].map(item => (
                <div key={item.title} className="flex gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 */}
        <section id="online-method" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Method 1: Download via Official SNGPL Portal (Desktop)</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1588776814546-1ffbb5a7aba5?auto=format&fit=crop&w=900&q=80"
              alt="Downloading SNGPL bill via official portal on desktop computer"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>The official SNGPL online portal is the most reliable and recommended method for downloading your duplicate bill. Here is the complete step-by-step process:</p>

            <h3>Step-by-Step Instructions</h3>
            <ol>
              <li><strong>Open your web browser</strong> — Chrome, Firefox, Edge, or Safari on your computer</li>
              <li><strong>Navigate to:</strong> <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">sngpl.com.pk</code></li>
              <li><strong>Find the consumer number input field</strong> on the homepage of the portal</li>
              <li><strong>Enter your 10-digit SNGPL consumer number</strong> without spaces or dashes</li>
              <li><strong>Complete CAPTCHA verification</strong> if shown (click on the checkbox or solve the image puzzle)</li>
              <li><strong>Click &quot;Submit&quot;</strong> or press Enter on your keyboard</li>
              <li><strong>Your bill details appear</strong> — review the bill information displayed</li>
              <li><strong>Click &quot;Print Bill&quot;</strong> — this opens the bill in a printable format in a new tab</li>
              <li><strong>Press Ctrl+P</strong> (Windows/Linux) or <strong>Cmd+P</strong> (Mac) to open the print dialog</li>
              <li><strong>Change the destination/printer</strong> to <strong>&quot;Save as PDF&quot;</strong> (in Chrome) or <strong>&quot;Microsoft Print to PDF&quot;</strong> (Windows Edge)</li>
              <li><strong>Select your save location</strong> — Downloads folder, Desktop, or a cloud-synced folder</li>
              <li><strong>Click Save</strong> — your duplicate bill PDF is now downloaded!</li>
            </ol>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">💡 Quick Tip for Chrome Users</p>
              <p className="text-blue-800 text-sm mt-1">In Google Chrome, when you open the print dialog (Ctrl+P), look for the &quot;Destination&quot; dropdown on the left side. Click it and select &quot;Save as PDF&quot; at the top of the list. This creates a perfect PDF of your bill on your computer.</p>
            </div>

            <h3>Alternatively: Use Our Bill Checker</h3>
            <p>You can also use our SNGPL Bill Checker on this website. Simply enter your consumer number in the checker below, click &quot;Check SNGPL Bill Now&quot; — and we will redirect you to the official SNGPL portal where you can download your bill directly.</p>
          </div>
        </section>

        {/* Mini checker */}
        <div className="my-8">
          <SNGPLChecker />
        </div>

        <AdUnit slot="7777777777" />

        {/* SECTION 4 */}
        <section id="mobile-method" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Method 2: Download via Mobile Browser</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80"
              alt="Downloading SNGPL duplicate bill on mobile phone browser"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Most Pakistanis prefer checking and downloading their bills on their smartphones. Here is how to download your SNGPL duplicate bill on Android and iPhone:</p>

            <h3>On Android Phone (Chrome Browser)</h3>
            <ol>
              <li>Open <strong>Chrome</strong> browser on your Android phone</li>
              <li>Go to <strong>sngpl.com.pk</strong></li>
              <li>Enter your consumer number and submit</li>
              <li>When the bill loads, tap the <strong>Print Bill</strong> button</li>
              <li>The bill opens in a printable view</li>
              <li>Tap the <strong>three dots menu</strong> (⋮) in the top right corner</li>
              <li>Tap <strong>&quot;Share&quot;</strong> or look for a <strong>download/print</strong> icon</li>
              <li>Select <strong>&quot;Print&quot;</strong> from the menu</li>
              <li>In the print dialog, select <strong>&quot;Save as PDF&quot;</strong></li>
              <li>Choose your download location and tap <strong>Save</strong></li>
            </ol>

            <h3>On iPhone (Safari Browser)</h3>
            <ol>
              <li>Open <strong>Safari</strong> on your iPhone</li>
              <li>Navigate to <strong>sngpl.com.pk</strong></li>
              <li>Enter consumer number and view your bill</li>
              <li>Tap the <strong>Print Bill</strong> option</li>
              <li>Tap the <strong>Share icon</strong> (box with arrow pointing up) at the bottom</li>
              <li>Scroll down and tap <strong>&quot;Print&quot;</strong></li>
              <li>In the print preview, do a <strong>pinch-out gesture</strong> on the preview page</li>
              <li>This converts it to a PDF — tap the <strong>Share</strong> icon again</li>
              <li>Choose <strong>&quot;Save to Files&quot;</strong> to save as PDF to your iPhone</li>
            </ol>

            <div className="warning-box">
              <p className="font-semibold text-amber-800">📱 Mobile Storage Tip</p>
              <p className="text-amber-700 text-sm mt-1">Save your SNGPL bill PDF to Google Drive or iCloud so it is always accessible from any device. This is especially useful when you need to show the bill as proof of address at a bank or government office.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5 */}
        <section id="app-method" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Method 3: Download via SNGPL Mobile App</h2>
          <div className="prose-content">
            <p>SNGPL has an official mobile application that provides easy access to your gas bills and account information. Here is how to use it:</p>

            <h3>Installing the SNGPL App</h3>
            <ol>
              <li>Open <strong>Google Play Store</strong> (Android) or <strong>Apple App Store</strong> (iPhone)</li>
              <li>Search for <strong>&quot;SNGPL&quot;</strong></li>
              <li>Download the official app from SNGPL (verify developer name)</li>
              <li>Wait for installation to complete</li>
              <li>Open the app</li>
            </ol>

            <h3>Using the App for Duplicate Bill</h3>
            <ol>
              <li>Open the SNGPL app on your phone</li>
              <li>Navigate to <strong>&quot;Bill Inquiry&quot;</strong> or <strong>&quot;My Bills&quot;</strong> section</li>
              <li>Enter your <strong>consumer number</strong></li>
              <li>Your current and previous bills will be listed</li>
              <li>Tap on the bill you need</li>
              <li>Select <strong>&quot;Download&quot;</strong> or <strong>&quot;Print Bill&quot;</strong></li>
              <li>The bill will be saved to your phone or you can share it directly</li>
            </ol>

            <div className="highlight-box">
              <p className="font-semibold text-blue-900">📲 App Advantages</p>
              <ul className="text-blue-800 text-sm mt-2 space-y-1">
                <li>• Access bills faster without typing the portal URL each time</li>
                <li>• View billing history more conveniently</li>
                <li>• Receive notifications when new bill is generated</li>
                <li>• Some versions allow direct payment from the app</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 6 */}
        <section id="whatsapp-method" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Method 4: Get Duplicate Bill via WhatsApp</h2>
          <div className="relative w-full h-52 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=900&q=80"
              alt="Contacting SNGPL via WhatsApp to get duplicate gas bill"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>SNGPL&apos;s WhatsApp service is ideal for consumers who have difficulty with web browsers or need assistance with their bill. Here is how to use it:</p>

            <h3>Steps to Get Bill via WhatsApp</h3>
            <ol>
              <li>Save this number to your contacts: <strong>0311-7000-786</strong></li>
              <li>Open WhatsApp and start a new chat with this number</li>
              <li>Type: <strong>&quot;Hi&quot;</strong> or <strong>&quot;Assalam o Alaikum&quot;</strong> to initiate the conversation</li>
              <li>The SNGPL chatbot or representative will respond</li>
              <li>Follow the prompts and provide your <strong>consumer number</strong></li>
              <li>Request your <strong>duplicate bill or bill amount</strong></li>
              <li>SNGPL will respond with your bill details or a PDF attachment</li>
            </ol>

            <h3>Sample WhatsApp Message</h3>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-4 my-4 font-mono text-sm">
              <p className="text-green-800">You: Assalam o Alaikum. I need my duplicate gas bill.</p>
              <p className="text-green-800 mt-2">You: My consumer number is: 1234567890</p>
              <p className="text-green-800 mt-2">You: Please send my current month bill.</p>
            </div>
            <p>The SNGPL WhatsApp service typically operates during business hours (Monday–Saturday, 9am–5pm). Response times may vary depending on demand.</p>
          </div>
        </section>

        {/* SECTION 7 */}
        <section id="sms-method" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Method 5: Get Bill Information via SMS</h2>
          <div className="prose-content">
            <p>For consumers with basic phones or limited internet access, SNGPL provides bill information via SMS:</p>

            <h3>SMS Bill Inquiry Steps</h3>
            <ol>
              <li>Open your phone&apos;s messaging (SMS) app</li>
              <li>Create a new message to: <strong>5051</strong></li>
              <li>In the message body, type: <strong>BILL [space] [YourConsumerNumber]</strong></li>
              <li>Example: <code className="bg-gray-100 px-2 py-0.5 rounded text-sm font-mono">BILL 1234567890</code></li>
              <li>Send the message</li>
              <li>Within a few minutes, you will receive an SMS with your current bill amount and due date</li>
            </ol>

            <div className="warning-box">
              <p className="font-semibold text-amber-800">⚠️ SMS Service Note</p>
              <p className="text-amber-700 text-sm mt-1">The SMS service provides only the bill amount and due date — not the full bill breakdown or PDF. Standard SMS charges from your mobile network may apply. The SMS service availability may change — call 1199 to confirm it is currently active.</p>
            </div>
          </div>
        </section>

        {/* SECTION 8 */}
        <section id="pdf-and-print" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Saving Your SNGPL Bill as PDF and Printing</h2>
          <div className="relative w-full h-56 rounded-2xl overflow-hidden shadow-lg mb-6">
            <Image src="https://images.unsplash.com/photo-1612831455359-970e23a1e4e9?auto=format&fit=crop&w=900&q=80"
              alt="Printing SNGPL gas bill duplicate on office printer"
              fill className="object-cover" />
          </div>
          <div className="prose-content">
            <p>Once you have accessed your SNGPL bill online, you have several options for saving and printing it:</p>

            <h3>Saving as PDF — All Browsers</h3>
            <table>
              <thead><tr><th>Browser</th><th>Steps to Save as PDF</th></tr></thead>
              <tbody>
                <tr><td>Google Chrome</td><td>Ctrl+P → Destination → Save as PDF → Save</td></tr>
                <tr><td>Mozilla Firefox</td><td>Ctrl+P → Print to PDF → Save</td></tr>
                <tr><td>Microsoft Edge</td><td>Ctrl+P → Printer → Microsoft Print to PDF → Print</td></tr>
                <tr><td>Safari (Mac)</td><td>Cmd+P → PDF dropdown → Save as PDF</td></tr>
                <tr><td>Safari (iPhone)</td><td>Share → Print → Pinch out → Share → Save to Files</td></tr>
                <tr><td>Chrome (Android)</td><td>Menu → Print → Save as PDF</td></tr>
              </tbody>
            </table>

            <h3>Printing the Duplicate Bill</h3>
            <p>To print your SNGPL bill at home or at a print shop:</p>
            <ol>
              <li>Open the downloaded PDF file</li>
              <li>Press <strong>Ctrl+P</strong> (Windows) or <strong>Cmd+P</strong> (Mac) to open print dialog</li>
              <li>Select your connected printer from the list</li>
              <li>Recommended settings: <strong>A4 paper, portrait orientation, fit to page</strong></li>
              <li>Set number of copies as needed</li>
              <li>Click <strong>Print</strong></li>
            </ol>
            <p>If you don&apos;t have a printer at home, take the PDF on a USB drive or use a phone to visit a nearby print shop. Print shops are widely available in all Pakistani cities and towns and typically charge PKR 10-20 per page.</p>

            <h3>Sending Your Bill via WhatsApp or Email</h3>
            <p>Once saved as PDF, you can easily share your SNGPL bill:</p>
            <ul>
              <li><strong>WhatsApp:</strong> Tap the attachment icon (📎) in any chat → Select Documents → Choose your bill PDF → Send</li>
              <li><strong>Email:</strong> Compose a new email → Attach the PDF file → Send to yourself or the recipient</li>
              <li><strong>Cloud Storage:</strong> Upload to Google Drive, Dropbox, or OneDrive for access from any device</li>
            </ul>
          </div>
        </section>

        {/* SECTION 9 */}
        <section id="office-method" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Method 6: Get Duplicate Bill at SNGPL Office</h2>
          <div className="prose-content">
            <p>If you prefer in-person service or have difficulty with online methods, you can visit your nearest SNGPL subdivision office to get a printed duplicate bill:</p>

            <h3>What to Bring</h3>
            <ul>
              <li>Your original CNIC (national identity card)</li>
              <li>Your SNGPL consumer number (if you have it)</li>
              <li>Your complete registered address</li>
              <li>A small printing fee (typically PKR 20–50)</li>
            </ul>

            <h3>Process at SNGPL Office</h3>
            <ol>
              <li>Visit your nearest SNGPL subdivision office during working hours (typically 8am–4pm, Mon–Fri)</li>
              <li>Go to the billing counter or customer service desk</li>
              <li>Provide your consumer number or address for lookup</li>
              <li>Show your CNIC for identity verification</li>
              <li>Request a duplicate bill for the specific month needed</li>
              <li>Pay the nominal printing fee if applicable</li>
              <li>Receive your printed duplicate bill</li>
            </ol>
          </div>
        </section>

        {/* SECTION 10 */}
        <section id="troubleshooting" className="mb-14">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4">Troubleshooting — Common Problems &amp; Solutions</h2>
          <div className="prose-content">
            <div className="space-y-4">
              {[
                { p: 'Cannot find Print/Download button on SNGPL portal', s: 'The print button may not be immediately visible. Scroll down on the bill page to find it. Some portal versions show it as a printer icon at the top right of the bill display. Try right-clicking the page and selecting "Print" from the context menu as an alternative.' },
                { p: 'Bill downloads as a blank PDF', s: 'This can happen if the page did not fully load before printing. Reload the bill page, wait for it to fully load (all text and numbers should be visible), then try the print-to-PDF process again. Disabling ad blockers may also help.' },
                { p: 'PDF file is corrupted or won\'t open', s: 'Try downloading the bill again. If using a mobile browser, try downloading on a desktop computer instead. Ensure you have a PDF reader installed — download Adobe Reader free from Adobe\'s website or use the built-in PDF viewer on modern devices.' },
                { p: 'Previous months\' bills not showing', s: 'The SNGPL portal typically shows the current and recent bills. For older bills (more than 6 months), they may not be available online. Visit your SNGPL subdivision office and request a printout of older bills — they can access historical records from their system.' },
                { p: 'Duplicate bill showing wrong details', s: 'If the bill shows incorrect details (wrong name, address, or amount), do not use it for payment. Contact SNGPL immediately at 1199 or visit the subdivision office. Billing errors need to be corrected at the source before payment.' },
              ].map((item, i) => (
                <details key={i} className="border border-gray-200 rounded-xl overflow-hidden group">
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-gray-900 text-sm hover:bg-gray-50 transition-colors list-none">
                    <span>⚠️ Problem: {item.p}</span>
                    <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-700 bg-green-50 pt-3 leading-relaxed">
                    ✅ <strong>Solution:</strong> {item.s}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100 mb-12">
          <h3 className="font-bold text-gray-900 mb-3">Related Guides</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/sngpl-bill-check-online" className="btn-primary py-2.5 px-5 text-sm">🔍 Bill Check Guide</Link>
            <Link href="/sngpl-consumer-number-guide" className="btn-secondary py-2.5 px-5 text-sm">🔢 Consumer Number Guide</Link>
            <Link href="/gas-bill-calculator" className="btn-secondary py-2.5 px-5 text-sm">🧮 Bill Calculator</Link>
          </div>
        </section>
      </article>

      <FAQ items={faqs} title="SNGPL Duplicate Bill — FAQs" />
    </>
  );
}
