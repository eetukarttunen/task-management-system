import "./Task.css";
import { RiCloseCircleLine } from 'react-icons/ri';
import React, { useState, useEffect } from 'react';

const api = 'http://localhost:3001';

function TaskList() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");
  	const [value, setValue] = useState("default");

	useEffect(() => {
		GetTasks();
	}, []);

	const GetTasks = () => {
		fetch(api + '/tasks')
			.then(res => res.json())
			.then(data => setTasks(data))
			.catch((err) => console.error("Error: ", err));
	}
	
	const addPriority = (e) => {
		setValue(e.target.value);
	}
	
	const addTask = async () => {
		if (value === "default") {
			alert("Set priority");
		}
		else {
			if (newTask === "") {
				alert("Set text")
			}
			else {
			const data = await fetch(api + "/task/new", {
				method: "POST",
				headers: {
					"Content-Type": "application/json" 
				},
				body: JSON.stringify({
					text: newTask,
					priority: value
				})
			}).then(res => res.json());

			
			if (newTask !== "") {
			setTasks([...tasks, data]);
			}
			setNewTask("");
			setValue("default");
				}	
			}
	}
	const deleteTask = async id => {
		const data = await fetch(api + '/task/delete/' + id, { method: "DELETE" })
    .then(res => res.json());

		setTasks(tasks => tasks.filter(task => task._id !== data.result._id));
	}
	

	return (
    <div className="group">
	<h2>ADD A NEW TASK</h2>
      <div className="inputGroup">
        <input 
            type="text" 
            onChange={e => setNewTask(e.target.value)} 
            value={newTask} 
            placeholder='Task name'
            name='text'
            className='taskInput'
        />
        <select defaultValue="default" value={value} onChange={addPriority} id="framework">
            <option value="default" disabled hidden>Priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option> 
        </select>
    	<div className='taskButton' onClick={addTask}>Add</div>
          
      </div>
		<div>{tasks.length > 0 ? tasks.map(task => (
			<div className={task.priority}>
				<div>{task.text}</div>
				<div className='icons'>
				<RiCloseCircleLine
					onClick={() => deleteTask(task._id)}
					className='deleteButton'/>
				</div>
          
          </div>
				)) : (
					<p style={{"color": "#7583c4"}}>No tasks added yet</p>
				)}
      </div>
    </div>
	);
}

export default TaskList;
