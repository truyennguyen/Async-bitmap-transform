'use strict';
var fs = require('fs');
var BitmapHeaderInfo = require('./lib/bitmapHeaderInfo');
var createInvertColors = require('./lib/createInvertColorsBitmap');
var createNoiseBitmap = require('./lib/createNoiseBitmap');

var filename = './input_bitmap/bitmap1.bmp';
var tempBuffer = new Buffer(50000);

//pick one of the transforms above.  You can pass in an optional for the randomcolorsbitmap to adjust the look of the bitmap
var pickTransform = module.exports = exports = function(transform, optional) {
	fs.readFile(filename, function(err, buffer){
		if (err) throw err;

		//Initialize the bitmap header info
		var bitmapHeaderInfo = new BitmapHeaderInfo(buffer);

		//Start the bitmap transformations
		transform(buffer, bitmapHeaderInfo, optional);
	});
};

//pickTransform initialization examples:
pickTransform(createInvertColors);
pickTransform(createNoiseBitmap, 1000);
