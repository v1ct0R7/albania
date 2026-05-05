import type { FC } from 'react';
import type { Itinerary } from '../data/albania';

interface ItineraryListProps {
  itineraries: Itinerary[];
}

export const ItineraryList: FC<ItineraryListProps> = ({ itineraries }) => {
  return (
    <div className="itinerary-list">
      {itineraries.map((item) => (
        <article key={item.title} className="itinerary-card">
          <div className="itinerary-preview">
            <span>{item.duration}</span>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
};