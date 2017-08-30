import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';
import Todo from './components/Todo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
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
    const todo = {
      text: text,
      complete: false,
    };
    const newTodos = [...this.state.todos, todo];
    this.setState({
      todos: newTodos,
      text: '',
    })
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }
  onRemove = index => () => {
    const newTodos = [
      ...this.state.todos.slice(0, index),
      ...this.state.todos.slice(index + 1),
    ];
    this.setState({
      todos: newTodos
    })
    localStorage.setItem('todos', JSON.stringify(newTodos));
  }
  onCheck = index => (e) => {
    const todos = this.state.todos;
    todos[index].complete = e.target.checked;
    this.setState({
      todos: todos,
    })
    localStorage.setItem('todos', JSON.stringify(todos));
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
              this.state.todos.map((todo, index) => (
                <Todo
                  todo={todo}
                  onRemove={this.onRemove(index)}
                  onCheck={this.onCheck(index)}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
