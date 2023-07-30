const express = require("express");
const bodyParser = require("bodyParser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "dev_user",
  password: "123456",
  database: "CRUDDatabase",
});

app.use(cors);
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res) => {
  const movieName = req.body.movieName;
  const movieReview = req.body.movieReview;

  const sqlInsert =
    "INSERT INTO movie_reviews (movieName, movieReview) VALUES ?,?";
  db.query(sqlInsert, [movieName, movieReview], (err, result) => {
    console.log(result);
  });
});

// app.get("/", (req, res) => {});

// app.get("/", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO movie_reviews (movieName, movieReview) VALUES ('Inception', 'Good movie');";

//   db.query(sqlInsert, (err, result) => {
//     if (err != null) console.log(err.message);
//     res.send("Hello Chris");
//   });
// });

app.listen(3001, () => {
  console.log("running on port 3001");
});
