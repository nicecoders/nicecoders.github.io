"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _chunk = _interopRequireDefault(require("lodash/chunk"));

var _compact = _interopRequireDefault(require("lodash/compact"));

var _difference = _interopRequireDefault(require("lodash/difference"));

var _differenceBy = _interopRequireDefault(require("lodash/differenceBy"));

var _differenceWith = _interopRequireDefault(require("lodash/differenceWith"));

var _drop = _interopRequireDefault(require("lodash/drop"));

var _dropRight = _interopRequireDefault(require("lodash/dropRight"));

var _dropRightWhile = _interopRequireDefault(require("lodash/dropRightWhile"));

var _dropWhile = _interopRequireDefault(require("lodash/dropWhile"));

var _fill = _interopRequireDefault(require("lodash/fill"));

var _findIndex = _interopRequireDefault(require("lodash/findIndex"));

var _findLastIndex = _interopRequireDefault(require("lodash/findLastIndex"));

var _flatten = _interopRequireDefault(require("lodash/flatten"));

var _flattenDeep = _interopRequireDefault(require("lodash/flattenDeep"));

var _flattenDepth = _interopRequireDefault(require("lodash/flattenDepth"));

var _intersection = _interopRequireDefault(require("lodash/intersection"));

var _intersectionBy = _interopRequireDefault(require("lodash/intersectionBy"));

var _intersectionWith = _interopRequireDefault(require("lodash/intersectionWith"));

var _join = _interopRequireDefault(require("lodash/join"));

var _pull = _interopRequireDefault(require("lodash/pull"));

var _pullAll = _interopRequireDefault(require("lodash/pullAll"));

var _pullAllBy = _interopRequireDefault(require("lodash/pullAllBy"));

var _pullAllWith = _interopRequireDefault(require("lodash/pullAllWith"));

var _pullAt = _interopRequireDefault(require("lodash/pullAt"));

var _remove = _interopRequireDefault(require("lodash/remove"));

var _sortedIndex = _interopRequireDefault(require("lodash/sortedIndex"));

var _sortedUniq = _interopRequireDefault(require("lodash/sortedUniq"));

var _take = _interopRequireDefault(require("lodash/take"));

var _takeRight = _interopRequireDefault(require("lodash/takeRight"));

var _takeWhile = _interopRequireDefault(require("lodash/takeWhile"));

var _union = _interopRequireDefault(require("lodash/union"));

var _unionBy = _interopRequireDefault(require("lodash/unionBy"));

var _unionWith = _interopRequireDefault(require("lodash/unionWith"));

var _uniq = _interopRequireDefault(require("lodash/uniq"));

var _uniqBy = _interopRequireDefault(require("lodash/uniqBy"));

var _uniqWith = _interopRequireDefault(require("lodash/uniqWith"));

var _unzip = _interopRequireDefault(require("lodash/unzip"));

var _unzipWith = _interopRequireDefault(require("lodash/unzipWith"));

var _zip = _interopRequireDefault(require("lodash/zip"));

var _without = _interopRequireDefault(require("lodash/without"));

var _xor = _interopRequireDefault(require("lodash/xor"));

var _xorBy = _interopRequireDefault(require("lodash/xorBy"));

var _xorWith = _interopRequireDefault(require("lodash/xorWith"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /**
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
   */
  chunk: _chunk.default,

  /**
   * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
   */
  compact: _compact.default,
  difference: _difference.default,
  differenceBy: _differenceBy.default,
  differenceWith: _differenceWith.default,
  drop: _drop.default,
  dropRight: _dropRight.default,
  dropRightWhile: _dropRightWhile.default,
  dropWhile: _dropWhile.default,
  fill: _fill.default,
  findIndex: _findIndex.default,
  findLastIndex: _findLastIndex.default,
  flatten: _flatten.default,
  flattenDeep: _flattenDeep.default,
  flattenDepth: _flattenDepth.default,
  intersection: _intersection.default,
  intersectionWith: _intersectionWith.default,
  intersectionBy: _intersectionBy.default,
  join: _join.default,
  pull: _pull.default,
  pullAll: _pullAll.default,
  pullAllWith: _pullAllWith.default,
  pullAllBy: _pullAllBy.default,
  pullAt: _pullAt.default,
  remove: _remove.default,
  sortedIndex: _sortedIndex.default,

  /**
   * 它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。
  */
  sortedUniq: _sortedUniq.default,

  /**
   * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
  */
  take: _take.default,

  /**
   * 从array数组的起始元素开始提取元素，，直到 predicate 返回假值
   */
  takeWhile: _takeWhile.default,

  /**
   * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
   */
  takeRight: _takeRight.default,

  /**
   * 从array数组的最后一个元素开始提取元素，直到 predicate 返回假值
   */
  takeRightWhile: _takeWhile.default,

  /**
   * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
   */
  union: _union.default,

  /**
   * 这个方法类似 union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
   */
  unionBy: _unionBy.default,

  /**
   * 这个方法类似 union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
   */
  unionWith: _unionWith.default,

  /**
   * 创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
   */
  uniq: _uniq.default,

  /**
   * 这个方法类似 uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。
   */
  uniqBy: _uniqBy.default,

  /**
   * 这个方法类似 uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
   */
  uniqWith: _uniqWith.default,

  /**
   * 这个方法类似于 zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（愚人码头：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
   */
  unzip: _unzip.default,

  /**
   * 此方法类似于 unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。
   */
  unzipWith: _unzipWith.default,

  /**
   * 创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero做相等比较。
   */
  without: _without.default,

  /**
   * 创建一个给定数组唯一值的数组，使用 symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
   */
  xor: _xor.default,

  /**
   * 这个方法类似 xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).
   */
  xorBy: _xorBy.default,

  /**
   * 该方法是像 xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).
   */
  xorWith: _xorWith.default,

  /**
   * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
   */
  zip: _zip.default
};
exports.default = _default;