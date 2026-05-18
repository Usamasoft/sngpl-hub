import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  CATEGORIES,
  CITIES,
  SLUG_TYPES,
  getCategoryLabel,
  getTypeLabel,
  type Category,
} from '../../../lib/seo-data';

export async function generateStaticParams() {
  return CATEGORIES.map(c => ({ category: c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) return {};
  const label = getCategoryLabel(category as Category);
  return {
    title: `SNGPL ${label} — All Cities Comprehensive Guide 2025`,
    description: `Complete SNGPL ${label.toLowerCase()} guides for all cities in Punjab, KPK, and Islamabad. Detailed city-specific information, step-by-step instructions, and expert tips for every consumer.`,
    alternates: { canonical: `https://sngplbillcheck.pk/sngpl/${category}` },
  };
}

// ─── Per-category content maps ────────────────────────────────────────────────

const categoryIntros: Record<Category, { headline: string; lead: string; body: string[] }> = {
  'bill-check': {
    headline: 'SNGPL Bill Check — Everything You Need to Know',
    lead: 'Checking your SNGPL gas bill online is one of the most useful digital services available to Pakistani consumers. Whether you want to confirm your current bill amount before paying, dispute an unusually high figure, track your consumption history, or simply verify that a payment was correctly processed — the ability to check your bill in real time through SNGPL\'s digital channels gives you complete transparency over your gas account.',
    body: [
      'SNGPL serves more than 7 million consumers across Punjab, Khyber Pakhtunkhwa, Azad Kashmir, and the Islamabad Capital Territory. Each of these consumers receives a monthly bill that reflects their gas consumption in Hundred Cubic Meters (HHM) — the standard unit SNGPL uses for billing. Consumption is recorded by SNGPL\'s army of meter readers who visit each household monthly, compare the current meter reading against the previous reading, and submit the difference to the central billing system. That system then applies OGRA-approved progressive tariff rates across six consumption slabs to calculate the gas charge component of your bill.',
      'Beyond the base gas charge, your bill includes several other mandatory components. The Gas Infrastructure Development Cess (GIDC) is a federal government levy charged at 10% of base gas charges to fund gas infrastructure expansion. General Sales Tax (GST) of 17% is applied on the combined gas charges plus GIDC. Fixed monthly charges cover connection maintenance and meter reading costs regardless of your consumption level. If you have any outstanding arrears from previous billing periods, these are also carried forward and shown separately on the current bill.',
      'The bill checking facility is available 24 hours a day, seven days a week through multiple channels: the official SNGPL bill portal (sngpl.com.pk), the SNGPL Consumer mobile app (available on Google Play and App Store), SNGPL\'s WhatsApp Business service, and SMS inquiry. Each channel provides your current bill amount, due date, and consumption data in real time. For the most complete view — including downloadable PDF bills and historical bill archive — the web portal and mobile app are recommended.',
      'Different cities in SNGPL\'s service territory have different consumption patterns, billing cycles, and average bill amounts. Lahore, Faisalabad, and Rawalpindi as major urban centers have the highest overall consumption volumes. Colder cities in northern Punjab and KPK — Rawalpindi, Islamabad, Abbottabad, Mansehra, Swat — see the highest per-household consumption during winter months (November through February) when gas heating demand peaks. Southern Punjab cities like Multan, Bahawalpur, and Rahim Yar Khan see relatively lower winter consumption but higher summer usage for cooling and cooking. Understanding these patterns helps you anticipate and plan for your bill amounts throughout the year.',
      'If your bill check reveals an amount that seems significantly higher than your expected usage, do not panic. The most likely explanations are: an estimated reading was used in a previous month and the current month contains an adjustment, there was an OGRA-approved tariff rate revision, you have crossed into a higher consumption slab due to seasonal heating use, or (rarely) a meter reading error. Use this guide to understand your bill structure, calculate the expected amount yourself, and contact SNGPL through the appropriate channel if you find a genuine discrepancy.',
    ],
  },
  'consumer-number': {
    headline: 'SNGPL Consumer Number — The Complete Reference Guide',
    lead: 'Your SNGPL consumer number is the foundational identifier for your gas account. It is required for every SNGPL digital service — bill checking, online payment, duplicate bill download, complaint registration, service requests, and account management. This comprehensive guide explains everything about consumer numbers: what they are, how they work, where to find them, and how to recover them if lost.',
    body: [
      'When SNGPL establishes a new gas connection at any premises — whether residential, commercial, or industrial — it assigns a unique consumer number to that connection. This number is permanent and does not change over the lifetime of the connection, even if billing rates change, if SNGPL upgrades its systems, or if the physical meter is replaced. The consumer number is the link between your physical gas installation and SNGPL\'s administrative and billing systems.',
      'Consumer numbers in the SNGPL system range from 10 to 13 digits. The specific length depends on when the connection was established and which distribution circle administers it. Connections established before SNGPL\'s system digitization in the early 2000s may have 10-digit numbers, while more recently issued connections typically have 11 or 12 digit numbers. The exact format follows a structured encoding: the leading digits indicate the geographical region and distribution circle, while the trailing digits form a sequential account identifier unique within that circle.',
      'The consumer number is found on the top section of every SNGPL printed bill in a clearly labeled field. It is also displayed on your meter card — the rectangular card attached to or stored near your gas meter. Consumers who have registered on the SNGPL self-service portal or mobile app have their consumer numbers stored in their digital profile. Payment receipts from Easypaisa, JazzCash, bank transactions, and ATMs also reference the consumer number used for each payment, making these receipts secondary sources for number recovery.',
      'One of the most common sources of consumer confusion is the difference between a consumer number and a meter number. Your consumer number is a billing account identifier that lives in SNGPL\'s software systems. Your meter number is a hardware serial number physically stamped or printed on your gas meter. For all online services — bill checking, payments, portal registration, complaint filing — you must use your consumer number, not the meter number. SNGPL technicians use meter numbers when conducting on-site work, but all customer-facing digital services use the consumer number exclusively.',
      'Cities with higher urban density — Lahore, Faisalabad, Rawalpindi, Gujranwala — tend to have the highest concentration of consumer number inquiries because of frequent tenant turnover, new housing society developments, and large numbers of newly established connections. In these cities, the SNGPL SDCs process hundreds of consumer number recovery requests monthly. In smaller cities like Kasur, Narowal, or Khushab, the SDC staff knows most long-term consumers personally and can often locate account records quickly. KPK cities like Peshawar, Abbottabad, and Mardan have their own distribution circles with different prefix codes in the consumer number format compared to Punjab cities.',
      'Keeping your consumer number accessible — saved in your phone contacts, stored in your email records, or written in a household document folder — is one of the simplest ways to avoid gas service disruptions. When you cannot pay online because you don\'t know your consumer number, and your postal bill hasn\'t arrived yet, you risk missing the payment deadline and incurring a late payment surcharge. A 5-second task of noting down your consumer number can prevent these scenarios entirely.',
    ],
  },
  'duplicate-bill': {
    headline: 'SNGPL Duplicate Bill Download — Complete Multi-City Guide',
    lead: 'Obtaining a duplicate SNGPL gas bill is a straightforward process available through five official channels — web portal, mobile app, WhatsApp, SMS, and in-person at an SDC. A duplicate bill is legally equivalent to the original for payment purposes and is accepted by banks, government offices, and financial institutions as an official utility document. This guide provides complete instructions for every method, with city-specific details across SNGPL\'s service territory.',
    body: [
      'The need for a duplicate gas bill arises frequently across Pakistan. Postal delivery of original bills remains unreliable in many areas — bills get delivered to wrong addresses, damaged by monsoon rain, misplaced in common areas of apartment buildings, or simply lost in the mail. Tenants moving into a new property often need the previous tenant\'s bill history for CNIC verification. Landlords managing multiple properties need digital copies for their records. Employers require recent utility bills for employee address verification. Banks require utility bills for account opening, credit card applications, mortgage documentation, and other financial services. For all these needs, SNGPL\'s digital duplicate bill channels provide instant, free access to your official gas bill.',
      'The most widely used method is the official SNGPL web portal at sngpl.com.pk. This portal is accessible from any internet-connected browser without registration — simply enter your consumer number and your current bill (and historical bills) are displayed immediately. The portal is maintained by SNGPL\'s IT department and provides exact bill data from the central billing database, ensuring the duplicate you download is identical to the original that was generated for postal dispatch.',
      'The SNGPL Consumer mobile app provides a more feature-rich experience, allowing consumers to save multiple consumer numbers (useful for families managing multiple connections or landlords with several properties), view up to 12 months of bill history, submit meter readings, register complaints, and pay bills — all within a single application. The app is particularly useful for consumers who need bills regularly and want them organized in one place rather than re-visiting the web portal each month.',
      'In cities with high population density and active rental markets — Lahore, Faisalabad, Rawalpindi, Islamabad, Gujranwala — the demand for duplicate bills is highest. These cities also have the most SNGPL SDC locations for in-person bill retrieval. In smaller district towns like Narowal, Khushab, or Chakwal, there may be only one SDC, making the digital channels (web portal, mobile app, WhatsApp) even more important for consumers who cannot easily travel to the SDC during working hours.',
      'All SNGPL duplicate bills, whether downloaded from the web portal or the mobile app, are in PDF format and include the SNGPL official letterhead and all bill data: consumer name, address, consumer number, billing period, meter reading, consumption in HHM, full charge breakdown (gas charges, GIDC, GST, surcharges, arrears), total amount due, due date, and payment options barcode. Banks and government offices accept these digital PDFs as authentic utility bills. For formal submissions, you can print the PDF at any print shop — the printout is accepted the same as the original posted bill.',
      'SNGPL\'s WhatsApp bill service and SMS service provide quick bill summaries rather than full PDF bills, making them ideal for quickly checking the amount due before heading to a payment counter or ATM. For a full printable PDF, the web portal or mobile app is the appropriate channel. All digital bill retrieval is free of charge — SNGPL does not charge any fee for duplicate bills through its online channels.',
    ],
  },
  'payment': {
    headline: 'SNGPL Bill Payment — All Methods, All Cities, Complete Guide',
    lead: 'SNGPL provides one of the widest payment channel networks of any utility company in Pakistan. You can pay your gas bill through mobile wallets (Easypaisa, JazzCash), bank apps (HBL, UBL, MCB, Meezan, Allied Bank), ATMs, bank branches, SNGPL franchise outlets, internet banking portals, and emerging fintech platforms. This guide covers every method in detail for consumers across all cities in SNGPL\'s service territory.',
    body: [
      'The timely payment of your SNGPL gas bill is both a financial obligation and a practical necessity. Unlike some utility companies in Pakistan that tolerate extended payment delays, SNGPL enforces its payment deadlines with automated disconnection workflows. A bill unpaid after the due date accrues a late payment surcharge of 10% of the overdue amount. Consecutive months of non-payment trigger escalating actions: a first reminder, then a formal disconnection notice, then physical disconnection of your gas supply at the meter. Reconnection after disconnection requires paying all outstanding arrears plus a reconnection fee and can take 2–3 working days, leaving your household without gas in the interim.',
      'The expansion of digital payment channels over the past decade has dramatically simplified SNGPL bill payment for Pakistani consumers. Where once you had to physically visit a bank branch with a printed bill during working hours, today you can pay your gas bill in 30 seconds from your smartphone at 2 AM. Easypaisa and JazzCash together account for the majority of digital SNGPL payments — with their combined 100+ million registered users, these platforms have made utility payments accessible even to consumers in small towns and rural areas without bank accounts.',
      'For major city consumers — particularly in Lahore, Faisalabad, Rawalpindi, Islamabad, and Peshawar — bank mobile apps are the preferred payment method due to higher smartphone penetration and banking access. Residents of these cities typically have multiple payment options available and can choose whichever is most convenient. For consumers in smaller towns and rural areas — Bhakkar, Layyah, Karak, Pakpattan — Easypaisa via USSD code *786# (works on any mobile phone, not just smartphones) is often the most accessible payment method, making it the primary channel for rural gas bill payments.',
      'SNGPL franchise outlets serve as the cash payment alternative for consumers who prefer in-person transactions or do not have bank accounts or mobile wallets. Franchise locations are spread across urban and semi-urban areas in all SNGPL-served cities. They operate during extended hours compared to bank branches and accept cash payments without any surcharge. The payment reconciles to your account within 24 hours. SNGPL\'s official website lists franchise locations by city, allowing consumers to find the nearest outlet.',
      'ATM payments remain popular with bank account holders who prefer a physical transaction confirmation. Most major bank ATMs (1-Link network) support SNGPL bill payment under the utility bills menu. The ATM receipt serves as immediate payment proof. ATM payments are typically processed overnight in batch, so they reflect in SNGPL\'s system by the next morning. If your payment due date is today and it is past banking hours, paying by ATM is safe as long as the payment timestamp is before midnight of the due date.',
      'Advance payments are possible and actually encouraged by SNGPL for consumers who want to ensure there is never an outstanding balance. You can pay more than the current bill amount — the excess is credited to your account and applied automatically to future bills. This is particularly useful for households going on extended vacations or expatriates who want to ensure their Pakistan home connection is never disconnected in their absence. The credit balance is shown on subsequent bills under "Advance/Overpayment" and reduces the amount due accordingly.',
    ],
  },
  'troubleshooting': {
    headline: 'SNGPL Troubleshooting — Diagnose and Resolve Every Consumer Issue',
    lead: 'SNGPL consumer issues range from billing disputes and payment reconciliation problems to gas supply interruptions and connection transfer requests. This comprehensive troubleshooting guide covers every major category of SNGPL service problem with specific diagnostic steps, resolution pathways, and escalation options — organized by city to help you find the right local contacts and resources.',
    body: [
      'Troubleshooting SNGPL service issues is most effective when you approach it systematically. Different types of problems require different resolution channels, and using the wrong channel often results in delays and frustration. Billing disputes, for example, require the SNGPL complaint portal and potentially a meter inspection — calling a gas pressure emergency line will not help with a billing dispute. Conversely, a gas supply emergency requires the 24/7 emergency helpline, not an online complaint form that may not be reviewed until the next business day.',
      'Billing disputes — wrong amounts, estimated readings, unexplained surcharges — are the most common category of SNGPL consumer complaints. Each city has its own local SDC that can investigate billing issues specific to that area. For Lahore consumers, the main SDC in Gulberg handles the largest volume of billing complaints. For Faisalabad consumers, the Susan Road SDC is the primary location. Rawalpindi and Islamabad share an SDC network with the main office on Murree Road. Peshawar consumers use the Regional Office on University Road as their primary contact for complex billing issues. For all cities, the 1199 helpline provides the first point of contact, and the SNGPL online complaint portal provides the formal documentation channel.',
      'Payment not reflected in SNGPL\'s system is another frequent complaint, particularly around the due date when payment volumes spike and processing queues lengthen. The resolution process is consistent regardless of city: confirm the payment was debited from your account or wallet, collect the transaction reference number, and contact the payment channel\'s customer support to verify it was forwarded to SNGPL. Then call 1199 with this reference number. SNGPL\'s reconciliation team can trace the payment and manually apply it if it was received but not automatically matched to your consumer number. The average resolution time for payment trace issues is 2–3 working days.',
      'Gas supply interruptions have both city-specific and account-specific causes. Area-wide interruptions due to pipeline maintenance, gas load shedding schedules, or emergency repairs affect all consumers in a zone simultaneously. SNGPL announces planned maintenance through local newspapers, radio stations, and increasingly through its official social media channels. Islamabad and Rawalpindi consumers can follow SNGPL\'s Rawalpindi circle social media accounts; Lahore consumers follow the Lahore circle account; Peshawar consumers follow the Peshawar region account. These channels provide advance notice of planned outages and updates on emergency repairs.',
      'New connection applications, meter replacement requests, name/address change on account, and connection transfer between new and old owners are administrative troubleshooting categories that require in-person SDC visits with specific documentation. SNGPL\'s SDC network across all 44 served cities and districts provides these services. Processing times vary by city and service type. New connections in established areas typically take 2–4 weeks. Meter replacement for a faulty meter is typically completed within 5–7 working days of a verified inspection report. Name change and address change are administrative updates that take 3–5 working days after document submission. Connection transfer (change of ownership) can take 2–4 weeks depending on documentation completeness.',
      'For consumers who feel their complaint has not been adequately addressed by SNGPL\'s internal channels after a reasonable period, the escalation path leads to OGRA — the Oil and Gas Regulatory Authority. OGRA\'s consumer complaint portal at ogra.org.pk accepts complaints from SNGPL consumers who have first attempted resolution with SNGPL directly. OGRA has the authority to investigate, direct SNGPL to respond within specified timeframes, and in cases of verified overcharging or unjustified disconnection, order SNGPL to take corrective action including refunds. The OGRA escalation path is most appropriate for billing disputes involving significant amounts, persistent payment reconciliation failures, and cases where SNGPL has failed to restore connection after payment.',
    ],
  },
};

const categoryFaqs: Record<Category, { q: string; a: string }[]> = {
  'bill-check': [
    { q: 'How do I check my SNGPL bill online?', a: 'Go to sngpl.com.pk or use the SNGPL Consumer app. Enter your 10-13 digit consumer number and click Search. Your current bill, consumption, amount due, and due date will display immediately.' },
    { q: 'What information do I need to check my bill?', a: 'Your SNGPL consumer number — found on any previous bill, on your meter card, or retrievable via the 1199 helpline. You do not need a password, login, or CNIC to check your bill on the portal.' },
    { q: 'Can I check bills for previous months?', a: 'Yes. The SNGPL portal and mobile app allow you to view historical bills by selecting a past billing period. Up to 12 months of bill history is typically accessible.' },
    { q: 'Why does my bill show an estimated reading?', a: 'Estimated readings (marked "E") occur when the meter reader could not access your premises. The next month\'s actual reading will include an automatic adjustment. To avoid estimates, ensure meter access and consider submitting self-readings via the SNGPL portal.' },
    { q: 'My bill amount is much higher than last month — why?', a: 'Common reasons include: winter seasonal heating increase, crossing into a higher tariff slab, an estimated reading in the previous month being adjusted this month, or an OGRA-approved tariff revision. Check your HHM consumption figure to see if actual gas use increased.' },
    { q: 'How often does SNGPL issue bills?', a: 'SNGPL issues bills monthly. Your billing cycle is fixed — the same date range every month for your connection. Bills are dispatched by post approximately 20–25 days before the due date.' },
    { q: 'Is the SNGPL bill check portal free to use?', a: 'Yes, completely free. No registration is required and no fees are charged for checking your bill online.' },
    { q: 'Can I check my SNGPL bill via SMS?', a: 'Yes. Send your consumer number as an SMS to SNGPL\'s designated short code. You receive a text-format summary with amount due and due date — not a full PDF bill, but sufficient for confirming the amount before payment.' },
    { q: 'What is the SNGPL bill checking helpline?', a: 'Call 1199 — SNGPL\'s 24/7 customer helpline. A representative can verbally confirm your current bill amount and due date over the phone when online channels are unavailable.' },
    { q: 'Why is my bill not found on the portal?', a: 'Verify your consumer number for typos or extra spaces. If certain the number is correct, call 1199 to confirm the number is still active. Connections that have been closed or transferred may not return results on the portal.' },
  ],
  'consumer-number': [
    { q: 'Where is the consumer number on my SNGPL bill?', a: 'At the top of your printed bill, in a labeled field called "Consumer No.", "Cust. No.", or "Consumer Number" — typically in a box in the account header section.' },
    { q: 'How many digits is an SNGPL consumer number?', a: 'SNGPL consumer numbers are 10 to 13 digits long depending on when the connection was issued and which distribution circle it belongs to. All digits are numeric — no letters or hyphens.' },
    { q: 'Is consumer number the same as meter number?', a: 'No. Your consumer number is your billing account ID used for all online services. Your meter number is the hardware serial on your physical gas meter. For bill checking, payments, and complaints, always use the consumer number.' },
    { q: 'What if I have lost my consumer number?', a: 'Recovery options: call 1199 with your address and CNIC; check old bills, email receipts, or payment app history; visit your nearest SDC with your CNIC; or ask your monthly meter reader during their next visit.' },
    { q: 'Can I find my consumer number online without a bill?', a: 'You can retrieve it by calling 1199 or visiting an SDC with CNIC verification. If you previously paid via Easypaisa/JazzCash, check your payment history in those apps for the consumer number used.' },
    { q: 'What does each part of the consumer number mean?', a: 'Leading digits = region/zone code; middle digits = distribution circle code; trailing digits = unique sequential account number within that circle. For most online services, you don\'t need to decode the structure — just use the full number as-is.' },
    { q: 'Does my consumer number change if I move?', a: 'Your consumer number is linked to the connection address, not to you personally. If you move to a different address, you get a new consumer number for the new connection. Your old number stays with the old address.' },
    { q: 'Can I have more than one consumer number?', a: 'Yes, if you have gas connections at multiple addresses (e.g., home and office, or rental properties), each connection has its own unique consumer number.' },
    { q: 'Do I need to register to use my consumer number?', a: 'No registration is needed to check bills or pay using your consumer number on the SNGPL portal or payment apps. Registration on the SNGPL Consumer app is optional but enables bill history, saved consumer numbers, and complaint tracking.' },
    { q: 'Is it safe to share my consumer number?', a: 'Your consumer number can be shared with trusted parties who need to pay your bill on your behalf (e.g., family members). It does not give access to your personal account or allow anyone to change account settings. However, avoid sharing it publicly online to prevent spam.' },
  ],
  'duplicate-bill': [
    { q: 'What is an SNGPL duplicate bill?', a: 'A duplicate bill is an official reprint of your monthly gas bill with all the same information as the original — charges, due date, payment options. It is legally valid for payment at banks, ATMs, and apps.' },
    { q: 'Is a downloaded PDF bill accepted for payment?', a: 'Yes. PDF bills downloaded from the SNGPL portal or app are accepted everywhere the original printed bill is accepted — banks, ATMs, Easypaisa, JazzCash, and SNGPL franchise outlets.' },
    { q: 'Can I get the duplicate bill for free?', a: 'Yes. All digital channels — web portal, mobile app, WhatsApp, SMS — provide duplicate bills at no charge. In-person printing at SNGPL SDCs is also free.' },
    { q: 'How do I download the duplicate bill as PDF?', a: 'Visit sngpl.com.pk, enter your consumer number, view the bill, and click the Download/PDF button on the results page. The PDF downloads to your device automatically.' },
    { q: 'Can I get a duplicate bill for a previous month?', a: 'Yes. The SNGPL portal and app allow selection of past billing periods. You can retrieve and download bills for any month in the available archive (typically 12 months of history).' },
    { q: 'Is a duplicate bill accepted as address proof?', a: 'Yes. SNGPL bills — original or duplicate — are accepted as address proof for bank account opening, CNIC renewal, loan applications, and visa documentation in Pakistan.' },
    { q: 'What if the portal shows no bill for my consumer number?', a: 'If no bill is found, your current bill may not yet be generated (check before your billing cycle date), or your consumer number may be entered incorrectly. Call 1199 to verify.' },
    { q: 'Can I get the duplicate bill via WhatsApp?', a: 'Yes. Send your consumer number to SNGPL\'s official WhatsApp Business contact. The automated response provides a bill summary and a link to the full PDF on the portal.' },
    { q: 'How long does it take to receive the duplicate bill?', a: 'Through digital channels, the duplicate bill is available instantly (within seconds of entering your consumer number). There is no waiting period.' },
    { q: 'My postal bill has wrong address — how do I fix it?', a: 'Submit an address change request at your local SNGPL SDC with supporting documents (CNIC + property ownership or tenancy agreement). The update takes 3–5 working days and will reflect on future bills.' },
  ],
  'payment': [
    { q: 'What are the available SNGPL bill payment methods?', a: 'Easypaisa, JazzCash, all major bank mobile apps (HBL/UBL/MCB/Meezan/Allied/Alfalah), ATMs, internet banking portals, SNGPL franchise outlets, and bank branch counters.' },
    { q: 'Is there a fee for paying SNGPL bill online?', a: 'Most channels charge no fee — Easypaisa, JazzCash, and bank apps typically process SNGPL payments without any transaction fee. Bank ATMs may charge a standard transaction fee per their schedule. SNGPL franchise outlets are free.' },
    { q: 'How long before the payment reflects on SNGPL portal?', a: 'Digital payments (Easypaisa, JazzCash, bank apps) typically reflect within 24 hours. ATM payments may take up to 48 hours. Bank branch counter payments can take 48–72 hours.' },
    { q: 'What happens if I pay after the due date?', a: 'A late payment surcharge of approximately 10% of the overdue amount is applied to your next bill. Continued non-payment triggers a disconnection notice and eventual disconnection of your gas supply.' },
    { q: 'Can I pay more than the bill amount?', a: 'Yes. Overpayments are credited to your account and automatically deducted from future bills. The credit balance appears on subsequent bills as "Advance Payment" or "Overpayment."' },
    { q: 'How do I pay SNGPL bill without a smartphone?', a: 'Use Easypaisa USSD by dialing *786# on any mobile phone (no smartphone needed). Alternatively, visit an SNGPL franchise outlet or bank branch counter to pay in cash.' },
    { q: 'What information do I need to pay my gas bill?', a: 'Your consumer number and the payment amount. For digital payments, the system fetches your bill amount automatically once you enter the consumer number — you don\'t need to know the amount in advance.' },
    { q: 'Can someone else pay my SNGPL bill for me?', a: 'Yes. Anyone who knows your consumer number can pay your bill through any payment channel. The payment reconciles to your account regardless of who made the payment.' },
    { q: 'My payment was deducted but not reflected — what do I do?', a: 'Wait 48-72 hours first. If still not reflected, get your transaction reference number from the payment channel, then call SNGPL 1199 with your consumer number and transaction details. SNGPL\'s reconciliation team will trace and apply the payment manually.' },
    { q: 'Is it safe to pay SNGPL bill through third-party apps?', a: 'Only use official platforms: official bank apps, Easypaisa, JazzCash, or the SNGPL portal directly. Avoid third-party websites claiming to process SNGPL payments — these may be fraudulent. SNGPL does not partner with unauthorized payment aggregators.' },
  ],
  'troubleshooting': [
    { q: 'My SNGPL bill amount seems very high — what should I do?', a: 'First, calculate your expected amount using your meter readings and the SNGPL slab tariff. If your calculation differs significantly, submit a billing dispute through the SNGPL self-service portal or call 1199 to request a meter inspection.' },
    { q: 'How do I register a complaint with SNGPL?', a: 'Online: selfservice.sngpl.com.pk → New Complaint. Phone: 1199 (24/7). In-person: any SNGPL SDC. OGRA escalation: ogra.org.pk for unresolved complaints. Always note your complaint reference number.' },
    { q: 'What is the SNGPL complaint helpline?', a: '1199 — available 24 hours a day, 7 days a week for billing complaints, supply issues, emergencies, and general inquiries.' },
    { q: 'My gas supply has stopped — what do I do?', a: 'First check if neighbors are also affected (area-wide supply issue). If area-wide, call 1199 for status. If only your connection is affected, ensure your bill is paid and your account is not disconnected. If supply has been cut, pay any outstanding balance and call 1199 with your transaction ID.' },
    { q: 'How long does SNGPL take to resolve complaints?', a: 'Billing inquiries: 3-7 working days for inspection. Payment reconciliation: 2-3 working days. Disconnection restoration after payment: 2-3 working days. Meter replacement: 5-7 working days. Administrative changes: 3-5 working days.' },
    { q: 'What is an estimated reading and how do I avoid it?', a: 'An estimated reading (marked "E") is used when the meter reader cannot access your premises. To avoid: ensure meter accessibility, be present during monthly reading visits, or submit self-readings via the SNGPL portal before the monthly cutoff.' },
    { q: 'How do I apply for a new gas connection?', a: 'Visit your nearest SNGPL SDC with your CNIC, property ownership documents (or tenancy agreement with owner\'s CNIC), and a site plan. Complete the new connection application form. Processing time varies by area and capacity availability — typically 2-8 weeks.' },
    { q: 'My SNGPL portal login is not working — what should I do?', a: 'Try password reset using your registered mobile number. Clear browser cache or try a different browser. If the portal itself is down, try again after 1-2 hours. For persistent login issues, call 1199 for IT support assistance.' },
    { q: 'Can I dispute an SNGPL bill at OGRA?', a: 'Yes, but only after first attempting resolution with SNGPL through 1199, the online portal, or SDC visit. If unsatisfied with SNGPL\'s resolution, escalate to OGRA at ogra.org.pk with your complaint reference number and documentation.' },
    { q: 'How do I transfer my gas connection to a new owner?', a: 'Visit the SNGPL SDC with both parties\' CNICs, the original connection documents, property transfer papers (sale deed or NOC from previous owner), and a completed transfer application form. Processing typically takes 2-4 weeks.' },
  ],
};

// ─── Component ────────────────────────────────────────────────────────────────

export default async function CategoryIndexPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  if (!CATEGORIES.includes(category as Category)) notFound();

  const cat = category as Category;
  const label = getCategoryLabel(cat);
  const types = SLUG_TYPES[cat] ?? [];

  const intro = categoryIntros[cat];
  const faqs = categoryFaqs[cat];

  // Group cities by province
  const byProvince: Record<string, typeof CITIES> = {};
  for (const city of CITIES) {
    const prov = city.province === 'ICT' ? 'Federal (ICT)' : city.province;
    if (!byProvince[prov]) byProvince[prov] = [];
    byProvince[prov].push(city);
  }

  const featuredTypes = types.slice(0, 12);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-14 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-blue-200 mb-5">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white font-medium">{label}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-black mb-4">SNGPL {label} — All Cities 2025</h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            Detailed {label.toLowerCase()} guides for every city served by SNGPL across Punjab,
            Khyber Pakhtunkhwa, and Islamabad Capital Territory.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              {CITIES.length} Cities Covered
            </span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              {types.length} Guide Topics
            </span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              {CITIES.length * types.length}+ Specific Guides
            </span>
            <span className="bg-white/15 border border-white/20 rounded-full px-3 py-1 text-xs font-medium">
              Free — No Registration
            </span>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* ── Category Introduction ─────────────────────────────── */}
        <section className="mb-14 prose-content">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mt-0 mb-4">{intro.headline}</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">{intro.lead}</p>
          {intro.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>

        {/* ── Popular Guide Types ───────────────────────────────── */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Popular {label} Topics</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {featuredTypes.map(type => (
              <div key={type} className="bg-white border border-gray-200 rounded-xl p-3 hover:border-blue-300 transition-colors">
                <p className="text-xs font-semibold text-gray-900 mb-2">{getTypeLabel(type)}</p>
                <div className="flex flex-wrap gap-1">
                  {CITIES.slice(0, 6).map(city => (
                    <Link
                      key={city.slug}
                      href={`/sngpl/${cat}/${city.slug}-${type}`}
                      className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                    >
                      {city.name}
                    </Link>
                  ))}
                  <span className="text-xs text-gray-400">+{CITIES.length - 6} more</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How This Guide Network Works ─────────────────────── */}
        <section className="mb-14 bg-blue-50 border border-blue-100 rounded-2xl p-6 md:p-8">
          <h2 className="text-xl font-bold text-blue-900 mb-4">How Our City-Specific Guide Network Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3">1</div>
              <h3 className="font-bold text-blue-900 mb-2">Select Your City</h3>
              <p className="text-blue-800 text-sm leading-relaxed">Each city below links to a dedicated guide tailored to that city&apos;s SNGPL distribution circle, local office address, service areas, consumer base, and any city-specific billing nuances.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3">2</div>
              <h3 className="font-bold text-blue-900 mb-2">Choose Your Topic</h3>
              <p className="text-blue-800 text-sm leading-relaxed">Within each city, select from {types.length} specific guide topics — covering every aspect of {label.toLowerCase()} for that location. Each topic page provides step-by-step instructions tailored to local requirements.</p>
            </div>
            <div>
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-lg mb-3">3</div>
              <h3 className="font-bold text-blue-900 mb-2">Get Actionable Help</h3>
              <p className="text-blue-800 text-sm leading-relaxed">Every guide page includes the local SNGPL office address, areas served, consumer numbers for that city, and specific instructions — not generic advice, but city-calibrated guidance.</p>
            </div>
          </div>
        </section>

        {/* ── Cities by Province ────────────────────────────────── */}
        {Object.entries(byProvince).map(([province, cities]) => (
          <section key={province} className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
              <span className="w-2 h-6 bg-blue-600 rounded-full block" />
              {province} — SNGPL {label}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map(city => (
                <div key={city.slug} className="card hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900">{city.name}</h3>
                      <p className="text-xs text-gray-500">{city.division}</p>
                    </div>
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      {city.consumers}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {types.slice(0, 5).map(type => (
                      <Link
                        key={type}
                        href={`/sngpl/${cat}/${city.slug}-${type}`}
                        className="text-xs bg-gray-100 hover:bg-blue-100 hover:text-blue-700 text-gray-600 rounded-lg px-2 py-1 transition-colors no-underline"
                      >
                        {getTypeLabel(type)}
                      </Link>
                    ))}
                    {types.length > 5 && (
                      <span className="text-xs text-gray-400 px-2 py-1">+{types.length - 5} more</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* ── FAQ Section ───────────────────────────────────────── */}
        <section className="mb-14 prose-content">
          <h2>Frequently Asked Questions — SNGPL {label}</h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-200 transition-colors">
                <h3 className="text-base font-bold text-gray-900 mt-0 mb-2">{faq.q}</h3>
                <p className="mb-0">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── About SNGPL ───────────────────────────────────────── */}
        <section className="mb-14 prose-content">
          <h2>About Sui Northern Gas Pipelines Limited (SNGPL)</h2>
          <p>Sui Northern Gas Pipelines Limited (SNGPL) is one of Pakistan&apos;s two major natural gas distribution companies, the other being Sui Southern Gas Company (SSGC) which serves Sindh and Balochistan. SNGPL was incorporated in 1963 and has grown to become the single largest gas distribution utility in South Asia by network length and consumer count. The company maintains a pipeline network exceeding 160,000 kilometers spanning main transmission lines, high-pressure distribution mains, and low-pressure consumer service lines.</p>
          <p>SNGPL&apos;s service territory covers Punjab (all districts except those in southern Punjab served by SSGC), Khyber Pakhtunkhwa (all districts), Azad Jammu &amp; Kashmir, and the Islamabad Capital Territory. Within this territory, SNGPL serves seven categories of consumers: domestic (household), commercial, industrial, compressed natural gas (CNG) stations, power generation plants, and agricultural consumers. Domestic consumers represent the vast majority of connection count — over 6.5 million out of the total 7+ million connections — and consume roughly 40% of SNGPL&apos;s total gas distribution volume.</p>
          <p>The company is regulated by OGRA — the Oil and Gas Regulatory Authority established under the OGRA Ordinance 2002. OGRA sets SNGPL&apos;s tariff rates, approves its annual revenue requirement, monitors service quality, and adjudicates consumer complaints. Tariff rates are revised periodically based on OGRA&apos;s determinations, with domestic consumers protected by the six-slab progressive tariff structure that charges lower rates for minimal consumption and progressively higher rates as consumption increases.</p>
          <p>SNGPL&apos;s digital transformation over the past decade has significantly improved consumer experience. The online bill portal, mobile application, WhatsApp service, and SMS bill inquiry channel collectively handle tens of millions of consumer interactions monthly. The SNGPL self-service portal (selfservice.sngpl.com.pk) allows consumers to submit complaints, track service requests, apply for new connections, submit meter readings, and update account information — reducing the need for in-person SDC visits for routine matters.</p>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────────── */}
        <section className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center mt-8">
          <h2 className="text-xl font-bold text-blue-900 mb-2">Check Your SNGPL Bill Now</h2>
          <p className="text-blue-700 text-sm mb-4 max-w-md mx-auto">
            Enter your consumer number to instantly redirect to the official SNGPL bill portal and check your latest bill.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-primary inline-flex">
              Check Bill → Official Portal
            </Link>
            <Link href="/guides" className="bg-white border border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold px-5 py-2.5 rounded-xl transition-colors inline-flex items-center gap-2 text-sm">
              Read Full Guides
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}
