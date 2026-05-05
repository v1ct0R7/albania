import { Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { ExploreMap } from '@/pages/ExploreMap';
import { DestinationDetail } from '@/pages/DestinationDetail';
import { ThingsToDo } from '@/pages/ThingsToDo';
import { PlanTrip } from '@/pages/PlanTrip';
import { ItineraryPlanner } from '@/pages/ItineraryPlanner';
import { Wishlist } from '@/pages/Wishlist';
import { SearchResults } from '@/pages/SearchResults';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/explore" element={<ExploreMap />} />
    <Route path="/destination/:slug" element={<DestinationDetail />} />
    <Route path="/things-to-do" element={<ThingsToDo />} />
    <Route path="/plan-trip" element={<PlanTrip />} />
    <Route path="/itinerary-planner" element={<ItineraryPlanner />} />
    <Route path="/wishlist" element={<Wishlist />} />
    <Route path="/search" element={<SearchResults />} />
  </Routes>
);

export default AppRoutes;
