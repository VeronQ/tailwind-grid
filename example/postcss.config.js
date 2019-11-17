const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')
const purgecss = require('@fullhuman/postcss-purgecss')

const purgecssConfig = {
  content: [
    './index.html'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
}

module.exports = {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    purgecss(purgecssConfig)
  ]
}
