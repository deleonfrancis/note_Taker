const fs = require("fs");
const path = require("path");


module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
      if (err) throw err;
      return res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", function (req, res) {

    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
      if (err) throw err; 
      var notes = JSON.parse(data)
      console.log(notes); // Update noteSection with notes from the file.
      req.body.id = Math.floor(Math.random()*1000)+1; // random number for the id
      notes.push(req.body); // Add new note to the array. 
      
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
        if (err) throw err;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
          if (err) throw err; 
        return res.json(JSON.parse(data));
      });
    });      
  });
  });

  // app.get("/api/notes/:id", function (req, res) {
  //   res.json(noteSection[req.params.id]);
  // });

  app.delete("/api/notes/:id", function (req, res) {
    console.log(req.params.id);
    // noteSection.splice(req.params.id, 1);
    // updateNotes();
    console.log("Note " + req.params.id + " is deleted.");
    fs.readFile(data);
  });  
}


  function updateNotes() {
    fs.writeFile("./db/db.json", JSON.stringify(noteSection, "\t"), (err) => {
      if (err) throw err;
      return true;
    });
  }
