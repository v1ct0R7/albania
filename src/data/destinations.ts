import type { Destination } from '@/types/destination';

const tiranaImage = 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80';
const beratImage = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80';
const sarandeImage = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80';
const thethImage = 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80';
const durresImage = 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80';
const gjirokasterImage = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80';
const ksamilImage = 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80';
const valbonaImage = 'https://images.unsplash.com/photo-1500336624523-d727130c3328?auto=format&fit=crop&w=1200&q=80';
const himareImage = 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?auto=format&fit=crop&w=1200&q=80';
const komaniImage = 'https://images.unsplash.com/photo-1499575810132-0d517abc6c92?auto=format&fit=crop&w=1200&q=80';

export const destinations: Destination[] = [
  {
    id: 'tirana',
    slug: 'tirana',
    name: 'Tirana',
    region: 'Central Albania',
    category: 'City',
    coordinates: [41.3275, 19.8187],
    shortDescription: 'The capital city pulses with modern cafés, museums, and lively plazas.',
    longDescription: 'Tirana is a dynamic city blending contemporary life with Ottoman and Italian heritage. From Skanderbeg Square to colorful street art, it is the gateway to modern Albania.',
    heroImage: tiranaImage,
    gallery: [tiranaImage, durresImage, sarandeImage],
    bestTimeToVisit: 'Late spring and early autumn for warm days and smaller crowds.',
    thingsToDo: ['Stroll Skanderbeg Square', 'Visit the National History Museum', 'Explore Blloku nightlife'],
    howToGetThere: 'Tirana International Airport is only 20 minutes from the city center by taxi or airport shuttle.',
    whereToStay: 'Boutique hotels around Pazari i Ri and Blloku offer modern comfort.',
    foodSuggestions: ['Tavë kosi', 'Byrek', 'Local coffee and pastries'],
    nearbyDestinations: ['Krujë', 'Durrës', 'Berat'],
    tags: ['city', 'culture', 'food']
  },
  {
    id: 'berat',
    slug: 'berat',
    name: 'Berat',
    region: 'Southern Albania',
    category: 'Ancient City',
    coordinates: [40.7053, 19.9529],
    shortDescription: 'Known as the city of a thousand windows, Berat offers timeless architecture.',
    longDescription: 'Berat charms visitors with its hillside white houses, ancient castle, and Ottoman-era bazaar. A UNESCO town where stone bridges and riverside paths create the perfect heritage stroll.',
    heroImage: beratImage,
    gallery: [beratImage, gjirokasterImage, thethImage],
    bestTimeToVisit: 'Spring and autumn bring mild weather and vibrant landscapes.',
    thingsToDo: ['Walk the castle alleys', 'Visit the Onufri Museum', 'Taste local wine at a cellar'],
    howToGetThere: 'Berat is a two-hour drive south of Tirana, accessible by rental car or guided transfer.',
    whereToStay: 'Historic guesthouses in the Mangalem quarter.',
    foodSuggestions: ['Local honey and cheese platters', 'Vegetable stew'],
    nearbyDestinations: ['Gjirokastër', 'Lushnjë', 'Vlorë'],
    tags: ['heritage', 'architecture', 'culture']
  },
  {
    id: 'sarande',
    slug: 'sarande',
    name: 'Sarandë',
    region: 'Albanian Riviera',
    category: 'Beach Town',
    coordinates: [39.8750, 20.0050],
    shortDescription: 'A sunny coastal base with easy access to Ksamil and Butrint.',
    longDescription: 'Sarandë is a relaxed waterfront town on the Ionian Sea with palm-lined promenades, colorful cafés, and spectacular sunsets. It is the ideal starting point for Riviera beaches and UNESCO ruins.',
    heroImage: sarandeImage,
    gallery: [sarandeImage, ksamilImage, himareImage],
    bestTimeToVisit: 'June through September for warm sea swims.',
    thingsToDo: ['Sunbathe on the promenade', 'Take a day trip to Ksamil islands', 'Visit Butrint archaeological site'],
    howToGetThere: 'Sarandë is reachable by bus from Tirana or by ferry from Corfu.',
    whereToStay: 'Sea-view hotels and family-run guesthouses along the harbor.',
    foodSuggestions: ['Seafood risotto', 'Fresh oysters', 'Greek-inspired dishes'],
    nearbyDestinations: ['Ksamil', 'Butrint', 'Himarë'],
    tags: ['beach', 'coast', 'sunset']
  },
  {
    id: 'theth',
    slug: 'theth',
    name: 'Theth',
    region: 'Albanian Alps',
    category: 'Mountain Village',
    coordinates: [42.5384, 19.8039],
    shortDescription: 'A rugged alpine village where hiking trails and waterfalls meet traditional village life.',
    longDescription: 'Theth is one of Albania’s most iconic mountain destinations. Set in a green valley with stone houses and dramatic peaks, it offers authentic hospitality and wild outdoor adventures.',
    heroImage: thethImage,
    gallery: [thethImage, valbonaImage, komaniImage],
    bestTimeToVisit: 'Summer offers full trail access, while autumn brings golden alpine colors.',
    thingsToDo: ['Hike to Theth waterfall', 'Visit the Lock-in Tower', 'Explore Blue Eye river pools'],
    howToGetThere: 'Theth can be reached by a scenic mountain road from Shkodër or by guided transfer.',
    whereToStay: 'Stone guesthouses with hearty mountain breakfasts.',
    foodSuggestions: ['Homemade cheese', 'Traditional pies', 'Mountain tea'],
    nearbyDestinations: ['Valbona', 'Shkodër', 'Bovilla Lake'],
    tags: ['nature', 'hiking', 'adventure']
  },
  {
    id: 'durres',
    slug: 'durres',
    name: 'Durrës',
    region: 'Central Albania',
    category: 'Coastal City',
    coordinates: [41.3231, 19.4414],
    shortDescription: 'A historic port city with wide sandy beaches and ancient Roman sites.',
    longDescription: 'Durrës combines historical landmarks with seaside leisure. The Roman amphitheater, waterfront cafés, and long bays make it a popular stop for culture and beach time.',
    heroImage: durresImage,
    gallery: [durresImage, ksamilImage, sarandeImage],
    bestTimeToVisit: 'Early summer is ideal for both history and shorelines.',
    thingsToDo: ['Explore the amphitheater', 'Walk the seaside boulevard', 'Relax on Durrës Beach'],
    howToGetThere: 'Durrës is a short drive from Tirana by car or bus.',
    whereToStay: 'Seafront hotels and modern resorts near the port.',
    foodSuggestions: ['Fried calamari', 'Grilled fish', 'Ice cream promenades'],
    nearbyDestinations: ['Tirana', 'Krujë', 'Vlorë'],
    tags: ['history', 'beach', 'city']
  },
  {
    id: 'gjirokaster',
    slug: 'gjirokaster',
    name: 'Gjirokastër',
    region: 'Southern Albania',
    category: 'Historic Town',
    coordinates: [40.0740, 20.1414],
    shortDescription: 'The stone city of Gjirokastër is rich in Ottoman architecture and hilltop views.',
    longDescription: 'Gjirokastër’s cobbled streets and fortress overlook the Drino Valley. Known as the city of stone, it is a cultural treasure with a vibrant bazaar and heritage houses.',
    heroImage: gjirokasterImage,
    gallery: [gjirokasterImage, beratImage, valbonaImage],
    bestTimeToVisit: 'Spring and autumn are perfect for walking the old town.',
    thingsToDo: ['Visit the castle museum', 'Tour the traditional stone houses', 'Attend local folklore events'],
    howToGetThere: 'Gjirokastër is reached by bus or rental car from Sarandë or Berat.',
    whereToStay: 'Family-run guesthouses inside the old town.',
    foodSuggestions: ['Homemade pies', 'Lamb stew', 'Mountain tea'],
    nearbyDestinations: ['Berat', 'Sarandë', 'Ksamil'],
    tags: ['history', 'culture', 'architecture']
  }
];
