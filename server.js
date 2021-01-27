// Require Express
const express = require("express");

// app for express
const app = express();

// Setup port on 3000
const PORT = process.env.PORT || 8080;

// Setup the Express app to handle data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Eliminate public folder from running in express.d
app.use(express.static("public"));

// Require Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Port Listener
app.listen(PORT, function (req, res) {
  console.log("Server is listening on PORT: " + PORT);
});
