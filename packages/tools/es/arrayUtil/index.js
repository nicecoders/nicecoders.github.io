import chunk from 'lodash/chunk';
import compact from 'lodash/compact';
import difference from 'lodash/difference';
import differenceBy from 'lodash/differenceBy';
import differenceWith from 'lodash/differenceWith';
import drop from 'lodash/drop';
import dropRight from 'lodash/dropRight';
import dropRightWhile from 'lodash/dropRightWhile';
import dropWhile from 'lodash/dropWhile';
import fill from 'lodash/fill';
import findIndex from 'lodash/findIndex';
import findLastIndex from 'lodash/findLastIndex';
import flatten from 'lodash/flatten';
import flattenDeep from 'lodash/flattenDeep';
import flattenDepth from 'lodash/flattenDepth';
import intersection from 'lodash/intersection';
import intersectionBy from 'lodash/intersectionBy';
import intersectionWith from 'lodash/intersectionWith';
import join from 'lodash/join';
import pull from 'lodash/pull';
import pullAll from 'lodash/pullAll';
import pullAllBy from 'lodash/pullAllBy';
import pullAllWith from 'lodash/pullAllWith';
import pullAt from 'lodash/pullAt';
import remove from 'lodash/remove';
import sortedIndex from 'lodash/sortedIndex';
import sortedUniq from 'lodash/sortedUniq';
import take from 'lodash/take';
import takeRight from 'lodash/takeRight';
import takeWhile from 'lodash/takeWhile';
import takeRightWhile from 'lodash/takeWhile';
import union from 'lodash/union';
import unionBy from 'lodash/unionBy';
import unionWith from 'lodash/unionWith';
import uniq from 'lodash/uniq';
import uniqBy from 'lodash/uniqBy';
import uniqWith from 'lodash/uniqWith';
import unzip from 'lodash/unzip';
import unzipWith from 'lodash/unzipWith';
import zip from 'lodash/zip';
import without from 'lodash/without';
import xor from 'lodash/xor';
import xorBy from 'lodash/xorBy';
import xorWith from 'lodash/xorWith';
export default {
  /**
   * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
   */
  chunk: chunk,

  /**
   * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
   */
  compact: compact,
  difference: difference,
  differenceBy: differenceBy,
  differenceWith: differenceWith,
  drop: drop,
  dropRight: dropRight,
  dropRightWhile: dropRightWhile,
  dropWhile: dropWhile,
  fill: fill,
  findIndex: findIndex,
  findLastIndex: findLastIndex,
  flatten: flatten,
  flattenDeep: flattenDeep,
  flattenDepth: flattenDepth,
  intersection: intersection,
  intersectionWith: intersectionWith,
  intersectionBy: intersectionBy,
  join: join,
  pull: pull,
  pullAll: pullAll,
  pullAllWith: pullAllWith,
  pullAllBy: pullAllBy,
  pullAt: pullAt,
  remove: remove,
  sortedIndex: sortedIndex,

  /**
   * 它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。
  */
  sortedUniq: sortedUniq,

  /**
   * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
  */
  take: take,

  /**
   * 从array数组的起始元素开始提取元素，，直到 predicate 返回假值
   */
  takeWhile: takeWhile,

  /**
   * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
   */
  takeRight: takeRight,

  /**
   * 从array数组的最后一个元素开始提取元素，直到 predicate 返回假值
   */
  takeRightWhile: takeRightWhile,

  /**
   * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
   */
  union: union,

  /**
   * 这个方法类似 union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
   */
  unionBy: unionBy,

  /**
   * 这个方法类似 union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
   */
  unionWith: unionWith,

  /**
   * 创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
   */
  uniq: uniq,

  /**
   * 这个方法类似 uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。
   */
  uniqBy: uniqBy,

  /**
   * 这个方法类似 uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
   */
  uniqWith: uniqWith,

  /**
   * 这个方法类似于 zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（愚人码头：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
   */
  unzip: unzip,

  /**
   * 此方法类似于 unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。
   */
  unzipWith: unzipWith,

  /**
   * 创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero做相等比较。
   */
  without: without,

  /**
   * 创建一个给定数组唯一值的数组，使用 symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
   */
  xor: xor,

  /**
   * 这个方法类似 xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).
   */
  xorBy: xorBy,

  /**
   * 该方法是像 xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).
   */
  xorWith: xorWith,

  /**
   * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
   */
  zip: zip
};