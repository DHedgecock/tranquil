/**
 * Tranquil Color Variables
 * _All color variables should be set here_
 *
 * Theming with color variables should be handled by element groups. For example the
 * background value shouldn't be set individually for each option, instead theme
 * elements like 'Wells' should be identified, the variables for those elements
 * assigned here, and then the element theming variables should be used throughout
 * the theme, eg: `$wellBackground`.
 *
 * Ideally it should be possible to see the overall theming for everything in this
 * file and only this file would be updated when changing theme color values.
 *
 * Transparent Hex:
 * https://stackoverflow.com/questions/23201134/transparent-argb-hex-value
 */

// Theme Colors
// ---------------------------------------------------------------------------

const LAVENDER = '#9d58b1'
const PLUM = '#8c5685'
const ANGRY = '#FF2C6D'
const APPLE = '#e2366b'
const SALMON = '#FF9AC1'
const PEPTO = '#FF75B5'

const POLLEN = '#F0DFAF'
const BANANA = '#FFCA58'
const MELON = '#FFC300'

const PEACH = '#FFCC95'
const CARROT = '#FFB86C'

const LIME = '#94D533'
const ICE = '#a6dcd0'
const ELECTRIC_LEAF = '#3ed1bb'
const AQUAMARINE = '#2AA198'
const ARCTIC = '#93E0E3'
const SKY = '#58BED8'
const NEON_ICE = '#60cbdb'

const LAPIS = '#2980B9'

const ULTRA_RED = '#FF4B82'

// Grayscale

// Lightest grays used for font color's of elements
const GRAY_100 = '#f8f7f8'
const GRAY_200 = '#dbd9db'
const GRAY_300 = '#b7b3b6'

const GRAY_500 = '#474949'
const GRAY_600 = '#2b3d40'

// Darkest grays used for background's of elements
const GRAY_700 = '#172b2e'
const GRAY_800 = '#0d2225'
const GRAY_900 = '#061b1e'

// Utility colors

const $transparent = '#00000000'
const $translucent = '#373B4199'

// Theme elements
// ---------------------------------------------------------------------------

//
// Backgrounds
//

const $bgEditor = GRAY_700
const $bgWell = GRAY_800
const $bgTitle = GRAY_900

//
// Foreground + fonts
//

const $fgPrimary = GRAY_100
const $fgHeader = GRAY_200
const $fgTitle = GRAY_300

const $fgContrast = '#b978a4'
// Used with text like code complexity and git lens
const $fgTranslucent = '#BCAAFE60'

//
// Components
//

const $border = GRAY_600 // Regular border for use creating containers
const $themeBorder = NEON_ICE // Themed border to add visual change
const $cursor = ULTRA_RED
const $lineHighlight = '#FC54FC1A'

//
// Statuses
//

const $danger = ANGRY
const $warning = MELON
const $info = ARCTIC
const $success = LIME

//
// Action + decorations
//

// Elements that are the targets of actions, or provide decorations that provide
// feedback on actions taken
const $actionBackground = '#78bcd3'
const $actionHoverBackground = '#3A7B91'
const $actionForeground = $fgPrimary

//
// Inputs
//
const $inputBorder = '#b978a4'

//
// Scrollbars
//

// Scrollbars should use transparent colors so that mini-map is visible underneath
const $scrollbar = $translucent
const $scrollbarHover = '#FC54FC4D'

// The scrolled indicator is shown in elements that have been scrolled, theme uses a
// very subtle color mix
const $scrollbarScrolledIndicator = '#FC54FC33'

//
// Highlighting and selections
//

const $selection = '#93E0E360'

//
// Token Variables
//

// ℹ️ All token variables should be organized by token type and declared here.
const $comment = $fgTitle
const $constant = BANANA
const $entity = POLLEN
const $invalid = ANGRY
const $keyword = PEPTO
const $markup = $fgPrimary
const $storage = CARROT
const $string = ICE
const $support = PEACH
const $variable = $fgHeader

//
// Git
//

const $gitAdded = $success
const $gitModified = $warning
const $gitRemoved = $danger
const $gitConflicted = $danger
const $gitIgnored = '#999498'

const $diffGreen = '#94d53318'
const $diffRed = '#ff2c7218'

const $mergeCurrentHeader = '#703268'
const $mergeCurrentContent = '#8c568648'
const $mergeIncomingHeader = '#1E4751'
const $mergeIncomingContent = '#5c9fcb33'

//
// Status bar
//

const $statusBarBg = $bgEditor
const $statusBarFg = $fgPrimary
const $statusBarBorder = $border
// 😢 Unfortunately, you can only style the background of status bar items, it would
// nice to instead style the foreground, but until then, use XXX as color.
const $statusBarActiveItemBg = NEON_ICE

const $statusBarDebuggingBg = '#b978a4'
const $statusBarNoFolderBg = GRAY_800

//
// Terminal
//

// ℹ️ Terminal: 'bold' colors are based on terminal emulators and are 'brighter'
// versions of that color
const $red = SALMON
const $boldRed = APPLE
const $magenta = PEPTO
const $boldMagenta = PEPTO
const $violet = LAVENDER
const $boldViolet = PLUM
const $yellow = POLLEN
const $boldYellow = BANANA
const $orange = PEACH
const $boldOrange = CARROT
const $blue = SKY
const $boldBlue = LAPIS
const $cyan = ARCTIC
const $boldCyan = ELECTRIC_LEAF
const $green = ICE
const $boldGreen = AQUAMARINE
const $boldBlack = GRAY_500
const $boldWhite = GRAY_300

// Element variable exports
// ---------------------------------------------------------------------------

module.exports = {
  // Background + foreground
  $bgEditor,
  $bgWell,
  $bgTitle,
  $fgPrimary,
  $fgHeader,
  $fgTitle,
  $fgContrast,
  $fgTranslucent,
  // Syntax tokens
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
  // Editor elements
  $border,
  $themeBorder,
  $cursor,
  $selection,
  $lineHighlight,

  // Action + decoration
  $actionForeground,
  $actionBackground,
  $actionHoverBackground,
  // Inputs
  $inputBorder,
  // Scrollbars
  $scrollbar,
  $scrollbarHover,
  $scrollbarScrolledIndicator,
  // Status
  $danger,
  $warning,
  $info,
  // Git
  $gitAdded,
  $gitRemoved,
  $gitModified,
  $gitIgnored,
  $gitConflicted,
  $diffGreen,
  $diffRed,
  $mergeCurrentHeader,
  $mergeCurrentContent,
  $mergeIncomingHeader,
  $mergeIncomingContent,
  // Terminal
  $red,
  $boldRed,
  $magenta,
  $boldMagenta,
  $violet,
  $boldViolet,
  $yellow,
  $boldYellow,
  $orange,
  $boldOrange,
  $blue,
  $boldBlue,
  $cyan,
  $boldCyan,
  $green,
  $boldGreen,
  $boldBlack,
  $boldWhite,
  // Status bar
  $statusBarBg,
  $statusBarFg,
  $statusBarBorder,
  $statusBarActiveItemBg,
  $statusBarDebuggingBg,
  $statusBarNoFolderBg,
  // Utility
  $transparent
}
