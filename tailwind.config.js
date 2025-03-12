/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy': {
          800: 'rgba(2,12,27,0.7)'
        }
      }
    },
  },
  plugins: [],
};