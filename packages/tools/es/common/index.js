function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 通用方法
 *
 * generateUUID - 生成uuid
 * getDeviceId - 获取deviceId
 * getParameter - 获取url中的参数
 * addURLParameter - 向url中添加search参数
 * updateURLParameter - 更新url中的search参数
 * removeURLParameter - 删除url中的search参数
 * getValueByKey - 通过key值获取value
 * getKeyByValue - 通过value获取key
 */
var Common = function Common() {
  var _this = this;

  _classCallCheck(this, Common);

  this.generateUUID = function () {
    /* eslint-disable no-bitwise */

    /* eslint-disable no-mixed-operators */
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  };

  this.getDeviceId = function () {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'deviceId';
    var deviceId = localStorage.getItem(key);

    if (!deviceId) {
      deviceId = _this.generateUUID();
      localStorage.setItem(key, deviceId);
    }

    return deviceId;
  };

  this.getParameter = function (name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;
    var regexp = new RegExp("[?&]".concat(name, "=([^&#]*)"), 'ig');
    var result = regexp.exec(url);
    return result === null ? '' : decodeURIComponent(result[1]);
  };

  this.addURLParameter = function (url, paramName, paramVal) {
    var oriUrls = url.split('#');
    var temp = url;
    var additionalURL = '';

    if (oriUrls.length > 0) {
      temp = oriUrls[0];
    }

    if (oriUrls.length > 1) {
      additionalURL = "#".concat(oriUrls[1]);
    }

    var tempArray = temp.split('?');

    if (tempArray.length < 2) {
      return "".concat(temp, "?").concat(paramName, "=").concat(encodeURIComponent(paramVal)).concat(additionalURL);
    }

    return "".concat(temp, "&").concat(paramName, "=").concat(encodeURIComponent(paramVal)).concat(additionalURL);
  };

  this.updateURLParameter = function (url, paramName, paramVal) {
    var TheAnchor = null;
    var newAdditionalURL = '';
    var tempArray = url.split('?');
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = '';

    if (additionalURL) {
      var tmpAnchor = additionalURL.split('#');
      var TheParams = tmpAnchor[0];
      TheAnchor = tmpAnchor[1];

      if (TheAnchor) {
        additionalURL = TheParams;
      }

      tempArray = additionalURL.split('&');

      for (var i = 0; i < tempArray.length; i++) {
        if (tempArray[i].split('=')[0] !== paramName) {
          newAdditionalURL += temp + tempArray[i];
          temp = '&';
        }
      }
    } else {
      var _tmpAnchor = baseURL.split('#');

      var _TheParams = _tmpAnchor[0];
      TheAnchor = _tmpAnchor[1];

      if (_TheParams) {
        baseURL = _TheParams;
      }
    }

    if (TheAnchor) {
      paramVal += "#".concat(TheAnchor);
    }

    return "".concat(baseURL, "?").concat(newAdditionalURL).concat(temp).concat(paramName, "=").concat(paramVal);
  };

  this.removeURLParameter = function (url, paramName) {
    var oriUrls = url.split('#');
    var temp = url;
    var additionalURL = '';

    if (oriUrls.length > 0) {
      temp = oriUrls[0];
    }

    if (oriUrls.length > 1) {
      additionalURL = "#".concat(oriUrls[1]);
    }

    var tempArray = temp.split('?');

    if (tempArray.length < 2) {
      return url;
    }

    var params = tempArray[1].split('&'); // 参数对的数组

    var newParams = '';
    var tmp = '';

    for (var i = 0; i < params.length; i++) {
      if (params[i].split('=')[0] !== paramName) {
        newParams += tmp + params[i];
        tmp = '&';
      }
    }

    var newUrl = '';

    if (newParams !== '') {
      newUrl = "".concat(tempArray[0], "?").concat(newParams).concat(additionalURL);
    } else {
      newUrl = tempArray[0] + additionalURL;
    }

    return newUrl;
  };

  this.getValueByKey = function (key, map) {
    var ret = null; // @ts-ignore

    if (map.size) {
      var tempRet = _toConsumableArray(map.entries()).find(function (item) {
        return item[0] === key;
      });

      ret = tempRet && tempRet[1];
    } else {
      map.forEach(function (item) {
        if (typeof item === 'string') {
          if (item === key) {
            ret = item;
          }
        } else if (item.key === key) {
          ret = item.value;
        }
      });
    }

    return ret;
  };

  this.getKeyByValue = function (map, value) {
    var ret = null;

    if (map.size) {
      ret = _toConsumableArray(map.entries()).find(function (item) {
        return item[1] === value;
      });
    } else {
      map.forEach(function (item) {
        if (item.value === value) {
          ret = item.key;
        }
      });
    }

    return ret;
  };
};

export default new Common();