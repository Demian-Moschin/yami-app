var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MasterNav = React.createClass({

  render: function () {
      return (
        <div className="container">
          {this.props.children}
        </div>
      )
  }
});

module.exports = MasterNav;
