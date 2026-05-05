import type { FC } from 'react';
import type { Destination } from '../data/albania';

interface DestinationGridProps {
  destinations: Destination[];
}

export const DestinationGrid: FC<DestinationGridProps> = ({ destinations }) => {
  return (
    <div className="card-grid">
      {destinations.map((destination) => (
        <article key={destination.title} className="destination-card">
          <div
            className="destination-thumb"
            style={{ backgroundImage: destination.accent }}
          />
          <div className="destination-copy">
            <h3>{destination.title}</h3>
            <p className="destination-subtitle">{destination.subtitle}</p>
            <p>{destination.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};