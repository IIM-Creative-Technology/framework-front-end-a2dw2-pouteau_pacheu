/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        txt_black: '#0A0909',
        txt_white: '#FFFFFF',
        txt_purple: '#8D4ED8',
        txt_grey: 'rgba(0, 0, 0, 0.5)',
        txt_orange: '#FF6A60',
        bg_grey: 'rgba(255, 255, 255, 0.3)',
        bg_grey2: 'rgba(255, 255, 255, 0.18)',
        bg_ligth_grey: '#F3EDFB',
        bg_ligth_purple: '#F3EDFB',
        bg_gradient: 'linear-gradient(90deg, #80D4F8 0%, #8D4ED8 31.13%, #FF6A60 67.49%, #FC1616 100%)',
      }
    },
  },
  plugins: [],
}