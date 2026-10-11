export interface Area {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[];
  landmarks: string[];
  cardLine?: string;   // short one-line description for the coverage grid card
  zips: string[];
  mapLat: number; // center latitude for the coverage map
  mapLng: number; // center longitude
  body?: { h: string; p: string[] }[]; // long-form local copy
  faq?: { q: string; a: string }[];    // feeds FAQPage schema on the area page
}

export const AREAS: Area[] = [
  {
    slug: 'fairfield',
    name: 'Fairfield',
    metaTitle: 'Tow Truck & Towing in Fairfield, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance throughout Fairfield, CA. 24/7 local dispatch on the I-80 corridor, up-front pricing. Call (707) 356-7623.',
    h1: 'Tow Truck & Towing Service in Fairfield, CA',
    intro: [
      'Fairfield is our home base. Trucks run the I-80 corridor through town all day, from the Air Base Parkway and Travis Boulevard exits to the West Texas Street stretch and the Solano Town Center area. Whether you\u2019re stalled in a parking lot, dead in a driveway off North Texas Street, or on the freeway shoulder near the Cordelia Junction, a local operator is usually 20 to 30 minutes out.',
      'Because we cover Fairfield around the clock, the calls that stump other shops (a 2am breakdown, a holiday lockout, an AWD that needs a flatbed) get answered here. You get a firm price and an honest ETA on the phone before a truck is ever dispatched.'
    ],
    landmarks: ['I-80 corridor', 'Solano Town Center', 'Travis Boulevard', 'West Texas Street', 'North Texas Street', 'Air Base Parkway'],
    cardLine: 'I-80, Solano\u00a0Town\u00a0Center and Travis\u00a0Boulevard.',
    zips: ['94533', '94534', '94535'],
    mapLat: 38.2494,
    mapLng: -122.04,
    body: [
      {
        h: 'Where Fairfield breakdowns actually happen',
        p: [
          'Most of our Fairfield calls come off a short list of places. The I-80 stretch through town is the biggest by far, especially the westbound climb toward the Cordelia Junction where three freeways merge and traffic stacks up without warning. After that it\u2019s the surface arterials: Travis Boulevard at shift change, North and West Texas Street, and the Air Base Parkway ramps that back up whenever the base lets out.',
          'Parking lots produce more calls than people expect. The Solano Town Center structure, the commuter lot at the Fairfield Transportation Center, and the big-box lots off Gateway Boulevard are where drivers come back to a car that will not start. Those are the easy ones, since a service truck can pull right alongside and often fix it without a tow at all.'
        ]
      },
      {
        h: 'Fog season and heat season: the two Fairfield call spikes',
        p: [
          'Fairfield gets a version of winter that surprises people who did not grow up here. Tule fog rolls off the Suisun Marsh from about December through February and can drop visibility on I-80 to almost nothing in minutes. When it does, the collision and shoulder-tow calls come in clusters rather than one at a time. If you are driving the corridor in dense fog, slow well below the limit, use low beams instead of brights, and if you must stop, get fully off the pavement and keep your seatbelt on.',
          'Summer is the opposite problem. A run of 100-degree days cooks marginal batteries and pushes tired cooling systems over the edge, so July and August bring jump starts, overheating, and blown hoses. A battery more than three years old that has been cranking slowly is usually the one that quits first on the hottest morning of the year.'
        ]
      },
      {
        h: 'What a tow costs in Fairfield',
        p: [
          'A local Fairfield tow is a hook fee plus mileage, and any honest operator will give you those as one firm number before the truck leaves. Short in-town moves, say a lot on North Texas Street to a shop off Beck Avenue, sit at the low end because the mileage barely registers. Longer hauls toward Sacramento or the Bay Area are priced per mile, so distance is the whole story.',
          'Time of day should not change the number. Plenty of good local operators charge the same at 3am as at 3pm, so a large after-hours surcharge is a reason to call someone else. The other thing worth asking is where the car is going: if it lands in a storage yard rather than your shop, daily fees start immediately, and that is where post-accident bills quietly balloon.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a tow truck cost in Fairfield?',
        a: 'A local Fairfield tow is a hook fee plus a per-mile rate, quoted as one firm number on the phone before the truck is dispatched. Short in-town tows are the cheapest; longer runs toward Sacramento or the Bay Area are priced by distance. There is no after-hours surcharge.'
      },
      {
        q: 'How fast can a tow truck get to me in Fairfield?',
        a: 'Most calls inside Fairfield see a truck in about 20 to 30 minutes. The Cordelia Junction end of town is often quicker because trucks stage near the interchange, while heavy I-80 congestion or dense tule fog can add time.'
      },
      {
        q: 'Do you offer roadside assistance in Fairfield, or only towing?',
        a: 'Both. Flat tire changes, jump starts, fuel delivery, and lockouts are handled on the spot for a flat call-out fee. If the problem turns out to be bigger than roadside tools can fix, the operator already on scene escalates straight to a tow.'
      },
      {
        q: 'Can you tow from Travis AFB or the base housing areas?',
        a: 'We cover Travis Air Force Base and the surrounding Fairfield neighborhoods. Access on base depends on current gate and escort rules, so mention it when you call and dispatch will tell you what the operator needs to reach you.'
      },
      {
        q: 'Are you open 24 hours in Fairfield?',
        a: 'Yes, dispatch answers around the clock every day of the year. A large share of Fairfield calls come between 10pm and 4am, which is exactly when many local yards stop picking up the phone.'
      }
    ]
  },
  {
    slug: 'vallejo',
    name: 'Vallejo',
    metaTitle: 'Tow Truck & Towing in Vallejo, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Vallejo, CA. 24/7 dispatch on I-80, Highway 37 and the Carquinez Bridge approach. Call (707) 356-7623.',
    h1: 'Tow Truck & Towing Service in Vallejo, CA',
    intro: [
      'Vallejo is the largest city in Solano County, and it sits where four busy routes come together: I-80 heading for the Carquinez Bridge, I-780 across to Benicia, Highway 37 out toward Sears Point, and Highway 29 up Sonoma Boulevard. That mix is why Vallejo breakdowns rarely happen somewhere convenient. Dispatch runs the city around the clock, and a truck is usually 25 to 35 minutes out.',
      'Most Vallejo calls land in one of three places: the freeway, a parking structure downtown or at the ferry, or a driveway in the older neighborhoods off Springs Road and Tennessee Street. Tell dispatch which it is, plus your nearest exit or cross street, and you get a firm price and an honest ETA before a truck is sent.'
    ],
    landmarks: ['I-80 at the Carquinez Bridge', 'Highway 37', 'Sonoma Boulevard', 'Vallejo Ferry Terminal', 'Mare Island', 'Six Flags Discovery Kingdom'],
    cardLine: 'Carquinez\u00a0Bridge, the ferry and Highway\u00a037.',
    zips: ['94589', '94590', '94591', '94592'],
    mapLat: 38.1041,
    mapLng: -122.2566,
    body: [
      {
        h: 'Where Vallejo breakdowns actually happen',
        p: [
          'The southbound run of I-80 toward the Carquinez Bridge is our busiest piece of Vallejo road. Traffic stacks up at the bridge approach through the afternoon, and a car that overheats or loses a belt in that queue has very little shoulder to work with. The Columbus Parkway and Redwood Street interchanges produce their own steady share, and the Highway 37 junction at the west end of town strands drivers who were an hour from home when something let go.',
          'Off the freeway, the pattern changes. Downtown and the ferry terminal garage generate lockouts and dead batteries from commuters who left a car sitting all day, Six Flags Discovery Kingdom does the same on summer afternoons, and the Mare Island Causeway is a regular call because there is one way on and one way off. In the neighborhoods, Springs Road, Tennessee Street, Sonoma Boulevard, and the hill streets around Glen Cove are the usual addresses for a car that will not start in the driveway.'
        ]
      },
      {
        h: 'Wind, bay fog, and the Carquinez Strait',
        p: [
          'Vallejo weather behaves differently from the rest of the county. Inland towns get tule fog in winter; Vallejo gets marine fog off the strait that can sit on the I-80 bridge approach and the Highway 37 flats while Fairfield is clear. The wind through the Carquinez gap is the other local factor, and it is strong enough to matter for anyone towing a trailer or driving a high-sided van across the bridge.',
          'If you are stopped on the bridge approach or on Highway 37, where the shoulder narrows to almost nothing, stay belted inside the vehicle with the hazards on rather than standing beside it. Give dispatch the direction you are travelling and the last exit you passed. On a stretch where traffic is moving at freeway speed a few feet from your door, the operator needs to come at you from the correct side.'
        ]
      },
      {
        h: 'Impounds, older cars, and what a Vallejo tow costs',
        p: [
          'Vallejo has a large share of the county’s older vehicles, which shows up in the work: more jump starts, more no-starts in driveways, and more cars that have been sitting long enough to need a flatbed instead of a hook. It also means more police and CHP tows than other parts of our area, so a fair number of Vallejo calls are people trying to work out where a car went and what it will cost to get it back. Storage fees run daily and start the day the car arrives, so a release is worth sorting out quickly.',
          'A Vallejo tow is priced the same way as everywhere else we cover: a hook fee plus a per-mile rate, given as one firm number before a truck leaves. An in-town move stays at the low end. Runs across the bridge into Contra Costa County, up to Napa, or over to Fairfield are priced by distance, and the number does not change because it is 2am.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a tow truck cost in Vallejo?',
        a: 'A hook fee plus a per-mile rate, quoted as one firm number on the phone before the truck is dispatched. An in-town Vallejo tow is at the low end. Runs across the Carquinez Bridge, up to Napa, or out to Fairfield are priced by distance. There is no after-hours surcharge.'
      },
      {
        q: 'How fast can a tow truck get to me in Vallejo?',
        a: 'Usually 25 to 35 minutes. The I-80 and Columbus Parkway side of the city tends to be quicker because trucks already run that corridor, while the bridge approach at commute time and the far end of Highway 37 can add time.'
      },
      {
        q: 'Can you tow from the Vallejo ferry terminal or Mare Island?',
        a: 'Yes, both are regular calls. The ferry garage and the downtown lots mostly produce lockouts and dead batteries after a car has sat all day. For Mare Island, mention the building or the street past the causeway, since access there is easy to describe and hard to guess.'
      },
      {
        q: 'My car was towed by Vallejo police or the CHP. Can you help me get it back?',
        a: 'We cannot release a car from someone else’s impound yard, and no honest operator will claim otherwise. What we can do is tow it from that yard to your home or shop once you have the release, which is usually the cheaper half of the problem. Start with the agency that ordered the tow, because storage fees accrue daily.'
      },
      {
        q: 'Do you cover Glen Cove, Hiddenbrooke, and the Highway 37 stretch?',
        a: 'Yes. Glen Cove and the hill neighborhoods are inside normal Vallejo coverage, Hiddenbrooke is right off I-80 at the north end of the city, and we dispatch along Highway 37 toward the Napa River bridge. On Highway 37 give a mile marker or the nearest cross road, because landmarks out there are sparse.'
      }
    ]
  },
  {
    slug: 'benicia',
    name: 'Benicia',
    metaTitle: 'Tow Truck & Towing in Benicia, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Benicia, CA. 24/7 dispatch on I-680, I-780 and the industrial park. Call (707) 356-7623.',
    h1: 'Tow Truck & Towing Service in Benicia, CA',
    intro: [
      'Benicia is small, but the roads through it are not. I-680 crosses the Benicia-Martinez Bridge at the south end of town, I-780 runs the length of the city over to Vallejo, and the industrial park on the east side moves heavy truck traffic all day. Dispatch covers all of it around the clock, with a truck usually 25 to 35 minutes out.',
      'Our Benicia calls split between those highways and the town itself: the First Street and Southampton neighborhoods, the marina, and the Military East and West corridors. Tell dispatch whether you are on the bridge approach, in the industrial park, or on a residential street, and you get a firm price and an honest ETA before a truck rolls.'
    ],
    landmarks: ['I-680 Benicia-Martinez Bridge', 'I-780', 'Benicia Industrial Park', 'First Street', 'Southampton', 'Benicia Marina'],
    cardLine: 'The I-680 bridge, I-780 and the industrial park.',
    zips: ['94510'],
    mapLat: 38.0494,
    mapLng: -122.1586,
    body: [
      {
        h: 'The bridge approach is the busiest call in Benicia',
        p: [
          'Northbound I-680 backs up at the Benicia-Martinez Bridge toll plaza most weekday afternoons, and that queue is where a marginal cooling system or a tired clutch tends to give up. The approach has a narrow shoulder and heavy truck traffic beside it, which makes it one of the few places in our area where we would rather you stayed in the car with your belt on than stood outside to wait.',
          'I-780 across town is the other steady source. It is a short freeway with closely spaced exits, so the single most useful thing you can tell dispatch is the direction you are travelling and the last exit you passed. Naming an exit you can see ahead of you instead of the one behind you is the most common reason a truck arrives later than it should.'
        ]
      },
      {
        h: 'The industrial park needs different equipment',
        p: [
          'The Benicia Industrial Park is one of the larger ones in the North Bay, and the work it generates is not the same as a stalled sedan. Box trucks, work vans, and loaded trailers along Industrial Way, Park Road, and Bayshore Road need a heavier wrecker or a flatbed with the deck length to take them, and the wrong truck arriving means a second call and a second wait.',
          'So when you call from the industrial park, start with what you drive and what it weighs, loaded or empty, and whether it rolls. That tells dispatch which operator to send. The same goes for a commercial vehicle blocked in a yard or against a dock: the clearance around it decides whether a tow or a winch-out is the right job, and it is cheaper to establish that on the phone than on arrival.'
        ]
      },
      {
        h: 'Old town streets, strait wind, and what a tow costs',
        p: [
          'Downtown Benicia is a grid of narrow older streets running down to the water, with parked cars on both sides and limited room to work. A flatbed can usually still do the job there, but it may need to load from the end of the block rather than directly outside the address, so expect the operator to ask which way the street runs and whether anything is blocking it. The wind off the Carquinez Strait is the other local quirk, and it is worth respecting on the bridge if you are towing a trailer or driving anything high sided.',
          'Pricing matches the rest of our area: a hook fee plus a per-mile rate, quoted as one number before the truck leaves. A move inside Benicia is at the low end, Vallejo and Fairfield runs are short, and anything across the bridge into Martinez or Concord is priced by the mile. Heavy-duty and commercial work is quoted on its own because the equipment is different, but it is still quoted up front rather than added up after the fact.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a tow cost in Benicia?',
        a: 'A hook fee plus a per-mile rate, given as one firm number before the truck is dispatched. A tow inside Benicia is at the low end, Vallejo and Fairfield are short runs, and anything across the Benicia-Martinez Bridge is priced by distance. Heavy-duty work is quoted separately, and still up front.'
      },
      {
        q: 'How long does a tow truck take in Benicia?',
        a: 'Usually 25 to 35 minutes. Trucks reach Benicia down I-680 or across I-780 from Vallejo, so the time of day on the bridge approach matters more than where in town you are. Give the direction you are travelling and the last exit you passed.'
      },
      {
        q: 'Can you tow a box truck or work van from the Benicia Industrial Park?',
        a: 'Yes, that is regular work out there. Say what you drive, roughly what it weighs loaded, and whether it still rolls, so dispatch sends a wrecker or a flatbed that can actually take it. Sending the wrong size truck is the one thing that doubles the wait.'
      },
      {
        q: 'I broke down on the Benicia-Martinez Bridge. What should I do?',
        a: 'Get as far right as you can, put the hazards on, and stay inside with your seatbelt fastened. The shoulder there is narrow and the truck traffic is heavy, so standing outside the vehicle is the real risk. Call with the direction you were travelling and whether you are on the bridge itself or past the toll plaza.'
      },
      {
        q: 'Do you cover downtown Benicia and the marina?',
        a: 'Yes. First Street, the marina, and the streets around the old Capitol are all inside normal coverage. They are tight, older blocks, so mention anything that limits access, such as a one-way street or a delivery truck parked across it, and the operator will plan the approach before arriving.'
      }
    ]
  },
  {
    slug: 'suisun-city',
    name: 'Suisun City',
    metaTitle: 'Tow Truck & Towing in Suisun City, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Suisun City, CA. 24/7 dispatch, local trucks, up-front pricing. Call (707) 356-7623.',
    h1: 'Tow Truck & Towing Service in Suisun City, CA',
    intro: [
      'Suisun City shares a border and a freeway with Fairfield, so trucks working one are already minutes from the other. From the Waterfront District to the neighborhoods along Highway 12 and the Amtrak lot at the depot, response times mirror Fairfield: usually 20 to 30 minutes.',
      'Highway 12 between Suisun and Rio Vista is one of the busiest breakdown stretches in the county: long, exposed, and hot in the summer. If you\u2019re on the shoulder out there, stay in the vehicle with your belt on, and tell dispatch your nearest mile marker or cross road.'
    ],
    landmarks: ['Suisun Waterfront', 'Highway 12', 'Sunset Avenue', 'Amtrak Depot', 'Lawler Ranch'],
    cardLine: 'The Waterfront\u00a0District and Highway\u00a012 east.',
    zips: ['94585'],
    mapLat: 38.2382,
    mapLng: -122.0402
  },
  {
    slug: 'vacaville',
    name: 'Vacaville',
    metaTitle: 'Vacaville Tow Truck & Towing Service | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Vacaville, CA. 24/7 dispatch on the I-80 corridor, up-front pricing. Call (707) 356-7623.',
    h1: 'Vacaville Tow Truck & Towing Service',
    intro: [
      'Vacaville anchors the north end of our coverage: the I-80 corridor past the Nut Tree and the outlets, Alamo Drive and Peabody Road neighborhoods, and the grade toward Dixon where summer heat cooks cooling systems. Local operators based in Vacaville and Fairfield cover the city around the clock.',
      'Outlet-mall lockouts, commuter-lot dead batteries, and I-80 shoulder tows make up most Vacaville calls. Whatever it is, you\u2019ll get an ETA and a firm price on the phone before a truck is dispatched.'
    ],
    landmarks: ['Vacaville Premium Outlets', 'Nut Tree', 'I-80 & I-505 interchange', 'Alamo Drive', 'Peabody Road'],
    cardLine: 'The outlets, the Nut\u00a0Tree and the I-505 split.',
    zips: ['95687', '95688'],
    mapLat: 38.3566,
    mapLng: -121.9877,
    body: [
      {
        h: 'The Vacaville calls we run most',
        p: [
          'Vacaville breaks down in predictable places. The Premium Outlets and the Nut Tree draw traffic from well outside the county, which means a steady stream of lockouts and dead batteries from people who parked, shopped for three hours, and came back to a car that will not wake up. Those lots are straightforward work: a service truck gets alongside the vehicle and most of them never need a tow.',
          'The freeway side is the I-80 run through town and the I-80/I-505 interchange at the north end, where traffic splitting toward Winters and Woodland creates the same merge problems the Cordelia Junction does at the other end of the county. In the neighborhoods, Alamo Drive, Peabody Road, and the Browns Valley streets are the usual addresses for a car that will not start in the driveway.'
        ]
      },
      {
        h: 'The Vaca grade is where cooling systems give up',
        p: [
          'The climb between Vacaville and Fairfield is the piece of road that generates the calls people do not anticipate. It is a sustained grade in a place that runs well past 100 degrees in July and August, and that combination finds every weak radiator hose, tired water pump, and low coolant level in the county. A car that has been running slightly hot around town will pick the middle of that grade to boil over.',
          'If your temperature gauge climbs on the grade, turn the air conditioning off and the heater on full, which pulls heat off the engine, and get to the next exit rather than pushing over the top. Do not open a hot radiator cap. Once it has actually overheated, driving it further is how a cheap hose turns into a head gasket, and a tow at that point is the least expensive thing you will do all day.'
        ]
      },
      {
        h: 'Getting a tow in Vacaville without the wait',
        p: [
          'Operators run Vacaville and Fairfield as one service area, so a truck working one town is usually minutes from the other, and Vacaville response times track closely with Fairfield at roughly 20 to 30 minutes. Dixon and the I-505 side add a little drive time but stay well inside our range.',
          'The single thing that speeds up a Vacaville call is location detail. "The outlets" covers an enormous parking area, so give a store name or the row you are in. On the freeway, name the direction you are travelling and the last exit you passed, since I-80 through Vacaville has exits close enough together that a mile in the wrong direction costs ten minutes.'
        ]
      }
    ],
    faq: [
      {
        q: 'How much does a tow cost in Vacaville?',
        a: 'The same structure as the rest of the county: a hook fee plus a per-mile rate, quoted as one firm number before the truck rolls. A Vacaville-to-Vacaville tow is at the low end; runs down to Fairfield or out toward Sacramento are priced by distance.'
      },
      {
        q: 'How long does a tow truck take in Vacaville?',
        a: 'Usually 20 to 30 minutes, since operators work Vacaville and Fairfield as a single area and a truck is often already nearby. Give a precise location, particularly at the outlets, and it tends to be at the faster end of that range.'
      },
      {
        q: 'Do you tow from the Vacaville Premium Outlets and the Nut Tree?',
        a: 'Regularly. Those lots are among our most common Vacaville calls, mostly lockouts and dead batteries. Name the nearest store or parking row when you call so the operator is not circling a very large lot looking for you.'
      },
      {
        q: 'My car overheated on the grade toward Fairfield. Can I keep driving?',
        a: 'Once it has genuinely overheated, no. Continuing risks turning a hose or thermostat into a warped head or blown head gasket. Pull off, let it cool, and call for a tow. Do not open the radiator cap while the engine is hot.'
      },
      {
        q: 'Do you cover Dixon and the I-505 side of Vacaville?',
        a: 'Yes. Dixon sits on the same I-80 corridor our trucks already run, and the I-80/I-505 interchange is inside our regular coverage. Response times run slightly longer than central Vacaville but remain competitive.'
      }
    ]
  },
  {
    slug: 'cordelia',
    name: 'Cordelia',
    metaTitle: 'Tow Truck at the Cordelia Junction, Fairfield | Solano Towing',
    metaDesc:
      'Towing at the Cordelia Junction, Green Valley & I-80/I-680 interchange. 24/7 local dispatch. Call (707) 356-7623.',
    h1: 'Tow Truck Service at the Cordelia Junction',
    intro: [
      'The Cordelia Junction, where I-80, I-680, and Highway 12 meet, is the breakdown capital of Solano County. Merging traffic, sudden slowdowns, and the wind off the Suisun Marsh strand more drivers here than anywhere else we cover.',
      'Trucks stage close to the junction because the volume justifies it, which is why Cordelia, Green Valley, and the truck stops along Central Way often see the fastest response times in our whole service area. Tell dispatch which direction you\u2019re traveling and the nearest exit; on this interchange, that detail saves ten minutes.'
    ],
    landmarks: ['I-80/I-680 interchange', 'Highway 12 West', 'Green Valley', 'Central Way truck stops', 'Rodriguez High School area'],
    cardLine: 'Where I-80, I-680 and Highway\u00a012 all merge.',
    zips: ['94534'],
    mapLat: 38.2172,
    mapLng: -122.135
  },
  {
    slug: 'dixon',
    name: 'Dixon',
    metaTitle: 'Tow Truck & Towing in Dixon, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Dixon, CA along the I-80 corridor. 24/7 dispatch, up-front pricing. Call (707) 356-7623.',
    h1: 'Tow Truck & Towing Service in Dixon, CA',
    intro: [
      'Dixon sits right on I-80 between Vacaville and Davis, a straight shot up the corridor our trucks already run. Breakdowns on the stretch past the Pedrick Road and Pitt School Road exits, farm-road flats out toward the county line, and dead batteries in town are all within our dispatch range.',
      'Because Dixon is on the same freeway we cover all day, response times are competitive even though it sits at the edge of the county. Call with your nearest exit or cross street and you\u2019ll get a firm price and an honest ETA before a truck rolls.'
    ],
    landmarks: ['I-80 corridor', 'Pedrick Road', 'Pitt School Road', 'Downtown Dixon', 'West A Street'],
    cardLine: 'I-80, Pitt\u00a0School\u00a0Road and Pedrick\u00a0Road.',
    zips: ['95620'],
    mapLat: 38.4455,
    mapLng: -121.8233
  },
  {
    slug: 'rio-vista',
    name: 'Rio Vista',
    metaTitle: 'Tow Truck & Towing in Rio Vista, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Rio Vista and along Highway 12, CA. 24/7 dispatch, up-front pricing. Call (707) 356-7623.',
    h1: 'Tow Truck & Towing Service in Rio Vista, CA',
    intro: [
      'Rio Vista sits at the east end of Highway 12, one of the longer and more exposed breakdown stretches in Solano County. The run from Suisun out to the Rio Vista bridge has little shoulder and few services, so a stranded car out there needs a truck that knows the route. We dispatch along the full length of Highway 12.',
      'Whether you\u2019re stuck near the Sacramento River bridge, along River Road, or in town, tell dispatch your nearest landmark or mile marker on Highway 12 and we\u2019ll route the closest operator to you.'
    ],
    landmarks: ['Highway 12', 'Rio Vista Bridge', 'River Road', 'Downtown Rio Vista', 'Sandy Beach'],
    cardLine: 'Highway\u00a012 east out to the river bridge.',
    zips: ['94571'],
    mapLat: 38.1557,
    mapLng: -121.6913
  }
];
