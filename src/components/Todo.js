import React from 'react';

const Todo = props => (
  <div className="todo">
    <p className="todo-text">{props.text}</p>
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        name="complete"
        className="todo-checkbox"
      />
    </div>
    <button
      className="remove-btn"
    >
      x
    </button>
  </div>
);

export default Todo
