"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

/**
 * 乘法
 * @param a number
 * @param b number
 * @returns number
 */
function multiply(a, b) {
  var c = 0,
      d = a.toString(),
      e = b.toString();

  try {
    c += d.split(".")[1].length;
  } catch (f) {}

  try {
    c += e.split(".")[1].length;
  } catch (f) {}

  return Number(d.replace(".", "")) * Number(e.replace(".", "")) / Math.pow(10, c);
}

var _default = {
  /**
   * 加法
   * @param a number
   * @param b number
   * @returns number
   */
  add: function add(a, b) {
    var c, d, e;

    try {
      c = a.toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }

    try {
      d = b.toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }

    return e = Math.pow(10, Math.max(c, d)), (multiply(a, e) + multiply(b, e)) / e;
  },

  /**
   * 减法
   * @param a number
   * @param b number
   * @returns number
   */
  sub: function sub(a, b) {
    var c, d, e;

    try {
      c = a.toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }

    try {
      d = b.toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }

    return e = Math.pow(10, Math.max(c, d)), (multiply(a, e) - multiply(b, e)) / e;
  },
  multiply: multiply,

  /**
   * 除法
   * @param a number
   * @param b number
   * @returns number
   */
  divide: function divide(a, b) {
    var c,
        d,
        e = 0,
        f = 0;

    try {
      e = a.toString().split(".")[1].length;
    } catch (g) {}

    try {
      f = b.toString().split(".")[1].length;
    } catch (g) {}

    return c = Number(a.toString().replace(".", "")), d = Number(b.toString().replace(".", "")), multiply(c / d, Math.pow(10, f - e));
  }
};
exports.default = _default;