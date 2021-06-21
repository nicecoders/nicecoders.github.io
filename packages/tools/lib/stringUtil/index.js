"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 字符串操作
 *
 * isNull - 空校验
 * isNumber - 数字校验
 * filterNull - 空数据过滤
 * toYuan - 分转化成元
 * toFen - 元转化为分
 */
var StringUtil = function StringUtil() {
  var _this = this;

  _classCallCheck(this, StringUtil);

  this.isNull = function (str) {
    if (typeof str === 'undefined' || str === 'undefined' || str === null || str === 'null' || str === '(null)' || str === 'NaN' || str === '') {
      return true;
    }

    return false;
  };

  this.isNumber = function (str) {
    return /^-?\d+(\.\d+)?$/.test(str);
  };

  this.filterNull = function (str) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (_this.isNull(str)) {
      return format;
    }

    return str;
  };

  this.toYuan = function (str) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.00';

    if (!/^-?(\d|[1-9]\d+)(\.\d+)?$/.test(String(str))) {
      return format;
    }

    str = str.toString();
    var result = '';

    if (str[0] === '-') {
      result = '-';
      str = str.substr(1);
    }

    if (str.indexOf('.') > -1) {
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
        result += "".concat(str.substr(0, len - 2), ".").concat(str.substr(len - 2));
    }

    return result;
  };

  this.toFen = function (str) {
    var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0';

    if (!/^-?(\d|[1-9]\d+)(\.\d+)?$/.test(String(str))) {
      return format;
    }

    str = str.toString();
    var result = '0';

    if (str.indexOf('.') > -1) {
      var strArr = str.split('.');
      var len = strArr[1].length;

      switch (len) {
        case 1:
          // 特殊数据：0.0 => 000、 0.1 => 010
          result = "".concat(strArr[0]).concat(strArr[1], "0");
          break;

        case 2:
          // 特殊数据：0.00 => 000、 0.01 => 001、 0.10 => 010
          result = str.replace('.', '');
          break;

        default:
          // 只保留两位小数
          // 特殊数据：0.000 => 000、 0.001 => 000、 0.010 => 001、 0.101 => 010
          result = "".concat(strArr[0]).concat(strArr[1].substr(0, 2));
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