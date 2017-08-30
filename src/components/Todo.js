import React from 'react';

const Todo = props => (
  <div className="todo">
    <p
      className={`todo-text ${props.todo.complete ? 'complete' : ''}`}
    >
      {props.todo.text}
    </p>
    <div className="checkbox-wrapper">
      <input
        type="checkbox"
        name="complete"
        className="todo-checkbox"
      />
    </div>
    <button
      className="remove-btn"
      onClick={props.onRemove}
    >
      x
    </button>
  </div>
);

export default Todo
