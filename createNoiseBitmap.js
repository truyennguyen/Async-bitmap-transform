'use strict';

var fs = require('fs');
var defaultNum = 400;

module.exports = function(buffer, bitmapData, optional){
	//modifies both the color palette and the pixel array values, creating a random bitmap
        for(var i = bitmapData.startPaletteArray; i <= bitmapData.endPaletteArray; i++){
            buffer[i] += (optional? (i*Math.floor(Math.random() * optional)) : i*defaultNum);
        }

        for (var j = bitmapData.endPaletteArray; j <= bitmapData.endPixelArray; j++) {
             buffer[j] += (optional? (j*Math.floor(Math.random() * optional)) : j*defaultNum);
        }
	//Write buffer to the new bitmap file
	fs.writeFile('./noiseBitmap.bmp', buffer);
};
