const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
// Use the body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the index.html file when the user navigates to the root URL
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle form submissions
app.post('/', (req, res) => {
  const name = req.body.name;
  res.send(`Welcome, ${name}!`);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});