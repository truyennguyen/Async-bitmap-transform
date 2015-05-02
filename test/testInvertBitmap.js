'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var BitmapHeaderInfo = require('../lib/bitmapHeaderInfo');

var inputBuffer = fs.readFileSync('./input_bitmap/bitmap1.bmp');
var outputBuffer = fs.readFileSync('./output_bitmap/invertColor.bmp');
var bitmapHeaderInfo = new BitmapHeaderInfo(inputBuffer);

describe('Invert Color Transform', function(){
	it('should have the same value', function(){
		for(var i = bitmapHeaderInfo.startPaletteArray; i <= bitmapHeaderInfo.endPaletteArray; i++){
			expect(255 - inputBuffer[i]).to.eql(outputBuffer[i]);
		}
	});
});