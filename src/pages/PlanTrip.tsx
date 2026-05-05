import { SectionTitle } from '@/components/ui/SectionTitle';
import { Button } from '@/components/ui/Button';

const sections = [
  {
    title: 'Best time to visit Albania',
    content: 'Late spring and early autumn offer warm weather with fewer crowds, while summer is the best choice for beach travel.'
  },
  {
    title: 'Visa and entry info',
    content: 'EU citizens can enter Albania visa-free for short stays. Many other countries also have visa-free access for tourism.'
  },
  {
    title: 'Getting to Albania',
    content: 'Tirana International Airport connects to major European hubs. Buses and ferries also serve neighboring countries.'
  },
  {
    title: 'Getting around Albania',
    content: 'Rent a car for flexibility, use minibuses for budget travel, or book guided transfers for remote areas.'
  },
  {
    title: 'Budget guide',
    content: 'Albania offers affordable accommodation and dining compared to much of Europe, while premium experiences are still available.'
  },
  {
    title: 'Suggested itineraries',
    content: 'Combine the coast, cultural towns, and mountain valleys into a compelling week-long route.'
  },
  {
    title: 'Safety tips',
    content: 'Stay aware of local conditions, respect private property, and follow trail markers in rural and mountain areas.'
  },
  {
    title: 'Local customs',
    content: 'Albanian hospitality is genuine; greet hosts warmly and try traditional food with appreciation.'
  },
  {
    title: 'Weather guide',
    content: 'Coastal regions are Mediterranean, while inland and mountain areas can be much cooler and wetter.'
  },
  {
    title: 'Transport guide',
    content: 'Public transport is best for major routes; private cars are ideal for off-the-beaten-path destinations.'
  },
  {
    title: 'Car rental guide',
    content: 'Rentals are easiest in Tirana and port towns. Book in advance for summer and mountain travel seasons.'
  },
  {
    title: 'Accommodation guide',
    content: 'Choose boutique hotels in cities, seaside guesthouses on the coast, and mountain lodges for rural stays.'
  }
];

export const PlanTrip = () => (
  <div className="space-y-10 px-6 py-10 lg:px-8">
    <section className="rounded-[40px] border border-slate-200 bg-white p-10 shadow-soft">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.24em] text-red-700">Travel planner</p>
          <h1 className="text-4xl font-semibold text-charcoal-900 sm:text-5xl">Everything you need to build your Albania trip.</h1>
          <p className="max-w-3xl text-sm leading-7 text-slate-600">
            Learn the best seasons, transport options, regions and practical tips so you can choose the right pace and route for your travel style.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Book your next stay</Button>
            <Button variant="secondary">See itinerary ideas</Button>
          </div>
        </div>
        <div className="rounded-[32px] bg-sand-50 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-red-700">Quick note</p>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Albania is easy to combine into a single trip: start in Tirana, move to the coast, then head inland for mountains and heritage towns.
          </p>
        </div>
      </div>
    </section>

    <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-6">
        {sections.map((section) => (
          <section key={section.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
            <h3 className="text-xl font-semibold text-charcoal-900">{section.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{section.content}</p>
          </section>
        ))}
      </div>
      <aside className="space-y-6 rounded-[32px] border border-slate-200 bg-sand-50 p-8 shadow-soft">
        <h3 className="text-xl font-semibold text-charcoal-900">Travel quick tips</h3>
        <ul className="space-y-3 text-sm leading-7 text-slate-600">
          <li>Book coastal hotels early for summer travel.</li>
          <li>Carry a cash backup for smaller mountain villages.</li>
          <li>Try public buses on main routes for budget-friendly travel.</li>
          <li>Plan at least one overnight stop in the Albanian Alps.</li>
          <li>Keep a flexible schedule for weather-dependent mountain hikes.</li>
        </ul>
      </aside>
    </div>
  </div>
);
