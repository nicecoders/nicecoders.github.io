declare const _default: {
    /**
     * 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块
     */
    chunk: any;
    /**
     * 创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
     */
    compact: any;
    difference: any;
    differenceBy: any;
    differenceWith: any;
    drop: any;
    dropRight: any;
    dropRightWhile: any;
    dropWhile: any;
    fill: any;
    findIndex: any;
    findLastIndex: any;
    flatten: any;
    flattenDeep: any;
    flattenDepth: any;
    intersection: any;
    intersectionWith: any;
    intersectionBy: any;
    join: any;
    pull: any;
    pullAll: any;
    pullAllWith: any;
    pullAllBy: any;
    pullAt: any;
    remove: any;
    sortedIndex: any;
    /**
     * 它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。
    */
    sortedUniq: any;
    /**
     * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
    */
    take: any;
    /**
     * 从array数组的起始元素开始提取元素，，直到 predicate 返回假值
     */
    takeWhile: any;
    /**
     * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
     */
    takeRight: any;
    /**
     * 从array数组的最后一个元素开始提取元素，直到 predicate 返回假值
     */
    takeRightWhile: any;
    /**
     * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
     */
    union: any;
    /**
     * 这个方法类似 union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
     */
    unionBy: any;
    /**
     * 这个方法类似 union， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
     */
    unionWith: any;
    /**
     * 创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
     */
    uniq: any;
    /**
     * 这个方法类似 uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。
     */
    uniqBy: any;
    /**
     * 这个方法类似 uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。
     */
    uniqWith: any;
    /**
     * 这个方法类似于 zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。（愚人码头：返回数组的第一个元素包含所有的输入数组的第一元素，第一个元素包含了所有的输入数组的第二元素，依此类推。）
     */
    unzip: any;
    /**
     * 此方法类似于 unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。
     */
    unzipWith: any;
    /**
     * 创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero做相等比较。
     */
    without: any;
    /**
     * 创建一个给定数组唯一值的数组，使用 symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
     */
    xor: any;
    /**
     * 这个方法类似 xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).
     */
    xorBy: any;
    /**
     * 该方法是像 xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).
     */
    xorWith: any;
    /**
     * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
     */
    zip: any;
};
export default _default;
