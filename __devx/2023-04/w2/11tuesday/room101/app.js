const express = require('express')
const app = express()


app.get('/', function (req, res) {
  res.send('Test')
})
console.log('Server listening on port 3000');
app.listen(3000)