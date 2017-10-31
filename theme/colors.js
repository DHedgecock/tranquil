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
 */

// Base color definitions, use in this file to create assign element theming
const VALENTINE = '#FF4B82'
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
const ELECTRIC_AQUA = '#19f9d8'
const ELECTRIC_LEAF = '#3ed1bb'
const AQUAMARINE = '#2AA198'
const ARCTIC = '#93E0E3'
const SKY = '#58BED8'
const LAPIS = '#2980B9'
const STEEL = '#506070' // Use for providing subtle background contrast
// Aluminum is a lighter blue gray used for headers and git ignored files in the
// side bar, it's light enought that it's a readable text
const ALUMINUM = '#7D8DA4'

const LAVENDER = '#BCAAFE'
const PLUM = '#A569BD'

// Primary grays are shade based on primary color: '#93E0E3'
const $black = '#272822'
const $gray100 = '#242626'
const $gray200 = '#2e3030'
const $gray300 = '#474949'
const $gray400 = '#5d5f5f'
const $gray500 = '#7b7d7d'
const $gray600 = '#b4b5b5'
const $gray700 = '#c3c4c4'
const $gray800 = '#d7d8d8'
const $gray900 = '#e7e8e8'
const $white = '#eeeeee'

// Token Variables
// ---------------------------------------------------------------------------
// TODO: Any token variables should be organized by token type and declared here.
const $comment = $gray500
const $constant = BANANA
const $entity = POLLEN
const $invalid = ANGRY
const $keyword = PEPTO
const $markup = $gray900
const $storage = CARROT
const $string = ELECTRIC_AQUA
const $support = PEACH
const $variable = $gray800

// VSCode Editor Variables
// ---------------------------------------------------------------------------
// Transparent Hex: https://stackoverflow.com/questions/23201134/transparent-argb-hex-value
// Primary and accent colors,
const $primary = ARCTIC
const $contrast = AQUAMARINE
const $primaryBorder = STEEL

// Font colors
const $foreground = $gray900
const $inverseForeground = '#333535'

// Two backgrounds, one for the editor and one for sidebar/panels/status bar
// Two backgrounds are used to provide contrast between interactive features
// 'well' is the darker background for sidebar/status bar, etc
const $wellBackground = '#101c29'
const $wellForeground = $gray800 // One step up from $foreground
const $wellContrastHeaderForeground = ALUMINUM
const $wellContrastBackground = '#0a121b'
const $wellContrastForeground = $gray400
// 'editor' is the lighter background for the editor
const $editorBackground = '#1a2937'
const $editorForeground = $gray900
const $editorContrastBackground = '#35405b' // Contrasting gray for backgrounds inside editor
const $editorContrastForeground = $gray500

// General
const $cursor = VALENTINE
const $violetFade = '#BCAAFE60' // TODO rename
const $selection = '#93E0E360'

// Transparencies
const $shadow = '#b4b5b51a'
const $transparent = '#00000000'
const $translucent = '#373B4199'

// Linter Colors
const $error = ANGRY
const $warning = MELON
const $info = ARCTIC
// Git Colors
const $gitAdded = LIME
const $gitRemoved = ANGRY
const $gitModified = MELON
const $gitIgnored = ALUMINUM
const $gitConflicted = ANGRY
const $diffGreen = '#3ed1bb66'
const $diffRed = '#D3368266'
const $mergeCurrentHeader = '#BCAAFEB3' // purple with alpha
const $mergeCurrentContent = '#BCAAFE4D' // same purple less alpha
const $mergeIncomingHeader = '#67afe5b3' // orange with alpha
const $mergeIncomingContent = '#67afe54d' // same orange less alpha

// Terminal
// ---------------------------------------------------------------------------

// Terminal: 'bold' colors are based on terminal emulators and are 'brighter'
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
const $green = ELECTRIC_AQUA
const $boldGreen = AQUAMARINE

module.exports = {
  // Grays TODO: refactor to elements
  $black,
  $gray300,
  $gray500,
  $gray600,
  $gray700,
  // Syntax Tokens
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
  // Editor Elements
  $primary,
  $contrast,
  $primaryBorder,
  $foreground,
  $inverseForeground,
  $wellBackground,
  $wellForeground,
  $wellContrastHeaderForeground,
  $editorBackground,
  $editorForeground,
  $editorContrastBackground,
  $editorContrastForeground,
  $cursor,
  $violetFade,
  $selection,
  $shadow,
  $transparent,
  $translucent,
  $error,
  $warning,
  $info,
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
  $boldGreen
}

/**
 * Island of almost picked colors
 * #45A9F9
 * #DE68A1
 * #D33682
 */
