"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

/**
 * 字符串操作
 *
 * isNull - 空校验
 * isNumber - 数字校验
 * filterNull - 空数据过滤
 * convertFenToYuan - 分转化成元
 * convertYuanToFen - 元转化为分
 */
var StringUtil = function StringUtil() {
  var _this = this;

  (0, _classCallCheck2.default)(this, StringUtil);

  /**
   * 空校验
   * 空数据集合：undefined,'undefined',null,'null','(null)','NaN',''
   *
   * @param {String} str - 字符串
   * @return {Boolean} true-空，false-非空
   * @example
   *
   * isNull();
   * // => true
   *
   * isNull('undefined');
   * // => true
   */
  this.isNull = function (str) {
    if (typeof str === 'undefined' || str === 'undefined' || str === null || str === 'null' || str === '(null)' || str === 'NaN' || str === '') {
      return true;
    }

    return false;
  };
  /**
   * 数字校验
   *
   * @param {String} str - 字符串
   * @return {Boolean} true-数字，false-非数字
   * @example
   *
   * isNumber('20');
   * // => true
   *
   * isNumber('.2');
   * // => false
   */


  this.isNumber = function (str) {
    return /^-?\d+(\.\d+)?$/.test(str);
  };
  /**
   * 空数据过滤
   *
   * @param {String} str - 字符串
   * @param {String} [format=''] - 格式化
   * @return {String} 过滤后的数据
   * @example
   *
   * filterNull('xxx');
   * // => xxx
   *
   * filterNull();
   * // =>
   *
   * filterNull(null, '--');
   * // => --
   */


  this.filterNull = function (str) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (_this.isNull(str)) {
      return format;
    }

    return str;
  };
  /**
   * 分->元
   * 为防止浮点数及大数运算精度丢失，故采用字符串形式解析
   *
   * @param {String} str - 分
   * @param {String} [format='0.00'] - 格式化
   * @return {String} 元
   * @example
   */


  this.toYuan = function (str) {
    var _context;

    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.00';

    if (!/^-?(\d|[1-9]\d+)(\.\d+)?$/.test(str)) {
      return format;
    }

    str = str.toString();
    var result = '';

    if (str[0] === '-') {
      result = '-';
      str = str.substr(1);
    }

    if ((0, _indexOf.default)(str).call(str, '.') > -1) {
      str = str.replace(/\.\d+$/, ''); // Trim decimal at the ending.
    }

    var len = str.length;

    switch (len) {
      case 1:
        result += "0.0".concat(str);
        break;

      case 2:
        result += "0.".concat(str);
        break;

      default:
        result += (0, _concat.default)(_context = "".concat(str.substr(0, len - 2), ".")).call(_context, str.substr(len - 2));
    }

    return result;
  };
  /**
   * 元->分
   * 为防止浮点数及大数运算精度丢失，故采用字符串形式解析
   *
   * @param {String} str - 元
   * @param {String} [format='0'] - 格式化
   * @return {String} 分
   * @example
   *
   */


  this.toFen = function (str) {
    var _context2, _context3;

    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

    if (!/^-?(\d|[1-9]\d+)(\.\d+)?$/.test(str)) {
      return format;
    }

    str = str.toString();
    var result = '0';

    if ((0, _indexOf.default)(str).call(str, '.') > -1) {
      var strArr = str.split('.');
      var len = strArr[1].length;

      switch (len) {
        case 1:
          // 特殊数据：0.0 => 000、 0.1 => 010
          result = (0, _concat.default)(_context2 = "".concat(strArr[0])).call(_context2, strArr[1], "0");
          break;

        case 2:
          // 特殊数据：0.00 => 000、 0.01 => 001、 0.10 => 010
          result = str.replace('.', '');
          break;

        default:
          // 只保留两位小数
          // 特殊数据：0.000 => 000、 0.001 => 000、 0.010 => 001、 0.101 => 010
          result = (0, _concat.default)(_context3 = "".concat(strArr[0])).call(_context3, strArr[1].substr(0, 2));
      }
    } else {
      result = "".concat(str, "00");
    } // 特殊数据处理：000 => 0、 001 => 1、 010 => 10


    result = result.replace(/^(-?)(0{1,2})/, '$1'); // Trim zeros at the beginning.

    return result;
  };
};

var _default = new StringUtil();

exports.default = _default;