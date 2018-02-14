const PodsWebpackPlugin = require('../../lib/index').default

module.exports = {
  entry: './index.js',
  output: {
    filename: '[name].js'
  },
  plugins: [
    new PodsWebpackPlugin({
      dir: ['bar']
    })
  ]
}
