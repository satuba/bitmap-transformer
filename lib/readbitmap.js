"use strict";

var fs = require("fs");
var transform = require("./transform").transform;

function readBitmap(filename) {
  fs.readFile(filename, function(err, data) {
    if(err) {
      return console.log(err);
    }
    getHeaderInfo(data);
    transform(data);
  });
}

// see some header information.
function getHeaderInfo(data) {
  var headerInfo = {};
  headerInfo.type = data.toString("utf-8", 0, 2);
  headerInfo.size = data.readInt32LE(2);
  headerInfo.pixels = data.readInt32LE(10);
  headerInfo.paletteSize = data.readUInt32LE(46);
  headerInfo.someColors = data.toString("utf-8", 54, 94);
  console.log(headerInfo);
  return headerInfo;
}

exports.readBitmap = readBitmap;
exports.getHeaderInfo = getHeaderInfo;