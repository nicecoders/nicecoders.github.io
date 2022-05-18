function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import before from 'lodash/before';
import after from 'lodash/after';
import debounce from 'lodash/debounce';
import throttle from 'lodash/throttle';
import curry from 'lodash/curry';
import curryRight from 'lodash/curryRight';
import delay from 'lodash/delay';
import once from 'lodash/once';
import overArgs from 'lodash/overArgs';
import spread from 'lodash/spread';
export default {
  /**
   * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
   */
  before: before,

  /**
   * 当被调用n次之后执行
   */
  after: after,

  /**
   * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（愚人码头注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。
   */
  debounce: debounce,

  /**
   * 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。
   */
  throttle: throttle,

  /**
   * 创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，可以使用 func.length 强制需要累积的参数个数。
   */
  curry: curry,

  /**
   * 这个方法类似 curry。 除了它接受参数的方式用 partialRight 代替了 partial。
   */
  curryRight: curryRight,

  /**
   * 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
   */
  delay: delay,

  /**
   * 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。
   */
  once: once,

  /**
   * 创建一个函数，调用func时参数为相对应的transforms的返回值。
   */
  overArgs: overArgs,

  /**
   * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply.
   */
  spread: spread,

  /**
   * 生成uuid
   *
   * @return uuid
   * @example
   *
   * generateUUID();
   * // => cd2f4b1f-daf2-451c-a9a6-db716c1d82bb
   */
  generateUUID: function generateUUID() {
    /* eslint-disable no-bitwise */

    /* eslint-disable no-mixed-operators */
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : r & 0x3 | 0x8).toString(16);
    });
    return uuid;
  },

  /**
   * 获取url中的参数
   *
   * @param {String} name - 参数名
   * @param {String} [url=window.location.search] - 链接
   * @return {String} 参数值
   *
   * getParameter('name', 'http://www.w3school.com?name=xxx');
   * // => xxx
   */
  getParameter: function getParameter(name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;
    var regexp = new RegExp("[?&]".concat(name, "=([^&#]*)"), 'ig');
    var result = regexp.exec(url);
    return result === null ? '' : decodeURIComponent(result[1]);
  },

  /**
   * 向url中添加search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @param {String} paramVal - 参数值
   * @return {String} 拼接好的url
   */
  addURLParameter: function addURLParameter(url, paramName, paramVal) {
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
  },

  /**
   * 更新url中的search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @param {String} paramVal - 参数值
   * @return {String} 更新参数后的url
   */
  updateURLParameter: function updateURLParameter(url, paramName, paramVal) {
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
  },

  /**
   * 删除url中的search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @return {String} 删除参数后的url
   */
  removeURLParameter: function removeURLParameter(url, paramName) {
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
  },

  /**
  * 通过 key 获取 value
  * @param key 需要转换的值
  * @param map array | map
  */
  getValueByKey: function getValueByKey(key, map) {
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
  },
  // 通过 value 获取 key
  getKeyByValue: function getKeyByValue(value, map) {
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
  },

  /**
   *
   * @param value 想复制的文案
   * @param cb 复制后回调
   * @returns
   */
  copy: function copy(value, cb) {
    return new Promise(function (resolve) {
      var copyTextArea = null;

      try {
        copyTextArea = document.createElement('textarea');
        copyTextArea.style.height = '0px';
        copyTextArea.style.opacity = '0';
        copyTextArea.style.width = '0px';
        document.body.appendChild(copyTextArea);
        copyTextArea.value = value;
        copyTextArea.select();
        document.execCommand('copy');
        cb && cb();
        resolve(value);
      } catch (e) {
        throw new Error(e);
      } finally {
        if (copyTextArea && copyTextArea.parentNode) {
          copyTextArea.parentNode.removeChild(copyTextArea);
        }
      }
    });
  }
};