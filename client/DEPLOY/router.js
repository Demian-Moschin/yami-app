module.exports = (function () {
  var React = require('react');
  var render = require('react-dom');
  var ReactRouter = require('react-router');
  var Router = ReactRouter.Router;
  var Route = ReactRouter.Route;
  var IndexRoute = ReactRouter.IndexRoute;




  var MasterNav = require('./views/master-nav');
  var News = require('./views/news');
  var Home = require('./views/home');

  var ModuleRouter = function () {
    this.routes = (
      <Route path="/"  component={MasterNav}>
        <IndexRoute  handler={Home} />
        <Route name="home" component={Home} path="home"></Route>
        <Route name="news" component={News} path="home"></Route>
      </Route>
    );
  };

  ModuleRouter.prototype.run = function (mountNode) {
    render(<Router routes={this.routes}/>, mountNode)
  };


  return new ModuleRouter();
})();
