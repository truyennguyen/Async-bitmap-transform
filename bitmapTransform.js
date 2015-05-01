'use strict';
var fs = require('fs');

var readBitmapFile = function(filename){
    fs.readFile(filename, function(err, buffer){
        if (err) throw err;

        console.log(buffer[10]);

        var sizeBitmapFile = buffer.readUInt32LE(2);
        var startPixelsArray = buffer.readUInt32LE(10);
        var numColorsInPalete = buffer.readUInt32LE(46);

        var startPaletteArray = startPixelsArray - (numColorsInPalete*4);

        console.log(sizeBitmapFile);
        console.log(startPixelsArray);
        console.log(numColorsInPalete);

        //for(var i = startPixelsArray; i <= startPixelsArray + numColorsInPalete; i++){
        for(var i = startPaletteArray; i <= startPixelsArray; i++){
            buffer[i] = 255 - buffer[i];
        }

        fs.writeFile('./invertColor.bmp', buffer);
    });
}

readBitmapFile('./bitmap1.bmp');