var McFly = require('../dispatcher/McFly');

var ArticleActions = McFly.createActions({
  getArticles: function (data) {
    return {
      actionType: 'GET_ARTICLES',
      data: data
    };
  },

  updateArticle: function (data) {
    return {
      actionType: 'UPDATE_ARTICLE',
      data: data
    }
  }
});

module.exports = ArticleActions;
