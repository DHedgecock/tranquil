// Reds
const APPLE = '#e2366b'
const SALMON = '#FF9AC1'
// Magenta
const PEPTO = '#FF75B5'
const PLUM = '#8c5685'
// Yellows
const POLLEN = '#F0DFAF'
const PEACH = '#FFCC95'
// Oranges (not in terminal)
const BANANA = '#FFCA58'
// Greens
const ICE = '#a6dcd0'
const AQUAMARINE = '#2AA198'
// Cyans
const ELECTRIC_LEAF = '#3ed1bb'
const ARCTIC = '#93E0E3'
// Blues
const NEON_ICE = '#60cbdb'
const OCEAN = '#3A7B91'

// ---------------------------------------------------------------------------
// Synatx token color variables
// ---------------------------------------------------------------------------

const $comment = '#ab9bab'
const $constant = '#FFCA58'
const $entity = '#F0DFAF'
const $invalid = '#ff427b'
const $keyword = '#FF75B5'
const $markup = '#d4cbcc'
const $storage = '#FFB86C'
const $string = '#a6dcd0'
const $support = '#FFCC95'
const $variable = '#f0f0f0'
// MARKUP
const $header = '#f5ebf7d9'

//
// Ungrouped colors - DEPRECATED

// The color values used in the theme, these are all used in syntax tokens and should
// be refactored to token type exports!
const $red = SALMON
const $boldRed = APPLE
const $magenta = PEPTO
const $boldMagenta = PLUM
const $yellow = POLLEN
const $boldYellow = BANANA
const $orange = PEACH
const $blue = NEON_ICE
const $boldBlue = OCEAN
const $cyan = ARCTIC
const $boldCyan = ELECTRIC_LEAF
const $green = ICE

module.exports.tokens = {
  // SYNTAX TOKENS
  $comment,
  $constant,
  $entity,
  $invalid,
  $keyword,
  $markup,
  $storage,
  $string,
  $support,
  $variable,
  $header,
  // 🚧 UNTYPED SYNTAX TOKENS
  $red,
  $boldRed,
  $magenta,
  $boldMagenta,
  $yellow,
  $boldYellow,
  $orange,
  $blue,
  $boldBlue,
  $cyan,
  $boldCyan,
  $green
}

// ========================================================
// Terminal
// ========================================================

const CURSOR = '#FF4B82'
const TERMINAL_BG = '#1c242c'
const TERMINAL_FG = '#f0f0f0'

// ℹ️ Terminal: 'bold' colors are based on terminal emulators and are 'brighter'
// versions of that color
module.exports.terminal = {
  'terminalCursor.background': TERMINAL_FG,
  'terminalCursor.foreground': CURSOR,
  'terminal.background': TERMINAL_BG,
  'terminal.foreground': TERMINAL_FG,
  'terminal.ansiBlack': TERMINAL_FG,
  'terminal.ansiBlue': OCEAN,
  'terminal.ansiCyan': ELECTRIC_LEAF, // ampersand, file path and arrow
  'terminal.ansiGreen': ICE, // branch name
  'terminal.ansiMagenta': PEPTO, // name
  'terminal.ansiRed': APPLE,
  'terminal.ansiWhite': TERMINAL_FG,
  'terminal.ansiYellow': PEACH, // computer name
  'terminal.ansiBrightBlack': '#504a4f',
  'terminal.ansiBrightBlue': NEON_ICE,
  'terminal.ansiBrightCyan': ARCTIC,
  'terminal.ansiBrightGreen': AQUAMARINE,
  'terminal.ansiBrightMagenta': PEPTO,
  'terminal.ansiBrightRed': SALMON,
  'terminal.ansiBrightWhite': '#f5ebf7d9',
  'terminal.ansiBrightYellow': POLLEN
}
