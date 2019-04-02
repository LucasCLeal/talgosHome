var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var compression = require("compression");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

app.use(express.static(path.join(__dirname, "src")));

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "src/index.html"));
});

app.get("/", function(req, res, next) {
  res.render("index");
});

module.exports = app;
