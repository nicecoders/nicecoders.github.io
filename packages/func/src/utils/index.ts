export { default as isChrome } from './isChrome';

export const matchS3Prefix = (str: string) => {
  return /^v[0-9]_/.test(str);
};

/**
 * 通过文件名获取文件类型
 * @param fileName 文件名称
 * @returns 文件类型
 */
export const getFileSuffix = (fileName: string) => {
  const splitArr = fileName.split('.');
  return splitArr.length < 2 ? '' : splitArr[splitArr.length - 1];
};


/**
 * 通过类型获取文件名
 * @param type 类型
 * @returns
 */
export const getImageSuffixByFileType = (type: string) => {
  let imageSuffix = '';
  switch (type) {
    case 'jpeg': {
      imageSuffix = '.jpg';

      break;
    }
    case 'gif': {
      imageSuffix = '.gif';
      break;
    }
    case 'png': {
      imageSuffix = '.png';
      break;
    }
    case 'vnd.wap.wbmp': {
      imageSuffix = '.wbmp';
      break;
    }
    case 'x-up-wpng': {
      imageSuffix = '.wpng';
      break;
    }
    case 'nbmp': {
      imageSuffix = '.nbmp';
      break;
    }
  }
  return imageSuffix;
};

// 获取谷歌浏览器版本
export function getChromeVersion() {
  const arr = navigator.userAgent.split(' ');
  let chromeVersion = '';
  for (let i = 0; i < arr.length; i++) {
    if (/chrome/i.test(arr[i])) chromeVersion = arr[i];
  }
  if (chromeVersion) {
    return Number(chromeVersion.split('/')[1].split('.')[0]);
  } else {
    return false;
  }
}

export const nextTick = (func: (value: void) => void | PromiseLike<void>) => {
  if (queueMicrotask) {
    queueMicrotask(func);
    return;
  }
  Promise.resolve().then(func);
};

/**
   * 生成uuid
   *
   * @return uuid
   * @example
   *
   * generateUUID();
   * // => cd2f4b1f-daf2-451c-a9a6-db716c1d82bb
   */
export const generateUUID = () => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

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
export const getParameter = (name: string, url: string = window.location.search) => {
  const regexp = new RegExp(`[?&]${name}=([^&#]*)`, 'ig');
  const result = regexp.exec(url);
  return result === null ? '' : decodeURIComponent(result[1]);
}

/**
 * 向url中添加search参数
 *
 * @param {String} url - 链接
 * @param {String} paramName - 参数名称
 * @param {String} paramVal - 参数值
 * @return {String} 拼接好的url
 */
export const addURLParameter = (url: string, paramName: string, paramVal: string) => {
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
}

/**
 * 更新url中的search参数
 *
 * @param {String} url - 链接
 * @param {String} paramName - 参数名称
 * @param {String} paramVal - 参数值
 * @return {String} 更新参数后的url
 */
export const updateURLParameter = (url: string, paramName: string, paramVal: string): string => {
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
}

/**
 * 删除url中的search参数
 *
 * @param {String} url - 链接
 * @param {String} paramName - 参数名称
 * @return {String} 删除参数后的url
 */
export const removeURLParameter = (url: string, paramName: string) => {
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
export const getValueByKey = (
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
}

// 通过 value 获取 key
export const getKeyByValue = (value: any, map: Map<any, any>) => {
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

/**
 *
 * @param value 想复制的文案
 * @param cb 复制后回调
 * @returns
 */
export const copy = (value: string | number, cb: any) => {
  return new Promise((resolve) => {
    let copyTextArea = null;
    try {
      copyTextArea = document.createElement('textarea');
      copyTextArea.style.height = '0px';
      copyTextArea.style.opacity = '0';
      copyTextArea.style.width = '0px';
      document.body.appendChild(copyTextArea);
      copyTextArea.value = String(value);
      copyTextArea.select();
      document.execCommand('copy');
      cb && cb()
      resolve(value);
    } catch (e: any) {
      throw new Error(e)
    } finally {
      if (copyTextArea && copyTextArea.parentNode) {
        copyTextArea.parentNode.removeChild(copyTextArea);
      }
    }
  });
}
