import Base64 from 'base-64'
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { matchS3Prefix } from '../utils'
import { get } from 'lodash-es';

/**
 *
 * @param url 需要转为图片的链接
 * @returns 图片的 dom
 */
export const urlToImg = (url: string) => {
  const resImage: Promise<HTMLImageElement> = new Promise((resolve) => {
    const image = new Image();
    image.crossOrigin = '';
    image.src = url;
    image.onload = () => {
      resolve(image);
    };
  });
  return resImage;
}


export const base64DecodeImageKey = (base64ImgKey: string) => {
  let tempStr = base64ImgKey;
  if (matchS3Prefix(tempStr)) {
    tempStr = tempStr.replace(/^v[0-9]_/, '');
    tempStr = Base64.decode(tempStr);
  }
  //分离bucket
  const [bucket, ...pathArr] = tempStr.split('_');
  return (tempStr = `${bucket}/${pathArr.join('_')}`);
};

/**
 * 通过url获取图片的base64字符串
 * @param src 图片链接
 * @param outputFormat 图片格式
 * @returns base64 @string
 */
export const getBase64ByUrl = function (src: string | URL, outputFormat = 'image/png') {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', src, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function (e) {
      if (Number(xhr.status) === 200) {
        const uInt8Array = new Uint8Array(xhr.response);
        let i = uInt8Array.length;
        const binaryString = new Array(i);
        while (i--) {
          binaryString[i] = String.fromCharCode(uInt8Array[i]);
        }
        const data = binaryString.join('');
        const base64 = window.btoa(data);
        const dataUrl = 'data:' + (outputFormat || 'image/png') + ';base64,' + base64;
        resolve(dataUrl);
      } else {
        reject(e);
      }
    };
    xhr.onerror = (e) => {
      reject(e);
    };
    xhr.send();
  });
};

/**
 * 把文件转base64
 * @param file @file 文件
 * @returns @string
 */
export const fileToBase64 = (file: any): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    // 传入一个参数对象即可得到基于该参数对象的文本内容
    reader.readAsDataURL(file);
    reader.onload = function (e: any) {
      // target.result 该属性表示目标对象的DataURL
      resolve(e?.target.result as string);
    };
    reader.onerror = function (e) {
      reject(e);
    };
  });
};

/**
 *
 * @param image @file 图片文件
 * @param width @number 宽度
 * @param height @number  高度
 * @returns  @string base64
 */
export const getBase64Image = (image: any, width?: any, height?: any) => {
  // width、height调用时传入具体像素值，控制大小 ,不传则默认图像大小
  const canvas = document.createElement('canvas');
  canvas.width = width !== undefined ? width : image.width;
  canvas.height = height !== undefined ? height : image.height;
  const ctx = canvas.getContext('2d');
  ctx?.drawImage(image, 0, 0, canvas.width, canvas.height);
  const ext = image.src.substring(image.src.lastIndexOf('.') + 1).toLowerCase();
  const dataURL = canvas.toDataURL('image/' + ext);
  return dataURL;
};

/**
 * 通过图片获取base64
 * @param src 图片地址
 * @returns @string
 */
export const getBase64ByImage = function (src: string) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    const timestamp = new Date().getTime();
    const imgUrl = src + '?' + timestamp;
    image.src = imgUrl;
    image.onload = function () {
      function getBase64Image(img: any) {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, img.width, img.height);
        const ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase();
        const dataURL = canvas.toDataURL('image/' + ext);
        return dataURL;
      }
      const base64 = getBase64Image(image);
      resolve(base64);
    };
    image.onerror = (e) => {
      reject(e);
    };
  });
};


/**
 * url转base64
 * @param {String} url - url地址
 */
export const urlToBase64V2 = (url: string) => {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = function () {
      let canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      // 将图片插入画布并开始绘制
      canvas?.getContext('2d')?.drawImage(image, 0, 0);
      // result
      let result = canvas.toDataURL('image/png');
      resolve(result);
    };
    // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
    const imgUrl = url;
    image.setAttribute('crossOrigin', 'Anonymous');
    image.src = imgUrl;
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('Images fail to load'));
    };
  }).catch((error) => {
    throw new Error(error);
  });
};

/**
 * base64转Blob
 * @param {String} base64 - base64
 */
export function base64toBlob(base64: string) {
  if (!base64) return
  var arr = base64.split(','),
  // @ts-ignore
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}

/**
 * 图片集打包压缩下载
 * 1. url -> base64 -> blob
 * 2. 将blob加入jsZip文件夹内，用file-saver保存
 * @param {Array<{url:string,name:string}>} imgDataList
 * @param {string} zipName
 */
export const downloadPackageImages = async (imgDataList: string | any[], zipName: string) => {
  let imgDataDownLoadList = []; // 传入列表中可下载图片的集合
  let imgBlobList = []; // 图片转blob的集合
  let imageSuffix = []; // 图片后缀集
  let zip = new JSZip();
  let img = zip.folder(zipName);

  try {
    for (let i = 0; i < imgDataList.length; i++) {
      let src = imgDataList[i].url;
      let suffix = src.substring(src.lastIndexOf('.'));
      let base64ByUrl = await urlToBase64V2(imgDataList[i].url);
      if (!base64ByUrl) continue;
      // @ts-ignore
      let blob = base64toBlob(base64ByUrl);
      imgDataDownLoadList.push(imgDataList[i]);
      imgBlobList.push(blob);
      imageSuffix.push(suffix);
    }

    if (imgBlobList.length === 0) throw new Error('The number of pictures is zero !');
    if (imgBlobList.length > 0) {
      for (var i = 0; i < imgBlobList.length; i++) {
        img?.file(
          imgDataDownLoadList[i].name + get(imageSuffix, `.${i}`, imageSuffix[0]),
          // @ts-ignore
          imgBlobList[i],
          {
            base64: true,
          }
        );
      }
    }
    zip.generateAsync({ type: 'blob' }).then(function (content) {
      FileSaver.saveAs(content, zipName + '.zip'); // 利用file-saver保存文件
    });
  } catch (error: any) {
    throw new Error(error);
  }
};


//文件size转单位
export function getFileSize(size: number) {
  if (!size) return '';

  var num = 1024.0; //byte

  if (size < num) return size + 'B';
  if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + 'K'; //kb
  if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + 'M'; //M
  if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + 'G'; //G
  return (size / Math.pow(num, 4)).toFixed(2) + 'T'; //T
}

// Base64转Blob
export const dataURLToBlob = (dataurl: string) => {
  const arr = dataurl.split(',');
  const mime = arr[0].match(/:(.*?);/)![1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
};
