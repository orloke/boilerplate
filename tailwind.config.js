/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/Templates/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      zIndex: {
        1200: 1200,
      },
      colors: {
        blueMarker: '#4895d2',
      },
      maxWidth: {
        80: '80vw',
      },
      fontSize: {
        '5rem': '5rem',
      },
    },
  },
  plugins: [],
};
