'use strict';

var Howler = undefined;

if (typeof window !== 'undefined') {
  Howler = require('howler');
}

module.exports = Howler;