const { alpha, shade, tint } = require('./color-utils')

/**
 * Tranquil Color Variables
 * **All color variables should be set here**
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
 * Theme Reference: https://code.visualstudio.com/docs/getstarted/theme-color-reference
 */

// ---------------------------------------------------------------------------
// Theme color variables
// ---------------------------------------------------------------------------

// ========================================================
// Theme base colors
// ========================================================

const FUCHSIA = '#FC54FC'
const ELECTRIC_BLUE = '#31DFF9'
const ULTRA_RED = '#FF4B82'

const LAVENDER = '#9d58b1'
const PLUM = '#8c5685'
const RUST_PURPLE = '#b978a4'
const LILAC = '#BCAAFE'
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
const OCEAN = '#3A7B91'
const LAPIS = '#2980B9'

// Theme color types

const primary = FUCHSIA
const secondary = ELECTRIC_BLUE

// Grayscale

// Create tinted gray base colors using theme primary and secondary colors

// ℹ️ The background is tinted with the theme secondary color and the font tinted
// with the theme primary color, this provides a nice subtle contrast

const grayedPrimary = shade(primary, 0.88).hex() // foregrounds #1e0a1e
const grayedSecondary = shade(secondary, 0.88).hex() // backgrounds #061b1e

// Lightest grays used for font color's of elements
const GRAY_100 = tint(grayedPrimary, 0.97).hex() // #f8f8f8
const GRAY_200 = tint(grayedPrimary, 0.94).hex() // #f2f0f2
const GRAY_300 = tint(grayedPrimary, 0.75).hex() // #c7c2c7
const GRAY_400 = tint(grayedPrimary, 0.45).hex() // #837883
const GRAY_500 = tint(grayedPrimary, 0.25).hex() // #564756

const GRAY_600 = tint(grayedSecondary, 0.15).hex() // #2b3d40
const GRAY_700 = tint(grayedSecondary, 0.07).hex() // #172b2e
const GRAY_800 = tint(grayedSecondary, 0.03).hex() // #0d2225
const GRAY_900 = tint(grayedSecondary, 0.0).hex() // #061b1e

// Utility colors

const $transparent = alpha('#000000', 0.0) // #00000000
// const GRAY_TRANSLUCENT = alpha(GRAY_500, 0.45) // #56475673

const PRIMARY_TRANSLUCENT_100 = alpha(primary, 0.15) // #FC54FC26
const PRIMARY_TRANSLUCENT_200 = alpha(primary, 0.2) // #FC54FC33
const PRIMARY_TRANSLUCENT_300 = alpha(primary, 0.3) // #FC54FC4D

// ========================================================
// Theme component colors
// ========================================================

// Backgrounds

const $bgEditor = GRAY_700
const $bgWell = GRAY_800
const $bgTitle = GRAY_900

const bgDragAndDrop = PRIMARY_TRANSLUCENT_200

// Foreground + fonts

const $fgPrimary = GRAY_100
const $fgHeader = GRAY_200
const $fgTitle = GRAY_300

const $fgContrast = RUST_PURPLE
const $fgTranslucent = alpha(LILAC, 0.5) // Used with text like code complexity and git lens

// Components

const $border = GRAY_600 // Regular border for use creating containers
const $themeBorder = NEON_ICE // Themed border to add visual change
const $cursor = ULTRA_RED
const $lineHighlight = alpha(primary, 0.1)
const $selection = alpha(ARCTIC, 0.4)

// Statuses

const $danger = ANGRY
const $warning = MELON
const $info = ARCTIC
const $success = LIME

const gitAdded = $success
const gitModified = $warning
const gitRemoved = $danger
const gitConflicted = $danger

// Actions

// Elements that can be interacted with to trigger general actions, eg buttons
const actionBackground = ICE
const actionHoverBackground = OCEAN
const actionForeground = $fgPrimary

// Decorations

// Elements that provide decoration, including informational decoration, eg badges
const decorationBg = ICE
const decorationFg = GRAY_400

// ---------------------------------------------------------------------------
// Theme controls and elements
// ---------------------------------------------------------------------------

// ========================================================
// Contrast
// ========================================================

// High contrast theme options, this theme is not high contrast
// contrastActiveBorder: NONE
// contrastBorder: NONE

// ========================================================
// Text colors
// ========================================================

// Styles for text documents, eg extension pages, welcome page
// 🤔 Most of these don't seem to do anything...
module.exports.text = {
  'textBlockQuote.background': $bgEditor,
  'textBlockQuote.border': primary,
  'textCodeBlock.background': $bgEditor,
  'textLink.activeForeground': primary,
  'textLink.foreground': primary
  // 'textPreformat.foreground': $fgPrimary,
  // 'textSeparator.foreground': $fgPrimary,
}

// ========================================================
// Base colors
// ========================================================

// ℹ️ Defaults for editor elements, will be used if not set by a specific component
module.exports.base = {
  focusBorder: $border,
  foreground: $fgPrimary,
  'widget.shadow': $transparent,
  'selection.background': $selection, // Selection background inside text inputs
  descriptionForeground: $info,
  errorForeground: $danger
}

// ========================================================
// Buttons
// ========================================================

module.exports.buttons = {
  'button.background': actionBackground,
  'button.foreground': actionForeground,
  'button.hoverBackground': actionHoverBackground
}

// ========================================================
// Dropdowns
// ========================================================

module.exports.dropdowns = {
  'dropdown.background': $bgEditor,
  'dropdown.listBackground': $bgEditor,
  'dropdown.border': $border,
  'dropdown.foreground': $fgPrimary
}

// ========================================================
// Inputs
// ========================================================

module.exports.inputs = {
  'input.background': $bgEditor,
  'input.border': $transparent,
  'input.foreground': $fgPrimary,
  'input.placeholderForeground': $fgHeader,
  // Border around input options being used, eg regex or case sensitive
  'inputOption.activeBorder': RUST_PURPLE,
  // Validtions
  'inputValidation.errorBackground': $danger,
  'inputValidation.errorBorder': $danger,
  'inputValidation.infoBackground': $info,
  'inputValidation.infoBorder': $info,
  'inputValidation.warningBackground': $warning,
  'inputValidation.warningBorder': $warning
}

// ========================================================
// Badges
// ========================================================

module.exports.badges = {
  'badge.background': decorationBg,
  'badge.foreground': decorationFg
}

// ========================================================
// Progress bars
// ========================================================

// Shown for long running operations
module.exports.progressBars = {
  'progressBar.background': primary
}

// ========================================================
// Lists and trees
// ========================================================

// Lists and trees include file explorer and ....
module.exports.listsAndTrees = {
  // Mouse hover
  'list.hoverBackground': $bgWell,
  'list.hoverForeground': $info,
  // Keyboard focus
  'list.focusBackground': $bgWell,
  'list.focusForeground': $fgContrast,
  // Drag and drop background, shows when you hover a drag item over a droppable area
  'list.dropBackground': bgDragAndDrop,
  // Selected item when the list container is in focus
  'list.activeSelectionBackground': $bgWell,
  'list.activeSelectionForeground': $info,
  // Selected item when the list container is NOT in focus
  'list.inactiveSelectionBackground': $bgWell,
  'list.inactiveSelectionForeground': $info,
  // The text that matches a search term inside of lists
  'list.highlightForeground': $info
}

// ========================================================
// Scrollbars
// ========================================================

// Scrollbars should use transparent colors so that mini-map is visible underneath
module.exports.scrollbar = {
  // The scrollbar shadow is and decorative info indicator shown in elements that have
  // been scrolled, theme uses a very subtle translucent primary
  'scrollbar.shadow': PRIMARY_TRANSLUCENT_100,
  // The slider control element
  'scrollbarSlider.background': PRIMARY_TRANSLUCENT_100,
  'scrollbarSlider.activeBackground': PRIMARY_TRANSLUCENT_300,
  'scrollbarSlider.hoverBackground': PRIMARY_TRANSLUCENT_200
}

// ========================================================
// Git
// ========================================================

module.exports.git = {
  'gitDecoration.untrackedResourceForeground': gitAdded,
  'gitDecoration.modifiedResourceForeground': gitModified,
  'gitDecoration.deletedResourceForeground': gitRemoved,
  'gitDecoration.conflictingResourceForeground': gitConflicted,
  'gitDecoration.ignoredResourceForeground': $bgTitle
}

module.exports.diff = {
  'diffEditor.insertedTextBackground': '#94d53318',
  'diffEditor.insertedTextBorder': $transparent,
  'diffEditor.removedTextBackground': '#ff2c7218',
  'diffEditor.removedTextBorder': $transparent
}

module.exports.merge = {
  'merge.border': $bgEditor,
  'merge.currentHeaderBackground': '#703268',
  'merge.currentContentBackground': '#8c568648',
  'merge.incomingHeaderBackground': '#1E4751',
  'merge.incomingContentBackground': '#5c9fcb33'
}

// ---------------------------------------------------------------------------
// Editor
// ---------------------------------------------------------------------------

// ========================================================
// Editor groups and tabs
// ========================================================

// Editor *groups* are containers of multiple editors, and multiple groups can be
// created using the 'Split Editor' action.

// Editor *tabs* are containers of individual editors

module.exports.editorGroupsTabs = {
  // EDITOR GROUPS
  'editorGroup.background': $bgWell,
  'editorGroup.border': $border,
  'editorGroup.dropBackground': bgDragAndDrop,
  // The header containing all the editor tabs at the top of an editor group
  'editorGroupHeader.tabsBackground': $bgEditor,
  'editorGroupHeader.tabsBorder': $border,
  // 'editorGroupHeader.noTabsBackground' set 'showTabs' false to see this, it's v confusing

  // EDITOR TABS
  'tab.border': $bgEditor,
  'tab.activeBorder': $fgContrast,
  'tab.hoverBackground': $bgEditor,
  // Currently active tab
  'tab.activeBackground': $bgEditor,
  'tab.activeForeground': $fgContrast,
  // Remaining tabs inside active editor group
  'tab.inactiveBackground': $bgEditor,
  'tab.inactiveForeground': $fgHeader,
  // Tabs within an inactive editor group
  'tab.unfocusedActiveBorder': $bgWell,
  'tab.unfocusedActiveForeground': $bgEditor,
  'tab.unfocusedHoverBackground': $bgWell,
  'tab.unfocusedHoverBorder': $bgWell,
  'tab.unfocusedInactiveForeground': $fgHeader
}

// ========================================================
// Editor controls
// ========================================================

module.exports.editor = {
  'editor.background': $bgEditor,
  'editor.foreground': $fgPrimary,

  // DECORATIONS
  'editorLineNumber.foreground': $fgContrast,
  /* editorCursor.background */
  'editorCursor.foreground': $cursor,
  'editorRuler.foreground': $fgTranslucent,
  'editor.lineHighlightBackground': $lineHighlight, // Currently active line background
  /* editor.lineHighlightBorder */
  /* editorBracketMatch.background */
  'editorBracketMatch.border': $fgContrast,
  'editorCodeLens.foreground': $fgTranslucent,
  /* editorWhitespace.foreground */
  'editorIndentGuide.background': $fgTranslucent,

  // SELECTIONS
  // When selecting characters the selection highlights are applied, all matching
  // characters in editor are also highlighted
  'editor.selectionBackground': $selection,
  /* editor.selectionForeground */
  'editor.inactiveSelectionBackground': $selection,
  'editor.selectionHighlightBackground': $selection,
  /* editor.selectionHighlightBorder */

  // WORD HIGHLIGHT
  // Word highlight settings are used when the cursor is inside of a symbol and will
  // automatically highlight all other occurences of that symbol (with the option for
  // different colors for read vs write access of symbol). Note that this overrides
  // the selection background after double clicking a symbol to select, but not when
  // selecting with keyboard
  // TODO: Make these more subtle, they're distracting
  'editor.wordHighlightBackground': $fgTranslucent, // During read access, like console.log
  /* editor.wordHighlightBorder */
  'editor.wordHighlightStrongBackground': $selection, // During write access, like const =
  /* editor.wordHighlightStrongBorder */

  // FIND MATCH
  // Find match settings are triggered by current find/replace dialong in top right
  'editor.findMatchBackground': $fgTranslucent,
  /* editor.findMatchBorder */
  'editor.findMatchHighlightBackground': $selection,
  /* editor.findMatchHighlightBorder */

  // RANGES
  // What is findRange??
  /* editor.findRangeHighlightBackground */
  /* editor.findRangeHighlightBorder */

  // HOVER HIGHLIGHT
  // Shown hen hovering over a symbol
  /* editor.hoverHighlightBackground TODO! */

  // LINKS
  // Visible when clicking on a link in the editor (hold cmd)
  'editorLink.activeForeground': primary
}

// ========================================================
// Editor gutter
// ========================================================

// The gutter contains the glyph margins and the line numbers
module.exports.editorGutter = {
  'editorGutter.background': $bgEditor,
  'editorGutter.addedBackground': gitAdded,
  'editorGutter.modifiedBackground': gitModified,
  'editorGutter.deletedBackground': gitRemoved
}

// ========================================================
// Editor overview ruler
// ========================================================

// The overview ruler is the thin bar at the far right of the editor, it shows
// decorations for different editor statuses
module.exports.editorOverviewRuler = {
  // Linter status decorations
  'editorOverviewRuler.errorForeground': $danger,
  'editorOverviewRuler.warningForeground': $warning,
  'editorOverviewRuler.infoForeground': $info,

  // Git status decorations
  'editorOverviewRuler.addedForeground': gitAdded,
  'editorOverviewRuler.modifiedForeground': gitModified,
  'editorOverviewRuler.deletedForeground': gitRemoved,

  // Merge conflict decorations
  'editorOverviewRuler.currentContentForeground': '#703268', // TODO: variable
  'editorOverviewRuler.incomingContentForeground': '#1E4751', // TODO: variable
  'editorOverviewRuler.commonContentForeground': '#ff0000' //  TODO: find example,
}

// ========================================================
// Editor statuses
// ========================================================

// Themes the squiggly+borders underneath linter errors, foreground is the squiggly
// lines, use just the borders, it looks nicer
module.exports.editorStatus = {
  'editorError.foreground': $danger,
  'editorError.border': $danger,
  'editorWarning.foreground': $warning,
  'editorWarning.border': $warning,
  'editorInfo.foreground': $info,
  'editorInfo.border': $info
}

// ========================================================
// Editor widgets
// ========================================================

// Editor widgets are controls shown in front of the editor, eg find/replace dialog,
// suggestions dropdown, and intellisense hover dialog
module.exports.editorWidgets = {
  // General defaults for editor widgets
  'editorWidget.background': $bgEditor,
  'editorWidget.border': $border,
  // This sets the background for suggestions complete currently selected element
  'editorSuggestWidget.background': $bgEditor,
  'editorSuggestWidget.border': $border,
  'editorSuggestWidget.foreground': $fgPrimary,
  'editorSuggestWidget.selectedBackground': actionHoverBackground, // line that has active focus
  'editorSuggestWidget.highlightForeground': $info, // text that matches what was typed
  // Intellisense dialog that appears on hover of methods, vars, etc.
  'editorHoverWidget.background': $bgEditor,
  'editorHoverWidget.border': $border,
  // Peek view shown when editor stops at an exception
  'debugExceptionWidget.background': $bgEditor,
  'debugExceptionWidget.border': $border,
  // View shows when navigating to errors/warnings/info in the editor (using f8 key
  // command). The backgrounds are actually border colors of the view
  'editorMarkerNavigation.background': $bgEditor,
  'editorMarkerNavigationError.background': $danger,
  'editorMarkerNavigationWarning.background': $warning,
  'editorMarkerNavigationInfo.background': $info
}

// ========================================================
// Panel
// ========================================================

// The panel is shown below the editor and contains views like Output and Integrated
// Terminal
module.exports.panel = {
  'panel.background': $bgEditor,
  'panel.border': $border,
  'panel.dropBackground': bgDragAndDrop,
  // Panel title
  'panelTitle.activeBorder': $fgContrast,
  'panelTitle.activeForeground': $fgContrast,
  'panelTitle.inactiveForeground': $fgHeader
}

// ========================================================
// Title bar
// ========================================================

// The title bar is the bar at the top of the editor
module.exports.titleBar = {
  'titleBar.activeBackground': $bgTitle,
  'titleBar.activeForeground': $fgContrast,
  'titleBar.inactiveBackground': $bgTitle,
  'titleBar.inactiveForeground': $fgContrast,
  'titleBar.border': $border
}

// ========================================================
// Activity bar
// ========================================================

// The far left sidebar (which can be hidden with: Toggle Activity Bar Visibility)
module.exports.activityBar = {
  'activityBar.background': $bgWell,
  'activityBar.dropBackground': bgDragAndDrop,
  'activityBar.foreground': $fgHeader, // Well headers for subtlety
  'activityBar.border': $themeBorder, // When it's open, it pops!
  // Badges
  'activityBarBadge.background': decorationBg,
  'activityBarBadge.foreground': decorationFg
}

// ========================================================
// Side bar
// ========================================================

// ℹ️ The side bar is inbetween the activity bar and editor, and contains the file
// tree, search interface, git status and debug views
module.exports.sideBar = {
  'sideBar.background': $bgWell,
  'sideBar.dropBackground': bgDragAndDrop,
  'sideBar.foreground': $fgHeader,
  // sideBar.border
  // The title for the entire side bar, eg 'EXPLORER' or 'DEBUG'
  'sideBarTitle.foreground': $fgContrast,
  // Side bar sections for features
  'sideBarSectionHeader.background': $bgWell, // same bg for subtler headers
  'sideBarSectionHeader.foreground': $fgHeader
}

// ========================================================
// Status bar
// ========================================================

// The status bar is the bar at bottom of editor with status updates
module.exports.statusBar = {
  'statusBar.background': $bgEditor,
  'statusBar.foreground': $fgPrimary,
  'statusBar.border': $border,
  'statusBar.debuggingBackground': PLUM,
  'statusBar.debuggingForeground': $fgPrimary,
  'statusBar.debuggingBorder': $border,
  'statusBar.noFolderBackground': GRAY_800,
  'statusBar.noFolderForeground': $fgPrimary,
  'statusBar.noFolderBorder': $border,
  // 😢 Unfortunately, you can only style the background of status bar items, it
  // would nice to instead style the foreground, but until then style background
  'statusBarItem.activeBackground': NEON_ICE,
  'statusBarItem.hoverBackground': NEON_ICE,
  'statusBarItem.prominentBackground': NEON_ICE,
  'statusBarItem.prominentHoverBackground': NEON_ICE
}

// ========================================================
// Terminal
// ========================================================

// ℹ️ Terminal: 'bold' colors are based on terminal emulators and are 'brighter'
// versions of that color
module.exports.terminal = {
  'terminalCursor.background': $fgPrimary,
  'terminalCursor.foreground': $cursor,
  'terminal.background': $bgEditor,
  'terminal.foreground': $fgPrimary,
  'terminal.ansiBlack': $bgEditor,
  'terminal.ansiBlue': LAPIS,
  'terminal.ansiCyan': ELECTRIC_LEAF, // ampersand, file path and arrow
  'terminal.ansiGreen': ICE, // branch name
  'terminal.ansiMagenta': PEPTO, // name
  'terminal.ansiRed': APPLE,
  'terminal.ansiWhite': $fgPrimary,
  'terminal.ansiYellow': PEACH, // computer name
  'terminal.ansiBrightBlack': GRAY_500,
  'terminal.ansiBrightBlue': SKY,
  'terminal.ansiBrightCyan': ARCTIC,
  'terminal.ansiBrightGreen': AQUAMARINE,
  'terminal.ansiBrightMagenta': PEPTO,
  'terminal.ansiBrightRed': SALMON,
  'terminal.ansiBrightWhite': GRAY_300,
  'terminal.ansiBrightYellow': POLLEN
}

// ========================================================
// Extensions
// ========================================================

module.exports.extensions = {
  'extensionButton.prominentBackground': actionBackground,
  'extensionButton.prominentForeground': actionForeground,
  'extensionButton.prominentHoverBackground': actionHoverBackground
}

// ========================================================
// Debug
// ========================================================

module.exports.debug = {
  'debugToolBar.background': $bgWell // TODO: WIT?
}

// ---------------------------------------------------------------------------
// Synatx token color variables
// ---------------------------------------------------------------------------

// Token Variables
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
// MARKUP
const $header = $fgHeader

//
// Ungrouped colors - DEPRECATED

// The color values used in the theme, these are all used in syntax tokens and should
// be refactored to token type exports!
const $red = SALMON
const $boldRed = APPLE
const $magenta = PEPTO
const $boldMagenta = PEPTO
const $violet = LAVENDER
const $yellow = POLLEN
const $boldYellow = BANANA
const $orange = PEACH
const $blue = SKY
const $boldBlue = LAPIS
const $cyan = ARCTIC
const $boldCyan = ELECTRIC_LEAF
const $green = ICE
const $gray = GRAY_600

module.exports.variables = {
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
  // UNGROUPED COLOR VARIABLES
  $red,
  $boldRed,
  $magenta,
  $boldMagenta,
  $violet,
  $yellow,
  $boldYellow,
  $orange,
  $blue,
  $boldBlue,
  $cyan,
  $boldCyan,
  $green,
  $gray
}
