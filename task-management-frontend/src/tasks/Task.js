import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';


const Task = ({ todos, completeTodo, removeTodo }) => {

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todoRow complete' : 'todoRow'}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='deleteButton'
        />
      </div>
    </div>
  ));
};

export default Task;
