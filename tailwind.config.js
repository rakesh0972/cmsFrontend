/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    colors: {
      ...colors,
      primary: {
        700: '#03174c',
        100: '#cdd1db',
      },
      secondary: {
        700: '#EF5A5A',
        300: '#FC7D7D',
        100: '#FFDADA',
      },
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      tiny: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    spacing: {
      none: 0,
      xs: '8px',
      sm: '16px',
      md: '24px',
      lg: '32px',
      xl: '48px',
      '2xl': '64px',
      '3xl': '72px',
      '4xl': '84px',
      '5xl': '96px',
      '6xl': '108px',
      '7xl': '124px',
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',

      mobile: '320px',
      tablet: '768px',
      laptop: '1024px',

      // => @media (min-width: 1536px) { ... }
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
} 