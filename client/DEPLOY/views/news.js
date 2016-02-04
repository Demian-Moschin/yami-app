var actions = require('../actions/article-actions');
var ArticleStore = require('../stores/articles-store');
var React = require('react');

var News = React.createClass({
  mixins: [ArticleStore.mixin],

  getInitialState: function () {
    return{
      articles:  ArticleStore.getArticles()
    };
  },

  storeDidChange: function () {
    console.log('didchange');
    this.setState({
        articles: ArticleStore.getArticles()
      });
  },

	render: function () {
		return (
			<div>
        News are::
				{this.renderList()}
			</div>
		)
	},

	renderList: function () {
      var node = this.state.articles.map(function (article, index) {
        return (
          <div>
            <article>
              Number of article is :....: {article[index+1].title}
              <br/>
              article::
              {article[index+1].content}
            </article>
            <input type="text" placeholder="Update Title" onChange={this.handleInputChange.bind(this, index)} />
          </div>
        );
      }.bind(this));

      return(
        <div>{node}</div>
      );
	},

  handleInputChange: function (index, e) {
    var action = {
      article: {
        id: index,
        text: e.target.value
      },
      actionType: 'UPDATE_ARTICLE'
    };
    actions.updateArticle(action);
  }

});

module.exports = News;
