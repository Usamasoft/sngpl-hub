import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';

export const metadata: Metadata = {
  title: 'SNGPL Bill Payment Guide — Easypaisa, JazzCash, HBL, ATM | 2026',
  description: 'Pay your SNGPL gas bill online via Easypaisa, JazzCash, HBL internet banking, ATM, or bank branch. Step-by-step guide for every payment method. Free.',
  alternates: { canonical: 'https://sngplbillcheck.pk/payment-guide' },
  openGraph: {
    title: 'SNGPL Gas Bill Payment Guide — All Methods 2026',
    description: 'Complete guide to paying your SNGPL bill: Easypaisa, JazzCash, HBL, UBL, MCB internet banking, ATM, bank branch. Avoid disconnection with timely payment.',
    url: 'https://sngplbillcheck.pk/payment-guide',
  },
};

const paymentMethods = [
  {
    icon: '📱', name: 'Easypaisa', badge: 'Most Popular', badgeColor: 'bg-green-100 text-green-700',
    steps: [
      'Open Easypaisa app and log in with your Telenor number',
      'Tap "Bill Payments" → "Utilities" → "Gas" → "SNGPL"',
      'Enter your 10–13 digit consumer number',
      'Easypaisa fetches your bill amount automatically',
      'Verify amount, billing period, and due date',
      'Tap "Pay," enter your 4-digit PIN to confirm',
      'Save or screenshot the payment confirmation SMS/receipt',
    ],
    note: 'Works on Telenor number. Service fee Rs. 10–25 may apply. Save SNGPL as "Favorite Biller" after first payment for one-tap future payments.',
  },
  {
    icon: '💚', name: 'JazzCash', badge: 'Works Without Internet', badgeColor: 'bg-emerald-100 text-emerald-700',
    steps: [
      'Open JazzCash app OR dial *786# on any Jazz/Warid SIM',
      'In app: tap "Pay Bills" → "Gas Bills" → "SNGPL"',
      'Enter your consumer number',
      'Review the fetched bill amount carefully',
      'Enter your MPIN (Mobile PIN) to confirm',
      'Keep the transaction confirmation SMS as receipt',
    ],
    note: 'USSD *786# works on basic feature phones without internet — menu-driven payment using keypad only. Very useful in low-connectivity areas.',
  },
  {
    icon: '🏦', name: 'HBL Mobile / HBL Online', badge: 'Bank Transfer', badgeColor: 'bg-blue-100 text-blue-700',
    steps: [
      'Log in to HBL Mobile app or hbl.com online banking',
      'Navigate to "Pay Bills" → "Utility Bills" → "Gas"',
      'Select "SNGPL" from the utility provider list',
      'Enter your SNGPL consumer number',
      'HBL fetches the current bill amount from SNGPL',
      'Confirm the amount and pay with PIN or biometric',
      'Download or screenshot the payment receipt',
    ],
    note: 'HBL payment is typically fee-free for internet banking. Payment reflects on SNGPL system within 24–48 hours. Save as Favorite Biller for future payments.',
  },
  {
    icon: '🏦', name: 'UBL Digital / MCB Mobile', badge: 'Bank Transfer', badgeColor: 'bg-indigo-100 text-indigo-700',
    steps: [
      'Log in to UBL Digital or MCB Mobile app',
      'Go to "Utility Payments" or "Pay Bills"',
      'Select "Gas" then "SNGPL"',
      'Enter consumer number to fetch bill',
      'Review amount and pay using your bank PIN',
      'Keep the digital receipt',
    ],
    note: 'Both UBL and MCB support SNGPL bill payments. Meezan Bank, Bank Alfalah, Allied Bank, Silk Bank, and most others also support SNGPL via their mobile apps.',
  },
  {
    icon: '🏧', name: 'ATM Payment', badge: 'Cash Option', badgeColor: 'bg-purple-100 text-purple-700',
    steps: [
      'Insert debit card at any major bank ATM and enter PIN',
      'Select "Other Services" → "Bill Payment" → "Utility Bills"',
      'Choose "Gas" → "SNGPL"',
      'Enter your consumer number using the ATM keypad',
      'ATM displays your current bill amount',
      'Confirm and complete the transaction',
      'Collect the printed ATM receipt — keep it until payment reflects online',
    ],
    note: 'ATM payments may take 48–72 hours to reflect on SNGPL portal. Keep the printed receipt as proof during this window. Available at HBL, UBL, MCB, Meezan, and most bank ATMs.',
  },
  {
    icon: '🏪', name: 'Bank Branch / Counter', badge: 'Walk-In', badgeColor: 'bg-orange-100 text-orange-700',
    steps: [
      'Visit any branch of HBL, UBL, MCB, or another bank',
      'Bring your SNGPL bill (original or downloaded duplicate)',
      'Approach the bill payment or utility service counter',
      'Present the bill — teller scans barcode or enters consumer number',
      'Pay the total amount due in cash or by cheque',
      'Receive the stamped payment receipt — keep it',
    ],
    note: 'Some banks charge Rs. 50–100 service fee for over-counter payments. Hours: typically 9 AM–5 PM weekdays, 9 AM–1 PM Saturday. A digital PDF duplicate is accepted in lieu of the original bill.',
  },
  {
    icon: '🏬', name: 'SNGPL Franchise Centers', badge: 'Cash Payment', badgeColor: 'bg-yellow-100 text-yellow-700',
    steps: [
      'Find an SNGPL-authorized franchise or collection center in your city',
      'Visit during operating hours (check sngpl.com.pk for locations)',
      'Provide your consumer number or physical bill',
      'Pay the displayed amount in cash',
      'Receive an official franchise payment receipt',
    ],
    note: 'Franchise locations are listed on sngpl.com.pk. Not available in all areas. Payment reflects on SNGPL system within 24–48 hours.',
  },
];

const comparisonData = [
  { method: 'Easypaisa App',      speed: 'Instant',    fee: 'Rs. 10–25',   internet: 'Required',    receipt: 'SMS + App',   best: 'Telenor users' },
  { method: 'JazzCash App',       speed: 'Instant',    fee: 'Rs. 10–25',   internet: 'Required',    receipt: 'SMS + App',   best: 'Jazz/Warid users' },
  { method: 'JazzCash *786#',     speed: 'Instant',    fee: 'Rs. 15–30',   internet: 'Not required', receipt: 'SMS',        best: 'Basic phones' },
  { method: 'Internet Banking',   speed: '24–48 hrs',  fee: 'Usually free', internet: 'Required',   receipt: 'Digital',     best: 'Bank account holders' },
  { method: 'ATM',                speed: '24–72 hrs',  fee: 'Usually free', internet: 'Not required', receipt: 'Printed',   best: 'Card holders (no smartphone)' },
  { method: 'Bank Branch',        speed: '24–72 hrs',  fee: 'Rs. 50–100',  internet: 'Not required', receipt: 'Stamped',    best: 'Formal receipt needed' },
  { method: 'SNGPL Franchise',    speed: '24–48 hrs',  fee: 'Usually free', internet: 'Not required', receipt: 'Printed',   best: 'Local cash payment' },
];

const faqs = [
  { q: 'What is the last date to pay SNGPL bill?', a: 'The due date is printed on your bill — typically 15–20 days after the bill generation date. After the due date, a 10% late payment surcharge is added to your next bill. Check your latest bill on sngpl.com.pk for your exact due date as it varies by billing cycle.' },
  { q: 'How long does SNGPL payment take to reflect online?', a: 'Easypaisa and JazzCash: typically 24–48 hours. Internet banking: 24–48 hours. ATM and bank branch: 48–72 hours. SNGPL franchise: 24–48 hours. If payment has not reflected after 72 hours, call your payment channel with the transaction ID, then call SNGPL helpline 1199 for manual verification.' },
  { q: 'What happens if I pay the wrong amount?', a: 'If you overpay, the excess becomes an advance credit on your next bill — SNGPL does not automatically refund small overpayments. If you underpay, the remaining balance becomes an arrear with a 10% late surcharge if the due date has passed. Contact SNGPL helpline 1199 for large overpayment refunds or to request a payment plan for underpayments.' },
  { q: 'Can I pay multiple months of SNGPL bills at once?', a: 'Yes. Your current bill total already includes all outstanding arrears from previous months. Paying this total amount in full clears all dues. You can also make advance payments greater than the current bill — the excess credit applies to future bills.' },
  { q: 'My payment is not reflecting on SNGPL portal. What do I do?', a: 'First, wait the full processing time (72 hours for ATM/branch). Then check your payment app or bank app transaction history to confirm the transaction shows "Successful" with an amount and SNGPL reference. If successful but still not reflecting, call your payment channel with the transaction reference number, then call SNGPL helpline 1199 with your consumer number and transaction ID for manual update.' },
  { q: 'Can I pay SNGPL bill via JazzCash without internet?', a: 'Yes. Dial *786# on any Jazz or Warid mobile number, select "Pay Bills" → "Gas Bills" → "SNGPL" → enter your consumer number → confirm amount → enter MPIN. This USSD service works without any internet connection on basic feature phones. The bill amount is fetched directly from SNGPL\'s system via the mobile network.' },
  { q: 'Is there a fee for paying SNGPL bill via Easypaisa?', a: 'Easypaisa and JazzCash typically charge a small service fee (Rs. 10–25) per bill payment transaction. Internet banking payments through HBL, UBL, MCB are usually free. ATM payments through your own bank\'s ATM are usually free; other bank ATMs may charge Rs. 15–25. Bank branch counter payments may charge Rs. 50–100. Franchise centers are usually free.' },
  { q: 'Can I set up automatic payment for SNGPL bills?', a: 'Some banks offer standing order or auto-payment services for utility bills. Contact your bank\'s customer service to check if SNGPL auto-payment is available. Easypaisa and JazzCash currently do not offer automatic recurring SNGPL bill payments — you must manually initiate each month\'s payment.' },
  { q: 'What if SNGPL portal shows no bill due when I try to pay?', a: 'If no bill is currently due, the payment platform may show a zero amount or "no bill found." Either your bill has not been generated yet (check again after a few days), or your previous payment is still processing. Do not pay an amount without a valid bill fetched from SNGPL to avoid payment allocation issues.' },
  { q: 'Can someone else pay my SNGPL bill for me?', a: 'Yes. SNGPL bill payments only require the consumer number — no account ownership verification is needed for payment. A family member, friend, accountant, or anyone else can pay your SNGPL bill using any payment channel by entering your consumer number. They will see the amount due and can pay it from their own wallet or bank account.' },
  { q: 'How do I get a receipt for SNGPL bill payment?', a: 'Easypaisa/JazzCash: check Transaction History in the app and tap the transaction to see receipt details; also received as SMS. Internet banking: download the transaction receipt from your bank\'s payment history. ATM: collect the printed slip at the machine. Bank branch: collect the stamped counter receipt. Save all receipts for 30 days until payment reflects on SNGPL portal.' },
  { q: 'Can I pay SNGPL bill without a smartphone?', a: 'Yes. JazzCash *786# USSD service works on basic feature phones without internet. ATM payment works with just a debit card. Bank branch payment requires only cash and your bill or consumer number. All three methods work without a smartphone.' },
  { q: 'What if I accidentally pay another person\'s SNGPL bill?', a: 'If you entered the wrong consumer number and paid someone else\'s bill, the payment cannot be automatically reversed. Contact SNGPL helpline 1199 immediately with both consumer numbers (yours and the wrong one you paid) and your transaction details. SNGPL will investigate and can manually transfer the credit to the correct account, though this process may take several days.' },
];

export default function PaymentGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'Payment Guide', item: 'https://sngplbillcheck.pk/payment-guide' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      }) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link><span>/</span>
            <span className="text-white font-medium">Payment Guide</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Gas Bill Payment Guide 2025</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Complete step-by-step guide for every SNGPL payment method — Easypaisa, JazzCash, HBL, UBL, MCB, ATM, bank branch, and franchise centers. Plus comparison table, late payment policy, and 13 FAQs.</p>
          <div className="flex flex-wrap gap-2 mt-5">
            {['Easypaisa', 'JazzCash', 'HBL', 'UBL', 'MCB', 'ATM', 'Bank Branch', 'Franchise'].map(m => (
              <span key={m} className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{m}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Check bill first */}
      <section className="bg-blue-50 border-b border-blue-100 py-7 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-1">Step 1: Always check your bill amount before paying</p>
          <p className="text-xs text-blue-500 mb-3">Enter consumer number to see the exact amount due:</p>
          <BillChecker compact />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-10 prose-content">

        <h2>Before You Pay — Important First Steps</h2>
        <p>Always verify your current bill amount on <strong>sngpl.com.pk</strong> before initiating any payment. This critical first step ensures you pay the correct amount, confirms the payment due date, reveals any arrears from previous months, and helps you detect billing errors before payment complicates the situation. Your bill on the portal shows: the total amount due (current charges + any arrears), the due date, and the consumer number to use across all payment channels.</p>
        <p>If the bill amount seems unusually high, compare your meter reading with the reading shown on the bill before paying. If there is a significant discrepancy, call SNGPL helpline 1199 to request a meter verification before payment. Paying a disputed bill without protest may weaken your dispute claim later.</p>

        <h2>5 Critical Payment Tips to Avoid Problems</h2>
        <ul>
          <li><strong>Pay before the due date — always:</strong> A 10% late surcharge on gas consumption charges is automatically added to your next bill for any overdue payment. With gas bills potentially in the tens of thousands during winter, a 10% surcharge can mean Rs. 2,000–8,000 in additional charges. Set a monthly phone reminder 3 days before your due date.</li>
          <li><strong>Always save your payment receipt:</strong> Screenshot the payment confirmation in your app, save the SMS receipt, or keep the physical receipt from the bank/ATM. Store it until you confirm the payment has reflected on the SNGPL portal (check 48–72 hours after paying). If there is ever a payment dispute, this receipt is your primary evidence.</li>
          <li><strong>Use your consumer number, not meter number:</strong> When entering your identifier in any payment channel, always use your <strong>consumer number</strong> — not the meter number. The meter number (also printed on the bill) is for field technicians only and will not work in payment systems. Your consumer number is the 10–13 digit number labeled &ldquo;Consumer No.&rdquo; or &ldquo;Cust. No.&rdquo; on your bill.</li>
          <li><strong>Verify the bill amount before confirming:</strong> When the payment app displays your bill amount after you enter the consumer number, verify it matches what you see on the SNGPL portal. Minor timing differences are normal; significant differences may indicate a stale fetch or a system error. Pay the amount shown on the SNGPL bill portal if there is any doubt.</li>
          <li><strong>One payment per connection per month:</strong> If you manage multiple gas connections, pay each one separately using its own consumer number. Making two payments for the same consumer number in the same month does not double-pay the bill — the second payment becomes a credit on the next bill. This is not harmful but can cause confusion when tracking payment records.</li>
        </ul>
      </div>

      {/* Payment Method Cards */}
      <div className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">All SNGPL Payment Methods — Complete Step-by-Step</h2>
        <div className="space-y-5">
          {paymentMethods.map((m, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{m.icon}</span>
                  <h3 className="font-bold text-gray-900 text-lg">{m.name}</h3>
                </div>
                <span className={`badge ${m.badgeColor} text-xs`}>{m.badge}</span>
              </div>
              <ol className="space-y-2 mb-4">
                {m.steps.map((step, si) => (
                  <li key={si} className="flex gap-2.5 text-sm text-gray-700">
                    <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">{si + 1}</span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5 text-xs text-amber-800">
                💡 {m.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Methods Compared — Quick Reference</h2>
        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="px-3 py-3 text-left font-semibold">Method</th>
                <th className="px-3 py-3 text-left font-semibold">Reflection Speed</th>
                <th className="px-3 py-3 text-left font-semibold">Typical Fee</th>
                <th className="px-3 py-3 text-left font-semibold hidden sm:table-cell">Internet Needed</th>
                <th className="px-3 py-3 text-left font-semibold hidden md:table-cell">Best For</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((r, i) => (
                <tr key={r.method} className={`${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-t border-gray-100`}>
                  <td className="px-3 py-2.5 font-semibold text-gray-900">{r.method}</td>
                  <td className="px-3 py-2.5 text-gray-700">{r.speed}</td>
                  <td className="px-3 py-2.5 text-gray-700">{r.fee}</td>
                  <td className="px-3 py-2.5 text-gray-500 hidden sm:table-cell">{r.internet}</td>
                  <td className="px-3 py-2.5 text-gray-500 hidden md:table-cell">{r.best}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 prose-content pb-6">

        <h2>Bank-Specific SNGPL Payment Details</h2>
        <p>Here is how to find the SNGPL payment option in the most commonly used Pakistani banking apps:</p>

        <h3>HBL Mobile Banking</h3>
        <p>Open HBL Mobile → bottom navigation → &ldquo;Pay Bills&rdquo; → &ldquo;Utilities&rdquo; → scroll to find &ldquo;Gas&rdquo; → select &ldquo;SNGPL&rdquo; → enter consumer number. HBL also offers a &ldquo;Favorites&rdquo; feature where you can save SNGPL with your consumer number for instant future payments. HBL internet banking at hbl.com also supports SNGPL bill payment under &ldquo;Pay Bills.&rdquo;</p>

        <h3>UBL Digital App</h3>
        <p>Open UBL Digital → &ldquo;Payments&rdquo; tab → &ldquo;Utility Bills&rdquo; → &ldquo;Gas Bills&rdquo; → &ldquo;SNGPL&rdquo; → enter consumer number → confirm payment. UBL also allows bill payment through UBL Net Banking at ubl.com.pk. Save as favorite after first payment for quick access.</p>

        <h3>MCB Mobile App</h3>
        <p>Open MCB Mobile → &ldquo;Pay Bills&rdquo; → &ldquo;Utilities&rdquo; → &ldquo;Gas&rdquo; → &ldquo;SNGPL&rdquo; → enter consumer number → pay. MCB also supports bill payment through the MCB Lite debit card app and the full MCB internet banking portal.</p>

        <h3>Meezan Bank Mobile</h3>
        <p>Open Meezan Bank App → &ldquo;Payments&rdquo; → &ldquo;Utility Bills&rdquo; → &ldquo;Gas&rdquo; → &ldquo;SNGPL&rdquo; → enter consumer number → confirm. Meezan Bank offers Islamic banking with halal transaction principles. SNGPL utility bill payment is available and fully supported.</p>

        <h3>Bank Alfalah / ABL / Silk Bank</h3>
        <p>All major Pakistani banks including Bank Alfalah, Allied Bank, Askari Bank, Silkbank, Faysal Bank, and Bank of Punjab support SNGPL bill payment through their mobile apps and internet banking portals. The navigation may vary slightly but the path is consistently: Pay Bills → Utilities → Gas → SNGPL → consumer number.</p>

        <h2>Advance Payments and Bill Credits</h2>
        <p>SNGPL allows and automatically handles advance payments. If you pay more than your current bill amount, or if you pay when no bill is currently generated, the excess amount is credited to your SNGPL account. This credit appears on your next bill as a deduction from the amount due. SNGPL does not pay interest on credit balances — the credit simply reduces future bills.</p>
        <p>Some consumers deliberately make advance payments in summer when gas bills are minimal (Rs. 260–500) to build up a credit that offsets higher winter bills. While this approach has cash flow advantages, it is generally more efficient to simply pay each month&apos;s bill when due rather than maintaining a large credit balance with SNGPL. If you have a very large credit balance (more than Rs. 5,000), contact SNGPL helpline 1199 to discuss whether a refund can be arranged.</p>

        <h2>What Happens If You Miss the SNGPL Payment Due Date</h2>
        <p>Missing your SNGPL payment due date has escalating consequences that become more severe the longer the delay continues:</p>

        <h3>After Due Date — 10% Late Payment Surcharge</h3>
        <p>A <strong>10% late payment surcharge</strong> on the gas consumption amount (not the full bill total) is automatically added to your next month&apos;s bill. This surcharge is non-negotiable and cannot be waived — it is a standard SNGPL policy approved by OGRA. On a winter bill with Rs. 50,000 in gas consumption charges, the surcharge alone adds Rs. 5,000. This is a compelling reason to pay on time every month without exception.</p>

        <h3>30+ Days Overdue — Formal Demand Notice</h3>
        <p>If a bill remains unpaid for 30 or more days past the due date, SNGPL issues a formal demand notice delivered to your connection address. This document requests immediate payment of all outstanding dues and warns of imminent disconnection. Receiving a demand notice means you have very little time before disconnection action is initiated.</p>

        <h3>Extended Non-Payment — Gas Disconnection</h3>
        <p>After the demand notice period expires (typically 15 days after the notice date), SNGPL engineers visit your premises and physically disconnect your gas supply at the street valve or meter. Once disconnected, the gas supply cannot be restored until all outstanding dues, surcharges, and a reconnection fee are paid in full. Reconnection typically takes 1–5 working days after payment confirmation and the reconnection fee payment.</p>

        <h3>How to Request a Payment Extension</h3>
        <p>If you are facing genuine financial hardship and cannot pay your SNGPL bill by the due date, call helpline 1199 and explain your situation before the due date passes. SNGPL has a consumer welfare process for hardship cases — in some situations, a short payment extension can be granted. This is not guaranteed, but contacting SNGPL proactively before disconnection is always better than waiting for the gas to be cut off. Keep any verbal agreement in writing if possible, and follow up with the SNGPL self-service portal.</p>

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
            { href: '/',                label: '🔍 Check Bill Amount',  desc: 'View your current bill first' },
            { href: '/duplicate-bill',  label: '📄 Duplicate Bill',     desc: 'Download bill PDF' },
            { href: '/consumer-number', label: '🔢 Consumer Number',    desc: 'Find your account number' },
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
