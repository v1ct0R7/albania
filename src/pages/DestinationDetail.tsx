import { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useWishlist } from '@/hooks/useWishlist';
import { destinations } from '@/data/destinations';
import { WishlistButton } from '@/components/wishlist/WishlistButton';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

export const DestinationDetail = () => {
  const { slug } = useParams();
  const { savedIds, toggle, has } = useWishlist();
  const destination = useMemo(
    () => destinations.find((item) => item.slug === slug),
    [slug]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [destination]);

  if (!destination) {
    return (
      <div className="px-6 py-20 text-center text-charcoal-900 lg:px-8">
        <p className="text-xl font-semibold">Destination not found</p>
        <Link to="/" className="mt-4 inline-block text-red-700 underline">
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-12 px-6 py-10 lg:px-8">
      <div className="rounded-[40px] overflow-hidden border border-slate-200 bg-white shadow-soft">
        <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${destination.heroImage})` }} />
        <div className="space-y-6 p-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-red-700">{destination.category}</p>
              <h1 className="mt-4 text-4xl font-semibold text-charcoal-900">{destination.name}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <WishlistButton isSaved={has(destination.id)} onToggle={() => toggle(destination.id)} />
              <Link to="/plan-trip">
                <Button variant="secondary">Start planning</Button>
              </Link>
            </div>
          </div>
          <p className="max-w-3xl text-sm leading-7 text-slate-600">{destination.longDescription}</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Why visit" />
            <p className="mt-4 text-sm leading-7 text-slate-600">Experience a destination with a strong sense of place, genuine local culture, and memorable landscapes from sunrise to sunset.</p>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Best things to do" />
            <ul className="mt-6 space-y-4 text-sm text-slate-600">
              {destination.thingsToDo.map((item) => (
                <li key={item} className="rounded-3xl border border-slate-200 bg-sand-50 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Photo highlights" />
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {destination.gallery.map((image) => (
                <img key={image} src={image} alt={destination.name} className="h-40 w-full rounded-3xl object-cover" />
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Food suggestions" />
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {destination.foodSuggestions.map((food) => (
                <li key={food} className="rounded-3xl border border-slate-200 bg-sand-50 p-4">
                  {food}
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-6">
          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Best time to visit" />
            <p className="mt-4 text-sm leading-7 text-slate-600">{destination.bestTimeToVisit}</p>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="How to get there" />
            <p className="mt-4 text-sm leading-7 text-slate-600">{destination.howToGetThere}</p>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Trip tags" />
            <div className="mt-4 flex flex-wrap gap-3">
              {destination.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sand-50 px-4 py-2 text-sm font-semibold text-charcoal-900">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <SectionTitle title="Nearby destinations" />
            <div className="mt-4 space-y-3">
              {destination.nearbyDestinations.map((nearby) => (
                <Link key={nearby} to={`/search?q=${encodeURIComponent(nearby)}`} className="block rounded-3xl border border-slate-200 bg-sand-50 p-4 text-sm text-charcoal-900 transition hover:border-red-700 hover:text-red-700">
                  {nearby}
                </Link>
              ))}
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
};
