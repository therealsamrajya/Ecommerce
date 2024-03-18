/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032d60",
        secondary: "#0b5cab",
        tertiary: "#eaf5fe",
      },
    },
  },
  plugins: [],
};
