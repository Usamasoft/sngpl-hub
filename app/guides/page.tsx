import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SNGPL Guides — Consumer Number, Duplicate Bill, Payment & Troubleshooting 2025',
  description: 'Complete SNGPL guides: consumer number lookup, duplicate bill download, online payment methods, and troubleshooting. Free step-by-step guides for every SNGPL service in Pakistan.',
  alternates: { canonical: 'https://sngplbillcheck.pk/guides' },
};

const guides = [
  {
    icon: '🔢',
    title: 'Consumer Number Guide',
    id: 'consumer-number',
    desc: 'Find, understand, and recover your SNGPL consumer number. Complete format explained, where to find it, what each digit means, and 5 recovery methods.',
    href: '/guides#consumer-number',
    sections: ['What is a consumer number?', 'Where to find it on your bill', 'Understanding the digit format', 'Consumer vs. meter number difference', '5 ways to recover a lost number'],
  },
  {
    icon: '📄',
    title: 'Download Duplicate Bill',
    id: 'duplicate-bill',
    desc: 'Lost your gas bill? Download a duplicate instantly via official portal, SNGPL mobile app, WhatsApp, SMS, or visiting an SNGPL office.',
    href: '/guides#duplicate-bill',
    sections: ['Via official web portal (5 steps)', 'Via SNGPL mobile app', 'Via WhatsApp service', 'Via SMS short code', 'Visit SNGPL Service Delivery Center'],
  },
  {
    icon: '💳',
    title: 'How to Pay SNGPL Bill',
    id: 'payment',
    desc: 'Pay your gas bill online via Easypaisa, JazzCash, bank apps, ATM, internet banking, franchise outlets, or bank branch counter.',
    href: '/guides#payment',
    sections: ['Easypaisa step-by-step', 'JazzCash complete guide', 'HBL / UBL / MCB mobile banking', 'ATM payment guide', 'Bank branch & franchise payment'],
  },
  {
    icon: '⚠️',
    title: 'Troubleshooting',
    id: 'troubleshoot',
    desc: 'Resolve wrong bill amounts, disconnection notices, payment not reflecting, portal errors, high consumption bills, and other SNGPL issues.',
    href: '/guides#troubleshoot',
    sections: ['Wrong bill amount disputed', 'Payment not showing on portal', 'Disconnection notice help', 'Complaint registration process', 'Helpline numbers & contacts'],
  },
];

export default function GuidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sngplbillcheck.pk' },
          { '@type': 'ListItem', position: 2, name: 'SNGPL Guides', item: 'https://sngplbillcheck.pk/guides' },
        ],
      }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          { '@type': 'Question', name: 'How do I find my SNGPL consumer number?', acceptedAnswer: { '@type': 'Answer', text: 'Your SNGPL consumer number is printed on every gas bill in the top section labeled "Consumer No." or "Cust. No." You can also find it on your meter card near the gas meter, or recover it by calling SNGPL helpline 1199 with your CNIC and connection address.' } },
          { '@type': 'Question', name: 'How do I download a duplicate SNGPL bill?', acceptedAnswer: { '@type': 'Answer', text: 'Visit billchecker.sngpl.com.pk, enter your consumer number, and click "Download PDF." Alternatively, use the SNGPL Consumer mobile app, send your consumer number to SNGPL WhatsApp, or visit your nearest SNGPL Service Delivery Center.' } },
          { '@type': 'Question', name: 'How do I pay my SNGPL gas bill online?', acceptedAnswer: { '@type': 'Answer', text: 'Pay via Easypaisa (Bill Payments → Gas → SNGPL), JazzCash (Pay Bills → Gas), HBL/UBL/MCB internet banking (Utility Bills → SNGPL), or any ATM (Bill Payment → Gas → SNGPL). Enter your consumer number to fetch the bill amount and confirm payment.' } },
          { '@type': 'Question', name: 'What is the SNGPL helpline number?', acceptedAnswer: { '@type': 'Answer', text: 'SNGPL helpline is 1199 — available 24/7 for emergencies, billing inquiries, complaint registration, and consumer number recovery. The online self-service portal is at selfservice.sngpl.com.pk.' } },
          { '@type': 'Question', name: 'How do I register a complaint with SNGPL?', acceptedAnswer: { '@type': 'Answer', text: 'Register online at selfservice.sngpl.com.pk, call SNGPL helpline 1199, or visit your nearest SNGPL Service Delivery Center. Always get a complaint reference number for tracking. Escalate to OGRA (ogra.org.pk) if SNGPL does not resolve within 14 working days.' } },
        ],
      }) }} />
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">Guides</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL Complete Resource Guides 2025</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Consumer number, duplicate bills, payment methods, troubleshooting — everything a Sui Northern Gas
            consumer needs in one comprehensive guide.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {['Consumer Number', 'Duplicate Bill', 'Payment Methods', 'Troubleshooting', 'Glossary'].map(t => (
              <span key={t} className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide Cards ──────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <p className="text-gray-500 text-sm text-center mb-8">
          Jump to any section — or scroll down for the complete guides below.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map(g => (
            <a
              key={g.title}
              href={g.href}
              className="card hover:shadow-xl hover:-translate-y-1 transition-all block no-underline"
              id={g.id === 'consumer-number' ? g.id : undefined}
            >
              <div className="text-3xl mb-3">{g.icon}</div>
              <h2 className="text-lg font-bold text-gray-900 mb-2">{g.title}</h2>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">{g.desc}</p>
              <ul className="space-y-1 mb-2">
                {g.sections.map((s, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>
      </section>

      {/* ── Full Inline Guide Content ─────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 pb-16 prose-content">

        {/* ═══════════════════════════════════════════════════════════
            SECTION 1 — CONSUMER NUMBER
            ═══════════════════════════════════════════════════════════ */}
        <section id="consumer-number" className="mb-16">
          <h2>SNGPL Consumer Number — Complete Guide 2025</h2>

          <p>Your SNGPL consumer number is the single most important identifier associated with your natural gas connection in Pakistan. Whether you want to check your current bill amount online, download a duplicate copy of your gas bill, register a complaint on the SNGPL self-service portal, make an online payment through Easypaisa or JazzCash, or track service requests — your consumer number is mandatory for every single one of these operations. Without it, SNGPL's digital systems simply cannot identify which account you are referring to among the more than seven million active connections it manages across Punjab, Khyber Pakhtunkhwa, Azad Kashmir, and the Islamabad Capital Territory.</p>

          <p>Many consumers confuse their consumer number with their meter number. While both are numbers associated with your gas service, they serve entirely different purposes and are located in different places. Your consumer number is the billing account identifier — it stays with you even if your physical meter is changed. Your meter number, on the other hand, is a hardware identifier engraved or printed on the physical gas meter installed at your premises. For all online services, payments, and complaint registration, you should always use your consumer number, not the meter number.</p>

          <h3>What Exactly Is an SNGPL Consumer Number?</h3>
          <p>The SNGPL consumer number is a unique numeric identifier assigned to each gas connection when it is first established. It is essentially your gas account number — the same concept as a bank account number, but for your gas utility account. SNGPL assigns this number at the time of new connection and it remains permanently linked to your specific address and connection for the lifetime of that account. The number does not change when you receive new bills, when billing cycles change, or when tariff rates are revised by OGRA.</p>

          <p>Every consumer number in the SNGPL system is unique. No two connections share the same consumer number, which is how SNGPL's billing software and payment reconciliation systems can identify exactly whose bill was paid when thousands of transactions come in simultaneously. The number encodes information about your region, distribution circle, and sequential account within that circle, although modern digital systems use the number as a simple lookup key rather than needing consumers to decode its internal structure.</p>

          <h3>Consumer Number Format and Structure</h3>
          <p>SNGPL consumer numbers typically range from 10 to 13 digits in length depending on the region and era in which your connection was established. Older connections established before SNGPL's digital transformation in the early 2000s may have shorter numbers, while newer connections issued after the system upgrade are typically longer. The number is entirely numeric — no letters, no hyphens, no spaces in the actual account identifier, although printed bills sometimes display it with formatting separators for readability.</p>

          <p>The leading digits of your consumer number encode geographical and operational information. The first one or two digits indicate your SNGPL zone or region. For example, connections in the greater Lahore region typically begin with specific region codes that identify the Lahore Distribution Circle. Rawalpindi and Islamabad connections carry different prefix codes corresponding to the Northern Punjab and Federal Capital zones. Peshawar and KPK connections have their own prefix sequences. The middle portion of the number identifies your specific Distribution Circle within the region. SNGPL divides its service territory into multiple distribution circles, each serving a particular geographic area or urban zone. The final digits form your sequential account number within that distribution circle — the unique identifier that distinguishes your specific connection from every other connection in the same area.</p>

          <h3>Where to Find Your Consumer Number</h3>
          <p>The most reliable place to find your SNGPL consumer number is your gas bill. On a standard SNGPL printed bill, the consumer number appears prominently near the top of the document, typically in a box or field labeled "Consumer No.", "Cust. No.", or "Consumer Number." It is usually in a slightly larger font than surrounding text and may be accompanied by other identifiers. Look for it in the account information header section of your bill, which also contains your name, installation address, and connection category (Domestic / Commercial / Industrial).</p>

          <p>If you do not have a current bill but have received one at any point in the past, even years ago, that old bill carries the same consumer number. Your consumer number does not change between billing periods. An old bill from 2018 or 2015 carries the same consumer number as your most recent bill, making old bills useful recovery documents even when you believe they are outdated.</p>

          <p>Your consumer number is also displayed on your meter card — the small rectangular card that is either attached to your gas meter or kept in your household records when your meter was installed. SNGPL technicians affix these cards to the meter or hand them to the account holder at the time of installation. If your meter card is legible, it will show the consumer number clearly. The card also typically shows your meter serial number, which is different from the consumer number but printed nearby on the same card.</p>

          <p>If you have registered on the SNGPL official website (selfservice.sngpl.com.pk) or on the SNGPL Consumer mobile application, you can log into your account and view all registered consumer numbers in your profile. Once you have linked a consumer number to a digital account, it appears in your saved connections for easy retrieval anytime without needing a physical bill.</p>

          <p>For connections where you receive your gas bill via email (e-billing), your consumer number appears in the PDF attachment exactly as it does on the printed version. It also appears in the email subject line and body in most SNGPL e-bill formats. If you have ever paid your SNGPL bill through a bank, Easypaisa, or JazzCash, your payment confirmation receipts also reference your consumer number, making these receipts useful as a backup source.</p>

          <h3>Consumer Number vs. Meter Number — Key Differences</h3>
          <p>Consumers frequently confuse these two identifiers, especially when SNGPL technical staff ask for the meter number during site visits and when the billing portal asks for the consumer number. Understanding the difference saves time and avoids errors. Your <strong>consumer number</strong> is your billing account identifier — it lives in SNGPL's software system and is used for all online services, payment reconciliation, complaint registration, and bill generation. Your <strong>meter number</strong> is a hardware serial number physically engraved or printed on your physical gas meter, used primarily by technicians to identify and service specific meters in the field.</p>

          <p>When you call SNGPL helpline 1199 to report a billing issue, they ask for your consumer number to pull up your account. When a SNGPL technician visits to inspect your meter, they reference the meter number on the hardware. For all digital and online operations — bill checking websites, mobile apps, JazzCash, Easypaisa — always use your consumer number. The meter number will not work in bill payment or online portals.</p>

          <h3>How to Recover a Lost SNGPL Consumer Number</h3>
          <p><strong>Method 1 — Call SNGPL Helpline 1199:</strong> The fastest recovery method is calling SNGPL's 24/7 helpline on 1199. Explain that you need to recover your consumer number and provide your full name as registered on the account, your installation address with complete details (house number, street, area, city), and your CNIC number. The customer service representative will verify your identity against their records and provide your consumer number over the phone. This method works anytime, including evenings and weekends.</p>

          <p><strong>Method 2 — Visit Your Nearest SNGPL Service Delivery Center (SDC):</strong> Every major city in SNGPL's service territory has one or more Service Delivery Centers. Bring your original CNIC and any ownership documents (house ownership papers, tenancy agreement, or utility bills showing the address). The SDC staff will look up your account by address and CNIC and provide your consumer number. They can also print your latest bill at the counter if needed.</p>

          <p><strong>Method 3 — Check Old Emails:</strong> If you signed up for SNGPL's e-billing service at any point, search your email inbox for messages from SNGPL. Email subjects containing "gas bill," "SNGPL bill," or "statement" will contain your consumer number in the attachment or body. Even a single old email confirmation from a JazzCash or bank payment will show your consumer number in the transaction details.</p>

          <p><strong>Method 4 — Check Existing Payment App History:</strong> If you have previously paid your SNGPL bill through Easypaisa, JazzCash, or your bank's mobile app, open the transaction history in that app and find an old SNGPL payment. The transaction record will show the consumer number that was used for that payment. In Easypaisa, go to Transaction History → find the SNGPL payment → view receipt details. In JazzCash, go to Transaction History → Gas Bill payment → view full receipt.</p>

          <p><strong>Method 5 — Ask Your SNGPL Meter Reader:</strong> SNGPL meter readers visit your premises monthly to record consumption. If you are present during the monthly reading, ask the meter reader directly. They carry handheld devices that display consumer information and can show you your consumer number while on-site. Meter readers can also verify your current meter reading and note any billing discrepancies for their supervisor.</p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 2 — DUPLICATE BILL
            ═══════════════════════════════════════════════════════════ */}
        <section id="duplicate-bill" className="mb-16">
          <h2>How to Download SNGPL Duplicate Bill — All 5 Methods</h2>

          <p>A duplicate bill is an official reprint of your SNGPL monthly gas bill. It contains identical information to the original printed bill that SNGPL dispatches by post — including the current billing period, your consumption in Hundred Cubic Meters (HHM), the full charge breakdown (gas charges, GIDC, GST, surcharges), the total amount due, and the payment due date. A duplicate bill is equally valid for making payments at banks, ATMs, Easypaisa, JazzCash, franchises, and SNGPL offices. Banks and financial institutions also accept duplicate bills as proof of address for account opening, loan applications, CNIC renewal verification, and visa documentation purposes.</p>

          <p>There are many legitimate reasons why consumers need duplicate bills. Pakistan's postal system occasionally delivers bills late or misdelivers them to wrong addresses, especially in densely populated urban areas and newly developed housing societies. Bills can be lost, damaged by rain or mishandling, or accidentally discarded. Tenants moving into a new property may need historical bills going back several months. Landlords managing multiple properties need copies for record-keeping. Government employees and professionals need utility bills for their official records. For all these situations, SNGPL provides multiple free channels to obtain a duplicate bill instantly, seven days a week, 24 hours a day through its digital services.</p>

          <h3>Method 1: SNGPL Official Web Portal</h3>
          <p>The SNGPL official bill checking portal is the primary digital channel for viewing and downloading duplicate bills. It is accessible from any internet-connected device — desktop computer, laptop, smartphone, or tablet.</p>
          <ol>
            <li><strong>Open your web browser</strong> and navigate to the official SNGPL bill portal. SNGPL maintains its consumer portal at billchecker.sngpl.com.pk. Ensure you are on the official domain and not a lookalike or third-party site. The official URL contains "sngpl.com.pk" in the domain.</li>
            <li><strong>Locate the search field</strong> on the homepage. It is prominently displayed and labeled "Enter Consumer Number" or similar. The field accepts numeric input only.</li>
            <li><strong>Enter your consumer number exactly as it appears on your bill.</strong> Do not add spaces, hyphens, or leading zeros that are not part of your actual consumer number. If your number is 12 digits, enter all 12 digits without modification.</li>
            <li><strong>Click the search button</strong> (labeled "Get Bill," "Search," or represented by a magnifying glass icon). The system will query SNGPL's billing database and return your latest bill information within seconds.</li>
            <li><strong>View the bill details on-screen.</strong> The results page shows your current month's bill including consumption, charges, and amount due. Look for a "Download PDF," "Print Bill," or "Download Duplicate" button on the results page. Click it to download a PDF version of your full bill.</li>
          </ol>
          <p>The downloaded PDF is a complete, print-ready duplicate bill with all the same fields as the posted original. You can save it to your device, send it via WhatsApp or email, or print it at a nearby print shop. Historical bills for previous months are also usually accessible through the portal by selecting a past billing period from a dropdown menu or date selector on the results page.</p>

          <h3>Method 2: SNGPL Consumer Mobile App</h3>
          <p>SNGPL provides an official mobile application called "SNGPL Consumer App" available on both the Google Play Store for Android devices and the Apple App Store for iPhone and iPad. The app provides a more personalized experience than the web portal and allows consumers to manage multiple connections from a single account.</p>
          <p>Download the official SNGPL Consumer App from your device's app store — search for "SNGPL" and look for the app from the verified developer "Sui Northern Gas Pipelines Limited." After installing, register using your mobile number and link your consumer number(s) to your account. Once registered, open the app and tap "My Bills" or "Bill History" from the main navigation. Your current and past bills are listed here. Tap any billing period to view the full bill, then use the Share or Download button to save the bill as a PDF or share it directly to WhatsApp, email, or other apps. The SNGPL mobile app also supports payment initiation, complaint registration, and service request submission — making it the most comprehensive consumer self-service tool available.</p>

          <h3>Method 3: WhatsApp Bill Service</h3>
          <p>SNGPL operates an official WhatsApp Business channel through which consumers can retrieve their bill information without opening a browser or app. This service is particularly useful for consumers who have limited mobile data or prefer the familiarity of WhatsApp over dedicated apps. Save SNGPL's official WhatsApp number in your contacts (verify the number on SNGPL's official website at sngpl.com.pk, as the contact number is updated periodically). Open WhatsApp and start a conversation with the SNGPL WhatsApp Business contact. Send your 10-to-13-digit consumer number as a plain text message. The SNGPL automated system processes your message and responds within seconds with your latest bill summary, including the current amount due, due date, and consumption. For a PDF bill download, the automated reply typically includes a download link or instructions to access the full bill through the web portal. WhatsApp service is free of charge (standard data rates apply) and available 24 hours a day.</p>

          <h3>Method 4: SMS Service</h3>
          <p>For consumers without smartphones or reliable internet connectivity, SNGPL provides an SMS-based bill inquiry service. Compose a new SMS message containing only your consumer number (no additional text needed) and send it to SNGPL's designated SMS short code (check sngpl.com.pk for the current short code as it is updated periodically). You will receive an SMS reply within a few minutes containing your bill summary — the billing month, consumption in HHM, and total amount due including the payment due date. Note that the SMS service provides text-only summary information and does not deliver a full PDF bill. It is suitable for quickly confirming your current bill amount before making a payment through a bank or payment app, but for a complete printable bill, use the web portal or mobile app.</p>

          <h3>Method 5: Visit SNGPL Service Delivery Center (SDC)</h3>
          <p>If you prefer in-person service or do not have reliable internet access, you can obtain a printed duplicate bill by visiting any SNGPL Service Delivery Center (SDC). SDCs are located in every major city and district served by SNGPL. Bring your CNIC (original or photocopy) and your consumer number if you know it (though the SDC can look it up by address if you do not). Approach the customer service counter and request a duplicate bill. The staff will pull up your account, print your current bill on the spot, and stamp it as an official duplicate if required for formal documentation purposes. SDC operating hours are typically 9:00 AM to 5:00 PM on working days (Monday through Saturday, excluding public holidays). No fee is charged for duplicate bill printing at SDCs.</p>

          <h3>Why Postal Bills Don't Always Arrive</h3>
          <p>SNGPL dispatches millions of bills via postal service each month, but delivery reliability varies significantly by location. In major cities, bills often arrive 10–14 days before the due date. In peri-urban and rural areas, delivery can be erratic. Common reasons for non-delivery include: incorrect or incomplete address on the account, building renaming or renumbering in developing housing societies, postal sorting errors in high-volume areas, meter-reader-delivered bills being placed under doors and lost in communal buildings, and occasional postal strikes or service interruptions. Regardless of whether your postal bill arrives, payment remains due on the printed due date — SNGPL does not grant extensions for non-receipt of posted bills. Using the digital channels above to check and download your bill proactively each month is the most reliable way to ensure you never miss a payment deadline.</p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 3 — PAYMENT
            ═══════════════════════════════════════════════════════════ */}
        <section id="payment" className="mb-16">
          <h2>How to Pay Your SNGPL Gas Bill — 7 Complete Methods</h2>

          <p>SNGPL accepts gas bill payments through a wide range of channels to accommodate consumers across Pakistan regardless of their access to banking services, internet connectivity, or geographic location. Payments made through any official channel — whether a bank app, an ATM, Easypaisa, JazzCash, or a franchise counter — are reconciled to your account within 24 to 48 hours. Your bill remains outstanding until confirmed in SNGPL's system, so always keep your payment receipt or confirmation screenshot as proof until the portal shows the updated balance.</p>

          <h3>Method 1: Easypaisa — Complete Step-by-Step Guide</h3>
          <p>Easypaisa is one of Pakistan's most widely used mobile financial services platforms, operated by Telenor Pakistan. With over 50 million registered wallets, it is particularly popular for utility bill payments due to its simplicity and near-instant confirmation. You do not need a smartphone to use Easypaisa — a basic feature phone can access the service via USSD code *786#.</p>
          <ol>
            <li>Open the Easypaisa app on your smartphone. If you don't have a smartphone, dial *786# from your Telenor SIM and follow the menu prompts.</li>
            <li>Tap <strong>"Bill Payments"</strong> from the main menu dashboard.</li>
            <li>Select <strong>"Utility Bills"</strong> from the bill category list.</li>
            <li>Choose <strong>"Gas"</strong> as the utility type, then select <strong>"SNGPL"</strong> from the provider list.</li>
            <li>Enter your <strong>consumer number</strong> exactly as shown on your bill (10-13 digits, no spaces).</li>
            <li>The system will display your current bill amount. <strong>Verify the amount and due date.</strong> If the amount shown does not match your physical bill, do not proceed — contact SNGPL helpline 1199 first.</li>
            <li>Confirm the payment amount and tap <strong>"Pay."</strong></li>
            <li>Enter your <strong>Easypaisa 4-digit PIN</strong> to authorize the transaction.</li>
            <li>An SMS confirmation will arrive immediately. <strong>Screenshot or note the transaction ID</strong> for your records.</li>
          </ol>
          <p>Easypaisa charges no fee for SNGPL bill payments when paying from your Easypaisa wallet. Standard mobile data rates apply for app usage. Payment typically reflects in SNGPL's system within 24 hours, sometimes sooner.</p>

          <h3>Method 2: JazzCash — Complete Step-by-Step Guide</h3>
          <p>JazzCash is Mobilink/Jazz's mobile wallet service and is equally popular for utility bill payments. Like Easypaisa, it supports both smartphone app payments and USSD-based payments for feature phone users via *786#.</p>
          <ol>
            <li>Open the JazzCash app on your smartphone, or dial <strong>*786#</strong> from your Jazz/Warid SIM.</li>
            <li>Tap <strong>"Pay Bills"</strong> from the home screen.</li>
            <li>Select <strong>"Gas Bills"</strong> from the categories.</li>
            <li>Choose <strong>"SNGPL"</strong> from the gas company list.</li>
            <li>Type your <strong>consumer number</strong> in the field provided.</li>
            <li>The current bill amount due will appear. Verify it matches your bill.</li>
            <li>Tap <strong>"Proceed"</strong> and then enter your <strong>JazzCash MPIN</strong> (5-digit PIN).</li>
            <li>Review the final confirmation screen and tap <strong>"Confirm."</strong></li>
            <li>Save the SMS receipt you receive — it contains your transaction ID and payment reference.</li>
          </ol>

          <h3>Method 3: Online Banking — HBL, UBL, MCB, Meezan, Allied Bank</h3>
          <p>All major Pakistani commercial banks support SNGPL bill payment through their internet banking portals and official mobile banking applications. This is the preferred method for consumers who maintain bank accounts and want detailed digital records of all utility payments.</p>
          <p><strong>HBL Pay / HBL Mobile:</strong> Log in to HBL Mobile app → tap "Payments" → select "Utility Payments" → choose "Gas" → select "SNGPL" → enter your consumer number → verify bill → tap "Pay Now" → confirm with your transaction PIN or biometric. HBL payment receipts include a unique reference number and timestamp.</p>
          <p><strong>UBL Digital / UBL App:</strong> Open UBL App → "Pay Bills" → "Add Biller" (first time) → search "SNGPL" → enter consumer number → save → pay from your saved billers list in future visits. UBL allows scheduling recurring monthly payments so your SNGPL bill is paid automatically on a set date each month — useful for avoiding missed deadlines.</p>
          <p><strong>MCB Mobile:</strong> MCB Mobile → "Pay Bills" → "Utilities" → "Gas" → "SNGPL" → enter consumer number → pay. MCB MCB provides detailed e-receipts that can be downloaded as PDF from the app for record-keeping.</p>
          <p><strong>Meezan Bank:</strong> Meezan Mobile → "Bill Payment" → "Gas" → "SNGPL" → consumer number → verify → pay. Meezan processes instantly with same-day SNGPL reconciliation in most cases.</p>
          <p><strong>Other Banks:</strong> Allied Bank, Bank Alfalah, Habib Metropolitan, Standard Chartered, Faysal Bank, and virtually all Pakistan commercial banks support SNGPL bill payment through similar navigation paths within their apps. If you cannot find "SNGPL" under gas bills, look under "Utility Bills" → "Gas" and search for "Sui Northern."</p>

          <h3>Method 4: ATM Payment</h3>
          <p>ATMs of any major bank that supports SNGPL as a billers can process your gas bill payment. This method is useful for consumers who prefer physical transaction confirmation or who do not have access to mobile banking apps.</p>
          <ol>
            <li>Insert your debit or ATM card at any ATM of a bank that supports SNGPL bill payments (HBL, UBL, MCB, Allied Bank, etc.).</li>
            <li>Enter your <strong>4-digit PIN</strong> and select your language preference.</li>
            <li>From the main menu, choose <strong>"Other Services"</strong> or <strong>"Utility Bills"</strong> (terminology varies by bank).</li>
            <li>Select <strong>"Bill Payment"</strong> → <strong>"Gas"</strong> → <strong>"SNGPL."</strong></li>
            <li>Enter your <strong>consumer number</strong> using the ATM keypad.</li>
            <li>The screen will display your bill amount. Review it carefully, then select <strong>"Confirm Payment."</strong></li>
            <li>The amount is debited from your linked bank account. The ATM prints a <strong>payment receipt</strong> — keep this slip until the payment reflects on the SNGPL portal.</li>
          </ol>

          <h3>Method 5: SNGPL Franchise Outlets</h3>
          <p>SNGPL has authorized franchise networks across its service territory where consumers can pay their gas bill in person with cash. Franchise outlets are typically located in commercial areas, near markets, and in residential neighborhoods for convenient access. Visit the SNGPL franchise nearest to you, present your gas bill (or just state your consumer number), hand over the cash equal to the bill amount, and receive a stamped payment receipt. Franchise payment reflects in the SNGPL system within 24 to 48 hours. Keep your receipt until the portal confirms the payment. Franchise outlet locations are available on the SNGPL official website under the "Payment Channels" or "Our Offices" section.</p>

          <h3>Method 6: Bank Branch Counter (Over-the-Counter)</h3>
          <p>All major scheduled banks in Pakistan accept SNGPL bill payments at their branch counters. Take your original bill or a duplicate downloaded from the SNGPL portal to any bank branch. Approach the utility payment counter, fill in the bank's bill payment slip with your consumer number and amount, and hand over cash or a cheque. The bank teller will process the payment and stamp your bill as proof of payment. Always request and keep the bank-stamped copy of your payment slip. Over-the-counter bank payments are processed in batch at end of day, so they may take 48-72 hours to reflect in SNGPL's system — slightly longer than digital methods.</p>

          <h3>Method 7: 1BILL / Pakistan Revenue Automation Ltd (PRAL)</h3>
          <p>Pakistan's unified bill payment infrastructure (1BILL / PRAL) means that SNGPL bills can also be paid through any 1BILL-enabled payment terminal, Point of Sale (POS) device, or participating fintech app. Platforms like NayaPay, SadaPay, and various e-wallets support utility bill payments through the 1BILL infrastructure. If your preferred app is not mentioned above, check under "Utility Payments" → "Gas" → search for "SNGPL" or "Sui Northern Gas" — most modern Pakistani fintech apps support it. The consumer experience is identical across all of them: enter consumer number, verify bill amount, confirm payment, save receipt.</p>

          <h3>Critical Payment Tips</h3>
          <p>Always pay on or before the due date printed on your bill. SNGPL applies a late payment surcharge for payments received after the due date — typically 10% of the overdue amount. If you miss the due date, pay immediately rather than waiting for the next cycle, as consecutive late payments can trigger a disconnection notice. Always verify the bill amount on the payment screen before confirming — if the amount shown is significantly different from what you expected, call SNGPL 1199 before paying, as you may be paying an estimated bill that will require later adjustment. Save every payment receipt digitally for at least 12 months in case of reconciliation disputes.</p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 4 — TROUBLESHOOTING
            ═══════════════════════════════════════════════════════════ */}
        <section id="troubleshoot" className="mb-16">
          <h2>SNGPL Troubleshooting Guide — 8 Common Issues Resolved</h2>

          <p>Even with Pakistan's best-managed utility network, SNGPL consumers occasionally face billing problems, portal errors, payment reconciliation delays, and service disruptions. Most issues can be resolved quickly through the right channel — knowing which channel to use and what information to have ready is the key to a fast resolution. This guide covers the eight most common problems reported by SNGPL consumers and the exact steps to resolve each one.</p>

          <h3>Issue 1: Wrong or Unreasonably High Bill Amount</h3>
          <p>An unexpected spike in your gas bill is one of the most common consumer complaints. Before calling SNGPL, do a quick self-check: verify that the units consumed shown on your bill (in HHM — Hundred Cubic Meters) are reasonable for your household. Your meter shows a reading in cubic meters. Subtract last month's reading from this month's reading to get your consumption in cubic meters, then divide by 100 to get HHM. Multiply by the applicable slab rate. If your calculated figure does not match the bill, one of three things happened: SNGPL used an estimated reading instead of actual, your meter was misread, or there is a tariff calculation error.</p>
          <p>To dispute a wrong bill, call SNGPL helpline <strong>1199</strong> and raise a meter inspection request. Alternatively, submit an online complaint at <strong>selfservice.sngpl.com.pk</strong> under "New Complaint" → "Billing Dispute" → "Meter Reading Issue." A SNGPL technician will visit within 3–7 working days, verify your meter reading, and issue a corrected bill if the original was wrong. You are not required to pay a disputed amount while a formal complaint is active — but document your complaint reference number carefully.</p>

          <h3>Issue 2: Payment Made but Not Reflected in SNGPL System</h3>
          <p>After making a payment, allow 24 to 48 hours for it to reflect in SNGPL's billing system. Some channels like bank counter payments can take up to 72 hours. If your payment still shows as outstanding after 72 hours, follow these steps. First, confirm with your payment channel (bank, Easypaisa, JazzCash) that the transaction was successfully processed — check your account balance deduction and the transaction SMS or receipt. If your bank confirms the payment was made but SNGPL's portal still shows unpaid, call <strong>1199</strong> and provide your consumer number, the payment date and amount, and the transaction reference number from your receipt. SNGPL's reconciliation team can manually match the payment to your account once you provide these details. This process typically resolves within 2–3 working days of lodging the call.</p>

          <h3>Issue 3: Disconnection Notice Received</h3>
          <p>SNGPL issues disconnection notices when a bill remains unpaid past the due date or when arrears accumulate over multiple months. A notice does not mean your gas is immediately disconnected — it is a final warning before disconnection. Upon receiving a disconnection notice, pay the entire outstanding amount (current bill plus any arrears) immediately through any payment channel. Then call <strong>1199</strong> with your consumer number and the payment transaction ID. SNGPL may still honor the payment and cancel the disconnection order if payment is confirmed before the field team reaches your premises. If your gas has already been disconnected, pay first and then call 1199 to lodge a reconnection request. Reconnection typically happens within 2–3 working days and a reconnection fee of Rs. 500–1,000 (subject to current SNGPL tariff schedule) is charged.</p>

          <h3>Issue 4: Estimated vs. Actual Meter Reading</h3>
          <p>When SNGPL's meter reader cannot access your premises (locked gate, absent household member, inaccessible meter location), SNGPL estimates your consumption based on your historical average. Estimated readings are marked with an "E" on your bill. While the next month's actual reading will automatically adjust the estimate, you may receive a very high bill in the adjustment month if your actual consumption was lower than the estimate. To avoid estimated readings, ensure your meter is easily accessible to the meter reader, or register your meter reading online at the SNGPL self-service portal under "Meter Reading" → "Submit Self-Reading" before the monthly cutoff date.</p>

          <h3>Issue 5: SNGPL Portal or Website Not Working</h3>
          <p>The SNGPL bill checking portal occasionally experiences downtime during peak usage periods (typically the last few days before due dates when millions of consumers try to check bills simultaneously) or during scheduled maintenance. If you receive an error message when trying to check your bill, try again after 30–60 minutes. You can also use the SNGPL mobile app as an alternative. If neither is working, call 1199 and a customer service representative can verbally confirm your bill amount over the phone. Alternatively, WhatsApp your consumer number to SNGPL's official WhatsApp business number for a text-format bill summary.</p>

          <h3>Issue 6: Low Gas Pressure or No Gas Supply</h3>
          <p>Loss of gas pressure or complete supply interruption can be caused by: main pipeline maintenance in your area, a fault in the local distribution network, accidental damage to a supply line, seasonal supply constraints (winter peak demand), or disconnection for non-payment on your specific account. First check whether neighbors on the same street also have the issue — if it is area-wide, it is a network problem rather than a specific account issue. For network supply issues, call SNGPL emergency helpline <strong>1199</strong> or the SNGPL local SDC. For suspected gas leaks or pipeline damage, call the SNGPL emergency number immediately and do not use any electrical switches or open flames near the suspected leak. SNGPL has emergency teams on standby 24/7 for gas leak emergencies.</p>

          <h3>Issue 7: Consumer Number Not Recognized on Portal</h3>
          <p>If the SNGPL portal returns "consumer not found" or "invalid consumer number" when you enter your number, check for common data entry mistakes: extra spaces before or after the number, incorrect digit count, mixing up zeros and the letter O (the number field only accepts numeric digits), or using an old account number from a connection that was closed or transferred. If you are certain the number is correct, try using an alternative browser or device — sometimes browser extensions or autofill features corrupt the input. If the problem persists, call 1199 to verify that the consumer number is still active and correctly formatted in SNGPL's system.</p>

          <h3>Issue 8: How to Register an SNGPL Complaint</h3>
          <p>For all billing disputes, service quality issues, connection problems, or administrative requests, SNGPL's official complaint channels ensure your issue is formally documented and tracked. Online complaint submission at <strong>selfservice.sngpl.com.pk</strong> is the recommended method as it provides a complaint reference number and email confirmation. Call 1199 to lodge a verbal complaint — the representative will document it and provide a reference number. You can also visit your nearest SDC and submit a written complaint. SNGPL is also regulated by OGRA (Oil and Gas Regulatory Authority) — if your complaint is not resolved to your satisfaction at the company level, you can escalate to OGRA's Consumer Complaint Portal at ogra.org.pk, which has the authority to investigate and direct SNGPL to resolve genuine consumer grievances.</p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 5 — SNGPL GLOSSARY
            ═══════════════════════════════════════════════════════════ */}
        <section id="glossary" className="mb-16">
          <h2>SNGPL Glossary — Key Terms Every Consumer Should Know</h2>

          <p>Understanding the terminology on your gas bill and in SNGPL communications helps you verify your charges, understand your rights, and resolve issues efficiently. Here are the most important terms explained in plain language.</p>

          <h3>Billing Terminology</h3>
          <p><strong>HHM (Hundred Cubic Meters):</strong> The unit in which SNGPL measures your gas consumption for billing purposes. Your meter shows the reading in cubic meters (m³). SNGPL divides this by 100 to get HHM for applying the slab tariff. For example, if your meter advanced from 12,500 to 12,580 m³ in a month, your consumption was 80 m³ = 0.80 HHM.</p>
          <p><strong>Slab Tariff:</strong> SNGPL charges gas at different rates depending on how much you consume in a month. The tariff is divided into six progressive slabs. The first 0.25 HHM (25 m³) is billed at a flat Rs. 200 per month. Consumption from 0.26 to 1.00 HHM is billed at Rs. 130/HHM. The third slab (1.01–2.00 HHM) costs Rs. 150/HHM. The fourth slab (2.01–3.00 HHM) costs Rs. 170/HHM. The fifth slab (3.01–4.00 HHM) costs Rs. 200/HHM. Any consumption above 4.00 HHM is charged at Rs. 250/HHM. These rates are set by OGRA and are subject to periodic revision.</p>
          <p><strong>GIDC (Gas Infrastructure Development Cess):</strong> A federal government levy charged on top of gas tariff rates. Currently 10% of the base gas charges. GIDC proceeds are designated for funding gas infrastructure development projects including new pipeline networks and compression stations.</p>
          <p><strong>GST (General Sales Tax):</strong> Federal sales tax applied on gas utility bills at the rate of 17% on the combined gas charges plus GIDC amount. GST is a statutory charge that SNGPL is legally required to collect and remit to the Federal Board of Revenue (FBR).</p>
          <p><strong>Fixed Charges:</strong> A minimum monthly charge that applies regardless of how much gas you consume. This covers SNGPL's cost of maintaining your connection, meter reading, and administrative services. The minimum charge structure varies slightly by connection category (Domestic / Commercial / Industrial).</p>
          <p><strong>Meter Rent:</strong> If you are leasing your gas meter from SNGPL (rather than owning it), a monthly meter rent may appear on your bill. Most residential consumers in urban areas own their meters following SNGPL's transition to consumer-owned meters for new connections.</p>
          <p><strong>Arrears:</strong> Any unpaid amount from previous billing periods that has been carried forward to your current bill. If your bill shows an "Arrears" line item, it means there are one or more previous months' bills (or partial payments) that have not been settled. SNGPL accrues surcharges on outstanding arrears.</p>
          <p><strong>Due Date:</strong> The final date by which payment must reach SNGPL's system without a late payment surcharge being applied. The due date is printed prominently on your bill. Payments made at ATMs, banks, and digital wallets on or before this date are considered timely.</p>
          <p><strong>Estimated Reading (E):</strong> When SNGPL cannot obtain an actual meter reading — due to inaccessible premises, absent consumer, or other operational reasons — the system generates an estimated reading based on your historical consumption pattern. Estimated bills are marked with "E" beside the reading. The following month's actual reading will automatically reconcile the estimate.</p>
          <p><strong>SDC (Service Delivery Center):</strong> SNGPL's branded customer service offices located in major towns and cities throughout the service territory. SDCs handle new connections, bill payments, complaint registration, consumer record updates (name change, address change), meter inspections, and duplicate bill printing.</p>
          <p><strong>OGRA (Oil and Gas Regulatory Authority):</strong> The federal regulatory body that oversees gas utility companies including SNGPL. OGRA sets and approves gas tariff rates, monitors service quality, and adjudicates consumer disputes. Consumers can escalate unresolved complaints to OGRA's Consumer Complaint Portal.</p>
        </section>

        {/* ═══════════════════════════════════════════════════════════
            SECTION 6 — REGULATORY CONTEXT
            ═══════════════════════════════════════════════════════════ */}
        <section id="regulatory" className="mb-16">
          <h2>SNGPL and OGRA — Regulatory Context for Consumers</h2>

          <p>Sui Northern Gas Pipelines Limited (SNGPL) is a public sector utility company incorporated under the Companies Act of Pakistan. It is primarily owned by the Government of Pakistan with minority shareholding listed on the Pakistan Stock Exchange. SNGPL holds a government-granted monopoly franchise for natural gas distribution in its designated territory covering Punjab (excluding certain southern districts), Khyber Pakhtunkhwa, Azad Jammu and Kashmir, and the Islamabad Capital Territory. This means there is no competing gas distribution company in SNGPL's service area — consumers in its territory must obtain natural gas service from SNGPL or use alternative energy sources.</p>

          <p>Because of its monopoly status, SNGPL's tariff rates, service quality standards, and consumer rights framework are regulated by OGRA — the Oil and Gas Regulatory Authority, established under the OGRA Ordinance 2002. OGRA's mandate includes approving SNGPL's annual tariff petitions, setting minimum service quality benchmarks, investigating consumer complaints that cannot be resolved at the company level, and ensuring that SNGPL does not abuse its monopoly position through unreasonable pricing or service denial.</p>

          <p>For SNGPL consumers, the practical implications of OGRA regulation are significant. Tariff rates are not arbitrary — they must be justified to and approved by OGRA through a formal tariff determination process that includes public notices and consumer representation opportunities. When SNGPL proposes a tariff increase, OGRA holds public hearings and invites written comments from consumers and consumer advocacy groups before making a determination. This process is why tariff changes are announced with advance notice rather than changing without warning on your bill.</p>

          <p>If you have a complaint against SNGPL that the company has not resolved to your satisfaction through its internal channels (helpline 1199, SDC visit, online complaint portal), you have the right to escalate to OGRA's Consumer Complaint Portal at ogra.org.pk. OGRA has the authority to investigate your complaint, direct SNGPL to take corrective action, and in cases of verified overcharging, order refunds. Consumer complaints to OGRA must be submitted after first attempting resolution with SNGPL directly — OGRA acts as the appellate authority rather than the first point of contact.</p>
        </section>

      </div>

      {/* ── Internal Links ────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="bg-gray-50 rounded-2xl p-6 grid sm:grid-cols-3 gap-4 text-center border border-gray-200">
          {[
            { href: '/', label: '🔍 Check Bill Now', desc: 'Official portal redirect' },
            { href: '/calculator', label: '🧮 Bill Calculator', desc: 'Estimate gas charges' },
            { href: '/bill-check', label: '📖 Full Bill Guide', desc: 'Comprehensive billing guide' },
          ].map(l => (
            <Link
              key={l.href}
              href={l.href}
              className="block p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all no-underline group"
            >
              <div className="font-bold text-blue-700 group-hover:text-blue-800">{l.label}</div>
              <div className="text-xs text-gray-500 mt-1">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
