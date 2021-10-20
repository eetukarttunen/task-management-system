import "./Task.css";
import { RiCloseCircleLine } from 'react-icons/ri';
import React, { useState, useEffect } from 'react';
const api_base = 'http://localhost:3001';

function App() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	useEffect(() => {
		GetTasks();
	}, []);

	const GetTasks = () => {
		fetch(api_base + '/tasks')
			.then(res => res.json())
			.then(data => setTasks(data))
			.catch((err) => console.error("Error: ", err));
	}
	const addTask = async () => {
		const data = await fetch(api_base + "/task/new", {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify({
				text: newTask
			})
		}).then(res => res.json());

		setTasks([...tasks, data]);

		setNewTask("");
	}

	const deleteTask = async id => {
		const data = await fetch(api_base + '/task/delete/' + id, { method: "DELETE" }).then(res => res.json());

		setTasks(tasks => tasks.filter(task => task._id !== data.result._id));
	}

	return (
    <div className="group">
      <div className="inputGroup">
            <input 
              type="text" 
              onChange={e => setNewTask(e.target.value)} 
              value={newTask} 
              placeholder='Enter a new task'
              name='text'
              className='taskInput'
            />
          <div className='taskButton' onClick={addTask}>Add</div>
      </div>

			<div>
				{tasks.length > 0 ? tasks.map(task => (
					<div 
            className='taskRow' >
            <div>{task.text}</div>
            <div className='icons'>
              <RiCloseCircleLine
                onClick={() => deleteTask(task._id)}
                className='deleteButton'/>
            </div>
          
          </div>
				)) : (
					<p>No tasks added yet</p>
				)}
      </div>



        

    </div>
	);
}

export default App;
