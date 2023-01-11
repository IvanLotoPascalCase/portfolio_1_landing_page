/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E56622",
        primaryalt: "#FF812E",
        secondary: "#C4C6CF",
        secondaryalt: "#E0E2ED"
      }
    },
  },
  plugins: [],
}
