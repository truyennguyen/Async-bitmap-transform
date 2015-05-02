'use strict';
var fs = require('fs');
var BitmapData = require('./bitmapData');

var createInvertColors = require('./createInvertColorsBitmap');
var createNoiseBitmap = require('./createNoiseBitmap');

//pick one of the transforms above.  You can pass in an optional for the randomcolorsbitmap to adjust the look of the bitmap
var pickTransform = module.exports = exports = function(transform, optional) {

var readBitmapFile = function(filename){
    fs.readFile(filename, function(err, buffer){
        if (err) throw err;
        //Initialize the bitmap data
        var bitmapData = new BitmapData(buffer);
        //Start the bitmap transformations
        pickTransform.beforeTest = buffer[500];
        transform(buffer, bitmapData, optional);
        pickTransform.afterTest = buffer[500];
    });
};
readBitmapFile('./bitmap1.bmp');
};

//pickTransform needs to initalize here for the testing file to work. 
pickTransform(createInvertColors);
pickTransform(createNoiseBitmap, 1000);
