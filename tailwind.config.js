/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Josefin Sans"', "sans-serif"],
        body: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bhagat: {
          primary: "#6f7138",
          secondary: "#17677c",
          accent: "#a3a45a",
          neutral: "#08212c",
          "base-100": "#f7faf9",
          "base-200": "#edf4f3",
          "base-300": "#cbdedc",
          "base-content": "#142832",
          info: "#26748a",
        },
      },
    ],
  },
};
