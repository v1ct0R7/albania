import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
  const baseStyle =
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-red-500';
  const variantStyle =
    variant === 'primary'
      ? 'bg-red-700 text-white shadow-lg shadow-red-700/20 hover:bg-red-600'
      : variant === 'secondary'
      ? 'border border-charcoal-200 bg-white text-charcoal-900 hover:border-red-700 hover:text-red-700'
      : 'text-charcoal-900 hover:text-red-700';

  return (
    <button className={`${baseStyle} ${variantStyle} ${className}`} {...props}>
      {children}
    </button>
  );
};
