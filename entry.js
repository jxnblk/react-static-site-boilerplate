
var React = require('react')
var Router = require('react-router')
var Routes = require('./Routes.jsx')
var data = require('./data')

if (typeof document !== 'undefined') {
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler, data), document)
  })
}

module.exports = function render (locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToString(React.createElement(Handler, data))
    callback(null, '<!DOCTYPE html>' + html)
  })
}

