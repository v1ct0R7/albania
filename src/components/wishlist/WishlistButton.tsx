import { Heart } from 'lucide-react';
import type { FC } from 'react';

interface WishlistButtonProps {
  isSaved: boolean;
  onToggle: () => void;
}

export const WishlistButton: FC<WishlistButtonProps> = ({ isSaved, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    className={
      'inline-flex items-center gap-2 rounded-full border border-charcoal-200 bg-white px-4 py-2 text-sm font-semibold text-charcoal-900 transition hover:border-red-700 hover:text-red-700'
    }
  >
    <Heart className={isSaved ? 'h-4 w-4 text-red-700' : 'h-4 w-4 text-slate-400'} />
    {isSaved ? 'Saved' : 'Save'}
  </button>
);
