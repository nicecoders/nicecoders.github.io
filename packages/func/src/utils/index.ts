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
