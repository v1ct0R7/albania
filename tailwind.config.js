export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          900: '#111827',
          700: '#334155'
        },
        sand: {
          50: '#f7efe1'
        },
        adriatic: {
          500: '#1d4ed8',
          700: '#1e40af'
        },
        olive: {
          500: '#567d46'
        }
      },
      boxShadow: {
        soft: '0 24px 80px rgba(15, 23, 42, 0.08)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
