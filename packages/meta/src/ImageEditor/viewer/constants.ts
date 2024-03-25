import { IS_TOUCH_DEVICE, HAS_POINTER_EVENT } from '../utils';

export const NAMESPACE = 'nicecode-viewer';

// Actions
export const ACTION_DRAG = 'drag';

// Classes
export const CLASS_CANVAS = `${NAMESPACE}-canvas`;
export const CLASS_MOVE = `${NAMESPACE}-move`;

// Events
export const EVENT_CLICK = 'click';
export const EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
export const EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
export const EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
export const EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
export const EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
export const EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
export const EVENT_WHEEL = 'wheel';
export const EVENT_LEAVEL = 'mouseleave';
export const EVENT_ENTER = 'mouseenter';
//custom event
export const EVENT_VIEWER_TRANSFORM_CHANGE = 'viewer-transform-change';
export const EVENT_VIEWER_READY = 'viewer-ready';
export const EVENT_VIEWER_ERROR = 'viewer-error';
export const EVENT_SHAPE_SELECT = 'shape-select';
export const EVENT_EYE_DONE = 'eye-done';

// RegExps
export const REGEXP_SPACES = /\s\s*/;

//变换前的坐标（左上角为原点）
export const AXIS_TYPE_ORIGIN = 1;
//变换后显示在画布中的坐标（还是左上角为原点）
export const AXIS_TYPE_CANVAS = 2;
//基于图片的坐标轴 原点为图片左上角
export const AXIS_TYPE_IMAGE = 3;

//形状
export const SHAPE_TYPE_CUSTOM = 1;
export const SHAPE_TYPE_RECT = 2;
export const SHAPE_TYPE_CIRCLE = 3;
