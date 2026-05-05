import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Search, Heart, MapPin } from 'lucide-react';
import { navigationLinks, megaMenuCategories } from '@/data/navigation';
import { MegaMenu } from './MegaMenu';
import { MobileMenu } from './MobileMenu';

export const Header = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl shadow-sm shadow-slate-900/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3">
          <MapPin className="h-6 w-6 text-red-700" />
          <Link to="/" className="text-lg font-semibold tracking-tight text-charcoal-900">
            Albania.com
          </Link>
        </div>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-sm font-medium text-charcoal-900 transition hover:text-red-700"
              onMouseEnter={() => setMegaOpen(link.label === 'Places to Go' || link.label === 'Explore')}
              onFocus={() => setMegaOpen(link.label === 'Places to Go' || link.label === 'Explore')}
              onMouseLeave={() => setMegaOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/search" className="inline-flex h-10 items-center justify-center rounded-full border border-charcoal-200 px-4 text-sm font-semibold text-charcoal-900 transition hover:border-red-700 hover:text-red-700">
            Search
          </Link>
          <Link to="/wishlist" className="inline-flex h-10 items-center justify-center rounded-full border border-red-700 bg-red-700 px-4 text-sm font-semibold text-white transition hover:bg-red-600">
            Wishlist
          </Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-charcoal-200 p-3 text-charcoal-900 transition hover:border-red-700 hover:text-red-700 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Open mobile menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <MegaMenu open={megaOpen} categories={megaMenuCategories} />
      <MobileMenu open={mobileOpen} links={navigationLinks} categories={megaMenuCategories} onDismiss={() => setMobileOpen(false)} />
    </header>
  );
};
