import type { Destination } from '@/types/destination';

export const filterDestinations = (destinations: Destination[], category?: string) => {
  if (!category) return destinations;
  const normalized = category.toLowerCase();
  return destinations.filter(
    (destination) =>
      destination.category.toLowerCase().includes(normalized) ||
      destination.region.toLowerCase().includes(normalized) ||
      destination.tags.some((tag) => tag.toLowerCase().includes(normalized))
  );
};
