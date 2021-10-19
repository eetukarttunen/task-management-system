import React, { useState, useEffect, useRef } from 'react';
function TaskForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input
    });
    setInput('');
  };

  return (
    <form className="inputGroup" onSubmit={handleSubmit}>
        <>
          <input
            placeholder='Lisää tehtävä'
            value={input}
            onChange={handleChange}
            name='text'
            className='taskInput'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='taskButton'>
            Lisää
          </button>
        </>
    </form>
  );
}

export default TaskForm;
