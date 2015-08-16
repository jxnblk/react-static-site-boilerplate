
var webpack = require('webpack')
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: {
    static: [ './entry' ],
    bundle: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './entry'
    ]
  },

  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
    libraryTarget: 'umd'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'babel'] },
      { test: /\.css$/, loader: 'css!cssnext' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new StaticSiteGeneratorPlugin('static.js', data.routes, data)
  ],

  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    hot: true,
  },

  cssnext: {
    compress: true,
    features: {
      rem: false,
      pseudoElements: false,
      colorRgba: false
    }
  }

}
