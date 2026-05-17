import type { Metadata } from 'next';
import Link from 'next/link';
import BillChecker from '../components/BillChecker';

export const metadata: Metadata = {
  title: 'SNGPL Consumer Number — Find, Recover & Understand | Complete Guide',
  description: 'Find your SNGPL consumer number on your gas bill, meter card, or via helpline 1199. Format explained, recovery steps, and all usage methods. Free guide.',
  alternates: { canonical: 'https://sngplbillcheck.pk/consumer-number' },
  openGraph: {
    title: 'SNGPL Consumer Number Guide — Find, Recover & Understand',
    description: 'Everything about your SNGPL consumer number: where to find it, format, recovery options and usage for bill check, payment, and complaints.',
    url: 'https://sngplbillcheck.pk/consumer-number',
  },
};

const faqs = [
  { q: 'What is an SNGPL consumer number?', a: 'An SNGPL consumer number is a unique 10–13 digit identifier permanently assigned to each gas connection address. It links your account to SNGPL\'s billing system and is required for checking bills online, making digital payments via Easypaisa or JazzCash, registering complaints, and accessing the SNGPL mobile app.' },
  { q: 'Where is the consumer number on my SNGPL bill?', a: 'Your consumer number is printed at the top section of your gas bill in a box labeled "Consumer No." or "Cust. No." It appears before your name and address and is 10 to 13 digits long. It is also on the meter card near your gas meter.' },
  { q: 'How do I recover a lost SNGPL consumer number?', a: 'Call SNGPL helpline 1199 with your CNIC and connection address. The representative verifies your identity and provides your consumer number verbally. Alternatively, visit your nearest SNGPL SDC with your original CNIC, or check old Easypaisa/JazzCash payment receipts which show the consumer number used.' },
  { q: 'Is the consumer number the same as the meter number?', a: 'No. The consumer number identifies your billing account and stays constant throughout your connection lifetime. The meter number identifies the physical gas meter device — this changes if SNGPL replaces your meter. Always use the consumer number (not meter number) for bill checking and payments.' },
  { q: 'How many digits is an SNGPL consumer number?', a: 'SNGPL consumer numbers are 10 to 13 digits long. Most connections in major cities have 10 or 11 digits. Enter the number exactly as printed on your bill — no spaces, hyphens, or modification of leading zeros.' },
  { q: 'Can I use someone else\'s consumer number to check their bill?', a: 'Yes. The SNGPL portal only requires the consumer number — no password or login needed to view billing information. This allows family members, tenants, and agents to check and pay bills. However, making changes to an account (name, address, transfer of ownership) requires the registered owner\'s presence and CNIC.' },
  { q: 'What if my consumer number shows "not found" on the portal?', a: 'Verify you entered all digits correctly from your physical bill. If the error persists, your account may be newly created after a recent connection or transfer. Wait 48 hours and try again. If still not found, call SNGPL helpline 1199 or visit your nearest SNGPL Service Delivery Center.' },
  { q: 'Does my consumer number change when I move house?', a: 'Yes. Consumer numbers are tied to the connection address, not to the person. When you move, the new property has its own consumer number (or you apply for a new connection). The consumer number from your old address stays with that address for the new occupant.' },
  { q: 'Can I have multiple consumer numbers?', a: 'Yes. Each gas connection has its own consumer number. If you own or manage multiple properties with SNGPL connections, each one has a separate consumer number. The SNGPL mobile app allows you to save multiple consumer numbers under one registered account for easy multi-connection management.' },
  { q: 'What is the regional code in an SNGPL consumer number?', a: 'The first 2–4 digits of your consumer number represent your SNGPL service zone. For example, connections in Lahore and its surrounding circles start with specific prefix digits, while Rawalpindi, Faisalabad, Peshawar, and other cities have their own regional prefixes. This regional coding allows SNGPL\'s billing system to route your account to the correct distribution circle for reading and billing.' },
  { q: 'How long does it take to get a consumer number for a new connection?', a: 'After SNGPL installs your new gas connection and meter, you typically receive your consumer number within 5–15 working days. SNGPL sends a welcome letter with your consumer number, or you can collect it from the SNGPL Service Delivery Center that processed your connection application.' },
  { q: 'Can I transfer my consumer number to another person?', a: 'No. Consumer numbers cannot be transferred between people. What you can do is transfer the gas connection ownership from one person to another at an SNGPL Service Delivery Center. This process — called a transfer of ownership — requires both parties to be present with CNICs and relevant property documents. A new consumer number is not issued; the existing number continues with the new registered owner.' },
  { q: 'Is my SNGPL consumer number the same as my National Consumer Number?', a: 'No. The SNGPL consumer number is specific to your SNGPL gas connection. It has no relation to your CNIC (Computerized National Identity Card) number or any other utility consumer number (LESCO/FESCO electricity number, PTCL number, etc.). Each utility company has its own independent consumer number system.' },
  { q: 'What should I do if my consumer number has changed on my bill?', a: 'Consumer numbers occasionally change when SNGPL restructures its billing zones or upgrades its billing software. If your bill shows a different consumer number, do not panic — call helpline 1199 to confirm which number to use going forward. Update your saved consumer numbers in payment apps (Easypaisa, JazzCash) accordingly to avoid paying to the wrong account.' },
  { q: 'Why do some SNGPL consumer numbers start with zeros?', a: 'Some regional consumer number formats include leading zeros. These must be entered exactly as printed on your bill — do not drop the leading zeros. For example, if your bill shows 0034567890, enter 0034567890 (not 34567890). If both formats give an error, call 1199 to confirm the correct format for your area.' },
];

export default function ConsumerNumberPage() {
  return (
    <>
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
            <span className="text-white font-medium">Consumer Number</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Consumer Number — Complete Guide 2025</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Find your consumer number, understand its format and regional coding, recover it if lost, manage multiple connections, and use it across all SNGPL services.</p>
        </div>
      </section>

      {/* Quick bill check */}
      <section className="bg-blue-50 border-b border-blue-100 py-7 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm text-blue-700 font-semibold mb-3">Have your consumer number? Check your bill instantly:</p>
          <BillChecker compact />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 prose-content">

        <h2>What is an SNGPL Consumer Number?</h2>
        <p>Your SNGPL consumer number (also referred to as account number, customer number, or Cust. No. on your bill) is a unique numeric identifier permanently linked to your specific gas connection address. When SNGPL installs a new gas connection at a premises, it assigns a consumer number that stays associated with that address for the lifetime of the connection — regardless of who lives there or who owns the property.</p>
        <p>The consumer number is the master key to all of SNGPL&apos;s digital services. Without it, you cannot check your bill on the official portal (billchecker.sngpl.com.pk), make payments through Easypaisa, JazzCash, or internet banking, register the SNGPL Consumer mobile app, submit complaints online at selfservice.sngpl.com.pk, or verify your bill amount before paying at a bank or ATM. It is the single most critical piece of information for every SNGPL consumer.</p>
        <p>Consumer numbers are assigned at the regional and distribution circle level, meaning they are unique within SNGPL&apos;s entire network. No two connections in Pakistan share the same SNGPL consumer number. The number encodes geographic and administrative information about your connection while also serving as your unique account identifier.</p>

        <h2>Where to Find Your SNGPL Consumer Number</h2>
        <p>There are five reliable places where you can find your SNGPL consumer number:</p>

        <h3>1. Your Printed Gas Bill (Most Reliable)</h3>
        <p>Every monthly SNGPL gas bill prominently displays your consumer number at the top of the bill, in a clearly labeled box. Look for text reading &ldquo;Consumer No.,&rdquo; &ldquo;Cust. No.,&rdquo; or &ldquo;Consumer Number.&rdquo; It is typically in the upper section of the bill alongside your name, address, and billing period. The number is printed in a larger font than surrounding text and may have a box drawn around it to make it easy to locate.</p>

        <h3>2. Your Gas Meter Card</h3>
        <p>When SNGPL installs your gas connection, they affix a small laminated meter card near the gas meter — usually on the wall beside the meter or on the meter housing itself. This card shows your consumer number, meter number, connection date, and the SNGPL service center responsible for your area. The meter card is designed to survive outdoor conditions and serves as a permanent reference even when bills are not available.</p>

        <h3>3. The SNGPL Consumer Mobile App</h3>
        <p>If you have previously registered the SNGPL Consumer mobile app, your consumer number(s) are saved under your registered profile. Open the app, tap on &ldquo;My Connections&rdquo; or &ldquo;Account,&rdquo; and your registered consumer numbers appear. The app can store multiple consumer numbers if you have more than one gas connection.</p>

        <h3>4. Payment App Transaction History</h3>
        <p>Previous bill payments through Easypaisa, JazzCash, internet banking, or ATM generate receipts that include the consumer number used for that payment. Check your payment history: in Easypaisa, go to Transaction History and find any SNGPL bill payment; in JazzCash, check Statement; in your bank&apos;s mobile app, review Utility Bill payment receipts. Any successful SNGPL bill payment receipt will show the consumer number.</p>

        <h3>5. SNGPL Welcome Letter</h3>
        <p>When a new gas connection is installed, SNGPL sends a welcome letter to the connection address confirming the installation and providing the assigned consumer number, meter number, and service center contact details. If you have moved into a property with an existing SNGPL connection, ask the previous owner or landlord for this documentation.</p>

        <h2>Understanding the Consumer Number Format and Structure</h2>
        <p>SNGPL consumer numbers are 10 to 13 digits long and structured to encode geographic and administrative information about each connection. Understanding this structure helps you verify whether a number looks correct for your area and troubleshoot issues:</p>

        <h3>Regional Prefix Codes</h3>
        <p>The first 2–4 digits of your consumer number represent your SNGPL service zone. Different cities and regions have different prefix codes. While the exact codes change periodically as SNGPL reorganizes its distribution zones, connections in major cities typically share the same prefix digits within that region. This is why you may notice that your consumer number starts with the same 2–3 digits as your neighbors&apos; numbers if you are in the same area.</p>

        <h3>Distribution Circle Code</h3>
        <p>Following the regional prefix, the next 2–3 digits identify the specific distribution circle within your region. SNGPL divides each region into multiple distribution circles, each managed by a local service center. The distribution circle code in your consumer number determines which SNGPL field team is responsible for reading your meter and handling local service requests.</p>

        <h3>Sequential Account Number</h3>
        <p>The remaining digits (typically 5–7 digits) are your unique sequential account number within your distribution circle. These digits distinguish your connection from every other connection in the same circle. As new connections are added to a circle, they receive sequentially larger account numbers.</p>

        <h3>Consumer Number vs. Meter Number</h3>
        <p>These are two different numbers that often appear on the same bill, causing confusion. Your <strong>consumer number</strong> identifies your billing account — it is permanent, does not change when your meter is replaced, and is what you use for all digital services and payments. Your <strong>meter number</strong> identifies the specific physical gas meter installed at your premises — it changes whenever SNGPL replaces your meter (due to age, malfunction, or tampering). The meter number is used by SNGPL technicians for field work but is not required for any consumer-facing digital service.</p>

        <h2>How to Recover a Lost SNGPL Consumer Number</h2>
        <p>If you cannot find your consumer number through any of the five sources above, here are the specific recovery steps for each situation:</p>

        <h3>Method 1: Call SNGPL Helpline 1199 (Fastest)</h3>
        <p>This is the quickest recovery method and works 24/7. When you call 1199, have ready: your full name exactly as registered on the SNGPL account (the original connection applicant&apos;s name), the complete gas connection address including house/flat number, street name, area/sector, and city, and your CNIC number. The representative will verify your identity against SNGPL&apos;s records and provide your consumer number verbally.</p>
        <p>If you are a tenant and the account is in the landlord&apos;s name, you will need the landlord&apos;s name and ideally their CNIC to complete the verification. Many landlords willingly share their consumer number with tenants as it is not a sensitive security credential — it only allows bill viewing and payment, not account changes.</p>

        <h3>Method 2: Visit SNGPL Service Delivery Center</h3>
        <p>Visit your nearest SNGPL Service Delivery Center (SDC) during working hours (Monday–Friday, 9 AM–5 PM; some offices also open Saturday mornings). Bring your original CNIC. If you are a tenant rather than the connection owner, bring your tenancy agreement and a document showing the property address. SNGPL staff will look up your consumer number in the system and print it for you. SDC locations are listed on sngpl.com.pk under &ldquo;Service Delivery Centers.&rdquo;</p>

        <h3>Method 3: Check Old Payment App History</h3>
        <p>This is the easiest method if you have made any digital payment before. Open Easypaisa → Transaction History → find any SNGPL Gas bill payment → tap for details → the consumer number appears in the transaction record. Same process for JazzCash (Statement section), any bank mobile app (Utility Bill payment history), or your bank&apos;s SMS alerts which typically include the consumer number in the payment confirmation message.</p>

        <h3>Method 4: SNGPL Self-Service Portal</h3>
        <p>Visit selfservice.sngpl.com.pk and check if you have a registered account from previous complaint or service registrations. If your email or mobile number is registered, log in and your consumer number will be visible under your account. If not previously registered, use the &ldquo;Forgot Consumer Number&rdquo; or inquiry submission form to request it from SNGPL&apos;s online support team — response typically takes 2–5 business days.</p>

        <h3>Method 5: Neighbors or Building Management</h3>
        <p>In apartment buildings, society housing, or areas where multiple connections are managed together, the building management or security office often keeps records of utility consumer numbers for all units. This is especially common in Lahore DHA, Islamabad F/G sectors, Karachi (SSGC territory, but similar for KPK/Punjab areas), and other organized housing schemes.</p>

        <h2>Using Your Consumer Number Across All SNGPL Services</h2>
        <p>Your consumer number is required for every SNGPL digital interaction. Here is a comprehensive guide to exactly how to use it in each service:</p>

        <h3>Online Bill Check (billchecker.sngpl.com.pk)</h3>
        <p>Visit the portal, enter your 10–13 digit consumer number in the search field, click &ldquo;Get Bill&rdquo; or search, and your current month&apos;s bill loads with full details: amount due, due date, meter readings, consumption, and charge breakdown. No login or registration required. The portal typically shows the most recent 1–2 bills.</p>

        <h3>Easypaisa Payment</h3>
        <p>Open Easypaisa app → Bill Payments → Utilities (or Gas) → SNGPL → enter consumer number → Easypaisa fetches your current bill amount automatically → verify amount → enter PIN to pay → save the receipt SMS. The consumer number is saved in Easypaisa&apos;s &ldquo;Saved Billers&rdquo; feature after first use, making future payments one-tap.</p>

        <h3>JazzCash Payment</h3>
        <p>Open JazzCash → Pay Bills → Gas Bills → SNGPL → enter consumer number → verify bill amount → enter MPIN → confirm. Alternatively, dial *786# on any Jazz or Warid SIM for USSD-based payment without internet. Type consumer number when prompted and follow the menu options.</p>

        <h3>Internet Banking (HBL, UBL, MCB, Meezan, etc.)</h3>
        <p>Log into your bank&apos;s mobile app or website → Utility Payments (or Pay Bills) → Gas → SNGPL → enter consumer number → bank fetches bill amount → review and confirm → payment processes. Most banks allow saving SNGPL as a &ldquo;Favorite Biller&rdquo; with your consumer number for future one-tap payments. Check if your bank offers standing orders for automatic SNGPL bill payment.</p>

        <h3>ATM Bill Payment</h3>
        <p>Insert debit card → enter PIN → Other Services → Bill Payment → Utility Bills → Gas → SNGPL → enter consumer number using keypad → review displayed bill amount → confirm payment → collect printed receipt. Keep the receipt until payment reflects on SNGPL portal (24–72 hours for ATM payments).</p>

        <h3>SNGPL Consumer Mobile App Registration</h3>
        <p>Download &ldquo;SNGPL Consumer&rdquo; from Play Store or App Store → tap Register → enter consumer number → system sends OTP to the mobile number registered with SNGPL for this connection → enter OTP → create a password → your connection is saved in the app. You can add additional consumer numbers after registration to manage multiple connections from one app account.</p>

        <h3>Complaint Registration (selfservice.sngpl.com.pk)</h3>
        <p>Go to selfservice.sngpl.com.pk → Register (first time) → enter consumer number + mobile number → verify OTP → set password → log in → Submit Complaint → select complaint category → describe the issue → submit. You receive a complaint reference number for tracking. SNGPL&apos;s response typically comes within 3–7 business days depending on complaint type.</p>

        <h2>Managing Multiple SNGPL Consumer Numbers</h2>
        <p>If you own rental property, manage a business with multiple gas connections, or are a property manager, you may need to track multiple SNGPL consumer numbers simultaneously. Here is how to manage them efficiently:</p>
        <ul>
          <li><strong>SNGPL Mobile App:</strong> Register the app with one connection, then add additional consumer numbers under &ldquo;Add Connection&rdquo; in the app settings. All registered connections appear on the app home screen for quick switching.</li>
          <li><strong>Easypaisa/JazzCash Saved Billers:</strong> Both apps allow saving multiple SNGPL billers (consumer numbers) under different labels (e.g., &ldquo;House 1,&rdquo; &ldquo;Shop,&rdquo; &ldquo;Office&rdquo;). Pay any connection with a single tap from your saved billers list.</li>
          <li><strong>Spreadsheet record:</strong> Maintain a simple spreadsheet or notes document with each property&apos;s consumer number, address, and expected billing date. Check and pay each connection before its individual due date.</li>
          <li><strong>Bank Standing Orders:</strong> Some Pakistani banks allow setting up standing orders for utility bill payments — the bank automatically pays your SNGPL bill each month when the bill becomes due. Contact your bank to check if this service is available for SNGPL bills.</li>
        </ul>

        <h2>Consumer Number Security — What You Should and Should Not Do</h2>
        <p>Your SNGPL consumer number is a semi-public identifier. It allows bill viewing and payment but does not grant access to sensitive account information or the ability to make account changes. Here is a practical guide to appropriate handling:</p>
        <ul>
          <li><strong>Safe to share:</strong> Consumer numbers can be shared with family members, trusted tenants, accountants, and property managers who need to check or pay bills on your behalf. Sharing the consumer number for bill payment purposes is entirely safe.</li>
          <li><strong>Do not post publicly:</strong> While the risk is minimal, avoid posting your consumer number on social media, public forums, or in publicly accessible documents. Anyone with your consumer number can view your billing history and consumption data — not harmful, but unnecessary information to share broadly.</li>
          <li><strong>SNGPL does not ask for your number unsolicited:</strong> SNGPL will never call you asking for your consumer number or CNIC &ldquo;for verification&rdquo; out of the blue. These calls are scams. If you receive such a call, hang up and call SNGPL&apos;s official helpline 1199 directly to verify.</li>
          <li><strong>Account changes require in-person verification:</strong> No one can change your SNGPL account details (registered name, address, bank details, ownership transfer) using only your consumer number. All account modifications require personal presence at an SNGPL Service Delivery Center with original CNIC and relevant documents.</li>
          <li><strong>Protect your billing history from privacy perspective:</strong> Your gas bills reflect your household&apos;s presence patterns — high winter consumption shows the house is occupied, very low summer bills may indicate extended absence. This information is benign for billing purposes but consider this before sharing consumer numbers with parties who have no legitimate billing need.</li>
        </ul>

        <h2>Common Consumer Number Errors and Solutions</h2>
        <p>These are the most frequently encountered consumer number problems and their proven solutions:</p>
        <ul>
          <li><strong>Error: &ldquo;Invalid Consumer Number&rdquo;</strong> — You entered an incorrect digit. Verify each digit from your physical bill, one by one. Pay special attention to pairs of digits that look similar: 1 vs 7, 6 vs 0, 8 vs 3. Use the physical bill, not a photo or handwritten copy, as your reference.</li>
          <li><strong>Error: &ldquo;Account Not Found&rdquo;</strong> — Your consumer number format for your region may include or exclude a leading zero. Try the number with and without a leading zero. If neither works, your connection may be newly installed or recently transferred — allow 48 hours and try again. If still unresolved, call 1199.</li>
          <li><strong>Error: Bill shows another person&apos;s name</strong> — You entered a consumer number that belongs to a different account. Double-check that you are using your own consumer number and not a neighbor&apos;s or a previously noted number from another address.</li>
          <li><strong>Payment app shows wrong amount:</strong> Easypaisa and JazzCash fetch bill amounts from SNGPL&apos;s payment system, which may update on a different schedule than the bill portal. If there is a discrepancy, trust the bill portal amount (billchecker.sngpl.com.pk) and pay that amount manually rather than the app-fetched figure.</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <div className="not-prose space-y-3 mt-6">
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

      {/* Internal links */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center border border-gray-200">
          {[
            { href: '/',               label: '🔍 Check Bill Now',    desc: 'Official portal redirect' },
            { href: '/duplicate-bill', label: '📄 Duplicate Bill',    desc: 'Download your bill PDF' },
            { href: '/payment-guide',  label: '💳 Payment Guide',     desc: 'Easypaisa, JazzCash & more' },
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
