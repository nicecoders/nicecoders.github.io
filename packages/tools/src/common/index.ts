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
class Common {
  /**
   * 生成uuid
   *
   * @return uuid
   * @example
   *
   * generateUUID();
   * // => cd2f4b1f-daf2-451c-a9a6-db716c1d82bb
   */
  generateUUID = () => {
    /* eslint-disable no-bitwise */
    /* eslint-disable no-mixed-operators */
    let d = new Date().getTime();
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  };

  /**
   * 获取deviceId
   *
   * @param {String} [key='deviceId'] - 存储标识
   */
  getDeviceId = (key: string = 'deviceId') => {
    let deviceId = localStorage.getItem(key);
    if (!deviceId) {
      deviceId = this.generateUUID();
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
  getParameter = (name: string, url: string = window.location.search) => {
    const regexp = new RegExp(`[?&]${name}=([^&#]*)`, 'ig');
    const result = regexp.exec(url);
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
  addURLParameter = (url: string, paramName: string, paramVal: string) => {
    const oriUrls = url.split('#');
    let temp = url;
    let additionalURL = '';
    if (oriUrls.length > 0) {
      temp = oriUrls[0];
    }
    if (oriUrls.length > 1) {
      additionalURL = `#${oriUrls[1]}`;
    }
    const tempArray = temp.split('?');
    if (tempArray.length < 2) {
      return `${temp}?${paramName}=${encodeURIComponent(paramVal)}${additionalURL}`;
    }
    return `${temp}&${paramName}=${encodeURIComponent(paramVal)}${additionalURL}`;
  };

  /**
   * 更新url中的search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @param {String} paramVal - 参数值
   * @return {String} 更新参数后的url
   */
  updateURLParameter = (url: string, paramName: string, paramVal) => {
    let TheAnchor = null;
    let newAdditionalURL = '';
    let tempArray = url.split('?');
    let baseURL = tempArray[0];
    let additionalURL = tempArray[1];
    let temp = '';

    if (additionalURL) {
      const tmpAnchor = additionalURL.split('#');
      const TheParams = tmpAnchor[0];
      TheAnchor = tmpAnchor[1];
      if (TheAnchor) {
        additionalURL = TheParams;
      }
      tempArray = additionalURL.split('&');
      for (let i = 0; i < tempArray.length; i++) {
        if (tempArray[i].split('=')[0] !== paramName) {
          newAdditionalURL += temp + tempArray[i];
          temp = '&';
        }
      }
    } else {
      const tmpAnchor = baseURL.split('#');
      const TheParams = tmpAnchor[0];
      TheAnchor = tmpAnchor[1];
      if (TheParams) {
        baseURL = TheParams;
      }
    }

    if (TheAnchor) {
      paramVal += `#${TheAnchor}`;
    }
    return `${baseURL}?${newAdditionalURL}${temp}${paramName}=${paramVal}`;
  };

  /**
   * 删除url中的search参数
   *
   * @param {String} url - 链接
   * @param {String} paramName - 参数名称
   * @return {String} 删除参数后的url
   */
  removeURLParameter = (url: string, paramName: string) => {
    const oriUrls = url.split('#');
    let temp = url;
    let additionalURL = '';
    if (oriUrls.length > 0) {
      temp = oriUrls[0];
    }
    if (oriUrls.length > 1) {
      additionalURL = `#${oriUrls[1]}`;
    }

    const tempArray = temp.split('?');
    if (tempArray.length < 2) {
      return url;
    }

    const params = tempArray[1].split('&'); // 参数对的数组
    let newParams = '';
    let tmp = '';
    for (let i = 0; i < params.length; i++) {
      if (params[i].split('=')[0] !== paramName) {
        newParams += tmp + params[i];
        tmp = '&';
      }
    }

    let newUrl = '';
    if (newParams !== '') {
      newUrl = `${tempArray[0]}?${newParams}${additionalURL}`;
    } else {
      newUrl = tempArray[0] + additionalURL;
    }
    return newUrl;
  }

  /**
 * 通过 key 获取 value
 * @param key 需要转换的值
 * @param map array | map
 */
  getValueByKey = (
    key: any,
    map: Map<any, any> | Array<{ key: any; value: any }> | string[],
  ) => {
    let ret: any = null;

    // @ts-ignore
    if (map.size) {
      const tempRet = [...map.entries()].find(item => item[0] === key);
      ret = tempRet && tempRet[1];
    } else {
      map.forEach((item: { key: any; value: string | null } | string) => {
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

  // 通过 value 获取 key
  getKeyByValue = (map: Map<any, any>, value: any) => {
    let ret = null
    if (map.size) {
      ret = [...map.entries()].find((item: any[]) => item[1] === value);
    } else {
      map.forEach((item: { key: string | number, value: string | number }) => {
        if (item.value === value) {
          ret = item.key
        }
      });
    }
    return ret
  }
}

export default new Common();
