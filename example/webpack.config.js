const path = require('path')
const Encore = require('@symfony/webpack-encore')

const cssPath = path.resolve('./src/css')

Encore
  .cleanupOutputBeforeBuild()
  .setPublicPath('/dist')
  .setOutputPath('./dist')
  .disableSingleRuntimeChunk()
  .addStyleEntry('main',
    [
      path.join(cssPath, '/index.scss'),
    ]
  )
  .configureFilenames({
    css: './css/[name].min.css'
  })
  .enableSassLoader()
  .enablePostCssLoader()
;

const config = Encore.getWebpackConfig()

config.watchOptions = {
  poll: true,
  ignored: /node_modules/
}

module.exports = config
