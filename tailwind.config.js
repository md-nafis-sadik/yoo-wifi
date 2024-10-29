/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "380px",
      },
      colors: {
        white: {
          DEFAULT: "#ffffff",
        },
        neutral: {},
        black: {
          rgb: "rgba(0,0,0,0.5)",
          DEFAULT: "#000000",
        },
      },
      fontFamily: {
        dmsans: ["dmsans", "sans-serif"],
      },
      backgroundImage: {
        login: "url('./assets/images/loginBg.png')",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  darkMode: ["class", "class"],
  plugins: [require("tailwindcss-animate")],
};
