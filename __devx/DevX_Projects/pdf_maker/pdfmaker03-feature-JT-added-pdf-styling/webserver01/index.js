const express = require('express');
const app = express();

// Set the static folder
app.use(express.static('public'));

// Define a route
app.get('/', (_, res) => {
    res.sendFile('./public/index.html', { root: __dirname });
  });
  

// Start the server
const PORT = 1234;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

