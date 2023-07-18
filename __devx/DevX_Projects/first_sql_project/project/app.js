const express = require("express");
const mysql = require("mysql");
const app = express();

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "your_mysql_username",
  password: "your_mysql_password",
  database: "your_database_name",
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to the MySQL server");
});

// Create a table to store the first name
connection.query(
  `CREATE TABLE IF NOT EXISTS names (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255)
  )`,
  (err) => {
    if (err) throw err;
    console.log("Table created or already exists");
  }
);

// Middleware to parse request bodies
app.use(express.urlencoded({ extended: true }));

// Route to handle the form submission
app.post("/submit", (req, res) => {
  const firstName = req.body.firstName;
  const query = "INSERT INTO names (first_name) VALUES (?)";
  connection.query(query, [firstName], (err) => {
    if (err) throw err;
    res.send("First name stored successfully");
  });
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
