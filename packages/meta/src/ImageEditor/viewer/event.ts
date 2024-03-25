//@ts-nocheck
import { isNumber, get, addEventListenerWrapper } from '@nicecode/func';
import { addClass, removeClass } from 'rc-util/lib/Dom/class.js';
import guid from 'rc-util/lib/guid';
import warn from 'rc-util/lib/warn';
import { getPointer, dispatchEvent } from '../utils';
import {
  CLASS_MOVE,
  ACTION_DRAG,
  // event
  EVENT_CLICK,
  EVENT_WHEEL,
  EVENT_POINTER_DOWN,
  EVENT_POINTER_MOVE,
  EVENT_POINTER_UP,
  EVENT_EYE_DONE,
  //正则
  REGEXP_SPACES,
  SHAPE_TYPE_CIRCLE,
} from './constants';

export default {
  //store
  disabled: false,
  eventHandleList: [],
  wheeling: false,
  pointer: null,
  action: null,

  //method
  bind() {
    const { canvas, element, eventHandleList = [], options } = this;
    //图片事件
    const scaleAble = get(options, 'scaleAble', true);
    if (scaleAble) {
      const handleWhele = addEventListenerWrapper(canvas, EVENT_WHEEL, this.onWheel.bind(this));
      eventHandleList.push(handleWhele);
    }

    const dragAble = get(options, 'dragAble', true);
    if (dragAble) {
      const handleDragStart = addEventListenerWrapper(
        canvas,
        EVENT_POINTER_DOWN,
        this.onDragStart.bind(this)
      );
      eventHandleList.push(addEventListenerWrapper);
      const handleDragMove = addEventListenerWrapper(
        element.ownerDocument,
        EVENT_POINTER_MOVE,
        this.onDragMove.bind(this)
      );
      eventHandleList.push(handleDragMove);
      EVENT_POINTER_UP.trim()
        .split(REGEXP_SPACES)
        .forEach((eventName) => {
          const handleDragEnd = addEventListenerWrapper(
            element.ownerDocument,
            eventName,
            this.onDragEnd.bind(this)
          );
          eventHandleList.push(handleDragEnd);
        });
    }

    //rect事件
    const handleClick = addEventListenerWrapper(canvas, EVENT_CLICK, this.onClick.bind(this));
    eventHandleList.push(handleClick);
    // const handleLeveal = addEventListenerWrapper(canvas, EVENT_LEAVEL, this.onLeavel.bind(this));
    // eventHandleList.push(handleLeveal);
    // const handleEnter = addEventListenerWrapper(canvas, EVENT_ENTER, this.onEnter.bind(this));
    // eventHandleList.push(handleEnter);
  },
  unbind() {
    const { eventHandleList } = this;
    for (let index = eventHandleList.length; index > 0; index--) {
      const handler = eventHandleList.shift();
      try {
        handler.remove();
      } catch (error) {
        warn('VIEWER:REMOVE_EVENT_FAIL,', error);
      }
    }
  },

  /* 图片事件 */
  onWheel(event, cropBox?) {
    event.stopPropagation();
    event.preventDefault();

    // Limit wheel speed to prevent zoom too fast
    if (this.wheeling || !this.zoomable) {
      return;
    }

    this.wheeling = true;

    setTimeout(() => {
      this.wheeling = false;
    }, 16);

    const ratio = Number(this.options.zoomRatio) || 0.1;
    let delta = 1;

    if (event.deltaY) {
      delta = event.deltaY > 0 ? 1 : -1;
    } else if (event.wheelDelta) {
      delta = -event.wheelDelta / 120;
    } else if (event.detail) {
      delta = event.detail > 0 ? 1 : -1;
    }

    const step = -delta * ratio;
    const pos = this.windowToCanvasAxis(event);
    this.calcTransform(
      {
        scaleCenter: {
          ...pos,
          step,
        },
      },
      cropBox
    );
  },

  onDragStart(event) {
    event.stopPropagation();
    // This line is required for preventing page zooming in iOS browsers
    event.preventDefault();
    const { buttons, button } = event;
    if (!this.movable) {
      return;
    }
    if (
      this.disabled ||
      // Handle mouse event and pointer event and ignore touch event
      ((event.type === 'mousedown' ||
        (event.type === 'pointerdown' && event.pointerType === 'mouse')) &&
        // No primary button (Usually the left button)
        ((isNumber(buttons) && buttons !== 1) ||
          (isNumber(button) && button !== 0) ||
          // Open context menu
          event.ctrlKey))
    ) {
      return;
    }

    this.pointer = getPointer(event);
    this.action = ACTION_DRAG;

    addClass(this.canvas, CLASS_MOVE);
  },
  onDragMove(event) {
    event.stopPropagation();

    /***************************************************/
    //todo:看下怎么拆shape 事件
    const pointerCenter = this.windowToCanvasAxis(event);
    const id = this.calcSelectShape(pointerCenter);
    this.hoverShapId = id;
    /***************************************************/

    const { action } = this;
    if (!action) {
      return;
    }
    this.pointer = Object.assign({}, this.pointer, getPointer(event, true));
    event.preventDefault();
    const range = {
      x: this.pointer.endX - this.pointer.startX,
      y: this.pointer.endY - this.pointer.startY,
    };
    this.calcTransform({ translateX: range.x, translateY: range.y });
    // Override
    this.pointer.startX = this.pointer.endX;
    this.pointer.startY = this.pointer.endY;
  },
  onDragEnd(event) {
    event.stopPropagation();

    const { action } = this;
    if (!action) {
      return;
    }
    event.preventDefault();

    this.action = null;
    this.point = null;

    removeClass(this.canvas, CLASS_MOVE);
  },

  /* rect事件 */
  // onLeavel(event) {
  //     const pointerCenter = this.windowToCanvasAxis(event);
  //     this.highlightShape(pointerCenter);
  // },
  // onEnter(event) {
  //     this.highlightShape(null);
  // },
  onClick(event) {
    event.stopPropagation();
    const pointerCenter = this.windowToCanvasAxis(event);
    if (!this.isEyeOpen) {
      const id = this.calcSelectShape(pointerCenter);
      this.setSelectShapId(id);
    } else {
      //双目
      //先直接写在这里
      //过滤掉框，只有point
      let pointShapeList = this.shapeList.filter((v) => !v['w']);
      if (pointShapeList.length === 5) return;
      const originAxis = this.canvasAxisToOriginAxis(pointerCenter);
      const imageAxis = this.originAxisToImgAxis(originAxis);
      this.addShape(
        { id: `pointer_${guid()}`, selectAble: false, ...imageAxis },
        SHAPE_TYPE_CIRCLE
      );
      pointShapeList = this.shapeList.filter((v) => !v['w']);
      if (pointShapeList.length === 5) {
        dispatchEvent(this.element, EVENT_EYE_DONE);
      }
    }
  },
};
