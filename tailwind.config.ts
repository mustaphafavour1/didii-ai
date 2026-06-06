import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0C0E1A',
        cream: '#F4F0E6',
        indigo: {
          DEFAULT: '#4B3DF5',
          50: '#ECEAFE',
          100: '#D9D5FD',
          200: '#B3ABFB',
          300: '#8D81F9',
          400: '#6757F7',
          500: '#4B3DF5',
          600: '#2A1EDB',
          700: '#2017A8',
          800: '#150F75',
          900: '#0B0842',
        },
        terracotta: '#E2613C',
        lilac: '#B9A8FF',
        muted: '#8E90A6',
      },
      fontFamily: {
        display: ['Panchang', 'system-ui', 'sans-serif'],
        body: ['var(--font-hanken)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        card: '16px',
        modal: '24px',
        pill: '999px',
      },
      keyframes: {
        caret: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        aurora: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1) rotate(0deg)' },
          '33%': { opacity: '0.75', transform: 'scale(1.08) rotate(4deg)' },
          '66%': { opacity: '0.6', transform: 'scale(0.96) rotate(-3deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
      },
      animation: {
        caret: 'caret 0.9s step-end infinite',
        aurora: 'aurora 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        'slide-right': 'slide-right 0.4s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-dot': 'pulse-dot 1.2s ease-in-out infinite',
      },
      backgroundImage: {
        'indigo-glow':
          'radial-gradient(ellipse at center, rgba(75,61,245,0.35) 0%, rgba(75,61,245,0.1) 40%, transparent 70%)',
        'lilac-glow':
          'radial-gradient(ellipse at center, rgba(185,168,255,0.25) 0%, rgba(185,168,255,0.05) 50%, transparent 75%)',
        'terracotta-glow':
          'radial-gradient(ellipse at center, rgba(226,97,60,0.3) 0%, transparent 65%)',
        'hero-gradient':
          'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(75,61,245,0.2) 0%, rgba(185,168,255,0.08) 40%, transparent 70%)',
      },
      boxShadow: {
        'glow-indigo': '0 0 48px rgba(75,61,245,0.28)',
        'glow-lilac': '0 0 32px rgba(185,168,255,0.2)',
        card: '0 1px 4px rgba(12,14,26,0.08), 0 4px 24px rgba(12,14,26,0.06)',
        'card-dark': '0 1px 4px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)',
        glass: '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.1)',
      },
    },
  },
  plugins: [],
}

export default config
