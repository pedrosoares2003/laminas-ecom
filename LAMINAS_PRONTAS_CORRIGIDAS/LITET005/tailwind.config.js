/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat']
      },
      backgroundImage: {
        'heart': "url('../src/assets/images/banners/Heart.svg')",
        'heart-mob': "url('../src/assets/images/banners/Heart-mob.svg')",
      },
      colors: {
        primary: '#F04E6E',
        secundary: '#FFEFDD',
        text1: '#726DA3',
        text2: '#F8E620'
      },
      screens: {
        'screen1': '769px',
        'screen2': '1198px',
      },
      lineHeight: {
        '100': '100%',
      }
    }
  },
  plugins: []
}
