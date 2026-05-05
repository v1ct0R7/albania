import type { Itinerary } from '@/types/itinerary';

export const itineraries: Itinerary[] = [
  {
    id: 'roadtrip-coastline',
    title: 'Coastline Road Trip',
    days: 7,
    travelStyle: 'Road Trip',
    description: 'Follow the turquoise coast from Durrës to Sarandë with seaside dining and hidden bays.',
    route: 'Durrës → Vlorë → Dhërmi → Himarë → Sarandë',
    dailyPlan: [
      {
        title: 'Day 1 – Arrival in Tirana',
        focus: 'Explore the capital, dinner in Blloku',
        description: 'Settle into a boutique hotel and walk the vibrant street art neighborhoods.',
        meal: 'Try tavë kosi and fresh seafood',
        stay: 'Tirana city center'
      },
      {
        title: 'Day 2 – Durrës Bay',
        focus: 'Beach time and historic amphitheater',
        description: 'Relax on sandy beaches and visit the Roman ruins.',
        meal: 'Fish meze at a seaside restaurant',
        stay: 'Durrës waterfront'
      },
      {
        title: 'Day 3 – Vlorë & Llogara',
        focus: 'Mountain vistas and coastal scenic drive',
        description: 'Drive through the Llogara Pass and discover stunning panoramas.',
        meal: 'Grilled octopus and local wine',
        stay: 'Vlorë bay'
      },
      {
        title: 'Day 4 – Dhërmi & Jale',
        focus: 'Hidden coves and beach clubs',
        description: 'Swim in turquoise waters and enjoy relaxed beach life.',
        meal: 'Fresh salads and local cheese plate',
        stay: 'Dhërmi village'
      },
      {
        title: 'Day 5 – Himarë & Borsh',
        focus: 'Long beaches and cultural hilltop villages',
        description: 'Discover the traditional rhythm of the southern coastline.',
        meal: 'Traditional grilled lamb',
        stay: 'Himarë coast'
      },
      {
        title: 'Day 6 – Ksamil & Butrint',
        focus: 'Island hopping and ancient ruins',
        description: 'Visit the ancient site of Butrint and swim around Ksamil islands.',
        meal: 'Seafood by the water',
        stay: 'Ksamil beachfront'
      },
      {
        title: 'Day 7 – Return to Tirana',
        focus: 'Local markets and departure prep',
        description: 'Stop in historic Berat on the way back for a peaceful final visit.',
        meal: 'Desserts and strong coffee',
        stay: 'Tirana airport area'
      }
    ]
  },
  {
    id: 'albanian-heritage',
    title: 'Heritage & Culture Loop',
    days: 5,
    travelStyle: 'Culture',
    description: 'A cultural route through UNESCO cities, fortress towns and Albanian rituals.',
    route: 'Tirana → Krujë → Berat → Gjirokastër → Sarandë',
    dailyPlan: [
      {
        title: 'Day 1 – Tirana and Krujë',
        focus: 'Historical museum and artisan bazaar',
        description: 'Search for handmade souvenirs and discover the legacy of Skanderbeg.',
        meal: 'Traditional baklava and tea',
        stay: 'Krujë old town'
      },
      {
        title: 'Day 2 – Berat',
        focus: 'Castle quarter and river promenade',
        description: 'Wander the famous white houses and visit the Onufri icon museum.',
        meal: 'Local lamb stew',
        stay: 'Berat riverside'
      },
      {
        title: 'Day 3 – Gjirokastër fortress',
        focus: 'Stone architecture and folklore',
        description: 'Climb the castle and see traditional Ottoman homes.',
        meal: 'Cevapi and homemade bread',
        stay: 'Gjirokastër old bazaar'
      },
      {
        title: 'Day 4 – Blue Eye & Sarandë',
        focus: 'Natural spring and coastal sunset',
        description: 'Enjoy the bright blue spring and arrive in coastal Sarandë.',
        meal: 'Grilled fish at sunset',
        stay: 'Sarandë boardwalk'
      },
      {
        title: 'Day 5 – Butrint and departure',
        focus: 'UNESCO ruins and seaside relaxation',
        description: 'Visit ancient Butrint before heading back to the airport.',
        meal: 'Cheese and fresh figs',
        stay: 'Tirana or airport region'
      }
    ]
  }
];
