import { Link } from 'react-router-dom';
import type { Destination } from '@/types/destination';

interface DestinationCardProps {
  destination: Destination;
}

export const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Link to={`/destination/${destination.slug}`} className="group block overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-[0_26px_90px_rgba(15,23,42,0.08)]">
      <div className="h-52 bg-cover bg-center" style={{ backgroundImage: `url(${destination.heroImage})` }} />
      <div className="p-6">
        <p className="text-xs uppercase tracking-[0.24em] text-red-700">{destination.category}</p>
        <h3 className="mt-3 text-xl font-semibold text-charcoal-900">{destination.name}</h3>
        <p className="mt-3 text-sm text-slate-600">{destination.shortDescription}</p>
      </div>
    </Link>
  );
};
