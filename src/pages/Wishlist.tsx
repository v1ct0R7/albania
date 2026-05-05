import { Link } from 'react-router-dom';
import { useWishlist } from '@/hooks/useWishlist';
import { destinations } from '@/data/destinations';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export const Wishlist = () => {
  const { savedIds, remove } = useWishlist();
  const savedDestinations = destinations.filter((destination) => savedIds.includes(destination.id));
  const savedCount = savedDestinations.length;

  return (
    <div className="space-y-10 px-6 py-10 lg:px-8">
      <SectionTitle title="Wishlist" subtitle="Your saved Albanian destinations are stored locally in your browser." />

      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Your picks</p>
            <h1 className="mt-4 text-3xl font-semibold text-charcoal-900">{savedCount === 0 ? 'No destinations saved yet' : `${savedCount} saved destination${savedCount === 1 ? '' : 's'}`}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              {savedCount === 0
                ? 'Discover your next Albania adventure by browsing the map or destination guides.'
                : 'Tap a guide card to continue planning and keep your favorites in one place.'}
            </p>
          </div>
          <Link to="/explore">
            <Button variant="primary">Explore destinations</Button>
          </Link>
        </div>
      </section>

      {savedDestinations.length === 0 ? (
        <div className="rounded-[32px] border border-slate-200 bg-sand-50 p-10 text-center shadow-soft">
          <p className="text-lg font-semibold text-charcoal-900">Save destinations while you browse the map or search results.</p>
          <p className="mt-3 text-sm text-slate-600">Your list will stay here until you are ready to build an itinerary.</p>
          <Link to="/explore" className="mt-6 inline-flex rounded-full bg-red-700 px-6 py-3 text-sm font-semibold text-white hover:bg-red-600">
            Start exploring
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {savedDestinations.map((destination) => (
            <div key={destination.id} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="h-44 overflow-hidden rounded-3xl bg-slate-100">
                <img src={destination.heroImage} alt={destination.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-charcoal-900">{destination.name}</h3>
              <p className="mt-3 text-sm text-slate-600">{destination.shortDescription}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to={`/destination/${destination.slug}`} className="rounded-full bg-red-700 px-4 py-2 text-xs font-semibold text-white">
                  View Guide
                </Link>
                <button type="button" onClick={() => remove(destination.id)} className="rounded-full border border-charcoal-200 px-4 py-2 text-xs font-semibold text-charcoal-900 hover:border-red-700 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
