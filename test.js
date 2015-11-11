'use strict';
var assert = require('assert');
var cmykRgb = require('./index.js');

(function test(){
	// Category 1 : Numbers in cmyk array
	var rgb = cmykRgb([0,0,0,0]);
	assert.strictEqual(rgb[0], 255);
	assert.strictEqual(rgb[1], 255);
	assert.strictEqual(rgb[2], 255);

	// Category 2 : String in cmyk array
	var rgb = cmykRgb(['0.5', '0.3', '0.6', '0']);
	assert.strictEqual(rgb[0], 128);
	assert.strictEqual(rgb[1], 179);
	assert.strictEqual(rgb[2], 102);

	// Category 3 : greater than 1
	var rgb = cmykRgb([12, 13, 14, 15]);
	assert.strictEqual(rgb[0], 0);
	assert.strictEqual(rgb[1], 0);
	assert.strictEqual(rgb[2], 0);

	// Category 4 : less than 0
	var rgb = cmykRgb([-12, 13, -14, 0.5]);
	assert.strictEqual(rgb[0], 128);
	assert.strictEqual(rgb[1], 0);
	assert.strictEqual(rgb[2], 128);
})();