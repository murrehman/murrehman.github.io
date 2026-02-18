/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#818cf8',
        secondary: '#6366f1',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-out': 'fadeOut 0.5s ease-in forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'tracking-in-expand': 'tracking-in-expand 1.5s cubic-bezier(0.215, 0.610, 0.355, 1.000) both',
        'shimmer': 'shimmer 2s infinite linear',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'tracking-in-expand': {
          '0%': { 'letter-spacing': '-0.5em', opacity: '0' },
          '40%': { opacity: '0.6' },
          '100%': { opacity: '1' }
        },
        shimmer: {
          '0%': { 'background-position': '-200% 0' },
          '100%': { 'background-position': '200% 0' }
        }
      }
    },
  },
  plugins: [],
}
