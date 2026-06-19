/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF5EC',
          200: '#F5EDD8',
          300: '#EDE0C4',
          400: '#E0CDA4',
          500: '#D4B882',
        },
        warm: {
          50: '#F9F4EE',
          100: '#F3E9DC',
          200: '#E8D5BC',
          300: '#D9BC95',
          400: '#C49A62',
          500: '#A67C45',
        },
        gold: {
          100: '#F0E4C8',
          200: '#DEC48A',
          300: '#C8A456',
          400: '#A8832E',
          500: '#8B6914',
          600: '#6B5010',
        },
        bark: {
          100: '#8B7355',
          200: '#6B5A3E',
          300: '#4A3728',
          400: '#2C2218',
          500: '#1C150E',
        },
        sage: {
          100: '#E8EDE5',
          200: '#C8D4C2',
          300: '#9BB08F',
          400: '#6A8B5E',
          500: '#4A6840',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['DM Sans', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
