var React = require('react');

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <div className="container">
              <div className="row">
                  <div className="col-lg-12 col-xs-12">
                    <header>
                      <h1>Welcome to this app!</h1>
                    </header>
                  </div>
              </div>
          </div>
        </section>
      </div>
    );
  }
  
});

module.exports = Home;
