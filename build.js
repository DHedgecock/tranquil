const { writeFile, readFileSync } = require('fs')
const yaml = require('js-yaml')

const load = path => yaml.safeLoad(readFileSync(path, 'utf-8'))

// Load the base theme definition
let theme = load('theme/base.yaml')

// Add Editor theming rules
Object.assign(
  theme.colors,
  load('theme/workbench.yaml'),
  load('theme/terminal.yaml')
)

// Add language highlighting rules
theme.tokenColors = [
  ...theme.tokenColors,
  ...load('theme/css.yaml'),
  ...load('theme/docker.yaml'),
  ...load('theme/javascript.yaml'),
  ...load('theme/jsdoc.yaml'),
  ...load('theme/markdown.yaml'),
  ...load('theme/regex.yaml'),
  ...load('theme/template.yaml')
]

// Color Variables
const colorVars = yaml.safeLoad(readFileSync('theme/color-vars.yaml', 'utf-8'))

// Stringify all of the combined theme styles so we can run string regexes on it to
// replace color variables with color values
theme = JSON.stringify(theme, null, 2)

Object.keys(colorVars).forEach(color => {
  // Include a " prevents blue from matching in light-blue or blue-sky
  theme = theme.replace(new RegExp(`"\\${color}"`, 'g'), `"${colorVars[color]}"`)
})

// Base file has been extended with additional theme styles and color variables have
// been replaced with Panda theme values. Write to /dist for consumption.
writeFile('dist/Tranquil.json', theme, err => {
  if (err) console.warn(err)
  console.log('Build finished')
})
