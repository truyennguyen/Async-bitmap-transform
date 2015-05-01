'use strict';
var fs = require('fs');
var createInvertColors = require('./createInvertColorsBitmap');
var BitmapData = require('./bitmapData');

var readBitmapFile = function(filename){
    fs.readFile(filename, function(err, buffer){
        if (err) throw err;

        //Initialize the bitmap data
        var bitmapData = new BitmapData(buffer);

        //Start the bitmap transformations
        createInvertColors(buffer, bitmapData)
    });
}

readBitmapFile('./bitmap1.bmp');