const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      yellow: colors.amber,
      white: '#fff',
      'purple-light': '#fcfaff',
      purple: '#639',
      'purple-dark': '#362066',
      'alkemy-light-blue': '#29AAE1',
      'alkemy-orange': '#FFC444',
      'alkemy-dark-blue': '#4042E2',
    },
    fontFamily: {
      sans: ['ManropeVariable', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      body: ['1.125rem', 1.5],
      h1: ['2.25rem', 1.5],
      header: ['2.5rem', 1.5],
      'body-mobile': ['1rem', 1.5],
      'h1-mobile': ['1.5rem', 1.5],
      'header-mobile': ['1.5rem', 1.5],
    },
    extend: {
      outline: theme => ({
        DEFAULT: [`3px solid ${theme('colors.purple-light')}`, '2px'],
      }),
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
    },
  },
  variants: {
    extend: {},
  },
}
