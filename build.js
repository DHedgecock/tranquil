const { writeFile } = require('fs')

// Load theme color variables
const colors = require('./theme/colors')

// Load syntax tokens
const tokens = require('./theme/syntax-tokens')

// Create the base theme definition
// ---------------------------------------------------------------------------

let theme = {
  $schema: 'vscode://schemas/color-theme',
  author: 'Dan Hedgecock',
  name: 'Tranquil',
  colorSpaceName: 'sRGB',
  semanticClass: 'theme.dark.tranquil',
  // Editor theme styles
  colors,
  tokenColors: [...tokens],
}

// Convert color variables to string vlaues
// ---------------------------------------------------------------------------

// Delete any value that is null (as a convention this lets us track that all
// theme variables are being set by assigning values to all of them)
Object.keys(theme.colors).forEach(color => {
  if (theme.colors[color] === null) delete theme.colors[color]
})

// Stringify all of the combined theme styles so we can run string regexes on it to
// replace color variables with color values
theme = JSON.stringify(theme, null, 2)

// Base file has been extended with additional theme styles and color variables have
// been replaced with Panda theme values. Write to /dist for consumption.
writeFile('dist/Tranquil.json', theme, err => {
  /* eslint-disable no-console */
  if (err) console.warn(err)
  console.log('Build finished')
  /* eslint-enable no-console */
})
