var McFly = require('../dispatcher/McFly');
var _ = require('lodash');

var UserStore = function () {
  this.users =  [];
};

UserStore.prototype.setInitialState = function (users) {
  this.users = users;
};

UserStore.prototype.getUsers = function () {
  return this.users;
};

UserStore.prototype.addUser = function (payload) {

  if(payload.data.user){
    this.users.push(payload.data.user);
  }
};

UserStore.prototype.deleteUser = function (userId) {
  _.remove(this.users, { id: userId });
};

var UserStoreModule = McFly.createStore(new UserStore(),
  function (payload) {
      switch (payload.actionType) {
          case 'RECEIVE_USERS':
            setInitialState = payload.users;
            emitChange();
            break;
          default:
      }

  }
);

module.exports = UserStoreModule;
