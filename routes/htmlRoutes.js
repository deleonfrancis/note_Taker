const path = require("path");

module.exports = function (app) {
  // route for notes
  app.get("/notes", function (req, res) {
    // retrieves the note html file
    res.sendFile(path.join(__dirname, "../public/notes.html"));
   });
    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
   });  
};
