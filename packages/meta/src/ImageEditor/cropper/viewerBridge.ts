//@ts-nocheck
import {addEventListenerWrapper} from '@nicecode/func';
import { EVENT_WHEEL } from './constants';
import { EVENT_VIEWER_TRANSFORM_CHANGE } from '../viewer/constants';

export default {
  initBridge() {
    const { container, element, eventHandleList = [], option } = this;

    if (this.options.viewer) {
      const viewer = this.options.viewer;
      //添加缩放事件
      const handleWhele = addEventListenerWrapper(container, EVENT_WHEEL, this.onWheel.bind(this));
      eventHandleList.push(handleWhele);
      //添加事件监听 获取limit crop box & 渲染canvas
      this.onTransformChange(viewer);
      this.limited = true;
      const handleTransformChange = addEventListenerWrapper(
        viewer.element,
        EVENT_VIEWER_TRANSFORM_CHANGE,
        (event) => {
          this.onTransformChange(viewer);
        }
      );
      eventHandleList.push(handleTransformChange);
    }
  },
  onTransformChange(viewer) {
    if (!viewer.image) return;
    const { width: imgWidth, height: imgHeight } = viewer.image;
    const { rotate = 0 } = viewer.targetTransform || {};
    let imgLeftTop = { x: 0, y: 0 };
    let imgRightBottom = { x: imgWidth, y: imgHeight };
    if (rotate % 180 !== 0) {
      //todo:旋转测试
      const diffx = (imgWidth - imgHeight) / 2;
      const diffy = (imgHeight - imgWidth) / 2;
      imgLeftTop = {
        x: imgLeftTop.x + diffx,
        y: imgLeftTop.y + diffy,
      };
      imgRightBottom = {
        x: imgRightBottom.x - diffx,
        y: imgRightBottom.y - diffy,
      };
    }

    const { x: x1, y: y1 } = viewer.originAxisToCanvasAxis({ x: imgLeftTop.x, y: imgLeftTop.y });
    const { x: x2, y: y2 } = viewer.originAxisToCanvasAxis({
      x: imgRightBottom.x,
      y: imgRightBottom.y,
    });
    const limitCropBox = {
      left: x1,
      top: y1,
      width: x2 - x1,
      height: y2 - y1,
    };
    this.options.cropBoxLimited = limitCropBox;
    this.limitCropBox(true, true);

    //渲染预览框
    if (this.previewBox) {
      const canvas = this.previewBox;

      const ctx = canvas.getContext('2d');
      const viewerRender = viewer.renderCanvas.bind(viewer);
      viewerRender(ctx);
    }
  },

  onWheel(event) {
    const viewer = this.options.viewer;
    //onwheel
    const onViewerWheelHandler = viewer.onWheel.bind(viewer);
    onViewerWheelHandler(event, this.cropped ? this.cropBoxData : null);
  },

  clearBridge() {},
};
