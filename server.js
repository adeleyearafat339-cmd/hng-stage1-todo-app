const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Temporary in-memory storage for your tasks and notes
let tasks = [];

// 1. Test route
app.get('/', (req, res) => {
  res.send('HNG Stage 1 To-Do API is running live!');
});

// 2. Get all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// 3. Create a new task (with notes & priority)
app.post('/api/tasks', (req, res) => {
  const { title, note, priority } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Task title is required' });
  }
  const newTask = {
    id: Date.now().toString(),
    title,
    note: note || '',
    priority: priority || 'Medium',
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// 4. Delete a task
app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id !== id);
  res.json({ message: 'Task deleted successfully' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});