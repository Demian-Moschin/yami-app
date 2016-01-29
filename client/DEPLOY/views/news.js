var React = require('react');

var RealmListView = React.createClass({

	getInitialState: function () {
		return {
			newsCollection: []
		};
	},

	updateCollection: function (data) {
		this.setState({
			newsCollection: data
		});
	},

	componentDidMount: function () {
		//add conection to API.
		//API.getRealm(this.updateCollection);
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
