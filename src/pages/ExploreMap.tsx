import { Link } from 'react-router-dom';
import { AlbaniaMap } from '@/components/map/AlbaniaMap';
import { destinations } from '@/data/destinations';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export const ExploreMap = () => (
  <div className="space-y-10 px-6 py-10 lg:px-8">
    <section className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-soft">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.24em] text-red-700">Map Explorer</p>
          <h1 className="text-4xl font-semibold text-charcoal-900 sm:text-5xl">Discover Albania’s top destinations from coast to mountains.</h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            Use the interactive map to compare regions, follow travel routes and jump straight to the places that match your style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/plan-trip">
              <Button variant="primary">Plan your trip</Button>
            </Link>
            <Link to="/search">
              <Button variant="secondary">Search destinations</Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-[32px] bg-sand-50 p-6">
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Best viewed</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">Filter cities, beaches, mountains and cultural places for a fast preview of what Albania has to offer.</p>
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Local favorites</p>
            <p className="mt-4 text-sm leading-7 text-slate-600">From Tirana’s art scene to the isolated alpine village of Theth, every route is built for an authentic experience.</p>
          </div>
        </div>
      </div>
    </section>

    <SectionTitle
      title="Explore Albania by map"
      subtitle="Browse the country’s most captivating destinations with interactive filters and quick access to travel guides."
    />
    <AlbaniaMap destinations={destinations} />
  </div>
);
