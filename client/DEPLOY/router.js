module.exports = (function () {
  var React = require('react');
  var render = require('react-dom').render;
  var ReactRouter = require('react-router');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRedirect = ReactRouter.IndexRedirect; 
  var IndexRoute = ReactRouter.IndexRoute;
  var browserHistory = ReactRouter.browserHistory;



  var App = require('./views/app');
  var MasterNav = require('./views/master-nav');
  var News = require('./views/news');
  var Home = require('./views/home');
  var LogIn = require('./views/log-in');

  var ModuleRouter = function () {
    this.routes = (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRedirect to="/home" />
          <Route path="home" component={Home}  />
          <Route path="news" component={News}  />
          <Route path="logIn" component={LogIn}  />
        </Route>
      </Router>
    );
  };

  ModuleRouter.prototype.run = function (mountNode) {
    render(this.routes, mountNode)
  };

  return new ModuleRouter();
})();
