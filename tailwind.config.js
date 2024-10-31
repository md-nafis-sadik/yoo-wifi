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
        disabled: {
          DEFAULT: "#D0D0D0",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        secondary: {
          900: "#7C440B",
          800: "#985308",
          700: "#BB6C02",
          600: "#E29800",
          500: "#FFC400",
          400: "#FFE31B",
          300: "#FFF146",
          200: "#FFFA85",
          100: "#FFFCC5",
        },
        main: {
          950: "#46090A",
          900: "#811B1D",
          800: "#9B191B",
          700: "#BC191C",
          600: "#D81F22",
          500: "#F24144",
          400: "#FB6E70",
          300: "#FEA3A4",
          200: "#FFC9CA",
          100: "#FFE1E1",
          50: "#FEF2F2",
        },
        black: {
          900: "#191919",
          800: "#161616",
          700: "#4F4F4F",
          600: "#888888",
          500: "#25262B",
          200: "#D1D1D1",
          100: "#E7E7E7",
          DEFAULT: "#000000",
        },
        neutral: {
          black: "#181A20",
          900: "#212121",
          800: "#424242",
          700: "#616161",
          600: "#757575",
          500: "#9E9E9E",
          400: "#BDBDBD",
          300: "#E0E0E0",
          200: "#EEEEEE",
          100: "#F5F5F5",
          50: "#FAFAFA",
        },
        status: {
          error: "#DE3737",
          success: "#56AD7E",
          warning: "#FF9F43",
          info: "#54A0FF",
          alert: "#FECA57",
        },
      },
      fontSize: {
        xxs: "0.665rem",
        "2xml": "1.75rem",
      },
      fontFamily: {
        dmsans: ["DMSans", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      boxShadow: {
        mid: "0px -8px 24px 0px rgba(0, 0, 0, 0.10)",
        "card-primary": "0px 15px 24px 0px rgba(0, 0, 0, 0.12)",
        "card-secondary": "0px 4px 12.1px 0px rgba(13, 13, 13, 0.06)",
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
