/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '4px 4px 4px 4px rgba( 99, 91, 255, .1 )',
      },
      keyframes: {
        slide: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          }
        }
      },
      animation: {
        slide: 'slide 20s infinite linear',
      },
      colors: {
        'blue-light': '#635BFF0D',
        'blue-mid': '#635BFF',
        'blue-dark': '#1C1953',
        'blue-dark-opaque': 'rgb(28, 25, 83, .8)',
        'blue-opaque': 'rgba( 99, 91, 255, .1 )', 
        'opaque-violett': 'rgba( 28, 25, 83, .7)',
        'opaque': 'rgba(0, 0, 0, .5)',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      screens: {
        '2xs': '280px',
        'xs': '480px',
        'sm': '767px',
        'md': '1025px',
        'lg': '1280px',
        'xl': '1460px',
        '2xl': '1921px',
        '3xl': '2310px',
      },
      content: {
        logo: "url('./assets/logo.png)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

