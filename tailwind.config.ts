import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#152040',
          mid: '#1e2d52',
          light: '#2a3d6b',
        },
        accent: {
          DEFAULT: '#4a7ccc',
          soft: '#a3c0e8',
          glow: 'rgba(74,124,204,0.12)',
        },
        'gray-brand': {
          DEFAULT: '#c8cdd5',
          light: '#e8eaef',
        },
        warm: {
          DEFAULT: '#f5f6f8',
          dark: '#e8eaef',
        },
        sand: '#d8dce3',
        'text-brand': {
          DEFAULT: '#2a2a2a',
          light: '#6b6b6b',
          lighter: '#999',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        serif: ['DM Serif Display', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.92)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        chatOpen: {
          '0%': { opacity: '0', transform: 'scale(0.8) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        fabPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0' },
          '50%': { transform: 'scale(1.5)', opacity: '0.15' },
        },
        msgSlide: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        typingBounce: {
          '0%, 60%, 100%': { transform: 'translateY(0)', opacity: '0.3' },
          '30%': { transform: 'translateY(-6px)', opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease-out both',
        fadeIn: 'fadeIn 0.6s ease-out both',
        scaleIn: 'scaleIn 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 30s linear infinite',
        chatOpen: 'chatOpen 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        fabPulse: 'fabPulse 3s ease-in-out infinite',
        msgSlide: 'msgSlide 0.3s ease-out',
        typingBounce: 'typingBounce 1.4s ease-in-out infinite',
      },
      boxShadow: {
        glow: '0 8px 40px rgba(21,32,64,0.2)',
      },
    },
  },
  plugins: [],
};

export default config;
