import type { Dispatch, FC, SetStateAction } from 'react';

const filterOptions = ['All', 'City', 'Beach', 'Mountain', 'Culture', 'Food', 'Adventure', 'Heritage'];

interface MapFiltersProps {
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export const MapFilters: FC<MapFiltersProps> = ({ active, setActive }) => {
  return (
    <div className="grid gap-3 rounded-[28px] border border-slate-200 bg-white p-5 shadow-soft md:grid-cols-2">
      {filterOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setActive(option)}
          className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
            active === option ? 'bg-red-700 text-white' : 'bg-sand-50 text-charcoal-900 hover:bg-slate-100'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
