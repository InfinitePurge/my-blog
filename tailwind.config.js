/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [
    function({ addBase }) {
      addBase({
        '::selection': { 
          background: 'black',
          color: 'white'
          
        },
        '::-moz-selection': {
          background: 'black',
          color: 'white'
        },
      })
    },
  ],
}