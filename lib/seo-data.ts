// ─────────────────────────────────────────────────────────────────
// SNGPL Programmatic SEO Data — 10,000+ unique page slugs
// Structure: /sngpl/[category]/[city]-[type]
// ─────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  'bill-check',
  'consumer-number',
  'duplicate-bill',
  'payment',
  'troubleshooting',
] as const;

export type Category = typeof CATEGORIES[number];

export interface CityData {
  name: string;
  slug: string;
  province: string;
  region: string;
  division: string;
  office: string;
  areas: string;
  consumers: string;
}

export const CITIES: CityData[] = [
  { name: 'Lahore',       slug: 'lahore',       province: 'Punjab',  region: 'Central Punjab',   division: 'Lahore Division',      office: 'SNGPL Service Center, Gulberg III, Lahore',              areas: 'Gulberg, DHA, Model Town, Garden Town, Johar Town, Cantt',         consumers: '800,000+' },
  { name: 'Faisalabad',   slug: 'faisalabad',   province: 'Punjab',  region: 'Central Punjab',   division: 'Faisalabad Division',  office: 'SNGPL SDC, Susan Road, Faisalabad',                      areas: 'Susan Road, Peoples Colony, Gulshan Ravi, Samanabad',              consumers: '450,000+' },
  { name: 'Rawalpindi',   slug: 'rawalpindi',   province: 'Punjab',  region: 'Northern Punjab',  division: 'Rawalpindi Division',  office: 'SNGPL SDC, Murree Road, Rawalpindi',                     areas: 'Saddar, Westridge, Chaklala, Raja Bazaar, Bahria Town',            consumers: '350,000+' },
  { name: 'Islamabad',    slug: 'islamabad',    province: 'ICT',     region: 'Federal Capital',  division: 'Islamabad',            office: 'SNGPL Regional Office, Blue Area, Islamabad',            areas: 'F-6, F-7, F-8, G-9, G-11, DHA, Bahria Town',                      consumers: '280,000+' },
  { name: 'Gujranwala',   slug: 'gujranwala',   province: 'Punjab',  region: 'Central Punjab',   division: 'Gujranwala Division',  office: 'SNGPL SDC, GT Road, Gujranwala',                         areas: 'Satellite Town, Model Town, Civil Lines, Gondlanwala',             consumers: '300,000+' },
  { name: 'Sialkot',      slug: 'sialkot',      province: 'Punjab',  region: 'Central Punjab',   division: 'Gujranwala Division',  office: 'SNGPL SDC, Paris Road, Sialkot',                         areas: 'Cantt, Saddar, Defence Colony, Iqbal Town, Allama Iqbal Road',     consumers: '180,000+' },
  { name: 'Sargodha',     slug: 'sargodha',     province: 'Punjab',  region: 'Central Punjab',   division: 'Sargodha Division',    office: 'SNGPL SDC, University Road, Sargodha',                   areas: 'Satellite Town, Chak 56, Noor Colony, City Road',                  consumers: '120,000+' },
  { name: 'Multan',       slug: 'multan',       province: 'Punjab',  region: 'South Punjab',     division: 'Multan Division',      office: 'SNGPL SDC, Abdali Road, Multan',                         areas: 'Gulgasht, New Multan, Shah Rukne Alam, Cantt, Bosan Road',         consumers: '200,000+' },
  { name: 'Bahawalpur',   slug: 'bahawalpur',   province: 'Punjab',  region: 'South Punjab',     division: 'Bahawalpur Division',  office: 'SNGPL SDC, Circular Road, Bahawalpur',                   areas: 'Model Town, Satellite Town, Civil Lines, Gulshan Colony',          consumers: '90,000+' },
  { name: 'Sheikhupura',  slug: 'sheikhupura',  province: 'Punjab',  region: 'Central Punjab',   division: 'Lahore Division',      office: 'SNGPL SDC, Lahore Road, Sheikhupura',                    areas: 'Model Town, Ravi Road, Civil Lines, Muridke',                      consumers: '75,000+' },
  { name: 'Gujrat',       slug: 'gujrat',       province: 'Punjab',  region: 'Central Punjab',   division: 'Gujranwala Division',  office: 'SNGPL SDC, Jinnah Road, Gujrat',                         areas: 'Model Town, Khiali, Civil Lines, Gulshan Colony',                  consumers: '70,000+' },
  { name: 'Kasur',        slug: 'kasur',        province: 'Punjab',  region: 'Central Punjab',   division: 'Lahore Division',      office: 'SNGPL SDC, GT Road, Kasur',                              areas: 'Civil Lines, Pattoki, Chunian',                                    consumers: '50,000+' },
  { name: 'Narowal',      slug: 'narowal',      province: 'Punjab',  region: 'Central Punjab',   division: 'Gujranwala Division',  office: 'SNGPL SDC, Sialkot Road, Narowal',                       areas: 'Civil Lines, Shakargah, Zafarwal',                                 consumers: '35,000+' },
  { name: 'Khanewal',     slug: 'khanewal',     province: 'Punjab',  region: 'South Punjab',     division: 'Multan Division',      office: 'SNGPL SDC, Main Bazaar, Khanewal',                       areas: 'Civil Lines, Noor Shah, Mian Channu',                              consumers: '40,000+' },
  { name: 'Pakpattan',    slug: 'pakpattan',    province: 'Punjab',  region: 'South Punjab',     division: 'Sahiwal Division',     office: 'SNGPL SDC, Ferozepur Road, Pakpattan',                   areas: 'Civil Lines, Arifwala',                                            consumers: '30,000+' },
  { name: 'Rahimyarkhan', slug: 'rahimyarkhan', province: 'Punjab',  region: 'South Punjab',     division: 'Bahawalpur Division',  office: 'SNGPL SDC, Sadiqabad Road, Rahim Yar Khan',              areas: 'Cantt, Sadiqabad, Liaquatpur',                                     consumers: '55,000+' },
  { name: 'Sahiwal',      slug: 'sahiwal',      province: 'Punjab',  region: 'Central Punjab',   division: 'Sahiwal Division',     office: 'SNGPL SDC, Kutchery Road, Sahiwal',                      areas: 'Civil Lines, Model Town, Okara Road',                              consumers: '60,000+' },
  { name: 'Okara',        slug: 'okara',        province: 'Punjab',  region: 'Central Punjab',   division: 'Sahiwal Division',     office: 'SNGPL SDC, Multan Road, Okara',                          areas: 'Civil Lines, Renala Khurd, Depalpur',                              consumers: '45,000+' },
  { name: 'Chiniot',      slug: 'chiniot',      province: 'Punjab',  region: 'Central Punjab',   division: 'Faisalabad Division',  office: 'SNGPL SDC, Jhang Road, Chiniot',                         areas: 'Civil Lines, Bhawana',                                             consumers: '35,000+' },
  { name: 'Jhelum',       slug: 'jhelum',       province: 'Punjab',  region: 'Northern Punjab',  division: 'Rawalpindi Division',  office: 'SNGPL SDC, GT Road, Jhelum',                             areas: 'Civil Lines, Cantt, Sohawa',                                       consumers: '50,000+' },
  { name: 'Chakwal',      slug: 'chakwal',      province: 'Punjab',  region: 'Northern Punjab',  division: 'Rawalpindi Division',  office: 'SNGPL SDC, Main Bazaar, Chakwal',                        areas: 'Civil Lines, Choa Saidan Shah, Talagang',                          consumers: '30,000+' },
  { name: 'Attock',       slug: 'attock',       province: 'Punjab',  region: 'Northern Punjab',  division: 'Rawalpindi Division',  office: 'SNGPL SDC, Hazro Road, Attock',                          areas: 'Fateh Jang, Hazro, Pindigheb, Campbellpur',                        consumers: '25,000+' },
  { name: 'Hafizabad',    slug: 'hafizabad',    province: 'Punjab',  region: 'Central Punjab',   division: 'Gujranwala Division',  office: 'SNGPL SDC, Main Bazaar, Hafizabad',                      areas: 'Civil Lines, Pindi Bhattian',                                      consumers: '28,000+' },
  { name: 'Jhang',        slug: 'jhang',        province: 'Punjab',  region: 'Central Punjab',   division: 'Faisalabad Division',  office: 'SNGPL SDC, Faisalabad Road, Jhang',                      areas: 'Civil Lines, Chiniot, Shorkot',                                    consumers: '42,000+' },
  { name: 'Tobateksing',  slug: 'tobateksing',  province: 'Punjab',  region: 'Central Punjab',   division: 'Faisalabad Division',  office: 'SNGPL SDC, Faisalabad Road, Toba Tek Singh',             areas: 'Civil Lines, Gojra, Kamalia',                                      consumers: '40,000+' },
  { name: 'Vehari',       slug: 'vehari',       province: 'Punjab',  region: 'South Punjab',     division: 'Multan Division',      office: 'SNGPL SDC, Multan Road, Vehari',                         areas: 'Civil Lines, Mailsi, Burewala',                                    consumers: '35,000+' },
  { name: 'Lodhran',      slug: 'lodhran',      province: 'Punjab',  region: 'South Punjab',     division: 'Multan Division',      office: 'SNGPL SDC, Main Bazaar, Lodhran',                        areas: 'Civil Lines, Kahror Pakka, Dunyapur',                              consumers: '22,000+' },
  { name: 'Khushab',      slug: 'khushab',      province: 'Punjab',  region: 'Central Punjab',   division: 'Sargodha Division',    office: 'SNGPL SDC, Jauharabad Road, Khushab',                    areas: 'Civil Lines, Jauharabad, Noorpur Thal',                            consumers: '25,000+' },
  { name: 'Mianwali',     slug: 'mianwali',     province: 'Punjab',  region: 'Central Punjab',   division: 'Sargodha Division',    office: 'SNGPL SDC, GT Road, Mianwali',                           areas: 'Civil Lines, Isa Khel, Piplan',                                    consumers: '22,000+' },
  { name: 'Bhakkar',      slug: 'bhakkar',      province: 'Punjab',  region: 'Central Punjab',   division: 'Sargodha Division',    office: 'SNGPL SDC, Main Bazaar, Bhakkar',                        areas: 'Civil Lines, Kalur Kot, Mankera',                                  consumers: '18,000+' },
  { name: 'Muzaffargarh', slug: 'muzaffargarh', province: 'Punjab',  region: 'South Punjab',     division: 'Multan Division',      office: 'SNGPL SDC, GT Road, Muzaffargarh',                       areas: 'Civil Lines, Kot Addu, Ali Pur',                                   consumers: '30,000+' },
  { name: 'Dgkhan',       slug: 'dgkhan',       province: 'Punjab',  region: 'South Punjab',     division: 'DG Khan Division',     office: 'SNGPL SDC, Circular Road, DG Khan',                      areas: 'Civil Lines, Taunsa, Jampur, Rajanpur',                            consumers: '28,000+' },
  { name: 'Layyah',       slug: 'layyah',       province: 'Punjab',  region: 'South Punjab',     division: 'DG Khan Division',     office: 'SNGPL SDC, Main Bazaar, Layyah',                         areas: 'Civil Lines, Chowk Azam, Karor',                                   consumers: '20,000+' },
  { name: 'Peshawar',     slug: 'peshawar',     province: 'KPK',     region: 'KPK',              division: 'Peshawar Division',    office: 'SNGPL Regional Office, University Road, Peshawar',       areas: 'Hayatabad, University Town, Saddar, Cantonment, Warsak Road',      consumers: '250,000+' },
  { name: 'Abbottabad',   slug: 'abbottabad',   province: 'KPK',     region: 'Hazara',           division: 'Hazara Division',      office: 'SNGPL SDC, Mandian, Abbottabad',                         areas: 'Cantt, Lower Cashmore, Havelian, Nathia Gali',                     consumers: '80,000+' },
  { name: 'Mansehra',     slug: 'mansehra',     province: 'KPK',     region: 'Hazara',           division: 'Hazara Division',      office: 'SNGPL SDC, Kaghan Road, Mansehra',                       areas: 'Civil Lines, Balakot, Shinkiari',                                   consumers: '40,000+' },
  { name: 'Mardan',       slug: 'mardan',       province: 'KPK',     region: 'KPK',              division: 'Mardan Division',      office: 'SNGPL SDC, Katlang Road, Mardan',                        areas: 'Civil Lines, Takht Bhai, Swabi Road',                              consumers: '60,000+' },
  { name: 'Swabi',        slug: 'swabi',        province: 'KPK',     region: 'KPK',              division: 'Mardan Division',      office: 'SNGPL SDC, GT Road, Swabi',                              areas: 'Civil Lines, Topi, Razzar',                                        consumers: '35,000+' },
  { name: 'Nowshera',     slug: 'nowshera',     province: 'KPK',     region: 'KPK',              division: 'Peshawar Division',    office: 'SNGPL SDC, GT Road, Nowshera',                           areas: 'Civil Lines, Pabbi, Jehangira',                                    consumers: '30,000+' },
  { name: 'Kohat',        slug: 'kohat',        province: 'KPK',     region: 'KPK',              division: 'Kohat Division',       office: 'SNGPL SDC, Main Bazaar, Kohat',                          areas: 'Civil Lines, Hangu, Lachi',                                        consumers: '25,000+' },
  { name: 'Swat',         slug: 'swat',         province: 'KPK',     region: 'KPK',              division: 'Malakand Division',    office: 'SNGPL SDC, Saidu Sharif, Swat',                          areas: 'Saidu Sharif, Mingora, Matta, Kalam',                              consumers: '20,000+' },
  { name: 'Haripur',      slug: 'haripur',      province: 'KPK',     region: 'Hazara',           division: 'Hazara Division',      office: 'SNGPL SDC, Haripur Road, Haripur',                       areas: 'Civil Lines, Ghazi, Havelian',                                     consumers: '22,000+' },
  { name: 'Charsadda',    slug: 'charsadda',    province: 'KPK',     region: 'KPK',              division: 'Peshawar Division',    office: 'SNGPL SDC, Shabqadar Road, Charsadda',                   areas: 'Civil Lines, Tangi, Shabqadar',                                    consumers: '20,000+' },
  { name: 'Karak',        slug: 'karak',        province: 'KPK',     region: 'KPK',              division: 'Kohat Division',       office: 'SNGPL SDC, Karak Main Bazaar, Karak',                    areas: 'Civil Lines, Banda Daud Shah',                                     consumers: '12,000+' },
];

// ─────────── SLUG TYPES PER CATEGORY ───────────

export const SLUG_TYPES: Record<Category, string[]> = {
  'bill-check': [
    'check-online','check-monthly-bill','view-current-bill','download-bill','get-bill-copy',
    'check-latest-bill','check-via-app','check-via-sms','check-via-website','check-via-whatsapp',
    'residential-bill-check','commercial-bill-check','find-bill-amount','view-due-amount',
    'check-arrears','check-outstanding','winter-bill','summer-bill','high-bill',
    'check-january','check-february','check-march','check-april','check-may','check-june',
    'check-july','check-august','check-september','check-october','check-november','check-december',
    'check-2024','check-2025','bill-check-guide','gas-bill-inquiry','get-gas-bill',
    'monthly-gas-bill','bill-due-date','overdue-bill','unpaid-bill','previous-bill',
    'current-month-bill','last-month-bill','billing-cycle','meter-reading','consumption-bill',
    'online-portal','gas-meter-bill','residential-gas-bill','commercial-gas-bill',
    'industrial-gas-bill','quarterly-bill','domestic-gas-bill','sngpl-online-bill','gas-account-bill',
    'gas-bill-status','next-bill-estimate',
  ],
  'consumer-number': [
    'find-consumer-number','locate-consumer-number','consumer-number-format',
    'where-to-find-consumer-number','how-to-get-consumer-number','new-consumer-number',
    'update-consumer-number','meter-vs-consumer-number','lost-consumer-number',
    'consumer-number-recovery','verify-consumer-number','consumer-number-lookup',
    'consumer-number-on-bill','what-is-consumer-number','sngpl-consumer-id',
    'old-consumer-number','change-consumer-number','connection-transfer',
    'digit-format','consumer-number-online','consumer-number-sms','consumer-number-app',
    'consumer-number-office','consumer-number-registration','new-connection-number',
    'domestic-consumer-number','industrial-consumer-number','commercial-consumer-number',
    'region-code','distribution-code','consumer-number-meaning','how-many-digits',
    'consumer-number-check','account-number','sngpl-account-id','10-digit-consumer-number',
    '11-digit-consumer-number','12-digit-consumer-number','connection-id',
    'customer-reference-number','billing-account-number','gas-connection-number',
    'find-account-sngpl','recover-lost-number','sngpl-meter-id','cnic-consumer-lookup',
  ],
  'duplicate-bill': [
    'download-duplicate-bill','get-duplicate-copy','duplicate-bill-online',
    'pdf-download','print-gas-bill','reprint-bill','get-copy','download-via-portal',
    'download-via-app','download-via-whatsapp','download-via-sms','visit-office',
    'android-download','iphone-download','desktop-download','how-to-get-duplicate',
    'free-duplicate-bill','same-day-duplicate','instant-duplicate','sngpl-bill-copy',
    'lost-gas-bill','replace-gas-bill','reissue-bill','duplicate-validity',
    'bank-payment-copy','digital-bill','soft-copy-bill','electronic-bill',
    'email-bill','bill-archive','bill-history','photocopy-bill','certified-copy',
    'old-bill-copy','monthly-bill-copy',
  ],
  'payment': [
    'pay-online','pay-easypaisa','pay-jazzcash','pay-bank-transfer','pay-atm',
    'pay-hbl','pay-ubl','pay-mcb','pay-meezan','pay-allied-bank','online-payment',
    'late-payment','payment-deadline','payment-methods','payment-confirmation',
    'payment-receipt','bank-branch-payment','atm-guide','mobile-payment',
    'cash-payment','over-counter','franchise-payment','portal-payment',
    'internet-banking','mobile-banking','easypaisa-guide','jazzcash-guide',
    'avoid-disconnection','pay-before-due','gas-bill-payment','sngpl-payment',
    'pay-card','failed-payment','missing-payment','payment-confirmation-check',
  'auto-payment-sngpl',
  ],
  'troubleshooting': [
    'bill-not-available','website-error','wrong-amount','consumer-number-error',
    'payment-not-reflected','high-bill','no-gas-supply','meter-fault',
    'disconnection-notice','reconnection','billing-dispute','wrong-address',
    'connection-transfer','new-connection','meter-reading-error','subsidy-issue',
    'surcharge-dispute','appeal-bill','overcharge','double-charge',
    'bill-not-generated','helpline','complaint','customer-care','office-address',
    'connection-issue','gas-pressure-low','leakage','meter-not-working',
    'calculation-error','demand-notice','notice-response','reconnection-application',
    'arrears-dispute','refund','new-meter','meter-change','address-change',
    'name-change','sngpl-portal-complaint','online-complaint','track-complaint',
    'emergency','whatsapp-support','high-consumption','seasonal-increase',
    'tariff-increase','levy-dispute','inspection-request','resolve-issue',
    'gas-disconnected','restoration','billing-error','account-issue','security-deposit',
  ],
};

// ─────────── HELPERS ───────────

export function getAllSlugsForCategory(category: Category): string[] {
  const types = SLUG_TYPES[category] ?? [];
  return CITIES.flatMap(city =>
    types.map(type => `${city.slug}-${type}`)
  );
}

export function getTotalPageCount(): number {
  return CATEGORIES.reduce((sum, cat) => sum + getAllSlugsForCategory(cat).length, 0);
}

export function parseSlug(category: Category, slug: string): { city: CityData; type: string } | null {
  for (const city of CITIES) {
    if (slug.startsWith(city.slug + '-')) {
      const type = slug.slice(city.slug.length + 1);
      if (SLUG_TYPES[category]?.includes(type)) {
        return { city, type };
      }
    }
  }
  return null;
}

export function getTopStaticParams(limit = 400): { category: string; slug: string }[] {
  // Pre-build top 400 pages: 10 cities × 8 types × 5 categories
  const results: { category: string; slug: string }[] = [];
  const topCities = CITIES.slice(0, 10);
  for (const cat of CATEGORIES) {
    for (const city of topCities) {
      for (const type of (SLUG_TYPES[cat] ?? []).slice(0, 8)) {
        results.push({ category: cat, slug: `${city.slug}-${type}` });
        if (results.length >= limit) return results;
      }
    }
  }
  return results;
}

export function getCategoryLabel(category: Category): string {
  return {
    'bill-check': 'SNGPL Bill Check',
    'consumer-number': 'Consumer Number Guide',
    'duplicate-bill': 'Duplicate Bill Download',
    'payment': 'Bill Payment Guide',
    'troubleshooting': 'SNGPL Troubleshooting',
  }[category];
}

export function getTypeLabel(type: string): string {
  return type
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}
