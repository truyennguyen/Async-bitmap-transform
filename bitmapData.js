'use strict';

module.exports = function(buffer){
	this.numColorsInPalette = buffer.readUInt32LE(46);
	this.endPaletteArray = buffer.readUInt32LE(10);
	this.startPaletteArray = this.endPaletteArray - (this.numColorsInPalette*4);
	this.endPixelArray = buffer.readUInt32LE(2);
};