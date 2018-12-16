import React, { Component } from 'react';
import Select from "react-select";
import './App.css';
import News from './News/News';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sources: [],
      chosenSource: {
        id: "cbc-news"
      },
      error: false
    }

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/sources?language=en&apiKey=${process.env.REACT_APP_API_NEWSAPI_KEY}`

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          sources: data.sources
        })
      })
      .catch((error) => this.setState({
        error: true
      }));
  }

  formOptions() {
    let options = []
    
    if(!this.state.error) {
      this.state.sources.forEach((source) => {
        options.push({ value: source.id, label: source.name });
      });
    } else {
      options.push({ value: "error", label: "Error retrieving sources"})
    }
    

    return options
  }

  handleChange(selectedOption) {
    this.setState({
      chosenSource: {
        id: selectedOption.value
      }
    })

    this.render()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <Select options={this.formOptions()} onChange={this.handleChange} />
        <News newsOutlet={this.state.chosenSource.id} />
      </div>
    );
  }
}

export default App;
