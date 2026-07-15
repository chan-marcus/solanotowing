// ============================================================
// CLONE CONFIG - to deploy this template in a new market,
// edit this file + src/data/services.ts + src/data/cities.ts
// ============================================================

export const SITE = {
  brand: 'Solano Towing',
  legalLine:
    'Solano Towing is a local dispatch and referral service. Towing and roadside services are performed by licensed independent operators in Solano County.',
  domain: 'solanotowing.com',
  url: 'https://solanotowing.com',

  // Real Twilio number. tel: links + schema use pure digits; humans see the vanity.
  phone: '+17073567623',
  phoneDisplay: '(707) 356-ROAD',
  phoneDigits: '(707) 356-7623',

  city: 'Fairfield',
  county: 'Solano County',
  state: 'CA',
  serviceAreaLine: 'Fairfield, Suisun City, Vacaville, Cordelia, Dixon, Rio Vista & Travis AFB',
  zips: ['94533', '94534', '94535', '94585', '95687', '95688', '95620', '94571'],
  corridors: ['I-80', 'I-680', 'Highway 12', 'the Cordelia Junction'],

  etaLine: 'Average 25-minute response across the I-80 corridor',
  hoursLine: 'Open 24 hours, 7 days a week',

  gtag: '', // TODO: GA4 / call tracking snippet id

  // Google Maps Embed API key. Leave '' to use the free keyless embed.
  // Paste a key here to switch to the official Maps Embed API. Restrict the key
  // in Google Cloud Console to the "Maps Embed API" + your domain (solanotowing.com).
  mapsApiKey: 'AIzaSyDB6_Xtqt3dcTAlm4UzydxkqOXbxeJmYz8'
};
