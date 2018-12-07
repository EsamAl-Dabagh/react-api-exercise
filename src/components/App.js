import React, { Component } from 'react';
import './App.css';
import News from './News/News'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>News Feed</h1>
        </header>

        <News />
      </div>
    );
  }
}

export default App;
