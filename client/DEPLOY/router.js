module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var MasterNav = require('./views/master-nav');
    var Home = require('./views/home');

    var ModuleRouter = function () {
        this.routes = (
              <Route handler={MasterNav} path="/" name="app">
                <DefaultRoute  handler={Home} />
                <Route name="home" handler={Home} path="/home"></Route>
              </Route>
        );
    };

    ModuleRouter.prototype.run = function (mountElement) {
        Router.run(this.routes, function (Root) {
            React.render(<Root />, mountElement);
        });
    };
    return new ModuleRouter();
})();
