var classNames = ('classnames');
var React = require('react');

var ButtonComponent = React.createClass({

    propTypes: {
        className: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        spanClass: React.PropTypes.string
    },
    getButtonProps: function () {
        return {
            className: this.props.className,
            type: this.props.type,
            onClick: this.props.onClick
        };
    },

    getSpanClass: function () {
        var spanClass = {
            'glyphicon': true
        };
        console.log('asdfasdfasfd');
        return classNames(spanClass);
    },

    render: function () {
        return (
            <button {...this.getButtonProps()}>
                <span className={this.getSpanClass}></span>
            </button>
        );
    }

});

module.exports = ButtonComponent;

