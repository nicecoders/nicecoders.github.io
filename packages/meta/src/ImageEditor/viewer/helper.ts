//@ts-nocheck
import { AXIS_TYPE_ORIGIN, AXIS_TYPE_CANVAS, AXIS_TYPE_IMAGE } from './constants';

//设置数据的精度
//accuracy 表示精度 以原点为中心向左为正，向右为负，
//isCeil 表示是否为向上取整
export const setNumberAccuracy = (originNumber: number, accuracy = 0, isCeil = true) => {
  if (originNumber === 0) {
    return 0;
  }
  let returnData = 0;

  if (isCeil) {
    returnData = Math.ceil(originNumber / Math.pow(10, accuracy)) * Math.pow(10, accuracy);
  } else {
    returnData = Math.floor(originNumber / Math.pow(10, accuracy)) * Math.pow(10, accuracy);
  }
  //设置精度
  if (accuracy < 0) {
    returnData = Number(returnData.toFixed(-accuracy));
  } else {
    returnData = Number(returnData.toFixed(0));
  }
  return returnData;
}

export default {

  windowToCanvasAxis(event) {
    const { x, y } = this.canvas.getBoundingClientRect();
    return {
      x: event.pageX - x,
      y: event.pageY - y,
      __AXIS_TYPE__: AXIS_TYPE_CANVAS,
    };
  },
  offsetAxisToCanvasAxis({ x, y }) {
    const { targetTransform } = this;
    const { translateX, translateY, scale } = targetTransform;
    return {
      x: (x + translateX) / scale + translateX / scale,
      y: y / scale + translateY / scale,
      __AXIS_TYPE__: AXIS_TYPE_CANVAS,
    };
  },
  originAxisToCanvasAxis({ x, y, ...others }) {
    const { targetTransform } = this;
    const { translateX, translateY, scale } = targetTransform;
    const axis = {
      x: translateX + x * scale,
      y: translateY + y * scale,
      ...others,
      __AXIS_TYPE__: AXIS_TYPE_CANVAS,
    };
    return axis;
  },
  canvasAxisToOriginAxis({ x, y, ...others }) {
    const { targetTransform } = this;
    const { translateX, translateY, scale } = targetTransform;
    const axis = {
      x: (x - translateX) / scale,
      y: (y - translateY) / scale,
      ...others,
      __AXIS_TYPE__: AXIS_TYPE_ORIGIN,
    };
    return axis;
  },
  imgRectAxisToCanvasAxisRect({ x = 0, y = 0, w = 0, h = 0, ...others }) {
    const { width, height } = this.image;
    const { targetTransform } = this;
    const { rotate } = targetTransform;
    const theta = (Math.PI / 180) * rotate;
    const offsetRect = {
      x: width * x,
      y: height * y,
      x2: width * w + width * x,
      y2: height * h + height * y,
    };
    //旋转
    // x' = x * cos(Theta) - y * sin(Theta);
    // (dx,dy) = (x2-x1,y2-y1);
    const newX =
      (offsetRect.x - width / 2) * Math.cos(theta) -
      (offsetRect.y - height / 2) * Math.sin(theta) +
      width / 2;
    const newY =
      (offsetRect.x - width / 2) * Math.sin(theta) +
      (offsetRect.y - height / 2) * Math.cos(theta) +
      height / 2;

    const newX2 =
      (offsetRect.x2 - width / 2) * Math.cos(theta) -
      (offsetRect.y2 - height / 2) * Math.sin(theta) +
      width / 2;
    const newY2 =
      (offsetRect.x2 - width / 2) * Math.sin(theta) +
      (offsetRect.y2 - height / 2) * Math.cos(theta) +
      height / 2;

    const newAxis1 = this.originAxisToCanvasAxis({ x: newX, y: newY });
    const newAxis2 = this.originAxisToCanvasAxis({
      x: newX2,
      y: newY2,
    });

    return {
      x: newAxis1.x,
      y: newAxis1.y,
      x2: newAxis2.x,
      y2: newAxis2.y,
      ...others,
      __AXIS_TYPE__: AXIS_TYPE_CANVAS,
    };
  },
  originAxisToImgAxis({ x, y, ...others }) {
    const { width, height } = this.image;
    const { targetTransform } = this;
    const { rotate } = targetTransform;
    const theta = (Math.PI / 180) * (360 - rotate);

    const newX = (x - width / 2) * Math.cos(theta) - (y - height / 2) * Math.sin(theta) + width / 2;
    const newY =
      (x - width / 2) * Math.sin(theta) + (y - height / 2) * Math.cos(theta) + height / 2;

    return {
      x: newX / width,
      y: newY / height,
      ...others,
      __AXIS_TYPE__: AXIS_TYPE_IMAGE,
    };
  },
  imgAxisToOriginAxis({ x: _x, y: _y, ...others }) {
    const { width, height } = this.image;
    //
    const x = width * _x;
    const y = height * _y;
    //
    const { targetTransform } = this;
    const { rotate } = targetTransform;
    const theta = (Math.PI / 180) * rotate;
    const newX = (x - width / 2) * Math.cos(theta) - (y - height / 2) * Math.sin(theta) + width / 2;
    const newY =
      (x - width / 2) * Math.sin(theta) + (y - height / 2) * Math.cos(theta) + height / 2;

    return {
      x: newX,
      y: newY,
      ...others,
      __AXIS_TYPE__: AXIS_TYPE_ORIGIN,
    };
  },
  getDataUrlbyOriginAxis({ x = 0, y = 0, w = 0, h = 0, ...others }) {
    const ctx = this.canvas.getContext('2d');
    const commonCanvas = document.createElement('canvas');
    commonCanvas.width = w;
    commonCanvas.height = h;
    commonCanvas.style.display = 'none';
    document.body.appendChild(commonCanvas);
    const commonCtx = commonCanvas.getContext('2d');
    const imageData = ctx.getImageData(x, y, w, h);
    commonCtx.putImageData(imageData, 0, 0);
    const dataUrl = commonCanvas.toDataURL('image/jpeg');
    commonCanvas.parentNode.removeChild(commonCanvas);
    return dataUrl;
  },
};
