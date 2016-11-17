var React= require('react');

var Main = React.createClass({
  render: function(){
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }
});
//class is reserved so use className

module.exports = Main;
