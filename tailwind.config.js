/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'setup-bright': '#FFE000',
        'setup-normal': '#DDC726',
        'setup-dark': '#DBC100',
      },
  },
  plugins: [],
}
}