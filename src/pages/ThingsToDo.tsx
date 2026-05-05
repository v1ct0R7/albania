import { activityCategories } from '@/data/activities';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { CategoryCard } from '@/components/ui/CategoryCard';

export const ThingsToDo = () => (
  <div className="space-y-12 px-6 py-10 lg:px-8">
    <SectionTitle title="Things To Do in Albania" subtitle="Activities and experiences for every travel style." />
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {activityCategories.map((category) => (
        <CategoryCard key={category.title} title={category.title} description={category.description} />
      ))}
    </div>

    <section className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
      <h2 className="text-2xl font-semibold text-charcoal-900">How to choose the right experience</h2>
      <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
        <p>Beach lovers can follow the southern coast and island hopping routes, while nature seekers should head into the Alps or national parks.</p>
        <p>Culture travelers will enjoy old cities like Berat and Gjirokastër, local festivals, and traditional food experiences.</p>
        <p>Families and wellness travelers can find calm beaches, protected nature reserves, and slow-paced coastal towns.</p>
      </div>
    </section>
  </div>
);
