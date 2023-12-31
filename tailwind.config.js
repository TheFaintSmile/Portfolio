/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: 'Roboto Slab',
      },
      colors: {
        dark: '#282C33',
        red: '#E06B74',
        green: '#98C379',
        orange: '#E5C07A',
        blue: '#62AEEF',
        purple: '#C778DD',
        'blue-max': '#55B6C2',
        gray: '#ABB2BF',
        primary: '#3d80bb',
      },
      backgroundImage: {},
    },
  },
  plugins: [],
}
