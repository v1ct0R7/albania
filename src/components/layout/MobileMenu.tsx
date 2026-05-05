import type { MegaMenuCategory } from '@/types/navigation';
import type { NavigationLink } from '@/types/navigation';
import { X, Search, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MobileMenuProps {
  open: boolean;
  links: NavigationLink[];
  categories: MegaMenuCategory[];
  onDismiss: () => void;
}

export const MobileMenu = ({ open, links, categories, onDismiss }: MobileMenuProps) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-transform duration-300 ${
        open ? 'translate-x-0' : 'translate-x-full'
      } lg:hidden`}
      aria-hidden={!open}
    >
      <div className="absolute inset-0 bg-slate-900/40" onClick={onDismiss} />
      <div className="relative h-full w-[90vw] max-w-xs bg-white p-6 shadow-soft">
        <button onClick={onDismiss} className="mb-8 inline-flex items-center gap-2 text-charcoal-900">
          <X className="h-5 w-5" /> Close
        </button>

        <nav className="space-y-4">
          {links.map((link) => (
            <Link key={link.label} to={link.path} onClick={onDismiss} className="block text-lg font-semibold text-charcoal-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-sand-50 p-4">
            <Search className="h-5 w-5 text-red-700" />
            <span className="text-sm text-slate-600">Search destinations</span>
          </div>
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-sand-50 p-4">
            <Heart className="h-5 w-5 text-red-700" />
            <span className="text-sm text-slate-600">View wishlist</span>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-charcoal-900">Browse categories</h3>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {categories.map((category) => (
              <div key={category.title}>
                <p className="font-semibold text-charcoal-900">{category.title}</p>
                <div className="mt-2 space-y-1">
                  {category.items.slice(0, 3).map((item) => (
                    <Link key={item} to={`/search?q=${encodeURIComponent(item)}`} onClick={onDismiss} className="block transition hover:text-red-700">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
