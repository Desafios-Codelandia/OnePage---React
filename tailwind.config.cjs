/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botaoAzul:"#6C63FF",
        heroColor:"#D7D4FF",
        white_200:"#F9F9F9",
        formColor:"#D7D4FF",
      },
    },
  },
  plugins: [],
}