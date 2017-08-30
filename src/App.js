import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      text: '',
    }
  }
  onInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  }
  addTodo = () => {
    const text = this.state.text;
    this.setState({
      todos: [...this.state.todos, text],
      text: '',
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content">
          <div className="input-wrapper">
            <input
              type="text"
              name="todo"
              className="todo-input"
              onChange={this.onInputChange}
              placeholder="type todo..."
              value={this.state.text}
            />
            <button
              onClick={this.addTodo}
              className="todo-btn"
            >
              +
            </button>
          </div>
          <div className="todo-list">
            {
              this.state.todos.map(todo => (
                <div>{todo}</div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
