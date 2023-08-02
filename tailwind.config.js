/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      black: {
        Default: '#000',
        Background: '#101010',
        DarkMode: '#373737',
        blackBorder: '#1F1F1F',
        lightBlack: '#1C1C1C',
        lightBlackText: '#9B9B9B',
        grayDark: '#161616',
      },
      red: {
        redLight: '#D14141',
        purpl: '#F8C4DA',
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
        lightBlue: '#93C6E2',
      },
      fiolete: '#825EFC',
      white: '#fff',
    },
    screens: {
      sm: '448px',
      md: '768px',
      lg: '1024px'
    },
    fontSize: {
      xs: ['0.75rem', {lineHeight: '140%'}],
      sm: ['0.875rem', {lineHeight: '140%'}],
      base: ['1rem', {lineHeight: '140%'}],
      lg: ['1.125rem', {lineHeight: '140%'}],
      xl: ['1.25rem', {lineHeight: '140%', fontWeight: '400',}],
      '2xl': ['1.5rem', {lineHeight: '140%'}],
      '3xl': ['2rem', {lineHeight: '140%'}],
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

