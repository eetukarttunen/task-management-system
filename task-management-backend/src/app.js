require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());
app.use(cors());

// If you want to test my task management system, change the MONGO_URL.
mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true, 
	useUnifiedTopology: true })
	.then(() => console.log("Connected to your db"))
	.catch(console.error);

const Task = require('./models/task');

app.get('/', function (req, res) {
    res.send('Resting');
});

app.get('/task', async (req, res) => {
	const tasks = await Task.find();
	res.json(tasks);
});

app.post('/task/newTask', (req, res) => {
	const task = new Task({
		text: req.body.text
	})
	Task.save();
	res.json(task);
});

app.listen(3001, console.log("Listening port: 3000"));