const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: colors.black,
        purple: "#5200FF",
        red: colors.red,
      }
    },
  },
  plugins: [],
}
