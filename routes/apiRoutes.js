const { json } = require("express");
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
      notes.push(req.body); // Adds the new note to the array. 
      
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), function (err) {
        if (err) throw err;
        fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
          if (err) throw err; 
        return res.json(JSON.parse(data));
      });
    });      
  });
  });

  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf-8", function (err, data) {
      if (err) {
        console.log(err);
      } 
      else {
        objArray = JSON.parse(data)
        const id = req.params.id;
        const index = objArray.findIndex(i => i.id == id);
        objArray.splice(index, 1);
        res.json(objArray)
        
        fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(objArray), "utf-8", function (err) {
          if (err) {console.log(err);
          return
        }
      });
    }
  });      
});
}
