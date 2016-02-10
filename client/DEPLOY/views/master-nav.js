var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;


var MasterNav = React.createClass({

  render: function () {
      return (

        <div>
            <header>
              <nav className="navbar navbar-inverse" role="navigation">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <Link to="/home" className="navbar-brand">Home</Link>
                    </div>
                    <ul className="nav navbar-nav">
                      <li  className="active"><Link to="/news">News</Link></li>
                      <li><Link to="/students">Students</Link></li>
                      <li>News</li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                      <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                  </div>
              </nav>
            </header>
          {this.props.children}
        </div>
      )
  }
});

module.exports = MasterNav;
