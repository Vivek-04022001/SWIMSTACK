/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
        alata: ["Alata"],
      },
      letterSpacing: {
        widest: ".5em",
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
    fontFamily:{
      'about': ['Pt Serif'],
      'about-text':['Oswald']
    }
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#fff",
          secondary: "#df9843",
          accent: "#05293f",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
