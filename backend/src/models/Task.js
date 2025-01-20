const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  assignedTo: { type: String, required: true },
  status: { type: String, enum: ['Not Started', 'In Progress', 'Completed'], default: 'Not Started' },
  dueDate: { type: Date, required: true },
  priority: { type: String, enum: ['Low', 'Normal', 'High'], default: 'Normal' },
  description: { type: String, required: true },
});

module.exports = mongoose.model('Task', TaskSchema);

