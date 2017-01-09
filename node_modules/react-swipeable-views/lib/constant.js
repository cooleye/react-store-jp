"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var RESISTANCE_COEF = exports.RESISTANCE_COEF = 0.6;

// This value is closed to what browsers are using internally to
// trigger a native scroll.
var UNCERTAINTY_THRESHOLD = exports.UNCERTAINTY_THRESHOLD = 3; // px