// Require Express
const express = require("express");

// Require Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// app for express
const app = express();

// Setup port on 3000
const PORT = process.env.PORT || 3000;

// Setup the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Eliminate public folder from running in express.d
app.use(express.static("public"));

// Port Listener
app.listen(PORT, function (req, res) {
  console.log("App listening on PORT: " + PORT);
});
