// server.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const generateHandler = require('./api/generate');

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Mount the generate API handler correctly
app.post('/api/generate', (req, res) => {
  // Pass the request to our existing handler
  return generateHandler(req, res);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is runnig on http://localhost:${PORT}`);
  console.log(`- Static files served from root directory`);
  console.log(`- API endpoint available at /api/generate`);
});