import React, { Component } from 'react';
import NewSingle from './NewSingle';
import Error from '../Error';

class News extends Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      source: this.props.newsOutlet,
      error: false
    }
  }

  componentDidMount() {
    this.getNews()
  }

  componentDidUpdate(prevProps) {
    if(prevProps.newsOutlet !== this.props.newsOutlet) {
      this.setState({
        source: this.props.newsOutlet
      })
    }
    this.getNews();
  }

  getNews() {
    const url = `https://newsapi.org/v2/everything?sources=${this.state.source}&apiKey=${process.env.REACT_APP_API_NEWSAPI_KEY}`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles
        })
      })
      .catch((error) => this.setState({
        error: true
      }));
  }

  renderItems() {
    if(!this.state.error) {
      return this.state.news.map( (item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      return <Error />
    }
    
  }

  render() {
    return (
      <div className="row">
        {this.renderItems()}
      </div>
    )
  }
}

export default News;
