/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Averia Serif Libre', 'serif'],
        body: ['Quicksand', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': '2.5rem',
        'heading-md': '1.5rem',
        'heading-sm': '1.2rem',
        'body-xl': '2rem',
        'body-lg': '1.125rem',
        'body-md': '1rem',
        'body-xsm': '0.5rem',
      },
      fontWeight: {
        'heading-regular': 400,
        'heading-bold': 700,
        'body-light': 300,
        'body-regular': 400,
        'body-bold': 700,
      },
      colors: {
        spamYellow: '#facc15',
        spamBlue: '#1e3a8a',
        spamPink: '#f87171',
      },
      keyframes: {
        rotate360: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        infiniteScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        infiniteScrollBackwards: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        rotate360: 'rotate360 1s linear infinite',
        loading: 'rotate360 1s ease-in-out infinite',
        infiniteScroll: 'infiniteScroll 50s linear infinite',
        infiniteScrollBackwards: 'infiniteScrollBackwards 50s linear infinite',
      },
    },
    plugins: [],
  },
}
