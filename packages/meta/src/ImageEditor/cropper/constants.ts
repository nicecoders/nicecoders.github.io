//@ts-nocheck
import { IS_TOUCH_DEVICE, HAS_POINTER_EVENT } from '../utils';

export const NAMESPACE = 'nicecode-cropper';

// Actions
export const ACTION_MOVE = 'move';
export const ACTION_CROP = 'crop';
export const ACTION_EAST = 'e';
export const ACTION_WEST = 'w';
export const ACTION_SOUTH = 's';
export const ACTION_NORTH = 'n';
export const ACTION_NORTH_EAST = 'ne';
export const ACTION_NORTH_WEST = 'nw';
export const ACTION_SOUTH_EAST = 'se';
export const ACTION_SOUTH_WEST = 'sw';

// Classes
export const CLASS_HIDDEN = `${NAMESPACE}-hidden`;
export const CLASS_MASK = `${NAMESPACE}-mask`;

// Data keys
export const DATA_ACTION = `${NAMESPACE}-action`;

// Events
export const EVENT_TOUCH_START = IS_TOUCH_DEVICE ? 'touchstart' : 'mousedown';
export const EVENT_TOUCH_MOVE = IS_TOUCH_DEVICE ? 'touchmove' : 'mousemove';
export const EVENT_TOUCH_END = IS_TOUCH_DEVICE ? 'touchend touchcancel' : 'mouseup';
export const EVENT_POINTER_DOWN = HAS_POINTER_EVENT ? 'pointerdown' : EVENT_TOUCH_START;
export const EVENT_POINTER_MOVE = HAS_POINTER_EVENT ? 'pointermove' : EVENT_TOUCH_MOVE;
export const EVENT_POINTER_UP = HAS_POINTER_EVENT ? 'pointerup pointercancel' : EVENT_TOUCH_END;
export const EVENT_WHEEL = 'wheel';

//custom event
export const EVENT_CROP_CHANGE = 'crop-change';
export const EVENT_CROP_START = 'crop-start';
export const EVENT_CROP_END = 'crop-end';

// RegExps
export const REGEXP_SPACES = /\s\s*/;
export const REGEXP_ACTIONS = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/;
