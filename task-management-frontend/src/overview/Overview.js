
import { RiCloseCircleLine } from 'react-icons/ri';
import React, { useState, useEffect } from 'react';

const api = 'http://localhost:3001';

function Overview() {
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
    <div>
      <h2>OVERVIEW</h2>
	  <h3>HIGH PRIORITY TASKS</h3>
	  <div>{tasks.length > 0 ? tasks.map(task => (
			<div>
				

				{task.priority == 'high' &&
				<div className={task.priority}>{task.text} 
					<RiCloseCircleLine
						onClick={() => deleteTask(task._id)}
						className='deleteButton'/>
				</div>
				}
          </div>
				)) : (
					<p style={{"color": "#7583c4"}}>No tasks added yet</p>
				)}
      </div>
	  <h3>MEDIUM PRIORITY TASKS</h3>
	  <div>{tasks.length > 0 ? tasks.map(task => (
			<div>
				

				{task.priority == 'medium' &&
				<div className={task.priority}>{task.text} 
					<RiCloseCircleLine
						onClick={() => deleteTask(task._id)}
						className='deleteButton'/>
				</div>
				}
          </div>
				)) : (
					<p style={{"color": "#7583c4"}}>No tasks added yet</p>
				)}
      </div>

	  <h3>LOW PRIORITY TASKS</h3>
	  <div>{tasks.length > 0 ? tasks.map(task => (
			<div>
				

				{task.priority == 'low' &&
				<div className={task.priority}>{task.text} 
					<RiCloseCircleLine
						onClick={() => deleteTask(task._id)}
						className='deleteButton'/>
			</div>
				}
          </div>
				)) : (
					<p style={{"color": "#7583c4"}}>No tasks added yet</p>
				)}
      </div>
	  
    </div>
	);
}

export default Overview;
