interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="space-y-3">
    <h2 className="text-3xl font-semibold tracking-tight text-charcoal-900 sm:text-4xl">{title}</h2>
    {subtitle ? <p className="max-w-3xl text-sm text-slate-600 sm:text-base">{subtitle}</p> : null}
  </div>
);
