var MongoClient = require('mongodb').MongoClient;
var googleImage = require('google-images');
var url = require('url');
var express = require('express');
var app = express();
app.listen(process.env.PORT || 8080);
var dbsearches = "mongodb://localhost:27017/searches";

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/", function(req, res){
    
});

app.get("/*", function(req, res, next){
    //sets up json headers
    res.writeHead(200, {"content-type":"application/json"});
    next();
});

app.get("/api/latest/imagesearch/*", function(req, res){
    //Queries the database and returns a list of results.
});

app.get("/api/imagesearch/*", function(req, res){
    //Inserts to the database, makes a request to the API, returns the results
});