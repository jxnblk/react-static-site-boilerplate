
var React = require('react')
var Header = require('./Header.jsx')

var css = require('../css/base.css')

var Root = React.createClass({
  propTypes: {
    title: React.PropTypes.string
  },

  render: function () {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='p2'>
          <Header {...this.props} />
          {this.props.children}
          <script src='/bundle.js' />
        </body>
      </html>
    )
  }
})

module.exports = Root

