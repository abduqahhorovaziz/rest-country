/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "sans-serif"],
      },
      boxShadow: {
        "header-shadow": "0px 2px 4px rgba(0, 0, 0, 0.0562443)",
        "search-shadow": "0px 2px 9px rgba(0, 0, 0, 0.0532439)",
        "card-shadow": "0px 0px 7px 2px rgba(0, 0, 0, 0.0294384)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
