var React = require('react');
var RealmList = require('../components/realm-list.js');
var API = require('../API/battle-net.js');

var RealmListView = React.createClass({

    getInitialState: function () {
        return {
            realmCollection: []
        };
    },

    updateCollection: function (data) {
        this.setState({
            realmCollection: data
        });
    },

    componentDidMount: function () {
        API.getRealm(this.updateCollection);
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
            realmCollection: this.state.realmCollection,
        }
    },

    renderList: function () {
        return (
            <RealmList {...this.getListProps()} />
        )
    }

});

module.exports = RealmListView;
