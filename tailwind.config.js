/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'inactive': '#13678a',
        'active': '#45c4b0'
      },
    }
  },
  plugins: [],
}
