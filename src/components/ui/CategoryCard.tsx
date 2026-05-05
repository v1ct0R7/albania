interface CategoryCardProps {
  title: string;
  description: string;
}

export const CategoryCard = ({ title, description }: CategoryCardProps) => (
  <div className="section-card border-charcoal-100 bg-white/95 transition hover:-translate-y-1 hover:shadow-soft">
    <p className="text-base font-semibold text-charcoal-900">{title}</p>
    <p className="mt-3 text-sm text-slate-600">{description}</p>
  </div>
);
