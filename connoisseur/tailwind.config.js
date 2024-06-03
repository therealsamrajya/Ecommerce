/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032d60",
        secondary: "#0b5cab",
        tertiary: "#eaf5fe",
        women1: "#e7b1b1",
        women2: " #bb6bd9",
        women3: "#fce9eb",
      },

      fontFamily: {
        "great-vibes": ['"Great Vibes"', "cursive"],
        "merriweather-light": ['"Merriweather"', "serif"],
        "merriweather-regular": ['"Merriweather"', "serif"],
      },
    },
  },
  plugins: [],
};
