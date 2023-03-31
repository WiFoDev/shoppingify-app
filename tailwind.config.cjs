// eslint-disable-next-line @typescript-eslint/no-var-requires
const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0f0e17",
        headline: "#fffffe",
        parragraf: "#a7a9be",
        "button-text": "#fffffe",
        primary: "#ff8906",
        secondary: "#FFF0DE",
        tertiary: "#80485B",
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #ff8906 7.21%, #f25f4c 45.05%, #e53170 78.07%)",
      }),
      fontFamily: {
        sans: ["var(--font-quicksand)", ...fontFamily.sans],
      },
      content: {
        example: "url('../assets/brush.png')",
      },
      keyframes: {
        slideRight: {
          "0%": {
            transform: "translate3d(100%, 0, 0)",
          },

          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        "slide-in-right": "slideRight 0.2s ease-in",
        "slide-in-left": "slideLeft 0.2s ease-in",
      },
      boxShadow: {
        outer: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        top: "0px -2px 2px -1px rgba(0,0,0,0.3)",
        right: "2px 0px 2px -1px rgba(0,0,0,0.3)",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill,minmax(18rem,1fr))",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
      standar: "90rem",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["bumblebee", "halloween"],
  },
};

module.exports = config;
