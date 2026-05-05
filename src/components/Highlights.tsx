import type { FC } from 'react';
import type { Highlight } from '../data/albania';

interface HighlightsProps {
  items: Highlight[];
}

export const Highlights: FC<HighlightsProps> = ({ items }) => {
  return (
    <div className="highlight-grid">
      {items.map((item) => (
        <article key={item.title} className="highlight-card" style={{ borderColor: item.accent }}>
          <h3>{item.title}</h3>
          <p>{item.caption}</p>
        </article>
      ))}
    </div>
  );
};