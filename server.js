//sexy restaurant app
var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [];

app.get("/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
});

app.get("/api/tables/:table", function(req, res) {
    var chosen = req.params.table;

    console.log(chosen);

    for (var i = 0; i < tables.length; i++) {
        if (chosen === tables[i].routeName) {
        return res.json(tables[i]);
        }
    }

    return res.json(false);
    });

    app.post("/api/tables", function(req, res) {

        var newtable = req.body;
        console.log(newtable);
        // newtable.routeName = newtable.name.replace(/\s+/g, "").toLowerCase();

        tables.push(newtable);
      
        res.json(newtable);
       
      });

      app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
      });