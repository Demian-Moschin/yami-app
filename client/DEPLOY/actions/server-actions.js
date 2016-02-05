var McFly = require('../dispatcher/McFly');

var ServerActions = McFly.createActions({
  getArticles: function (data) {
    return {
      actionType: 'GET_ARTICLES_FROM_SERVER',
      data: data
    };
  }
});

module.exports = ServerActions;
