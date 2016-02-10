//var McFly = require('../dispatcher/McFly');//we no longer use mcfly, because of the need for Promises in async calls
var Biff  = require('../dispatcher/Biff');
var WebAPI = require('../WebAPI UTILS/LocalAPI');

var ServerActions = Biff.createActions({

  getArticles: function () {
    return WebAPI.getArticlesFromFile(function (data) {
      this.dispatch(
        {
          actionType: 'GET_ARTICLES_FROM_SERVER',
          data: data
        });

    }.bind(this));
  }

});//end createActions

module.exports = ServerActions;
