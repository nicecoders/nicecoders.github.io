"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _countBy = _interopRequireDefault(require("lodash/countBy"));

var _sortBy = _interopRequireDefault(require("lodash/sortBy"));

var _sample = _interopRequireDefault(require("lodash/sample"));

var _sampleSize = _interopRequireDefault(require("lodash/sampleSize"));

var _shuffle = _interopRequireDefault(require("lodash/shuffle"));

var _size = _interopRequireDefault(require("lodash/size"));

var _partition = _interopRequireDefault(require("lodash/partition"));

var _orderBy = _interopRequireDefault(require("lodash/orderBy"));

var _map = _interopRequireDefault(require("lodash/map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /**
   * 通过条件计算函数
   */
  countBy: _countBy.default,

  /**
   * 通过条件排序
   */
  sortBy: _sortBy.default,

  /**
   * 通过条件升降序
   */
  orderBy: _orderBy.default,

  /**
   * 从集合中随机获得一个值
   */
  sample: _sample.default,

  /**
   * 从collection（集合）中获得 n 个随机元素。
   */
  sampleSize: _sampleSize.default,

  /**
   * 打乱集合
   */
  shuffle: _shuffle.default,

  /**
   * 返回集合的长度
   */
  size: _size.default,

  /**
   * 返回两个真假值得数组
   */
  partition: _partition.default,

  /**
   * 遍历集合中的每个元素后返回的结果
   */
  map: _map.default
};
exports.default = _default;