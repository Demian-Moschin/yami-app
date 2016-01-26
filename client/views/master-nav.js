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
                    <div className="navbar-brand">
                      <Link to="home">Home</Link>
                    </div>
                    <div className="navbar-right">
                      <ul className="nav navbar-nav">
                          <li><Link to="realmStatus">Realm Status</Link></li>
                      </ul>
                      <ul className="nav navbar-nav">
                          <li><Link to="guilds">Guilds</Link></li>
                      </ul>
                      <ul className="nav navbar-nav">
                        <li><Link to="characterInfo">Character Info</Link></li>
                      </ul>
                    </div>
                  </div>
              </nav>
            </header>
          <RouteHandler />
        </div>
      )
  }
});

module.exports = MasterNav;
