const chroma = require('chroma-js')

const { mix } = chroma

// Convert a percentage to an alpha hex value
const alphaHex = ratio =>
  (Math.round(ratio * 255) + 0x10000)
    .toString(16)
    .substr(-2)
    .toUpperCase()

module.exports.alpha = (color, ratio) => color + alphaHex(ratio)
module.exports.darken = (color, ratio) => chroma(color).darken(ratio)
module.exports.shade = (color, ratio) => mix(color, '#000', ratio)
module.exports.tint = (color, ratio) => mix(color, '#fff', ratio)
