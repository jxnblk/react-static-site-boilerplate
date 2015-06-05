
var cssnext = require('cssnext')

module.exports = {
  title: 'My Static Site',
  routes: [
    '/',
    '/about'
  ],
  css: cssnext('@import "basscss";', {
    compress: true,
    features: {
      rem: false,
      colorRgba: false,
      customProperties: {
        variables: {
          'font-family': '"Avenir Next", "Helvetica Neue", Helvetica, sans-serif'
        }
      },
    }
  })
}

