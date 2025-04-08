/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#d4d0cf',
        customGray: '#cfdce7',
        customWhite: '#f2f6f7',
        customHouse: '#d0dee7',
        mainBlue: '#1A264D',
        mainBrown: '#222222',
        newBlue: '#34415D'
      },
    },
  },
  plugins: [],
}

