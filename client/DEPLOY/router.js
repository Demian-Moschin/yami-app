module.exports = (function () {
  var React = require('react');
  var render = require('react-dom').render;
  var ReactRouter = require('react-router');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;
  var hashHistory = ReactRouter.hashHistory;




  var MasterNav = require('./views/master-nav');
  var News = require('./views/news');
  var Home = require('./views/home');

  var ModuleRouter = function () {
    this.routes = (
      <Router history={hashHistory}>
        <Route path="/"  component={MasterNav}>
          <Route path="home"  component={Home}  />
          <Route path="news"  component={News}  />
          <Route path="students"  component={Home}  />
        </Route>
      </Router>
    );
  };

  ModuleRouter.prototype.run = function (mountNode) {
    render(this.routes, mountNode)
  };

  return new ModuleRouter();
})();
