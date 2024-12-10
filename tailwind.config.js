/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/preline/dist/*.js",
  ],

  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl:": "1440px",
      },
      maxWidth: {
        base: "1300px",
        button: "267px",
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        brand: {
          blue: {
            DEFAULT: "#3FA2F6",
            norm: "#E1F1FF",
            light: "#F0F8FF",
          },
          yellow: {
            DEFAULT: "#FFE589",
            light: "#FFF9D1",
            100: "#FFFCE8",
          },
          green: {
            DEFAULT: "#74B13C",
            light: "#E5EFDC",
            100: "#F2F7ED",
          },
          purple: {
            DEFAULT: "#843FE5",
            light: "#E1E2FF",
            100: "#F0F0FF",
          },
          gray: {
            DEFAULT: "#4A4A4A",
            100: "#606060",
            200: "#CDCDCD",
            300: "#f9f9f9",
            400: "#CACACA",
            500: "#717171",
            600: "#d9d9d9",
          },
        },
      },
      fontSize: {
        40: "40px",
      },
      spacing: {
        "30px": "30px",
        "50px": "50px",
        "60px": "60px",
      },
      borderRadius: {
        10: "10px",
        20: "20px",
        30: "30px",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("preline/plugin")],
};
