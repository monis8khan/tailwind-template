/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen:{
      sm: '460px',
      md: '760px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      'primary-col': '#1fb6ff',
      'secondary-col': '#7e5bef',
      'tertiary-col': '#ff49db',
      'white': '#ffffff',
      'transparent':  'hsla(120, 60%, 70%, 0.0)',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}
