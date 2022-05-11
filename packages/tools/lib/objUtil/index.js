"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _at = _interopRequireDefault(require("lodash/at"));

var _defaultsDeep = _interopRequireDefault(require("lodash/defaultsDeep"));

var _findKey = _interopRequireDefault(require("lodash/findKey"));

var _findLastKey = _interopRequireDefault(require("lodash/findLastKey"));

var _forIn = _interopRequireDefault(require("lodash/forIn"));

var _get = _interopRequireDefault(require("lodash/get"));

var _hasIn = _interopRequireDefault(require("lodash/hasIn"));

var _invert = _interopRequireDefault(require("lodash/invert"));

var _invoke = _interopRequireDefault(require("lodash/invoke"));

var _mapKeys = _interopRequireDefault(require("lodash/mapKeys"));

var _mapValues = _interopRequireDefault(require("lodash/mapValues"));

var _mergeWith = _interopRequireDefault(require("lodash/mergeWith"));

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _pickBy = _interopRequireDefault(require("lodash/pickBy"));

var _setWith = _interopRequireDefault(require("lodash/setWith"));

var _unset = _interopRequireDefault(require("lodash/unset"));

var _update = _interopRequireDefault(require("lodash/update"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /**
   * 创建一个数组，值来自 object 的paths路径相应的值。
   */
  at: _at.default,

  /**
   * 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。
   */
  defaults: _defaultsDeep.default,

  /**
   * 返回最先被 predicate 判断为真值的元素 key
   */
  findKey: _findKey.default,

  /**
   * 反向返回最先被 predicate 判断为真值的元素 key
   */
  findLastKey: _findLastKey.default,

  /**
   * 遍历对象的自身和继承的可枚举属性
   */
  forIn: _forIn.default,

  /**
   * 根据 object对象的path路径获取值
   */
  get: _get.default,

  /**
   * 判断 path 是否为 obj 的属性
   */
  has: _hasIn.default,

  /**
   * 返回键值倒置后的对象
   */
  invert: _invert.default,

  /**
   * 调用object对象path上的方法。
   */
  invoke: _invoke.default,

  /**
   * 该方法类似 assign， 除了它递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。
   */
  merge: _mergeWith.default,

  /**
   * 返回加工后的键值 key 对象
   */
  mapKeys: _mapKeys.default,

  /**
   * 返回加工后的键值 value 对象
   */
  mapValues: _mapValues.default,

  /**
   * 返回忽略属性之外的object
   */
  omit: _omitBy.default,

  /**
   * 返回选中属性的对象
   */
  pick: _pickBy.default,

  /**
   * 设置 object对象中对应 path 属性路径上的值
   */
  set: _setWith.default,

  /**
   * 移除 object对象中对应 path 属性路径上的值
   */
  unset: _unset.default,

  /**
   * 更新 object对象中对应 path 属性路径上的值
   */
  update: _update.default
};
exports.default = _default;