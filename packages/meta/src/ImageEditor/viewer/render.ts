//@ts-nocheck
import { set, getOuterWidth, getOuterHeight } from 'rc-util/lib/Dom/css';
import { isNil, isString, isFunction, cloneDeep } from '@nicecode/func';
import { dispatchEvent } from '../utils';
import { EVENT_VIEWER_TRANSFORM_CHANGE } from './constants';

export default {
  // store
  image: null,
  canvas: null,
  containerData: {
    width: 0,
    height: 0,
  },
  animationFrame: null,
  backgroundColor: '#fff',
  targetTransform: {
    translateX: 0,
    translateY: 0,
    scale: 0,
    rotate: 0,
    // rotate: 90,
  },

  //method
  async render() {
    await this.initImg();
    this.initCanvas();
    this.startRaf();
  },

  initImg() {
    return new Promise<HTMLElement>((resolve, reject) => {
      const { image: propImage } = this.options;
      if (isString(propImage)) {
        const image = new Image();
        image.crossOrigin = 'anonymous';
        image.src = propImage;
        image.onload = () => {
          this.image = image;
          resolve(image);
        };
        image.onerror = (err) => {
          reject(err);
        };
      } else {
        this.image = propImage;
        resolve(propImage);
      }
    });
  },

  initCanvas() {
    if (!this.image) return;
    //通过样式设置 不依赖父元素的prosition
    const { element, canvas, limit = {}, options } = this;
    const containerData = {
      width: getOuterWidth(element),
      height: getOuterHeight(element),
    };
    this.containerData = containerData;
    set(canvas, containerData);
    canvas.width = containerData.width;
    canvas.height = containerData.height;
    const fitTransform = this.calcFitScreen();
    this.targetTransform = Object.assign({}, this.targetTransform, fitTransform);
    dispatchEvent(this.element, EVENT_VIEWER_TRANSFORM_CHANGE, cloneDeep(this.targetTransform));
    //产品需求：fitscale 是minscale
    const { fitScaleAsMinScale = false } = options;
    if (fitScaleAsMinScale) {
      this.limit = Object.assign({ minScale: this.targetTransform.scale }, this.limit);
    }
  },

  startRaf() {
    //清理动画
    window.cancelAnimationFrame(this.animationFrame);

    //渲染
    const loop = () => {
      // this.update(); //先update
      this.renderCanvas();
      window.cancelAnimationFrame(this.animationFrame);
      this.animationFrame = window.requestAnimationFrame(loop);
    };
    loop();
  },

  renderCanvas(_ctx) {
    if (!this.image || !this.canvas) return;
    const { containerData, canvas, targetTransform, options } = this;
    const { translateX, translateY, scale, rotate } = targetTransform;
    const ctx = _ctx ? _ctx : canvas.getContext('2d');
    //画背景
    ctx.clearRect(0, 0, containerData.width, containerData.height);
    ctx.fillStyle = options.backgroundColor; //todo@wdy OD框背景颜色
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    //画图
    ctx.save();

    //缩放移动
    ctx.setTransform(scale, 0, 0, scale, translateX, translateY);
    // ctx.setTransform(scale, 0, 0, scale, translateX, translateY);
    //旋转
    const centerX = this.image.width / 2;
    const centerY = this.image.height / 2;
    ctx.translate(centerX, centerY);
    ctx.rotate((rotate / 180) * Math.PI);
    ctx.translate(-centerX, -centerY);

    //图片
    ctx.drawImage(this.image, 0, 0);

    ctx.restore();
    //画图形
    ctx.save();
    this.renderShape(ctx);
    ctx.restore();
  },

  scaleTo(offsetScale) {
    //获取图片中心点
    const { containerData } = this;
    this.calcTransform({
      scaleCenter: {
        x: containerData.width / 2,
        y: containerData.height / 2,
        step: offsetScale,
      },
    });
  },

  //暂时只支持90deg旋转 否则limit 不能做
  rotateTo(T: number | ((preDeg: number) => number)) {
    if (!this.image) return;
    const { targetTransform } = this;
    const { rotate } = targetTransform;
    const newDeg = isFunction(T) ? T(rotate) : T;
    this.calcTransform({
      rotate: newDeg,
    });
  },

  reset() {
    this.targetTransform.rotate = 0;
    const fitTransform = this.calcFitScreen();
    this.targetTransform = Object.assign({}, this.targetTransform, fitTransform);
    dispatchEvent(this.element, EVENT_VIEWER_TRANSFORM_CHANGE, cloneDeep(this.targetTransform));
  },

  getImgSize() {
    if (!this.image) return;
    return { w: this.image.width, h: this.image.height };
  },

  calcFitScreen() {
    if (!this.image) return;
    const w = this.containerData.width;
    const h = this.containerData.height;
    const iw = this.image.width;
    const ih = this.image.height;
    //算图片显示长款 （todo：旋转算旋转后）
    const { rotate = 0 } = this.targetTransform;
    const wToh = w / h;
    let imgwToh = iw / ih;
    if (rotate % 180 !== 0) {
      imgwToh = ih / iw;
    }
    //计算后的位置
    let scale;
    let translateX = 0;
    let translateY = 0;

    if (imgwToh > wToh) {
      scale = w / iw;
      translateX = 0;
      translateY = (h - ih * scale) / 2;
      if (rotate % 180 !== 0) {
        scale = w / ih;
        translateX = ((ih - iw) / 2) * scale;
        translateY = (h - iw * scale) / 2 + ((iw - ih) / 2) * scale;
      }
    } else {
      scale = h / ih;
      translateX = (w - iw * scale) / 2;
      translateY = 0;
      if (rotate % 180 !== 0) {
        scale = h / iw;
        translateX = (w - ih * scale) / 2 + ((ih - iw) / 2) * scale;
        translateY = ((iw - ih) / 2) * scale;
      }
    }
    const fitTransform = {
      translateX: translateX,
      translateY: translateY,
      scale: scale,
    };
    return fitTransform;
  },

  calcTransform(newTransform, cropBox) {
    if (!this.image) return;
    const { translateX, translateY, scaleCenter, rotate } = newTransform;
    if (!isNil(scaleCenter)) {
      const { targetTransform, limit = {} } = this;
      let { minScale = 0.1, maxScale = Number.MAX_VALUE } = limit;
      if (cropBox) {
        //如果有cropbox 最小缩放值需要重新计算
        let { width: iw, height: ih } = this.image;
        if (targetTransform.rotate % 180 !== 0) [iw, ih] = [ih, iw];
        const { width: cw, height: ch } = cropBox;
        const corpMinScale = Math.max(cw / iw, ch / ih);
        minScale = Math.max(corpMinScale, minScale);
      }
      const { x, y, step } = scaleCenter;
      const preScale = targetTransform.scale;
      let newScale = targetTransform.scale + step;
      newScale = Math.min(maxScale, Math.max(newScale, minScale));
      const newStep = newScale - preScale;
      if (newScale != preScale) {
        const offsetX = ((x - targetTransform.translateX) / targetTransform.scale) * newStep;
        const offsetY = ((y - targetTransform.translateY) / targetTransform.scale) * newStep;
        this.targetTransform.translateX = this.targetTransform.translateX - offsetX;
        this.targetTransform.translateY = this.targetTransform.translateY - offsetY;
      }
      this.targetTransform.scale = newScale;
    }
    if (!isNil(translateX)) {
      this.targetTransform.translateX += translateX;
    }
    if (!isNil(translateY)) {
      this.targetTransform.translateY += translateY;
    }
    if (!isNil(rotate)) {
      this.targetTransform.rotate = rotate;
    }

    //阻止拖出边界
    const { targetTransform, containerData } = this;
    const minMargin = 50;
    let imgWidth = this.image.width;
    let imgHeight = this.image.height;
    if (this.targetTransform.rotate % 180 !== 0) {
      imgWidth = this.image.height;
      imgHeight = this.image.width;
    }
    const minX = minMargin - imgWidth * targetTransform.scale;
    const maxX = containerData.width - minMargin;
    const minY = minMargin - imgHeight * targetTransform.scale;
    const maxY = containerData.height - minMargin;
    this.targetTransform.translateX = Math.min(
      maxX,
      Math.max(this.targetTransform.translateX, minX)
    );
    this.targetTransform.translateY = Math.min(
      maxY,
      Math.max(this.targetTransform.translateY, minY)
    );

    //限制截图框不能超出拖动范围
    if (cropBox) {
      const { width: cw, height: ch, top, left } = cropBox;
      const { width: iw, height: ih } = this.image;
      let imgLeftTop = { x: 0, y: 0 };
      let imgRightBottom = { x: iw, y: ih };
      if (this.targetTransform.rotate % 180 !== 0) {
        imgLeftTop = {
          x: (iw - ih) / 2,
          y: (ih - iw) / 2,
        };
        imgRightBottom = {
          x: (iw + ih) / 2,
          y: (iw + ih) / 2,
        };
      }
      //图片左上角不能大于crop左上角
      const maxX = left - imgLeftTop.x * this.targetTransform.scale;
      const maxY = top - imgLeftTop.y * this.targetTransform.scale;
      //图片右下角不能小于crop 右下角
      const minX = left + cw - imgRightBottom.x * this.targetTransform.scale;
      const minY = top + ch - imgRightBottom.y * this.targetTransform.scale;

      this.targetTransform.translateX = Math.min(
        maxX,
        Math.max(this.targetTransform.translateX, minX)
      );
      this.targetTransform.translateY = Math.min(
        maxY,
        Math.max(this.targetTransform.translateY, minY)
      );
    }

    dispatchEvent(this.element, EVENT_VIEWER_TRANSFORM_CHANGE, cloneDeep(this.targetTransform));
  },
};
