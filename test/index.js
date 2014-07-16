'use strict';

var lexicon = require('../');
var test = require('tap').test;

test('get "relieved face"', function (t) {
  t.equal(lexicon[9], '😌');
  t.end();
});
