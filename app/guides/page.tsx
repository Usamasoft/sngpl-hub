import type { Metadata } from 'next';
import Link from 'next/link';
import AdUnit from '../components/AdUnit';

export const metadata: Metadata = {
  title: 'SNGPL Guides — Consumer Number, Duplicate Bill, Payment & More',
  description: 'Complete SNGPL guides: consumer number, duplicate bill download, online payment & troubleshooting. Free step-by-step guides for every SNGPL service.',
  alternates: { canonical: 'https://sngplbillcheck.pk/guides' },
};

const guides = [
  { icon: '🔢', title: 'Consumer Number Guide', desc: 'Find, understand, and recover your SNGPL consumer number. Format explained, where to find it, and what each digit means.', href: '/guides#consumer-number', sections: ['What is consumer number?','Where to find it on bill','Format and digit breakdown','How to recover if lost','Consumer vs. meter number'] },
  { icon: '📄', title: 'Download Duplicate Bill', id: 'duplicate', desc: 'Lost your gas bill? Download a duplicate instantly via the official portal, mobile app, WhatsApp, or SMS.', href: '/guides#duplicate', sections: ['Via official portal (5 steps)','Via SNGPL mobile app','Via WhatsApp','Via SMS','Visit SNGPL office'] },
  { icon: '💳', title: 'How to Pay SNGPL Bill', desc: 'Pay your gas bill online via Easypaisa, JazzCash, bank transfer, ATM, or bank branch.', href: '/guides#payment', sections: ['Easypaisa (step-by-step)','JazzCash guide','Online banking (HBL/UBL/MCB)','ATM payment','Bank branch payment'] },
  { icon: '⚠️', title: 'Troubleshooting', desc: 'Resolve wrong bill amounts, disconnection notices, payment not reflecting, and other common SNGPL issues.', href: '/guides#troubleshoot', sections: ['Wrong bill amount','Payment not showing','Disconnection help','Complaint registration','Helpline contacts'] },
];

export default function GuidesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Guides</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Complete Resource Guides</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Consumer number, duplicate bills, payment methods, troubleshooting — everything in one place.</p>
        </div>
      </section>

      {/* Guide cards */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map(g => (
            <div key={g.title} className="card hover:shadow-xl hover:-translate-y-1 transition-all" id={g.id}>
              <div className="text-3xl mb-3">{g.icon}</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{g.title}</h2>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{g.desc}</p>
              <ul className="space-y-1 mb-5">
                {g.sections.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{i+1}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <AdUnit slot="5678901234" className="max-w-5xl mx-auto px-4" />

      {/* Inline guide content */}
      <div className="max-w-4xl mx-auto px-4 pb-16 prose-content space-y-16">

        <section id="consumer-number">
          <h2>SNGPL Consumer Number — Complete Guide</h2>
          <p>Your SNGPL consumer number is the key identifier for your gas connection. It is a unique 10 to 13 digit number that SNGPL uses to identify your specific gas account. Without this number, you cannot check your bill online, make payments through apps, or register complaints on the SNGPL portal.</p>
          <p>The consumer number is found on the top section of your gas bill — usually in a box labeled "Consumer No." or "Cust. No." It is also printed on your meter card (the small card attached to or near your gas meter). If you have the SNGPL mobile app, your registered consumer numbers are stored in the app under your profile.</p>
          <h3>Consumer Number Format</h3>
          <p>SNGPL consumer numbers follow a structured format. The first digits represent the region code (which SNGPL zone your connection is in), followed by distribution company codes, and finally your unique account identifier. For example, a number starting with "11" typically indicates connections in the Lahore region, while different prefixes represent Rawalpindi, Faisalabad, Peshawar, and other service areas.</p>
          <h3>Recovering a Lost Consumer Number</h3>
          <p>If you have lost your consumer number and do not have any old gas bills, there are several ways to recover it. Call SNGPL helpline 1199 with your CNIC number and address — the representative can look up your consumer number after verifying your identity. Alternatively, visit your nearest SNGPL Service Delivery Center with your original CNIC and connection ownership documents.</p>
        </section>

        <section id="duplicate">
          <h2>How to Download SNGPL Duplicate Bill</h2>
          <p>A duplicate bill is an official reprint of your SNGPL gas bill. It carries the same information as your original printed bill and is equally valid for making payments at banks, franchises, or ATMs. You can obtain a duplicate bill at any time — for the current month or previous months — through several digital channels.</p>
          <h3>Method 1: Official SNGPL Portal</h3>
          <ol>
            <li>Open a browser and go to <strong>billchecker.sngpl.com.pk</strong></li>
            <li>Enter your consumer number in the search field</li>
            <li>Click "Get Bill" or "Search" to view the bill</li>
            <li>Look for a "Download PDF" or "Print" button on the results page</li>
            <li>Click Download to save the PDF to your device</li>
          </ol>
          <h3>Method 2: SNGPL Mobile App</h3>
          <p>Download the SNGPL Consumer app from Google Play Store (Android) or Apple App Store (iOS). Register with your consumer number, then navigate to "My Bills" to view and download current or historical bills as PDF files.</p>
          <h3>Method 3: WhatsApp Service</h3>
          <p>SNGPL provides a WhatsApp-based bill service. Save the official SNGPL WhatsApp number (check SNGPL's official website for the current number) and send your consumer number as a message. The automated system will respond with your bill details and a download link.</p>
          <h3>Method 4: SMS Service</h3>
          <p>Send your consumer number via SMS to SNGPL's designated short code. You will receive an SMS with your bill summary including the amount due and due date. This method provides text information only — not a full PDF bill.</p>
        </section>

        <section id="payment">
          <h2>How to Pay SNGPL Gas Bill Online</h2>
          <p>SNGPL offers multiple convenient payment channels for consumers to pay their monthly gas bill. Here is a detailed guide to the most popular methods:</p>
          <h3>Easypaisa Payment (Step-by-Step)</h3>
          <ol>
            <li>Open the Easypaisa app on your smartphone</li>
            <li>Tap on "Bill Payments" from the main menu</li>
            <li>Select "Utility Bills" then "Gas" then "SNGPL"</li>
            <li>Enter your consumer number exactly as shown on your bill</li>
            <li>The system will display your current bill amount</li>
            <li>Confirm the amount and tap "Pay"</li>
            <li>Enter your Easypaisa PIN to authorize payment</li>
            <li>Save or screenshot your payment confirmation SMS/receipt</li>
          </ol>
          <h3>JazzCash Payment</h3>
          <p>Open JazzCash app → tap "Pay Bills" → select "Gas Bills" → choose "SNGPL" → enter consumer number → verify bill amount → enter MPIN → confirm payment. JazzCash also supports USSD code *786# for feature phone users without smartphones.</p>
          <h3>Online Banking</h3>
          <p>Most major Pakistani banks including HBL, UBL, MCB, Allied Bank, Meezan Bank, and Bank Alfalah support SNGPL bill payment through their internet banking or mobile app. Log into your bank's app, navigate to "Utility Payments" or "Pay Bills," search for SNGPL, and enter your consumer number to pay. Payment is instant and a digital receipt is generated.</p>
          <h3>ATM Payment</h3>
          <p>SNGPL bills can be paid at ATMs belonging to major banks. Insert your debit card, enter PIN, select "Other Services" → "Bill Payment" → "Utility Bills" → "Gas" → "SNGPL," enter your consumer number, confirm the amount, and complete the transaction. Keep the ATM receipt as proof of payment.</p>
        </section>

        <section id="troubleshoot">
          <h2>SNGPL Troubleshooting Guide</h2>
          <p>When you encounter issues with your SNGPL bill, connection, or services, there are established channels to resolve them efficiently. Here are solutions to the most common problems:</p>
          <h3>Wrong Bill Amount</h3>
          <p>If you believe your bill amount is incorrect — too high or based on an estimated rather than actual reading — you can request a meter inspection. Call 1199 or submit a complaint online at selfservice.sngpl.com.pk. SNGPL will send a technician to verify your meter reading and adjust the bill if necessary.</p>
          <h3>Payment Not Reflected</h3>
          <p>After paying your bill, it typically takes 24–48 hours for the payment to reflect on SNGPL's system. If after 48 hours your bill still shows as unpaid, contact the payment channel you used (bank, Easypaisa, JazzCash) with your transaction ID, and then contact SNGPL helpline 1199 with both your consumer number and transaction proof.</p>
          <h3>Disconnection Notice or Disconnected Gas</h3>
          <p>If you receive a disconnection notice or your gas has been disconnected, pay the outstanding amount immediately through any payment channel. Then call 1199 with your payment transaction ID. SNGPL will restore your connection after verifying payment. Reconnection may take 1–3 business days and a reconnection fee applies.</p>
          <h3>Complaint Registration</h3>
          <p>For all complaints — billing disputes, wrong readings, connection issues, gas pressure problems, or service quality — you can register online at selfservice.sngpl.com.pk, call 1199, or visit your nearest SNGPL Service Delivery Center. Keep your consumer number and CNIC ready when filing a complaint. You will receive a complaint reference number for tracking.</p>
        </section>

      </div>

      {/* Internal links */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center border border-gray-200">
          {[
            { href: '/', label: '🔍 Check Bill Now', desc: 'Official portal redirect' },
            { href: '/calculator', label: '🧮 Bill Calculator', desc: 'Estimate gas charges' },
            { href: '/bill-check', label: '📖 Full Bill Guide', desc: '5000-word deep guide' },
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
