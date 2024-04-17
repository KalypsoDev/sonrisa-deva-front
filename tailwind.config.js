/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#0082CA',
        backgroundBlue: '#CCE4F0',
        darkBlue: '#044677',
        primaryLila: '#9C90B7',
        greenPen: '#3DB39E',
        redBin: '#BA0000',
        mustardBox: '#DD8F19',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

