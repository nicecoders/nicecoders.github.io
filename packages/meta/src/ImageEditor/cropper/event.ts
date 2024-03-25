//@ts-nocheck
import { addClass, removeClass } from 'rc-util/lib/Dom/class';
import { addEventListenerWrapper, isNumber, get } from '@nicecode/func';
import warn from 'rc-util/lib/warn';
import { getData, getPointer, getOffset, dispatchEvent } from '../utils';
import {
  //class
  CLASS_MASK,
  DATA_ACTION,
  ACTION_CROP,
  ACTION_MOVE,
  ACTION_EAST,
  ACTION_NORTH,
  ACTION_NORTH_EAST,
  ACTION_NORTH_WEST,
  ACTION_SOUTH,
  ACTION_SOUTH_EAST,
  ACTION_SOUTH_WEST,
  ACTION_WEST,
  CLASS_HIDDEN,
  // event
  EVENT_POINTER_DOWN,
  EVENT_POINTER_MOVE,
  EVENT_POINTER_UP,
  EVENT_CROP_CHANGE,
  EVENT_CROP_START,
  EVENT_CROP_END,
  EVENT_WHEEL,

  // 正则
  REGEXP_ACTIONS,
  REGEXP_SPACES,
} from './constants';

export default {
  bind() {
    const { container, element, eventHandleList = [], option } = this;

    const handleCropStart = addEventListenerWrapper(
      container,
      EVENT_POINTER_DOWN,
      this.onCropStart.bind(this)
    );
    eventHandleList.push(handleCropStart);
    const handleCropMove = addEventListenerWrapper(
      element.ownerDocument,
      EVENT_POINTER_MOVE,
      this.onCropMove.bind(this)
    );
    eventHandleList.push(handleCropMove);
    EVENT_POINTER_UP.trim()
      .split(REGEXP_SPACES)
      .forEach((eventName) => {
        const handleCropEnd = addEventListenerWrapper(
          element.ownerDocument,
          eventName,
          this.onCropEnd.bind(this)
        );
        eventHandleList.push(handleCropEnd);
      });
  },
  unbind() {
    const { eventHandleList } = this;
    for (let index = eventHandleList.length; index > 0; index--) {
      const handler = eventHandleList.shift;
      try {
        handler.remove();
      } catch (error) {
        warn('CROP:REMOVE_EVENT_FAIL: ', error);
      }
    }
  },

  onCropStart(event) {
    const { buttons, button } = event;
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
    const action = getData(event.target, DATA_ACTION);
    this.pointer = getPointer(event);
    if (!REGEXP_ACTIONS.test(action)) {
      return;
    }
    // This line is required for preventing page zooming in iOS browsers
    event.preventDefault();
    this.action = action;
    this.cropping = false;

    if (action === ACTION_CROP) {
      this.cropping = true;
      const { showMask } = this.options;
      if (showMask) {
        addClass(this.dragBox, CLASS_MASK);
      }
    }

    const hasCrop =
      get(this, 'cropBoxData.width', 0) !== 0 && get(this, 'cropBoxData.height', 0) !== 0;
    dispatchEvent(this.element, EVENT_CROP_START, hasCrop ? this?.cropBoxData : null);
    dispatchEvent(this.element, EVENT_CROP_CHANGE, hasCrop ? this?.cropBoxData : null);
  },
  onCropMove(event) {
    const { action } = this;
    if (!action) {
      return;
    }
    this.pointer = Object.assign({}, this.pointer, getPointer(event, true));
    event.preventDefault();
    //添加事件
    this.change(event);
  },
  onCropEnd(event) {
    const { action } = this;
    if (!action) {
      return;
    }
    event.preventDefault();

    this.action = null;
    this.point = null;
    if (this.cropping) {
      this.cropping = false;
      // removeClass(this.dragBox, CLASS_MASK);
    }
    const hasCrop =
      get(this, 'cropBoxData.width', 0) !== 0 && get(this, 'cropBoxData.height', 0) !== 0;
    dispatchEvent(this.element, EVENT_CROP_CHANGE, hasCrop ? this?.cropBoxData : null);
    hasCrop && dispatchEvent(this.element, EVENT_CROP_END, hasCrop ? this?.cropBoxData : null);
  },
  change(event) {
    const { options, containerData, cropBoxData = {}, pointer = {}, wrapper } = this;
    let { action } = this;
    //位置参数
    let { left, top, width, height } = cropBoxData;
    const right = left + width;
    const bottom = top + height;
    const minLeft = 0;
    const minTop = 0;
    const maxWidth = containerData.width;
    const maxHeight = containerData.height;
    //各种转换后是否需要渲染
    let renderable = true;
    let offset;

    const range = {
      x: pointer.endX - pointer.startX,
      y: pointer.endY - pointer.startY,
    };

    const check = (side) => {
      switch (side) {
        case ACTION_EAST:
          if (right + range.x > maxWidth) {
            range.x = maxWidth - right;
          }
          break;

        case ACTION_WEST:
          if (left + range.x < minLeft) {
            range.x = minLeft - left;
          }

          break;

        case ACTION_NORTH:
          if (top + range.y < minTop) {
            range.y = minTop - top;
          }

          break;

        case ACTION_SOUTH:
          if (bottom + range.y > maxHeight) {
            range.y = maxHeight - bottom;
          }

          break;

        default:
      }
    };
    switch (action) {
      // Create crop box
      case ACTION_CROP:
        if (!range.x || !range.y) {
          renderable = false;
          break;
        }
        offset = getOffset(this.container);

        left = pointer.startX - offset.left;
        top = pointer.startY - offset.top;
        width = cropBoxData.minWidth;
        height = cropBoxData.minHeight;

        if (!left) {
          debugger;
        }

        if (range.x > 0) {
          action = range.y > 0 ? ACTION_SOUTH_EAST : ACTION_NORTH_EAST;
        } else if (range.x < 0) {
          left -= width;
          action = range.y > 0 ? ACTION_SOUTH_WEST : ACTION_NORTH_WEST;
        }

        if (range.y < 0) {
          top -= height;
        }

        // Show the crop box if is hidden
        if (!this.cropped) {
          removeClass(this.cropBox, CLASS_HIDDEN);
          this.cropped = true;

          if (this.limited) {
            this.limitCropBox(true, true);
          }
        }

        break;
      // Move canvas
      case ACTION_MOVE:
        left += range.x;
        top += range.y;
        break;

      //     北n
      //  东w    西e
      //     南s

      // Resize crop box
      case ACTION_EAST:
        if (range.x >= 0 && right >= maxWidth) {
          renderable = false;
          break;
        }
        check(ACTION_EAST);
        width += range.x;

        if (width < 0) {
          action = ACTION_WEST;
          width = -width;
          left -= width;
        }
        break;

      case ACTION_NORTH:
        if (range.y <= 0 && top <= minTop) {
          renderable = false;
          break;
        }

        check(ACTION_NORTH);
        height -= range.y;
        top += range.y;

        if (height < 0) {
          action = ACTION_SOUTH;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_WEST:
        if (range.x <= 0 && left <= minLeft) {
          renderable = false;
          break;
        }

        check(ACTION_WEST);
        width -= range.x;
        left += range.x;

        if (width < 0) {
          action = ACTION_EAST;
          width = -width;
          left -= width;
        }
        break;

      case ACTION_SOUTH:
        if (range.y >= 0 && bottom >= maxHeight) {
          renderable = false;
          break;
        }

        check(ACTION_SOUTH);
        height += range.y;

        if (height < 0) {
          action = ACTION_NORTH;
          height = -height;
          top -= height;
        }
        break;

      case ACTION_NORTH_EAST:
        check(ACTION_NORTH);
        check(ACTION_EAST);

        if (range.x >= 0) {
          if (right < maxWidth) {
            width += range.x;
          } else if (range.y <= 0 && top <= minTop) {
            renderable = false;
          }
        } else {
          width += range.x;
        }

        if (range.y <= 0) {
          if (top > minTop) {
            height -= range.y;
            top += range.y;
          }
        } else {
          height -= range.y;
          top += range.y;
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_NORTH_WEST:
        check(ACTION_NORTH);
        check(ACTION_WEST);

        if (range.x <= 0) {
          if (left > minLeft) {
            width -= range.x;
            left += range.x;
          } else if (range.y <= 0 && top <= minTop) {
            renderable = false;
          }
        } else {
          width -= range.x;
          left += range.x;
        }

        if (range.y <= 0) {
          if (top > minTop) {
            height -= range.y;
            top += range.y;
          }
        } else {
          height -= range.y;
          top += range.y;
        }

        if (width < 0 && height < 0) {
          action = ACTION_SOUTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_NORTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_SOUTH_WEST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_SOUTH_WEST:
        check(ACTION_SOUTH);
        check(ACTION_WEST);

        if (range.x <= 0) {
          if (left > minLeft) {
            width -= range.x;
            left += range.x;
          } else if (range.y >= 0 && bottom >= maxHeight) {
            renderable = false;
          }
        } else {
          width -= range.x;
          left += range.x;
        }

        if (range.y >= 0) {
          if (bottom < maxHeight) {
            height += range.y;
          }
        } else {
          height += range.y;
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_EAST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          top -= height;
        }

        break;

      case ACTION_SOUTH_EAST:
        check(ACTION_SOUTH);
        check(ACTION_EAST);

        if (range.x >= 0) {
          if (right < maxWidth) {
            width += range.x;
          } else if (range.y >= 0 && bottom >= maxHeight) {
            renderable = false;
          }
        } else {
          width += range.x;
        }

        if (range.y >= 0) {
          if (bottom < maxHeight) {
            height += range.y;
          }
        } else {
          height += range.y;
        }

        if (width < 0 && height < 0) {
          action = ACTION_NORTH_WEST;
          height = -height;
          width = -width;
          top -= height;
          left -= width;
        } else if (width < 0) {
          action = ACTION_SOUTH_WEST;
          width = -width;
          left -= width;
        } else if (height < 0) {
          action = ACTION_NORTH_EAST;
          height = -height;
          top -= height;
        }
        break;

      default:
        break;
    }

    if (renderable) {
      cropBoxData.width = width;
      cropBoxData.height = height;
      cropBoxData.left = left;
      cropBoxData.top = top;
      this.action = action;
      this.cropBoxData = cropBoxData;
      this.renderCropBox();
    }
    // Override
    this.pointer.startX = this.pointer.endX;
    this.pointer.startY = this.pointer.endY;
  },
};
