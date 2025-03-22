/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "playfair": ["PlayFairDisplay", "serif"],
        "logo": ["Miama","sans-serif"]
      },
      colors: {
        "dark": "#222222",
        "green": "#212806",
        "golden": "#B28D5B",
        "beige": "#F5EEE6",
        "milky": "#FCF8F3"
      }
    },
  },
  plugins: [],
}
