const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
	text: {
		type: String,
		required: true
	},
    priority: {
        type: String,
        required: false
    },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;