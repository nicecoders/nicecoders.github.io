//@ts-nocheck
import { get, isPlainObject, isString, isNil } from '@nicecode/func';
import { addClass, removeClass } from 'rc-util/lib/Dom/class';
import { Mixin, dispatchEvent } from '../utils';
import {
  NAMESPACE,
  CLASS_HIDDEN,
  CLASS_MASK,
  EVENT_CROP_CHANGE,
  EVENT_CROP_END,
} from './constants';
import TEMPLATE from './template';
import Render from './render';
import Event from './event';
import ViewerBridge from './viewerBridge';
import Preview from './preview';
import './index.module.scss';

export interface Option {
  /* 图片url */
  image?: string | HTMLImageElement;
  /* 是否需要遮盖 */
  showMask?: boolean;
  //限制crop的范围
  cropBoxLimited?: {
    width: number;
    height: number;
    top: number;
    left: number;
  };
  minCropBoxWidth?: number;
  minCropBoxHeight?: number;
  /* 支持传viewer 做联动 */
  viewer?: any;
  /* default cropdata */
  initialCropBoxData?;
}

@Mixin(Render, Event, ViewerBridge, Preview)
class Cropper {
  /* 容器:挂在的节点 */
  element: HTMLDivElement;

  /* 配置项 */
  options: Option;

  /* 是否截图 */
  cropped: boolean;

  /* crop框是否有限制 */
  limited: boolean;

  /* 维护图片对象  */
  image: HTMLImageElement;

  /* 所有事件 */
  // eventHandleList: Array<any>;
  eventHandleList = [];

  /* 方便访问dom元素 */
  container: Element;
  dragBox: Element;
  cropBox: Element;
  viewBox: Element;

  constructor(element, options?) {
    this.element = element;
    this.options = Object.assign({}, isPlainObject(options) && options);
    this.limited = isNil(this.options.cropBoxLimited) ? false : true;
    this.cropped = false;
    this.init();
  }

  async init() {
    this.build();
    //@ts-ignore
    this.bind();
    //@ts-ignore
    this.render();
    //@ts-ignore
    this.initPreview();
    if (this.options.viewer) {
      //@ts-ignore
      this.initBridge();
    }
    //初始化crop
    this.initDefaultCropBox();
  }

  initDefaultCropBox() {
    const { initialCropBoxData } = this.options || {};

    // const initialCropBoxData = {
    //     height: 158.02902221679688,
    //     left: 410.132080078125,
    //     top: 133.201904296875,
    //     width: 211.97821044921875,
    // };
    if (initialCropBoxData) {
      this.cropped = true;
      const { showMask } = this.options;
      showMask && addClass(this.dragBox, CLASS_MASK);
      removeClass(this.cropBox, CLASS_HIDDEN);
      //@ts-ignore
      this.cropBoxData = { ...this.cropBoxData, ...initialCropBoxData };
      //@ts-ignore
      this.renderCropBox();
      const hasCrop =
        get(this, 'cropBoxData.width', 0) !== 0 && get(this, 'cropBoxData.height', 0) !== 0;
      //@ts-ignore
      dispatchEvent(this.element, EVENT_CROP_CHANGE, hasCrop ? this?.cropBoxData : null);
      //@ts-ignore
      hasCrop && dispatchEvent(this.element, EVENT_CROP_END, hasCrop ? this?.cropBoxData : null);
    }
  }

  load() {
    return new Promise<HTMLElement>((resolve, reject) => {
      const { image: propImage } = this.options;
      if (isString(propImage)) {
        const image = new Image();
        const imgUrl = propImage;
        image.crossOrigin = 'anonymous';
        image.src = imgUrl;
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
  }

  build() {
    // Create cropper elements
    const template = document.createElement('div');
    template.innerHTML = TEMPLATE;

    const container = template.querySelector(`.${NAMESPACE}-container`);
    const dragBox = container.querySelector(`.${NAMESPACE}-drag-box`);
    const cropBox = container.querySelector(`.${NAMESPACE}-crop-box`);
    const viewBox = container.querySelector(`.${NAMESPACE}-view-box`);

    this.element.appendChild(container);
    this.container = container;
    this.dragBox = dragBox;
    this.cropBox = cropBox;
    this.viewBox = viewBox;

    //先隐藏crop
    addClass(cropBox, CLASS_HIDDEN);
  }

  destroy() {
    if (this.options.viewer) {
      //@ts-ignore
      this.clearBridge();
    }
    //清理事件
    //@ts-ignore
    this.unbind();
    //清理dom
    this.element?.removeChild?.(this.container);
  }
}

export default Cropper;
