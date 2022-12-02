/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        Mulish: ['"Mulish"', "sans-serif"],
      },
      colors: {
        mainBg1: "#F4F7FF",
        mainBg2: "#FFEDED",
        primary: "#A30062",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
