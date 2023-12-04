import { BRAND_COLORS, SCREEN_BREAKPOINTS, NEUTRAL_COLORS } from "./src/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    screens: SCREEN_BREAKPOINTS,
    container: {
      center: true,
      padding: "2rem",
      screens: SCREEN_BREAKPOINTS,
    },
    extend: {
      colors: {
        brand: BRAND_COLORS,
        neutral: NEUTRAL_COLORS,
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
