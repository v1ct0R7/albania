import type { Destination } from '@/types/destination';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

interface MapMarkerPopupProps {
  destination: Destination;
}

export const MapMarkerPopup: FC<MapMarkerPopupProps> = ({ destination }) => {
  return (
    <div className="max-w-xs rounded-3xl border border-slate-200 bg-white p-4 shadow-soft">
      <div className="overflow-hidden rounded-3xl bg-slate-100">
        <img src={destination.heroImage} alt={destination.name} className="h-32 w-full object-cover" />
      </div>
      <div className="mt-3">
        <p className="text-xs uppercase tracking-[0.24em] text-red-700">{destination.category}</p>
        <h3 className="mt-2 text-lg font-semibold text-charcoal-900">{destination.name}</h3>
        <p className="mt-2 text-sm text-slate-600">{destination.shortDescription}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link to={`/destination/${destination.slug}`} className="rounded-full bg-red-700 px-4 py-2 text-xs font-semibold text-white transition hover:bg-red-600">
          View Guide
        </Link>
        <button type="button" className="rounded-full border border-charcoal-200 px-4 py-2 text-xs font-semibold text-charcoal-900 transition hover:border-red-700 hover:text-red-700">
          Save
        </button>
      </div>
    </div>
  );
};
