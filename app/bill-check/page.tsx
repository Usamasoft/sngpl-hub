import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';

export const metadata: Metadata = {
  title: 'SNGPL Bill Check Online 2026 — Step-by-Step Complete Guide',
  description: 'How to check SNGPL gas bill online using consumer number. Desktop, mobile, app methods explained. Bill components, common errors & FAQs — full guide.',
  alternates: { canonical: 'https://sngplbillcheck.pk/bill-check' },
  openGraph: {
    title: 'SNGPL Bill Check Online 2026 — Complete Step-by-Step Guide',
    description: 'How to check SNGPL gas bill online using consumer number. Desktop, mobile, app methods. Bill components, FAQs — complete free guide.',
    url: 'https://sngplbillcheck.pk/bill-check',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SNGPL Bill Check Online 2026 — Complete Guide',
    description: 'Check your SNGPL gas bill online. Desktop, mobile, app methods + FAQs. Free Pakistan gas bill guide.',
  },
};

const tocItems = [
  { id: 'what-is-sngpl',      label: 'What is SNGPL?' },
  { id: 'consumer-number',    label: 'Your Consumer Number' },
  { id: 'desktop-guide',      label: 'Desktop Guide (7 steps)' },
  { id: 'mobile-guide',       label: 'Mobile Guide (5 steps)' },
  { id: 'app-guide',          label: 'SNGPL App Guide' },
  { id: 'billing-cycle',      label: 'Monthly Billing Cycle' },
  { id: 'bill-components',    label: 'Bill Components Explained' },
  { id: 'calculation-example',label: 'Calculation Example' },
  { id: 'dispute',            label: 'Disputing Your Bill' },
  { id: 'seasonal',           label: 'Seasonal Bill Variations' },
  { id: 'errors',             label: 'Common Errors & Fixes' },
  { id: 'faq',                label: 'Frequently Asked Questions' },
];

const faqs = [
  { q: 'What is the SNGPL bill check portal URL?', a: 'The official SNGPL bill checking portal is sngpl.com.pk. You can enter your consumer number directly on that page to view your current bill. Our tool on this page safely redirects you there with your number pre-filled.' },
  { q: 'Where can I find my SNGPL consumer number?', a: 'Your consumer number is printed at the top-right section of your SNGPL gas bill. It is typically 10 to 13 digits long. You can also find it on your meter card attached near the gas meter, or call SNGPL helpline 1199 for recovery.' },
  { q: 'Is it free to check SNGPL bill online?', a: 'Yes, checking your SNGPL gas bill online is completely free. The official SNGPL bill portal requires no registration or payment. You just need your consumer number to access your bill information at any time.' },
  { q: 'Can I check the bill on my mobile phone?', a: 'Yes. The SNGPL bill portal is mobile-responsive and works on all smartphones. Open any browser (Chrome, Safari, or Firefox), go to sngpl.com.pk, and enter your consumer number to view your bill instantly.' },
  { q: 'What if my consumer number is not found?', a: 'If your consumer number is not found, double-check the digits from your physical bill. Ensure you are not including spaces or leading zeros incorrectly. If the problem persists, contact SNGPL helpline 1199 or visit your nearest SNGPL Service Delivery Center with your CNIC.' },
  { q: 'How many digits is the SNGPL consumer number?', a: 'SNGPL consumer numbers are typically 10 to 13 digits long depending on your region and connection type. The first few digits represent the region and distribution code, while the remaining digits are your unique account identifier.' },
  { q: 'Can I check bills for multiple connections?', a: 'Yes, you can check bills for as many SNGPL connections as you have consumer numbers for. Each connection has its own unique consumer number. Simply repeat the process for each number — there is no login required.' },
  { q: 'What is the due date for SNGPL bills?', a: 'SNGPL bills are typically due 15–20 days after the bill generation date. The exact due date is printed on your bill. After the due date, a 10% late payment surcharge plus Rs. 50 fixed charge applies on the next bill.' },
  { q: 'What is SNGPL helpline number?', a: 'SNGPL\'s helpline number is 1199. For online complaints, you can also use the SNGPL self-service portal at selfservice.sngpl.com.pk. The helpline is available Monday to Saturday during business hours.' },
  { q: 'Can I download my SNGPL bill as PDF?', a: 'Yes. Once you view your bill on the SNGPL portal, use your browser\'s print function (Ctrl+P on Windows, Cmd+P on Mac) and select "Save as PDF" as the destination. This saves a clean PDF copy of your bill for records or payments.' },
  { q: 'What is the SNGPL mobile app?', a: 'SNGPL offers an official consumer mobile app available on Google Play Store and Apple App Store. The app allows you to check bills, view 12 months of consumption history, submit meter readings, track complaints, and receive bill notifications.' },
  { q: 'Why does the bill portal show an old bill?', a: 'If you see an old bill, your new bill may not have been generated yet. Bills are generated monthly based on your meter reading cycle. Try refreshing the page or clearing your browser cache. If no new bill appears after your expected billing date, call 1199.' },
  { q: 'What if the SNGPL website is not working?', a: 'The SNGPL portal may be slow during peak hours (9am–11am, evenings) or during maintenance. Try at a different time, use a different browser, or use mobile data instead of Wi-Fi. The SNGPL mobile app is an alternative if the web portal is down.' },
  { q: 'Is my consumer number the same as my meter number?', a: 'No. Your consumer number identifies your billing account and stays the same throughout your connection. The meter number identifies the physical gas meter device and changes if SNGPL replaces your meter. Always use the consumer number for bill checking and payments.' },
  { q: 'Can I check my SNGPL bill via SMS?', a: 'Yes. Send your consumer number via SMS to SNGPL\'s official SMS service code (check sngpl.com.pk for the current number). You will receive a text with bill amount, due date, and billing period — no internet connection required.' },
  { q: 'How do I dispute an incorrect SNGPL bill?', a: 'Note your actual meter reading, then call SNGPL helpline 1199 to report the discrepancy. Request a meter inspection — SNGPL sends a technician to verify and reissue a corrected bill if the reading was wrong. Pay the undisputed amount during the dispute period to avoid disconnection.' },
  { q: 'What is the billing cycle for SNGPL?', a: 'SNGPL reads meters on a monthly cycle. The meter reader visits your connection each month to record the current reading. The difference from the previous month gives your HHM consumed. The bill is then generated and either posted to your address or made available on the portal within a few days.' },
  { q: 'Can I check my SNGPL bill without a consumer number?', a: 'The official SNGPL portal requires a consumer number to access your bill. If you do not know your consumer number, call helpline 1199 with your CNIC and connection address, and they can provide it after identity verification.' },
];

export default function BillCheckPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Check SNGPL Gas Bill Online',
    description: 'Step-by-step guide to check your SNGPL gas bill using consumer number on the official portal',
    step: [
      { '@type': 'HowToStep', name: 'Find Consumer Number', text: 'Locate your 10–13 digit SNGPL consumer number on the top-right of your gas bill.' },
      { '@type': 'HowToStep', name: 'Enter Consumer Number', text: 'Type your consumer number into the checker above or go to sngpl.com.pk.' },
      { '@type': 'HowToStep', name: 'View Your Bill', text: 'Click "Check Bill" to be redirected to the official SNGPL portal showing your current bill.' },
    ],
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
      { '@type': 'ListItem', position: 2, name: 'Bill Check Guide', item: 'https://sngplbillcheck.pk/bill-check' },
    ],
  };
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Bill Check Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Bill Check Online — Complete Guide 2025</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Everything you need to know about checking your SNGPL gas bill online — desktop, mobile, app, consumer number, bill components, disputes, and more.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-4">
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <p className="text-xs font-bold text-blue-700 uppercase tracking-wide mb-3">📋 Contents</p>
                <nav className="space-y-0.5">
                  {tocItems.map(t => (
                    <a key={t.id} href={`#${t.id}`} className="toc-link">{t.label}</a>
                  ))}
                </nav>
              </div>
              <BillChecker />
            </div>
          </aside>

          {/* Main content */}
          <article className="flex-1 min-w-0 prose-content">

            {/* Mobile checker */}
            <div className="lg:hidden mb-8">
              <BillChecker />
            </div>

            <h2 id="what-is-sngpl">What is SNGPL? A Complete Overview</h2>
            <p>Sui Northern Gas Pipelines Limited (SNGPL) is Pakistan&apos;s largest integrated natural gas utility company, responsible for the transmission, distribution, and supply of natural gas across Punjab, Khyber Pakhtunkhwa (KPK), and Azad Kashmir. Established on 28 March 1963 and headquartered in Lahore, SNGPL has grown from a small regional gas company into a sprawling utility serving over 7 million consumers across all connection types.</p>
            <p>SNGPL manages an extensive pipeline network stretching over 150,000 kilometers of transmission and distribution lines, connecting city gate stations, regional grids, and individual consumer meters across hundreds of cities and towns. The company&apos;s service territory covers some of the most densely populated areas of Pakistan, including the entire Punjab province, major KPK cities, and the federal capital Islamabad.</p>
            <p>As a listed company on the Pakistan Stock Exchange (PSX) and a regulated utility under the Oil and Gas Regulatory Authority (OGRA), SNGPL is subject to strict performance standards, tariff approvals, and consumer protection regulations. OGRA reviews and approves all gas tariff changes before they are implemented, ensuring that rate increases are justified and documented. Every change to the slab rates consumers pay goes through a formal OGRA approval process, which is publicly documented.</p>
            <p>SNGPL&apos;s digital infrastructure has expanded significantly in recent years. Today it includes an online bill portal at sngpl.com.pk, a mobile app for Android and iOS, WhatsApp bill inquiry service, SMS bill service, and a full self-service portal at selfservice.sngpl.com.pk for complaint registration, new connection applications, and account management. All these services are designed to reduce the need for consumers to visit physical offices for routine requests.</p>

            <div className="highlight-box">
              <strong>Quick Access:</strong> SNGPL&apos;s official bill portal is at <strong>sngpl.com.pk</strong>. Our checker on this page directly redirects you there with your consumer number pre-filled — no typing the URL needed.
            </div>

            <h2 id="consumer-number">Understanding Your SNGPL Consumer Number</h2>
            <p>Your SNGPL consumer number is the single most important identifier for your gas account. It is a unique numeric code — 10 to 13 digits long — that SNGPL uses to identify your specific gas connection in its billing system. Without this number, you cannot access any of SNGPL&apos;s digital services: bill portal, mobile app, Easypaisa/JazzCash payments, or online complaint registration.</p>
            <p>The consumer number encodes information about your geographic region and distribution circle. The first 2–4 digits represent the SNGPL zone (Lahore, Rawalpindi, Faisalabad, Peshawar, etc.), the next 2–3 digits identify the distribution circle within that zone, and the remaining digits are your unique sequential account number within that circle. This structure explains why consumer numbers from different cities start with different digit prefixes.</p>
            <p>Your consumer number appears on: the top section of every printed gas bill (labeled &ldquo;Consumer No.&rdquo; or &ldquo;Cust. No.&rdquo;), the meter card attached near your gas meter, the SNGPL mobile app under your registered accounts, and any previous Easypaisa, JazzCash, or bank payment receipts for SNGPL bills. If you have lost all these references, call helpline 1199 with your CNIC and address for recovery.</p>
            <p>An important distinction: the consumer number is different from the meter number. The consumer number identifies your billing account and remains constant for the lifetime of your connection. The meter number identifies the physical gas meter device installed at your premises — this changes whenever SNGPL replaces your meter (due to malfunction, upgrade, or tampering). Always use the consumer number, never the meter number, for bill payments and digital services.</p>

            <h2 id="desktop-guide">How to Check SNGPL Bill Online — Desktop Guide (Step by Step)</h2>
            <p>Checking your SNGPL bill from a desktop or laptop computer takes less than a minute. Follow these steps exactly for the smoothest experience:</p>
            <ol>
              <li><strong>Open a modern web browser</strong> — Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari all work equally well. Make sure your browser is reasonably up to date (2022 or later) for the best compatibility. Avoid Internet Explorer, which is no longer supported.</li>
              <li><strong>Navigate to the official portal</strong> — Type <strong>sngpl.com.pk</strong> in the address bar and press Enter, or simply use the checker at the top of this page which redirects you there automatically. Verify you are on the official SNGPL domain before entering any information — look for SNGPL branding and the .com.pk domain.</li>
              <li><strong>Enter your consumer number carefully</strong> — Find the input field labeled &ldquo;Consumer Number,&rdquo; &ldquo;Customer Number,&rdquo; or &ldquo;Cust. No.&rdquo; and type your 10–13 digit number. Double-check each digit before proceeding. Common mistakes: transposing adjacent digits, missing the last digit, or adding spaces between digits (no spaces should be used).</li>
              <li><strong>Complete CAPTCHA verification if shown</strong> — The portal may display a CAPTCHA (usually image selection or text entry) to prevent automated access. Complete it carefully and click Verify or Submit. If the CAPTCHA fails, refresh it and try again — browser extensions like ad blockers sometimes interfere with CAPTCHA loading.</li>
              <li><strong>Click &ldquo;Get Bill&rdquo; or &ldquo;Search&rdquo;</strong> — Press the search or submit button. The page will load your current bill details within 3–10 seconds depending on server load. If it times out, wait 30 seconds and try again — the SNGPL portal can be slow during peak hours (9–11 AM and evenings).</li>
              <li><strong>Review your bill details</strong> — You will see: current bill amount, due date, billing period (from/to dates), meter readings (previous and current), HHM consumed, charge breakdown (gas charges, GIDC, GST, fixed charges), any outstanding arrears, and total amount due. Read each figure carefully and note the due date.</li>
              <li><strong>Download or print for records</strong> — Click &ldquo;Download PDF&rdquo; if the button is available, or use your browser&apos;s print function (Ctrl+P on Windows, Cmd+P on Mac) and select &ldquo;Save as PDF&rdquo; to save a copy. This PDF is a valid duplicate bill for bank payments. Bookmark the portal for quick access next month.</li>
            </ol>

            <div className="success-box">
              <strong>Pro tip:</strong> Create a bookmark folder called &ldquo;SNGPL&rdquo; and save both sngpl.com.pk and selfservice.sngpl.com.pk for quick monthly access. Add a monthly calendar reminder 3 days before your typical bill due date to check and pay.
            </div>

            <h2 id="mobile-guide">How to Check SNGPL Bill on Mobile Phone</h2>
            <p>The SNGPL bill portal is fully mobile-responsive and works on all modern smartphones. Here is the step-by-step guide for Android and iPhone users:</p>
            <ol>
              <li><strong>Open your mobile browser</strong> — Use Google Chrome on Android or Safari on iPhone. Both work perfectly with the SNGPL portal. Avoid using in-app browsers (e.g., opening the link from WhatsApp or Facebook) as they may have compatibility issues with the portal&apos;s CAPTCHA system.</li>
              <li><strong>Type the portal address</strong> — In your browser&apos;s address bar, type <strong>sngpl.com.pk</strong> and tap Go. The page will load in a mobile-optimized format. If you are using the checker on our homepage, just enter your number and tap — we redirect you automatically.</li>
              <li><strong>Enter your consumer number</strong> — Tap the consumer number input field. Your phone&apos;s numeric keypad will appear automatically (the field is set to accept numbers). Type your full consumer number carefully. Use the backspace key if you make a mistake. Do not add spaces, hyphens, or any other characters.</li>
              <li><strong>Tap the search button</strong> — Press &ldquo;Get Bill,&rdquo; &ldquo;Search,&rdquo; or the search icon. The portal will load your bill information. On slower mobile connections, this may take 5–15 seconds. If you see a loading indicator, wait for it to complete before tapping again.</li>
              <li><strong>View, screenshot, or share your bill</strong> — Read your bill details on screen. To save it: take a screenshot (Volume Down + Power on most Android phones; Side Button + Volume Up on iPhone), or use your browser&apos;s share menu to save the page as a PDF. The screenshot works as proof of bill for quick reference, while the PDF serves as a valid duplicate for bank payments.</li>
            </ol>
            <p>On mobile data (3G/4G/5G), the portal typically loads faster than on slow Wi-Fi connections. If you are experiencing loading issues, try switching from Wi-Fi to mobile data or vice versa. The SNGPL portal can sometimes have timeout issues — if the page does not load within 20 seconds, refresh once and try again.</p>

            <h2 id="app-guide">Using the SNGPL Consumer Mobile App</h2>
            <p>The official SNGPL Consumer App offers a more streamlined mobile experience than the web portal. Available on Google Play Store (Android) and Apple App Store (iOS), the app provides bill checking, 12-month billing history, consumption analytics, complaint registration, and push notifications for new bills.</p>
            <p>To get started: search for &ldquo;SNGPL Consumer&rdquo; in your app store and install the official SNGPL app (verify the developer name matches SNGPL). Open the app and select &ldquo;Register&rdquo; or &ldquo;Sign Up.&rdquo; Enter your consumer number and the registered mobile number for your SNGPL connection. You will receive an OTP (one-time password) via SMS — enter it to complete registration. Once registered, your consumer number is saved in the app and you can view bills, payment history, and consumption trends instantly without re-entering the number each time.</p>
            <p>The app&apos;s billing history feature is particularly useful for tracking seasonal consumption patterns, comparing this month&apos;s bill to the same month last year, and downloading previous bills for address verification or audit purposes. The app stores up to 12 months of billing records — significantly more accessible than the web portal, which typically shows only the most recent bill.</p>

            <h2 id="billing-cycle">Understanding the SNGPL Monthly Billing Cycle</h2>
            <p>SNGPL operates on a monthly billing cycle. Understanding how this cycle works helps you know when to expect your bill, when it will appear on the portal, and when payment is due:</p>
            <ul>
              <li><strong>Meter reading date:</strong> SNGPL assigns meter readers to each distribution area on a fixed schedule. Your meter is read on approximately the same date each month. The bill is generated based on the difference between this month&apos;s reading and last month&apos;s reading.</li>
              <li><strong>Bill generation:</strong> The bill is generated by SNGPL&apos;s billing system immediately after the meter reading is processed — typically the same day or the next business day. Once generated, it appears on sngpl.com.pk and is sent to the postal address on file.</li>
              <li><strong>Postal delivery:</strong> Physical bills are delivered through Pakistan Post within 3–7 days of generation. Postal delivery is notoriously unreliable in many areas — one reason why checking online is strongly recommended.</li>
              <li><strong>Due date:</strong> The payment due date is set 15–20 days after the bill generation date and is printed prominently on the bill. After this date, a 10% late surcharge on gas consumption charges is applied to your next bill.</li>
              <li><strong>Estimated bills:</strong> If the meter reader could not access your meter (locked gate, property access issues, dog on premises), SNGPL issues an estimated reading based on your 3–6 month average consumption. Estimated bills are marked &ldquo;E&rdquo; on the bill. They may be higher or lower than actual. Contact 1199 if you receive an estimated bill that seems significantly off.</li>
            </ul>

            <h2 id="bill-components">Your SNGPL Bill Explained — Every Line Item</h2>
            <p>A typical SNGPL residential bill contains multiple line items. Here is what each one means:</p>
            <ul>
              <li><strong>Current Bill / Gas Charges:</strong> The main consumption-based charge calculated using your HHM units consumed and the applicable OGRA tariff slabs. This is the largest line item for most consumers.</li>
              <li><strong>Fixed Monthly Charge:</strong> A fixed infrastructure fee charged every month regardless of consumption. For consumers in the lowest slab (0–100 HHM), this is included in the flat Rs. 200 minimum. For higher-slab consumers, a small additional fixed charge applies.</li>
              <li><strong>Gas Infrastructure Development Cess (GIDC):</strong> A government levy charged at 10% of your base gas charges. Funds national gas infrastructure development projects.</li>
              <li><strong>General Sales Tax (GST):</strong> 17% federal tax on the combined total of base gas charges and GIDC. Collected on behalf of FBR.</li>
              <li><strong>Arrears:</strong> Unpaid amounts from previous billing periods. Appears as a positive figure added to this month&apos;s total. Pay all arrears immediately to avoid further surcharges.</li>
              <li><strong>Late Payment Surcharge:</strong> 10% of gas charges applied when the previous bill was not paid by the due date. Clearly labeled on the bill.</li>
              <li><strong>Meter Rent:</strong> A small monthly charge for the gas meter maintained at your premises by SNGPL. Typically a few rupees.</li>
              <li><strong>Advance Payment / Credit:</strong> If you have overpaid previously, the credit appears here as a deduction from your total. SNGPL does not automatically refund small credits — they roll over to future bills.</li>
              <li><strong>Government Subsidy:</strong> Low-income or below-threshold consumers may receive a government subsidy applied as a bill reduction. Not all consumers are eligible — check with SNGPL about current subsidy programs.</li>
              <li><strong>Total Amount Due:</strong> The sum of all charges, taxes, and arrears minus any credits or subsidies. This is the amount you must pay by the due date.</li>
            </ul>

            <h2 id="calculation-example">Real Bill Calculation Example — Step by Step</h2>
            <p>Let us walk through an actual calculation for a household consuming 350 HHM in October:</p>
            <ul>
              <li>Slab 1: First 100 HHM → flat Rs. 200</li>
              <li>Slab 2: Next 200 HHM (101–300) × Rs. 130 = Rs. 26,000</li>
              <li>Slab 3: Remaining 50 HHM (301–350) × Rs. 150 = Rs. 7,500</li>
              <li>Base gas total: Rs. 200 + Rs. 26,000 + Rs. 7,500 = <strong>Rs. 33,700</strong></li>
              <li>GIDC at 10% of Rs. 33,700: <strong>Rs. 3,370</strong></li>
              <li>GST at 17% of (Rs. 33,700 + Rs. 3,370) = 17% of Rs. 37,070: <strong>Rs. 6,302</strong></li>
              <li>Fixed charges: approximately Rs. 200–500 (varies by region)</li>
              <li><strong>Estimated total bill: approximately Rs. 43,572 – Rs. 43,872</strong></li>
            </ul>
            <p>Use our <Link href="/calculator">SNGPL gas bill calculator</Link> to instantly calculate any consumption level without doing manual arithmetic. The calculator applies all current OGRA-approved rates automatically.</p>

            <h2 id="dispute">How to Dispute an Incorrect SNGPL Bill</h2>
            <p>If you believe your SNGPL bill is incorrect — too high, based on an estimated rather than actual reading, or showing charges you do not recognize — here is the formal dispute process:</p>
            <ul>
              <li><strong>Step 1: Document the discrepancy.</strong> Take a photograph of your gas meter showing the current reading. Note the date. Compare with the reading shown on your bill. If your meter shows significantly less consumption than what SNGPL billed, you have grounds for a dispute.</li>
              <li><strong>Step 2: Call SNGPL helpline 1199.</strong> Explain the discrepancy: give your consumer number, the reading on your meter, the reading on your bill, and the difference. Request a meter inspection. SNGPL will issue a job order for a technician to visit your premises.</li>
              <li><strong>Step 3: Get the complaint reference number.</strong> The helpline representative will give you a complaint reference number — note it down. This number tracks your complaint in SNGPL&apos;s system and is required for follow-up calls.</li>
              <li><strong>Step 4: Pay the undisputed amount.</strong> While your dispute is being resolved, pay the amount you believe is correct (for example, what you calculate based on your actual reading). Add a note &ldquo;Under Protest&rdquo; on your payment receipt. This prevents disconnection while the dispute is pending.</li>
              <li><strong>Step 5: Technician visit.</strong> SNGPL sends a meter inspector within 5–10 working days. The inspector checks the meter for accuracy, reads the current value, and submits a report. If the meter reading was wrong, SNGPL issues a corrected revised bill.</li>
              <li><strong>Step 6: Revised bill.</strong> If the inspection confirms an error, SNGPL issues a revised bill. Any overpayment from previous estimated bills appears as a credit on your next bill. If the dispute is not resolved satisfactorily, you can escalate to OGRA&apos;s consumer complaints portal at ogra.org.pk.</li>
            </ul>

            <h2 id="seasonal">Seasonal Variations in Your SNGPL Gas Bill</h2>
            <p>Understanding how your gas bill changes across seasons helps you budget more accurately and avoid bill shock in winter. Here is a seasonal breakdown for a typical Pakistani family:</p>
            <ul>
              <li><strong>Summer (May – September):</strong> Minimum gas use for cooking only. Hot water is not needed for bathing. A family of 5 using 3–4 gas burners for daily cooking uses approximately 20–60 HHM — safely within the Slab 1 flat Rs. 200 minimum. Total bills including taxes: Rs. 257–600. This is the ideal time to reduce usage habits.</li>
              <li><strong>Early Autumn (October):</strong> Geysers come back into regular use for warm showers as temperatures drop. Some evenings may see occasional heater use. Consumption rises to 80–150 HHM. Bills jump from the summer minimum to Rs. 257–12,000 depending on whether you cross the 100 HHM threshold.</li>
              <li><strong>Winter Peak (November – February):</strong> Geysers run 20–30 minutes per person daily, room heaters operate 6–10 hours, bukharis run through the night. Consumption of 200–600+ HHM is common for medium to large households. Bills in this range: Rs. 20,000–80,000+. This is when the slab system makes the most financial impact — staying in a lower slab can save tens of thousands of rupees.</li>
              <li><strong>Spring (March – April):</strong> Temperatures rise and heater use decreases. Bills decline month by month through March and April. However, morning cold still requires geyser use. Consumption may be 100–200 HHM, with bills of Rs. 5,000–25,000.</li>
            </ul>
            <p>Planning tip: use October&apos;s mild weather to service your geyser and room heater, insulate your home, and stock up on weatherization supplies. These investments in shoulder season translate directly to lower bills in the peak winter months when slab rates are highest.</p>

            <h2 id="errors">Common Errors When Checking SNGPL Bill</h2>
            <p>Many consumers encounter the same errors repeatedly. Here are the most common ones and their proven solutions:</p>
            <ul>
              <li><strong>&ldquo;Invalid Consumer Number&rdquo; error:</strong> You have entered incorrect digits. Go back to your physical bill and copy each digit carefully, one by one. Consumer numbers use only digits — no spaces, hyphens, or letters. Check that the number is 10–13 digits as shown on your bill.</li>
              <li><strong>&ldquo;No Record Found&rdquo; error:</strong> Your consumer number format may include or exclude leading zeros depending on your region. Try without leading zeros first, then try adding one leading zero. If neither works, your connection may be very new or very old — contact SNGPL helpline 1199 for help.</li>
              <li><strong>Portal not loading or very slow:</strong> The SNGPL server experiences heavy load during peak hours (9am–11am and 6pm–9pm). Try at off-peak times: early morning or late afternoon. Also try clearing browser cache (Ctrl+Shift+Delete in Chrome) and disabling any VPN or ad-blocker extensions.</li>
              <li><strong>CAPTCHA not working or not appearing:</strong> Reload the page. Try an incognito/private browser window (browser cookies sometimes block CAPTCHA loading). Make sure you have not disabled JavaScript in your browser settings — CAPTCHA requires JavaScript to function.</li>
              <li><strong>Bill shows old month&apos;s data:</strong> Your new bill has not been generated yet. Bills appear on the portal shortly after the meter reading date. Wait 1–3 days after your expected reading date. If still not updated after 5 days, call helpline 1199 to check if there was a reading issue.</li>
              <li><strong>PDF download not working:</strong> Allow pop-ups in your browser settings for sngpl.com.pk. Chrome&apos;s pop-up blocker can prevent the PDF download window. Alternatively, use Ctrl+P → Save as PDF to save the page directly.</li>
              <li><strong>Zero or very low amount showing:</strong> This may indicate a subsidy covering the full bill, a new connection with no usage yet, or a credit from an overpayment. Verify by calling helpline 1199 if you expect a larger amount.</li>
              <li><strong>Wrong name or address on bill:</strong> Account details are registered at the time of connection installation. If your name or address is incorrect, visit your nearest SNGPL Service Delivery Center with your CNIC, ownership/tenancy documents, and request an account details update. This cannot be done online.</li>
            </ul>

            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="not-prose space-y-3">
              {faqs.map((f, i) => (
                <details key={i} className="group border border-gray-200 rounded-xl overflow-hidden bg-white">
                  <summary className="flex items-center justify-between cursor-pointer p-4 hover:bg-gray-50 transition-colors select-none">
                    <span className="font-semibold text-gray-900 text-sm pr-4">{f.q}</span>
                    <span className="flex-shrink-0 text-blue-500 group-open:rotate-180 transition-transform duration-200">▾</span>
                  </summary>
                  <div className="px-4 pb-4 border-t border-gray-100">
                    <p className="text-gray-600 text-sm leading-relaxed pt-3">{f.a}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center">
              <h3 className="font-bold text-blue-900 text-lg mb-2">Check Your SNGPL Bill Now</h3>
              <p className="text-blue-700 text-sm mb-4">Use our free checker above or go directly to the official SNGPL portal.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/" className="btn-primary text-sm py-2.5">Check Bill Now →</Link>
                <Link href="/calculator" className="btn-secondary text-sm py-2.5">Calculate Bill 🧮</Link>
                <Link href="/payment-guide" className="btn-secondary text-sm py-2.5">Payment Guide 💳</Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
