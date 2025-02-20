/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      fontFamily: {
        ProximaNova: ["ProximaNova", "sans-serif"],
      },
      boxShadow: {
        card: "2px 2px 28px 4px #12416C",
      },
    },
  },
  plugins: [],
};
