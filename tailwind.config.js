/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.astro', './src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primary: '#cb0000',
        secondary: '#ffffff',
        tertiary: '#eeeeee',
        forth: '#0F172A',
        fifth: '#880000',
        sixth: '#0C0C0C',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
      },
      fontFamily: {
        TekoLight: ['Teko-light', 'sans-serif'],
        TekoMedium: ['Teko-medium', 'sans-serif'],
        TekoRegular: ['Teko-regular', 'sans-serif'],
        oswald: ['oswald', 'sans-serif'],
        oswaldLight: ['oswald-light', 'sans-serif'],
        oswaldBold: ['oswald-bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
