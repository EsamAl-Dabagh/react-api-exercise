import React, { Component } from 'react';
import './App.css';
import News from './News/News'
import SourceForm from './SourceForm';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newsSource: {
        id: ""
      }
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">News Feed</h1>
        </header>
        <SourceForm />
        <News />
      </div>
    );
  }
}

export default App;
