import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Bill Check Online 2024 — Step-by-Step Complete Guide',
  description: 'How to check SNGPL gas bill online using consumer number. Desktop, mobile, and app methods. Common errors, bill components, FAQs — complete guide.',
  alternates: { canonical: 'https://sngplbillcheck.pk/bill-check' },
};

const tocItems = [
  { id: 'what-is-sngpl', label: 'What is SNGPL?' },
  { id: 'consumer-number', label: 'Understanding Consumer Number' },
  { id: 'desktop-guide', label: 'Desktop Bill Check Guide' },
  { id: 'mobile-guide', label: 'Mobile Bill Check Guide' },
  { id: 'bill-components', label: 'Bill Components Explained' },
  { id: 'errors', label: 'Common Errors & Fixes' },
  { id: 'faq', label: 'Frequently Asked Questions' },
];

const faqs = [
  { q: 'What is the SNGPL bill check portal URL?', a: 'The official SNGPL bill checking portal is https://billchecker.sngpl.com.pk/. You can enter your consumer number directly on that page to view your current bill. Our tool on this page safely redirects you there.' },
  { q: 'Where can I find my SNGPL consumer number?', a: 'Your consumer number is printed at the top-right section of your SNGPL gas bill. It is typically 10 to 13 digits long. You can also find it on your meter card or by visiting your nearest SNGPL office.' },
  { q: 'Is it free to check SNGPL bill online?', a: 'Yes, checking your SNGPL gas bill online is completely free. The official SNGPL bill portal requires no registration or payment. You just need your consumer number to access your bill information.' },
  { q: 'Can I check the bill on my mobile phone?', a: 'Yes. The SNGPL bill portal is mobile-responsive and works on all smartphones. Simply open any browser (Chrome, Safari, or Firefox), go to billchecker.sngpl.com.pk, and enter your consumer number.' },
  { q: 'What if my consumer number is not found?', a: 'If your consumer number is not found, first double-check the digits from your physical bill. Ensure you are not including spaces or leading zeros incorrectly. If the problem persists, contact SNGPL helpline 1199.' },
  { q: 'How many digits is the SNGPL consumer number?', a: 'SNGPL consumer numbers are typically 10 to 13 digits long depending on your region and connection type. The first few digits represent the region and distribution code, while the remaining digits are your unique account ID.' },
  { q: 'Can I check bills for multiple connections?', a: 'Yes, you can check bills for as many SNGPL connections as you have consumer numbers for. Each connection has its own unique consumer number. Simply repeat the process for each number.' },
  { q: 'What is the due date for SNGPL bills?', a: 'SNGPL bills are typically due 15–20 days after the bill generation date. The exact due date is printed on your bill. After the due date, a late payment surcharge of 10% plus Rs. 50 applies.' },
  { q: 'What is SNGPL helpline number?', a: 'SNGPL\'s toll-free helpline number is 1199. For online complaints, you can also use the SNGPL self-service portal at selfservice.sngpl.com.pk. The helpline is available during business hours, Monday to Saturday.' },
  { q: 'Can I download my SNGPL bill as PDF?', a: 'Yes. Once you view your bill on the SNGPL portal, use your browser\'s print function (Ctrl+P or Cmd+P) and select "Save as PDF" as the destination. This saves a clean PDF copy of your bill.' },
  { q: 'What is the SNGPL mobile app?', a: 'SNGPL offers an official consumer mobile app available on the Google Play Store and Apple App Store. The app allows you to check bills, view consumption history, submit meter readings, and register complaints.' },
  { q: 'Why does the bill portal show an old bill?', a: 'If you see an old bill on the portal, your new bill may not have been generated yet (bills are generated monthly based on your reading cycle). Try refreshing the page or clearing your browser cache and trying again.' },
  { q: 'What if the SNGPL website is not working?', a: 'The SNGPL portal may occasionally be slow or unavailable during peak hours or maintenance. Try at a different time, use a different browser, or check from mobile data if Wi-Fi is causing issues.' },
  { q: 'Is my consumer number the same as my meter number?', a: 'No. Your consumer number and meter number are different. The consumer number identifies your account, while the meter number identifies the physical gas meter. Your bill shows both numbers.' },
  { q: 'Can I check my SNGPL bill via SMS?', a: 'Yes. You can send your consumer number via SMS to SNGPL\'s SMS service to receive a text summary of your bill. The SMS will show the bill amount, due date, and billing period without needing internet access.' },
];

export default function BillCheckPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Check SNGPL Gas Bill Online',
    description: 'Step-by-step guide to check your SNGPL gas bill using consumer number on the official portal',
    step: [
      { '@type': 'HowToStep', name: 'Find Consumer Number', text: 'Locate your 10–13 digit SNGPL consumer number on the top-right of your gas bill.' },
      { '@type': 'HowToStep', name: 'Enter Consumer Number', text: 'Type your consumer number into the checker above or go to billchecker.sngpl.com.pk.' },
      { '@type': 'HowToStep', name: 'View Your Bill', text: 'Click "Check Bill" to be redirected to the official SNGPL portal showing your current bill.' },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Bill Check Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Bill Check Online — Complete Guide</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Everything you need to know about checking your SNGPL gas bill online — desktop, mobile, app, consumer number, bill components, and more.</p>
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

            <h2 id="what-is-sngpl">What is SNGPL?</h2>
            <p>Sui Northern Gas Pipelines Limited (SNGPL) is Pakistan's largest integrated gas company, serving over 7 million consumers across Punjab, Khyber Pakhtunkhwa, and Azad Kashmir. Established in 1963, SNGPL is responsible for transmission, distribution, and supply of natural gas throughout its service territory — spanning some of the most densely populated areas of Pakistan.</p>
            <p>SNGPL manages an extensive pipeline network stretching thousands of kilometers, connecting major cities like Lahore, Faisalabad, Rawalpindi, Islamabad, Gujranwala, Peshawar, and hundreds of smaller towns and districts. The company serves residential, commercial, industrial, and bulk consumers with natural gas for heating, cooking, and industrial processes.</p>
            <p>As a listed company on the Pakistan Stock Exchange (PSX), SNGPL operates under the regulatory oversight of the Oil and Gas Regulatory Authority (OGRA), which approves all tariff structures and service standards. Its digital infrastructure includes an online bill portal, mobile app, SMS service, and WhatsApp support — all designed to make bill management easy for its millions of consumers.</p>

            <div className="highlight-box">
              <strong>Quick Fact:</strong> SNGPL's official bill portal is at <a href="https://billchecker.sngpl.com.pk" target="_blank" rel="noopener noreferrer">billchecker.sngpl.com.pk</a>. Our checker on this page directly redirects you there with your consumer number pre-filled.
            </div>

            <h2 id="consumer-number">Understanding Your SNGPL Consumer Number</h2>
            <p>Your SNGPL consumer number is a unique identifier assigned to each gas connection. It is typically 10 to 13 digits long, though the exact length can vary by region and connection type. This number is critical for all SNGPL-related activities including bill checking, payments, complaints, and service requests.</p>
            <p>The consumer number is structured to encode information about your region and distribution company. The first 2–4 digits typically represent the region code (indicating which SNGPL zone your connection falls in), followed by distribution company codes, and finally your unique account identifier. Understanding this structure helps you verify whether a number is valid before using it.</p>
            <p>You can find your consumer number in multiple places: on the top-right corner of your printed gas bill, on the meter card at your connection point, in your SNGPL welcome letter when the connection was established, or by visiting your local SNGPL Service Delivery Center (SDC) with your CNIC.</p>
            <p>If you have lost your consumer number and do not have access to any old bills, SNGPL's helpline at 1199 can help you recover it by verifying your identity. The SNGPL mobile app also stores your registered consumer numbers for easy access.</p>

            <AdUnit slot="3456789012" />

            <h2 id="desktop-guide">How to Check SNGPL Bill Online — Desktop Guide</h2>
            <ol>
              <li><strong>Open your web browser</strong> — Chrome, Firefox, Safari, or Microsoft Edge all work equally well. Make sure you have a stable internet connection.</li>
              <li><strong>Navigate to the official portal</strong> — Go to <strong>billchecker.sngpl.com.pk</strong> or use the checker above which will take you there directly. Avoid using third-party links that may not be the official portal.</li>
              <li><strong>Enter your consumer number</strong> — Find the input field labeled "Consumer Number" or "Customer Number" and type your 10–13 digit number carefully. Double-check each digit before proceeding.</li>
              <li><strong>Complete CAPTCHA if shown</strong> — The portal may show a simple CAPTCHA verification to prevent automated access. Complete it as instructed — usually selecting images or typing letters.</li>
              <li><strong>Click "Get Bill" or "Search"</strong> — Press the submit button to fetch your bill. The page will load your current bill details within a few seconds.</li>
              <li><strong>Review your bill information</strong> — You will see your bill amount, due date, billing period, meter readings, consumption, and any arrears. Take a screenshot or note the amount and due date.</li>
              <li><strong>Download or print your bill</strong> — Use the Download PDF button if available, or press Ctrl+P (Cmd+P on Mac) and select "Save as PDF" to save a copy for your records.</li>
            </ol>

            <div className="success-box">
              <strong>Tip:</strong> Bookmark the SNGPL bill portal on your browser so you can access it quickly each month without having to search for it.
            </div>

            <h2 id="mobile-guide">How to Check SNGPL Bill on Mobile Phone</h2>
            <p>Checking your SNGPL bill on a mobile phone is just as easy as on a desktop. The official portal is fully mobile-responsive and works on all modern smartphones. Here is a step-by-step guide for both Android and iPhone users:</p>
            <ol>
              <li><strong>Open your mobile browser</strong> — Use Google Chrome on Android or Safari on iPhone. Both work perfectly with the SNGPL portal. Avoid in-app browsers from social media apps as they may have compatibility issues.</li>
              <li><strong>Type the portal address</strong> — In the address bar, type <strong>billchecker.sngpl.com.pk</strong> and press Go. The page will load in a mobile-friendly format.</li>
              <li><strong>Enter your consumer number</strong> — Tap the input field and type your consumer number. Your phone's numeric keypad will appear automatically. Take care to enter all digits correctly.</li>
              <li><strong>Tap the search button</strong> — Press the search or check button. The bill details will load on the same page.</li>
              <li><strong>View and save your bill</strong> — Read your bill details on screen. To save it, take a screenshot (Volume Down + Power on Android, or Side Button + Volume Up on iPhone) or use your browser's share function to save as PDF.</li>
            </ol>
            <p>Alternatively, you can use the official SNGPL Consumer App available on Google Play Store and Apple App Store. The app provides a more streamlined experience for mobile users, including push notifications for new bills and direct payment options.</p>

            <h2 id="bill-components">Understanding Your SNGPL Bill Components</h2>
            <p>Your SNGPL gas bill contains several line items that together make up the total amount due. Understanding each component helps you verify that your bill is correct and identify any unusual charges. Here is a breakdown of the main components you will find on a typical SNGPL residential bill:</p>
            <ul>
              <li><strong>Current Bill (Gas Charges):</strong> The main charge based on your HHM consumption during the billing period, calculated using OGRA-approved progressive slabs.</li>
              <li><strong>Fixed Customer Charge:</strong> A fixed monthly fee regardless of consumption — typically Rs. 50 for domestic consumers (or flat Rs. 200 for the 0–100 HHM slab).</li>
              <li><strong>Gas Infrastructure Development Cess (GIDC):</strong> A government levy charged as a percentage of the gas bill to fund infrastructure development.</li>
              <li><strong>General Sales Tax (GST):</strong> 17% tax applied on the total of gas charges and GIDC. GST is collected on behalf of the Federal Board of Revenue (FBR).</li>
              <li><strong>Arrears:</strong> Any unpaid amounts from previous bills. If you have outstanding balances, they appear here and are added to the current bill total.</li>
              <li><strong>Meter Rent:</strong> A small monthly charge for the gas meter maintained at your premises by SNGPL.</li>
              <li><strong>Adjustments/Credits:</strong> If you overpaid previously or have a credit from a resolved dispute, it may appear as a deduction here.</li>
              <li><strong>Subsidy:</strong> Low-income consumers using less than a threshold amount may receive a government subsidy applied as a reduction on their bill.</li>
            </ul>

            <AdUnit slot="4567890123" />

            <h2 id="errors">Common Errors When Checking SNGPL Bill</h2>
            <p>Many consumers encounter errors when trying to check their SNGPL bill online. Here are the most common issues and their solutions:</p>
            <ul>
              <li><strong>"Invalid Consumer Number"</strong> — You have entered incorrect digits. Go back to your physical bill and copy each digit carefully. Consumer numbers do not include spaces or special characters.</li>
              <li><strong>"No Record Found"</strong> — Your consumer number format may be wrong. Try entering it without leading zeros, or add them — the format varies by region. Contact SNGPL helpline 1199 if the issue persists.</li>
              <li><strong>Portal not loading or slow</strong> — The SNGPL server may be under load during peak hours (9am–11am and evenings). Try at off-peak times. Also try clearing your browser cache (Ctrl+Shift+Delete).</li>
              <li><strong>CAPTCHA not working</strong> — Reload the page or try an incognito/private browser window. CAPTCHA may fail if browser cookies are blocked.</li>
              <li><strong>Bill shows old month's data</strong> — Your new bill may not have been generated yet. SNGPL reads meters on a cycle — your bill appears after the reading date. Wait a few days and try again.</li>
              <li><strong>PDF download not working</strong> — Allow pop-ups in your browser settings for the SNGPL portal. Chrome's pop-up blocker sometimes blocks the PDF download window.</li>
              <li><strong>Zero amount showing</strong> — This may happen if you have a subsidy covering the full bill, or if it is a new connection with no usage recorded yet.</li>
              <li><strong>Bill shows incorrect address/name</strong> — Contact SNGPL's customer service to update your account details. Bring your CNIC and connection documents to the nearest SDC.</li>
            </ul>

            <h2 id="faq">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2 text-base">{f.q}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 bg-blue-50 rounded-2xl border border-blue-200 text-center">
              <h3 className="font-bold text-blue-900 text-lg mb-2">Check Your SNGPL Bill Now</h3>
              <p className="text-blue-700 text-sm mb-4">Use our free checker above or go directly to the official SNGPL portal.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/" className="btn-primary text-sm py-2.5">Check Bill Now →</Link>
                <Link href="/calculator" className="btn-secondary text-sm py-2.5">Calculate Bill 🧮</Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
