module.exports = (scope, { fontStyle, color }) => {
  const token = {
    scope,
    settings: {}
  }

  if (fontStyle) token.settings.fontStyle = fontStyle
  if (color) token.settings.color = color
}
