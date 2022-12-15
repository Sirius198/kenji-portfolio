/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/*.{css}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "color-810": "#f8fbfb",
        "gray-lite": "#44566C",
        oriange: "#e93b81",
        "oriange-lite": "#FD7590",
        green: "#6AB5B9",
        "color-50": "#C17CEB",
        "color-910": "#A6A6A6",
      },
      backgroundImage: {
        homeBg: "url('/images/bg.jpg')",
        "homeBg-dark": "url('/images/bg-dark.jpg')",
      },
      boxShadow: {
        icon: "0 4px 6px 0px rgba(0, 0, 0, 0.08)",
      },
      container: {
        center: true,
        screens: {
          "2xl": "1280px",
        },
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "2xl": "1.375rem",
      "4xl": "1.5625rem",
      "5xl": "1.625rem",
      "7xl": "2.5rem",
      xtiny: ".8125rem",
    },
  },
  plugins: [],
};
