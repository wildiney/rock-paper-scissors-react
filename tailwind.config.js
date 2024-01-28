/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js, ts, jsx, tsx}",
    "./src/**/*",
  ],
  theme: {
    colors: {
      primary: "#bc658d",
      secondary: "#82c4c3",
      tertiary: "#f9d89c",
      accent: "#f5a7a7",
      white: "#fff"
    },
    fontFamily: {
      'sriracha': ['"Sriracha"', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}

