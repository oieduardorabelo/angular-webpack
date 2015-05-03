var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, '/app'),
  entry: './index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  plugins: [],
  module: {
    loaders: [
      { test: /\.less$/, loader: 'css!style!less', exclude: './node_modules' },
      { test: /\.js$/,   loader: 'babel', exclude: './node_modules' },
      { test: /\.html$/, loader: 'raw', exclude: './node_modules' }
    ]
  }
}
