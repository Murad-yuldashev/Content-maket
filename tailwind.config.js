/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: {
        Default: '#000',
        Background: '#101010',
        DarkMode: '#373737',
      },
      red: {
        redLight: '#D14141'
      },
      yellow: {
        btnYellow: 'rgb(249 115 22)'
      },
      gray: {
        lightGray: '#B5B5B5'
      },
      green: {
        lightGreen: '#4CC67F'
      },
      blue: {
        blurBlue: '#217BFB',
      },
      white: '#fff',
    },
    screens: {
      sm: '448px',
      md: '768px',
      lg: '1024px'
    },
    fontSize: {
      base: ['1rem', {lineHeight: '140%'}],
      xl: ['1.25rem', {lineHeight: '140%', fontWeight: '400',}],
      '4xl': ['2.25rem', {lineHeight: '140%'}],
      '5xl': ['3rem', {lineHeight: '140%'}],
      '6xl': ['3.75rem', {lineHeight: '140%'}],
    },
    fontFamily: {
      raleway: [ 'Raleway', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

