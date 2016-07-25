let React = require('react');
let RouterContext = require('react-router').RouterContext;


let LogIn = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    return{
      showModal: true
    }
  },

  render: function () {
    return (
      <div></div>
    );
  },

  showModal: function () {
      return true
  },

  close: function () {
    this.setState({
      showModal: false
    });
    this.context.router.push('/');
  },

  open: function () {
    return (this.props.showModal) ? this.props.showModal : this.state.showModal;
  }
});

module.exports = LogIn;


