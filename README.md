# Tranquil Theme
_Like a sea turtle in the ocean, this theme is both soothing and visually delightful_

## Theme Guide
This theme uses a build system to manage the theme using a single set of
token/element variables that never change. Instead of defining a theme variable like
`$green` and assigning to to string token types, a `$string` variable is assigned
the green color value in `theme/colors.js` and used anywhere that a `$string` token
value is appropriate.

#### Motivation
This system is an attempt to simplify maintaining and changing the theme. By using
token groups and editor elements it's possible to *consistently* update styling
across concerns by updating the color variables in `theme/colors.js`. Hopefully this
also helps increase cohesion by organizing the theme into groups rather than
adjusting individual values and attempting to maintain them.

#### Token Styles
Currently the only token styles available are `foreground` and `font-style`. The
following values are valid for `font-style`:

- italic
- bold
- underline
- italic bold
- italic underline
- bold underline
- italic bold underline

## Wish List:
- Finalize background and foreground colors
- Update input and dropdown colors
- Better contrast between variables and source text (gray and white are almost the
  same color)
- Anchor hover color (hover over alpha HEX link in colors for example)

