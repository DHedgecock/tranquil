const { writeFile, readFileSync } = require('fs')
const yaml = require('js-yaml')

const load = path => yaml.safeLoad(readFileSync(path, 'utf-8'))

// Load syntax theme color variables
const { tokens } = require('./theme/syntax-theme')

// Load theme color variables
const {
  // Defaults
  text,
  base,
  contrast,
  // Shared elements
  buttons,
  dropdowns,
  inputs,
  scrollbar,
  badges,
  progressBars,
  listsAndTrees,
  // Git elements
  git,
  diff,
  merge,
  // Editor elements
  editor,
  editorOverviewRuler,
  editorGroupsTabs,
  editorGutter,
  editorWidgets,
  editorStatus,
  // Bars
  titleBar,
  sideBar,
  activityBar,
  statusBar,
  // Misc elements
  panel,
  terminal,
  extensions,
  debug
} = require('./theme/colors')

// Create the base theme definition
// ---------------------------------------------------------------------------

let theme = {
  $schema: 'vscode://schemas/color-theme',
  author: 'Dan Hedgecock',
  name: 'Tranquil',
  colorSpaceName: 'sRGB',
  semanticClass: 'theme.dark.tranquil',
  // Set of editor theming values
  colors: {
    // Editor theme styles
    ...contrast,
    ...text,
    ...base,
    ...buttons,
    ...dropdowns,
    ...inputs,
    ...badges,
    ...progressBars,
    ...listsAndTrees,
    ...git,
    ...diff,
    ...merge,
    ...editor,
    ...editorOverviewRuler,
    ...editorGutter,
    ...editorGroupsTabs,
    ...editorWidgets,
    ...editorStatus,
    ...scrollbar,
    ...titleBar,
    ...sideBar,
    ...activityBar,
    ...statusBar,
    ...panel,
    ...terminal,
    ...extensions,
    ...debug
  },
  // List of syntax tokens theming editor language contents
  tokenColors: [
    ...load('theme/syntax-tokens.yaml'),
    ...load('theme/css.yaml'),
    ...load('theme/docker.yaml'),
    ...load('theme/javascript.yaml'),
    ...load('theme/jsdoc.yaml'),
    ...load('theme/markdown.yaml'),
    ...load('theme/regex.yaml'),
    ...load('theme/template.yaml')
  ]
}

// Convert color variables to string vlaues
// ---------------------------------------------------------------------------

// Delete any value that is null, as a convention this lets us track that all
// theme variables are being set
Object.keys(theme.colors).forEach(color => {
  if (theme.colors[color] === null) delete theme.colors[color]
})

// Stringify all of the combined theme styles so we can run string regexes on it to
// replace color variables with color values
theme = JSON.stringify(theme, null, 2)

Object.keys(tokens).forEach(color => {
  // Include a " prevents blue from matching in light-blue or blue-sky
  theme = theme.replace(new RegExp(`"\\${color}"`, 'g'), `"${tokens[color]}"`)
})

// Base file has been extended with additional theme styles and color variables have
// been replaced with Panda theme values. Write to /dist for consumption.
writeFile('dist/Tranquil.json', theme, err => {
  /* eslint-disable no-console */
  if (err) console.warn(err)
  console.log('Build finished')
  /* eslint-enable no-console */
})
