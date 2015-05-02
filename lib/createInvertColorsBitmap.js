'use strict';

var fs = require('fs');

module.exports = function(buffer, bitmapData){
	//Invert the color by substract every color value from the max value(255)
	for(var i = bitmapData.startPaletteArray; i <= bitmapData.endPaletteArray; i++){
		buffer[i] = 255 - buffer[i];
	}
	//Write buffer to the new bitmap file
	fs.writeFile('./output_bitmap/invertColor.bmp', buffer);
};