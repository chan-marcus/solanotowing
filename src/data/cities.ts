export interface Area {
  slug: string;
  name: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string[];
  landmarks: string[];
  zips: string[];
  mapQuery: string; // place or "lat,lng" used to center the Google map on this area
}

export const AREAS: Area[] = [
  {
    slug: 'fairfield',
    name: 'Fairfield',
    metaTitle: 'Towing in Fairfield, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance throughout Fairfield, CA. 24/7 local dispatch on the I-80 corridor, up-front pricing. Call (707) 356-7623.',
    h1: 'Towing in Fairfield, CA',
    intro: [
      'Fairfield is our home base. Trucks run the I-80 corridor through town all day, from the Air Base Parkway and Travis Boulevard exits to the West Texas Street stretch and the Solano Town Center area. Whether you\u2019re stalled in a parking lot, dead in a driveway off North Texas Street, or on the freeway shoulder near the Cordelia Junction, a local operator is usually 20 to 30 minutes out.',
      'Because we cover Fairfield around the clock, the calls that stump other shops (a 2am breakdown, a holiday lockout, an AWD that needs a flatbed) get answered here. You get a firm price and an honest ETA on the phone before a truck is ever dispatched.'
    ],
    landmarks: ['I-80 corridor', 'Solano Town Center', 'Travis Boulevard', 'West Texas Street', 'North Texas Street', 'Air Base Parkway'],
    zips: ['94533', '94534', '94535'],
    mapQuery: 'Fairfield, CA'
  },
  {
    slug: 'suisun-city',
    name: 'Suisun City',
    metaTitle: 'Towing in Suisun City, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Suisun City, CA. 24/7 dispatch, local trucks, up-front pricing. Call (707) 356-7623.',
    h1: 'Towing in Suisun City, CA',
    intro: [
      'Suisun City shares a border and a freeway with Fairfield, so trucks working one are already minutes from the other. From the Waterfront District to the neighborhoods along Highway 12 and the Amtrak lot at the depot, response times mirror Fairfield: usually 20 to 30 minutes.',
      'Highway 12 between Suisun and Rio Vista is one of the busiest breakdown stretches in the county: long, exposed, and hot in the summer. If you\u2019re on the shoulder out there, stay in the vehicle with your belt on, and tell dispatch your nearest mile marker or cross road.'
    ],
    landmarks: ['Suisun Waterfront', 'Highway 12', 'Sunset Avenue', 'Amtrak Depot', 'Lawler Ranch'],
    zips: ['94585'],
    mapQuery: 'Suisun City, CA'
  },
  {
    slug: 'vacaville',
    name: 'Vacaville',
    metaTitle: 'Towing in Vacaville, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Vacaville, CA. 24/7 dispatch on the I-80 corridor, up-front pricing. Call (707) 356-7623.',
    h1: 'Towing in Vacaville, CA',
    intro: [
      'Vacaville anchors the north end of our coverage: the I-80 corridor past the Nut Tree and the outlets, Alamo Drive and Peabody Road neighborhoods, and the grade toward Dixon where summer heat cooks cooling systems. Local operators based in Vacaville and Fairfield cover the city around the clock.',
      'Outlet-mall lockouts, commuter-lot dead batteries, and I-80 shoulder tows make up most Vacaville calls. Whatever it is, you\u2019ll get an ETA and a firm price on the phone before a truck is dispatched.'
    ],
    landmarks: ['Vacaville Premium Outlets', 'Nut Tree', 'I-80 & I-505 interchange', 'Alamo Drive', 'Peabody Road'],
    zips: ['95687', '95688'],
    mapQuery: 'Vacaville, CA'
  },
  {
    slug: 'cordelia',
    name: 'Cordelia',
    metaTitle: 'Towing at the Cordelia Junction | 24/7 | Solano Towing',
    metaDesc:
      'Towing at the Cordelia Junction, Green Valley & I-80/I-680 interchange. 24/7 local dispatch. Call (707) 356-7623.',
    h1: 'Towing at the Cordelia Junction',
    intro: [
      'The Cordelia Junction, where I-80, I-680, and Highway 12 meet, is the breakdown capital of Solano County. Merging traffic, sudden slowdowns, and the wind off the Suisun Marsh strand more drivers here than anywhere else we cover.',
      'Trucks stage close to the junction because the volume justifies it, which is why Cordelia, Green Valley, and the truck stops along Central Way often see the fastest response times in our whole service area. Tell dispatch which direction you\u2019re traveling and the nearest exit; on this interchange, that detail saves ten minutes.'
    ],
    landmarks: ['I-80/I-680 interchange', 'Highway 12 West', 'Green Valley', 'Central Way truck stops', 'Rodriguez High School area'],
    zips: ['94534'],
    mapQuery: 'Cordelia, Fairfield, CA'
  },
  {
    slug: 'dixon',
    name: 'Dixon',
    metaTitle: 'Towing in Dixon, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Dixon, CA along the I-80 corridor. 24/7 dispatch, up-front pricing. Call (707) 356-7623.',
    h1: 'Towing in Dixon, CA',
    intro: [
      'Dixon sits right on I-80 between Vacaville and Davis, a straight shot up the corridor our trucks already run. Breakdowns on the stretch past the Pedrick Road and Pitt School Road exits, farm-road flats out toward the county line, and dead batteries in town are all within our dispatch range.',
      'Because Dixon is on the same freeway we cover all day, response times are competitive even though it sits at the edge of the county. Call with your nearest exit or cross street and you\u2019ll get a firm price and an honest ETA before a truck rolls.'
    ],
    landmarks: ['I-80 corridor', 'Pedrick Road', 'Pitt School Road', 'Downtown Dixon', 'West A Street'],
    zips: ['95620'],
    mapQuery: 'Dixon, CA'
  },
  {
    slug: 'rio-vista',
    name: 'Rio Vista',
    metaTitle: 'Towing in Rio Vista, CA | 24/7 | Solano Towing',
    metaDesc:
      'Towing and roadside assistance in Rio Vista and along Highway 12, CA. 24/7 dispatch, up-front pricing. Call (707) 356-7623.',
    h1: 'Towing in Rio Vista, CA',
    intro: [
      'Rio Vista sits at the east end of Highway 12, one of the longer and more exposed breakdown stretches in Solano County. The run from Suisun out to the Rio Vista bridge has little shoulder and few services, so a stranded car out there needs a truck that knows the route. We dispatch along the full length of Highway 12.',
      'Whether you\u2019re stuck near the Sacramento River bridge, along River Road, or in town, tell dispatch your nearest landmark or mile marker on Highway 12 and we\u2019ll route the closest operator to you.'
    ],
    landmarks: ['Highway 12', 'Rio Vista Bridge', 'River Road', 'Downtown Rio Vista', 'Sandy Beach'],
    zips: ['94571'],
    mapQuery: 'Rio Vista, CA'
  }
];
