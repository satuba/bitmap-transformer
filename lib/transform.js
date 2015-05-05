"use strict";

var readbitmap = require("./readbitmap").readBitmap;
var createBitmap = require("./writebitmap").createBitmap;

function transform(data) {
  var newData = [];
  //change data into changeable format.
  for(var i = 0; i < data.length; i++) {
    data[i] = data.readUInt8(i);
    newData.push(data[i]);
  }
  //change color palette values making the new image SO pretty and unique.
  for (var j = 54; j < newData.length; j++) {
    if(newData[j] > 210) {
      newData[j] = 252;
    }
    if(newData[j] % 2) {
      newData[j] = Math.floor(Math.random() * 255);
    }
    newData[j] = newData[j] / 2;    
  }
  createBitmap(newData);
}

exports.transform = transform;