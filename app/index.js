/*
  Focuses
  Independent
  Reusable
  Small
  Testable
*/

var USER_DATA= {
  name: 'Meme man',
  username: 'rayduck',
  image: 'http://d.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=a961599df1d3572c66b794d8bf234f11/0824ab18972bd407964add8978899e510fb30930.jpg'
};

var React = require('react');
var ReactDOM = require('react-dom');

// f(d)=v

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height:100, width:100}} />
  }
});

var ProfileLink = React.createClass({
  render: function(){
    return (
      <div>
      <a href={'https://www.github.com/' + this.props.username}>
        {this.props.username}
        </a>
        </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function(){
    return (
      <div>{this.props.name}</div>
    )
  }
});

var Avatar = React.createClass({
  render: function(){
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA}/>,
  document.getElementById('app')
);
