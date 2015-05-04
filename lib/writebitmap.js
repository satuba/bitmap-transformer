"use strict";

var fs = require("fs");
var transform = require("./transform").transform;

function createBitmap(newData) {
  var newBitmap = new Buffer(newData);
  //creates a new file from newBitmap data.
  fs.writeFile("another-bitmap.bmp", newBitmap, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("File successfully created!");
  });
}

exports.createBitmap = createBitmap;