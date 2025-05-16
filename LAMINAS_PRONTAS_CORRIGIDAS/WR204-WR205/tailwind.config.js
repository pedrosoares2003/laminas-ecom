/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html'],
  theme: {
    extend: {
      fontFamily: {
        elza: ['Elza', 'sans-serif']
      },
      fontSize: {
        title: '46px',
        'title-mob': '32px',
        t1: '24px'
      },
      borderRadius: {
        33: '33px'
      }
    }
  },
  plugins: []
}
