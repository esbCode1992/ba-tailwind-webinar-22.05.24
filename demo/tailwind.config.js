/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ba-white':'#F8F8F8',
        'ba-green':'#70AF69',
        'ba-black':'#1F1F1F'
      },
      fontFamily:{
        'ba-font': ["Poppins", "sans-serif"]
      },
      backgroundImage:{
        'ba-hero': "url('./assets/img/hero.jpg')"
      }
    },
  },
  plugins: [],
}

