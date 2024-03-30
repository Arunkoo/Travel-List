/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rampart: ["Rampart One", "sans-serif"],
        RubikPuddle: ["Rubik Puddles", "system-ui"],
        Revolutiom: ["Protest Revolution", "sans-serif"],
      },
      colors: {
        Yellow: "#FFF67E",
        "Green-Light": "#BFEA7C",
        "Green-medium": "#9BCF53",
        "Green-Dark": "#416D19",
      },
    },
  },
  plugins: [],
};
