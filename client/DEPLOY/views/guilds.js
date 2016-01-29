var React = require('react');
var Guildcomponent = require('./components/guild-component.js');
var MainStoreActions = require('../actions/main-store-actions.js');
var API = require('../API/battle-net.js');


var ListView= React.createClass({

  getInitialState: function () {
    return {
      dataCollection: {}
    };
  },

  updateCollection: function (data) {
    this.setState({
      dataCollection: data
    });
  },

  componentDidMount: function () {
    API.getGuild(this.updateCollection) ;
  },

  render: function () {
    return (
      <div>
        {this.renderList()}
      </div>
    )
  },

  getListProps: function () {
    return {
      dataCollection: this.state.dataCollection,
    }
  },

  renderList: function () {
    return (
    <Guildcomponent {...this.getListProps()} />
    )
  }

});

module.exports = ListView;