const express = require('express')
const app = express()
const keypoints = '<body style = "background-color:gray;"> ' +
    '<h1 style = "text-align:center"; >Key Parts of an Express.js Application</h1> ' +

    '<ul style = "color:#E3E3E3;"> ' +

    '<ul>' +
     
    '<li><strong>Middleware:</strong> Middleware functions are functions that can modify the request and response objects, such as adding properties or headers to them, or performing some operation on the data they contain. Middleware functions are called in a specific order, and can be used to handle common tasks such as logging, authentication, error handling, and more.</li> <br> ' +
    
    '<li><strong>Routes:</strong> Routes are used to define the endpoints of your application, and specify how the server should respond to different requests. Express.js allows you to define routes for HTTP methods like GET, POST, PUT, DELETE, etc., and supports parameters and regular expressions in route paths.</li> <br> ' +
    
    '<li><strong>Handlers:</strong> Handlers are functions that are called when a specific route is requested. They are responsible for processing the request and sending a response back to the client. Handlers can be defined inline or as separate functions, and can use middleware to modify the request or response objects.</li> <br> ' +
     
    '<li><strong>Views:</strong> Views are templates that are used to generate HTML pages dynamically. Express.js supports several templating engines, such as EJS, Pug, and Handlebars, which allow you to embed dynamic data into your views.</li> <br> ' +
    
    '<li><strong>Static files:</strong> Express.js can serve static files like images, stylesheets, and client-side JavaScript files, allowing you to create web applications that include both server-side and client-side code.</li> <br> ' +
     
    '<li><strong>Database connectivity:</strong> Express.js is typically used in conjunction with a database system like MongoDB, MySQL, or PostgreSQL. Express.js provides a way to connect to databases and execute queries, making it easy to build database-driven applications.</li> <br> ' +
    '</ul>'


app.get('/', function (req, res) {
  res.send(keypoints)
})
console.log('Server listening on port 3000');
app.listen(3000)


