
var React = require('react')
var Router = require('react-router')
var RouteHandler = Router.RouteHandler
var Header = require('./Header.jsx')

var Root = React.createClass({
  render: function() {
    var initialProps = {
      __html: safeStringify(this.props)
    }
    var css = {
      __html: this.props.css
    }

    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={css} />
        </head>
        <body className="p2">
          <Header {...this.props} />
          <RouteHandler {...this.props} />
          <script
            id="initial-props"
            type="application/json"
            dangerouslySetInnerHTML={initialProps} />
          <script src="bundle.js" />
        </body>
      </html>
    )
  }
})

function safeStringify(obj) {
  return JSON.stringify(obj).replace(/<\/script/g, '<\\/script').replace(/<!--/g, '<\\!--')
}


module.exports = Root

