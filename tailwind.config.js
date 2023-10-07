/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      backgroundColor: {
        'darkRed': 'rgba(255, 0, 0)',
        'custom2': 'rgba(255, 188, 71)'
      },
      textColor:{
        'darkRed': 'rgba(255, 0, 0)',
      }
    },
  },
  plugins: [],
}
