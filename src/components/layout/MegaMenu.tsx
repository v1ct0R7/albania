import type { MegaMenuCategory } from '@/types/navigation';
import { Link } from 'react-router-dom';

interface MegaMenuProps {
  open: boolean;
  categories: MegaMenuCategory[];
}

export const MegaMenu = ({ open, categories }: MegaMenuProps) => {
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 top-full z-40 transition-all duration-300 ${
        open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}
    >
      <div className="mx-auto hidden max-w-7xl overflow-hidden rounded-b-3xl bg-white shadow-soft lg:block">
        <div className="grid gap-6 px-8 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.title} className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-charcoal-900">
                {category.title}
              </h3>
              <div className="space-y-2 text-sm text-slate-600">
                {category.items.map((item) => (
                  <Link key={item} to={`/search?q=${encodeURIComponent(item)}`} className="block transition hover:text-red-700">
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
