const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

// Initialize the express app
const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());
app.use('/api/tasks', taskRoutes);

// MongoDB connection
mongoose
  .connect('mongodb://localhost:27017/todolist') // Removed deprecated options
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
