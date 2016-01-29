var React = require('react');
var _ = require('lodash');

// Component
var Input = React.createClass({

  getInitialState: function () {
    var initialState = {
        value: ''
    };

    if ((_.isUndefined(this.props.value))) {
        initialState.value = this.props.defaultValue
    }
    return initialState;
  },

  render: function () {
    return (
        <input {...this.getProps()} />
    );
  },

  getProps: function () {
    return {
        className: 'form-control',
        type: 'text',
        required: true,
        placeholder: this.props.placeholder,
        ref: this.props.ref,
        onChange: this.props.onChange
    };
  }

});

module.exports = Input;
