//var McFly = require('../dispatcher/McFly');
var Biff  = require('../dispatcher/Biff');

var articles = [
  //{
  //  1:{
  //  "title": "Titulo uno",
  //  "content": "Alto content amigo"
  //  }
  //},
  //{
  //  2:{
  //  "title": "Titulo dos",
  //  "content": "Alto content amigo. es mas dos que el anterior."
  //  }
  //}
];

var serverArticles = [];

var getArticleById = function (id) {
  return articles[id];
};


var updateArticle = function (article) {
  articles[article.id][article.id + 1].title = article.text;
};

var getServerDBArticles = function (data) {
  serverArticles = data;
};

var ArticleStore = Biff.createStore({
  getArticles: function () {
    return articles;
  },
  getServerArticles: function () {
    return serverArticles;
  }
}, function (payload) {

  if (payload.actionType === 'GET_ARTICLE') {
    getArticleById(payload.id);
    this.emitChange();
  }

  if (payload.actionType === 'UPDATE_ARTICLE') {
    updateArticle(payload.data.article);
    this.emitChange();
  }

  if (payload.actionType === 'GET_ARTICLES_FROM_SERVER') {
    console.log('llegaste a store. comparamos acitontypess', payload);
    getServerDBArticles(payload.data);
    this.emitChange();

  }



});

module.exports = ArticleStore;
