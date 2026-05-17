// ─────────────────────────────────────────────────────────────────
// lib/type-sections.ts
// Solves duplicate-content SEO problem for programmatic SNGPL pages.
// Each city+category page calls getTypeFocusSection() to get a
// type-specific H2 section, ensuring unique first-section content
// across all slug variants for the same city/category combination.
// ─────────────────────────────────────────────────────────────────

import type { CityData } from './seo-data';

export interface ContentSection {
  h2: string;
  body: string;
  subsections?: { h3: string; body: string }[];
}

type BucketDef = { key: string; matches: string[] };

function classify(type: string, buckets: BucketDef[]): string {
  for (const b of buckets) {
    if (b.matches.some((m) => type.includes(m))) return b.key;
  }
  return 'default';
}

// ─────────────────────────────────────────────────────────────────
// bill-check
// ─────────────────────────────────────────────────────────────────

function billCheckFocus(type: string, city: CityData): ContentSection {
  const buckets: BucketDef[] = [
    { key: 'app',         matches: ['via-app', 'android', 'iphone'] },
    { key: 'messaging',   matches: ['via-sms', 'via-whatsapp'] },
    { key: 'dispute',     matches: ['high-bill', 'arrears', 'outstanding', 'overdue', 'unpaid'] },
    { key: 'residential', matches: ['residential', 'domestic'] },
    { key: 'commercial',  matches: ['commercial', 'industrial'] },
    { key: 'meter',       matches: ['meter-reading', 'billing-cycle', 'consumption-bill'] },
    { key: 'download',    matches: ['download-bill', 'get-bill-copy', 'get-gas-bill', 'monthly-gas'] },
    { key: 'history',     matches: ['previous-bill', 'last-month', 'current-month', '2024', '2025', 'quarterly'] },
    { key: 'month',       matches: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'] },
  ];

  const bucket = classify(type, buckets);

  const sections: Record<string, ContentSection> = {

    app: {
      h2: `How to Check SNGPL ${city.name} Bill via Mobile App`,
      body: `The SNGPL Consumer App is the fastest and most reliable way for ${city.name} gas consumers to check their monthly bill without visiting any office or website. The app is available on both the Google Play Store (Android) and the Apple App Store (iPhone/iOS) — search for "SNGPL" and install the official app published by Sui Northern Gas Pipelines Limited.

Once installed, registration takes under three minutes. Open the app and tap "Register," then enter your SNGPL consumer number (printed on any previous gas bill or your meter connection card). The app will send a one-time password (OTP) to your registered mobile number for verification. After entering the OTP, your account is active and your ${city.name} connection is linked.

The home screen immediately displays your current bill as soon as it is generated — typically 2–3 days after your meter reading date. You can see the total amount due, the due date, your current consumption in HHM (hundred cubic meters), and the billing period at a glance.

Beyond the current bill, the SNGPL app stores a full 12-month billing history under the "Bill History" tab. This lets ${city.name} consumers in areas like ${city.areas} review consumption trends and spot anomalies without requesting records from ${city.office}.

The app also supports push notifications: you receive an alert the moment your new bill is ready and a reminder 3 days before the due date, eliminating the problem of missed or delayed postal delivery — a common issue across ${city.name} localities.

The offline mode lets you view your last downloaded bill without an active internet connection, which is useful in areas with patchy data coverage. If you manage multiple gas connections — such as a home and a shop — you can register up to five consumer numbers under one app account and switch between them instantly.

Compared to the web portal, the app is significantly faster, supports bill downloads in one tap, and does not require re-entering your consumer number on every visit. For ${city.name} consumers, the app is the recommended primary channel for bill checking.`,
    },

    messaging: {
      h2: `Check SNGPL ${city.name} Bill via WhatsApp and SMS`,
      body: `SNGPL offers two messaging-based channels for consumers in ${city.name} who want to check their gas bill without opening a browser or downloading an app: WhatsApp and SMS. Both channels are official, free to use (standard messaging rates apply), and available 24 hours a day.

To use WhatsApp, first save the official SNGPL WhatsApp number listed on sngpl.com.pk — do not use any number found on third-party websites. Once saved, open a new WhatsApp chat, type your consumer number (digits only, no spaces or dashes), and send it. The automated SNGPL system responds within seconds with a message containing: your current bill amount, the due date, the billing period (month and year), and a PDF download link for the complete bill document.

The WhatsApp channel is ideal for consumers in ${city.name} who prefer a conversational interface or are already active WhatsApp users. Areas like ${city.areas} with good mobile data connectivity will find the PDF download via WhatsApp just as functional as the web portal. However, an important limitation: WhatsApp only returns your current bill. If you need a previous month's bill, you must use the app or visit ${city.office}.

The SMS method does not require internet access and works on any mobile phone, including basic feature phones. Send your consumer number as a text message to the SNGPL SMS short code (available on sngpl.com.pk). The system responds with a plain-text SMS containing the bill amount and due date — no PDF, but sufficient for confirming what you owe before making a payment.

A critical security note for all ${city.name} consumers: SNGPL will never ask for your CNIC, bank account details, or password over WhatsApp or SMS. Never share personal financial information with any number claiming to be SNGPL unless you have verified it directly on the official website. Several fraudulent WhatsApp accounts impersonate SNGPL — always verify by checking sngpl.com.pk for the current official number.`,
    },

    dispute: {
      h2: `Investigating a High or Disputed SNGPL Bill in ${city.name}`,
      body: `Receiving an unusually high SNGPL gas bill is one of the most common concerns among consumers in ${city.name}. Before filing a formal complaint, a structured five-step self-investigation can quickly identify whether the high amount is due to an error, an estimated reading, accumulated arrears, or actual increased consumption.

Step 1 — Read your physical gas meter: Walk to your meter and note the current reading (the digits before the decimal point on the meter display). Compare this to the "Current Reading" printed on your bill. If your meter shows a lower number than what was billed, you have clear evidence of a billing error and should proceed directly to Step 5.

Step 2 — Check for the E flag: Look at the "Reading Type" field on your bill. If it shows "E" (Estimated), SNGPL used a computer-generated estimate rather than an actual reading. Estimated readings can be significantly higher than actual consumption, especially in areas of ${city.name} where meter readers occasionally miss routes. When the actual reading is taken the following month, any over-billing is reversed — but you can also submit your own reading via the app to correct it sooner.

Step 3 — Review the arrears line: The "Arrears" figure on your bill represents amounts carried forward from previous bills. If there were missed or partial payments from a previous address at ${city.areas} or a previous tenant, these accumulate automatically. Verify this by checking your payment history on the app or portal.

Step 4 — Recalculate using the official calculator: Visit the SNGPL bill calculator at /calculator and manually enter your opening reading, closing reading, and connection type. Compare the calculated figure to your billed amount.

Step 5 — File a dispute: If your investigation reveals an error, call SNGPL helpline 1199 (available 24/7) or log into selfservice.sngpl.com.pk. Request both a "Meter Inspection" and a "Bill Review." Take a clear photograph of your meter display with the date visible — this is your primary evidence.

Important: if the bill remains unpaid while a dispute is in progress, SNGPL may still issue a disconnection notice. To prevent disconnection, pay the undisputed portion of the bill and note "paid under protest" on your payment reference. Disputes are typically resolved within 15–30 working days. You may also escalate to ${city.office} in person if the helpline response is unsatisfactory.`,
    },

    residential: {
      h2: `SNGPL Residential Gas Bill Guide for ${city.name} Households`,
      body: `Domestic gas consumers in ${city.name} are billed under the SNGPL residential tariff, which uses a slab-based progressive structure. Understanding how these slabs work is essential for managing your monthly gas bill, particularly during the winter heating months when consumption in ${city.name} households typically peaks.

The current domestic tariff slabs are structured as follows: the first 0–100 HHM (hundred cubic meters) is charged at a flat rate of Rs. 200 per month regardless of exact consumption within this range; consumption between 101–300 HHM is charged at Rs. 130 per HHM; from 301–500 HHM the rate rises to Rs. 150 per HHM; between 501–800 HHM the rate is Rs. 170 per HHM; from 801–1,200 HHM the rate increases to Rs. 200 per HHM; and consumption above 1,200 HHM attracts the highest slab rate of Rs. 250 per HHM.

In practice, a typical household in ${city.name}'s residential areas such as ${city.areas} consuming around 200–350 HHM monthly will fall into the second or third slab, resulting in a bill of approximately Rs. 1,500–3,500 before taxes. During winter months (November–February), consumption for heating can push many ${city.name} households into the fourth or fifth slab, significantly increasing the monthly amount.

Two taxes are added on top of the base gas charge. GIDC (Gas Infrastructure Development Cess) adds 10% to the pre-tax amount, and GST (General Sales Tax) at 17% is applied to the combined base plus GIDC. These are mandatory government levies and cannot be disputed as billing errors.

A critical issue for ${city.name} consumers is ensuring their connection is correctly classified as "Domestic" rather than "Commercial." Misclassification — which sometimes occurs when a residential property is near a commercial area in ${city.name} — results in a 30–50% higher tariff. If you suspect your connection type is incorrect, bring your property documents, CNIC, and latest bill to ${city.office} and request a tariff category review. The correction applies from the review date onward, not retroactively.`,
    },

    commercial: {
      h2: `SNGPL Commercial and Industrial Gas Bill Guide — ${city.name}`,
      body: `Businesses and industrial consumers in ${city.name} are billed under separate commercial and industrial tariff structures that differ significantly from the residential rate. Understanding these tariffs is important for accurate financial planning and for ensuring your connection is correctly categorized, as misclassification can mean paying the wrong rate for months or years.

The commercial tariff applies to shops, restaurants, bakeries, laundries, hotels, and other service establishments. The per-HHM rate under the commercial tariff is 30–50% higher than the corresponding residential slab. Unlike the domestic tariff, there is no flat Rs. 200 base — all consumption is billed at the applicable rate from the first HHM. Commercial consumers are also required to have a valid NTN (National Tax Number) on file with SNGPL, and the bill serves as a GST invoice that can be used for input tax adjustment.

Industrial consumers — including factories, processing plants, and manufacturing units in ${city.name}'s industrial zones — are billed on a separate industrial tariff that includes a Daily Contract Quantity (DCQ). The DCQ is the maximum daily volume of gas you are contractually entitled to, and consumption above the DCQ is penalized with significantly higher rates. Industrial consumers must monitor their daily consumption carefully, particularly during winter when gas pressure and availability can vary across ${city.province}.

Both commercial and industrial consumers in ${city.name} are subject to demand charges — a fixed monthly fee based on your contracted capacity, payable even if you consume no gas. This is separate from the volumetric charge and cannot be avoided by reducing consumption.

If you believe your ${city.name} business has been misclassified as commercial when it should be residential (or vice versa), the dispute must be resolved at ${city.office}. Bring your business registration documents, property title or lease agreement, and a description of your gas usage. Tariff reclassification requests are reviewed by the Revenue and Billing department and typically take 3–6 weeks to process.`,
    },

    meter: {
      h2: `Understanding Your SNGPL Meter Reading and Billing Cycle in ${city.name}`,
      body: `Your SNGPL gas bill in ${city.name} is calculated from the difference between two consecutive meter readings, measured in HHM (hundred cubic meters, or 100 m³). Understanding how meter reading works and when your billing cycle falls helps you verify every bill yourself and catch errors before they compound.

A gas meter measures the volume of gas passing through it by rotating internal gears. The display shows a series of digits — the whole number portion (before the decimal point) represents the cumulative consumption in HHM from the day the meter was installed. Each billing period, the SNGPL meter reader records your current reading and subtracts the previous month's reading to get the monthly consumption figure.

Meter readers in ${city.name} operate on fixed routes, meaning the same technician reads the same group of meters each month. Reading circuits are designed to cover specific sub-areas — for example, one circuit might cover part of ${city.areas} on a specific day each month. Your reading date (the day the meter reader visits your address) stays approximately the same each month, usually varying by only 1–2 days.

If the meter reader cannot access your meter on the scheduled day — due to a locked gate, absent occupant, or weather — SNGPL generates an "Estimated" reading, marked with an "E" flag on your bill. Estimated readings use your historical average consumption and can be significantly higher or lower than your actual usage. Consecutive estimated readings cause large bill swings when the next actual reading corrects the accumulated estimate.

To avoid estimated readings, ensure your meter is accessible on reading day or submit your own meter reading via the SNGPL app before your reading date. The self-submission feature under "Meter Reading" in the app allows you to enter the current digits and upload a photo of the meter display.

To read your own meter: stand in front of the meter and read the digits from left to right up to (but not including) the decimal point. If your current display shows 1,245 and last month's bill showed 1,198, your consumption this month is 47 HHM — you can then apply the tariff slabs manually to verify your billed amount before the bill arrives. For the exact meter location and reading schedule in ${city.name}, contact ${city.office}.`,
    },

    download: {
      h2: `Downloading and Saving Your SNGPL ${city.name} Gas Bill`,
      body: `${city.name} gas consumers can download a complete PDF copy of their current bill within seconds using the SNGPL web portal or mobile app. This digital bill is legally equivalent to the original printed bill for all purposes including payments, address verification, and record-keeping.

Using the web portal (billchecker.sngpl.com.pk): open the site in any browser, enter your consumer number in the search field, and click the "Get Bill" button. When your bill loads, look for the "Download PDF" or "Print Bill" button — typically located at the top right of the bill display. Clicking it generates a formatted PDF with the SNGPL header, your consumer details, meter readings, charge breakdown, taxes, and total. Save the file using your browser's save dialog. On mobile browsers, use the Share button and select "Save to Files" (iOS) or "Download" (Android).

Using the SNGPL mobile app: after logging in with your ${city.name} consumer number, the home screen shows your current bill with a download icon (cloud/arrow symbol). Tap it to save the bill to your device's Downloads folder. For previous bills, go to "Bill History," select the month you need, and tap the download icon on that entry. The app retains 12 months of downloadable bills — far more accessible than requesting records from ${city.office}.

If the portal's download button is missing or greyed out (this can happen during high-traffic periods), use the browser's built-in Print function and select "Save as PDF" as the printer destination. This produces an identical document.

For organized record-keeping, adopt a consistent file naming convention such as SNGPL_[ConsumerNumber]_YYYY_MM.pdf (for example, SNGPL_1234567890_2025_03.pdf). Store bills in a dedicated folder — either on your device or in cloud storage like Google Drive or iCloud — organized by year. This archive is invaluable for tax filings, rental disputes, and bill anomaly detection for your ${city.name} property.`,
    },

    history: {
      h2: `Accessing Past SNGPL Bill History for ${city.name} Accounts`,
      body: `Reviewing your SNGPL bill history is essential for identifying consumption anomalies, preparing tax filings, resolving landlord-tenant disputes, and tracking seasonal gas usage patterns in ${city.name}. Different channels offer different levels of historical access, so understanding which tool to use for each situation saves significant time.

The SNGPL mobile app provides the most convenient historical access: the "Bill History" section stores the last 12 months of bills for your ${city.name} consumer number, each downloadable as a PDF. You can scroll through monthly entries, compare consumption figures across the year, and spot irregularities — for example, a spike in one month that coincides with a suspected meter reading error or an unusual estimated reading period.

The web portal at billchecker.sngpl.com.pk is primarily designed for the current bill and does not offer a history view for most consumer accounts. If you need the current bill plus want to compare it to the previous month, use the app.

For bills older than 12 months — such as records needed for a 24-month consumption audit, a property sale, or a multi-year tax filing — you must visit ${city.office} in person. Bring your CNIC, consumer number, and a written request specifying the months required. There may be a nominal printing fee for certified copies. Requests typically take 3–5 working days to process.

Year-on-year comparison is a powerful tool for ${city.name} consumers. If your March 2025 bill is 40% higher than March 2024 with no change in household size, it signals either a tariff increase, an accumulation of arrears, a meter issue, or a billing error — all of which are worth investigating using the dispute process described in our billing dispute guide.

Best practice: download your bill each month immediately upon receiving the app notification. Do not rely on postal delivery, which is unreliable across many ${city.name} localities including parts of ${city.areas}. A self-maintained 12-month archive costs nothing and protects you in any future dispute with SNGPL.`,
    },

    month: {
      h2: `Monthly SNGPL Gas Bill Guide for ${city.name} — Reading Your Bill`,
      body: `Understanding how the monthly billing cycle works in ${city.name} helps you anticipate when your bill will be ready, verify the figures, and pay on time without incurring the 10% late surcharge. SNGPL issues gas bills on a calendar-month cycle, but your specific reading date — the day your meter is physically read — determines exactly when in the month your bill is generated.

After the meter reader visits your address in ${city.name}, SNGPL's billing system processes the reading within 2–3 working days. The bill is then generated electronically and simultaneously made available on the portal (billchecker.sngpl.com.pk) and the mobile app. For consumers in ${city.areas}, this means you can check your bill online well before the printed copy arrives by post.

Postal delivery of the printed bill takes an additional 5–10 working days across ${city.name}, and can be unreliable in some localities. Missing a postal bill is one of the most common reasons for late payments and subsequent disconnection notices. Setting up the SNGPL app push notifications completely eliminates this risk — you receive an alert the moment your bill is generated each month, irrespective of postal service reliability.

Seasonal consumption patterns vary significantly in ${city.name} throughout the year. Gas usage for cooking and water heating remains relatively stable year-round, but space heating in winter (November through February) can triple or quadruple consumption for households in ${city.name}. Comparing your current month's bill to the same month last year provides a meaningful benchmark: a November 2025 bill that is 15% higher than November 2024 with no household change is worth investigating, while a 30–40% increase during an unusually cold winter is expected.

Use the bill's "Consumption" field each month to track your usage trend. Consistent readings from the same meter reader following the same route through ${city.areas} provide reliable month-to-month data. Any month where the reading is flagged as "Estimated (E)" should be treated with caution and verified against your physical meter.`,
    },

    default: {
      h2: `Complete SNGPL Gas Bill Guide for ${city.name} Consumers`,
      body: `SNGPL serves ${city.consumers} gas consumers in ${city.name} across the areas of ${city.areas}, making it one of the most important utility services in the city. Whether you need to check your current bill, review past payments, dispute an incorrect amount, or simply understand what each line on your bill means, this guide covers everything you need as a ${city.name} consumer.

The single most important piece of information every SNGPL consumer in ${city.name} must have is their consumer number — the unique identifier (typically 10–13 digits) printed on every gas bill and on the connection card issued when your gas was first installed. Your consumer number is the key to every digital channel: the web portal at billchecker.sngpl.com.pk, the SNGPL mobile app, WhatsApp inquiries, SMS balance checks, online complaint filing, and over-the-counter payments at banks and mobile wallets like Easypaisa and JazzCash.

To check your current bill, the fastest method is the official portal: open billchecker.sngpl.com.pk, enter your consumer number, and your current bill appears within seconds — showing the billing period, meter readings, consumption in HHM, tariff charges, GIDC, GST, any arrears, and the total amount due with the due date clearly marked.

For a richer experience including 12-month bill history and push notifications, download the SNGPL Consumer App from the Play Store or App Store. The app stores your consumer number permanently and notifies you as soon as each month's bill is generated — eliminating the problem of late or missing postal bills that affects many areas across ${city.name}.

For in-person assistance, ${city.office} handles billing inquiries, connection transfers, meter inspections, complaint submissions, and certified duplicate bill requests. Office hours are Monday to Friday, 9 AM to 5 PM. For urgent issues including gas leakages and disconnection emergencies, call the 24/7 helpline on 1199 — the call is free from any Pakistani network and connects you to a live agent for ${city.region} accounts.`,
    },
  };

  return sections[bucket] ?? sections.default;
}

// ─────────────────────────────────────────────────────────────────
// consumer-number
// ─────────────────────────────────────────────────────────────────

function consumerNumberFocus(type: string, city: CityData): ContentSection {
  const buckets: BucketDef[] = [
    { key: 'format',   matches: ['format', 'digit', 'meaning', 'region', '10-digit', '11-digit', '12-digit', 'connection-id'] },
    { key: 'recover',  matches: ['lost', 'recover', 'recovery'] },
    { key: 'digital',  matches: ['app', 'online', 'sms', 'whatsapp', 'lookup'] },
    { key: 'transfer', matches: ['transfer', 'change', 'update', 'new-connection', 'registration'] },
    { key: 'verify',   matches: ['verify', 'check', 'status', 'account', 'id', 'billing-account'] },
  ];

  const bucket = classify(type, buckets);

  const sections: Record<string, ContentSection> = {

    format: {
      h2: `Understanding the SNGPL Consumer Number Format in ${city.name}`,
      body: `Every SNGPL gas consumer in ${city.name} is assigned a unique consumer number at the time their connection is established. This number — typically 10 to 13 digits long — is not arbitrary: its structure encodes geographic and administrative information that SNGPL uses to route billing, dispatch field teams, and manage the ${city.consumers} accounts across ${city.name}.

The first two to three digits of the consumer number represent the regional zone code. For ${city.name} consumers, this prefix corresponds to the ${city.region} billing zone within SNGPL's operational territory. This regional prefix is why two consumer numbers from different cities — say, ${city.name} and another ${city.province} city — will have visibly different starting digits even if the account numbers appear otherwise similar.

The middle segment of the consumer number encodes the distribution circle code — a more granular identifier that corresponds to the specific billing circle within ${city.name}. Each billing circle covers a group of streets or localities and is served by a dedicated team of meter readers and billing officers. For consumers in ${city.areas}, the distribution circle code in your consumer number identifies exactly which local SNGPL service circuit manages your account.

The final digits form the sequential account number — a unique identifier assigned in order of connection. This segment ensures no two accounts within the same region and circle share an identical consumer number.

An important distinction: your consumer number is not the same as your meter number. The meter number is a serial number stamped on the physical meter and identifies the hardware device. The consumer number identifies your account in SNGPL's billing system. If your meter is replaced, your consumer number stays the same. Always use the consumer number — not the meter number — when making payments via Easypaisa, JazzCash, bank portals, or when calling 1199.

If you are unsure how many digits your consumer number has, count them carefully from your printed bill — leading zeros must be included when entering it into any digital system.`,
    },

    recover: {
      h2: `How to Recover a Lost SNGPL Consumer Number in ${city.name}`,
      body: `Losing track of your SNGPL consumer number is a common problem in ${city.name}, especially for tenants who moved in after bills were set up by a previous occupant, for property owners who haven't seen a paper bill in years, or for anyone whose bills are delivered by post and have gone missing. Fortunately, there are five reliable ways to recover your consumer number without leaving home.

Option 1 — Check Easypaisa or JazzCash transaction history (fastest): If you have ever paid your SNGPL bill through Easypaisa or JazzCash, your consumer number was entered at the time of payment. Open the app, go to Transaction History, find any past SNGPL payment, and the consumer number used will be visible in the transaction details. This requires no phone call and works at any time of day.

Option 2 — SNGPL mobile app (if previously registered): Open the SNGPL Consumer App. If you registered your account at any point, the app stores your consumer number permanently under your profile. Even if you no longer remember the number, the app displays it clearly on the home screen.

Option 3 — Call SNGPL helpline 1199 (24/7): Provide the agent with your CNIC number and your full property address in ${city.name}, including street, area (such as one of the localities in ${city.areas}), and house number. The agent will verify your identity and provide your consumer number. Keep a pen ready.

Option 4 — Self-service portal (selfservice.sngpl.com.pk): Log in or create an account with your CNIC. The portal allows you to look up linked consumer numbers associated with your CNIC on record.

Option 5 — Visit ${city.office} in person: Bring your original CNIC and any document proving your address (property tax receipt, rent agreement, recent utility bill). Counter staff will retrieve your consumer number from the system while you wait. Office hours are Monday to Friday, 9 AM to 5 PM.

Once recovered, save your consumer number in at least two places — your phone contacts, a notes app, and a photograph of your meter card — to avoid needing to repeat this process.`,
    },

    digital: {
      h2: `Managing Your SNGPL Consumer Number Online in ${city.name}`,
      body: `SNGPL's digital ecosystem gives ${city.name} consumers multiple online tools to manage their consumer number, check account status, and handle service requests without visiting an office. Understanding what each channel offers helps you choose the right tool for each task.

The primary online management portal is selfservice.sngpl.com.pk. After registering with your consumer number and CNIC, the portal provides access to your full account profile, the current bill and billing history, complaint filing with attachment support, contact detail updates (mobile number, email), and request submission for services like meter inspections and connection transfers. This portal is the most feature-complete digital option for ${city.name} consumers and is recommended for anything that requires documentation or a formal request.

The SNGPL mobile app (available on Android and iOS) stores your consumer number permanently after initial registration, meaning you never need to re-enter it. The app is the fastest channel for checking the current bill, downloading PDFs, and receiving push notifications. It also supports multiple consumer numbers under one account, making it useful for property owners in ${city.name} who manage connections across multiple addresses in ${city.areas}.

WhatsApp inquiry allows you to send your consumer number to the official SNGPL WhatsApp number (listed on sngpl.com.pk) and receive immediate confirmation of your account status — whether the connection is active, the current amount due, and the due date. This is useful for quickly verifying that a consumer number is valid and active before making a payment.

The SMS account inquiry method (short code on sngpl.com.pk) works on feature phones without data connectivity, returning a text response with the account name and current outstanding balance.

Security note: your consumer number and CNIC together can access your full account. Never share your consumer number with anyone who contacts you unsolicited claiming to be SNGPL. Always initiate contact through official channels. The app and selfservice portal are both protected by authentication, so ensure you use a strong password for your ${city.name} SNGPL online account.`,
    },

    transfer: {
      h2: `SNGPL Connection Transfer and Consumer Number Changes in ${city.name}`,
      body: `An SNGPL consumer number in ${city.name} is tied to a specific property address — not to the individual person. This means when ownership or tenancy of a property changes, the consumer number remains the same, but the account holder name must be updated through a formal transfer process. Understanding this is important for both buyers and sellers, as well as landlords and tenants across ${city.name}'s residential and commercial areas.

For property sales: when a property in ${city.areas} or anywhere in ${city.name} changes hands, the seller and buyer must both visit ${city.office} to complete a connection transfer. Required documents are: both parties' original CNICs, the property transfer or sale deed, the latest paid SNGPL gas bill for the property, and a completed SNGPL transfer application form (available at the office). The new owner's name and CNIC are recorded against the existing consumer number. The process typically takes 2–4 weeks from document submission to completion.

For landlord-tenant situations: SNGPL does not automatically update the account holder when a tenant moves in or out. The consumer number remains in the landlord's name. Tenants making payments via Easypaisa, JazzCash, or bank portals use the existing consumer number — which is fine for payment purposes. However, for complaint filing, meter inspection requests, or address proof documentation, only the registered account holder (typically the landlord) can take official action unless they provide a written authorization letter.

For new gas connections in ${city.name}: a brand-new connection results in a new consumer number being issued after installation. The process involves submitting a connection application at ${city.office} with property documents, paying the connection fee, completing a site survey, and waiting for the network extension (if required). New connections in established areas of ${city.name} typically take 30–90 days. Areas requiring new pipeline infrastructure can take 3–6 months or more.

Subsidy programs for low-income consumers and new scheme connections in ${city.province} are announced periodically by SNGPL. Monitor the official website sngpl.com.pk and the notice board at ${city.office} for current eligibility and application details.`,
    },

    verify: {
      h2: `Verifying and Confirming Your SNGPL Consumer Number in ${city.name}`,
      body: `Before making any SNGPL payment or filing a service request, it is essential to verify that you are using the correct consumer number. Using the wrong consumer number — even by one digit — can result in your payment being credited to another account with no automatic reversal process. Verification takes under 30 seconds and can save significant hassle.

The fastest verification method is the official bill portal at billchecker.sngpl.com.pk. Enter your consumer number and click "Get Bill." If the result shows a bill with your correct address in ${city.name} and your name (or your landlord's name if you are a tenant), the number is valid and active. If the portal returns "Consumer Number Not Found" or shows a different address, stop immediately — do not make any payment until the discrepancy is resolved.

Phone verification via 1199 (24/7): call the SNGPL helpline and provide your consumer number to the agent. They will verbally confirm the account holder name, connection address, and current account status (active, disconnected, or suspended). This method is particularly useful if you received a consumer number verbally — from a landlord, a neighbor, or a previous tenant — and want to verify it before making a payment.

Active vs. inactive status: a consumer number can be in one of several states. "Active" means the connection is live and bills are being generated. "Disconnected" means the supply has been cut due to non-payment, and reconnection requires settling all dues plus a reconnection fee. "Suspended" (temporary) may apply during maintenance or safety inspections. All three states are visible on the portal when you look up the consumer number.

The SNGPL consumer number uniqueness guarantee means no two connections — anywhere in ${city.province} or across all of SNGPL's territory from ${city.name} to Khyber Pakhtunkhwa — share the same consumer number. If the portal shows a different address than yours, you are either entering the wrong number or there has been a data entry error at SNGPL. In the latter case, visit ${city.office} with your CNIC and meter card to get the record corrected.`,
    },

    default: {
      h2: `Complete SNGPL Consumer Number Guide for ${city.name}`,
      body: `Your SNGPL consumer number is the single most important piece of account information you will ever need as a gas consumer in ${city.name}. It is your account identifier — used for checking bills, making payments, filing complaints, requesting meter inspections, transferring connections, and communicating with SNGPL in any capacity. Every ${city.name} consumer connected to the SNGPL network in ${city.areas} and across the broader ${city.division} area has a unique consumer number.

Where to find your consumer number: it is printed in a prominent location on every physical gas bill (typically in the top section of the bill under "Consumer Number" or "Account No."). It is also printed on the original connection card issued when your gas connection was first established. If you have the SNGPL app installed and registered, your consumer number is displayed on the home screen.

How to use your consumer number: enter it at billchecker.sngpl.com.pk to view your current bill in seconds. Use it when paying through Easypaisa (*786# or app), JazzCash (*786# or app), or any bank's online or ATM bill payment channel. Provide it to the 1199 helpline agent for any service request. Enter it on selfservice.sngpl.com.pk to file a complaint or request a meter inspection. Send it via WhatsApp or SMS to receive an automated bill summary.

Consumer number format: the number is typically 10 to 13 digits and may have leading zeros that must be preserved. Never truncate or modify the number. If a payment system rejects your consumer number, double-check that you are entering all digits including any leading zeros.

Security practices: treat your consumer number with reasonable care. While knowing your consumer number alone does not give someone access to make changes to your account (that requires CNIC verification), it is best not to share it with unauthorized parties. Recover a lost consumer number using the five methods described in our recovery guide, including calling 1199 or visiting ${city.office}.`,
    },
  };

  return sections[bucket] ?? sections.default;
}

// ─────────────────────────────────────────────────────────────────
// duplicate-bill
// ─────────────────────────────────────────────────────────────────

function duplicateBillFocus(type: string, city: CityData): ContentSection {
  const buckets: BucketDef[] = [
    { key: 'portal',    matches: ['portal', 'online', 'desktop', 'digital', 'soft-copy', 'electronic', 'pdf-download', 'get-copy', 'download-via-portal'] },
    { key: 'app',       matches: ['app', 'android', 'iphone', 'mobile-download', 'save-to-phone'] },
    { key: 'messaging', matches: ['whatsapp', 'sms', 'download-via-whatsapp', 'download-via-sms'] },
    { key: 'office',    matches: ['office', 'visit', 'certified', 'photocopy'] },
    { key: 'legal',     matches: ['validity', 'valid', 'bank-payment', 'address-proof', 'proof', 'legal'] },
    { key: 'history',   matches: ['archive', 'history', 'old', 'previous', 'monthly-bill-copy', 'batch', 'email-bill'] },
  ];

  const bucket = classify(type, buckets);

  const sections: Record<string, ContentSection> = {

    portal: {
      h2: `Downloading SNGPL Duplicate Bill from Official Portal — ${city.name}`,
      body: `The official SNGPL bill portal at billchecker.sngpl.com.pk is the fastest and most accessible way for ${city.name} consumers to obtain a duplicate gas bill. The entire process takes under two minutes, the document generated is legally valid, and it works from any device with an internet browser — desktop, laptop, tablet, or smartphone.

Here is the complete seven-step walkthrough: Step 1 — Open your browser and navigate to billchecker.sngpl.com.pk. The site loads a clean search interface. Step 2 — Locate the consumer number input field, which is prominently displayed in the center of the page. Step 3 — Enter your complete consumer number exactly as it appears on your previous bill — include all digits and leading zeros. Step 4 — Click the "Get Bill" or "Check Bill" button. The system queries the SNGPL billing database and loads your current bill within 3–5 seconds. Step 5 — On the bill display page, find the "Download PDF" button (usually in the upper right corner of the bill view). Step 6 — Click the button to initiate PDF generation. The browser will either open the PDF in a new tab or prompt you to save it. Step 7 — Save the file to your device using your browser's save dialog and rename it for easy identification.

The downloaded PDF contains everything the original printed bill includes: SNGPL letterhead and logo, your consumer number and account holder name, the property address in ${city.name}, meter serial number, opening and closing readings, consumption in HHM, tariff breakdown by slab, GIDC amount, GST amount, arrears (if any), total amount payable, due date, and SNGPL's banking details for payment.

If the "Download PDF" button is missing or not working (this occurs occasionally during peak hours or site maintenance), use your browser's Print function. Press Ctrl+P (or Cmd+P on Mac), and in the printer selection dropdown, choose "Save as PDF" or "Microsoft Print to PDF." This produces a visually identical document and is accepted by all payment channels and most institutions.

On a mobile browser, the process is identical. After the bill loads, tap the Share icon (the box with an arrow) and select "Save to Files" on iOS or use the download icon on Android Chrome. The bill downloads directly to your phone's storage.`,
    },

    app: {
      h2: `Downloading SNGPL Duplicate Bill via Mobile App — ${city.name}`,
      body: `The SNGPL Consumer App is the most convenient method for ${city.name} consumers to access and download duplicate gas bills on their smartphone. Unlike the web portal — which only shows the current bill — the app maintains a complete 12-month downloadable history, making it the superior choice for any consumer who needs a bill from a previous month.

Setup (one-time, takes 3 minutes): Download the "SNGPL" app from the Google Play Store (Android) or Apple App Store (iPhone). Open the app and tap "Register." Enter your consumer number for your ${city.name} connection. The system sends an OTP to the mobile number registered against your SNGPL account. Enter the OTP to complete verification. Your account is now active and your bill history begins loading.

To download the current bill: from the app's home screen, you will see your current bill summary — amount, due date, and billing period. Look for the download icon (a downward arrow into a tray or a cloud icon) next to the bill summary. Tap it. The PDF saves to your phone's Downloads folder automatically. You can then share it via WhatsApp, email, or upload it to cloud storage.

To download a previous month's bill: tap the "Bill History" tab in the bottom navigation. A list of the last 12 months of bills for your ${city.name} consumer number appears, each showing the month, year, and amount. Tap any entry to expand it, then tap the download icon to save that month's PDF. This is the only digital method that provides historical bills without visiting ${city.office}.

Advantages over the portal: the app requires no re-entry of your consumer number, provides 12 months of history, sends push notifications when each new bill is ready, works offline to view the last downloaded bill, and supports multiple consumer numbers (useful if you own multiple properties in ${city.areas}). For troubleshooting, if the download fails, check your phone storage space and try again on a stable Wi-Fi connection.`,
    },

    messaging: {
      h2: `Getting SNGPL Duplicate Bill via WhatsApp or SMS in ${city.name}`,
      body: `For ${city.name} gas consumers who prefer messaging apps over websites and dedicated apps, SNGPL offers WhatsApp and SMS channels for retrieving current bill information. Both channels are official, free to use (standard messaging charges apply), and operate 24 hours a day.

WhatsApp setup and use: begin by visiting sngpl.com.pk to find the current official SNGPL WhatsApp number — do not use any number from third-party sources or social media, as fraudulent SNGPL WhatsApp accounts operate widely. Save the official number to your contacts. Open a new WhatsApp conversation, type your 10–13 digit consumer number (digits only, no spaces or dashes), and send it. The automated SNGPL system responds within seconds. The reply contains: the account holder name, the current bill amount, the due date, the billing month and year, and a PDF download link for the complete bill.

Tap the PDF link in the WhatsApp reply to open the duplicate bill in your browser or a PDF viewer. From there, download it using your phone's share/save function. The PDF is identical to the one generated from the portal.

WhatsApp limitations: the system can only return the current bill — the most recently generated bill for your ${city.name} consumer number. Previous months' bills are not available via WhatsApp. If you need a bill from 3 months ago for a bank KYC verification, you will need to use the app or visit ${city.office}.

SMS short code method: if you do not have a smartphone or data connection, send your consumer number as a plain text message to the SNGPL SMS short code (available on sngpl.com.pk). The system responds with a text message containing the bill amount, due date, and billing period. This response does not include a PDF or download link — it is text only. This method is ideal for confirming the amount owed before making a payment via Easypaisa *786# or a bank ATM without any internet access.

Security warning: SNGPL automated channels will never ask you to send a password, CNIC, or payment details over WhatsApp or SMS. Any message requesting such information is fraudulent.`,
    },

    office: {
      h2: `Getting a Certified SNGPL Duplicate Bill at ${city.office}`,
      body: `While digital duplicate bills from the portal and app are sufficient for most purposes, certain situations in ${city.name} require a physically stamped and certified copy issued directly by SNGPL. These include submissions to courts, government departments, foreign embassy visa applications, bank loan processing, and legal disputes where a digitally downloaded PDF may not be accepted without an official SNGPL stamp.

Visit details: the SNGPL service center handling ${city.name} accounts is located at ${city.office}. Office hours are Monday through Friday, 9 AM to 5 PM. Saturday and Sunday are non-working days. Government and SNGPL public holidays also apply, so it is advisable to call 1199 to confirm operational hours before making a dedicated trip.

What to bring: your original CNIC (not a photocopy), your consumer number (written down or saved on your phone), and in some cases your previous bill (to help the counter staff locate your account quickly). If you are a tenant requesting a bill for a connection registered in the landlord's name, bring a copy of your tenancy agreement and a written authorization from the account holder, as the certified copy is technically the landlord's document.

The process at the counter: join the billing inquiry or customer service queue (separate queues may exist for different services — check the signage or ask security staff). When your turn comes, state that you need a certified duplicate bill and provide your consumer number. The staff member will locate your account, print the bill, and apply the official SNGPL stamp. A nominal printing fee (typically Rs. 50–200) may be charged. The entire process usually takes 15–30 minutes, though wait times may be longer on busy days.

For bills older than 12 months: older bills are not immediately available at the counter. You will need to submit a written application specifying the billing period required. The billing department processes archive requests separately, usually within 3–5 working days. You will be notified when the certified copies are ready for collection.`,
    },

    legal: {
      h2: `Legal Validity of SNGPL Duplicate Bills in ${city.name}`,
      body: `A question that arises frequently among ${city.name} consumers is whether a duplicate bill — downloaded as a PDF from the portal or app — carries the same legal weight as the original printed bill mailed by SNGPL. The short answer is yes, for most purposes; with one important exception for formal legal or government submissions.

Payment validity: a portal or app-generated PDF duplicate bill is fully valid for payment through all channels — Easypaisa, JazzCash, all bank ATMs and internet banking systems, and SNGPL franchise offices. The payment system uses only your consumer number and the billed amount, both of which are accurately printed on the PDF. No bank or mobile wallet payment platform in ${city.province} requires the original printed bill.

Address proof for financial institutions: major banks in ${city.name} — including HBL, UBL, MCB, Meezan, and Bank Alfalah — accept the PDF version of an SNGPL bill for KYC (Know Your Customer) compliance, account opening, credit card applications, and loan processing. NADRA and FBR also accept utility bills in digital or printed format for registration purposes. SNGPL bills are among the most widely accepted address proof documents because they include the consumer name, full property address, and are issued by a government-regulated utility.

For visa embassies: most embassies handling visa applications from ${city.name} applicants accept utility bills as address proof. However, it is advisable to print the PDF on plain paper and, if required, have it attested by a local notary. Some embassies specifically require the most recent bill (not older than 3 months), so ensure your download is current.

For court and government submissions: where a document requires an official stamp, a PDF printed at home is generally not sufficient. In these cases, obtain a certified copy from ${city.office} (see our office visit guide). The stamped copy carries SNGPL's institutional authentication.

For landlord-tenant disputes in ${city.name}: a PDF bill combined with a payment receipt (from Easypaisa, JazzCash, or bank transaction records) constitutes a complete and verifiable record of gas bill payments, which is admissible in rent controller proceedings and civil courts.`,
    },

    history: {
      h2: `Accessing SNGPL Bill History and Archives for ${city.name} Accounts`,
      body: `Maintaining access to historical SNGPL gas bills is important for ${city.name} consumers for a range of purposes: annual tax filings, property transactions, consumption audits, landlord-tenant dispute evidence, and identifying long-term billing anomalies. Different tools offer different scopes of historical access.

The SNGPL mobile app is the best self-service option for recent history. Under the "Bill History" tab, the app stores the last 12 months of bills for your ${city.name} consumer number — each available as a downloadable PDF. This covers most routine needs: the current year for FBR income tax filings, the last 3–6 months for bank KYC verification, and the last 12 months for an annual consumption audit. Access is immediate, requires no staff involvement, and is available 24/7 from anywhere.

The web portal at billchecker.sngpl.com.pk primarily displays the current bill. For most ${city.name} accounts, it does not provide a historical bill listing. Use the app for anything beyond the current bill.

For bills older than 12 months, the only option is to contact SNGPL directly. Visit ${city.office} during Monday-to-Friday office hours and submit a written request specifying the billing months you need. Include your consumer number, CNIC, and the reason for the request. Archive retrieval typically takes 3–5 working days. There may be a per-page fee for printed copies.

Best practice for ${city.name} consumers: do not rely on SNGPL's systems to maintain your archive indefinitely. Download your bill immediately each month when you receive the app notification — before paying — and save it using a consistent naming convention such as SNGPL_[ConsumerNo]_YYYY_MM.pdf. Store these files in a dedicated folder on cloud storage (Google Drive, iCloud, or OneDrive) so they are accessible from any device and protected against phone loss or damage.

If you need bills in bulk — for example, the full previous year for a property sale or a tax audit — visit ${city.office} and submit a batch request for all 12 months at once rather than making separate trips. Some service centers can accommodate batch requests at the counter while you wait if the account history is straightforward.`,
    },

    default: {
      h2: `How to Get a Duplicate SNGPL Gas Bill in ${city.name}`,
      body: `A duplicate SNGPL gas bill is a complete reprint or digital copy of your original bill. It contains exactly the same information — consumer number, account holder name, address, meter readings, consumption, charges, taxes, total due, and due date — and carries identical legal validity for payments, address proof, and most institutional submissions.

The fastest method for ${city.name} consumers is the official portal at billchecker.sngpl.com.pk. Enter your consumer number, click "Get Bill," and your current bill loads within seconds. Click "Download PDF" to save a complete copy. This takes under two minutes with any internet connection and works on desktop, laptop, or mobile browser.

For previous months' bills, use the SNGPL mobile app (available on Android and iOS). After registering with your consumer number, the app's "Bill History" section provides 12 months of downloadable PDFs. This is the only self-service digital method for historical bills — the portal only shows the current bill.

If you need a physically stamped certified copy — for court submissions, foreign visa applications, or formal government procedures — visit ${city.office} in person (Monday–Friday, 9 AM–5 PM) with your CNIC and consumer number. Counter staff will print and stamp the bill. Bring a written authorization from the registered account holder if you are a tenant.

A common problem in ${city.name}: many consumers in areas like ${city.areas} receive their printed bill late or not at all due to postal delivery delays. Setting up the SNGPL app and enabling push notifications solves this completely — you receive the digital bill the moment it is generated, typically 2–3 days after your meter reading date, and you are never again dependent on postal delivery timing.`,
    },
  };

  return sections[bucket] ?? sections.default;
}

// ─────────────────────────────────────────────────────────────────
// payment
// ─────────────────────────────────────────────────────────────────

function paymentFocus(type: string, city: CityData): ContentSection {
  const buckets: BucketDef[] = [
    { key: 'easypaisa', matches: ['easypaisa', 'mobile-payment'] },
    { key: 'jazzcash',  matches: ['jazzcash'] },
    { key: 'bank',      matches: ['hbl', 'ubl', 'mcb', 'meezan', 'allied', 'bank-transfer', 'atm', 'internet-banking', 'mobile-banking', 'bank-branch'] },
    { key: 'deadline',  matches: ['late-payment', 'deadline', 'due-date', 'before-due', 'avoid-disconnection', 'advance', 'partial'] },
    { key: 'receipt',   matches: ['receipt', 'confirmation', 'confirmation-check'] },
    { key: 'failure',   matches: ['failed', 'missing-payment', 'not-reflected', 'cash', 'franchise', 'over-counter'] },
  ];

  const bucket = classify(type, buckets);

  const sections: Record<string, ContentSection> = {

    easypaisa: {
      h2: `How to Pay SNGPL ${city.name} Gas Bill via Easypaisa`,
      body: `Easypaisa is the most widely used mobile payment method for SNGPL gas bills among ${city.name} consumers. It is available through the smartphone app, via USSD on any mobile phone (including feature phones without internet), and at Easypaisa franchise counters across ${city.name}'s neighborhoods including ${city.areas}.

App method (step-by-step): Step 1 — Open the Easypaisa app on your smartphone. Step 2 — Tap "Bill Payments" from the home screen menu. Step 3 — Select "Utilities" from the payment categories. Step 4 — Choose "Gas" and then select "SNGPL" from the provider list. Step 5 — Enter your SNGPL consumer number for your ${city.name} connection. Step 6 — The app automatically fetches the current bill amount and due date from SNGPL's system — verify that the amount matches your bill. Step 7 — Tap "Confirm" or "Pay." Step 8 — Authenticate the transaction using your Easypaisa PIN or biometric. Step 9 — A confirmation screen displays your transaction reference number, which is also sent via SMS. Screenshot or note this reference immediately.

USSD method (*786#): Dial *786# on any Telenor (or partnered network) SIM — this works on basic feature phones with no internet. Follow the menu prompts: select Bill Payments → Utilities → Gas → SNGPL → enter consumer number → confirm amount → enter PIN. The USSD method is ideal for ${city.name} consumers who do not have a smartphone or prefer a simpler interface.

Easypaisa franchise/agent: visit any Easypaisa franchise shop in ${city.areas} or nearby and ask the agent to pay your SNGPL bill. Provide your consumer number and cash for the bill amount plus the service fee.

Transaction fee: Easypaisa charges Rs. 10–25 per SNGPL bill payment depending on the amount tier — this is charged on top of your bill amount.

Payment reflection: payments via Easypaisa reflect in SNGPL's system within 24–48 hours. During this window, the portal may still show the outstanding balance — this is normal. If the bill has not updated after 72 hours, call SNGPL 1199 with your Easypaisa transaction reference number.`,
    },

    jazzcash: {
      h2: `How to Pay SNGPL ${city.name} Gas Bill via JazzCash`,
      body: `JazzCash is a popular and convenient method for ${city.name} consumers to pay their SNGPL gas bill, whether through the smartphone app, the USSD menu on any Jazz or Warid SIM, or at JazzCash franchise counters. The process is fast, secure, and generates an immediate payment confirmation.

App method: Open the JazzCash app on your Android or iOS device. From the home screen, tap "Pay Bills." Select "Gas" from the utility categories. Choose "SNGPL" as the service provider. Enter your ${city.name} consumer number. The app fetches the current outstanding bill amount from SNGPL's payment gateway — confirm that the figure matches your bill before proceeding. Tap "Pay" and authenticate with your JazzCash MPIN. A confirmation screen appears immediately, and an SMS receipt is sent to your registered mobile number containing the transaction ID, date, amount paid, and consumer number.

USSD method (*786#): Dial *786# on a Jazz or Warid SIM (no internet required). Navigate through the menu: Bill Payments → Gas → SNGPL → enter consumer number → amount is displayed → enter MPIN to confirm. This works on any handset including non-smartphones.

JazzCash Wallet vs. linked bank account: payments can be made from your JazzCash mobile wallet balance or from a linked bank account. If paying from a linked account, ensure sufficient balance. The linked account option avoids the need to maintain a separate wallet top-up.

Saved Billers feature: after your first SNGPL payment, save your ${city.name} consumer number under "Saved Billers" in the JazzCash app. Future payments require only one tap to recall the consumer number, making repeat monthly payments significantly faster.

Auto-Pay scheduling: JazzCash allows you to schedule automatic SNGPL bill payments. Set a specific date each month (for example, the 5th of each month) and JazzCash will automatically pay the bill when generated. This prevents late payments and the 10% surcharge. Payment reflection in SNGPL's system takes 24–48 hours after transaction.`,
    },

    bank: {
      h2: `Paying SNGPL ${city.name} Gas Bill at Bank Branches and ATMs`,
      body: `For ${city.name} consumers who prefer traditional banking channels, SNGPL gas bills can be paid at any ATM on the 1-Link network, through internet banking or mobile banking apps, or over the counter at bank branches. All major Pakistani banks support SNGPL bill payments.

ATM payment process: insert your debit card into any 1-Link ATM (available at all major bank branches and standalone locations across ${city.name} and ${city.areas}). Enter your PIN. From the main menu, select "Other Services" or "Bill Payments." Choose "Utility Bills" and then "Gas." Select "SNGPL" from the provider list. Enter your consumer number — double-check every digit. The ATM retrieves your bill amount and displays it for confirmation. Select "Confirm" to process the payment. Collect the ATM receipt immediately — it contains the transaction reference number, date, time, and amount, which is your proof of payment.

Major banks supporting SNGPL payments at ATMs and branches in ${city.name}: HBL, UBL, MCB, Allied Bank, Meezan Bank, Bank Alfalah, NBP, Habib Metropolitan Bank, Askari Bank, Silk Bank, and most other schedule banks. Branch counters can process over-the-counter utility bill payments during working hours.

Internet/mobile banking: HBL Internet Banking, UBL Net Banking, MCB Mobile, Meezan Bank Mobile, Allied Digital, and Bank Alfalah's Alfa app all include a "Utility Payments" section under the Bill Payments menu. Navigate to Utility Payments → Gas → SNGPL → enter consumer number → confirm amount → authenticate (OTP or app PIN) → payment processed. Receipt is available in transaction history immediately.

1-Link ATMs for unbanked consumers: ${city.name} consumers who do not have a bank account can pay SNGPL bills at 1-Link ATMs using their CNIC and mobile biometric — no bank card required. Look for the "Pay Bills Without Card" or "CNIC-based Payment" option on 1-Link-enabled ATMs.

Payment reflection: bank payments typically reflect in SNGPL's system within 24–48 hours. Keep your transaction receipt for at least 3 months.`,
    },

    deadline: {
      h2: `SNGPL ${city.name} Bill Due Date Management and Late Payment Guide`,
      body: `The due date printed on your SNGPL gas bill is a hard deadline. Unlike some utilities that offer a grace period, SNGPL automatically applies a 10% late payment surcharge on the day after the due date — no warnings, no grace period, no exceptions for weekends or public holidays. Understanding due date management is therefore critical for all ${city.name} consumers.

Finding your due date: the due date is prominently printed on your bill in the "Due Date" field. It is also displayed when you check your bill on the portal (billchecker.sngpl.com.pk) or the mobile app. Typically, the due date is set 15–20 days after the bill generation date, though this varies by billing cycle.

Best time to pay: pay 3–5 days before the due date to allow for any processing delays. Easypaisa and JazzCash payments reflect within 24–48 hours; bank payments may take up to 48 hours; ATM payments at some banks can take 72 hours in rare cases. Paying on the due date itself carries a risk of the payment reflecting after midnight and triggering the surcharge.

If you cannot pay by the due date: call SNGPL helpline 1199 before the due date — not after — and explain your situation. Payment extensions are considered on a case-by-case basis and are more likely to be granted to ${city.name} consumers with a good payment history (no previous surcharges or disconnection notices). The request must be made before the due date; calling after the due date when the surcharge has already been applied is typically ineffective.

Advance payment for winter planning: ${city.name} consumers can pre-pay gas bills in September or October to build up a credit balance against November–February bills, which are typically the highest of the year due to heating consumption. Visit ${city.office} or use the SNGPL self-service portal to make an advance payment. The credit will automatically offset your future high-season bills, preventing the financial shock of large winter billing.

Partial payment: if you cannot pay the full amount, pay whatever you can before the due date to reduce the outstanding balance. The 10% surcharge applies only to the unpaid portion, so partial payment minimizes the penalty.`,
    },

    receipt: {
      h2: `Getting and Verifying Your SNGPL Payment Receipt in ${city.name}`,
      body: `Retaining proof of every SNGPL gas bill payment is essential for ${city.name} consumers. Payment receipts are your protection against disputes, wrongful disconnection notices, and billing discrepancies. Each payment channel generates a unique receipt that can be retrieved or reconstructed if lost.

Easypaisa receipts: immediately after a successful payment, the app displays a confirmation screen showing the transaction reference number (TID), date and time, amount paid, and consumer number. This screen can be screenshotted. Simultaneously, an SMS is sent to your registered Easypaisa number with the same details. All past transactions are also stored under "Transaction History" in the Easypaisa app, retrievable by date.

JazzCash receipts: the JazzCash app shows a payment confirmation screen immediately after processing. An SMS receipt is sent to your registered number. Historical payments are accessible under "Payment History" in the app. Both the on-screen and SMS versions contain the transaction ID needed for any dispute.

Bank app and internet banking receipts: after a utility payment, bank apps typically display a "Payment Successful" screen and generate an electronic receipt available under "Transaction History" or "e-Statements." Most bank apps allow you to download this as a PDF — take advantage of this feature for important SNGPL payments.

ATM receipts: always collect the ATM-printed receipt immediately after the transaction — the ATM discards it after a short time. If you leave without collecting it, the receipt is not recoverable at the machine. Bank branches can sometimes re-print a confirmation statement for ATM transactions, but this may take several days.

Verifying payment in SNGPL's system: after paying, wait 24–48 hours and then check your consumer number on the portal or app. A successfully processed payment will cause the outstanding balance to drop to zero or show the new remaining balance. If the balance has not updated after 72 hours, contact the payment channel's customer service first (Easypaisa: 042-111-003-737; JazzCash: 111-222-055), then call SNGPL 1199 with your transaction ID.

Retention period: keep all SNGPL payment receipts — digital or physical — for a minimum of 3 months. For an annual archive, save the December receipt as part of your year-end record.`,
    },

    failure: {
      h2: `SNGPL Payment Not Reflected — Troubleshooting Failed Payments in ${city.name}`,
      body: `One of the most stressful situations a ${city.name} consumer can face is completing a payment — receiving an Easypaisa or JazzCash confirmation — and then finding that SNGPL's portal still shows the bill as unpaid hours or days later. This is usually a processing delay, not a lost payment, but the steps below will confirm what happened and resolve it efficiently.

Step 1 — Wait the full processing window: before taking any action, allow the full 24–72 hour processing window to pass. Easypaisa and JazzCash transactions are batch-processed by SNGPL, and during busy periods (especially around due dates) the batch clearing can take longer than usual. Check the portal again after 72 hours before escalating.

Step 2 — Gather your evidence: you will need the payment confirmation screenshot or SMS, the transaction ID (TID or reference number), the exact date and time of payment, the exact amount paid, and the consumer number you entered during payment.

Step 3 — Verify with your payment channel first: call Easypaisa customer support at 042-111-003-737 or JazzCash at 111-222-055. Confirm that the transaction was successfully processed on their side. Ask them to confirm the consumer number the payment was sent to. If they confirm it was sent, request a "payment dispatch confirmation" reference for your records.

Step 4 — Contact SNGPL 1199: with the channel confirmation in hand, call 1199 and provide all details: your consumer number, the payment channel, the transaction ID, the date, the amount, and the channel's confirmation reference. SNGPL can trace the batch and manually post the payment if it was received by their banking partner but not yet applied to your account.

Critical warning — wrong consumer number: if the payment channel confirms that the consumer number entered during payment was different from your actual consumer number, the payment has gone to another account. SNGPL cannot reverse misdirected payments automatically. You will need to visit ${city.office} in person with all documentation to request an inter-account transfer — this process can take 2–4 weeks and is not guaranteed if the other consumer number does not have a corresponding bill balance.

If the issue is unresolved near your due date: visit ${city.office} in person with your payment proof. In-person escalation near disconnection deadlines is treated as higher priority and often resolved the same day.`,
    },

    default: {
      h2: `Complete SNGPL Gas Bill Payment Guide for ${city.name} Consumers`,
      body: `SNGPL gas bills for ${city.name} consumers can be paid through seven main channels, each with different convenience levels, transaction fees, and processing timelines. Understanding your options ensures you can pay quickly and avoid the 10% late surcharge that applies automatically after the due date.

The seven payment channels are: (1) Easypaisa app or USSD (*786#) — most popular among ${city.name} consumers, Rs. 10–25 fee, 24-48 hour reflection; (2) JazzCash app or USSD (*786#) — same functionality as Easypaisa, suitable for Jazz/Warid users; (3) Bank mobile app or internet banking — HBL, UBL, MCB, Meezan, Allied, Bank Alfalah, and others; (4) Bank ATM — any 1-Link ATM, free for account holders; (5) Bank branch over-counter — visit any bank branch with your consumer number and cash; (6) Easypaisa franchise counter — walk-in payment at any Easypaisa shop in ${city.areas}; (7) JazzCash franchise counter — similar walk-in option.

The key rule that applies to every payment method: always save your transaction reference number. This is your proof of payment in any dispute. Screenshot the confirmation screen, keep the SMS, and retain the ATM or franchise receipt.

Due date management: your due date is printed on the bill and shown on the portal. Pay at least 3 days before the due date to allow processing time. The 10% late surcharge is automatic and cannot be waived after the fact. If you genuinely cannot pay on time, call 1199 before the due date for an extension — extensions are granted on a case-by-case basis for consumers in ${city.name} with a good payment history.

For urgent payment extensions or disputes, contact ${city.office} (${city.division} service area) in person during office hours. For remote assistance, 1199 is available 24 hours a day, 7 days a week, and handles payment tracing, bill disputes, and disconnection prevention for all ${city.consumers} accounts in ${city.name}.`,
    },
  };

  return sections[bucket] ?? sections.default;
}

// ─────────────────────────────────────────────────────────────────
// troubleshooting
// ─────────────────────────────────────────────────────────────────

function troubleshootingFocus(type: string, city: CityData): ContentSection {
  const buckets: BucketDef[] = [
    { key: 'high-bill',     matches: ['high-bill', 'overcharge', 'double-charge', 'wrong-amount', 'calculation-error', 'billing-error', 'billing-dispute', 'surcharge-dispute', 'arrears-dispute', 'appeal-bill', 'tariff-increase', 'levy-dispute'] },
    { key: 'no-gas',        matches: ['no-gas', 'gas-disconnected', 'gas-pressure', 'leakage', 'emergency', 'restoration', 'high-consumption', 'seasonal-increase'] },
    { key: 'meter',         matches: ['meter-fault', 'meter-not', 'meter-reading-error', 'meter-change', 'new-meter', 'inspection-request'] },
    { key: 'disconnection', matches: ['disconnection-notice', 'reconnection', 'demand-notice', 'notice-response', 'reconnection-application'] },
    { key: 'complaint',     matches: ['complaint', 'helpline', 'customer-care', 'whatsapp-support', 'online-complaint', 'track-complaint', 'sngpl-portal-complaint'] },
    { key: 'portal-error',  matches: ['bill-not-available', 'website-error', 'bill-not-generated', 'account-issue'] },
    { key: 'payment-issue', matches: ['payment-not-reflected', 'missing-payment', 'refund', 'security-deposit'] },
    { key: 'connection',    matches: ['new-connection', 'connection-transfer', 'address-change', 'name-change', 'connection-issue', 'subsidy'] },
  ];

  const bucket = classify(type, buckets);

  const sections: Record<string, ContentSection> = {

    'high-bill': {
      h2: `High SNGPL Gas Bill in ${city.name} — Investigation and Dispute Guide`,
      body: `A sudden spike in your SNGPL gas bill is alarming, but it is important to approach the situation methodically before contacting SNGPL or making any payment. For ${city.name} consumers, following this structured five-step investigation will quickly determine whether the high bill is due to a genuine error, an estimated reading, accumulated arrears, or actual increased consumption.

Step 1 — Read your physical gas meter: go to your gas meter and carefully read the digits displayed (the whole number portion, before the decimal point). Compare this figure to the "Current Reading" printed on your bill. If your meter shows a lower reading than what was billed, you have clear evidence of a billing error. Photograph the meter display with the date visible — this photograph is your primary evidence for the dispute.

Step 2 — Check for the "E" flag: look at the "Reading Type" or "Remarks" field on your bill. If it shows "E" or "Estimated," SNGPL used a computer-generated projection rather than an actual meter reading. Estimated readings are common in areas of ${city.name} where meter access is occasionally obstructed, and they can be significantly higher or lower than actual consumption. An over-estimated bill will self-correct when the next actual reading is taken, but you can submit your own reading via the SNGPL app's "Meter Reading" feature to accelerate the correction.

Step 3 — Review the arrears line: the "Arrears" entry on your bill accumulates any previously unpaid amounts. If a previous occupant at your ${city.name} address left unpaid bills, or if you missed a payment in a prior month, the arrears roll forward automatically and inflate your current total. Verify arrears by reviewing your payment history on the app or portal.

Step 4 — Recalculate using the official tool: visit the SNGPL bill calculator at /calculator. Enter your opening reading, closing reading, and connection type (domestic/commercial). The calculated amount should match your billed amount if the readings and tariff are correctly applied.

Step 5 — File a formal dispute: if Steps 1–4 reveal a discrepancy, call 1199 (24/7) or log into selfservice.sngpl.com.pk. Request both a "Meter Inspection" and a "Bill Review," attaching your meter photograph as evidence. Important: do not refuse to pay while a dispute is processing. Pay the undisputed portion of the bill to avoid disconnection, noting your consumer number and "payment under protest" in the transaction reference where possible. SNGPL dispute resolution typically takes 15–30 working days, after which any confirmed over-billing is credited to the next bill.`,
    },

    'no-gas': {
      h2: `No Gas Supply or Low Pressure in ${city.name} — What to Do`,
      body: `Experiencing no gas or very low gas pressure at your ${city.name} property requires a systematic diagnosis to determine whether the problem is at the distribution network level (affecting many consumers), your building or compound level, or your individual meter and internal piping.

Step 1 — Check your immediate neighbors: before calling SNGPL, ask neighbors on the same street or in the same building whether they also have no gas. If multiple households in ${city.areas} or your locality are affected, this is a distribution main issue — likely a planned load management outage or an unplanned fault in the transmission system. SNGPL publishes planned outage schedules on sngpl.com.pk and its official social media accounts. During high-demand winter periods in ${city.name}, load shedding rotations may affect specific areas on a rotating daily schedule.

Step 2 — Check the building main valve: if you are in an apartment building or compound and only your unit is affected, check the main gas valve for the building (usually located in the basement or meter room). If it is closed, open it carefully. If it is open and gas is still not flowing, the issue is likely with your individual meter or internal piping.

Step 3 — Check your individual meter valve: the valve directly on your gas meter can be turned off accidentally or by an SNGPL field team following a disconnection order. Ensure it is in the open (parallel to the pipe) position.

EMERGENCY — Gas Leakage: if you smell gas, do not attempt to diagnose or fix anything yourself. Immediately: turn off all gas appliances, do NOT operate any electrical switches (sparks can ignite gas), open all windows and doors, leave the building entirely, and call SNGPL emergency helpline 1199 from a safe distance outside. 1199 is available 24 hours a day for gas emergency response. Do not re-enter the building until SNGPL field teams have inspected and declared it safe.

Reporting unplanned outages: call 1199 with your consumer number and describe your exact address in ${city.name} and the scope of the outage (just your unit, your building, or your street). SNGPL logs all reports and dispatches a field team for unplanned outages — response times vary from 2 hours to 24 hours depending on the severity and location within ${city.division}.`,
    },

    meter: {
      h2: `Gas Meter Fault and Reading Problems in ${city.name} — SNGPL Guide`,
      body: `A faulty gas meter or incorrect meter reading can cause significant billing errors that compound over months if not addressed promptly. ${city.name} consumers who suspect a meter problem should act quickly, as meter disputes are easier to resolve when caught early.

Signs of a faulty meter: the meter display shows a blank screen or an "ERR" code; the digits are not advancing despite appliances being in use; the meter is advancing unusually fast (suspected of measuring more gas than is actually flowing); the meter has visible physical damage (cracks, corrosion, broken seals); or the SNGPL seal on the meter cover is broken or tampered with (note: tampering is a serious legal offense, so if you notice a broken seal report it to 1199 immediately to protect yourself from liability).

Signs of a reading error: your billed reading is noticeably higher than what your meter currently displays; you received an "E" (Estimated) flag for multiple consecutive months; or your consumption jumped dramatically with no change in household size or usage patterns.

How to request a meter inspection: call 1199 or log a complaint at selfservice.sngpl.com.pk. Select "Meter Inspection" as the complaint type. Provide your consumer number, your ${city.name} address, a description of the problem, and attach a photograph of the meter display showing the current reading with the date visible. You can also submit the request in person at ${city.office}.

SNGPL response timeline: meter inspection requests in ${city.name} are typically attended to within 3–7 working days from the complaint date. The field technician will test the meter for accuracy, check the reading records, and inspect the seal and physical condition.

Meter accuracy testing: if you believe the meter is running fast, SNGPL can conduct a formal meter accuracy test. Note that this test carries a fee (Rs. 1,000–5,000 depending on meter type). If the test confirms the meter is faulty, SNGPL waives the fee, adjusts all bills from the estimated fault date, and replaces the meter at no charge to you. If the test finds the meter is accurate, the fee is not refunded.

Meter replacement: if a meter is confirmed faulty or has reached the end of its service life, SNGPL replaces it at no charge. Your consumer number remains unchanged after meter replacement.`,
    },

    disconnection: {
      h2: `SNGPL Disconnection Notice and Reconnection Process — ${city.name}`,
      body: `Receiving an SNGPL disconnection notice is an urgent situation that requires immediate action. For ${city.name} consumers, understanding what each type of notice means and acting within the specified deadline is the only way to prevent actual disconnection and the associated reconnection fees and delays.

Understanding the Demand Notice: a Demand Notice is SNGPL's formal written warning issued when your account shows an outstanding unpaid balance. The notice specifies the total amount owed (including any arrears and the 10% late surcharge), the deadline by which payment must be made to avoid disconnection, and the consumer number and address on record. Receipt of a Demand Notice does not mean disconnection has already occurred — it means you have a limited time window to act.

Immediate steps upon receiving a Demand Notice: Step 1 — Verify the outstanding amount on the portal (billchecker.sngpl.com.pk) to confirm the figure matches the notice. Step 2 — Pay the full outstanding amount immediately using Easypaisa, JazzCash, bank ATM, or any other channel. Do not delay even a single day once a Demand Notice is received. Step 3 — After paying, call SNGPL 1199 within 24 hours of payment with your transaction reference number and consumer number. Request that the disconnection order be cancelled and ask for a reference number for the call. Step 4 — If possible, also send confirmation via selfservice.sngpl.com.pk to create a written record.

If disconnection has already occurred: you must pay all outstanding dues plus a reconnection fee (typically Rs. 500–2,000 depending on connection type). After payment, call 1199 with your transaction ID and visit ${city.office} to submit a reconnection application if the phone process does not result in timely action. Physical reconnection by a field team takes 1–3 working days after payment confirmation.

Wrongful disconnection: if you have evidence of timely payment (screenshot, transaction ID, bank receipt) but were disconnected anyway, this is a billing system error. Call 1199 immediately with all payment proof and demand priority reconnection at no fee. If not resolved within 24 hours, visit ${city.office} in person with your payment documentation.`,
    },

    complaint: {
      h2: `How to File and Track an SNGPL Complaint in ${city.name}`,
      body: `Filing a well-documented complaint with SNGPL is the most effective way for ${city.name} consumers to resolve billing errors, meter faults, supply disruptions, high bill disputes, and service quality issues. SNGPL offers four main complaint channels, each suited to different types of problems.

Channel 1 — SNGPL helpline 1199 (24/7): the fastest channel for urgent issues including gas emergencies, disconnection prevention, and payment tracing. Call 1199 from any Pakistani mobile or landline at no charge. Provide your consumer number, your ${city.name} address, and a clear description of the problem. Ask for a complaint reference number before ending the call — this is your tracking ID.

Channel 2 — selfservice.sngpl.com.pk: the best channel for non-urgent complaints that require documentation. After logging in, select "Lodge Complaint" and choose the relevant category (billing, meter, supply, etc.). You can type a detailed description, attach photographs (e.g., a meter display photo), and submit supporting documents. The portal sends you an email confirmation with a complaint tracking number. Log in to track the status as it progresses through SNGPL's internal review stages.

Channel 3 — Official SNGPL WhatsApp: suitable for moderate-priority issues where you want a messaging record. Send your consumer number and a brief description of the problem. The WhatsApp channel connects to SNGPL's customer support team during working hours.

Channel 4 — ${city.office} in person: the most effective channel for complex disputes, meter inspection requests, certified documents, or when phone and portal channels have not produced a satisfactory resolution. Visit during Monday–Friday, 9 AM–5 PM. Bring all relevant documents: CNIC, consumer number, bill copies, payment receipts, and any photographs.

Making a strong complaint — what to include: the specific problem (e.g., "billed 450 HHM but meter shows 280 HHM for month of March 2025"), your consumer number and billing period, a specific claim (e.g., "I am claiming a refund/adjustment of Rs. X"), supporting documents attached, and a requested resolution timeline.

OGRA escalation: if SNGPL does not resolve your complaint within 7–14 working days, you have the right to escalate to OGRA (Oil and Gas Regulatory Authority) at ogra.org.pk. OGRA is the independent government regulator for gas utilities and can compel SNGPL to act on unresolved complaints.`,
    },

    'portal-error': {
      h2: `Fixing SNGPL Bill Portal Errors and Account Issues in ${city.name}`,
      body: `The SNGPL bill portal (billchecker.sngpl.com.pk) serves ${city.consumers} consumers in ${city.name} and occasionally experiences errors or displays unexpected results. Understanding what each error message means and how to resolve it saves significant time and prevents unnecessary alarm.

"Consumer Number Not Found" error: this is the most common portal error. First, check for typos — consumer numbers are typically 10–13 digits and must include leading zeros. Enter the number character by character and compare to your printed bill. Second, if your gas connection was recently established (within the last 4–6 weeks), the account may not yet be active in the billing system — call 1199 to confirm. Third, new connections in ${city.name} assigned after the most recent billing system update may have a 1–2 billing cycle delay before appearing on the portal.

"Bill Not Generated" or blank result: this means your consumer number is recognized but no bill exists for the current period. This is normal if your meter reading date has not yet passed — your bill is generated 2–3 days after the meter reading date, not on a fixed calendar date. Check back in 2–3 days. If it has been more than 10 days past your expected reading date and still no bill appears, call 1199 to inquire — the account may be temporarily inactive.

Portal slow or timing out: billchecker.sngpl.com.pk experiences peak traffic in the 2–3 days before the due date each month, as many consumers check and pay simultaneously. Try accessing the portal during off-peak hours (early morning or late evening). Alternatively, use the SNGPL mobile app, which is generally more responsive. Clearing your browser's cache and cookies can also improve portal performance.

"Bill Amount Showing Zero": if the portal displays your account but the amount due shows as Rs. 0, check the "Last Payment" or "Previous Payment" section — the current bill may have already been paid and posted. If you have not recently paid, call 1199 to investigate.

SNGPL website completely unavailable: check SNGPL's official social media (Twitter/X and Facebook) for maintenance announcements. During planned website maintenance, SNGPL typically posts a notice. In the meantime, the mobile app (which uses a separate API) may remain functional, and you can call 1199 for manual bill inquiries.`,
    },

    'payment-issue': {
      h2: `SNGPL Payment Reflection Issues and Refund Requests in ${city.name}`,
      body: `Payment reflection delays and refund situations are two distinct but related issues that ${city.name} consumers occasionally encounter. Addressing each requires a different approach, but both start with gathering complete documentation.

Payment not reflected — diagnostic checklist: before contacting anyone, gather the following: the payment confirmation screenshot or SMS (from Easypaisa, JazzCash, or bank), the transaction ID or reference number, the exact date and time of payment, the exact amount paid, and the consumer number entered during the payment. This information is required by both the payment channel's support team and SNGPL's 1199 helpline.

Resolution steps for delayed reflection: (1) Confirm the payment was sent by contacting your payment channel — Easypaisa at 042-111-003-737, JazzCash at 111-222-055, or your bank's customer service. (2) If the channel confirms it was sent, wait 72 hours from payment. (3) If still not reflected after 72 hours, call SNGPL 1199 with all the details above and the channel's confirmation. SNGPL will trace the payment in their banking reconciliation system and post it manually if confirmed received. (4) If the matter is still unresolved, visit ${city.office} with a printed copy of your payment proof for in-person escalation. Office staff can escalate to the billing department directly.

Overpayment credit: if you accidentally paid more than the billed amount, SNGPL credits the excess automatically to your next bill. There is no need to request a refund for minor overpayments — simply verify on the portal the following month that the credit is reflected.

Refund request process: for larger overpayments (for example, if you paid the same bill twice or if a bill was revised downward after payment), you can request a refund. Submit a written refund request at ${city.office} with your CNIC, consumer number, and documentation of the overpayment (payment receipts + corrected bill). SNGPL processes refunds by cheque or bank transfer within 2–4 weeks. Small overpayment amounts (typically under Rs. 500) are usually credited to the next bill rather than refunded separately.

Security deposit refund: upon permanent termination of your SNGPL connection in ${city.name} (due to property demolition, network decommission, or voluntary disconnection), you are entitled to a refund of the security deposit paid at the time of connection. Submit a termination and refund request at ${city.office} with your CNIC, consumer number, original connection documents, and final meter reading confirmation.`,
    },

    connection: {
      h2: `New SNGPL Gas Connection and Transfer Issues in ${city.name}`,
      body: `Getting a new SNGPL gas connection in ${city.name} or transferring an existing connection to a new owner are significant administrative processes that require careful preparation and follow-through. This guide covers both, along with common issues and practical solutions.

New connection eligibility: not all areas of ${city.name} have gas network infrastructure in place. Before starting the application process, verify that your property address falls within SNGPL's service area by calling 1199 or visiting ${city.office}. SNGPL's network coverage in ${city.name} spans most of ${city.areas}, but fringe localities or new housing schemes may not yet be connected.

The six-step new connection application process: Step 1 — Collect the application form from ${city.office} or download it from sngpl.com.pk. Step 2 — Compile required documents: CNIC copy, property ownership document or lease agreement, site plan (sketch of property), and completion certificate for new buildings. Step 3 — Submit the completed form with documents and application fee at ${city.office}. Step 4 — SNGPL conducts a site survey (typically within 2–3 weeks of application). Step 5 — If approved, SNGPL issues a Demand Notice specifying the connection charges based on distance and infrastructure requirements. Pay the Demand Notice amount at any designated bank. Step 6 — SNGPL schedules the installation, lays the pipe, installs the meter, and assigns your permanent consumer number.

Timeline expectations: in established areas of ${city.name} with existing distribution infrastructure, new connections typically take 30–60 days. For areas requiring new pipeline extension, the timeline can be 60–120 days or more. If ${city.name} is part of a new gas expansion scheme under federal or provincial planning, the timeline may be determined by the scheme's overall project schedule.

Connection transfer (change of ownership): both the current registered account holder and the new owner must appear in person at ${city.office} with their original CNICs, the property sale deed or transfer document, the latest fully paid SNGPL bill, and a completed SNGPL transfer application form. The transfer process takes 2–4 weeks. The consumer number remains the same; only the account holder name and CNIC on record are updated.

Subsidy programs: SNGPL and the government of ${city.province} periodically announce subsidized connection schemes for low-income households. Monitor sngpl.com.pk, the notice board at ${city.office}, and official government media outlets for current program eligibility criteria and application windows.`,
    },

    default: {
      h2: `SNGPL ${city.name} Common Problems and Quick Resolution Guide`,
      body: `This guide covers the most common SNGPL service problems reported by ${city.name} consumers and the fastest resolution path for each. For all issues, your consumer number is the key — keep it accessible at all times.

High bill or billing dispute: read your physical meter and compare to the billed reading. Check for the "E" (Estimated) flag. Review the arrears line. If an error is confirmed, call 1199 or log a dispute at selfservice.sngpl.com.pk requesting "Meter Inspection" and "Bill Review." Attach a dated photograph of your meter display. Pay the undisputed amount to prevent disconnection while the dispute processes.

No gas supply or low pressure: first check with neighbors in ${city.areas} — if multiple households are affected, it is a network issue. Check your building's main valve and your individual meter valve. For gas leakage emergencies, turn off all appliances, open windows, leave the building, and call 1199 immediately from a safe distance. Never operate electrical switches during a gas leak.

Bill not showing online: if the portal returns no bill for your consumer number, your billing cycle may not have completed yet — check again in 2–3 days after your expected meter reading date. If the consumer number returns "not found," verify all digits including leading zeros, then call 1199.

Payment not reflected in 48 hours: gather your transaction ID and payment confirmation, contact your payment channel (Easypaisa 042-111-003-737 or JazzCash 111-222-055) to confirm the payment was sent, then call SNGPL 1199 with all details. Visit ${city.office} in person if phone resolution is slow near your due date.

Disconnection notice received: verify the amount on the portal, pay immediately, call 1199 within 24 hours of payment with the transaction ID to prevent disconnection from proceeding. If already disconnected, pay all dues plus the reconnection fee, then call 1199 and visit ${city.office}.

Meter fault suspected: photograph the meter display with today's date, then call 1199 requesting a "Meter Inspection." Response time is typically 3–7 working days for ${city.name} accounts.

Key contacts: 1199 helpline (24/7, free from any network), selfservice.sngpl.com.pk (complaint portal, available 24/7), ${city.office} (Monday–Friday, 9 AM–5 PM), and ogra.org.pk (independent regulator for escalations beyond 7–14 working days).`,
    },
  };

  return sections[bucket] ?? sections.default;
}

// ─────────────────────────────────────────────────────────────────
// Public entry point
// ─────────────────────────────────────────────────────────────────

export function getTypeFocusSection(
  type: string,
  city: CityData,
  category: 'bill-check' | 'consumer-number' | 'duplicate-bill' | 'payment' | 'troubleshooting'
): ContentSection {
  switch (category) {
    case 'bill-check':       return billCheckFocus(type, city);
    case 'consumer-number':  return consumerNumberFocus(type, city);
    case 'duplicate-bill':   return duplicateBillFocus(type, city);
    case 'payment':          return paymentFocus(type, city);
    case 'troubleshooting':  return troubleshootingFocus(type, city);
  }
}
