module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
    // defaultLineHeights: true,
    // standardFontWeights: true
  },
  purge: [],
  theme: {
    extend: {
      colors: {
      'mygray': '#6e6c6c',
      'myDarkGray': "#4f4f4f",
      "fadedBlack": "#303030"
      },
      boxShadow: {
        xs: '0 1px 1px 1px rgba(0, 0, 0, 0.15)',
      }
    }
  },
  variants: {},
  plugins: []
}
