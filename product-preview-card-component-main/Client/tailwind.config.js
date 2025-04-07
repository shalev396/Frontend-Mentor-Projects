/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        xs: "400px",
      },
      colors: {
        "dark-cyan": "hsl(158, 36%, 37%)",
        "click-dark-cyan": "#1f463a",
        cream: "hsl(30, 38%, 92%)",
        "very-dark-blue": "hsl(212, 21%, 14%)",
        "dark-grayish-blue": "hsl(228, 12%, 48%)",
        white: "hsl(0, 0%, 100%)",
      },
      letterSpacing: {
        spacex: "0.25em",
      },
      fontSize: {
        sizex: "14px",
      },
      spacing: {
        img: "22rem",
        imgs: "44rem",
        himg: "33rem",
      },
    },
  },
  plugins: [],
};
