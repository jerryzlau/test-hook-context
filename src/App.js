import React, { Component } from 'react';
import './App.css';
import List from './components/List.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Hi</p>
        <List />
      </div>
    );
  }
}

export default App;
