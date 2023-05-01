const express = require('express')
const app = express()

console.log("testing 123");

app.get('/', function (req, res) {

    res.send('Hello World')
})

app.listen(3000)