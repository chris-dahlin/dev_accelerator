const express = require('express')
const app = express()

console.log('Server listening on port 3000');

app.get('/', function (req, res) {
const link = '<a href= "/newusers">Sign Up</a>';
    res.send('Hello World')
    res.send(link);
})

app.get('/newusers', function (req, res) {
const home = '<a href= "/"> Sign Up</a>';
    res.send('Please Sign up to create your account')
    res.send(home);
})

app.listen(3000)