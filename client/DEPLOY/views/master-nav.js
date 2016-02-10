var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var MasterNav = React.createClass({

  render: function () {
      return (

        <div>
            <header>
              <nav className="navbar navbar-inverse" role="navigation">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <Link to="home" className="navbar-brand">Home</Link>
                    </div>
                    <ul className="nav navbar-nav">
                      <li  className="active"><a href="#">Page 1</a></li>
                      <li><a href="#">Page 2</a></li>
                      <li><a href="#">Page 3</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                  </div>
              </nav>
            </header>
          <RouteHandler />
        </div>
      )
  }
});

module.exports = MasterNav;
