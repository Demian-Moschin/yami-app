var React 		= require('react');
var MasterNav 	= require('./master-nav');

let App = React.createClass({
  render: function () {
    return (
    	<div className="container">
      		<MasterNav />
    		<h1> App</h1>
    		{this.props.children}
		</div>
    );
  }

});

module.exports = App;