
var React = require('react')
var Root = require('./components/Root.jsx')
var Index = require('./components/Index.jsx')
var About = require('./components/About.jsx')

var routes = [
  {
    component: Root,
    childRoutes: [
      { path: '/', component: Index },
      { path: '/about', component: About },
    ]
  }
]

module.exports = routes

