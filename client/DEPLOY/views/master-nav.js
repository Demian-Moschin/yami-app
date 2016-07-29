var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MasterNav = React.createClass({

  render: function () {
      return (
        <div>
			  <nav>
			    <div className="nav-wrapper">
			      <a href="#" className="brand-logo">Logo</a>
			      <ul id="nav-mobile" className="right hide-on-med-and-down">
			        <li><a href="sass.html">Sass</a></li>
			        <li><a href="badges.html">Components</a></li>
			        <li className="active"><a href="collapsible.html">JavaScript</a></li>
			      </ul>
			    </div>
			  </nav>
			  {this.props.children}
	    </div>
      )
  }
});

module.exports = MasterNav;
