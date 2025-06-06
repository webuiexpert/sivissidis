/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        dark: '#181818',
        primary: '#1A7563',
        secondory: '#ffae00',
        blackish: '#000000', // '#0000' is invalid — assuming you meant black
        white: '#ffffff',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
