// Importing the express module
const express = require('express');

// Creating an instance of the express application
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Define another route
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Greetings from the Express API!' });
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Path: package.json