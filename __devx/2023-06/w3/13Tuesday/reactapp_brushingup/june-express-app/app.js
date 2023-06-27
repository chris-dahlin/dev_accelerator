const express = require("express");
const app = express();

// Define your routes and server logic here

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
