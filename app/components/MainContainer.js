var React = require('react')
var styles = require('../styles')

function MainContainer (props) {
  return (
    <div className='jumbotron col-sm-12 text-center' style={styles.transparentBg}>
      {props.children}
    </div>
  )
}

MainContainer.propTypes = {
  children: React.PropTypes.array.isRequired
}

module.exports = MainContainer
