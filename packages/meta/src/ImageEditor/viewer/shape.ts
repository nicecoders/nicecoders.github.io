// @ts-nocheck
import { isNil, isArray, isFunction } from '@nicecode/func';
import * as turf from '@turf/turf';
import booleanPointInPolygon from '@turf/boolean-point-in-polygon';
import { setNumberAccuracy } from './helper';
import { SHAPE_TYPE_RECT, SHAPE_TYPE_CIRCLE, EVENT_SHAPE_SELECT } from './constants';
import { dispatchEvent } from '../utils';

function rectToPolygon(axisRect: any) {
  const polygon = turf.polygon([
    [
      [setNumberAccuracy(axisRect.x, -2), setNumberAccuracy(axisRect.y, -2)],
      [setNumberAccuracy(axisRect.x2, -2), setNumberAccuracy(axisRect.y, -2)],
      [setNumberAccuracy(axisRect.x2, -2), setNumberAccuracy(axisRect.y2, -2)],
      [setNumberAccuracy(axisRect.x, -2), setNumberAccuracy(axisRect.y2, -2)],
      [setNumberAccuracy(axisRect.x, -2), setNumberAccuracy(axisRect.y, -2)],
    ],
  ]);
  return polygon;
}
export interface Shape {
  id: number | string; //uuid
  selectAble: boolean;
  color: string;
}

export interface Rect extends Shape {
  /* 基于图片的位置,归一化坐标 */
  x: number;
  y: number;
  w: number;
  h: number;
}
export interface Point extends Shape {
  /* 基于图片的位置,归一化坐标 */
  x: number;
  y: number;
}

export default {
  //store
  shapeList: [],
  hoverShapId: null,
  selectShapId: null,
  //是否开启人脸
  isEyeOpen: false,
  //是否移动
  movable: true,
  //是否放大缩小
  zoomable: true,
  //禁止添加shap
  disableAdd: false,
  //自定义画框的颜色
  color: '',
  changeEyeModel(isOpen: any) {
    if (isOpen) {
      this.isEyeOpen = true;
      this.changeMoveAble(false);
      this.changeZoonAble(false);
    } else {
      this.isEyeOpen = false;
      this.changeMoveAble(true);
      this.changeZoonAble(true);
    }
  },

  //method
  addShape(shap: Shape | Array<Shape>, type = SHAPE_TYPE_RECT) {
    this.color = shap.color ? shap.color : '';
    if (isNil(shap) || this.disableAdd) return;
    const { shapeList: preShapeList = [] } = this;
    let shapList = isArray(shap) ? shap : [shap];
    shapList = shapList.map((v) => ({ ...v, __SHAPE_TYPE__: type }));
    this.shapeList = [...preShapeList, ...shapList];
  },
  //
  setSelectShapId(id: number) {
    this.selectShapId = id;
    dispatchEvent(this.element, EVENT_SHAPE_SELECT, id);
  },
  getSelectShape(contain = true) {
    const selectShapeList = [];
    const selectShape = this.shapeList.find((v) => v['id'] === this.selectShapId);
    selectShape && selectShapeList.push(selectShape);
    if (contain && selectShape) {
      const originFeature = rectToPolygon(this.imgRectAxisToCanvasAxisRect(selectShape));
      for (let i = 0; i < this.shapeList.length; i++) {
        const shape = this.shapeList[i];
        if (shape['id'] !== this.selectShapId) {
          const feature = rectToPolygon(this.imgRectAxisToCanvasAxisRect(shape));
          const isContain = turf.booleanContains(originFeature, feature);
          isContain && selectShapeList.push(shape);
        }
      }
    }
    return selectShapeList;
  },

  replaceShape(
    shape: Shape | Array<Shape> | ((shape: Shape) => Shape | Array<Shape>),
    type = SHAPE_TYPE_RECT
  ) {
    if (isNil(shape)) return;
    const { shapeList: preShapeList = [] } = this;
    let _shape;
    if (isFunction(shape)) {
      _shape = shape(preShapeList);
    } else {
      _shape = shape;
    }
    let shapList = isArray(_shape) ? _shape : [_shape];
    shapList = shapList.map((v) => ({ ...v, __SHAPE_TYPE__: type }));
    this.shapeList = [...shapList];
  },

  clearShape() {
    this.shapeList = [];
  },

  calcSelectShape(canvasPoint) {
    // todo:有问题
    const { shapeList, image } = this;
    const selectAbleShape = shapeList.filter(({ selectAble = true }) => !!selectAble);
    //判断落点离哪个形状最近
    let minId = null;
    let minDis = Number.MAX_VALUE;
    const pt = turf.point([canvasPoint.x, canvasPoint.y]);
    for (let i = 0; i < selectAbleShape.length; i++) {
      const shape = selectAbleShape[i];
      const axisRect = this.imgRectAxisToCanvasAxisRect(shape);
      const polygon = turf.polygon([
        [
          [axisRect.x, axisRect.y],
          [axisRect.x2, axisRect.y],
          [axisRect.x2, axisRect.y2],
          [axisRect.x, axisRect.y2],
          [axisRect.x, axisRect.y],
        ],
      ]);
      const isPtInPolygon = booleanPointInPolygon(pt, polygon);
      if (isPtInPolygon) {
        //如果点在多变形内 判断距离是否是最短
        const line = turf.polygonToLine(polygon);
        const distance = turf.pointToLineDistance(pt, line, { method: 'planar' });
        if (distance < minDis) {
          minDis = distance;
          minId = shape['id'];
        }
      }
    }
    return minId;
  },

  clearSelectShape() {
    this.setSelectShapId(null);
  },

  changeMoveAble(movable = true) {
    this.movable = movable;
  },

  changeZoonAble(zoomable = true) {
    this.zoomable = zoomable;
  },

  disabledAddShap(value = false) {
    this.disableAdd = value;
  },

  renderShape(ctx) {
    const { shapeList } = this;
    //先排序
    const selectShapeList = [];
    const hoverShapeList = [];
    const normalShapeList = [];

    for (let i = 0; i < shapeList.length; i++) {
      const shape = shapeList[i];
      const isSelectShape = this.selectShapId === shape['id'];
      const isHoverShape = this.hoverShapId === shape['id'];
      if (isSelectShape) {
        selectShapeList.push(shape);
      } else if (isHoverShape) {
        hoverShapeList.push(shape);
      } else {
        normalShapeList.push(shape);
      }
    }
    // const sortShapeList = shapeList.sort((a, b) => (this.isHightLight(a) ? 1 : -1));
    //渲染
    for (let i = 0; i < normalShapeList.length; i++) {
      const shape = normalShapeList[i];
      const { __SHAPE_TYPE__ } = shape;
      switch (__SHAPE_TYPE__) {
        case SHAPE_TYPE_RECT:
          this.renderRect(ctx, shape, 'normal');
          break;
        case SHAPE_TYPE_CIRCLE:
          this.renderPoint(ctx, shape, 'normal');
          break;
        default:
          break;
      }
    }
    for (let i = 0; i < hoverShapeList.length; i++) {
      const shape = hoverShapeList[i];
      const { __SHAPE_TYPE__ } = shape;
      switch (__SHAPE_TYPE__) {
        case SHAPE_TYPE_RECT:
          this.renderRect(ctx, shape, 'hover');
          break;
        default:
          break;
      }
    }
    for (let i = 0; i < selectShapeList.length; i++) {
      const shape = selectShapeList[i];
      const { __SHAPE_TYPE__ } = shape;
      switch (__SHAPE_TYPE__) {
        case SHAPE_TYPE_RECT:
          this.renderRect(ctx, shape, 'select');
          break;
        default:
          break;
      }
    }
  },

  renderRect(ctx, shape, type) {
    //算rect
    const axisRect = this.imgRectAxisToCanvasAxisRect(shape);
    const rect = {
      x: axisRect.x2 > axisRect.x ? axisRect.x : axisRect.x2,
      y: axisRect.y2 > axisRect.y ? axisRect.y : axisRect.y2,
      w: Math.abs(axisRect.x2 - axisRect.x),
      h: Math.abs(axisRect.y2 - axisRect.y),
    };
    //画
    ctx.save();
    if (type === 'normal') {
      ctx.strokeStyle = this.color ? this.color : '#FFF566';
      ctx.lineWidth = 2;
      ctx.strokeRect(...Object.values(rect));
    }
    if (type === 'hover') {
      ctx.fillStyle = 'rgba(0, 153, 255, 0.3)';
      ctx.fillRect(...Object.values(rect));
      ctx.strokeStyle = 'rgba(92, 219, 211, 1)';
      ctx.lineWidth = 2;
      ctx.strokeRect(...Object.values(rect));
    }
    if (type === 'select') {
      ctx.strokeStyle = 'rgba(255, 0, 0, 1)';
      ctx.lineWidth = 2;
      ctx.strokeRect(...Object.values(rect));
    }
    ctx.restore();
  },

  renderPoint(ctx, shape) {
    const originAxis = this.imgAxisToOriginAxis(shape);
    const canvasAxis = this.originAxisToCanvasAxis(originAxis);
    //画
    ctx.save();
    ctx.beginPath();
    ctx.arc(canvasAxis.x, canvasAxis.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = '#DF0101';
    ctx.fill();
    ctx.restore();
  },
};
