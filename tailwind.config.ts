import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50:  "#FEF2F3",
          100: "#FCDDE0",
          200: "#F9A8B0",
          400: "#E05060",
          600: "#9B1D28",
          800: "#5A0E16",
          900: "#3D0C11",
        },
        gold: {
          50:  "#FEF9EC",
          100: "#FAECC4",
          200: "#F5D878",
          400: "#D4A017",
          600: "#A07510",
          800: "#6B4D09",
          900: "#412F04",
        },
        cream: "#FEF9F0",
        offwhite: "#FFFDF8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans:  ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
