import { Search } from 'lucide-react';
import type { ChangeEventHandler } from 'react';

interface SearchBarProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, placeholder = 'Search destinations, beaches, mountains...' }: SearchBarProps) => {
  return (
    <label className="group relative block w-full max-w-3xl rounded-3xl border border-slate-200 bg-white p-4 shadow-sm focus-within:border-red-700 focus-within:ring-2 focus-within:ring-red-100">
      <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition group-focus-within:text-red-600" />
      <input
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border-0 bg-transparent pl-12 text-sm text-charcoal-900 outline-none placeholder:text-slate-400"
      />
    </label>
  );
};
