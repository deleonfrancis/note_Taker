// Require Express
const express = require("express");

// Require Routes
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// app for express
const app = express();

// Setup port on 3000
const PORT = process.env.PORT || 3000;

// Port Listener
app.listen(PORT, function (req, res) {
  console.log("App listening on PORT: " + PORT);
});
