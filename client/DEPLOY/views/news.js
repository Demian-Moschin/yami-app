var actions = require('../actions/article-actions');
var serverActions = require('../actions/server-actions');
var ArticleStore = require('../stores/articles-store');
var React = require('react');

var News = React.createClass({
  mixins: [ArticleStore.mixin],

  getInitialState: function () {
    return{
      //articles:  ArticleStore.getArticles()
      serverArticles: [],
      expanded: false
    };
  },

  componentDidMount: function () {
    serverActions.getArticles();
  },

  storeDidChange: function () {
    console.log('didchange');
    this.setState({
        //articles: ArticleStore.getArticles()
        serverArticles: ArticleStore.getServerArticles()
      });
  },

	render: function () {
		return (
			<div>
          <div>
            <h2>fade in title!!!!</h2>
            {this.renderServerNews()}
          </div>
        <button onClick={this.handleFadeClick}>Click!</button>
			</div>
		)
	},

  handleFadeClick: function () {
    this.setState({
      expanded: !(this.state.expanded)
    });
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

  renderServerNews: function () {
    var node = this.state.serverArticles.map(function (student, index) {
      return (
        <div key={index}>
          <h3>Studens  nro:  {student.id}</h3>
          <p>{student.lastName}</p><p>{student.name}</p>
          <p>{student.DOB}</p>
        </div>
      );
    });

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
  },

  handleButtonClick: function () {

  }

});

module.exports = News;
