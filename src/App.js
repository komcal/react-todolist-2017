import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <input
            type="text"
            name="todo"
            className="todo-input"
          />
        </div>
      </div>
    );
  }
}

export default App;
