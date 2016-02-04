var McFly = require('../dispatcher/McFly');



var getArticleById = function (id) {
  return articles[id];
};


var updateArticle = function (article) {
  articles[article.id][article.id + 1].title = article.text;
};

var ArticleStore = McFly.createStore({
  getArticles: function () {
    return articles;
  }
}, function (payload) {

  if (payload.actionType === 'GET_ARTICLE') {
    getArticleById(payload.id);
    ArticleStore.emitChange();
  }

  if (payload.actionType === 'UPDATE_ARTICLE') {
    updateArticle(payload.data.article);
    ArticleStore.emitChange();
  }

});

module.exports = ArticleStore;
