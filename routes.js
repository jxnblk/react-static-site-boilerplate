
import React from 'react'
import Root from './components/Root.jsx'
import Index from './components/Index.jsx'
import About from './components/About.jsx'

const routes = [
  {
    component: Root,
    childRoutes: [
      { path: '/', component: Index },
      { path: '/about', component: About },
    ]
  }
]

export default routes

