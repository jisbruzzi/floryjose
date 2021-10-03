const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex:{
        "-10":"-10"
      },
      colors:{
        piel:"#EEE7DE",
        madera:"#554133",
        tomate:"#C89670",
        oceano:"#57717F",
      },
      screens: {
        'print': {'raw': 'print'},
        'notprint': {'raw': 'not print'},
      },
      minHeight:{
        "almost-screen":"60vh"
      },
      fontFamily:{
        sanchez:['Sanchez', ...defaultTheme.fontFamily.serif],
        merriweather:['Merriweather', ...defaultTheme.fontFamily.serif],
        montserrat:['Montserrat', ...defaultTheme.fontFamily.sans],
        baskerville:['Libre Baskerville', ...defaultTheme.fontFamily.sans],
        pinyon:['Pinyon Script', ...defaultTheme.fontFamily.sans],
      },
      dropShadow:{
        strong:	"0 0 10px black"
      },
      typography: (theme)=>({
        white: {
          css: {
            color: '#FFFFFF',
            'strong, h1, h2, h3, h4, h5': { color: theme('colors.white', defaultTheme.colors.white) },
            'a': { color: theme('colors.gray.100', defaultTheme.colors.gray[100]) },
          },
        },
        compact: {
          css: {
            'p, li, h1, h2, h3, h4, h5': { marginBottom:"0.2em", marginTop: "0.4em" },
            h1: { fontSize:"1.5em"},
            h2: { fontSize:"1.25em", marginLeft:"1rem"},
            li: { marginLeft:"2rem"},
            p: { marginLeft:"2rem"},
          },
        },
        "super-compact": {
          css: {
            'p, li, h1, h2, h3, h4, h5, ul': { marginBottom:"0.1em", marginTop: "0.1em", lineHeight:"1.2em"},
            h1: { fontSize:"1.5em"},
            h2: { fontSize:"1.25em", marginLeft:"1rem"},
            li: { marginLeft:"2rem"},
            p: { marginLeft:"2rem"},
          },
        },
        weaker: {
          css: {
            'strong, h1, h2, h3, h4, h5': { color: theme('colors.gray.600', defaultTheme.colors.gray[600]) },
          },
        },
        bluedots:{
          css:{
            'ul > li::before':{
              backgroundColor: theme('colors.blue.900', defaultTheme.colors.blue[900]),
              borderColor: theme('colors.blue.900', defaultTheme.colors.blue[900]),
              borderWidth:"0.2em"
            }
          }
        }
      }),
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
