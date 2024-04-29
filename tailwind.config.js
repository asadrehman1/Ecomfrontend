/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      body:["Manrope","sans-serif"],
      marquee:["Dancing Script","cursive"],
      price:["Playfair Display","serif"]
    }
  },
  plugins: [],
}