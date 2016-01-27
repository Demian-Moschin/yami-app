module.exports = (function () {
    var React = require('react');
    var Router = require('react-router');
    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;

    var MasterNav = require('./views/master-nav');
    var List = require('./views/realm-list');
    var Home = require('./views/home');
    var Guilds = require('./views/guilds');
    var CharacterInfo = require('./views/character');

    var ModuleRouter = function () {
        this.routes = (
              <Route handler={MasterNav} path="/" name="app">
                <DefaultRoute  handler={Home} />
                <Route name="home" handler={Home} path="/home"></Route>
                <Route name="realmStatus" handler={List} path="/list"></Route>
                <Route name="guilds" handler={Guilds} path="/guilds"></Route>
                <Route name="characterInfo" handler={CharacterInfo} path="/characterInfo"></Route>
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
