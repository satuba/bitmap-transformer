// "use strict";

// var fs = require("fs");

// function transformer(){
// 	for(var i=0; i<stringBitmap.length; i++){
// 		stringBitmap[i]
// 	}
// 	console.log("transformer function");
// }


// function readBitmap(filename){
// 	//read file into a buffer (data is the buffer)
// 	fs.readFile(filename, function(err, data) {
// 		if(err) {
// 			return console.log(err);
// 		}
// 	 	var header = data.toString("utf-8", 0, 2);
// 	 	// stringBitmap = stringBitmap.split("");
// 		// console.log(stringBitmap.length);
// 		console.log(header);
// 		//return stringBitmap;

// 	});
// }
// readBitmap("./bitmap1.bmp");

// exports.readBitmap = readBitmap;

// fs.readFile("../bitmap1.bmp", function(err, data){
// 	if(err)
// 		return console.log(err);
// 	var headerField = data.toString("utf-8", 0, 2);
// 	console.log(headerField);
// 	var colorPalette = data.toString("utf-8", 54, 200);
// 	console.log(colorPalette);
// 	data.readUInt16BE(1);
// });

"use strict";

var fs = require("fs");
var transform = require("./transform").transform;

function readBitmap(filename){
	fs.readFile(filename, function(err, data){
		//data is the buffer
		if(err){
			return console.log(err);
		}
		getHeaderInfo(data);
    transform(data);
	});
}

// see some header information.
function getHeaderInfo(data){
	var headerInfo = {};
	headerInfo.type = data.toString("utf-8", 0, 2);
	headerInfo.size = data.readInt32LE(2);
	headerInfo.pixels = data.readInt32LE(10);
	headerInfo.paletteSize = data.readUInt32LE(46);
	//someColors lets you browse the first 40 of the color palette.
	headerInfo.someColors = data.toString("utf-8", 54, 94);
	console.log(headerInfo);
}

exports.readBitmap = readBitmap;