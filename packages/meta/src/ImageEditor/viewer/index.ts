//@ts-nocheck
import { isPlainObject } from '@nicecode/func';
import { addClass } from 'rc-util/lib/Dom/class';
import { Mixin, dispatchEvent } from '../utils';
import Render from './render';
import Event from './event';
import Shape from './shape';
import Helper from './helper';
import { CLASS_CANVAS, EVENT_VIEWER_READY, EVENT_VIEWER_ERROR } from './constants';
import './index.scss';

export interface Option {
  /* 图片url */
  image?: string | HTMLImageElement;

  /* 缩放灵敏度(0,1],default: 0.1 */
  wheelZoomRatio?: number;

  /*
   * 是否允许缩放
   * @default: true
   */
  scaleAble?: boolean;

  /*
   * 是否允许拖拽
   * @default: true
   */
  dragAble?: boolean;

  /*
   * fit scale 作为 最小缩放
   * @default: false
   */
  fitScaleAsMinScale?: boolean;
}

@Mixin(Render, Event, Shape, Helper)
class Viewer {
  /* 方便访问dom元素 */
  /* 容器:挂在的节点 */
  element: HTMLDivElement;

  /* 图片对象 */
  image: HTMLImageElement;

  /* canvas对象 */
  canvas: Element;

  /* 配置项 */
  options: Option;

  /* 是否初始化完成 */
  ready: boolean;

  constructor(element, options) {
    this.element = element;
    this.options = Object.assign({}, isPlainObject(options) && options);
    this.ready = false;
    this.init();
  }

  async init() {
    try {
      this.build();
      //@ts-ignore
      this.bind();
      //@ts-ignore
      await this.render();
      this.ready = true;
      dispatchEvent(this.element, EVENT_VIEWER_READY);
    } catch (error) {
      dispatchEvent(this.element, EVENT_VIEWER_ERROR);
    }
  }

  build() {
    const canvas = document.createElement('canvas');
    addClass(canvas, CLASS_CANVAS);
    this.element.appendChild(canvas);
    this.canvas = canvas;
  }
  refleshImage(options) {
    this.options = Object.assign({}, isPlainObject(options) && options);
    this.ready = false;
    this.element.removeChild(this.canvas);
    this.init();
  }
  destroy() {
    //清理动画
    //@ts-ignore
    window.cancelAnimationFrame(this.animationFrame);
    //清理事件
    //@ts-ignore
    this.unbind();
    //清理dom
    this.element?.removeChild?.(this.canvas);
  }
}

export default Viewer;
