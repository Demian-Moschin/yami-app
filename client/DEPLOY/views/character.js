var React = require('react');
var API = require('../API/battle-net.js');
var CharacterComponent = require('../components/character-info.js');


var CharacterView= React.createClass({

    getInitialState: function () {
        return {
            characterInfo: [],
            infoVisible: false
        };
        //API.getCharacterProfile(this.updateCollection);
    },

    getCharacterInfo: function () {
        return true;
    },

    updateCollection: function (data) {
        this.setState({
            characterInfo: data
        });
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
            characterInfo: this.state.characterInfo,
            infoVisible: this.state.infoVisible
        }
    },

    renderList: function () {
        return (
            <CharacterComponent {...this.getListProps()} />
        )
    }

});

module.exports = CharacterView;