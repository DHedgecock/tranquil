const fs = require('fs')
const path = require('path')

const colors = require('../theme/colors')

let stylesheet = `body {
  margin: 0;
  width: 100%;
  display: flex;
  min-height: 100vh;
}

h1 {
  text-align: center;
  font-family: sans-serif;
  font-weight: 300;
  font-size: 48px;
}

h1, h2, h3, h4, p, .block {
  color: #dcdccc;
  font-family: sans-serif;
}

.background {
  flex: 1;
}

.row {
  display: flex;
}

.block {
  padding: 20px;
  margin: 5px;
  height: 100px;
  display: inline-block;
  flex: 1;
}
`

Object.keys(colors).forEach(
  color =>
    (stylesheet += `
.${color.slice(1)} {
  background-color: ${colors[color]};
}
`)
)

fs.writeFile(path.resolve('preview', 'theme.css'), stylesheet, err => {
  if (err) console.warn(err)
  console.log('Build finished')
})
