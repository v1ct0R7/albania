export interface Destination {
  id: string;
  slug: string;
  name: string;
  region: string;
  category: string;
  coordinates: [number, number];
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  gallery: string[];
  bestTimeToVisit: string;
  thingsToDo: string[];
  howToGetThere: string;
  whereToStay: string;
  foodSuggestions: string[];
  nearbyDestinations: string[];
  tags: string[];
}
