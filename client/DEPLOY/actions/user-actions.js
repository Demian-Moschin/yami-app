var McFly = require('../dispatcher/McFly');

var UserActions = McFly.createActions({
  getUser: function (greet) {
    return {
      actionType: 'GET_USER',
      data: greet
    };
  },

  addUser: function (data) {
    return {
      actionType: 'ADD_USER',
      data: data
    }
  }
});

module.exports = UserActions;
