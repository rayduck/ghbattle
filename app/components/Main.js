import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../main.css'

const Main = React.createClass({
  propTypes: {
    children: React.PropTypes.object.isRequired,
    location: React.PropTypes.object.isRequired
  },
  render () {
    return (
      <div className='main-container'>
        <ReactCSSTransitionGroup
          transitionName='appear'
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
})

export default Main
