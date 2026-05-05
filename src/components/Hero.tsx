import type { FC } from 'react';

interface HeroProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    cta: string;
  };
}

export const Hero: FC<HeroProps> = ({ data }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="eyebrow">Explore Albania</span>
        <h1>{data.title}</h1>
        <p>{data.subtitle}</p>
        <p className="hero-description">{data.description}</p>
        <a href="#" className="button button--primary">
          {data.cta}
        </a>
      </div>
      <div className="hero-visual">
        <div className="hero-card hero-card--travel">Shqipëri e gjallë</div>
        <div className="hero-card hero-card--coast">Bregdeti Jon</div>
        <div className="hero-card hero-card--mountain">Alpet shqiptare</div>
      </div>
    </section>
  );
};