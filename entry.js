
var React = require('react')
var Router = require('react-router').Router
var Location = require('react-router/lib/Location')
var routes = require('./routes')

if (typeof document !== 'undefined') {
  // var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  var history = require('react-router/lib/BrowserHistory').history
  React.render(<Router routes={routes} history={history} />, document)
}

module.exports = function render (path, props, callback) {
  var location = new Location(path)
  Router.run(routes, location, function (err, state) {
    var html = React.renderToString(<Router {...state} {...props} />)
    callback(`<!DOCTYPE html>${html}`)
  })
}

