import { useState } from 'react';
import type { RegionPoint } from '../data/albania';

interface AlbaniaMapProps {
  regions: RegionPoint[];
}

export const AlbaniaMap = ({ regions }: AlbaniaMapProps) => {
  const [active, setActive] = useState<string>(regions[0]?.name ?? '');
  const currentRegion = regions.find((region) => region.name === active) ?? regions[0];

  return (
    <div className="map-section">
      <div className="map-panel">
        <div className="map-frame">
          <svg viewBox="0 0 220 420" aria-label="Harta e Shqipërisë">
            <path
              d="M98 10 C80 36 70 72 66 110 C64 140 70 180 86 210 C100 240 118 270 126 300 C130 320 120 340 108 360 C96 380 92 398 96 410 C130 402 170 392 190 350 C205 315 200 265 190 235 C180 210 165 190 150 170 C140 150 130 130 122 110 C114 90 106 68 98 50 Z"
              fill="#d3e5ff"
              stroke="#4c6eb1"
              strokeWidth="3"
            />
            {regions.map((region) => (
              <g key={region.name}>
                <circle
                  cx={region.coords[0]}
                  cy={region.coords[1]}
                  r="10"
                  fill={active === region.name ? '#4c6eb1' : '#ffffff'}
                  stroke="#1f2d52"
                  strokeWidth="2"
                  onMouseEnter={() => setActive(region.name)}
                  onFocus={() => setActive(region.name)}
                  tabIndex={0}
                />
                <text
                  x={region.coords[0] + 16}
                  y={region.coords[1] + 6}
                  className="map-label"
                >
                  {region.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
        <div className="map-details">
          <h3>{currentRegion.name}</h3>
          <p>{currentRegion.description}</p>
        </div>
      </div>
    </div>
  );
};