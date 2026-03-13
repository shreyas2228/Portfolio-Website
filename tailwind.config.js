/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': 'var(--brand-bg)',
        'brand-ice': 'var(--brand-ice)',
        'brand-muted': 'var(--brand-muted)',
        'brand-neon': 'var(--brand-neon)',
        'brand-accent': 'var(--brand-accent)',
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

