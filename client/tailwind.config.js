/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#383838'
      },
      margin: {
        'mbe': '16px'
      }
    },
  },
  plugins: [],
}