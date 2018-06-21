const { alpha, darken } = require('./color-utils')

/**
 * Tranquil Theme Color Variables
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

//
// Theme colors
//

const PRIMARY = '#fe6083'
const SECONDARY = '#befeee'
const ACCENT = '#b892f1'

const INFO = '#93E0E3'
const SUCCESS = '#9ed945'
const WARNING = '#FFC300'
const DANGER = '#ff427b'

//
// Grays
//

// Fonts
const GRAY_100 = '#f0f0f0'
const GRAY_200 = '#d4cbcc'
const GRAY_300 = '#f5ebf7d9'
const GRAY_400 = '#ab9bab'
const GRAY_500 = '#7e6c88'

const GRAY_600 = '#2c4344' // Borders #1a2e42

// Backgrounds
const GRAY_700 = '#1c242c' // Editor BG
const GRAY_800 = '#121c26' // Well BG
const GRAY_900 = '#0a121b' // App Title BG

//
// Transparency colors
//

const TRANSPARENT = alpha('#000000', 0.0) // #00000000

const PRIMARY_TRANSLUCENT_100 = alpha(ACCENT, 0.1)
const PRIMARY_TRANSLUCENT_200 = alpha(ACCENT, 0.2)
const PRIMARY_TRANSLUCENT_300 = alpha(ACCENT, 0.3)

// Element grouping variables
// ---------------------------------------------------------------------------

// Text
const CURSOR = '#FF4B82'

// Borders
const BORDER_GRAY = GRAY_600

// Primary font color used for non themed tokens, and essentially any regular
// text
const TEXT_PRIMARY = GRAY_200
// Use secondary font color for elements like headers and placeholders to
// slightly de-emphasize the text
const TEXT_SECONDARY = GRAY_300

// Use with links
const TEXT_ANCHOR = PRIMARY
// Use text subtle for very low contrast content that provides unimportant info
const TEXT_SUBTLE = GRAY_400
// Use text themed to provide a nice theme accent with some content
const TEXT_THEMED = PRIMARY

const TEXT_THEMED_SUBTLE = GRAY_500
// Use translucent text with text content that only provides ancillary information
// like code complexity and git lens
const TEXT_TRANSLUCENT = PRIMARY_TRANSLUCENT_300

// Backgrounds

const BG_DRAG_DROP = PRIMARY_TRANSLUCENT_200

//
// Elements, Controls, Components
//

// Editor
const EDITOR_BG = GRAY_700
const EDITOR_FG = TEXT_PRIMARY

// Wells
const WELL_BG = GRAY_800
const WELL_FG = TEXT_SECONDARY

// Titles
const TITLE_BG = GRAY_900
const TITLE_FG = TEXT_THEMED

// Component decorations
const BORDER = BORDER_GRAY // Regular border for use creating containers
const BORDER_THEMED = SECONDARY // Themed border to add visual change

const HIGHLIGHT_LINE = PRIMARY_TRANSLUCENT_100
const HIGHLIGHT_SELECTION = PRIMARY_TRANSLUCENT_300

// Git- status colors for git states
const GIT_ADDED = SUCCESS
const GIT_MODIFIED = WARNING
const GIT_REMOVED = DANGER
const GIT_CONFLICTED = DANGER
const GIT_IGNORED = TEXT_SUBTLE

// Actions - elements that can be interacted with, eg buttons
const ACTION_BG = SECONDARY
const ACTION_HOVER_BG = darken(SECONDARY, 35)
const ACTION_FG = TEXT_PRIMARY

// Decorations - elements that provide decoration, eg badges
const DECORATION_BG = PRIMARY
const DECORATION_FG = GRAY_100

// VSCode Radical theme 🎉
// ---------------------------------------------------------------------------

//
// Contrast
//

// High contrast theme options, this theme is not high contrast

module.exports.contrast = {
  contrastActiveBorder: null,
  contrastBorder: null
}

//
// Text colors
//

// Styles for text documents, eg extension pages, welcome page
// 🤔 Most of these don't seem to do anything...
module.exports.text = {
  'textBlockQuote.background': EDITOR_BG,
  'textBlockQuote.border': PRIMARY,
  'textCodeBlock.background': EDITOR_BG,
  'textLink.activeForeground': PRIMARY,
  'textLink.foreground': PRIMARY
  // 'textPreformat.foreground': ???,
  // 'textSeparator.foreground': ???,
}

//
// Base colors
//

// ℹ️ Defaults for editor elements, will be used if not set by a specific component
module.exports.base = {
  focusBorder: BORDER,
  foreground: TEXT_PRIMARY,
  'widget.shadow': TRANSPARENT,
  'selection.background': HIGHLIGHT_SELECTION, // Selection background inside text inputs
  descriptionForeground: INFO,
  errorForeground: DANGER
}

//
// Buttons
//

module.exports.buttons = {
  'button.background': ACTION_BG,
  'button.foreground': ACTION_FG,
  'button.hoverBackground': ACTION_HOVER_BG
}

//
// Dropdowns
//

module.exports.dropdowns = {
  'dropdown.background': EDITOR_BG,
  'dropdown.listBackground': EDITOR_BG,
  'dropdown.foreground': EDITOR_FG,
  'dropdown.border': BORDER
}

//
// Inputs
//

module.exports.inputs = {
  'input.background': EDITOR_BG,
  'input.foreground': EDITOR_FG,
  'input.border': TRANSPARENT,
  'input.placeholderForeground': TEXT_SECONDARY,
  // Border around input options being used, eg regex or case sensitive
  'inputOption.activeBorder': BORDER_THEMED,
  // Validtions
  'inputValidation.errorBackground': DANGER,
  'inputValidation.errorBorder': DANGER,
  'inputValidation.infoBackground': INFO,
  'inputValidation.infoBorder': INFO,
  'inputValidation.warningBackground': WARNING,
  'inputValidation.warningBorder': WARNING
}

//
// Badges
//

module.exports.badges = {
  'badge.background': DECORATION_BG,
  'badge.foreground': DECORATION_FG
}

//
// Progress bars
//

// Shown for long running operations
module.exports.progressBars = {
  'progressBar.background': PRIMARY
}

//
// Lists and trees
//

// Lists and trees include file explorer and ....
module.exports.listsAndTrees = {
  // Mouse hover
  'list.hoverBackground': WELL_BG,
  'list.hoverForeground': INFO,
  // Keyboard focus
  'list.focusBackground': WELL_BG,
  'list.focusForeground': TEXT_THEMED,
  // Drag and drop background, shows when you hover a drag item over a droppable area
  'list.dropBackground': BG_DRAG_DROP,
  // Selected item when the list container is in focus
  'list.activeSelectionBackground': WELL_BG,
  'list.activeSelectionForeground': INFO,
  // Selected item when the list container is NOT in focus
  'list.inactiveSelectionBackground': WELL_BG,
  'list.inactiveSelectionForeground': INFO,
  // The text that matches a search term inside of lists
  'list.highlightForeground': INFO
}

//
// Scrollbars
//

// Scrollbars should use transparent colors so that mini-map is visible underneath
module.exports.scrollbar = {
  // The scrollbar shadow is and decorative info indicator shown in elements that have
  // been scrolled, theme uses a very subtle translucent PRIMARY
  'scrollbar.shadow': PRIMARY_TRANSLUCENT_100,
  // The slider control element
  'scrollbarSlider.background': PRIMARY_TRANSLUCENT_100,
  'scrollbarSlider.activeBackground': PRIMARY_TRANSLUCENT_300,
  'scrollbarSlider.hoverBackground': PRIMARY_TRANSLUCENT_200
}

//
// Git
//

module.exports.git = {
  'gitDecoration.untrackedResourceForeground': GIT_ADDED,
  'gitDecoration.modifiedResourceForeground': GIT_MODIFIED,
  'gitDecoration.deletedResourceForeground': GIT_REMOVED,
  'gitDecoration.conflictingResourceForeground': GIT_CONFLICTED,
  'gitDecoration.ignoredResourceForeground': GIT_IGNORED
}

module.exports.diff = {
  'diffEditor.insertedTextBackground': '#00eed32b',
  'diffEditor.removedTextBackground': '#fc28692b',
  // Diff borders get added around everything line by line and it's super
  // overwhelming to look at, so we disable them
  'diffEditor.insertedTextBorder': null,
  'diffEditor.removedTextBorder': null
}

module.exports.merge = {
  'merge.border': EDITOR_BG,
  'merge.currentHeaderBackground': '#703268',
  'merge.currentContentBackground': '#8c568648',
  'merge.incomingHeaderBackground': '#1E4751',
  'merge.incomingContentBackground': '#5c9fcb33'
}

// ---------------------------------------------------------------------------
// Editor
// ---------------------------------------------------------------------------

//
// Editor groups and tabs
//

// Editor *groups* are containers of multiple editors, and multiple groups can be
// created using the 'Split Editor' action.

// Editor *tabs* are containers of individual editors

module.exports.editorGroupsTabs = {
  // EDITOR GROUPS
  'editorGroup.background': WELL_BG,
  'editorGroup.border': BORDER,
  'editorGroup.dropBackground': BG_DRAG_DROP,
  // The header containing all the editor tabs at the top of an editor group
  'editorGroupHeader.tabsBackground': EDITOR_BG,
  'editorGroupHeader.tabsBorder': '#6d5f6b', // BORDER,
  // 'editorGroupHeader.noTabsBackground' set 'showTabs' false to see this, it's v confusing

  // EDITOR TABS
  'tab.border': EDITOR_BG,
  'tab.activeBorder': TEXT_THEMED,
  'tab.hoverBackground': EDITOR_BG,
  // Currently active tab
  'tab.activeBackground': EDITOR_BG,
  'tab.activeForeground': TEXT_THEMED,
  // Remaining tabs inside active editor group
  'tab.inactiveBackground': EDITOR_BG,
  'tab.inactiveForeground': TEXT_SECONDARY,
  // Tabs within an inactive editor group
  'tab.unfocusedActiveBorder': WELL_BG,
  'tab.unfocusedActiveForeground': EDITOR_BG,
  'tab.unfocusedHoverBackground': WELL_BG,
  'tab.unfocusedHoverBorder': WELL_BG,
  'tab.unfocusedInactiveForeground': WELL_FG
}

//
// Editor controls
//

module.exports.editor = {
  'editor.background': EDITOR_BG,
  'editor.foreground': EDITOR_FG,

  // DECORATIONS
  'editorLineNumber.foreground': TEXT_THEMED_SUBTLE,
  /* editorCursor.background */
  'editorCursor.foreground': CURSOR,
  'editorRuler.foreground': PRIMARY_TRANSLUCENT_200,
  'editor.lineHighlightBackground': HIGHLIGHT_LINE, // Currently active line background
  /* editor.lineHighlightBorder */
  /* editorBracketMatch.background */
  'editorBracketMatch.border': PRIMARY,
  'editorCodeLens.foreground': TEXT_TRANSLUCENT,
  /* editorWhitespace.foreground */
  'editorIndentGuide.background': BORDER,

  // SELECTIONS
  // When selecting characters the selection highlights are applied, all matching
  // characters in editor are also highlighted
  'editor.selectionBackground': HIGHLIGHT_SELECTION,
  /* editor.selectionForeground */
  'editor.inactiveSelectionBackground': HIGHLIGHT_SELECTION,
  'editor.selectionHighlightBackground': HIGHLIGHT_SELECTION,
  /* editor.selectionHighlightBorder */

  // WORD HIGHLIGHT
  // Word highlight settings are used when the cursor is inside of a symbol and will
  // automatically highlight all other occurences of that symbol (with the option for
  // different colors for read vs write access of symbol). Note that this overrides
  // the selection background after double clicking a symbol to select, but not when
  // selecting with keyboard
  // TODO: Make these more subtle, they're distracting
  'editor.wordHighlightBackground': TEXT_TRANSLUCENT, // During read access, like console.log
  /* editor.wordHighlightBorder */
  'editor.wordHighlightStrongBackground': HIGHLIGHT_SELECTION, // During write access, like const =
  /* editor.wordHighlightStrongBorder */

  // FIND MATCH
  // Find match settings are triggered by current find/replace dialong in top right
  'editor.findMatchBackground': TEXT_TRANSLUCENT,
  /* editor.findMatchBorder */
  'editor.findMatchHighlightBackground': HIGHLIGHT_SELECTION,
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
  'editorLink.activeForeground': TEXT_ANCHOR
}

//
// Editor gutter
//

// The gutter contains the glyph margins and the line numbers
module.exports.editorGutter = {
  'editorGutter.background': EDITOR_BG,
  'editorGutter.addedBackground': GIT_ADDED,
  'editorGutter.modifiedBackground': GIT_MODIFIED,
  'editorGutter.deletedBackground': GIT_REMOVED
}

//
// Editor overview ruler
//

// The overview ruler is the thin bar at the far right of the editor, it shows
// decorations for different editor statuses
module.exports.editorOverviewRuler = {
  // Linter status decorations
  'editorOverviewRuler.errorForeground': DANGER,
  'editorOverviewRuler.warningForeground': WARNING,
  'editorOverviewRuler.infoForeground': INFO,

  // Git status decorations
  'editorOverviewRuler.addedForeground': GIT_ADDED,
  'editorOverviewRuler.modifiedForeground': GIT_MODIFIED,
  'editorOverviewRuler.deletedForeground': GIT_REMOVED,

  // Merge conflict decorations
  'editorOverviewRuler.currentContentForeground': '#703268', // TODO: variable
  'editorOverviewRuler.incomingContentForeground': '#1E4751' // TODO: variable
  // 'editorOverviewRuler.commonContentForeground':  //  TODO: find example,
}

//
// Editor statuses
//

// Themes the squiggly+borders underneath linter errors, foreground is the squiggly
// lines, use just the borders, it looks nicer
module.exports.editorStatus = {
  'editorError.foreground': DANGER,
  'editorError.border': DANGER,
  'editorWarning.foreground': WARNING,
  'editorWarning.border': WARNING,
  'editorInfo.foreground': INFO,
  'editorInfo.border': INFO
}

//
// Editor widgets
//

// Editor widgets are controls shown in front of the editor, eg find/replace dialog,
// suggestions dropdown, and intellisense hover dialog
module.exports.editorWidgets = {
  // General defaults for editor widgets
  'editorWidget.background': EDITOR_BG,
  'editorWidget.border': BORDER,
  // This sets the background for suggestions complete currently selected element
  'editorSuggestWidget.background': EDITOR_BG,
  'editorSuggestWidget.border': BORDER,
  'editorSuggestWidget.foreground': EDITOR_FG,
  'editorSuggestWidget.selectedBackground': ACTION_HOVER_BG, // line that has active focus
  'editorSuggestWidget.highlightForeground': INFO, // text that matches what was typed
  // Intellisense dialog that appears on hover of methods, vars, etc.
  'editorHoverWidget.background': EDITOR_BG,
  'editorHoverWidget.border': BORDER,
  // Peek view shown when editor stops at an exception
  'debugExceptionWidget.background': EDITOR_BG,
  'debugExceptionWidget.border': BORDER,
  // View shows when navigating to errors/warnings/info in the editor (using f8 key
  // command). The backgrounds are actually border colors of the view
  'editorMarkerNavigation.background': EDITOR_BG,
  'editorMarkerNavigationError.background': DANGER,
  'editorMarkerNavigationWarning.background': WARNING,
  'editorMarkerNavigationInfo.background': INFO
}

//
// Panel
//

// The panel is shown below the editor and contains views like Output and Integrated
// Terminal
module.exports.panel = {
  'panel.background': EDITOR_BG,
  'panel.border': BORDER,
  'panel.dropBackground': BG_DRAG_DROP,
  // Panel title
  'panelTitle.activeBorder': TEXT_THEMED,
  'panelTitle.activeForeground': TEXT_THEMED,
  'panelTitle.inactiveForeground': TEXT_SECONDARY
}

//
// Title bar
//

// The title bar is the bar at the top of the editor
module.exports.titleBar = {
  'titleBar.activeBackground': TITLE_BG,
  'titleBar.activeForeground': TITLE_FG,
  'titleBar.inactiveBackground': TITLE_BG,
  'titleBar.inactiveForeground': TITLE_FG,
  'titleBar.border': BORDER
}

//
// Activity bar
//

// The far left sidebar (which can be hidden with: Toggle Activity Bar Visibility)
module.exports.activityBar = {
  'activityBar.background': WELL_BG,
  'activityBar.dropBackground': BG_DRAG_DROP,
  'activityBar.foreground': WELL_FG,
  'activityBar.border': BORDER_THEMED, // When it's open, it pops!
  // Badges
  'activityBarBadge.background': DECORATION_BG,
  'activityBarBadge.foreground': DECORATION_FG
}

//
// Side bar
//

// ℹ️ The side bar is inbetween the activity bar and editor, and contains the file
// tree, search interface, git status and debug views
module.exports.sideBar = {
  'sideBar.background': WELL_BG,
  'sideBar.dropBackground': BG_DRAG_DROP,
  'sideBar.foreground': WELL_FG,
  // sideBar.border
  // The title for the entire side bar, eg 'EXPLORER' or 'DEBUG'
  'sideBarTitle.foreground': TEXT_THEMED,
  // Side bar sections for features
  'sideBarSectionHeader.background': WELL_BG, // same bg for subtler headers
  'sideBarSectionHeader.foreground': TEXT_SUBTLE
}

//
// Status bar
//

// The status bar is the bar at bottom of editor with status updates
module.exports.statusBar = {
  'statusBar.background': EDITOR_BG,
  'statusBar.foreground': EDITOR_FG,
  'statusBar.border': BORDER,
  // 😢 Unfortunately, you can only style the background of status bar items, it
  // would nice to instead style the foreground, but until then style background
  'statusBarItem.activeBackground': DECORATION_BG,
  'statusBarItem.hoverBackground': DECORATION_BG,
  'statusBarItem.prominentBackground': DECORATION_BG,
  'statusBarItem.prominentHoverBackground': DECORATION_BG,
  // DEBUGGING MODE
  'statusBar.debuggingBackground': PRIMARY_TRANSLUCENT_300,
  'statusBar.debuggingForeground': TEXT_PRIMARY,
  'statusBar.debuggingBorder': BORDER,
  // NO FOLDER MODE
  'statusBar.noFolderBackground': WELL_BG,
  'statusBar.noFolderForeground': TEXT_PRIMARY,
  'statusBar.noFolderBorder': BORDER
}

//
// Extensions
//

module.exports.extensions = {
  'extensionButton.prominentBackground': ACTION_BG,
  'extensionButton.prominentForeground': ACTION_FG,
  'extensionButton.prominentHoverBackground': ACTION_HOVER_BG
}

//
// Debug
//

module.exports.debug = {
  'debugToolBar.background': WELL_BG // TODO: WIT?
}
