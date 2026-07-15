export interface Service {
  slug: string;
  name: string;
  short: string; // card blurb on home page
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[]; // paragraphs, locally written
  bullets: { label: string; text: string }[];
  body: { h: string; p: string[] }[]; // long-form local copy, rendered as article sections
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
      'When your car dies on I-80 near the Cordelia Junction or won’t restart in a parking lot off Travis Boulevard, you don’t want a call center in another state. You want a truck that’s already in Solano County. We dispatch local operators 24 hours a day, and most calls in Fairfield, Suisun City, and Vacaville see a truck in about 25 minutes.',
      'Every tow is handled by a licensed, insured local operator with flatbed and wheel-lift equipment. Whether you’re heading to a shop in Fairfield, your driveway in Vacaville, or a dealership in the Bay Area, you get a firm price before the truck rolls.'
    ],
    bullets: [
      { label: '24/7 dispatch', text: 'Nights, weekends, holidays. Someone always answers.' },
      { label: 'Local trucks', text: 'Operators based in Fairfield and Vacaville, not routed from Sacramento.' },
      { label: 'Up-front pricing', text: 'Hook fee and per-mile rate quoted on the phone before dispatch.' },
      { label: 'Flatbed or wheel-lift', text: 'The right truck for your vehicle sent the first time.' }
    ],
    body: [
      {
        h: 'What happens the moment you call',
        p: [
          'The dispatcher who answers asks three things: where you are, what you’re driving, and where it needs to go. From that, you get a firm number — hook fee plus mileage as a single figure — and a realistic ETA before anyone commits you to anything. There’s no meter running while you decide.',
          'Then a local operator is routed to you directly. Because trucks stage near the Cordelia scales and along the I-80 grade, the one sent to you is usually the closest one, not the cheapest one to send from an out-of-area yard. That’s the whole reason a 25-minute average is realistic here and an hour-plus quote from a distant dispatcher isn’t.'
        ]
      },
      {
        h: 'Where Fairfield breakdowns cluster',
        p: [
          'Certain stretches strand drivers far more than others: the westbound I-80 climb toward the Cordelia truck scales, the I-80/I-680/Highway 12 interchange itself, the surface backups on Travis Boulevard and North Texas Street, and the commuter crush at the Air Base Parkway on-ramps. Knowing the road you’re on and the last exit you passed shaves real minutes off any response time.',
          'If you’re stopped on a freeway shoulder, pull as far right as the car will roll, put your hazards on, and stay belted inside unless you can get out on the passenger side behind a barrier. Give dispatch your direction of travel and nearest exit, and keep your phone free for the operator’s call as they close in.'
        ]
      }
    ],
    faq: [
      {
        q: 'How fast can a tow truck reach me in Fairfield?',
        a: 'Most calls inside Fairfield, Suisun City, and Cordelia see a truck in 20 to 30 minutes. Rush hour at the I-80/I-680 interchange can add a few minutes.'
      },
      {
        q: 'What information should I have ready when I call?',
        a: 'Your location (nearest exit or cross street and direction of travel), the year, make, and model of your vehicle, whether it rolls and steers, and the address you want it taken to. That’s enough for a firm quote and the right truck.'
      },
      {
        q: 'Can you tow my car if I was in an accident?',
        a: 'Yes. If CHP is on scene and has already called a rotation tow, that truck takes the vehicle. Otherwise, call us and we’ll dispatch directly to you.'
      },
      {
        q: 'Do you tow to my house, or only to a shop?',
        a: 'Wherever you want it. Your driveway, your mechanic, a dealership, or a body shop of your choice — you name the drop-off and it’s quoted into the price up front.'
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
    short: 'Damage-free transport for AWD vehicles, low cars, EVs, and anything you don’t want dragged.',
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
      { label: 'Long-distance', text: 'Flat per-mile rates for tows to Sacramento, Napa, or the Bay Area.' },
      { label: 'Zero drivetrain wear', text: 'All four wheels off the ground, nothing spinning or dragging.' }
    ],
    body: [
      {
        h: 'When a flatbed is the only right answer',
        p: [
          'A wheel-lift is fine for a lot of front-wheel-drive cars on a short hop. But once you’re dealing with all-wheel drive, an EV, a lowered or exotic car, a vehicle that won’t roll or steer, or one with wheel or suspension damage, a flatbed stops being optional. Dragging any of those on two wheels risks a repair bill that dwarfs the tow.',
          'Because so many of our calls fall into those categories — AWD crossovers, Teslas that won’t shift to neutral, project cars going to a shop — flatbeds are what we send by default whenever there’s any doubt. Mention your vehicle when you call and dispatch matches the deck length and ramp type to it.'
        ]
      },
      {
        h: 'How the load actually works',
        p: [
          'The operator angles the bed down, winches the vehicle up on soft straps or wheel nets, and secures it at the tires or frame — never by yanking on bumpers or body panels. For a car that won’t roll or is locked in park, they use skates or a winch-assisted pull so nothing gets forced.',
          'On most trucks you can ride along in the cab, which matters on a long haul out to the Bay Area or Sacramento when you don’t have another way home. Ask when you book and dispatch will confirm the operator has room.'
        ]
      }
    ],
    faq: [
      {
        q: 'Does my AWD vehicle need a flatbed?',
        a: 'Yes. Towing an AWD vehicle with two wheels on the ground can damage the drivetrain. We dispatch flatbeds for AWD by default.'
      },
      {
        q: 'Can you move a car that doesn’t run or steer?',
        a: 'Yes. Operators carry skates and winches for vehicles that don’t roll, steer, or go into neutral.'
      },
      {
        q: 'Is a flatbed more expensive than a regular tow?',
        a: 'For local jobs the price is usually the same hook-fee-plus-mileage structure. Any difference is quoted on the phone before the truck rolls, so there are no surprises at drop-off.'
      },
      {
        q: 'Can I ride along in the truck?',
        a: 'In most cases, yes — there’s room in the cab for the driver. Say so when you call, especially for a long tow, and dispatch will confirm.'
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
      { label: 'Plan B included', text: 'If a jump won’t hold, we quote a tow on the spot.' }
    ],
    body: [
      {
        h: 'Why batteries die when they do',
        p: [
          'Solano County is hard on batteries from both ends of the calendar. Triple-digit Vacaville summers cook the electrolyte and shorten a battery’s life; the first cold, damp mornings off the Suisun Marsh then expose a battery that was already on its way out. Add short around-town trips that never fully recharge it, and a two- or three-year-old battery can quit without much warning.',
          'The other common culprit is a small drain left overnight — an interior light, a trunk that didn’t latch, a phone charger pulling power. Those leave a perfectly good battery flat by morning, and a jump gets you rolling again in minutes.'
        ]
      },
      {
        h: 'When a jump won’t be the whole story',
        p: [
          'Before the operator leaves, they’ll check that your alternator is actually charging the battery back up. If it isn’t, driving off on a jump just means stalling again a few miles down the road — so they’ll tell you straight and can tow you to a shop instead.',
          'If the battery itself is simply worn out, a jump will start the car but the fix is a replacement. The operator can get you running and point you to an open parts store in Fairfield or Vacaville, or tow you there if you’d rather not risk the drive.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a jump start cost in Fairfield?',
        a: 'Most jump starts in Fairfield, Suisun City, and Vacaville run a flat service-call fee, quoted before dispatch. After-hours calls are the same flat rate.'
      },
      {
        q: 'My car clicks but won’t turn over. Will a jump work?',
        a: 'Usually yes, that’s the classic dead-battery sound. If it’s the starter instead, the operator will know within a minute and can tow you to a shop.'
      },
      {
        q: 'Will a jump start harm my car’s electronics?',
        a: 'Done properly, no. Operators use a regulated professional jump pack rather than clamping two cars together, which avoids the voltage spikes that worry people about modern electronics.'
      },
      {
        q: 'Should I just replace the battery instead?',
        a: 'If your battery is more than a few years old and keeps dying, replacement is the real fix. We can jump you to get moving and tow you to a parts store, or you can drive there yourself once we confirm the alternator is charging.'
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
      'Kids or pets locked inside? Say so when you call and your job jumps the queue. If it’s an emergency, call 911 first; Fairfield PD and Suisun Fire will break a window when seconds matter, and we’ll handle the situations that aren’t life-threatening.'
    ],
    bullets: [
      { label: 'Damage-free entry', text: 'Wedge and long-reach tools, no drilled locks.' },
      { label: 'All makes', text: 'Domestic, import, and most modern keyless vehicles.' },
      { label: 'Priority for kids & pets', text: 'These calls move to the front of the line.' }
    ],
    body: [
      {
        h: 'How we get in without damage',
        p: [
          'The operator eases an air wedge into the top corner of the door frame to create a few millimeters of gap, then guides a long-reach tool to the unlock button, handle, or lock knob. It’s the same non-destructive method roadside clubs and locksmiths use — no slim-jim scratching down the glass, no drilled cylinder, and no shattered window to clean up and replace.',
          'Most cars are open within a few minutes of the operator arriving. Newer keyless vehicles take a little more finesse, but the approach is the same: get to the interior release without touching anything you’d have to pay to fix.'
        ]
      },
      {
        h: 'Keys in the trunk, or lost entirely',
        p: [
          'Locked in the trunk is a common one, especially at the Suisun Waterfront and the Solano Town Center lot. In most cars the operator can open a door and drop the rear seats or trip the trunk release to reach them, so the keys aren’t stranded back there for good.',
          'If the keys are truly lost rather than locked inside, a lockout gets you into the car but not driving away — you’ll need a replacement key or fob from a dealer or locksmith. When that’s the situation, we can open the vehicle and, if you need it moved, tow it to where the new key will be made.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can you unlock a car with the engine running?',
        a: 'Yes, that’s one of the most common calls we get, especially on cold mornings when people warm the car up and the door locks behind them.'
      },
      {
        q: 'What if my key fob battery died?',
        a: 'Most fobs hide a physical key inside, and most keyless cars have a hidden lock cylinder. The operator can show you, or simply open the car.'
      },
      {
        q: 'Will unlocking my car damage the door or window?',
        a: 'No. The wedge-and-reach method works through a small gap at the top of the door and leaves no marks. We don’t use slim-jims or drill locks, so there’s nothing to repair afterward.'
      },
      {
        q: 'How long does a lockout take?',
        a: 'Once the operator arrives, most vehicles are open in a few minutes. Total time is mostly drive time, and in Fairfield, Suisun City, and Vacaville that’s usually 20 to 30 minutes.'
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
      'Operators assess the angle and ground before pulling, use tree savers and proper rigging, and check the vehicle for damage before you drive off. If it isn’t drivable, the same truck tows it.'
    ],
    bullets: [
      { label: 'Mud, ditch & sand', text: 'Recovery from soft shoulders, fields, and embankments.' },
      { label: 'Proper rigging', text: 'Controlled pulls that don’t bend what the ditch didn’t.' },
      { label: 'Tow if needed', text: 'Recovery and tow handled in one visit, one price.' }
    ],
    body: [
      {
        h: 'The recoveries we see most',
        p: [
          'The classic Solano County winch-out is a wheel dropped off the soft shoulder on Suisun Valley Road, Rockville Road, or Highway 12 after rain — one tire off the pavement, the ground gives way, and the car settles into the ditch. Close behind are vehicles bogged in mud at the edge of a vineyard or field, and cars that slid on a wet on-ramp and came to rest on the embankment.',
          'Out toward the Suisun Marsh and the back roads near Rio Vista, soft sand and standing water add their own version of the same problem. None of it is a job for a friend with a strap and a pickup — it takes a winch, an anchor, and someone who’s pulled a car out of that exact kind of ground before.'
        ]
      },
      {
        h: 'What makes a recovery simple or hard',
        p: [
          'A car that’s a few feet off firm pavement, sitting level, with a clear line to the truck is usually a quick, flat-fee pull. What drives the price up is depth, angle, and access: a car nose-down in a deep ditch, buried past the axles, or down a steep embankment needs more rigging, more time, and sometimes more than one anchor point.',
          'The operator sizes all of that up before touching your car, rigs to the manufacturer’s recovery points, and pulls in line with the vehicle so the recovery itself doesn’t bend anything the ditch didn’t. Then they check it over — if it’s drivable you’re on your way, and if it isn’t, the same truck tows it, all under one quoted price.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a winch-out cost?',
        a: 'Simple pulls near the pavement are usually a flat fee. Long pulls, steep angles, or deep mud are quoted after a quick description over the phone, always before the truck rolls.'
      },
      {
        q: 'Will winching damage my car?',
        a: 'Operators attach to designated recovery points and pull in line with the vehicle. It’s far gentler than spinning your tires until something breaks.'
      },
      {
        q: 'Do I need a tow after the recovery, or can I drive away?',
        a: 'Often you can drive off once you’re back on solid ground. The operator checks the tires, suspension, and undercarriage first — if anything got damaged going in, the same truck can tow it, quoted as one job.'
      },
      {
        q: 'Do I have to be there for the recovery?',
        a: 'Yes, we need you or someone authorized on scene to confirm the job and where the vehicle goes afterward. Stay safely off the roadway while the operator works.'
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
    body: [
      {
        h: 'The quick fixes that skip the tow',
        p: [
          'A surprising share of roadside calls never need a hook. A flat gets swapped for your spare, a dead battery gets a jump, an empty tank gets enough fuel to reach the next station, and keys locked inside get retrieved. For any of those, a service truck comes to you and handles it on the spot for a flat call-out fee, so you’re moving again in one visit.',
          'That matters most on the freeway. A flat on the I-80 shoulder near Air Base Parkway or the Cordelia scales is not a place to be jacking up a car in traffic — the operator has the truck positioned, the warning lights running, and the training to do it safely.'
        ]
      },
      {
        h: 'When roadside turns into a tow',
        p: [
          'Sometimes what looks like a quick fix isn’t: no spare in the trunk, a shredded tire that can’t be swapped, a fuel or electrical problem deeper than a top-up. When that happens, the operator already on scene escalates straight to a tow — there’s no hanging up and starting over at the back of the line.',
          'You’re quoted the tow price before it goes ahead, and taken wherever you need: an open tire shop in Fairfield or Vacaville, your mechanic, or home. One call covers both the attempt and the backup plan.'
        ]
      }
    ],
    faq: [
      {
        q: 'What if I don’t have a spare tire?',
        a: 'Many newer cars don’t. We tow you to the nearest open tire shop in Fairfield or Vacaville, and can tell you on the phone which ones are open.'
      },
      {
        q: 'Do you bring diesel?',
        a: 'Yes, both gasoline and diesel delivery are available across the service area.'
      },
      {
        q: 'Can you help if I’m stuck on the freeway shoulder?',
        a: 'Yes, and it’s exactly where you shouldn’t be doing it yourself. Stay belted in the car with hazards on, give dispatch your direction and nearest exit, and the operator works the roadside side safely with warning lights running.'
      },
      {
        q: 'Do you charge more at night for roadside help?',
        a: 'No. Roadside calls are a flat call-out fee quoted up front, and it’s the same rate at 3am as at 3pm. If you’re quoted a big after-hours surcharge, keep calling.'
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
    body: [
      {
        h: 'Why bikes need their own handling',
        p: [
          'A motorcycle has no parking brake to hold it, no roof to strap over, and one wrong tie-down point can crack a fairing or bend a set of bars. Towing a bike behind a wheel-lift or with the wrong rigging is how you turn a simple breakdown into a repair bill, which is why every bike we move goes on a flatbed with a front wheel chock.',
          'The chock locks the front wheel upright so the bike stands on its own the entire ride, instead of leaning on straps the whole way to Vacaville. It’s the standard way any careful shop moves a motorcycle, and it’s what we send for cruisers, sport bikes, dual-sports, and trikes alike.'
        ]
      },
      {
        h: 'Getting the bike loaded safely',
        p: [
          'The operator walks the bike up the ramp or winches it into the chock, then secures it with soft-loop straps at the triple clamp and frame — never yanked down by the handlebars, which stresses the fork seals and steering. Compressed just enough to seat the suspension, not cranked down until something creaks.',
          'If your bike went down and won’t roll straight, say so when you call so the right gear is on the truck. It arrives standing exactly as it left, delivered to your garage or the shop of your choice.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can you tow a motorcycle that won’t roll?',
        a: 'Yes. With a seized wheel the operator uses skates or a winch-assisted load. Mention it when you call so the right gear is on the truck.'
      },
      {
        q: 'How is the bike tied down so it isn’t damaged?',
        a: 'The front wheel sits in a chock and the bike is secured with soft-loop straps at the triple clamp and frame, compressed just enough to seat the suspension. No hard hooks on painted parts, no strapping by the bars alone.'
      },
      {
        q: 'Do you tow trikes, trailers, or larger touring bikes?',
        a: 'Yes. Trikes, full-dress touring bikes, and most bike trailers fit on a flatbed. Give dispatch the type and rough size so the right deck and chock come out.'
      },
      {
        q: 'My bike went down — is it safe to move?',
        a: 'Usually, once fluids are contained. Tell the operator what happened so they can check for leaking fuel or oil and load it upright without stressing bent parts.'
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
      'Fleet managers: after-hours breakdowns between the Bay Area and Sacramento are the exact gap we cover. One number, any hour, and your driver isn’t stranded at a truck stop until morning.'
    ],
    bullets: [
      { label: 'Medium & heavy units', text: 'Box trucks, buses, RVs, and equipment.' },
      { label: 'Load-aware', text: 'Operators experienced with loaded vehicles and weight limits.' },
      { label: 'Fleet friendly', text: 'Direct billing available for repeat commercial accounts.' }
    ],
    body: [
      {
        h: 'The freight corridor we cover',
        p: [
          'Fairfield sits on one of Northern California’s busiest freight arteries. Trucks grinding up the Vaca grade, RVs overheating on the I-80 climb, box trucks and buses working the I-680 and Highway 12 connectors — when one of them stops, it stops in a spot that ties up a lane and can’t be moved by a light-duty wrecker.',
          'Medium- and heavy-duty recovery is a different class of equipment and a different skill set: air-brake releases, correct lift points, and the muscle to move a loaded vehicle without damaging it or the road. That’s what we dispatch for commercial vehicles across Solano County, day or night.'
        ]
      },
      {
        h: 'What dispatch needs to send the right truck',
        p: [
          'The single thing that gets the correct unit rolling the first time is weight and dimensions. Have the vehicle’s GVWR, a rough loaded weight, and the make and body type ready — a 26-foot box truck, a Class A motorhome, a transit bus — so the right class of wrecker is sent instead of one that arrives and can’t do the job.',
          'For fleets, after-hours is exactly the gap we’re built for. Direct billing is available for repeat commercial accounts, so a 2am breakdown between the Bay Area and Sacramento is a single phone call and your driver isn’t parked at a truck stop until the morning.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can you tow a loaded box truck?',
        a: 'Yes, within equipment ratings. Have the GVWR and rough load weight ready when you call and dispatch will send the right class of truck the first time.'
      },
      {
        q: 'Do you handle RVs and buses?',
        a: 'Yes. Class A, B, and C motorhomes, transit and shuttle buses, and similar large vehicles are handled by our medium- and heavy-duty units. Give dispatch the length and rough weight.'
      },
      {
        q: 'How is heavy duty towing priced?',
        a: 'By the class of equipment and the work involved, quoted after a quick description of the vehicle, its weight, and where it’s stuck. As with every job, you get the number before the truck is committed.'
      },
      {
        q: 'Do you offer direct billing for fleets?',
        a: 'Yes. Repeat commercial accounts can set up direct billing so after-hours breakdowns are one call with no driver fronting the cost on the roadside.'
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
      'After a collision on I-80 or at one of Fairfield’s big intersections, you have more choices than the moment suggests. Unless CHP has ordered a rotation tow to clear the road, you choose who tows your car and where it goes, and taking it straight to a body shop you trust avoids daily storage fees at a yard you didn’t pick.',
      'Operators secure loose panels, sweep debris where safe, photograph the vehicle at pickup, and deliver to the shop or your home. Keep the tow receipt; your insurer reimburses towing on most collision claims.'
    ],
    bullets: [
      { label: 'Your shop, your choice', text: 'Direct delivery to the body shop you pick.' },
      { label: 'Documented handling', text: 'Photos at hookup and drop-off.' },
      { label: 'Insurance-ready receipt', text: 'Itemized for your claim.' }
    ],
    body: [
      {
        h: 'Your rights after a collision',
        p: [
          'In the noise after a crash it’s easy to assume the first tow truck that shows up is the one you have to use. You don’t. Unless CHP has ordered a rotation tow to clear the roadway, California gives you the right to choose who tows your car and where it goes — and that choice is worth real money.',
          'A rotation tow usually delivers to a storage yard that starts charging daily fees immediately. Sending your car straight to a body shop you trust instead skips that clock entirely. If a truck you didn’t call is pressuring you to sign, you’re allowed to decline and call your own.'
        ]
      },
      {
        h: 'How a damaged vehicle is handled',
        p: [
          'A wrecked car needs more care, not less. The operator secures loose panels and bumpers, sweeps up glass and debris where it’s safe to, and loads the vehicle without dragging broken suspension or letting fluids spread. Because a damaged car often won’t roll or steer, it goes on a flatbed by default.',
          'You get photos at hookup and drop-off and an itemized receipt for your claim. Keep that receipt — most collision policies reimburse towing, and the documentation makes it a clean line item instead of an argument with the adjuster.'
        ]
      }
    ],
    faq: [
      {
        q: 'The police already called a tow. Can I still use you?',
        a: 'If CHP ordered a rotation tow to clear the roadway, that truck takes the car, usually to a storage yard. You can then have us move it from the yard to your body shop, which stops the daily storage fees.'
      },
      {
        q: 'Does insurance pay for the tow after an accident?',
        a: 'On most collision claims, yes. Keep the itemized receipt and photos we provide; that documentation is usually all the adjuster needs to reimburse the tow.'
      },
      {
        q: 'My car isn’t drivable — where can it go?',
        a: 'Anywhere you choose: a body shop you trust, your mechanic, a dealership, or home. A non-drivable car rides on a flatbed, and the destination is quoted into the price before we move.'
      },
      {
        q: 'Do I have to decide on a body shop right now?',
        a: 'No. If you’re not sure, we can take the car home or to a secure spot rather than a fee-charging yard, giving you time to pick a shop without storage adding up.'
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
    body: [
      {
        h: 'How long-distance pricing works',
        p: [
          'A long tow is refreshingly simple to price: a hook fee for the truck coming out, plus a flat per-mile rate from pickup to drop-off. With both addresses in hand, dispatch quotes the whole thing to the dollar before the truck rolls — no meter, no "we’ll settle up at the other end."',
          'Distance is the entire story, so the exact pickup and destination are all that changes the number. Fairfield to Concord, Davis, Sacramento, or down to San Jose — each is just a different mileage figure on the same clear formula.'
        ]
      },
      {
        h: 'Scheduled transport costs less than an emergency',
        p: [
          'Not every long tow is an emergency. If you’ve bought a car in Solano County, are sending one to a buyer, or want a non-running project moved, that’s scheduled transport — and because it isn’t a drop-everything 2am dispatch, it books at a lower rate than an emergency call.',
          'Long hauls go on a flatbed as standard, so there’s no drivetrain wear over a hundred miles, and you can ride along in the cab on most trucks. Booking a day or two ahead gets you the best rate and a time window that works.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much is a tow from Fairfield to Sacramento?',
        a: 'It depends on the exact pickup and drop, but it’s a simple hook fee plus mileage. Call with both addresses and you’ll have an exact number in two minutes.'
      },
      {
        q: 'Can you tow out of the area or out of state?',
        a: 'Long-distance tows anywhere in Northern California are routine, and longer hauls can be arranged. Give dispatch both addresses and you’ll get a firm per-mile quote.'
      },
      {
        q: 'How far ahead should I book a scheduled transport?',
        a: 'A day or two is plenty for most jobs and gets you the best rate and a convenient window. Same-day is often possible too — just ask when you call.'
      },
      {
        q: 'Can I ride along on a long tow?',
        a: 'In most trucks, yes. Mention it when booking so the operator keeps room in the cab, especially handy when the tow is your only ride home.'
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
      'Electric vehicles can’t be flat-towed or lifted by two wheels the way a gas car sometimes can. Tesla, Rivian, and most EV makers require full-lift flatbed transport, because dragging the drive wheels can damage the motor and regenerative braking system. Every EV call we dispatch goes out on a flatbed, no exceptions.',
      'Whether your battery hit zero on the I-80 grade, a charging session failed at the Vacaville outlets, or the car simply won’t wake up in your driveway, operators know the tow-mode and transport-mode steps for the major EV brands and can walk you through them on the phone before the truck arrives.'
    ],
    bullets: [
      { label: 'Flatbed only', text: 'Full-lift transport, as Tesla and other EV makers require.' },
      { label: 'Tow-mode guidance', text: 'We talk you through putting the car in transport mode on the phone.' },
      { label: 'Dead-battery ready', text: 'Skates and winch for an EV that won’t roll or shift.' }
    ],
    body: [
      {
        h: 'Why EVs can’t be towed like a gas car',
        p: [
          'On an electric car the wheels are geared directly to the motor, and spinning those wheels while the car is off can push current back through the drive unit and regenerative braking system — exactly the damage manufacturers warn against. There’s no true neutral that disconnects the driveline the way a gas car has, so wheel-lift or flat towing is off the table.',
          'That’s why Tesla, Rivian, and essentially every other EV maker specify full-lift flatbed transport, with all four wheels off the ground. We follow that without exception: if it’s electric, it goes on a flatbed.'
        ]
      },
      {
        h: 'Getting a dead EV onto the deck',
        p: [
          'A depleted EV is the tricky part, because many won’t shift to neutral or release the parking brake once the 12-volt system is flat — a Tesla with a dead battery is the classic example. Operators handle it with skates or a winch-assisted load so the drive wheels never drag.',
          'Most EVs also have a documented transport or tow mode, and the operator can walk you through enabling it over the phone before they arrive — or work around it if the car is too far gone to respond. Either way the car is loaded the way the manufacturer intended.'
        ]
      }
    ],
    faq: [
      {
        q: 'Can you tow a Tesla that has no charge?',
        a: 'Yes. A fully depleted Tesla won’t shift to neutral on its own, so operators use skates or a winch to load it onto the flatbed without dragging the wheels.'
      },
      {
        q: 'Is flatbed really necessary for my EV?',
        a: 'For nearly all EVs, yes. Towing with drive wheels on the ground can damage the motor. A flatbed is the safe, manufacturer-approved method, and it’s what we send by default.'
      },
      {
        q: 'Which electric vehicles do you tow?',
        a: 'All of them — Tesla, Rivian, and every mainstream EV. Operators know the transport-mode steps for the major brands and can look up or work around the rest.'
      },
      {
        q: 'Can you tow an EV with a damaged or overheating battery?',
        a: 'Tell dispatch if the car was in a collision or the battery is hot, smoking, or was submerged. Damaged EV batteries need extra caution, and the operator will handle it accordingly and keep it on a flatbed.'
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
      'After an accident or a CHP rotation tow, your car often ends up in a storage yard charging daily fees that climb fast. Once you’ve cleared the release paperwork, we’ll pick the vehicle up from the yard and deliver it to your body shop, mechanic, or home, which stops the storage clock as soon as possible.',
      'This is one of the most overlooked ways to save money after a collision in Solano County. A short second tow from the yard to your chosen shop almost always costs less than the storage fees it prevents from stacking up.'
    ],
    bullets: [
      { label: 'Stops the fee clock', text: 'The sooner the car leaves the yard, the less you pay in storage.' },
      { label: 'Yard-to-shop', text: 'Direct delivery to the mechanic or body shop you choose.' },
      { label: 'Paperwork-ready', text: 'We coordinate pickup once your release is cleared.' }
    ],
    body: [
      {
        h: 'Why storage fees add up so fast',
        p: [
          'Storage yards charge by the day, and the meter starts the moment your car arrives — often the same afternoon as the accident. A car that sits for a week or two while you sort out insurance and pick a shop can rack up a bill that rivals a real repair, and it’s money that does nothing but pay for a parking spot.',
          'Insurers notice, too, and tend to push back on weeks of accrued storage. The single best way to keep that number small is simple: get the car out of the yard and to your own shop or driveway as soon as the paperwork allows.'
        ]
      },
      {
        h: 'The release-and-move process',
        p: [
          'First you’ll need a release from whoever authorized the tow — often CHP or the yard itself — and any required fees settled so the vehicle can leave. Once that release is in hand, we coordinate the pickup and move the car to your body shop, mechanic, or home.',
          'You don’t necessarily have to be at the yard yourself, as long as the release and authorization are squared away and the destination is set. Call with the yard’s location and where the car needs to go, and we’ll handle the transport.'
        ]
      }
    ],
    faq: [
      {
        q: 'How do I get my car out of impound in Fairfield?',
        a: 'First get a release from whoever authorized the tow (often CHP or the yard itself), settle any required fees, then call us to move the vehicle to your shop or home. We handle the transport once the release is in hand.'
      },
      {
        q: 'Why not just leave it at the storage yard?',
        a: 'Storage yards charge by the day, and the total grows quickly. Moving the car to your own shop or driveway stops those daily charges, which usually saves far more than the short tow costs.'
      },
      {
        q: 'Do I have to be at the yard when you pick it up?',
        a: 'Not necessarily, as long as the release paperwork and authorization are in order and the drop-off is set. Give dispatch the yard location and destination and we’ll coordinate the rest.'
      },
      {
        q: 'How much does storage cost per day?',
        a: 'It varies by yard, but daily storage plus any release and lien fees add up quickly — which is exactly why moving the car out sooner almost always costs less than leaving it.'
      }
    ]
  }
];
