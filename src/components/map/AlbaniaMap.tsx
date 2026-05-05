import { useMemo, useState } from 'react';
import L from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { useWishlist } from '@/hooks/useWishlist';
import type { Destination } from '@/types/destination';
import { MapFilters } from './MapFilters';

interface AlbaniaMapProps {
  destinations: Destination[];
}

const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetina = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

export const AlbaniaMap = ({ destinations }: AlbaniaMapProps) => {
  const [category, setCategory] = useState('All');
  const { toggle, has } = useWishlist();

  const filteredDestinations = useMemo(() => {
    if (category === 'All') return destinations;
    return destinations.filter((destination) => [destination.category, ...destination.tags].some((tag) => tag.toLowerCase().includes(category.toLowerCase())));
  }, [category, destinations]);

  return (
    <section className="space-y-8">
      <MapFilters active={category} setActive={setCategory} />
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="rounded-[32px] border border-slate-200 bg-white p-4 shadow-soft">
          <MapContainer center={[41.1533, 20.1683]} zoom={7} scrollWheelZoom={false} className="h-[520px] w-full rounded-[28px]">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {filteredDestinations.map((destination) => (
              <Marker
                key={destination.id}
                position={destination.coordinates}
                icon={L.icon({
                  iconUrl,
                  iconRetinaUrl: iconRetina,
                  shadowUrl,
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [0, -36]
                })}
              >
                <Popup>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-red-700">{destination.category}</p>
                    <h3 className="text-lg font-semibold text-charcoal-900">{destination.name}</h3>
                    <p className="text-sm text-slate-600">{destination.shortDescription}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Link to={`/destination/${destination.slug}`} className="rounded-full bg-red-700 px-3 py-2 text-xs font-semibold text-white">
                        View Guide
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggle(destination.id)}
                        className="rounded-full border border-charcoal-200 px-3 py-2 text-xs font-semibold text-charcoal-900 transition hover:border-red-700 hover:text-red-700"
                      >
                        {has(destination.id) ? 'Remove' : 'Save'}
                      </button>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        <aside className="space-y-4 rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft">
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-charcoal-900">Explore list</h3>
            <p className="text-sm text-slate-600">Tap a marker or browse the destinations below for quick access to each guide.</p>
          </div>
          <div className="space-y-3">
            {filteredDestinations.map((destination) => (
              <Link key={destination.id} to={`/destination/${destination.slug}`} className="block rounded-3xl border border-slate-200 p-4 transition hover:border-red-700 hover:bg-sand-50">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-red-700">{destination.category}</p>
                    <h4 className="mt-2 text-lg font-semibold text-charcoal-900">{destination.name}</h4>
                  </div>
                  <span className="text-sm text-slate-500">View</span>
                </div>
                <p className="mt-3 text-sm text-slate-600">{destination.shortDescription}</p>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};
