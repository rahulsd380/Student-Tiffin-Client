/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(180deg, #DE3C4B 0%, #B43642 100%)',
      },
      boxShadow: {
        'custom-shadow': '0px 12px 36px 0px rgba(218, 59, 74, 0.25)',
      },
      borderColor: {
        'white-opacity-25': 'rgba(255, 255, 255, 0.25)',
      },
    },
  },
  plugins: [],
}