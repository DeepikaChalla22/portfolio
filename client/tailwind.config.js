/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "rgb(34 52 42)",
        "secondary": "#7C8363",
        "tertiary": "#68A4A5"
      }
    },
    screens: {
      lg: { max: "2023px" },

      sm: { max: "1000px" },

    }
  },
  plugins: [],
}