"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _castArray = _interopRequireDefault(require("lodash/castArray"));

var _clone = _interopRequireDefault(require("lodash/clone"));

var _cloneDeep = _interopRequireDefault(require("lodash/cloneDeep"));

var _conformsTo = _interopRequireDefault(require("lodash/conformsTo"));

var _eq = _interopRequireDefault(require("lodash/eq"));

var _isArray = _interopRequireDefault(require("lodash/isArray"));

var _isArrayLike = _interopRequireDefault(require("lodash/isArrayLike"));

var _isArrayLikeObject = _interopRequireDefault(require("lodash/isArrayLikeObject"));

var _isBoolean = _interopRequireDefault(require("lodash/isBoolean"));

var _isDate = _interopRequireDefault(require("lodash/isDate"));

var _isBuffer = _interopRequireDefault(require("lodash/isBuffer"));

var _isElement = _interopRequireDefault(require("lodash/isElement"));

var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));

var _isEqualWith = _interopRequireDefault(require("lodash/isEqualWith"));

var _isError = _interopRequireDefault(require("lodash/isError"));

var _isFinite = _interopRequireDefault(require("lodash/isFinite"));

var _isFunction = _interopRequireDefault(require("lodash/isFunction"));

var _isInteger = _interopRequireDefault(require("lodash/isInteger"));

var _isSafeInteger = _interopRequireDefault(require("lodash/isSafeInteger"));

var _isMap = _interopRequireDefault(require("lodash/isMap"));

var _isMatchWith = _interopRequireDefault(require("lodash/isMatchWith"));

var _isNaN = _interopRequireDefault(require("lodash/isNaN"));

var _isNil = _interopRequireDefault(require("lodash/isNil"));

var _isNull = _interopRequireDefault(require("lodash/isNull"));

var _isUndefined = _interopRequireDefault(require("lodash/isUndefined"));

var _isNumber = _interopRequireDefault(require("lodash/isNumber"));

var _isObject = _interopRequireDefault(require("lodash/isObject"));

var _isObjectLike = _interopRequireDefault(require("lodash/isObjectLike"));

var _isPlainObject = _interopRequireDefault(require("lodash/isPlainObject"));

var _isRegExp = _interopRequireDefault(require("lodash/isRegExp"));

var _isSet = _interopRequireDefault(require("lodash/isSet"));

var _isString = _interopRequireDefault(require("lodash/isString"));

var _toArray = _interopRequireDefault(require("lodash/toArray"));

var _toFinite = _interopRequireDefault(require("lodash/toFinite"));

var _toString = _interopRequireDefault(require("lodash/toString"));

var _toPlainObject = _interopRequireDefault(require("lodash/toPlainObject"));

var _toNumber = _interopRequireDefault(require("lodash/toNumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /**
   * 强制转换为数组
   */
  castArray: _castArray.default,

  /**
   * 转换 value 为一个数组
   */
  toArray: _toArray.default,

  /**
   * 转换 value 为一个有限数字
   */
  toFinite: _toFinite.default,

  /**
   * 转换 value 为一个数字
   */
  toNumber: _toNumber.default,

  /**
   * 转换 value 为一个字符串
   */
  toString: _toString.default,

  /**
   * 转换 value 为一个普通对象
   */
  toPlainObject: _toPlainObject.default,

  /**
   * 浅拷贝
   */
  clone: _clone.default,

  /**
   * 深拷贝
   */
  cloneDeep: _cloneDeep.default,

  /**
   * 通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source。
   */
  conformsTo: _conformsTo.default,

  /**
   * 比较两者的值，来确定它们是否相等
   */
  eq: _eq.default,

  /**
   * 判断是否是 Array 类对象。
   */
  isArray: _isArray.default,

  /**
   * 判断是否为 类数组
   */
  isArrayLike: _isArrayLike.default,

  /**
   * 判断是否为 类数组或者对象
   */
  isArrayLikeObject: _isArrayLikeObject.default,

  /**
   * 判断是否是 Boolean
   */
  isBoolean: _isBoolean.default,

  /**
   * 判断是否是 buffer
   */
  isBuffer: _isBuffer.default,

  /**
   * 判断是否是 Date
   */
  isDate: _isDate.default,

  /**
   * 判断是否是 DOM 节点
   */
  isElement: _isElement.default,

  /**
   * 判断是否为 空
   */
  isEmpty: _isEmpty.default,

  /**
   * 判断是否相等
   */
  isEqual: _isEqualWith.default,

  /**
   * 判断是否为错误对象
   */
  isError: _isError.default,

  /**
   * 判断是否为有限数值
   */
  isFinite: _isFinite.default,

  /**
   * 判断是否为函数
   */
  isFunction: _isFunction.default,

  /**
   * 判断是否为整数
   */
  isInteger: _isInteger.default,

  /**
   * 判断是否为 map
   */
  isMap: _isMap.default,

  /**
   * 执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。
   */
  isMatch: _isMatchWith.default,

  /**
   * 判断是否是 NaN
   */
  isNaN: _isNaN.default,

  /**
   * 判断是否是 Null、undefined
   */
  isNil: _isNil.default,
  isNull: _isNull.default,
  isUndefined: _isUndefined.default,

  /**
   * 判断是否是数字
   */
  isNumber: _isNumber.default,

  /**
   * 判断是否是对象
   */
  isObject: _isObject.default,

  /**
   * 判断是否是类对象
  */
  isObjectLike: _isObjectLike.default,

  /**
   * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
   */
  isPlainObject: _isPlainObject.default,

  /**
   * 判断是否为正则表达式
   */
  isRegExp: _isRegExp.default,

  /**
   * 判断是否为安全整数
   */
  isSafeInteger: _isSafeInteger.default,

  /**
   * 判断是否为 Set 对象
   */
  isSet: _isSet.default,

  /**
   * 判断是否为 String
   */
  isString: _isString.default
};
exports.default = _default;