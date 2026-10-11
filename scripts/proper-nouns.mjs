// Place names and other proper nouns that must never break across lines.
// scripts/typeset.mjs wraps every match on every page in <span class="pn">,
// which is white-space: nowrap. This rule outranks line fill and balance.
//
// Add new names here when copy mentions them. Patterns below already cover
// numbered routes, most street names, the phone number and dates.

// Multi-word names the patterns below would miss. Longest wins, so list a
// longer form ("Solano County") alongside its shorter one ("Solano").
export const NAMES = [
  'Solano County', 'Solano Towing', 'Solano Town Center', 'Suisun City',
  'Suisun Valley', 'Suisun Marsh', 'Suisun Waterfront', 'Rio Vista',
  'Cordelia Junction', 'Green Valley', 'Travis Air Force Base', 'Travis AFB',
  'Bay Area', 'East Bay', 'North Bay', 'Northern California', 'Central Valley',
  'Carquinez Bridge', 'Carquinez Strait', 'Benicia-Martinez Bridge',
  'Benicia Industrial Park', 'Benicia Marina', 'Rio Vista Bridge',
  'Mare Island', 'Mare Island Causeway', 'Glen Cove', 'Hiddenbrooke',
  'Vallejo Ferry Terminal', 'Six Flags Discovery Kingdom', 'Six Flags',
  'Nut Tree', 'Vacaville Premium Outlets', 'Premium Outlets',
  'Fairfield Transportation Center', 'Browns Valley', 'Lawler Ranch',
  'Amtrak Depot', 'Sacramento River', 'Napa River', 'Sears Point',
  'American Canyon', 'Google Maps', 'Class A', 'Class C'
];

const STREET = '(?:Road|Lane|Avenue|Boulevard|Street|Parkway|Way|Drive|Freeway|Bypass|Causeway)';
const CAP = "[A-Z][A-Za-z'-]*";

export const PATTERNS = [
  // Highway 12, State Route 37, Interstate 80, CA 29
  /\b(?:Highway|Hwy|Interstate|State Route|Route|CA)[  ]\d+\b/,
  // I-80, I-680, I-780, I-505, and the junctions written as I-80/I-680
  /\bI-\d+(?:\/I-\d+)*\b/,
  // Two or three capitalized words ending in a street type: Air Base Parkway,
  // Suisun Valley Road, Pitt School Road, North Texas Street
  new RegExp(`\\b(?:${CAP}[ \\u00a0]){1,3}${STREET}\\b`),
  // Phone numbers: (707) 356-ROAD, (707) 356-7623
  /\(\d{3}\)[  ]\d{3}-[0-9A-Z]{4}\b/,
  // Dates: October 11, 2026
  /\b(?:January|February|March|April|May|June|July|August|September|October|November|December)[  ]\d{1,2}(?:,[  ]\d{4})?\b/,
  // ZIP 94533
  /\bZIP[  ]\d{5}\b/
];

// Leading words a street-name match must not swallow (sentence starts and
// prepositions that happen to be capitalized at the start of a sentence).
export const NOT_PART_OF_NAME = new Set([
  'The', 'A', 'An', 'On', 'In', 'At', 'From', 'To', 'Off', 'Near', 'Past', 'Via',
  'And', 'Or', 'Add', 'Covering', 'Inside', 'Take', 'Use', 'Avoid', 'Many',
  'Most', 'Downtown', 'Along', 'Between'
  // Compass words are deliberately absent: the streets here are directional
  // (North Texas Street, West Texas Street), so trimming them would split the name.
]);
