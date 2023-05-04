const express = require('express');
const app = express();

 app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
    <form method="POST" action="/submit">
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName">
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post('/submit', (req, res) => {
  const firstName = req.body.firstName;
  res.send(`Welcome, ${firstName}!`);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});