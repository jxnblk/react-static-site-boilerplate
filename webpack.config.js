
var StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin')
var data = require('./data')

module.exports = {
  entry: './entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname,
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2016', 'react']
        }
       },
      { test: /\.css$/, loaders: [ 'css' ] }
    ]
  },

  plugins: [
    new StaticSiteGeneratorPlugin('bundle.js', data.routes, data)
  ],

}
