import castArray from 'lodash/castArray';
import clone from 'lodash/clone';
import cloneDeep from 'lodash/cloneDeep';
import conformsTo from 'lodash/conformsTo';
import eq from 'lodash/eq';
import isArray from 'lodash/isArray';
import isArrayLike from 'lodash/isArrayLike';
import isArrayLikeObject from 'lodash/isArrayLikeObject';
import isBoolean from 'lodash/isBoolean';
import isDate from 'lodash/isDate';
import isBuffer from 'lodash/isBuffer';
import isElement from 'lodash/isElement';
import isEmpty from 'lodash/isEmpty';
import isEqual from 'lodash/isEqualWith';
import isError from 'lodash/isError';
import isFinite from 'lodash/isFinite';
import isFunction from 'lodash/isFunction';
import isInteger from 'lodash/isInteger';
import isSafeInteger from 'lodash/isSafeInteger';
import isMap from 'lodash/isMap';
import isMatch from 'lodash/isMatchWith';
import isNaN from 'lodash/isNaN';
import isNil from 'lodash/isNil';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import isNumber from 'lodash/isNumber';
import isObject from 'lodash/isObject';
import isObjectLike from 'lodash/isObjectLike';
import isPlainObject from 'lodash/isPlainObject';
import isRegExp from 'lodash/isRegExp';
import isSet from 'lodash/isSet';
import isString from 'lodash/isString';
import toArray from 'lodash/toArray';
import toFinite from 'lodash/toFinite';
import toString from 'lodash/toString';
import toPlainObject from 'lodash/toPlainObject';
import toNumber from 'lodash/toNumber';
export default {
  /**
   * 强制转换为数组
   */
  castArray: castArray,

  /**
   * 转换 value 为一个数组
   */
  toArray: toArray,

  /**
   * 转换 value 为一个有限数字
   */
  toFinite: toFinite,

  /**
   * 转换 value 为一个数字
   */
  toNumber: toNumber,

  /**
   * 转换 value 为一个字符串
   */
  toString: toString,

  /**
   * 转换 value 为一个普通对象
   */
  toPlainObject: toPlainObject,

  /**
   * 浅拷贝
   */
  clone: clone,

  /**
   * 深拷贝
   */
  cloneDeep: cloneDeep,

  /**
   * 通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source。
   */
  conformsTo: conformsTo,

  /**
   * 比较两者的值，来确定它们是否相等
   */
  eq: eq,

  /**
   * 判断是否是 Array 类对象。
   */
  isArray: isArray,

  /**
   * 判断是否为 类数组
   */
  isArrayLike: isArrayLike,

  /**
   * 判断是否为 类数组或者对象
   */
  isArrayLikeObject: isArrayLikeObject,

  /**
   * 判断是否是 Boolean
   */
  isBoolean: isBoolean,

  /**
   * 判断是否是 buffer
   */
  isBuffer: isBuffer,

  /**
   * 判断是否是 Date
   */
  isDate: isDate,

  /**
   * 判断是否是 DOM 节点
   */
  isElement: isElement,

  /**
   * 判断是否为 空
   */
  isEmpty: isEmpty,

  /**
   * 判断是否相等
   */
  isEqual: isEqual,

  /**
   * 判断是否为错误对象
   */
  isError: isError,

  /**
   * 判断是否为有限数值
   */
  isFinite: isFinite,

  /**
   * 判断是否为函数
   */
  isFunction: isFunction,

  /**
   * 判断是否为整数
   */
  isInteger: isInteger,

  /**
   * 判断是否为 map
   */
  isMap: isMap,

  /**
   * 执行一个深度比较，来确定 object 是否含有和 source 完全相等的属性值。
   */
  isMatch: isMatch,

  /**
   * 判断是否是 NaN
   */
  isNaN: isNaN,

  /**
   * 判断是否是 Null、undefined
   */
  isNil: isNil,
  isNull: isNull,
  isUndefined: isUndefined,

  /**
   * 判断是否是数字
   */
  isNumber: isNumber,

  /**
   * 判断是否是对象
   */
  isObject: isObject,

  /**
   * 判断是否是类对象
  */
  isObjectLike: isObjectLike,

  /**
   * 检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。
   */
  isPlainObject: isPlainObject,

  /**
   * 判断是否为正则表达式
   */
  isRegExp: isRegExp,

  /**
   * 判断是否为安全整数
   */
  isSafeInteger: isSafeInteger,

  /**
   * 判断是否为 Set 对象
   */
  isSet: isSet,

  /**
   * 判断是否为 String
   */
  isString: isString
};