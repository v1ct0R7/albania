import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categoryCards } from '@/data/categories';
import { destinations } from '@/data/destinations';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CategoryCard } from '@/components/ui/CategoryCard';
import { DestinationCard } from '@/components/ui/DestinationCard';
import { Button } from '@/components/ui/Button';

const featuredDestinations = destinations.slice(0, 4);
const experiences = [
  'Sunrise breakfast over the Albanian Riviera',
  'Historic walking tours in UNESCO towns',
  'Hiking through alpine valleys and waterfalls',
  'Food markets, wine and seaside tavernas'
];

export const Home = () => {
  return (
    <div className="space-y-16 px-6 py-10 lg:px-8">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-[#111827] text-white shadow-soft"
      >
        <div className="absolute inset-0 hero-glow opacity-70" />
        <div className="absolute left-0 top-10 h-[280px] w-[280px] rounded-full bg-red-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-12">
          <div className="max-w-2xl space-y-8">
            <p className="text-sm uppercase tracking-[0.24em] text-orange-300">Travel with confidence</p>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
              Explore Albania’s coastline, castles and alpine escapes with curated travel guides.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-300">
              Discover authentic destinations, save your favorites, and build an itinerary that fits your pace across coast, culture, and mountain regions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/explore">
                <Button variant="primary">Explore by Map</Button>
              </Link>
              <Link to="/plan-trip">
                <Button variant="secondary">Start planning</Button>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 text-slate-100 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-200">Riviera highlights</p>
              <p className="mt-4 text-sm leading-7 text-slate-200">Hidden bays, lively promenades and coastal dining in Sarandë.</p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-white/10 p-6 text-slate-100 shadow-soft backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.24em] text-orange-200">Mountain escapes</p>
              <p className="mt-4 text-sm leading-7 text-slate-200">Remote alpine villages, waterfalls and dramatic mountain scenery.</p>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="space-y-8">
        <SectionTitle title="Discover by category" subtitle="Select the type of Albanian journey you want to explore." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {categoryCards.map((category) => (
            <CategoryCard key={category.title} title={category.title} description={category.description} />
          ))}
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle title="Top places to visit" subtitle="Handpicked Albanian destinations for first-time travelers." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {featuredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <SectionTitle title="Best experiences in Albania" />
          <div className="grid gap-4 sm:grid-cols-2">
            {experiences.map((experience) => (
              <div key={experience} className="rounded-[28px] border border-slate-200 p-6">
                <p className="font-semibold text-charcoal-900">{experience}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-6 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
          <SectionTitle title="Plan your perfect trip" subtitle="Travel tips, seasonal advice, and trip inspiration for every type of journey." />
          <ul className="space-y-4 text-sm text-slate-600">
            <li>Choose your season and preferred pace for the best experience.</li>
            <li>Combine cities, coast, culture and nature into one memorable loop.</li>
            <li>Use the itinerary planner to create the ideal Albanian escape.</li>
          </ul>
          <Link to="/itinerary-planner">
            <Button variant="primary">Build your itinerary</Button>
          </Link>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Seasonal highlights</p>
            <h2 className="mt-4 text-3xl font-semibold text-charcoal-900">Spring blooms and autumn coastlines</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              In spring, explore wildflower-covered mountains. In autumn, enjoy quieter beaches and rich local cuisine.
            </p>
          </div>
          <Link to="/explore">
            <Button variant="secondary">Explore the map</Button>
          </Link>
        </div>
      </section>

      <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="grid gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-red-700">Newsletter</p>
            <h2 className="mt-3 text-2xl font-semibold text-charcoal-900">Get weekly travel updates for Albania</h2>
          </div>
          <form className="grid gap-4 sm:grid-cols-[1fr_auto]">
            <input
              type="email"
              placeholder="Enter your email"
              className="rounded-full border border-slate-200 bg-sand-50 px-5 py-4 text-sm text-charcoal-900 outline-none transition focus:border-red-700 focus:ring-2 focus:ring-red-100"
            />
            <Button variant="primary">Subscribe</Button>
          </form>
        </div>
      </section>
    </div>
  );
};
