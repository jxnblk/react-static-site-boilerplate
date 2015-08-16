
import React from 'react'
import Header from './Header'
import css from '../css/base.css'

export default class Root extends React.Component {

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <style dangerouslySetInnerHTML={{ __html: css }} />
        </head>
        <body className='p2'>
          <Header {...this.props} />
          {React.cloneElement(this.props.children, this.props)}
          <script src='/bundle.js' />
        </body>
      </html>
    )
  }

}

Root.propTypes = {
  title: React.PropTypes.string
}

