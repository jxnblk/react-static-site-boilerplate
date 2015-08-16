
import React from 'react'
import { Router } from 'react-router'
import Location from 'react-router/lib/Location'
import routes from './routes'

if (typeof document !== 'undefined') {
  // var initialProps = JSON.parse(document.getElementById('initial-props').innerHTML)
  const { history } = require('react-router/lib/BrowserHistory')
  React.render(<Router routes={routes} history={history} />, document)
}

export default function render (path, props, callback) {
  const location = new Location(path)
  Router.run(routes, location, function (err, state) {
    const html = React.renderToString(<Router {...state} {...props} />)
    callback(`<!DOCTYPE html>${html}`)
  })
}

