
const path = require('path')
module.exports = {
  resolve: {
    // this config field should be required if you want to use alias
    modules: [
      path.resolve(__dirname, '../src'),
      'node_modules',
    ],
    alias: {
      test: path.resolve(__dirname, '../src/pages/test'),
    },
    extensions: ['.js', '.jsx']
  }
}
