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
        ink: '#0F1108',
        cream: '#F4F0E6',
        // Danfo yellow — primary brand action colour
        yellow: {
          DEFAULT: '#FFB800',
          50:  '#FFFBE6',
          100: '#FFF2B3',
          200: '#FFE47F',
          300: '#FFD54B',
          400: '#FFC518',
          500: '#FFB800',
          600: '#DB9E00',
          700: '#B78400',
          800: '#936900',
          900: '#5A4100',
          dark: '#1A1200', // text on yellow bg
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
        card: '14px',
        modal: '20px',
        pill: '999px',
      },
      keyframes: {
        caret: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        aurora: {
          '0%, 100%': { opacity: '0.55', transform: 'scale(1) rotate(0deg)' },
          '33%': { opacity: '0.75', transform: 'scale(1.06) rotate(3deg)' },
          '66%': { opacity: '0.6', transform: 'scale(0.96) rotate(-2deg)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-dot': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.35', transform: 'scale(0.75)' },
        },
        'bar-wave': {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(2.2)' },
        },
        'scan-line': {
          '0%': { top: '0%', opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { top: '100%', opacity: '0' },
        },
        'chip-fill': {
          '0%': { backgroundPosition: '100% 0' },
          '100%': { backgroundPosition: '0% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        caret: 'caret 0.9s step-end infinite',
        aurora: 'aurora 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.4s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
        'pulse-dot': 'pulse-dot 1.2s ease-in-out infinite',
        'bar-wave': 'bar-wave 0.7s ease-in-out infinite',
        'scan-line': 'scan-line 1.8s linear forwards',
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'yellow-glow': 'radial-gradient(ellipse at center, rgba(255,184,0,0.3) 0%, rgba(255,184,0,0.08) 45%, transparent 70%)',
        'yellow-glow-sm': 'radial-gradient(ellipse at center, rgba(255,184,0,0.2) 0%, transparent 60%)',
        'warm-dark': 'radial-gradient(ellipse 80% 60% at 60% 20%, rgba(255,184,0,0.08) 0%, transparent 65%)',
      },
      boxShadow: {
        'glow-yellow': '0 0 40px rgba(255,184,0,0.22)',
        'glow-yellow-sm': '0 0 20px rgba(255,184,0,0.18)',
        card: '0 1px 4px rgba(15,17,8,0.06), 0 4px 20px rgba(15,17,8,0.05)',
        'card-dark': '0 2px 8px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.2)',
        glass: '0 4px 24px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}

export default config
