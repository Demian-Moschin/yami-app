var classnames = require('classnames');
var React = require('react');

var ButtonComponent = React.createClass({

    propTypes: {
        type: React.PropTypes.string.isRequired,
    },

    getButtonProps: function () {

        return {
            className: this.getClass(),
            type: this.props.type,
            onClick: this.handleClick
        };
    },

    getSpanClass: function () {
        var classes = {
            'glyphicon-pencil': true
        };

        return classnames(classes);
    },

    render: function () {

        return (
            <button {...this.getButtonProps()}>
                <span className={this.getSpanClass()}></span>
            </button>
        );
    },

    getClass: function () {
        var classes = (this.props.className)? this.props.className : null;

        return classes;
    },

    handleClick: function () {

        if(this.props.onClick) {
            this.props.onClick()
        }
    }
    

});

module.exports = ButtonComponent;
