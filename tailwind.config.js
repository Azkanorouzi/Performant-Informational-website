/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#dd0000',
        secondary: '#eeeeee',
        tertiary: '#aa0000',
        forth: '#0F172A',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        TekoLight: ['Teko-light', 'sans-serif'],
        TekoMedium: ['Teko-medium', 'sans-serif'],
        TekoRegular: ['Teko-regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
