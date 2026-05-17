// ─────────────────────────────────────────────────────────────────
// SNGPL Programmatic Content Generator
// Produces 2,500–4,000 word unique content per page
// ─────────────────────────────────────────────────────────────────

import type { CityData, Category } from './seo-data';
import { getCategoryLabel, getTypeLabel } from './seo-data';

export interface PageContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: ContentSection[];
  faqs: FaqItem[];
  conclusion: string;
  howToSteps?: HowToStep[];
}

export interface ContentSection {
  h2: string;
  body: string;
  subsections?: { h3: string; body: string }[];
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface HowToStep {
  name: string;
  text: string;
}

// ─── MONTH helpers ───────────────────────────────────────────────
const MONTHS: Record<string, string> = {
  january:'January', february:'February', march:'March', april:'April',
  may:'May', june:'June', july:'July', august:'August',
  september:'September', october:'October', november:'November', december:'December',
};
const WINTER_MONTHS = new Set(['november','december','january','february']);
const SUMMER_MONTHS = new Set(['may','june','july']);

function monthFromType(type: string): string | null {
  for (const [k, v] of Object.entries(MONTHS)) {
    if (type.includes(k)) return v;
  }
  return null;
}

// ─── BILL CHECK CONTENT ──────────────────────────────────────────
function billCheckContent(city: CityData, type: string): PageContent {
  const month = monthFromType(type);
  const isWinter = month ? WINTER_MONTHS.has(month.toLowerCase()) : false;
  const isSummer = month ? SUMMER_MONTHS.has(month.toLowerCase()) : false;
  const typeLabel = getTypeLabel(type);
  const yearNote = type.includes('2025') ? '2025' : type.includes('2024') ? '2024' : '2025';

  const title = month
    ? `SNGPL ${city.name} ${month} Gas Bill Check — View & Download ${yearNote}`
    : `SNGPL ${city.name} Bill Check Online — ${typeLabel} | Pakistan`;
  const metaDescription = month
    ? `Check your SNGPL ${city.name} gas bill for ${month}. View amount due, download PDF, and pay online. Official SNGPL portal redirect — free service.`
    : `Check SNGPL gas bill online for ${city.name} consumers. ${typeLabel} — enter consumer number and view your bill instantly. Free official portal redirect.`;
  const h1 = month
    ? `SNGPL ${city.name} ${month} Bill Check Online`
    : `SNGPL ${city.name} Gas Bill Check — ${typeLabel}`;

  const intro = `Managing your natural gas bill in ${city.name} has never been easier. Sui Northern Gas Pipelines Limited (SNGPL) serves over ${city.consumers} consumers across ${city.areas} and the wider ${city.division} with reliable piped natural gas. This guide explains exactly how to check your SNGPL gas bill online if you live in ${city.name}, whether you need to view this month's bill, download a duplicate copy, verify payment status, or simply understand what each line item means.

${month ? `This page focuses specifically on checking your SNGPL bill for the month of ${month}, which ${isWinter ? `is typically one of the higher-consumption months in ${city.name} due to winter heating demand — many households in ${city.areas} see their gas consumption double or triple compared to summer months` : isSummer ? `is a moderate-consumption month in ${city.name} when gas use shifts primarily to cooking and water heating rather than space heating` : `brings its own billing patterns for ${city.name} consumers`}. Understanding your ${month} bill helps you budget effectively and spot any billing errors early.` : `Whether you are a residential consumer in ${city.areas} or a commercial establishment in ${city.name}, the process to check your SNGPL bill online is the same — you need your consumer number (printed on every bill) and access to either the official SNGPL bill portal or the SNGPL mobile app.`}

SNGPL is the largest natural gas utility company in Pakistan, operating an extensive network across Punjab, Khyber Pakhtunkhwa (KPK), and Azad Kashmir. In ${city.province === 'ICT' ? 'Islamabad Capital Territory' : city.province}, SNGPL manages gas distribution through its ${city.region} operations. The ${city.office} is your primary point of contact for all billing inquiries, new connections, and service complaints.`;

  const sections: ContentSection[] = [
    {
      h2: `How to Check SNGPL ${city.name} Gas Bill Online`,
      body: `Checking your SNGPL gas bill online from ${city.name} takes less than a minute. The official SNGPL bill portal at billchecker.sngpl.com.pk is available 24 hours a day, seven days a week, and does not require registration or login. Follow the steps below to view your current bill immediately.`,
      subsections: [
        {
          h3: 'Step 1: Find Your Consumer Number',
          body: `Your SNGPL consumer number is a unique 10 to 13 digit identifier printed prominently on every gas bill. Look for it in the top section of your bill under the heading "Consumer No." or "Cust. No." If you are a new consumer in ${city.name} and have not yet received a bill, you can obtain your consumer number from the ${city.office} with your CNIC and connection ownership documents.`,
        },
        {
          h3: 'Step 2: Visit the Official SNGPL Portal',
          body: `Open any web browser on your phone, tablet, or computer and navigate to billchecker.sngpl.com.pk. This is the only official SNGPL bill checking website — avoid third-party sites that claim to show bill information, as these may be outdated or inaccurate. The official portal always shows real-time billing data pulled directly from SNGPL's systems.`,
        },
        {
          h3: 'Step 3: Enter Your Consumer Number',
          body: `On the SNGPL bill portal, you will see a search field labeled "Consumer Number" or "Enter Consumer Number." Type your 10–13 digit consumer number exactly as it appears on your bill. Do not include spaces or hyphens. Double-check each digit before proceeding — an incorrect consumer number will either return an error or display another consumer's bill.`,
        },
        {
          h3: 'Step 4: View and Download Your Bill',
          body: `After entering your consumer number and clicking "Get Bill" or the search button, your bill details will appear on screen. You can see the billing period, meter readings, units consumed (in HHM), slab-wise calculation, government taxes, and the total amount due. A "Download PDF" or "Print" button allows you to save a digital copy or print a duplicate bill for payment at a bank or franchise.`,
        },
      ],
    },
    {
      h2: `SNGPL Bill Check via Mobile App for ${city.name} Consumers`,
      body: `SNGPL offers a dedicated mobile application — the SNGPL Consumer App — available on both Android (Google Play Store) and iOS (Apple App Store). For ${city.name} consumers who prefer using their smartphones, the app provides a convenient way to check bills, track payment history, and raise complaints without visiting the ${city.office}.

To use the app: download and install it from your app store, tap "Register" and enter your consumer number along with your mobile number for OTP verification. Once registered, your ${city.name} account will appear on the home screen showing your latest bill status. The app stores up to 12 months of billing history, which is useful for comparing seasonal consumption patterns — particularly helpful for households in ${city.areas} who want to track winter versus summer gas usage.

The SNGPL mobile app also supports push notifications for new bills, payment reminders, and SNGPL announcements affecting the ${city.division}. This means you will be alerted as soon as your monthly bill is generated, allowing you to pay before the due date and avoid late surcharges.`,
    },
    {
      h2: `Understanding Your ${city.name} SNGPL Bill Components`,
      body: `Your SNGPL gas bill is not just a single number — it is a detailed statement of your gas consumption and applicable charges. Understanding each component helps you verify accuracy and plan your monthly budget.`,
      subsections: [
        {
          h3: 'Fixed Charges and Meter Rent',
          body: `Every SNGPL bill includes a fixed monthly charge that is applied regardless of how much gas you consume. This covers the cost of maintaining the distribution infrastructure, meter servicing, and administrative costs. For domestic consumers in ${city.name}, the fixed meter rent is a small amount determined by OGRA (Oil and Gas Regulatory Authority).`,
        },
        {
          h3: 'Gas Consumption Charges (Slab-Based)',
          body: `SNGPL uses a progressive slab tariff approved by OGRA. The slabs for domestic consumers are: 0–100 HHM (Hundred Heat Meter units) attracts a flat charge of Rs. 200. Consumption between 101–300 HHM is charged at Rs. 130 per HHM. The 301–500 HHM band is Rs. 150 per HHM. Consumption from 501–800 HHM is charged at Rs. 170 per HHM, while 801–1,200 HHM attracts Rs. 200 per HHM. Any consumption above 1,200 HHM is billed at Rs. 250 per HHM. ${isWinter ? `During winter months in ${city.name}, many households in areas like ${city.areas} exceed the 300–500 HHM range due to gas heater usage, pushing bills into higher rate slabs.` : ''}`,
        },
        {
          h3: 'GIDC (Gas Infrastructure Development Cess)',
          body: `The Gas Infrastructure Development Cess is a government levy charged at 10% of the base gas amount. GIDC revenue is directed towards gas infrastructure projects across Pakistan, including pipeline expansion in ${city.province}. It appears as a separate line item on your bill.`,
        },
        {
          h3: 'GST (General Sales Tax)',
          body: `A 17% General Sales Tax is applied on the sum of gas consumption charges and GIDC. This is a federal tax collected by SNGPL on behalf of the government. The GST on gas bills is standard across all SNGPL service areas including ${city.name}.`,
        },
        {
          h3: 'Arrears and Adjustments',
          body: `If you have any unpaid balance from previous months, it appears as "Arrears" on your current bill. Conversely, if you overpaid or received a meter recalibration correction, a credit adjustment may reduce your current bill. Always check this section to ensure no unexpected arrears are included in your ${city.name} SNGPL bill.`,
        },
      ],
    },
    {
      h2: `SNGPL ${city.name} Bill Check via WhatsApp and SMS`,
      body: `For consumers in ${city.name} who want a quick bill summary without opening a browser, SNGPL provides WhatsApp and SMS-based services. To use the WhatsApp service, save SNGPL's official WhatsApp number (available on sngpl.com.pk) and send your consumer number as a message. The automated system responds with your bill amount, due date, and a payment link.

The SMS service works by sending your consumer number to SNGPL's designated short code. You receive a return SMS showing your bill summary — amount payable, billing period, and due date. Note that the SMS service provides text information only and does not include the full PDF bill. For a downloadable PDF copy, use the official portal or mobile app.

Both services are particularly useful for consumers in ${city.name} areas where internet connectivity may be limited, such as some parts of ${city.areas}. The WhatsApp service works on basic data connections and does not require a high-speed internet connection.`,
    },
    {
      h2: `Paying Your SNGPL ${city.name} Bill Online`,
      body: `Once you have checked your bill amount, you can pay it instantly through multiple digital channels without visiting a bank branch. Here are the most popular payment methods for ${city.name} SNGPL consumers:

**Easypaisa:** Open the Easypaisa app, tap "Bill Payments," select "Utility Bills" then "Gas" then "SNGPL," enter your consumer number, verify the amount shown, and confirm payment with your PIN. Your payment is processed within seconds and a confirmation SMS is sent to your registered mobile number.

**JazzCash:** The process is identical in the JazzCash app — navigate to "Pay Bills," choose "Gas Bills," select "SNGPL," enter your consumer number, review the bill amount, and authorize with your MPIN. JazzCash also supports the USSD code *786# for feature phones.

**Internet Banking:** All major Pakistani banks including HBL, UBL, MCB, Allied Bank, Meezan Bank, and Bank Alfalah support SNGPL bill payment through their internet banking portals and mobile apps. Navigate to "Utility Payments" or "Pay Bills," search for SNGPL, and enter your consumer number.

**Bank Branch / ATM:** You can also pay at any bank branch or ATM in ${city.name}. Most ATMs in Pakistan support utility bill payment. Insert your card, select "Other Services" or "Utility Bills," choose Gas and SNGPL, enter your consumer number, and complete the transaction. Keep the printed receipt as proof.

**SNGPL Franchises:** SNGPL has designated franchise centers in ${city.name} where you can pay your bill in cash. Visit with your bill or consumer number and make an over-the-counter payment.`,
    },
    {
      h2: `Common Bill Check Issues for ${city.name} Consumers and How to Fix Them`,
      body: `Consumers in ${city.name} occasionally encounter errors when checking their SNGPL bill online. Here are the most common issues and their solutions:

**Consumer Number Not Found:** If the portal returns "consumer not found" for your number, first verify you are entering it exactly as printed on your bill — no spaces or leading zeros omitted. If the error persists, your consumer number may be in the process of being updated in SNGPL's system after a new connection or transfer. Contact the ${city.office} for assistance.

**Bill Not Generated Yet:** Bills are typically generated between the 1st and 10th of each month for ${city.name} consumers. If you check before your billing cycle date, no bill will appear. The SNGPL portal only shows the most recent generated bill.

**Estimated Meter Reading:** Your bill may show an "E" next to the meter reading, indicating an estimated reading was used instead of an actual reading. This happens when the SNGPL meter reader was unable to access your premises. If your actual consumption differs significantly from the estimate, contact ${city.office} to request a meter inspection and bill adjustment.

**Website Down or Slow:** The SNGPL portal occasionally experiences high traffic, especially on and after bill generation dates. Try again after a few hours or use the SNGPL mobile app, which has better uptime for individual account queries.`,
    },
  ];

  const faqs: FaqItem[] = [
    { q: `How do I check my SNGPL gas bill in ${city.name}?`, a: `Visit billchecker.sngpl.com.pk, enter your 10–13 digit consumer number (printed on your bill), and click "Get Bill." Your current bill details will appear immediately including amount due, due date, and meter readings. You can also check via the SNGPL Consumer mobile app or by sending your consumer number via WhatsApp to SNGPL's official number.` },
    { q: `What is the SNGPL consumer number format for ${city.name}?`, a: `SNGPL consumer numbers are 10 to 13 digits long. For ${city.name} connections, the number typically begins with digits indicating the ${city.region} region code, followed by distribution company code, and your unique account identifier. The full number is printed on every gas bill in a box labeled "Consumer No." or "Cust. No."` },
    { q: `How much is a typical SNGPL gas bill in ${city.name}?`, a: `A typical domestic gas bill in ${city.name} ranges from Rs. 500 to Rs. 3,000 per month in summer and Rs. 2,000 to Rs. 8,000 or more in winter months, depending on household size and heating needs. Areas like ${city.areas} with larger households tend to have higher consumption. The exact amount depends on HHM units consumed and the applicable slab rate.` },
    { q: `When is the SNGPL bill due date for ${city.name} consumers?`, a: `SNGPL bills for ${city.name} typically have a due date of 15–20 days after the bill generation date. Your specific due date is printed on your bill. Paying after the due date incurs a 10% late surcharge on the gas consumption amount. Check your latest bill on billchecker.sngpl.com.pk for your exact due date.` },
    { q: `Can I download my SNGPL ${city.name} bill as a PDF?`, a: `Yes. After entering your consumer number on billchecker.sngpl.com.pk, look for a "Download PDF" or "Print" button on the results page. This generates an official duplicate bill PDF that is equally valid for bank payments. You can also download bills through the SNGPL Consumer mobile app under "My Bills."` },
    { q: `What happens if I don't pay my SNGPL bill in ${city.name} on time?`, a: `A 10% late payment surcharge is added to your next bill if payment is not received by the due date. If the bill remains unpaid for multiple months, SNGPL may issue a disconnection notice. After disconnection, a reconnection fee applies and you must pay all outstanding dues plus the reconnection charge before gas supply is restored. Contact the ${city.office} if you need a payment extension.` },
    { q: `How do I find SNGPL ${city.name} office address and contact number?`, a: `The main SNGPL office for ${city.name} consumers is located at ${city.office}. The SNGPL helpline number is 1199 (available 24/7). For online complaints, visit selfservice.sngpl.com.pk. The helpline handles billing inquiries, disconnection queries, new connection requests, and emergency gas leakage reports.` },
    { q: `Why is my ${city.name} SNGPL gas bill higher than usual?`, a: `Common reasons for a higher-than-usual gas bill include seasonal changes (winter heating increases consumption significantly in ${city.name}), a faulty meter recording higher readings, an estimated reading that exceeds actual consumption, a gas leak causing wastage, or arrears from a previous month being added. Check your current reading against your meter display and contact 1199 if you suspect an error.` },
    { q: `How does SNGPL calculate gas bill for ${city.name} domestic consumers?`, a: `SNGPL uses a progressive slab system. The first 100 HHM is charged at a flat Rs. 200. Beyond 100 HHM, rates are Rs. 130 per HHM (101–300), Rs. 150 (301–500), Rs. 170 (501–800), Rs. 200 (801–1,200), and Rs. 250 (above 1,200 HHM). GIDC (10% of gas amount) and GST (17%) are added on top. Use our free bill calculator to estimate your exact charges.` },
    { q: `Is it safe to check SNGPL bill online for ${city.name}?`, a: `Yes. The official SNGPL portal (billchecker.sngpl.com.pk) uses secure HTTPS and does not store your consumer number permanently. Our site simply redirects you to this official portal — we do not store, process, or share any of your personal or billing information.` },
    { q: `Can I check someone else's SNGPL bill using their consumer number?`, a: `Yes, the SNGPL bill portal is public and only requires the consumer number — no password or login. This is by design to allow family members, tenants, and landlords to check bill status conveniently. However, only the registered account holder can make service requests, apply for disconnection, or request a connection transfer.` },
    { q: `How long does it take for SNGPL ${city.name} payment to reflect online?`, a: `Online payments via Easypaisa, JazzCash, or internet banking typically reflect on SNGPL's system within 24 to 48 hours. Bank branch payments may take 48 to 72 hours. If your payment does not appear after 48 hours, contact your bank with the transaction reference number, then call SNGPL helpline 1199 with both your consumer number and transaction proof.` },
    { q: `What is the SNGPL WhatsApp number for ${city.name} bill check?`, a: `SNGPL operates an official WhatsApp service for bill inquiries. Save the official SNGPL WhatsApp number listed on sngpl.com.pk and send your consumer number as a message. The automated bot responds with your bill summary. Note: SNGPL's official WhatsApp number may change — always verify on the official website rather than relying on numbers shared on social media.` },
    { q: `How do I register a complaint about my ${city.name} SNGPL bill?`, a: `You can register a complaint through: (1) Online at selfservice.sngpl.com.pk — create an account and submit your complaint with supporting documents. (2) Helpline 1199 — state your consumer number and describe the issue. (3) Visit ${city.office} in person with your bill and CNIC. All complaints receive a reference number for tracking. Billing disputes are typically resolved within 7–14 working days.` },
    { q: `What is HHM in my ${city.name} SNGPL gas bill?`, a: `HHM stands for Hundred Heat Meter — the unit used by SNGPL to measure natural gas consumption. One HHM equals 100 cubic feet of gas. Your meter display shows cumulative HHM readings. The difference between your current month's reading and last month's reading gives the HHM consumed in that billing period, which is then used to calculate your bill using SNGPL's slab tariff.` },
  ];

  const howToSteps: HowToStep[] = [
    { name: 'Find Your Consumer Number', text: `Locate your SNGPL consumer number (10–13 digits) on your gas bill under "Consumer No." or "Cust. No." label. If lost, call SNGPL helpline 1199 with your CNIC and address.` },
    { name: 'Open the Official SNGPL Portal', text: `Visit billchecker.sngpl.com.pk in any web browser. This is the official and only authorized SNGPL bill checking portal.` },
    { name: 'Enter Consumer Number', text: `Type your consumer number in the search field exactly as it appears on your bill — no spaces or hyphens. Then click "Get Bill" or the search button.` },
    { name: 'View Bill Details', text: `Your bill for the current period will appear showing meter readings, HHM consumed, slab-wise charges, GIDC, GST, and total amount due with the due date.` },
    { name: 'Download or Pay', text: `Click "Download PDF" to save a duplicate bill, or proceed to pay via Easypaisa, JazzCash, your bank's internet banking, ATM, or bank branch.` },
  ];

  const conclusion = `Checking your SNGPL gas bill in ${city.name} is a straightforward process that takes under a minute with the right tools. Whether you use the official portal, the SNGPL mobile app, WhatsApp, or SMS, your bill information is always accessible. Keep your consumer number saved — it is your primary identifier for all SNGPL services in ${city.name}. For billing disputes or service issues, the ${city.office} and the 24/7 helpline at 1199 are your best resources. Set a monthly reminder to check your bill before the due date to avoid late payment surcharges and maintain an uninterrupted gas supply.`;

  return { title, metaDescription, h1, intro, sections, faqs, conclusion, howToSteps };
}

// ─── CONSUMER NUMBER CONTENT ─────────────────────────────────────
function consumerNumberContent(city: CityData, type: string): PageContent {
  const typeLabel = getTypeLabel(type);
  const isLost = type.includes('lost') || type.includes('recover') || type.includes('recovery');
  const isFormat = type.includes('format') || type.includes('digit') || type.includes('meaning') || type.includes('region');

  const title = `SNGPL ${city.name} Consumer Number — ${typeLabel} | Complete Guide`;
  const metaDescription = `Everything about your SNGPL consumer number in ${city.name}. ${typeLabel} — find, recover, understand, and use your gas consumer number. Free guide for ${city.province} SNGPL consumers.`;
  const h1 = `SNGPL ${city.name} Consumer Number — ${typeLabel}`;

  const intro = `Your SNGPL consumer number is the single most important piece of information for managing your gas connection in ${city.name}. This unique identifier — printed on every SNGPL gas bill and on your meter card — links you to SNGPL's billing system and is required for every official interaction: checking bills online, making payments through Easypaisa or JazzCash, registering complaints, applying for new services, and verifying your account status.

SNGPL serves over ${city.consumers} consumers in ${city.name} across areas including ${city.areas}, all managed through the ${city.office}. Every one of these connections has a unique consumer number assigned at the time of new connection registration. Understanding your consumer number — its format, how to find it, and what to do if you lose it — is essential knowledge for every ${city.name} gas consumer.

This guide covers everything about SNGPL consumer numbers specific to ${city.name} and ${city.region} connections${isLost ? `, with a focus on what to do if your consumer number is lost or unavailable` : isFormat ? `, with a detailed explanation of the consumer number format and what each digit segment means` : ``}.`;

  const sections: ContentSection[] = [
    {
      h2: `What Is an SNGPL Consumer Number and Why Does It Matter in ${city.name}?`,
      body: `An SNGPL consumer number (also called a customer number, account number, or cust. no.) is a unique numeric identifier assigned to each gas connection in SNGPL's service area. For ${city.name} consumers, this number is your gateway to all digital SNGPL services.

Without your consumer number, you cannot:
- Check your gas bill on billchecker.sngpl.com.pk
- Pay your bill through Easypaisa, JazzCash, or internet banking
- Register a complaint on selfservice.sngpl.com.pk
- Track your payment history
- Apply for additional services or connection modifications

The consumer number is permanent — it stays with your specific gas connection address in ${city.name} and does not change unless you request a full connection transfer or SNGPL undertakes a system-wide renumbering exercise (which is rare and announced publicly).`,
    },
    {
      h2: `Where to Find Your SNGPL Consumer Number in ${city.name}`,
      body: `There are several places where your SNGPL consumer number appears:`,
      subsections: [
        {
          h3: 'On Your Gas Bill',
          body: `The most reliable source. Your consumer number is printed in the top section of every SNGPL monthly gas bill in a box clearly labeled "Consumer No.", "Cust. No.", or "Consumer Number." It is usually 10 to 13 digits and appears before your name and address. If you have any old bills at home or in digital archives, check there first.`,
        },
        {
          h3: 'On Your Meter Card',
          body: `When your gas connection was installed in ${city.name}, SNGPL attached or provided a meter card — a small card affixed near your gas meter. This card shows your consumer number, meter number, connection address, and installation date. Check the wall near your gas meter for this card.`,
        },
        {
          h3: 'In the SNGPL Mobile App',
          body: `If you have previously registered on the SNGPL Consumer app, your consumer number is stored under your profile. Open the app, go to "My Connections" or "Account," and your consumer number(s) will be listed there.`,
        },
        {
          h3: 'Via SNGPL Helpline 1199',
          body: `Call the SNGPL helpline at 1199 with your CNIC number and connection address in ${city.name}. After identity verification, the representative can provide your consumer number. This is the recommended path if all other methods are unavailable.`,
        },
        {
          h3: `At ${city.office}`,
          body: `Visit the SNGPL service center in ${city.name} in person with your original CNIC and any documentation of connection ownership (connection certificate, lease agreement, or ownership document). The staff can retrieve your consumer number from SNGPL's records.`,
        },
      ],
    },
    {
      h2: `SNGPL Consumer Number Format — Decoding Your ${city.name} Account Number`,
      body: `SNGPL consumer numbers follow a structured format that encodes information about your connection. While the exact internal coding system is not publicly documented by SNGPL, here is what is generally understood about the format:

**Length:** 10 to 13 digits. The variation in length exists because SNGPL has expanded and renumbered different geographic areas over the years.

**Region Identifier:** The first 2–3 digits typically correspond to the SNGPL region or zone. For ${city.name} in ${city.province}, the prefix reflects the ${city.region} zone designation in SNGPL's distribution system.

**Distribution Circle Code:** The next segment identifies the specific distribution circle or subdivision within ${city.name} responsible for your meter. ${city.name} has multiple distribution circles covering areas like ${city.areas}.

**Sequential Account Number:** The remaining digits are a sequential number assigned to your specific connection within that distribution circle.

The consumer number is different from your meter number. The meter number (usually 6–8 digits) identifies the physical gas meter device, while the consumer number identifies your billing account. Both numbers appear on your bill but serve different purposes.`,
    },
    {
      h2: `How to Recover a Lost SNGPL Consumer Number in ${city.name}`,
      body: `Losing or forgetting your consumer number is a common problem, especially for new residents renting properties in ${city.name} or those who have moved in without receiving the previous tenant's bills. Here are all available recovery methods:`,
      subsections: [
        {
          h3: 'Method 1: Call SNGPL Helpline 1199',
          body: `This is the fastest method. Call 1199 (available 24/7) and provide: your full name as registered on the account, your complete gas connection address in ${city.name}, and your CNIC number. The helpline representative will verify your identity against SNGPL records and provide your consumer number verbally. Have a pen ready to note it down.`,
        },
        {
          h3: 'Method 2: Visit SNGPL Office',
          body: `Visit ${city.office} during working hours (Monday to Friday, 9 AM – 5 PM). Bring your original CNIC and any document proving your connection to the address (tenancy agreement, property ownership document, or WAPDA/PTCL bill with the same address). SNGPL staff can look up your consumer number and issue a printed confirmation.`,
        },
        {
          h3: 'Method 3: Check Old Bills',
          body: `Search your email, WhatsApp, or photo gallery for any previous SNGPL bill or payment receipt. If you ever paid via Easypaisa or JazzCash, your payment history in those apps contains your consumer number. Bank statements from HBL, UBL, or MCB may also show the consumer number used in previous utility payments.`,
        },
        {
          h3: 'Method 4: SNGPL Self-Service Portal',
          body: `Visit selfservice.sngpl.com.pk and use the "Find Consumer Number" feature if available, or register a query. Some versions of the self-service portal allow lookup by connection address and CNIC.`,
        },
      ],
    },
    {
      h2: `Difference Between Consumer Number and Meter Number in ${city.name} SNGPL Bills`,
      body: `A common source of confusion for ${city.name} gas consumers is the difference between the consumer number and the meter number. Both appear on SNGPL bills but serve entirely different purposes.

**Consumer Number (Account ID):** This is your billing account identifier. It remains constant as long as you have an active gas connection at that address. Use this number for all bill checking, payment, and complaint registration activities.

**Meter Number:** This identifies the physical gas meter device installed at your premises. If SNGPL replaces your meter (due to age, fault, or upgrade), the meter number changes but your consumer number remains the same. The meter number is primarily used by SNGPL technicians for field operations and is less relevant for bill payment purposes.

**What to Use Where:**
- Bill portal (billchecker.sngpl.com.pk) → Consumer Number
- Easypaisa / JazzCash payment → Consumer Number
- Complaint registration → Consumer Number
- Meter inspection request → Both numbers may be needed
- New meter application → Meter Number plus Consumer Number`,
    },
    {
      h2: `Using Your ${city.name} SNGPL Consumer Number for Different Services`,
      body: `Once you have your consumer number, you can use it across all SNGPL digital and physical service channels. Here is a complete reference for ${city.name} consumers:

**Bill Checking:** billchecker.sngpl.com.pk — enter consumer number, view bill instantly.

**Online Payment:** Easypaisa, JazzCash, HBL Pay, UBL Omni, MCB Mobile, Meezan Bank app — navigate to Utility Bills > Gas > SNGPL and enter your consumer number.

**SNGPL Mobile App:** Download from Play Store or App Store, register with consumer number and mobile number, then access bill history and account information.

**Complaint Registration:** selfservice.sngpl.com.pk — create account, enter consumer number, submit detailed complaint with attachments.

**WhatsApp Service:** Send consumer number to SNGPL's official WhatsApp number to receive bill summary and due date.

**SMS Inquiry:** Send consumer number to the SNGPL short code to receive a text summary of your latest bill.

**Office Visit:** Bring consumer number and CNIC to ${city.office} for in-person assistance with any billing or connection matter.`,
    },
  ];

  const faqs: FaqItem[] = [
    { q: `What is an SNGPL consumer number?`, a: `An SNGPL consumer number is a unique 10–13 digit identifier assigned to each gas connection in SNGPL's service area. It is your primary account reference for checking bills, making payments, and registering complaints. Every SNGPL gas connection in ${city.name} has a unique consumer number printed on every monthly bill.` },
    { q: `Where can I find my SNGPL consumer number in ${city.name}?`, a: `Your consumer number is printed on the top section of every SNGPL gas bill under "Consumer No." or "Cust. No." It also appears on the meter card affixed near your gas meter. If you don't have a bill or meter card, call SNGPL helpline 1199 with your CNIC and address, or visit ${city.office}.` },
    { q: `How many digits is an SNGPL consumer number?`, a: `SNGPL consumer numbers are between 10 and 13 digits long. Most connections in ${city.name} have 10 or 11 digit consumer numbers, though some older or newer connections may have 12 or 13 digits. Never include spaces, dashes, or leading zeros when entering your number on the bill portal.` },
    { q: `I lost my SNGPL consumer number. How do I recover it?`, a: `Call SNGPL helpline 1199 (24/7) with your CNIC and connection address in ${city.name} for immediate assistance. Alternatively, visit ${city.office} in person with your CNIC and address proof. You can also check old Easypaisa or JazzCash payment receipts or your bank statement, which typically show the consumer number used in past payments.` },
    { q: `Is consumer number the same as meter number in SNGPL?`, a: `No. The consumer number identifies your billing account and stays constant as long as you have an active connection at that address. The meter number identifies the physical meter device and changes if SNGPL replaces your meter. Always use the consumer number for bill checking and payment — not the meter number.` },
    { q: `Can I have multiple consumer numbers for one address?`, a: `Generally, each gas connection has one consumer number. However, if your property has both domestic and commercial connections, each may have a separate consumer number. Also, if you have connections at multiple addresses in ${city.name}, each will have its own consumer number. Register all your consumer numbers in the SNGPL app to manage them from one place.` },
    { q: `Does my SNGPL consumer number change when I move house in ${city.name}?`, a: `Yes. Your consumer number is tied to the specific gas connection address, not to you as a person. When you move to a new address with an existing gas connection, you will use that property's consumer number. If you get a new connection at a new address, SNGPL assigns a new consumer number. For connection transfers, visit ${city.office} with both parties (buyer/seller or landlord/tenant) present.` },
    { q: `How do I use my SNGPL consumer number to check my bill?`, a: `Visit billchecker.sngpl.com.pk in any browser, enter your consumer number in the search field (10–13 digits, numbers only), and click "Get Bill." Your current bill with all charges, meter readings, and payment due date will appear. You can also use the SNGPL Consumer mobile app after registering with your consumer number.` },
    { q: `What if my consumer number is not found on the SNGPL portal?`, a: `First verify you entered the correct number without typos. If the error persists, your account may be under a different number (check your bill carefully) or may be temporarily unavailable due to a system update. Call SNGPL helpline 1199 or visit ${city.office} for immediate clarification.` },
    { q: `Can I use someone else's consumer number to pay their SNGPL bill?`, a: `Yes. You can enter any consumer number to check or pay that account's bill — the SNGPL system does not restrict access by consumer number. This is intentional and allows family members, tenants, and third parties to pay bills on behalf of account holders. However, account-related changes (name, address, connection transfer) require the registered owner's presence and CNIC.` },
    { q: `How long does it take to get a new consumer number in ${city.name}?`, a: `When applying for a new gas connection in ${city.name}, SNGPL assigns a consumer number after the connection is installed and approved. The new connection process typically takes 30–90 days depending on SNGPL's installation queue and infrastructure availability in your area. Contact ${city.office} for current timelines.` },
    { q: `What is the SNGPL ${city.name} office address for consumer number queries?`, a: `${city.office}. Working hours are Monday to Friday, 9 AM to 5 PM. Call SNGPL helpline 1199 for telephone support available 24/7.` },
    { q: `Do I need to register to check my SNGPL consumer number online?`, a: `No registration is required to check your SNGPL bill on billchecker.sngpl.com.pk — just enter your consumer number. However, the SNGPL Consumer mobile app and selfservice.sngpl.com.pk do require registration with your consumer number and mobile OTP for accessing account-specific features like complaint filing and bill history.` },
    { q: `What information is linked to my SNGPL consumer number in ${city.name}?`, a: `Your consumer number links to: your full name as connection owner, your connection address in ${city.name}, your meter number, billing history (12+ months), payment records, current meter readings, connection type (domestic/commercial/industrial), gas tariff category, and any active complaints or demands. This is why your consumer number must be kept secure.` },
    { q: `Is SNGPL consumer number the same as NTN or CNIC?`, a: `No. The SNGPL consumer number is an internal account identifier specific to SNGPL's billing system. It has no relation to your National Tax Number (NTN) or CNIC. SNGPL uses your CNIC for identity verification purposes but your gas account is always referenced by the consumer number.` },
  ];

  const conclusion = `Your SNGPL consumer number is your key to seamless gas bill management in ${city.name}. Keep it saved — in your phone, noted in a safe place, or registered in the SNGPL mobile app — so you always have it available when you need to check your bill, make a payment, or register a service request. If you ever lose it, recovery is straightforward through SNGPL helpline 1199 or a visit to ${city.office}. Remember: never share your consumer number publicly or with unverified parties, as it could be misused to access your account information.`;

  return { title, metaDescription, h1, intro, sections, faqs, conclusion };
}

// ─── DUPLICATE BILL CONTENT ──────────────────────────────────────
function duplicateBillContent(city: CityData, type: string): PageContent {
  const typeLabel = getTypeLabel(type);
  const isApp = type.includes('app') || type.includes('android') || type.includes('iphone');
  const isWhatsApp = type.includes('whatsapp');
  const isSMS = type.includes('sms');
  const isOffice = type.includes('office');

  const title = `Download SNGPL ${city.name} Duplicate Bill — ${typeLabel} | 2025 Guide`;
  const metaDescription = `Get your SNGPL ${city.name} duplicate gas bill instantly. ${typeLabel} — official portal, mobile app, WhatsApp, and SMS methods explained step by step. Free guide.`;
  const h1 = `SNGPL ${city.name} Duplicate Bill Download — ${typeLabel}`;

  const intro = `Lost your SNGPL gas bill? Need a copy to make a payment or settle a billing dispute? As an SNGPL consumer in ${city.name}, you have multiple official channels to download or obtain a duplicate gas bill within minutes — no need to visit the SNGPL office unless you prefer in-person service.

A duplicate SNGPL bill is an official reprint of your gas billing statement. It contains identical information to your original printed bill: consumer number, meter readings, HHM consumed, slab-wise charges, GIDC, GST, total amount due, and the payment due date. A duplicate bill is equally valid for payment at any bank, ATM, Easypaisa, or JazzCash.

${city.name} consumers across ${city.areas} regularly download duplicate bills because bills are delivered by SNGPL post and sometimes get lost, damaged, or simply never arrive. Digital delivery via the SNGPL portal and mobile app eliminates this problem entirely. This guide walks you through every available method${isApp ? `, with a focus on the SNGPL mobile app — the most convenient option for smartphone users in ${city.name}` : isWhatsApp ? `, with a focus on the SNGPL WhatsApp service — perfect for consumers who want bill details without opening a separate app` : isSMS ? `, with a focus on the SMS service — ideal for consumers in ${city.name} who want a quick text summary without internet access` : isOffice ? `, with complete guidance on visiting the ${city.office} to obtain a physical duplicate bill` : ``}.`;

  const sections: ContentSection[] = [
    {
      h2: `Why You Might Need a Duplicate SNGPL Bill in ${city.name}`,
      body: `There are several legitimate reasons ${city.name} consumers need duplicate SNGPL gas bills:

**Lost or Damaged Original Bill:** Physical bills get misplaced, damaged by moisture, or accidentally discarded. A duplicate resolves this immediately.

**Never Received the Bill:** SNGPL sends bills through postal delivery, which can be unreliable in some areas of ${city.name}, particularly in densely populated neighborhoods or new housing schemes.

**Bank or Lease Requirements:** Some banks and landlords in ${city.name} require recent utility bills as proof of address. Your SNGPL gas bill is an accepted form of address verification.

**Payment at Different Channels:** If you want to pay at a bank branch or ATM but don't have your physical bill, a printed duplicate from the portal serves the same purpose.

**Billing Dispute Evidence:** If you are disputing a bill amount with SNGPL or at ${city.office}, having the official bill document — including the specific readings and charges — is essential.

**Tax or Audit Records:** Businesses in ${city.name} may need gas bills for tax filing or auditing purposes. SNGPL portal allows downloading up to 12 months of previous bills.`,
    },
    {
      h2: `Method 1: Download SNGPL Duplicate Bill via Official Portal`,
      body: `The official SNGPL bill portal at billchecker.sngpl.com.pk is the primary and most reliable source for duplicate bills for ${city.name} consumers.`,
      subsections: [
        { h3: 'Step 1: Open the Portal', body: `Open billchecker.sngpl.com.pk in any web browser on your phone, tablet, or computer. The site works on Chrome, Firefox, Safari, and all standard browsers.` },
        { h3: 'Step 2: Enter Consumer Number', body: `Type your 10–13 digit SNGPL consumer number in the search field. The number is printed on any previous bill or your meter card. Do not include spaces or special characters.` },
        { h3: 'Step 3: View Bill', body: `Click "Get Bill" or the search button. Your bill details for the most recent billing period will appear, showing meter readings, units consumed, a detailed charge breakdown, and the total payable amount.` },
        { h3: 'Step 4: Download PDF', body: `Look for the "Download PDF," "Print Bill," or "Get Duplicate" button on the results page. Clicking this generates an official PDF of your duplicate bill that you can save to your device, send via WhatsApp or email, or print for bank payment.` },
        { h3: 'Previous Month Bills', body: `The portal primarily shows the most recent bill. For previous months, use the SNGPL Consumer mobile app (described in Method 2 below), which stores 12 months of billing history for ${city.name} accounts.` },
      ],
    },
    {
      h2: `Method 2: Download via SNGPL Mobile App`,
      body: `The SNGPL Consumer mobile app offers the most complete duplicate bill experience for ${city.name} consumers, including access to 12 months of historical bills.

**Download:** Available on Google Play Store (search "SNGPL Consumer") for Android phones and Apple App Store for iPhone/iPad.

**Registration:** Open the app, tap "Register New Consumer," enter your consumer number, and verify your mobile number via OTP. Once registered, your ${city.name} account is linked permanently.

**Viewing Bills:** The home screen shows your current bill. Tap "Bill History" or "My Bills" to see previous months. Each bill entry has a "Download" or "PDF" button to save the duplicate to your phone's storage.

**Advantages:** The app works offline for recently cached bills, sends push notifications when new bills are generated, and allows multiple consumer numbers if you manage several connections in ${city.name} or elsewhere. The SNGPL app also supports direct payment integration with some bank wallets.`,
    },
    {
      h2: `Method 3: SNGPL WhatsApp Duplicate Bill Service`,
      body: `For ${city.name} consumers comfortable with WhatsApp, SNGPL offers a convenient automated service:

**Save the Official Number:** Visit sngpl.com.pk to find the current official SNGPL WhatsApp service number. Save it to your contacts.

**Send Your Consumer Number:** Open a WhatsApp chat with the saved number and type your 10–13 digit consumer number and send it.

**Receive Bill Details:** Within seconds, SNGPL's automated system responds with your bill summary — amount due, billing period, meter readings, and payment due date. Some versions of the service also include a link to download the full PDF bill.

**Limitations:** The WhatsApp service provides the current month's bill only. It works best for quick amount checks rather than archiving or formal duplicate bill printing. Always ensure you are messaging SNGPL's official verified WhatsApp number.`,
    },
    {
      h2: `Method 4: SMS-Based Bill Inquiry for ${city.name}`,
      body: `For consumers in ${city.name} who do not have smartphones or reliable internet access, SNGPL's SMS service provides basic bill information:

**How to Use:** Send your consumer number as an SMS to the SNGPL designated short code (available on sngpl.com.pk). No need for internet — standard cellular SMS service is sufficient.

**Information Received:** You will receive an SMS with your bill amount, billing month, and due date. The SMS does not provide the full breakdown (slab-wise calculation, GIDC, GST) or a downloadable PDF — it is a quick summary only.

**When to Use This Method:** SMS service is ideal for quick "how much do I owe?" queries on the go, particularly if you are away from WiFi or have limited data. For the full duplicate bill PDF, use the portal or mobile app instead.`,
    },
    {
      h2: `Method 5: In-Person Duplicate Bill at ${city.office}`,
      body: `If you prefer or require a physically certified duplicate bill, visit ${city.office} during working hours (Monday to Friday, 9 AM – 5 PM).

**What to Bring:** Your CNIC (original) and, if possible, your consumer number (though the office can look up by address and CNIC).

**Process:** Approach the customer service counter and request a duplicate bill. The SNGPL representative will print an official duplicate from their system. Some centers may charge a nominal fee for physical duplicate bill printing — confirm at the counter.

**Advantage of Office Visit:** The physically printed duplicate bill from the SNGPL office carries an official stamp and is the most widely accepted form for legal, banking, or documentation purposes in ${city.name}. If you need a certified copy for a court proceeding, bank account opening, or visa application, this is the recommended method.`,
    },
    {
      h2: `Understanding Your SNGPL ${city.name} Duplicate Bill`,
      body: `When you download or print your SNGPL duplicate bill, here is what each section means:

**Bill Header:** Shows the SNGPL logo, billing date, billing period (from/to dates), and the bill type. Duplicate bills are marked "Duplicate" in the header.

**Consumer Information:** Consumer number, account name, connection address (${city.name}), connection type (domestic/commercial), and distribution circle.

**Meter Information:** Previous reading, current reading, reading date, meter number, and HHM consumed (difference between readings).

**Charge Breakdown:** Fixed charges, variable consumption charges (calculated per OGRA slab), GIDC (10%), and GST (17%). Each is shown separately so you can verify the calculation.

**Arrears/Adjustments:** Any unpaid balance from previous months or credit adjustments are listed here.

**Total Payable:** The sum of all charges minus any credits. This is the amount you need to pay by the due date.

**Payment Slip:** The lower portion of the bill is the payment slip used at bank branches and ATMs. It includes a barcode or 17-digit payment reference number.`,
    },
  ];

  const faqs: FaqItem[] = [
    { q: `How can I download my SNGPL duplicate bill in ${city.name}?`, a: `Visit billchecker.sngpl.com.pk, enter your consumer number (10–13 digits), and click "Get Bill." On the results page, click "Download PDF" to get your official duplicate bill. Alternatively, use the SNGPL Consumer mobile app to download current or previous bills.` },
    { q: `Is a duplicate SNGPL bill valid for bank payment?`, a: `Yes, a duplicate SNGPL bill — whether downloaded from the portal, generated via the app, or printed at the SNGPL office — is equally valid for payment at any bank branch, ATM, Easypaisa, JazzCash, or SNGPL franchise. Banks and payment channels scan the barcode or use the consumer number from the duplicate bill.` },
    { q: `Can I get a duplicate bill for previous months in ${city.name}?`, a: `Yes. The SNGPL Consumer mobile app stores up to 12 months of billing history. For older bills, visit ${city.office} in person. The official portal (billchecker.sngpl.com.pk) typically shows only the most recent bill.` },
    { q: `How long does it take to download an SNGPL duplicate bill online?`, a: `Downloading a duplicate bill from billchecker.sngpl.com.pk takes under a minute — just enter your consumer number and click download. The PDF generates instantly. The SNGPL mobile app is similarly fast. There is no waiting period for online duplicate bills.` },
    { q: `Is there a fee for downloading a duplicate SNGPL bill online?`, a: `No. Downloading your duplicate SNGPL bill from the official portal or mobile app is completely free. The SNGPL physical office may charge a nominal printing fee for physically stamped copies. Online downloads have no charge.` },
    { q: `What if my bill is not available on the SNGPL portal?`, a: `If your bill does not appear on billchecker.sngpl.com.pk, it may not have been generated yet (bills are typically generated between the 1st and 10th of each month), or there may be a system issue. Try again the next day or call SNGPL helpline 1199. The mobile app sometimes has better availability during portal downtime.` },
    { q: `Can I use a WhatsApp duplicate bill to pay at a bank branch?`, a: `The information received via WhatsApp (amount and consumer number) is sufficient for payment through Easypaisa, JazzCash, or internet banking. For bank branch counter payment, you may need a printed duplicate with the payment slip barcode — download the PDF from billchecker.sngpl.com.pk for this purpose.` },
    { q: `My SNGPL bill was lost and due date has passed. What should I do?`, a: `Download a duplicate immediately from billchecker.sngpl.com.pk and pay as soon as possible. A 10% late surcharge will be added to your next bill for late payment, but immediate payment after obtaining the duplicate bill stops further penalties. Call SNGPL helpline 1199 if you need a due date extension.` },
    { q: `How do I get an SNGPL duplicate bill for a different address in ${city.name}?`, a: `If you own or manage multiple gas connections in ${city.name}, each has a unique consumer number. Enter the specific consumer number for the address you need the duplicate bill for. The portal and app support multiple consumer numbers.` },
    { q: `Can I share my SNGPL duplicate bill via WhatsApp or email?`, a: `Yes. The PDF downloaded from the portal or app can be shared via WhatsApp, email, or any messaging platform. This is useful for landlords sharing bills with tenants or when submitting a utility bill as address proof.` },
    { q: `What does "duplicate" mean on an SNGPL bill?`, a: `"Duplicate" simply indicates that the bill is a reprint or digital copy of the original. It contains identical information and is equally valid for all purposes — there is no difference in legal status or validity between an original and a duplicate SNGPL bill.` },
    { q: `How do I find my consumer number if I need a duplicate but have no bills?`, a: `Call SNGPL helpline 1199 with your CNIC and connection address in ${city.name}. They can verify your identity and provide your consumer number, after which you can download your duplicate bill online. Alternatively, visit ${city.office} in person.` },
    { q: `Can I get a duplicate bill for a commercial SNGPL connection in ${city.name}?`, a: `Yes. The same process applies for commercial connections. Enter the commercial consumer number on billchecker.sngpl.com.pk or the SNGPL mobile app. Note that commercial bills have different tariff rates from domestic bills.` },
    { q: `Is the SNGPL portal secure for downloading duplicate bills?`, a: `Yes. billchecker.sngpl.com.pk uses HTTPS encryption. The portal only requires your consumer number (which is already printed on your public utility bill) — it does not ask for CNIC, passwords, or banking details. Your billing data is displayed securely.` },
    { q: `What if the download button on the SNGPL portal is not working?`, a: `Try a different browser (Chrome or Firefox are recommended), clear your browser cache, or use the SNGPL mobile app instead. If the portal itself is down, wait a few hours and try again. The SNGPL helpline 1199 can also email your bill if you request it through the portal's contact mechanism.` },
  ];

  const conclusion = `Getting your SNGPL duplicate bill in ${city.name} takes less than a minute through digital channels. The official portal at billchecker.sngpl.com.pk is the fastest option, while the SNGPL mobile app provides the added benefit of bill history access. For formal documentation, the ${city.office} provides physically stamped copies. Whichever method you use, your duplicate bill is official, valid, and ready for payment or submission as address proof.`;

  return { title, metaDescription, h1, intro, sections, faqs, conclusion, howToSteps: [
    { name: 'Locate Your Consumer Number', text: `Find your 10–13 digit SNGPL consumer number on any previous bill or your meter card near your gas meter.` },
    { name: 'Visit SNGPL Bill Portal', text: `Go to billchecker.sngpl.com.pk in any web browser.` },
    { name: 'Enter Consumer Number', text: `Type your consumer number in the search field and click "Get Bill."` },
    { name: 'Download PDF', text: `Click the "Download PDF" or "Print Bill" button to save your official duplicate bill.` },
    { name: 'Pay or Archive', text: `Use the PDF to pay at a bank, franchise, Easypaisa, or JazzCash — or save it for record-keeping.` },
  ]};
}

// ─── PAYMENT CONTENT ─────────────────────────────────────────────
function paymentContent(city: CityData, type: string): PageContent {
  const typeLabel = getTypeLabel(type);
  const isEasypaisa = type.includes('easypaisa');
  const isJazzcash = type.includes('jazzcash');
  const isBank = type.includes('hbl') || type.includes('ubl') || type.includes('mcb') || type.includes('meezan') || type.includes('allied') || type.includes('bank-transfer') || type.includes('internet-banking');
  const isATM = type.includes('atm');
  const isLate = type.includes('late') || type.includes('overdue') || type.includes('disconnection') || type.includes('avoid');

  const title = `Pay SNGPL ${city.name} Gas Bill Online — ${typeLabel} | Step-by-Step 2025`;
  const metaDescription = `How to pay your SNGPL gas bill in ${city.name} via ${typeLabel}. Easypaisa, JazzCash, HBL, ATM, and bank branch payment guide. Avoid disconnection with timely payment.`;
  const h1 = `SNGPL ${city.name} Gas Bill Payment — ${typeLabel}`;

  const intro = `Paying your SNGPL gas bill in ${city.name} on time is essential to maintain uninterrupted gas supply to your home or business. With ${city.consumers} consumers in ${city.name}'s ${city.division}, SNGPL processes thousands of payments every day through digital and physical channels.

This guide covers every available payment method for ${city.name} SNGPL consumers — from mobile wallets like Easypaisa and JazzCash to internet banking, ATM payments, and over-the-counter bank branch payments. ${isLate ? `We also explain what happens when bills go unpaid past the due date and how to avoid disconnection in ${city.name}.` : isEasypaisa ? `Special focus is given to Easypaisa, which is one of the most widely used payment methods for SNGPL bills across ${city.name} due to its availability and ease of use.` : isJazzcash ? `This guide focuses on JazzCash payment, which is available to both smartphone users (via the app) and basic phone users (via USSD *786# code).` : isBank ? `This guide covers internet and mobile banking methods — available through all major Pakistani banks including HBL, UBL, MCB, Meezan Bank, and Allied Bank.` : ``}

Before paying, always check your latest bill on billchecker.sngpl.com.pk to confirm the exact amount due and the payment due date. The due date is printed on your bill and is typically 15–20 days after the bill generation date. Missing the due date incurs a 10% late payment surcharge on your next bill.`;

  const sections: ContentSection[] = [
    {
      h2: `SNGPL Bill Payment Methods Available in ${city.name}`,
      body: `${city.name} SNGPL consumers have access to a wide range of payment options, both digital and physical. Here is an overview before we dive into each method in detail:

**Digital/Online Payments:**
- Easypaisa mobile wallet and app
- JazzCash mobile wallet and USSD
- HBL Mobile / HBL Internet Banking
- UBL Net Banking and UBL Omni
- MCB Mobile and MCB Internet Banking
- Meezan Bank mobile app
- Allied Bank internet banking
- Other bank apps and internet banking portals

**Physical Payments:**
- ATM (any major bank ATM in ${city.name})
- Bank branch counter payment
- SNGPL franchises and payment centers

All digital methods support instant payment processing. Physical payments (bank branch, ATM) may take 24–48 hours to reflect on SNGPL's system, though your payment is effective from the date of transaction for late surcharge purposes.`,
    },
    {
      h2: `Easypaisa SNGPL Bill Payment — Step-by-Step for ${city.name}`,
      body: `Easypaisa is the most widely used mobile payment platform in Pakistan and offers a seamless SNGPL bill payment experience for ${city.name} consumers.`,
      subsections: [
        { h3: 'Prerequisite: Active Easypaisa Account', body: `You need an active Easypaisa account linked to your Telenor mobile number. Register at any Telenor franchise or via the Easypaisa app. Maintain sufficient balance in your Easypaisa wallet or link a bank account for direct debit.` },
        { h3: 'Step 1: Open Easypaisa App', body: `Launch the Easypaisa app on your Android or iOS smartphone. Log in with your Easypaisa PIN or biometric authentication.` },
        { h3: 'Step 2: Navigate to Bill Payments', body: `From the main dashboard, tap "Bill Payments." Then select "Utilities" or "Utility Bills" from the category list.` },
        { h3: 'Step 3: Select SNGPL', body: `Scroll through the utility providers and select "Gas." Choose "SNGPL" (Sui Northern Gas Pipelines Limited) from the gas company list.` },
        { h3: 'Step 4: Enter Consumer Number', body: `Type your 10–13 digit SNGPL consumer number exactly as it appears on your bill. Easypaisa will fetch your current bill details automatically from SNGPL's system.` },
        { h3: 'Step 5: Verify and Pay', body: `Review the fetched bill amount, billing period, and due date. If everything matches your bill, tap "Pay" and authorize the payment with your Easypaisa PIN. A confirmation SMS is sent to your registered mobile number immediately.` },
        { h3: 'Save Your Receipt', body: `Screenshot the Easypaisa payment confirmation screen or find the transaction under "My Transactions" in the app. This serves as your payment receipt. Keep it until the payment reflects on SNGPL's system (24–48 hours).` },
      ],
    },
    {
      h2: `JazzCash SNGPL Bill Payment Guide for ${city.name}`,
      body: `JazzCash is available to both Jazz and Warid network users and offers multiple ways to pay your SNGPL gas bill in ${city.name}:

**Via JazzCash App:**
Open the JazzCash app → tap "Pay Bills" → select "Gas Bills" → choose "SNGPL" → enter your consumer number → review the bill details → tap "Pay" → enter your MPIN (mobile PIN) to confirm.

**Via USSD (Feature Phones):**
Dial *786# on your Jazz mobile number → select "Pay Bills" → choose "Gas" → enter consumer number → follow on-screen prompts to confirm payment. This method works on any mobile phone without internet and is ideal for consumers in ${city.name} who do not use smartphones.

**Via JazzCash Website:**
Log in to jazzcash.com.pk with your mobile number and PIN → navigate to "Bill Payments" → "Gas" → "SNGPL" → enter consumer number → complete payment.

A JazzCash transaction fee (typically Rs. 10–20) may apply depending on the payment amount and your account type. Check JazzCash's current fee schedule in their app.`,
    },
    {
      h2: `Internet Banking Payment — HBL, UBL, MCB, and Other Banks for ${city.name}`,
      body: `All major Pakistani banks with operations in ${city.name} support SNGPL bill payment through their internet banking and mobile banking platforms. This is the preferred method for consumers who maintain a bank account and want to pay directly without a separate mobile wallet.

**HBL (Habib Bank Limited) — HBL Mobile App:**
Log in → tap "Pay Bills" → select "Gas" → choose "SNGPL" → enter consumer number → confirm the fetched bill amount → authorize with your HBL PIN or biometric → done.

**UBL (United Bank Limited) — UBL Digital App:**
Log in → "Payments" → "Utility Bills" → "Gas" → "SNGPL" → enter consumer number → review amount → confirm payment.

**MCB (Muslim Commercial Bank) — MCB Mobile:**
Log in → "Bill Payments" → "Gas" → "SNGPL" → consumer number → confirm payment.

**Meezan Bank — Meezan Mobile:**
Log in → "Pay Bills" → "Utilities" → "SNGPL" → consumer number → confirm.

**Allied Bank — ABL Mobile:**
Log in → "Bill Payment" → "Gas" → "SNGPL" → consumer number → confirm.

Internet banking payments are generally free of transaction charges or have minimal fees. Payments are processed within 24–48 hours on SNGPL's side, though your bank account is debited immediately.`,
    },
    {
      h2: `ATM Payment for SNGPL ${city.name} Bills`,
      body: `If you prefer using an ATM rather than a mobile app, you can pay your SNGPL gas bill at any major bank ATM in ${city.name}. The process is similar across all banks:

1. Insert your ATM debit card and enter your PIN.
2. Select "Other Services" or "Bill Payment Services" from the main ATM menu.
3. Choose "Utility Bills" then "Gas" then "SNGPL."
4. Enter your 10–13 digit SNGPL consumer number.
5. The ATM fetches your current bill amount for confirmation.
6. Confirm the amount and complete the transaction.
7. Collect the printed ATM receipt — this is your payment confirmation.

Keep your ATM receipt safe until payment reflects on SNGPL's portal (24–48 hours). ATMs in ${city.name} available for SNGPL payments include those at HBL, UBL, MCB, Allied Bank, Meezan Bank, Bank Alfalah, and most other commercial banks.`,
    },
    {
      h2: `Avoiding Disconnection — What Happens If You Miss the ${city.name} SNGPL Payment Due Date`,
      body: `Understanding SNGPL's disconnection policy helps ${city.name} consumers take timely action:

**After Due Date — Late Surcharge:** A 10% surcharge on the gas consumption amount is added to your next bill. This is automatic once the due date passes.

**After 30 Days Overdue — Disconnection Notice:** SNGPL issues a formal demand notice for outstanding payment. This is mailed to your connection address and may also be recorded in your SNGPL account online.

**After Continued Non-Payment — Physical Disconnection:** SNGPL engineers visit your premises and disconnect the gas supply. This is a formal process and is recorded in their system.

**Reconnection Process:** To restore gas supply after disconnection, you must: (1) Pay all outstanding dues plus late surcharges, (2) Pay the reconnection fee (varies by connection type), (3) Contact SNGPL helpline 1199 or visit ${city.office} with payment proof. Reconnection typically takes 1–3 working days.

**Prevention:** Set a monthly reminder 5 days before your payment due date. Using Easypaisa or JazzCash automatic bill payment (where available) ensures you never miss a payment.`,
    },
    {
      h2: `Payment Confirmation and Receipt — What to Do After Paying in ${city.name}`,
      body: `After paying your SNGPL gas bill in ${city.name}, follow these steps to confirm successful payment:

**Immediate Confirmation:** Easypaisa, JazzCash, and internet banking provide immediate on-screen and SMS confirmation with a transaction reference number. Save this immediately.

**Online Verification:** Wait 24–48 hours, then check billchecker.sngpl.com.pk with your consumer number. If payment has been received, your bill status will show as "Paid" or the outstanding amount will be zero.

**If Payment Is Not Reflected After 48 Hours:** Contact your payment channel (bank, Easypaisa, JazzCash) with the transaction reference number to confirm the payment reached SNGPL's account. Then call SNGPL helpline 1199 with your consumer number and transaction details.

**Keep Receipts:** Retain payment receipts for at least 3 months or until the following bill shows zero arrears. In case of any dispute, your receipt is your primary proof of payment.`,
    },
  ];

  const faqs: FaqItem[] = [
    { q: `How do I pay my SNGPL gas bill online in ${city.name}?`, a: `You can pay online via Easypaisa app (Bill Payments → Gas → SNGPL → enter consumer number), JazzCash app (Pay Bills → Gas → SNGPL), or your bank's mobile app (e.g., HBL, UBL, MCB). All methods are instant and require only your consumer number to fetch the bill amount.` },
    { q: `What is the last date to pay SNGPL bill in ${city.name}?`, a: `The due date is printed on your SNGPL bill — typically 15–20 days after the bill generation date. Check your current bill on billchecker.sngpl.com.pk for your exact due date. A 10% late surcharge is applied if payment is made after the due date.` },
    { q: `Can I pay SNGPL bill through Easypaisa in ${city.name}?`, a: `Yes. Open the Easypaisa app, go to Bill Payments → Utilities → Gas → SNGPL, enter your consumer number, verify the amount, and confirm payment with your PIN. The process takes under a minute and you receive an SMS confirmation immediately.` },
    { q: `Can I pay SNGPL bill via JazzCash USSD code (*786#)?`, a: `Yes. Dial *786# on your Jazz/Warid number → Select Pay Bills → Gas → enter your SNGPL consumer number → follow prompts → confirm payment. This works on any mobile phone without internet access, making it ideal for basic phone users.` },
    { q: `Which banks support SNGPL bill payment in ${city.name}?`, a: `All major Pakistani banks support SNGPL bill payment through their internet banking and mobile apps, including HBL, UBL, MCB, Allied Bank, Meezan Bank, Bank Alfalah, Faysal Bank, and others. Navigate to "Utility Payments" or "Bill Payments" in your bank's app and select SNGPL Gas.` },
    { q: `How long does SNGPL payment take to reflect online?`, a: `Digital payments (Easypaisa, JazzCash, internet banking) typically reflect on SNGPL's system within 24–48 hours. ATM and bank branch payments may take up to 72 hours. If your payment does not show after 48 hours, contact your payment channel with the transaction ID, then call SNGPL helpline 1199.` },
    { q: `What happens if I pay the wrong amount on my SNGPL bill?`, a: `If you overpay, the excess is credited towards your next bill as an advance. If you underpay, the remaining balance becomes an arrear on your next bill, plus the 10% late surcharge if the due date has passed. Contact SNGPL helpline 1199 if you overpay by a significant amount and want a refund.` },
    { q: `Can I pay multiple months of SNGPL bills at once?`, a: `Yes. If you have arrears from previous months, your current bill will show the total outstanding amount including all arrears. Paying this total clears all outstanding dues. You can also make advance payments if you want to pre-pay future bills.` },
    { q: `Is there a fee for paying SNGPL bill via Easypaisa or JazzCash?`, a: `Easypaisa and JazzCash may charge a small transaction fee (typically Rs. 10–25) for utility bill payments. Bank internet banking payments are often free or included in your banking package. Check the fee disclosure shown before confirming your payment in the respective app.` },
    { q: `My SNGPL payment is not reflecting. What should I do?`, a: `Wait 48 hours from payment. If still not reflected: (1) Confirm your transaction was successful in your payment app's history. (2) Call your bank/Easypaisa/JazzCash with the transaction ID to verify they processed it. (3) Call SNGPL helpline 1199 with your consumer number and transaction details — they can manually verify and update.` },
    { q: `Can I get a receipt for my SNGPL payment in ${city.name}?`, a: `Yes. Easypaisa and JazzCash generate a digital receipt accessible under "Transaction History" in your app. Internet banking provides a downloadable transaction confirmation. ATM payments produce a printed receipt. Screenshot or save digital receipts immediately after payment.` },
    { q: `What is the SNGPL helpline number for payment issues?`, a: `SNGPL helpline is 1199 — available 24 hours a day, 7 days a week. For ${city.name} specific issues, you can also visit ${city.office} during working hours (Monday–Friday, 9 AM – 5 PM) with your CNIC and payment receipt.` },
    { q: `Can I pay SNGPL bill at any HBL ATM in ${city.name}?`, a: `Yes. HBL ATMs across ${city.name} support SNGPL bill payment. Insert your card → Other Services → Bill Payment → Gas → SNGPL → enter consumer number → confirm amount → complete transaction. The same process applies at UBL, MCB, and Allied Bank ATMs.` },
    { q: `What is a SNGPL reconnection fee if gas is disconnected in ${city.name}?`, a: `The SNGPL reconnection fee varies by connection type (domestic, commercial, industrial) and may change periodically based on OGRA-approved tariffs. Contact SNGPL helpline 1199 or ${city.office} for the current reconnection fee applicable to your connection type in ${city.name}.` },
    { q: `Can I schedule automatic SNGPL bill payment?`, a: `Some banking apps and Easypaisa offer standing order or auto-pay features for utility bills. Set up auto-payment with your consumer number and a bill cap (maximum amount to auto-pay) to never miss a due date. Check your specific bank's app for this feature.` },
  ];

  const conclusion = `Paying your SNGPL gas bill in ${city.name} is faster and more convenient than ever. With Easypaisa, JazzCash, internet banking, ATMs, and bank branches all supporting SNGPL payments, there is no excuse to miss a due date. Always check your bill on billchecker.sngpl.com.pk before paying to confirm the exact amount, and save your payment receipt until the transaction reflects on SNGPL's system. For any payment issues, the SNGPL helpline at 1199 is available 24/7 and the ${city.office} handles in-person inquiries during working hours.`;

  return { title, metaDescription, h1, intro, sections, faqs, conclusion, howToSteps: [
    { name: 'Check Your Bill Amount', text: `Visit billchecker.sngpl.com.pk and enter your consumer number to confirm the exact bill amount and due date.` },
    { name: 'Choose Your Payment Method', text: `Select Easypaisa, JazzCash, internet banking, ATM, or bank branch based on your preference.` },
    { name: 'Enter Consumer Number', text: `In your chosen payment platform, navigate to Utility Bills → Gas → SNGPL and enter your 10–13 digit consumer number.` },
    { name: 'Verify Amount and Confirm', text: `Review the fetched bill amount matches your bill. Confirm payment with your PIN or authorization method.` },
    { name: 'Save Receipt', text: `Screenshot or save the payment confirmation. Check SNGPL portal after 24–48 hours to verify payment reflection.` },
  ]};
}

// ─── TROUBLESHOOTING CONTENT ─────────────────────────────────────
function troubleshootingContent(city: CityData, type: string): PageContent {
  const typeLabel = getTypeLabel(type);
  const isHighBill = type.includes('high-bill') || type.includes('overcharge') || type.includes('wrong-amount');
  const isDisconnect = type.includes('disconnection') || type.includes('reconnection') || type.includes('gas-disconnected');
  const isMeter = type.includes('meter') || type.includes('reading');
  const isComplaint = type.includes('complaint') || type.includes('helpline') || type.includes('customer-care');
  const isEmergency = type.includes('emergency') || type.includes('leakage');

  const title = `SNGPL ${city.name} — ${typeLabel} | Fix Your Gas Bill Problem 2025`;
  const metaDescription = `Solve SNGPL problems in ${city.name}: ${typeLabel}. Step-by-step solutions for billing disputes, disconnection, meter faults, payment issues, and complaints. Free guide.`;
  const h1 = `SNGPL ${city.name} — ${typeLabel} | Complete Solution Guide`;

  const intro = `Encountering a problem with your SNGPL gas bill or service in ${city.name} can be frustrating — especially when you do not know the right channel to report it. Sui Northern Gas Pipelines Limited serves ${city.consumers} consumers in ${city.name} across ${city.areas}, and billing issues, service interruptions, and complaints are handled through established procedures.

This guide provides specific, actionable solutions for ${city.name} SNGPL consumers facing ${typeLabel.toLowerCase()} issues${isHighBill ? `, including how to dispute an incorrect bill amount, request a meter inspection, and get your bill corrected` : isDisconnect ? `, including immediate steps to restore gas supply and how to handle reconnection fees` : isMeter ? `, including meter fault reporting, reading correction requests, and meter replacement procedures` : isComplaint ? `, including how to register formal complaints, track complaint status, and escalate unresolved issues` : isEmergency ? `, including immediate safety procedures for gas leakage and emergency SNGPL contact information` : ``}.

SNGPL provides multiple resolution channels for ${city.name} consumers: the 24/7 helpline at 1199, online at selfservice.sngpl.com.pk, and in person at ${city.office}. Knowing which channel to use for which type of issue saves time and leads to faster resolution.`;

  const sections: ContentSection[] = [
    {
      h2: `SNGPL ${city.name} Helpline and Contact Information`,
      body: `Before troubleshooting specific issues, here is your complete contact reference for SNGPL ${city.name} customer support:

**SNGPL Helpline:** 1199 — Available 24 hours, 7 days a week. Use for emergencies (gas leakage), billing inquiries, complaint registration, and general assistance.

**SNGPL ${city.name} Service Center:** ${city.office}. Working hours: Monday to Friday, 9 AM – 5 PM (Saturday may be available; confirm locally).

**Online Self-Service:** selfservice.sngpl.com.pk — Register complaints, track status, view account details, apply for services.

**Email:** Available through the selfservice portal contact form.

**WhatsApp:** Official SNGPL WhatsApp number listed on sngpl.com.pk.

**OGRA Complaint Portal:** ogra.org.pk — For escalating unresolved SNGPL complaints to the regulator.

Always note your consumer number and have it ready when calling or visiting. For written complaints, prepare your consumer number, CNIC, and a clear description of the issue with supporting documents (bill copy, payment receipt, meter photo).`,
    },
    {
      h2: `High Gas Bill — How to Dispute an Overcharge in ${city.name}`,
      body: `Receiving an unexpectedly high SNGPL bill is one of the most common complaints from ${city.name} consumers. Here is how to investigate and resolve it:`,
      subsections: [
        {
          h3: 'Step 1: Verify Your Meter Reading',
          body: `Go to your gas meter and note the current reading displayed. Compare it to the reading on your disputed bill. If the current meter reading is lower than what was billed, there is a meter reading error. Take a clear photograph of your meter display with date and time visible.`,
        },
        {
          h3: 'Step 2: Check If Reading is Estimated',
          body: `Look for an "E" next to the meter reading on your bill — this indicates an estimated reading. Estimated readings are used when the meter reader cannot access your property. If your actual consumption is lower than the estimate, you are entitled to a corrected bill based on actual reading.`,
        },
        {
          h3: 'Step 3: Calculate the Expected Bill',
          body: `Use our free SNGPL gas bill calculator to calculate what your bill should be based on actual meter readings. If the calculated amount differs significantly from your billed amount, document the discrepancy.`,
        },
        {
          h3: 'Step 4: File a Complaint',
          body: `Call SNGPL helpline 1199, register a complaint online at selfservice.sngpl.com.pk, or visit ${city.office} in person. Request a "meter inspection" or "bill dispute." SNGPL will send a technician to verify your meter reading and recalculate your bill if necessary.`,
        },
        {
          h3: 'Step 5: Pay Under Protest if Needed',
          body: `If the dispute is not resolved before the due date, consider paying the undisputed portion of the bill (your estimated actual bill amount) "under protest" — note this when registering your complaint. This prevents disconnection while your complaint is processed. SNGPL will credit or refund the disputed amount after resolution.`,
        },
      ],
    },
    {
      h2: `Gas Disconnection and Reconnection in ${city.name}`,
      body: `Gas supply disconnection in ${city.name} can happen due to non-payment, a safety inspection finding, unauthorized connection modification, or theft detection. Here is how to handle it:

**If You Received a Disconnection Notice:**
Act immediately. The notice gives you a specific number of days to pay outstanding dues. Pay the full outstanding amount immediately through any channel (Easypaisa, JazzCash, bank). Call SNGPL helpline 1199 with your payment transaction ID within 24 hours of payment to inform them.

**If Gas Supply Is Already Cut:**
1. Confirm it is an SNGPL disconnection (not a building-level issue or a temporary pressure drop in your area).
2. Check your payment status on billchecker.sngpl.com.pk — if you have unpaid bills, pay them immediately.
3. Call 1199 with your consumer number and payment proof. They will log a reconnection order.
4. Visit ${city.office} if you need to discuss arrears repayment or dispute a wrongful disconnection.

**Reconnection Process:**
After payment confirmation, SNGPL typically reconnects within 1–3 working days. You will need to pay the reconnection fee (amount varies — check with SNGPL helpline for current rates). The reconnection is done by an SNGPL technician who visits your premises during working hours.

**If You Believe Disconnection Was Wrongful:**
If your gas was disconnected despite timely payment, gather your payment receipts and contact ${city.office} or call 1199 to escalate as a priority complaint.`,
    },
    {
      h2: `Meter Fault and Meter Reading Errors in ${city.name}`,
      body: `Gas meter issues are a significant source of billing problems for ${city.name} consumers. Here is how to identify and resolve meter-related issues:

**Signs of a Faulty Meter:**
- Your bill amount is dramatically higher than usual with no change in usage habits
- The meter display is blank, flickering, or shows "ERR" or similar error codes
- The meter dials or digits are not advancing despite active gas usage
- You suspect the meter is running fast (counting more units than actually consumed)

**How to Report a Meter Fault in ${city.name}:**
1. Document the fault: photograph or video the meter showing the fault
2. Note your consumer number and meter number (both on your bill)
3. Call SNGPL helpline 1199 and request a "meter inspection" — describe the specific fault
4. Alternatively, visit ${city.office} with your CNIC and description of the fault
5. SNGPL will schedule a technician visit. You will receive a complaint reference number.

**Meter Inspection Timeline:**
SNGPL typically conducts meter inspections within 7–14 working days of a complaint in ${city.name}. If the inspection confirms a faulty meter, SNGPL replaces it at no cost (for standard domestic meters) and recalculates your bill for the affected billing periods based on your historical average consumption.

**Meter Reading Errors:**
If an SNGPL meter reader recorded a wrong reading, you will see an unusually high units-consumed figure on your bill. Request a re-read by calling 1199 — if the actual reading is lower, your bill will be corrected.`,
    },
    {
      h2: `Payment Not Reflecting on SNGPL System After Paying in ${city.name}`,
      body: `After paying your SNGPL bill, it can take 24–48 hours for the payment to appear on the SNGPL portal. Here is what to do if it takes longer:

**Wait the Standard Processing Period:** Digital payments (Easypaisa, JazzCash, internet banking) take 24–48 hours. ATM and bank branch payments may take 48–72 hours. Do not panic if you just paid today.

**Verify with Your Payment Channel:** If 48 hours have passed, open your payment app's transaction history and confirm the payment shows as "Successful" or "Completed." If it shows "Pending" or "Failed," the payment may not have reached SNGPL.

**Call Your Bank:** For bank branch or internet banking payments, call your bank's helpline with the transaction reference number and ask for confirmation that the SNGPL payment was forwarded.

**Contact SNGPL Helpline:** Call 1199 with: your consumer number, the payment amount, the payment date, the transaction reference number, and the payment channel used. The representative can manually check and update your payment status.

**Raise a Formal Complaint:** If 72 hours have passed and payment still is not reflected despite successful transaction from your end, register a formal complaint on selfservice.sngpl.com.pk with your transaction receipt attached. Reference number is provided for tracking.`,
    },
    {
      h2: `How to Register a Formal SNGPL Complaint in ${city.name}`,
      body: `For billing disputes, service quality issues, or unresolved problems that are not addressed by a helpline call, you should file a formal written complaint:`,
      subsections: [
        {
          h3: 'Online Complaint Registration',
          body: `Visit selfservice.sngpl.com.pk and register/log in. Navigate to "Complaints" or "Service Request." Fill in: your consumer number, type of complaint (billing dispute / meter fault / disconnection / gas supply / other), detailed description of the issue, and attach supporting documents (bill copy, payment receipt, meter photo). Submit to receive a complaint reference number for tracking.`,
        },
        {
          h3: 'Phone Complaint via 1199',
          body: `Call SNGPL helpline 1199, provide your consumer number and CNIC, describe your complaint clearly. The representative logs the complaint and provides a reference number. Follow up using this number if not resolved within the stated timeframe.`,
        },
        {
          h3: 'In-Person Complaint at ${city.office}',
          body: `Visit ${city.office} with your CNIC, consumer number, and any supporting documents (bill, meter photos, payment receipts). Request a written complaint form or give your complaint to the customer service officer directly. Obtain a written acknowledgment with a reference number.`,
        },
        {
          h3: 'Escalation to OGRA',
          body: `If SNGPL fails to resolve your complaint within a reasonable timeframe (typically 14 working days), escalate to the Oil and Gas Regulatory Authority (OGRA) at ogra.org.pk or their helpline. OGRA is the independent regulator and can compel SNGPL to resolve valid consumer complaints.`,
        },
      ],
    },
    {
      h2: `Gas Leakage Emergency — Immediate Steps for ${city.name} Consumers`,
      body: `A gas leakage is a life-threatening emergency. If you smell gas at your premises in ${city.name}, follow these steps immediately:

**Immediate Safety Steps:**
1. Do NOT switch any electrical switches ON or OFF — sparks can ignite gas
2. Do NOT use mobile phones inside the affected building
3. Open all windows and doors to ventilate
4. Evacuate everyone from the building immediately
5. Turn off the gas meter supply valve if accessible and safe to do so (the valve is near your meter)
6. Move at least 100 meters away from the building

**After Evacuating:**
Call SNGPL emergency helpline 1199 from outside or a distance away. Report the leakage location, your consumer number if available, and full address. SNGPL emergency teams are available 24/7 and respond to gas emergencies as a priority.

Do NOT re-enter the building until SNGPL's emergency team has inspected, confirmed safety, and given clearance. Gas leakages in ${city.name} should also be reported to local fire services if SNGPL response is delayed.`,
    },
  ];

  const faqs: FaqItem[] = [
    { q: `How do I contact SNGPL helpline for ${city.name}?`, a: `Call SNGPL helpline 1199 — available 24/7 for emergencies, billing inquiries, and complaints. For in-person assistance, visit ${city.office} during Monday to Friday working hours (9 AM – 5 PM). Online: selfservice.sngpl.com.pk for formal complaints and service requests.` },
    { q: `My SNGPL bill amount is wrong in ${city.name}. What should I do?`, a: `First, compare your meter display reading to the billed reading. If there's a discrepancy, call SNGPL helpline 1199 or visit ${city.office} to request a meter inspection. If the reading is estimated (marked "E" on bill), request an actual read correction. File a formal billing dispute on selfservice.sngpl.com.pk for documented resolution.` },
    { q: `How do I register an SNGPL complaint in ${city.name}?`, a: `Register online at selfservice.sngpl.com.pk (most efficient for documentation), call 1199 to log a phone complaint, or visit ${city.office} in person. Always get a complaint reference number and note the resolution deadline given by SNGPL.` },
    { q: `My SNGPL payment is not showing online. What should I do?`, a: `Wait 24–48 hours after payment. If still not reflecting: check your payment app's transaction history to confirm payment was "Successful," call your bank/Easypaisa/JazzCash for confirmation, then call SNGPL helpline 1199 with your transaction reference number and consumer number.` },
    { q: `How do I get my gas reconnected after SNGPL disconnection in ${city.name}?`, a: `Pay all outstanding dues immediately through any payment channel. Call SNGPL helpline 1199 with your consumer number and payment transaction ID. Reconnection is typically processed within 1–3 working days after payment confirmation. A reconnection fee also applies — check the current amount with SNGPL.` },
    { q: `What do I do if my gas meter is faulty in ${city.name}?`, a: `Call SNGPL helpline 1199 and describe the fault (blank display, error code, suspected fast running). Request a "meter inspection." Alternatively, visit ${city.office} with a photo or video of the faulty meter. SNGPL will schedule a technician visit and replace the meter if confirmed faulty.` },
    { q: `Why is my SNGPL gas bill high in winter in ${city.name}?`, a: `Gas consumption increases significantly in winter due to heating appliances, hot water, and cooking needs. ${city.name}'s winter months (November–February) often push households into higher billing slabs because usage exceeds 100–300 HHM. Check our bill calculator to see how slabs affect winter bills and consider energy-saving measures.` },
    { q: `How long does SNGPL take to resolve a complaint in ${city.name}?`, a: `Standard billing disputes are typically resolved within 7–14 working days. Meter inspection requests may take 7–14 days for the technician visit. Emergency gas leakages are addressed within hours (24/7 emergency response). Track your complaint status using your reference number on selfservice.sngpl.com.pk.` },
    { q: `What happens if SNGPL does not resolve my complaint?`, a: `If SNGPL fails to resolve within the stated timeframe, escalate to OGRA (Oil and Gas Regulatory Authority) at ogra.org.pk. OGRA is the independent regulator with authority to intervene in unresolved consumer disputes and can compel SNGPL to take corrective action.` },
    { q: `What is a demand notice from SNGPL in ${city.name}?`, a: `A demand notice is a formal written notice from SNGPL demanding payment of overdue bills or amounts related to detected violations (unauthorized use, meter tampering, etc.). For overdue bill notices, pay immediately to avoid disconnection. For violation notices, consult with SNGPL at ${city.office} before paying, especially if you believe the notice is incorrect.` },
    { q: `Can I get a refund from SNGPL for an overcharged bill in ${city.name}?`, a: `Yes. If a billing dispute is resolved in your favor (meter was faulty, reading was incorrect), SNGPL issues a credit adjustment on your next bill or processes a refund. The adjustment is documented on your bill statement. If you want a cash refund rather than a bill credit, request it specifically when filing your complaint at ${city.office}.` },
    { q: `How do I report low gas pressure in ${city.name}?`, a: `Call SNGPL helpline 1199 and report low gas pressure at your address. Provide your consumer number, full address, and description of the pressure issue (when it started, time of day when worst, which appliances are affected). SNGPL may investigate an area-wide pressure issue or schedule a field visit for your specific connection.` },
    { q: `What should I do if there is a gas emergency or leakage in ${city.name}?`, a: `Immediately evacuate the building, do not use electrical switches or phones inside, ventilate by opening windows, and call SNGPL emergency helpline 1199 from outside. SNGPL emergency teams are available 24/7. Do not re-enter until SNGPL confirms safety clearance.` },
    { q: `How do I track my SNGPL complaint status in ${city.name}?`, a: `Log in to selfservice.sngpl.com.pk with your registered account and go to "My Complaints" to see status updates and expected resolution dates. Alternatively, call SNGPL helpline 1199 and provide your complaint reference number for a status update.` },
    { q: `Is there a way to dispute an SNGPL bill without visiting the office in ${city.name}?`, a: `Yes. File your dispute online at selfservice.sngpl.com.pk with a detailed description and attached supporting documents (meter photo, previous bills, payment receipts). You can also call 1199 to initiate a phone complaint. In-person visits are recommended only for complex cases requiring document review or when online/phone resolution fails.` },
  ];

  const conclusion = `Resolving SNGPL service issues in ${city.name} is straightforward when you know the right channels and steps. For billing disputes, gather your evidence and file through selfservice.sngpl.com.pk or 1199. For disconnection, immediate payment and a follow-up call to 1199 is the fastest path to reconnection. For meter problems, document and report — SNGPL is obligated to inspect and correct. For gas emergencies, evacuate first and call 1199 from a safe distance. The ${city.office} handles all in-person matters during business hours. Stay proactive: check your bill every month on billchecker.sngpl.com.pk and act on any irregularity immediately rather than waiting.`;

  return { title, metaDescription, h1, intro, sections, faqs, conclusion };
}

// ─── MASTER GENERATOR ────────────────────────────────────────────
export function generatePageContent(
  category: Category,
  city: CityData,
  type: string
): PageContent {
  switch (category) {
    case 'bill-check':       return billCheckContent(city, type);
    case 'consumer-number':  return consumerNumberContent(city, type);
    case 'duplicate-bill':   return duplicateBillContent(city, type);
    case 'payment':          return paymentContent(city, type);
    case 'troubleshooting':  return troubleshootingContent(city, type);
    default:                 return billCheckContent(city, type);
  }
}
