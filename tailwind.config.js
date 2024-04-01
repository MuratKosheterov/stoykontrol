/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-blue': '#007bff',
        'black2': '#212B31',
      },
      backgroundImage: {
        'hero-bg': "url('../images/banner_02.png')",
      }
    },
  },
  plugins: [],
}