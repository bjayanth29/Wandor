import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        display: ['Special Elite', 'serif'],
      },
      colors: {
        wandor: {
          dark: '#0a0a0a',
          text: '#1a1a1a',
          muted: '#767676',
          prompt: '#905831',
          sand: '#f4efe9',
          line: '#e8e1da',
        },
      },
      boxShadow: {
        soft: '0 18px 60px rgba(20, 15, 10, .08)',
        glass: '0 0 4px rgba(0,0,0,.15), 0 18px 80px rgba(0,0,0,.12)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
    },
  },
  plugins: [],
} satisfies Config
