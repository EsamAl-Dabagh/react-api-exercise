import React, { Component } from 'react';
import './App.css';
import News from './News/News'
import Select from "react-select";

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      sources: [],
      chosenSource: {
        id: ""
      }
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
      .catch((error) => console.log(error))
  }

  formOptions() {
    let options = []
    
    this.state.sources.forEach((source) => {
      options.push({ value: source.id, label: source.name });
    });

    return options
  }

  handleChange(selectedOption) {
    this.setState({
      chosenSource: {
        id: selectedOption
      }
    })
  }

  getSource() {
    if(this.state.chosenSource.id !== "") {
      return this.state.chosenSource.id
    } else {
      return "cbc-news"
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <Select options={this.formOptions()} onChange={this.handleChange} />
        <News newsOutlet={this.getSource} />
      </div>
    );
  }
}

export default App;
