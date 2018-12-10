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
        id: "cbc-news"
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
