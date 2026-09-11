/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: ["selector", '[data-theme="night"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ["Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        bhagat: {
          primary: "#b86522",
          secondary: "#17677c",
          accent: "#dc9630",
          neutral: "#08212c",
          "base-100": "#f7faf9",
          "base-200": "#edf4f3",
          "base-300": "#cbdedc",
          "base-content": "#142832",
          info: "#26748a",
        },
      },
      {
        night: {
          primary: "#f2a23a",
          secondary: "#124e63",
          accent: "#5cc7d9",
          neutral: "#061720",
          "base-100": "#0b202b",
          "base-200": "#102a35",
          "base-300": "#1e404c",
          "base-content": "#edf6f7",
          info: "#75d4e3",
        },
      },
    ],
  },
};
