const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide task title'],
            trim: true,
        },
        description: {
            type: String,
            required: [true, 'Please provide task description'],
            trim: true,
        },
        deadline: {
            type: Date,
            required: [true, 'Please provide a deadline'],
        },
        status: {
            type: String,
            enum: ['Completed', 'Incomplete'],
            default: 'Incomplete',
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Task must belong to a user'],
        },
    },
    {
        timestamps: true,
    }
);

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
