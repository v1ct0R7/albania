import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useSearch } from '@/hooks/useSearch';
import { destinations } from '@/data/destinations';
import { SearchBar } from '@/components/ui/SearchBar';
import { SectionTitle } from '@/components/ui/SectionTitle';

export const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultQuery = searchParams.get('q') ?? '';
  const [query, setQuery] = useState(defaultQuery);
  const results = useSearch(destinations, query);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ q: query });
  };

  const resultCount = results.length;
  const highlightText = query ? `for "${query}"` : 'for all destinations';

  return (
    <div className="space-y-10 px-6 py-10 lg:px-8">
      <SectionTitle title="Search results" subtitle="Find the Albanian destinations, categories, and places that match your travel interest." />

      <form onSubmit={handleSubmit} className="max-w-3xl">
        <SearchBar value={query} onChange={(event) => setQuery(event.target.value)} />
      </form>

      <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft">
        <p className="text-sm text-slate-600">Showing {resultCount} result{resultCount === 1 ? '' : 's'} {highlightText}. Use the search box to refine your travel ideas.</p>
        <div className="mt-6 space-y-4">
          {results.length > 0 ? (
            results.map((destination) => (
              <Link key={destination.id} to={`/destination/${destination.slug}`} className="block rounded-3xl border border-slate-200 bg-sand-50 p-5 text-charcoal-900 transition hover:border-red-700 hover:bg-sand-100">
                <h3 className="text-lg font-semibold">{destination.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{destination.shortDescription}</p>
              </Link>
            ))
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-sand-50 p-8 text-center text-sm text-slate-600">
              <p>No matching destinations found. Try a broader search term or browse the Explore page for inspiration.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
