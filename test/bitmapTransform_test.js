'use strict';
var fs = require('fs');
var BitmapData = require('../bitmapData');
var createInvertColors = require('../createInvertColorsBitmap');
var createNoiseBitmap = require('../createNoiseBitmap');

var expect = require('chai').expect;
var pickTransform = require('../bitmapTransform');

describe('pickTransform', function() {
	it('before the transform', function() {
		expect(pickTransform.beforeTest).to.eql(0);
		console.log(pickTransform.beforeTest);
	});
	it('after the transform', function() {
		expect(pickTransform.afterTest).to.be.above(0).and.below(256);
		console.log(pickTransform.afterTest);
	});
});