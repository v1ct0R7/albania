import { useMemo } from 'react';
import type { Destination } from '@/types/destination';

export const useSearch = (destinations: Destination[], query: string) => {
  return useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return destinations;
    }

    return destinations.filter((item) => {
      const searchText = [
        item.name,
        item.region,
        item.category,
        item.shortDescription,
        item.longDescription,
        ...item.tags
      ].join(' ').toLowerCase();
      return searchText.includes(normalized);
    });
  }, [destinations, query]);
};
