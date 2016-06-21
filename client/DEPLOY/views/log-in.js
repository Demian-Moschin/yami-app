let React = require('react');
let Modal = require('react-bootstrap').Modal;
let Button = require('react-bootstrap').Button;
let RouterContext = require('react-router').RouterContext;


let LogIn = React.createClass({

  getInitialState: function () {
    return{
      showModal: true
    }
  },

  render: function () {
    return (
      <Modal show={this.state.showModal} onHide={this.close} onExited={this.close}>
        <Modal.Header>
          <h3>Header baby!</h3>
        </Modal.Header>
        <Modal.Body>
            tHIS IS THE BODY
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>

      </Modal>
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


