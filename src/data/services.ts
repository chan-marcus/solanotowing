export interface Service {
  slug: string;
  name: string;
  short: string; // card blurb on home page
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[]; // paragraphs, locally written
  bullets: { label: string; text: string }[];
  faq: { q: string; a: string }[];
}

export const SERVICES: Service[] = [
  {
    slug: 'emergency-towing',
    name: 'Emergency Towing',
    short: 'Broken down or in an accident? A truck is dispatched the moment you call, day or night.',
    metaTitle: '24/7 Emergency Towing in Fairfield, CA | Solano Towing',
    metaDesc:
      'Emergency towing in Fairfield, Suisun City & Vacaville. 24/7 dispatch, average 25-minute response on the I-80 corridor. Call (707) 356-7623.',
    h1: 'Emergency Towing in Fairfield, CA',
    intro: [
      'When your car dies on I-80 near the Cordelia Junction or won\u2019t restart in a parking lot off Travis Boulevard, you don\u2019t want a call center in another state. You want a truck that\u2019s already in Solano County. We dispatch local operators 24 hours a day, and most calls in Fairfield, Suisun City, and Vacaville see a truck in about 25 minutes.',
      'Every tow is handled by a licensed, insured local operator with flatbed and wheel-lift equipment. Whether you\u2019re heading to a shop in Fairfield, your driveway in Vacaville, or a dealership in the Bay Area, you get a firm price before the truck rolls.'
    ],
    bullets: [
      { label: '24/7 dispatch', text: 'Nights, weekends, holidays. Someone always answers.' },
      { label: 'Local trucks', text: 'Operators based in Fairfield and Vacaville, not routed from Sacramento.' },
      { label: 'Up-front pricing', text: 'Hook fee and per-mile rate quoted on the phone before dispatch.' }
    ],
    faq: [
      {
        q: 'How fast can a tow truck reach me in Fairfield?',
        a: 'Most calls inside Fairfield, Suisun City, and Cordelia see a truck in 20 to 30 minutes. Rush hour at the I-80/I-680 interchange can add a few minutes.'
      },
      {
        q: 'Can you tow my car if I was in an accident?',
        a: 'Yes. If CHP is on scene and has already called a rotation tow, that truck takes the vehicle. Otherwise, call us and we\u2019ll dispatch directly to you.'
      },
      {
        q: 'Do you tow at night?',
        a: 'Around the clock. A large share of our calls come between 10pm and 4am, when many local yards stop answering.'
      }
    ]
  },
  {
    slug: 'flatbed-towing',
    name: 'Flatbed Towing',
    short: 'Damage-free transport for AWD vehicles, low cars, EVs, and anything you don\u2019t want dragged.',
    metaTitle: 'Flatbed Towing in Fairfield & Vacaville, CA | Solano Towing',
    metaDesc:
      'Flatbed tow trucks in Fairfield, Suisun City & Vacaville for AWD, EVs, lowered and luxury vehicles. 24/7. Call (707) 356-7623 for a quote.',
    h1: 'Flatbed Towing in Fairfield & Vacaville',
    intro: [
      'All-wheel-drive SUVs, Teslas and other EVs, lowered cars, and anything with damaged wheels should ride on a flatbed, not behind a wheel lift. Our dispatch network runs modern rollbacks across Solano County, so the right truck shows up the first time.',
      'Flatbeds are also the answer for non-running project cars, motorcycles strapped on deck, and dealership transfers between Fairfield and the greater Bay Area.'
    ],
    bullets: [
      { label: 'EV-safe', text: 'Full-lift transport, required by most EV manufacturers including Tesla.' },
      { label: 'Low-clearance boards', text: 'Extended ramps for lowered and sports cars.' },
      { label: 'Long-distance', text: 'Flat per-mile rates for tows to Sacramento, Napa, or the Bay Area.' }
    ],
    faq: [
      {
        q: 'Does my AWD vehicle need a flatbed?',
        a: 'Yes. Towing an AWD vehicle with two wheels on the ground can damage the drivetrain. We dispatch flatbeds for AWD by default.'
      },
      {
        q: 'Can you move a car that doesn\u2019t run or steer?',
        a: 'Yes. Operators carry skates and winches for vehicles that don\u2019t roll, steer, or go into neutral.'
      }
    ]
  },
  {
    slug: 'jump-start',
    name: 'Jump Starts',
    short: 'Dead battery in a driveway, parking garage, or the Solano Town Center lot. Usually under 30 minutes.',
    metaTitle: 'Car Jump Start Service in Fairfield, CA | Solano Towing',
    metaDesc:
      'Dead battery? Mobile jump start service in Fairfield, Suisun City & Vacaville, 24/7. Call (707) 356-7623 and get moving in about 25 minutes.',
    h1: 'Jump Start Service in Fairfield, CA',
    intro: [
      'Cold snap mornings in Suisun Valley and 100-degree summer afternoons both kill batteries, and it always happens in the worst spot: the Solano Town Center garage, the commuter lot at the Fairfield Transportation Center, or your own driveway before a shift at Travis.',
      'A service truck comes to you with a professional jump pack, checks that the alternator is charging, and if the battery is done for, can tow you straight to a parts store or your shop instead of leaving you to stall at the next light.'
    ],
    bullets: [
      { label: 'Comes to you', text: 'Driveways, garages, parking lots, roadside.' },
      { label: 'System check', text: 'Quick verify that the alternator is charging before we leave.' },
      { label: 'Plan B included', text: 'If a jump won\u2019t hold, we quote a tow on the spot.' }
    ],
    faq: [
      {
        q: 'How much does a jump start cost in Fairfield?',
        a: 'Most jump starts in Fairfield, Suisun City, and Vacaville run a flat service-call fee, quoted before dispatch. After-hours calls are the same flat rate.'
      },
      {
        q: 'My car clicks but won\u2019t turn over. Will a jump work?',
        a: 'Usually yes, that\u2019s the classic dead-battery sound. If it\u2019s the starter instead, the operator will know within a minute and can tow you to a shop.'
      }
    ]
  },
  {
    slug: 'lockout-service',
    name: 'Car Lockouts',
    short: 'Keys locked in the car? Damage-free entry, no broken windows, day or night.',
    metaTitle: 'Car Lockout Service in Fairfield, CA | Solano Towing',
    metaDesc:
      'Locked out of your car in Fairfield, Suisun City or Vacaville? 24/7 damage-free lockout service. Call (707) 356-7623.',
    h1: 'Car Lockout Service in Fairfield',
    intro: [
      'Keys sitting on the seat at a gas station on North Texas Street, or locked in the trunk at the Suisun Waterfront: it happens to everyone once. Operators open vehicles with professional wedge-and-reach tools, the same equipment roadside clubs use, without drilling locks or breaking glass.',
      'Kids or pets locked inside? Say so when you call and your job jumps the queue. If it\u2019s an emergency, call 911 first; Fairfield PD and Suisun Fire will break a window when seconds matter, and we\u2019ll handle the situations that aren\u2019t life-threatening.'
    ],
    bullets: [
      { label: 'Damage-free entry', text: 'Wedge and long-reach tools, no drilled locks.' },
      { label: 'All makes', text: 'Domestic, import, and most modern keyless vehicles.' },
      { label: 'Priority for kids & pets', text: 'These calls move to the front of the line.' }
    ],
    faq: [
      {
        q: 'Can you unlock a car with the engine running?',
        a: 'Yes, that\u2019s one of the most common calls we get, especially on cold mornings when people warm the car up and the door locks behind them.'
      },
      {
        q: 'What if my key fob battery died?',
        a: 'Most fobs hide a physical key inside, and most keyless cars have a hidden lock cylinder. The operator can show you, or simply open the car.'
      }
    ]
  },
  {
    slug: 'winch-out',
    name: 'Winch-Outs & Recovery',
    short: 'Stuck in mud, a ditch, or off the shoulder along Highway 12 or Suisun Valley Road.',
    metaTitle: 'Winch-Out & Off-Road Recovery in Solano County | Solano Towing',
    metaDesc:
      'Stuck in a ditch or mud in Fairfield, Suisun Valley or along Hwy 12? 24/7 winch-out and recovery. Call (707) 356-7623.',
    h1: 'Winch-Out & Recovery in Solano County',
    intro: [
      'Winter rain turns the shoulders along Suisun Valley Road and Highway 12 to soup, and every year plenty of drivers find out how soft that ground is. Whether you slid off the pavement, dropped a wheel into a ditch on Rockville Road, or buried an axle at the edge of a vineyard, a recovery truck with a winch gets you back on solid ground.',
      'Operators assess the angle and ground before pulling, use tree savers and proper rigging, and check the vehicle for damage before you drive off. If it isn\u2019t drivable, the same truck tows it.'
    ],
    bullets: [
      { label: 'Mud, ditch & sand', text: 'Recovery from soft shoulders, fields, and embankments.' },
      { label: 'Proper rigging', text: 'Controlled pulls that don\u2019t bend what the ditch didn\u2019t.' },
      { label: 'Tow if needed', text: 'Recovery and tow handled in one visit, one price.' }
    ],
    faq: [
      {
        q: 'How much does a winch-out cost?',
        a: 'Simple pulls near the pavement are usually a flat fee. Long pulls, steep angles, or deep mud are quoted after a quick description over the phone, always before the truck rolls.'
      },
      {
        q: 'Will winching damage my car?',
        a: 'Operators attach to designated recovery points and pull in line with the vehicle. It\u2019s far gentler than spinning your tires until something breaks.'
      }
    ]
  },
  {
    slug: 'roadside-assistance',
    name: 'Roadside Assistance',
    short: 'Flat tires, fuel delivery, and small fixes that get you rolling without a tow.',
    metaTitle: '24/7 Roadside Assistance in Fairfield, CA | Solano Towing',
    metaDesc:
      'Flat tire change, gas delivery and roadside help in Fairfield, Suisun City & Vacaville, 24/7. Call (707) 356-7623.',
    h1: 'Roadside Assistance in Fairfield, CA',
    intro: [
      'Not every breakdown needs a tow. A flat on the I-80 shoulder near the Air Base Parkway exit, an empty tank two miles short of the Cordelia gas stations, a battery that just needs a boost: a service truck handles these on the spot for a flat call-out fee.',
      'If the problem turns out to be bigger than roadside tools can fix, the tow is dispatched immediately with no second wait in the queue.'
    ],
    bullets: [
      { label: 'Tire changes', text: 'Your spare installed safely, away from traffic.' },
      { label: 'Fuel delivery', text: 'Enough gas or diesel to reach the nearest station.' },
      { label: 'One call escalation', text: 'If it needs a tow after all, the truck is already moving.' }
    ],
    faq: [
      {
        q: 'What if I don\u2019t have a spare tire?',
        a: 'Many newer cars don\u2019t. We tow you to the nearest open tire shop in Fairfield or Vacaville, and can tell you on the phone which ones are open.'
      },
      {
        q: 'Do you bring diesel?',
        a: 'Yes, both gasoline and diesel delivery are available across the service area.'
      }
    ]
  },
  {
    slug: 'motorcycle-towing',
    name: 'Motorcycle Towing',
    short: 'Chock-and-strap flatbed transport for bikes. No dragged wheels, no dropped bikes.',
    metaTitle: 'Motorcycle Towing in Fairfield & Solano County | Solano Towing',
    metaDesc:
      'Motorcycle towing in Fairfield, Suisun City & Vacaville with wheel chocks and soft straps. 24/7. Call (707) 356-7623.',
    h1: 'Motorcycle Towing in Solano County',
    intro: [
      'Bikes break down on the best roads: Highway 12 toward Rio Vista, the twisties out past Rockville Hills, or just the daily I-80 slog. A motorcycle needs a flatbed with a wheel chock and soft-loop straps, not a wheel-lift and hope.',
      'Operators secure the bike at the triple clamp and frame, never the bars alone, and deliver it to your garage or shop standing exactly as it left.'
    ],
    bullets: [
      { label: 'Wheel chock equipped', text: 'Front wheel locked in a chock for the whole ride.' },
      { label: 'Soft-loop straps', text: 'No scratched tanks, no crushed lines.' },
      { label: 'All bikes', text: 'Cruisers, sport bikes, dual-sports, and trikes.' }
    ],
    faq: [
      {
        q: 'Can you tow a motorcycle that won\u2019t roll?',
        a: 'Yes. With a seized wheel the operator uses skates or a winch-assisted load. Mention it when you call so the right gear is on the truck.'
      }
    ]
  },
  {
    slug: 'heavy-duty-towing',
    name: 'Heavy Duty Towing',
    short: 'Box trucks, RVs, buses, and equipment along the I-80 and I-680 freight corridor.',
    metaTitle: 'Heavy Duty Towing on the I-80 Corridor | Solano Towing',
    metaDesc:
      'Heavy duty and medium duty towing for box trucks, RVs and commercial vehicles in Fairfield & Solano County. 24/7 dispatch: (707) 356-7623.',
    h1: 'Heavy Duty Towing on the I-80 Corridor',
    intro: [
      'The I-80/I-680/Highway 12 junction moves a constant stream of freight, and when a box truck loses an axle or an RV overheats on the Vaca grade, it takes more than a one-ton wrecker to move it. We dispatch medium and heavy duty units for commercial vehicles across Solano County.',
      'Fleet managers: after-hours breakdowns between the Bay Area and Sacramento are the exact gap we cover. One number, any hour, and your driver isn\u2019t stranded at a truck stop until morning.'
    ],
    bullets: [
      { label: 'Medium & heavy units', text: 'Box trucks, buses, RVs, and equipment.' },
      { label: 'Load-aware', text: 'Operators experienced with loaded vehicles and weight limits.' },
      { label: 'Fleet friendly', text: 'Direct billing available for repeat commercial accounts.' }
    ],
    faq: [
      {
        q: 'Can you tow a loaded box truck?',
        a: 'Yes, within equipment ratings. Have the GVWR and rough load weight ready when you call and dispatch will send the right class of truck the first time.'
      }
    ]
  },
  {
    slug: 'accident-recovery',
    name: 'Accident Recovery',
    short: 'Post-collision tows, secure transport to the shop of your choice, and help with the insurance steps.',
    metaTitle: 'Accident Towing & Recovery in Fairfield, CA | Solano Towing',
    metaDesc:
      'Accident recovery and collision towing in Fairfield, Suisun City & Vacaville. Your choice of body shop. 24/7: (707) 356-7623.',
    h1: 'Accident Recovery in Fairfield, CA',
    intro: [
      'After a collision on I-80 or at one of Fairfield\u2019s big intersections, you have more choices than the moment suggests. Unless CHP has ordered a rotation tow to clear the road, you choose who tows your car and where it goes, and taking it straight to a body shop you trust avoids daily storage fees at a yard you didn\u2019t pick.',
      'Operators secure loose panels, sweep debris where safe, photograph the vehicle at pickup, and deliver to the shop or your home. Keep the tow receipt; your insurer reimburses towing on most collision claims.'
    ],
    bullets: [
      { label: 'Your shop, your choice', text: 'Direct delivery to the body shop you pick.' },
      { label: 'Documented handling', text: 'Photos at hookup and drop-off.' },
      { label: 'Insurance-ready receipt', text: 'Itemized for your claim.' }
    ],
    faq: [
      {
        q: 'The police already called a tow. Can I still use you?',
        a: 'If CHP ordered a rotation tow to clear the roadway, that truck takes the car, usually to a storage yard. You can then have us move it from the yard to your body shop, which stops the daily storage fees.'
      }
    ]
  },
  {
    slug: 'long-distance-towing',
    name: 'Long Distance Towing',
    short: 'Fairfield to Sacramento, the Bay Area, or anywhere in Northern California at a flat per-mile rate.',
    metaTitle: 'Long Distance Towing from Fairfield, CA | Solano Towing',
    metaDesc:
      'Long distance towing from Fairfield & Solano County to Sacramento, San Francisco, and Northern California. Flat rates: (707) 356-7623.',
    h1: 'Long Distance Towing from Fairfield',
    intro: [
      'Fairfield sits halfway between the Bay Area and Sacramento, which means half the breakdowns here belong to cars that live somewhere else. Getting your vehicle back to a home shop in Concord, Davis, or San Jose is a flat hook fee plus a per-mile rate, quoted to the dollar before dispatch.',
      'Flatbed transport is standard for long hauls, and you can ride along in most trucks. Buying a car in Solano County or shipping one to a buyer? Scheduled transport runs at a lower rate than emergency calls.'
    ],
    bullets: [
      { label: 'Quoted to the dollar', text: 'Hook fee plus per-mile, agreed before the truck rolls.' },
      { label: 'Flatbed standard', text: 'No drivetrain wear across a hundred miles.' },
      { label: 'Scheduled discounts', text: 'Non-emergency transport costs less. Book ahead.' }
    ],
    faq: [
      {
        q: 'How much is a tow from Fairfield to Sacramento?',
        a: 'It depends on the exact pickup and drop, but it\u2019s a simple hook fee plus mileage. Call with both addresses and you\u2019ll have an exact number in two minutes.'
      }
    ]
  },
  {
    slug: 'ev-towing',
    name: 'EV & Tesla Towing',
    short: 'Full-lift flatbed transport for electric vehicles, the way manufacturers require.',
    metaTitle: 'EV & Tesla Towing in Fairfield, CA | Solano Towing',
    metaDesc:
      'Electric vehicle and Tesla towing in Fairfield, Suisun City & Vacaville. Manufacturer-correct flatbed transport, 24/7. Call (707) 356-7623.',
    h1: 'EV & Tesla Towing in Fairfield',
    intro: [
      'Electric vehicles can\u2019t be flat-towed or lifted by two wheels the way a gas car sometimes can. Tesla, Rivian, and most EV makers require full-lift flatbed transport, because dragging the drive wheels can damage the motor and regenerative braking system. Every EV call we dispatch goes out on a flatbed, no exceptions.',
      'Whether your battery hit zero on the I-80 grade, a charging session failed at the Vacaville outlets, or the car simply won\u2019t wake up in your driveway, operators know the tow-mode and transport-mode steps for the major EV brands and can walk you through them on the phone before the truck arrives.'
    ],
    bullets: [
      { label: 'Flatbed only', text: 'Full-lift transport, as Tesla and other EV makers require.' },
      { label: 'Tow-mode guidance', text: 'We talk you through putting the car in transport mode on the phone.' },
      { label: 'Dead-battery ready', text: 'Skates and winch for an EV that won\u2019t roll or shift.' }
    ],
    faq: [
      {
        q: 'Can you tow a Tesla that has no charge?',
        a: 'Yes. A fully depleted Tesla won\u2019t shift to neutral on its own, so operators use skates or a winch to load it onto the flatbed without dragging the wheels.'
      },
      {
        q: 'Is flatbed really necessary for my EV?',
        a: 'For nearly all EVs, yes. Towing with drive wheels on the ground can damage the motor. A flatbed is the safe, manufacturer-approved method, and it\u2019s what we send by default.'
      }
    ]
  },
  {
    slug: 'impound-retrieval',
    name: 'Impound & Storage Tows',
    short: 'Get your car out of a storage yard and to your shop before daily fees pile up.',
    metaTitle: 'Impound & Storage Yard Towing in Solano County | Solano Towing',
    metaDesc:
      'Move your vehicle out of an impound or storage yard in Fairfield & Solano County to your shop or home. Stop daily fees. Call (707) 356-7623.',
    h1: 'Impound & Storage Yard Tows',
    intro: [
      'After an accident or a CHP rotation tow, your car often ends up in a storage yard charging daily fees that climb fast. Once you\u2019ve cleared the release paperwork, we\u2019ll pick the vehicle up from the yard and deliver it to your body shop, mechanic, or home, which stops the storage clock as soon as possible.',
      'This is one of the most overlooked ways to save money after a collision in Solano County. A short second tow from the yard to your chosen shop almost always costs less than the storage fees it prevents from stacking up.'
    ],
    bullets: [
      { label: 'Stops the fee clock', text: 'The sooner the car leaves the yard, the less you pay in storage.' },
      { label: 'Yard-to-shop', text: 'Direct delivery to the mechanic or body shop you choose.' },
      { label: 'Paperwork-ready', text: 'We coordinate pickup once your release is cleared.' }
    ],
    faq: [
      {
        q: 'How do I get my car out of impound in Fairfield?',
        a: 'First get a release from whoever authorized the tow (often CHP or the yard itself), settle any required fees, then call us to move the vehicle to your shop or home. We handle the transport once the release is in hand.'
      },
      {
        q: 'Why not just leave it at the storage yard?',
        a: 'Storage yards charge by the day, and the total grows quickly. Moving the car to your own shop or driveway stops those daily charges, which usually saves far more than the short tow costs.'
      }
    ]
  }
];
