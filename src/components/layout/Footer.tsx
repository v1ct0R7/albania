import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/95 px-6 py-12 text-sm text-slate-600 backdrop-blur-sm sm:px-8">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.6fr_1fr_1fr]">
      <div className="space-y-4">
        <Link to="/" className="text-2xl font-semibold text-charcoal-900">
          Albania.com
        </Link>
        <p className="max-w-2xl leading-7 text-slate-600">
          Discover Albania with curated destinations, itinerary tools, and travel planning resources designed for modern explorers.
        </p>
        <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Travel smarter, explore more, plan faster.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-900">Explore</h3>
        <div className="space-y-3">
          <Link to="/explore" className="block transition hover:text-red-700">
            Map & destinations
          </Link>
          <Link to="/things-to-do" className="block transition hover:text-red-700">
            Things to do
          </Link>
          <Link to="/plan-trip" className="block transition hover:text-red-700">
            Travel planning
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-900">Quick links</h3>
        <div className="space-y-3">
          <Link to="/wishlist" className="block transition hover:text-red-700">
            Wishlist
          </Link>
          <Link to="/search" className="block transition hover:text-red-700">
            Search
          </Link>
          <Link to="/itinerary-planner" className="block transition hover:text-red-700">
            Itinerary planner
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
