var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listSongs', function (req, res) {
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var song = {
    "song6" : {
       "song" : "Cancer",
       "artist" : "My Chemical Romance",
       "genre" : "Alternative Rock Emo pop post hardcore punk rock hard rockr",
       "link" : "https://www.youtube.com/watch?v=wc2s9skF_58",
       "id": "6"
    }
 }
 
 app.post('/addSongs', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song6"] = song["song6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 app.get('/:id', function (req, res) {
    // First read existing users.
    fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["song" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })

 var id = 2;

app.delete('/deleteSongs', function (req, res) {
   // First read existing users.
   fs.readFile( __dirname + "/" + "songs.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["song" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})