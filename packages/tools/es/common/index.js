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
 */
var Common = function Common() {
  var _this = this;

  _classCallCheck(this, Common);

  /**
   * 生成uuid
   *
   * @return uuid
   * @example
   *
   * generateUUID();
   * // => cd2f4b1f-daf2-451c-a9a6-db716c1d82bb
   */
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
  /**
   * 获取deviceId
   *
   * @param {String} [key='deviceId'] - 存储标识
   */


  this.getDeviceId = function () {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'deviceId';
    var deviceId = localStorage.getItem(key);

    if (!deviceId) {
      deviceId = _this.generateUUID();
      localStorage.setItem(key, deviceId);
    }

    return deviceId;
  };
  /**
   * 获取url中的参数
   *
   * @param {String} name - 参数名
   * @param {String} [url=window.location.search] - 链接
   * @return {String} 参数值
   * @example
   *
   * getParameter('name', 'http://www.w3school.com?name=xxx');
   * // => xxx
   */


  this.getParameter = function (name) {
    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window.location.search;
    var regexp = new RegExp("[?&]".concat(name, "=([^&#]*)"), 'ig');
    var result = regexp.exec(url);
    return result === null ? '' : decodeURIComponent(result[1]);
  };
  /**
   * 向url中添加search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @param {String} paramVal - 参数值
   * @return {String} 拼接好的url
   */


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
  /**
   * 更新url中的search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @param {String} paramVal - 参数值
   * @return {String} 更新参数后的url
   */


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
  /**
   * 删除url中的search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @return {String} 删除参数后的url
   */


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
};

export default new Common();