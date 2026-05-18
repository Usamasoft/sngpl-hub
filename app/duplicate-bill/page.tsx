import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';

export const metadata: Metadata = {
  title: 'SNGPL Duplicate Bill Download — Portal, App, WhatsApp & SMS Guide',
  description: 'Download SNGPL duplicate gas bill instantly via official portal, mobile app, WhatsApp or SMS. Step-by-step guide for all methods. Free — no registration.',
  alternates: { canonical: 'https://sngplbillcheck.pk/duplicate-bill' },
  openGraph: {
    title: 'SNGPL Duplicate Bill Download — All Methods Guide',
    description: 'Get your SNGPL duplicate bill in minutes. Portal PDF download, mobile app, WhatsApp service, and office methods all explained step by step.',
    url: 'https://sngplbillcheck.pk/duplicate-bill',
  },
};

const methods = [
  {
    icon: '🌐', title: 'Official Portal (Fastest)', badge: 'Recommended', steps: [
      'Open sngpl.com.pk in any browser',
      'Enter your 10–13 digit consumer number',
      'Click "Get Bill" to view your current bill',
      'Click "Download PDF" or "Print Bill" button',
      'Save or print the official duplicate PDF',
    ],
    detail: 'Available 24/7. Provides current month\'s bill instantly. The downloaded PDF is an officially valid duplicate identical to the original mailed bill.',
  },
  {
    icon: '📱', title: 'SNGPL Mobile App (Best for History)', badge: '12 Months History', steps: [
      'Download "SNGPL Consumer" from Play Store or App Store',
      'Register with consumer number + mobile OTP',
      'Tap "My Bills" or "Bill History"',
      'Select the billing month you need',
      'Tap "Download" to save PDF to your phone',
    ],
    detail: 'Stores up to 12 months of previous bills. Ideal for getting bills from 1–12 months ago. Also sends push notifications when new bills are generated.',
  },
  {
    icon: '💬', title: 'WhatsApp Service', badge: 'Quick Summary', steps: [
      'Find official SNGPL WhatsApp number on sngpl.com.pk',
      'Save the number to your phone contacts',
      'Send your consumer number as a WhatsApp message',
      'Receive bill summary and download link instantly',
      'Download PDF from the link provided in the reply',
    ],
    detail: 'Returns bill summary within seconds. Some regions also receive a PDF download link. Check sngpl.com.pk for the current official WhatsApp number.',
  },
  {
    icon: '📨', title: 'SMS Service (No Internet)', badge: 'Basic Phones', steps: [
      'Find SNGPL\'s SMS short code on sngpl.com.pk',
      'Send your consumer number via SMS to that code',
      'Receive text with bill amount, period, and due date',
      'Use portal or app for full PDF duplicate',
      'SMS works on any phone without internet',
    ],
    detail: 'Provides bill amount and due date only — no PDF. Best for quick amount checks when internet is unavailable. Works on basic feature phones.',
  },
  {
    icon: '🏢', title: 'SNGPL Office (Stamped Copy)', badge: 'Official Stamp', steps: [
      'Visit nearest SNGPL Service Delivery Center',
      'Bring your original CNIC',
      'Request a duplicate bill printout at the counter',
      'SDC staff prints and officially stamps your bill',
      'Collect the physically stamped duplicate',
    ],
    detail: 'Provides an officially stamped paper copy. Required for legal proceedings, some visa applications, and formal government submissions. Small fee may apply.',
  },
];

const faqs = [
  { q: 'Is a duplicate SNGPL bill valid for bank payment?', a: 'Yes. A duplicate SNGPL bill downloaded from the official portal, mobile app, or printed at the SNGPL office is equally valid for payment at any bank branch, ATM, Easypaisa, JazzCash, or SNGPL franchise. The barcode and 17-digit payment reference number are identical to the original bill.' },
  { q: 'Is there a fee for downloading a duplicate SNGPL bill online?', a: 'No. Downloading your duplicate SNGPL bill from sngpl.com.pk or the SNGPL Consumer mobile app is completely free. There is no charge for online or app-based duplicate bills. The SNGPL office may charge a nominal fee (Rs. 20–50) for physically printed and officially stamped copies.' },
  { q: 'How do I get a duplicate bill for previous months?', a: 'The SNGPL Consumer mobile app stores up to 12 months of billing history — tap "My Bills" and select any previous month. The official portal (sngpl.com.pk) typically shows only the current or most recent bill. For bills older than 12 months, visit your SNGPL Service Delivery Center with your CNIC.' },
  { q: 'What does "duplicate" mean on an SNGPL bill?', a: '"Duplicate" simply means it is a reprint or digital copy of the original. It contains identical information and is legally and practically equivalent to the original bill for all payment and verification purposes. In Pakistan, a duplicate gas bill is standard documentation accepted by banks, institutions, and government offices.' },
  { q: 'My bill is overdue and I lost the original. What should I do?', a: 'Download a duplicate immediately from sngpl.com.pk and pay as soon as possible. A 10% late surcharge will appear on your next bill for the overdue period, but paying now stops further accumulation. Call SNGPL helpline 1199 if you need information about your exact outstanding amount.' },
  { q: 'Can I use a duplicate bill as address proof?', a: 'Yes. An SNGPL gas bill (original or official duplicate) is widely accepted as address verification by banks for account opening, educational institutions, and government offices for various applications. For legal proceedings or international visa applications, a physically stamped duplicate from the SNGPL office is recommended for higher credibility.' },
  { q: 'My physical bill never arrives in the post. Is this normal?', a: 'Unfortunately, yes — postal delivery of SNGPL bills is unreliable in many Pakistani cities. Delayed or lost postal delivery is very common. This is why checking your bill online monthly is strongly recommended rather than relying on postal delivery. Setting a monthly reminder to check sngpl.com.pk prevents late payments from delayed post.' },
  { q: 'Can I get a SNGPL bill older than 12 months?', a: 'Bills older than 12 months are not available through the mobile app or online portal. For these older bills, visit your SNGPL Service Delivery Center with your CNIC. SNGPL can print historical bills from their billing archive, typically going back 2–3 years. A fee may apply for printing archived bills.' },
  { q: 'Is a PDF bill printed on plain paper accepted for address proof?', a: 'A printed copy of the PDF downloaded from the official SNGPL portal is generally accepted for address proof in most situations. However, for formal legal, government, or banking purposes where an "original document" is required, present the PDF on a mobile screen or request an officially stamped copy from an SNGPL Service Delivery Center.' },
  { q: 'How do I download a duplicate bill for a property I manage as landlord?', a: 'If the gas connection is in your name (you are the registered account owner), enter the consumer number on sngpl.com.pk or the SNGPL app to download the bill. If the connection is in a tenant\'s name or you need access to multiple properties, use the consumer numbers for each property — no special landlord access is required.' },
  { q: 'What if the Download PDF button is missing on the SNGPL portal?', a: 'The download button availability varies by browser and portal version. If it is missing, use your browser\'s built-in PDF printing: press Ctrl+P (Windows) or Cmd+P (Mac), select "Save as PDF" as the printer/destination, adjust print settings to fit the page, and click Save. The resulting PDF is a valid duplicate bill.' },
  { q: 'Can my tenant get a duplicate bill without my CNIC?', a: 'Yes. Downloading a duplicate bill from the portal or mobile app requires only the consumer number — no CNIC or identity verification. Your tenant can download the bill by entering the consumer number. However, they cannot make account changes without the registered owner\'s presence and CNIC.' },
];

export default function DuplicateBillPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to Download SNGPL Duplicate Bill',
        description: 'Step-by-step guide to download a duplicate SNGPL gas bill online via portal, mobile app, WhatsApp, or SMS.',
        step: [
          { '@type': 'HowToStep', position: 1, name: 'Open Official Portal', text: 'Go to sngpl.com.pk in any browser.' },
          { '@type': 'HowToStep', position: 2, name: 'Enter Consumer Number', text: 'Type your 10–13 digit consumer number and click Get Bill.' },
          { '@type': 'HowToStep', position: 3, name: 'Download PDF', text: 'Click the Download PDF or Print Bill button to save your duplicate.' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'Duplicate Bill Download', item: 'https://sngplbillcheck.pk/duplicate-bill' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f: {q:string;a:string}) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Duplicate Bill</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Duplicate Bill Download — All Methods</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Lost your gas bill or need a copy for address proof? Get an official SNGPL duplicate in under a minute — via portal, app, WhatsApp, SMS, or office. Full guide with every method explained.</p>
        </div>
      </section>

      {/* Quick checker */}
      <section className="bg-blue-50 border-b border-blue-100 py-7 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-3">Check &amp; download your bill instantly:</p>
          <BillChecker compact />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 prose-content">

        <h2>What is an SNGPL Duplicate Bill?</h2>
        <p>A duplicate SNGPL bill is an official reprint of your gas billing statement. The word &ldquo;duplicate&rdquo; refers to the fact that it is a second copy of the original bill — it carries identical information to the original printed bill that SNGPL mails to your address each month. In Pakistan&apos;s utility billing context, an official duplicate is legally and practically equivalent to the original for all purposes.</p>
        <p>Your duplicate bill contains all the same information as the original: your consumer number, account owner name, connection address, billing period, meter readings (previous and current), HHM units consumed, slab-wise charge calculation, GIDC levy, GST, total amount due, payment due date, and the payment barcode with its 17-digit payment reference number. Bank tellers, ATMs, and digital payment apps use this barcode or reference number — not the physical bill itself — to process payments, so a clean printout or PDF of the duplicate works perfectly.</p>
        <p>The concept of a &ldquo;duplicate&rdquo; as opposed to an &ldquo;original&rdquo; only matters in formal legal and governmental contexts where original documents are required. For the vast majority of practical uses — bank payment, address verification, bill dispute, consumption tracking — the online duplicate is treated as the primary document by all parties.</p>

        <h2>Why You Might Need a Duplicate SNGPL Bill</h2>
        <p>There are numerous situations where you may need a duplicate bill. Here are the most common scenarios:</p>
        <ul>
          <li><strong>Physical bill not received:</strong> Pakistan Post delivery of utility bills is notoriously unreliable in many cities. Bills can take weeks to arrive, arrive at wrong addresses due to handwriting errors, or not arrive at all. A duplicate ensures you always have access to your bill regardless of postal delivery.</li>
          <li><strong>Bill lost or damaged:</strong> Physical bills can be misplaced, destroyed by pets, damaged by rain or water, or simply discarded accidentally. A digital duplicate is available any time from the SNGPL portal or mobile app.</li>
          <li><strong>Address proof for bank account opening:</strong> Banks in Pakistan require a recent utility bill (gas, electricity, or PTCL) as address proof for new account opening, KYC updates, loan applications, and credit card applications. An SNGPL duplicate is accepted by all major banks.</li>
          <li><strong>Address proof for educational institutions:</strong> Schools, colleges, and universities often require utility bills for admission, scholarship applications, or hostel registration as proof of permanent residence address.</li>
          <li><strong>Address proof for government applications:</strong> Various government documents and applications — including passport applications, CNIC updates, domicile certificates, and driving license renewal — may accept a recent utility bill as secondary address proof.</li>
          <li><strong>Address proof for visa applications:</strong> Embassy visa applications for international travel often require recent utility bills as evidence of local residence. An SNGPL gas bill in your name at your residential address is strong documentary evidence of residence.</li>
          <li><strong>Billing dispute documentation:</strong> When disputing a bill with SNGPL, having the official duplicate PDF allows you to reference specific line items and share the document with SNGPL&apos;s customer service electronically.</li>
          <li><strong>Accounting and tax records:</strong> Property owners, businesses using gas connections, and landlords may need monthly gas bill records for accounting purposes, income tax filing, or audit documentation.</li>
          <li><strong>Verifying bill before paying:</strong> Before making any payment, it is good practice to download and verify your bill amount to ensure you are paying the correct figure and that no unexpected charges have appeared.</li>
        </ul>

        <h2>Why SNGPL Bills Often Do Not Arrive by Post</h2>
        <p>Many SNGPL consumers never see their physical gas bill arrive in the mail. Understanding why this happens helps you plan for it proactively:</p>
        <ul>
          <li><strong>Pakistan Post reliability issues:</strong> Pakistan Post&apos;s residential delivery service is inconsistent in many areas, particularly in major urban centers where mail volumes are high and delivery routes are not always well-maintained.</li>
          <li><strong>Address database errors:</strong> SNGPL&apos;s address records may have outdated or incorrectly formatted addresses. Bills may be delivered to a slightly different address format than you expect, or to a nearby property by mistake.</li>
          <li><strong>Apartment building delivery problems:</strong> In multi-story buildings and apartment complexes, the postman may deliver all bills to the ground-floor reception or guard area without distributing them to individual units, leading to bills sitting uncollected for weeks.</li>
          <li><strong>New area or recently changed address:</strong> If you have recently moved or if your area has been newly incorporated into SNGPL&apos;s postal delivery route, bills may take several months to start arriving reliably at the new address.</li>
          <li><strong>Holiday and seasonal delays:</strong> Pakistan Post experiences particularly significant delays around major national holidays (Eid, Independence Day), monsoon season (when roads may be impassable), and year-end periods.</li>
        </ul>
        <p>The solution is simple: do not wait for your physical bill. Set a monthly calendar reminder approximately 5 days before your expected bill due date and proactively check sngpl.com.pk. This takes 30 seconds and eliminates any risk of missing a due date due to postal issues.</p>

        <h2>All 5 Methods to Get Your SNGPL Duplicate Bill</h2>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8">
        <div className="grid sm:grid-cols-1 gap-5">
          {methods.map((m, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{m.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 text-base">{m.title}</h3>
                    <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">{m.badge}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <ol className="space-y-2 flex-1">
                  {m.steps.map((step, si) => (
                    <li key={si} className="flex gap-2.5 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold">{si + 1}</span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="sm:w-48 flex-shrink-0">
                  <div className="bg-gray-50 rounded-xl p-3 text-xs text-gray-600 leading-relaxed border border-gray-100">
                    💡 {m.detail}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 prose-content pb-6">

        <h2>Understanding Your Duplicate Bill — Every Section Explained</h2>
        <p>When you download or print your SNGPL duplicate bill, you will find several distinct sections. Here is what each one contains and why it matters:</p>

        <h3>Bill Header</h3>
        <p>The top of the bill shows the SNGPL logo, the billing month and year, the bill generation date, and the billing period (exact &ldquo;from&rdquo; and &ldquo;to&rdquo; dates for the meter reading period). A &ldquo;Duplicate&rdquo; watermark or notation may appear on digitally downloaded copies to distinguish them from the original mailed bill. This watermark does not reduce the bill&apos;s validity in any way.</p>

        <h3>Consumer Information Block</h3>
        <p>This section shows your complete account information: consumer number (the most important identifier), account holder name as registered with SNGPL, full connection address (house number, street, area, city), meter number (the physical device), connection type (domestic, commercial, or industrial), and your distribution circle code. Always verify this information is current and correct. If your name or address has changed, visit an SNGPL Service Delivery Center to update your records.</p>

        <h3>Meter Readings and Consumption</h3>
        <p>This section shows the previous month&apos;s meter reading (carried forward from last month&apos;s bill), the current month&apos;s reading (taken by the field meter reader), the reading date, and the difference between the two readings — your HHM (Hundred Heat Meters) consumed for this billing period. Look for the reading type indicator: &ldquo;A&rdquo; means an actual meter reading was taken; &ldquo;E&rdquo; means the reading was estimated because the meter reader could not access your property. Estimated readings can be disputed if they seem significantly different from your actual meter display.</p>

        <h3>Charge Breakdown (The Bill Calculation)</h3>
        <p>This is the most informative section of your bill. It shows how your consumption was applied to SNGPL&apos;s tariff slabs, producing the base gas charge. Then GIDC (10% levy) and GST (17% tax) are added as separate line items. If you have arrears from a previous month, they appear here. Any credits or advance payments are shown as deductions. Use our <Link href="/calculator">SNGPL gas bill calculator</Link> to verify this calculation against your own consumption figure.</p>

        <h3>Bill Summary</h3>
        <p>A concise summary showing: Current Bill amount (this month&apos;s charges only), any Previous Balance or Arrears (unpaid from prior months), any Credits (overpayments), Late Payment Surcharge (if applicable), and the <strong>Total Amount Due</strong> — the figure you need to pay by the due date. The due date is displayed prominently near the total amount.</p>

        <h3>Payment Slip (Lower Portion)</h3>
        <p>The bottom section of the bill is the payment slip — a detachable portion containing all information needed to process your payment. It includes the consumer number, billing period, total amount due, due date, and most importantly the <strong>17-digit payment reference number</strong> and a barcode. Bank tellers scan this barcode or manually enter the 17-digit reference to process your payment. When paying via ATM or online banking, you enter the consumer number (not the reference number) — the bank fetches the bill amount automatically.</p>

        <h2>How to Use Your Duplicate Bill for Address Verification</h2>
        <p>SNGPL gas bills are one of the most widely accepted utility documents for address verification in Pakistan. Here is how to use a duplicate bill for specific official purposes:</p>

        <h3>Bank Account Opening / KYC Update</h3>
        <p>Banks require a utility bill showing your current residential address, dated within the last 3 months. A downloaded PDF from the SNGPL portal is accepted by HBL, UBL, MCB, Meezan, Bank Alfalah, and virtually all other Pakistani banks. Bring a printout (color print preferred) or show the PDF on your phone during the account opening process. Some banks also accept an email to their KYC team with the PDF attached. The bill must be in the account holder&apos;s name — if the gas connection is in a family member&apos;s name, you may need an affidavit confirming you reside at the same address.</p>

        <h3>Pakistan Passport / CNIC Applications</h3>
        <p>NADRA accepts utility bills as supplementary address proof for CNIC issuance, renewal, and correction. Similarly, the Passport Office accepts utility bills for new passport applications. For these purposes, a plain printout of the SNGPL portal PDF is generally accepted. If specifically asked for an &ldquo;original bill,&rdquo; obtain a physically stamped copy from your nearest SNGPL Service Delivery Center.</p>

        <h3>Visa Applications</h3>
        <p>For international visa applications (UK, Schengen, Canada, USA), the utility bill is used as evidence of ties to Pakistan and residential address. Most embassies accept plain printed copies of digital utility bills without requiring a stamp, especially for minor documentation. For the UK visa or any application specifically stating &ldquo;original utility bill required,&rdquo; use a physically stamped copy from the SNGPL office, ideally printed on official SNGPL letterhead.</p>

        <h2>Archiving Your SNGPL Bills — Best Practices</h2>
        <p>Maintaining organized records of your gas bills is useful for tracking consumption trends, resolving disputes, filing taxes, and providing historical documentation. Here is an efficient archiving strategy:</p>
        <ul>
          <li><strong>Monthly downloads:</strong> Set a calendar reminder on your phone to download your SNGPL bill PDF on the first of each month. Rename the file with a clear naming convention: &ldquo;SNGPL_Dec2024.pdf,&rdquo; &ldquo;SNGPL_Jan2025.pdf,&rdquo; etc.</li>
          <li><strong>Cloud storage:</strong> Save all bill PDFs to Google Drive, Dropbox, or iCloud organized in a folder named &ldquo;Utility Bills&rdquo; or &ldquo;SNGPL.&rdquo; Cloud storage ensures you can access bills from any device and they are protected against phone damage or loss.</li>
          <li><strong>SNGPL mobile app history:</strong> The app stores the most recent 12 months of bills automatically — use this as your primary reference for recent bills. Download and save any bills you need beyond 12 months before they expire from the app&apos;s history.</li>
          <li><strong>Annual archive:</strong> At the end of each year, create a ZIP folder of that year&apos;s 12 monthly bills and label it (e.g., &ldquo;SNGPL_2024_archive.zip&rdquo;). This makes retrieval easy for tax purposes or multi-year billing disputes.</li>
          <li><strong>How long to keep bills:</strong> Keep bills for a minimum of 3 years for personal reference and potential dispute purposes. For tax and accounting purposes, keep 6 years as per Pakistan&apos;s standard documentation retention requirements. For rental properties with gas connections in your name, keep all bills as long as you own the property.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 mt-4">
          {faqs.map((f, i) => (
            <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-50 transition-colors select-none">
                <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                <span className="flex-shrink-0 text-blue-500 group-open:rotate-180 transition-transform duration-200">▾</span>
              </summary>
              <div className="p-4 pt-0 bg-white border-t border-gray-100">
                <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center border border-gray-200">
          {[
            { href: '/',                label: '🔍 Check Bill Now',     desc: 'Official portal redirect' },
            { href: '/consumer-number', label: '🔢 Consumer Number',    desc: 'Find your account number' },
            { href: '/payment-guide',   label: '💳 Payment Guide',      desc: 'All payment methods' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all no-underline group">
              <div className="font-bold text-blue-700 group-hover:text-blue-800">{l.label}</div>
              <div className="text-xs text-gray-500 mt-1">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
