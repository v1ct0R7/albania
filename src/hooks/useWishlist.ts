import { useEffect, useState } from 'react';

const STORAGE_KEY = 'albania_wishlist_ids';

export const useWishlist = () => {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setSavedIds(JSON.parse(stored));
      } catch {
        setSavedIds([]);
      }
    }
  }, []);

  const persist = (ids: string[]) => {
    setSavedIds(ids);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  };

  const add = (id: string) => {
    if (!savedIds.includes(id)) {
      persist([...savedIds, id]);
    }
  };

  const remove = (id: string) => {
    persist(savedIds.filter((item) => item !== id));
  };

  const toggle = (id: string) => {
    if (savedIds.includes(id)) {
      remove(id);
    } else {
      add(id);
    }
  };

  return { savedIds, add, remove, toggle, has: (id: string) => savedIds.includes(id) };
};
