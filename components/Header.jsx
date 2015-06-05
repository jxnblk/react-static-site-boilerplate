
var React = require('react')
var Router= require('react-router')
var Link = Router.Link

var Header = React.createClass({
  render: function() {
    return (
      <header className="py2">
        <h1 className="mt0">{this.props.title}</h1>
        <div className="mxn2">
          <Link to="/" className="button button-transparent">Index</Link>
          <Link to="/about" className="button button-transparent">About</Link>
        </div>
      </header>
    )
  }
})

module.exports = Header

