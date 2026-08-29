/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-bg': '#05070D',
        'brand-dark': '#070B14',
        'brand-surface': '#0B1220',
        'brand-border': '#17263D',
        'brand-ice': '#EAF2FF',
        'brand-muted': '#8EA2BF',
        'brand-neon': '#64FFDA',
        'brand-accent': '#29B6F6',
        'brand-red': '#FF1744',
        'brand-purple': '#7C5CFF',
        'brand-deep-purple': '#20133A',
      },
      fontFamily: {
        body: ['Outfit', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'orb-rotate': 'orb-rotate 20s linear infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(126, 255, 220, 0.3)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(126, 255, 220, 0.5)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(20px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'orb-rotate': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      backdropFilter: {
        none: 'none',
        sm: 'blur(4px)',
        base: 'blur(10px)',
        md: 'blur(12px)',
        lg: 'blur(16px)',
        xl: 'blur(20px)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(126, 255, 220, 0.2)',
        'glow-md': '0 0 30px rgba(126, 255, 220, 0.3)',
        'glow-lg': '0 0 50px rgba(126, 255, 220, 0.4)',
        'glow-xl': '0 0 80px rgba(126, 255, 220, 0.5)',
        'neon-blue': '0 0 30px rgba(93, 180, 255, 0.4)',
        'neon-purple': '0 0 30px rgba(124, 58, 237, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-grid': 'linear-gradient(0deg, transparent 24%, rgba(126, 255, 220, 0.05) 25%, rgba(126, 255, 220, 0.05) 26%, transparent 27%, transparent 74%, rgba(126, 255, 220, 0.05) 75%, rgba(126, 255, 220, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(126, 255, 220, 0.05) 25%, rgba(126, 255, 220, 0.05) 26%, transparent 27%, transparent 74%, rgba(126, 255, 220, 0.05) 75%, rgba(126, 255, 220, 0.05) 76%, transparent 77%, transparent)',
      },
      backgroundSize: {
        'hero-grid': '50px 50px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}

