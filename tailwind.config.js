const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff7662',
        purple: '#6c5ecf',
        blue: '#065fd4',
        yellow: '#f9d71c',
        gray: {
          400: '#9898ad',
          500: '#6b6b7b',
          600: '#353340',
          800: '#353340'
        }
      },
      boxShadow: {
        default: '0 3px 12px rgba(0, 0, 0, 0.03)',
        md: '0 3px 12px rgba(0, 0, 0, 0.1)'
      },
      keyframes: {
        fade: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        scaleIn: {
          '0%' : {
            opacity: 0,
            transform: 'scale(0.9)'
          },
          '50%' : {
            opacity: 0.3,
          },
          '100%' : {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      },
      animation: {
        fade: 'fade .5s ease-in-out',
        scaleIn: 'scaleIn .35s ease-in-out'
      },
      fontSize: {
        xs: '.9rem',
        sm: '1rem',
        tiny: '1.2rem',
        base: '1.4rem',
        lg: '1.5rem',
        xl: '1.6rem'
      },
      borderColor: {
        gl: '#c6c6c6',
        blue: '#065fd4'
      }
    },
  },
  plugins: [
    plugin(({addComponents}) => {
      addComponents({
        '.shadow-block': {
          display: 'block',
          boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
          animation: 'scaleIn .35s ease-in-out',
          backgroundColor: '#272532'
        }
      })
    })
  ],
}
