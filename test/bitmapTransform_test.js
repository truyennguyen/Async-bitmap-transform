'use strict';

var fs = require('fs');
var expect = require('chai').expect;
var BitmapHeaderInfo = require('../lib/bitmapHeaderInfo');

var inputBuffer = fs.readFileSync('./input_bitmap/bitmap1.bmp');
var outputBuffer = fs.readFileSync('./output_bitmap/noiseBitmap.bmp');
var bitmapHeaderInfo = new BitmapHeaderInfo(inputBuffer);

describe('Noise Color Transform', function(){
	it('input should not equal output', function(){
		var input = inputBuffer[2000];
		var output = outputBuffer[2000];
		expect(input).to.be.eql(28);
		console.log("input= " + input);
		expect(output).to.be.not.eql(input);
		console.log("output= " + output);
	});
});