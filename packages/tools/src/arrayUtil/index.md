---
nav:
  title: 函数库
  path: /tools
group:
  title: arrayUtil
  order: 5
---

## arrayUtil

<Alert type="info">
  <strong>数组方法合集</strong>
</Alert>

### 将数组（array）拆分成多个 size 长度的区块

将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。

<Alert type="info">
  chunk(array, [size=1])
</Alert>

#### 参数

* array: 数组
* [size=1] (number): 每个数组区块的长度

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]
 
arrayUtil.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
```

### 创建一个新数组，包含原数组中所有的非假值元素

创建一个新数组，包含原数组中所有的非假值元素，例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。

<Alert type="info">
  compact(array)
</Alert>

#### 参数

* array: 数组

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
```

### 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中

创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

<Alert type="info">
  difference(array, [values])
</Alert>

#### 参数

* array: 数组

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.difference([3, 2, 1], [4, 2]);
// => [1, 2, 3]
```

### 创建一个具有唯一array值的数组(带迭代器)，每个值不包含在其他给定的数组中

创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。（愚人码头注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

<Alert type="info">
  differenceBy(array, [values], [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [values] (...Array): 排除的值。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): iteratee 调用每个元素

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The `arrayUtil.property` iteratee shorthand.
arrayUtil.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```

### 创建一个具有唯一array值的数组(带比较器)，每个值不包含在其他给定的数组中

它接受一个 comparator，它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)

<Alert type="info">
  differenceWith(array, [values], [comparator])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [values] (...Array): 排除的值。
* [comparator]: comparator 调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
arrayUtil.differenceWith(objects, [{ 'x': 1, 'y': 2 }], arrayUtil.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```



### 创建一个切片数组

创建一个切片数组，去除array前面的n个元素。（n默认值为1。）

<Alert type="info">
  drop(array, [n=1])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [n=1] (number): 要去除的元素个数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.drop([1, 2, 3]);
// => [2, 3]
 
arrayUtil.drop([1, 2, 3], 2);
// => [3]
 
arrayUtil.drop([1, 2, 3], 5);
// => []
 
arrayUtil.drop([1, 2, 3], 0);
// => [1, 2, 3]
```

### 创建一个切片数组（带迭代器）

创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。predicate 会传入3个参数： (value, index, array)。

<Alert type="info">
  dropWhile(array, [predicate=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [predicate=arrayUtil.identity] (Function): 这个函数会在每一次迭代调用。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
arrayUtil.dropWhile(users, function(o) { return !o.active; });
// => objects for ['pebbles']
 
// The `arrayUtil.matches` iteratee shorthand.
arrayUtil.dropWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['fred', 'pebbles']
 
// The `arrayUtil.matchesProperty` iteratee shorthand.
arrayUtil.dropWhile(users, ['active', false]);
// => objects for ['pebbles']
 
// The `arrayUtil.property` iteratee shorthand.
arrayUtil.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

### 创建一个去除尾部的切片数组

创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

<Alert type="info">
  dropRight(array, [n=1])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [n=1] (number): 要去除的元素个数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.dropRight([1, 2, 3]);
// => [1, 2]
 
arrayUtil.dropRight([1, 2, 3], 2);
// => [1]
 
arrayUtil.dropRight([1, 2, 3], 5);
// => []
 
arrayUtil.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
```

### 创建一个去除尾部的切片数组（带迭代器）

创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。

<Alert type="info">
  dropRightWhile(array, [predicate=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [predicate=arrayUtil.identity] (Function): 这个函数会在每一次迭代调用。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
arrayUtil.dropRightWhile(users, function(o) { return !o.active; });
// => objects for ['barney']
 
// The `arrayUtil.matches` iteratee shorthand.
arrayUtil.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['barney', 'fred']
 
// The `arrayUtil.matchesProperty` iteratee shorthand.
arrayUtil.dropRightWhile(users, ['active', false]);
// => objects for ['barney']
 
// The `arrayUtil.property` iteratee shorthand.
arrayUtil.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
```

### 使用 value 值来填充（替换） array

使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

<Alert type="info">
  fill(array, value, [start=0], [end=array.length])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* value (*): 填充给 array 的值。
* [start=0] (number): 开始位置（默认0）。
* [end=array.length] (number):结束位置（默认array.length）。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [1, 2, 3];
 
arrayUtil.fill(array, 'a');
// => ['a', 'a', 'a']
 
arrayUtil.fill(Array(3), 2);
// => [2, 2, 2]
 
arrayUtil.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```

### 返回第一个判断为真值的元素的索引值

该方法类似 arrayUtil.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。

<Alert type="info">
  findIndex(array, [predicate=arrayUtil.identity], [fromIndex=0])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [predicate=arrayUtil.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。
* [fromIndex=0] (number): The index to search from.

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
arrayUtil.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
arrayUtil.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
arrayUtil.findIndex(users, ['active', false]);
// => 0
 
arrayUtil.findIndex(users, 'active');
// => 2
```

### 返回最后一个判断为真值的元素的索引值

这个方式类似 arrayUtil.findIndex， 区别是它是从右到左的迭代集合array中的元素。

<Alert type="info">
  findLastIndex(array, [predicate=arrayUtil.identity], [fromIndex=array.length-1])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [predicate=arrayUtil.identity] (Array|Function|Object|string): 这个函数会在每一次迭代调用。
* [fromIndex=0] (number): The index to search from.

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';
 
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
arrayUtil.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
 
arrayUtil.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
arrayUtil.findLastIndex(users, ['active', false]);
// => 2
 
arrayUtil.findLastIndex(users, 'active');
// => 0
```

### 减少一级array嵌套深度

减少一级array嵌套深度。

<Alert type="info">
  flatten(array)
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```

### 将array递归为一维数组

将array递归为一维数组

<Alert type="info">
  flattenDeep(array)
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

### 根据 depth 递归减少 array 的嵌套层级

根据 depth 递归减少 array 的嵌套层级

<Alert type="info">
  flattenDepth(array, [depth=1])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [depth=1] (number):最多减少的嵌套层级数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [1, [2, [3, [4]], 5]];

arrayUtil.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
arrayUtil.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```


### 返回数组的交集

创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。

<Alert type="info">
  intersection([arrays])
</Alert>

#### 参数

* [arrays] (...Array): 待检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [1, [2, [3, [4]], 5]];

arrayUtil.intersection([2, 1], [4, 2], [1, 2]);
// => [2]
```

### 接受一个 iteratee 调用每一个 arrays 的每个值

这个方法类似 arrayUtil.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。

<Alert type="info">
  intersectionBy([arrays], [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* [arrays] (...Array): 待检查的数组。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
arrayUtil.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```

### 它接受一个 comparator 调用比较arrays中的元素

这个方法类似 arrayUtil.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。

<Alert type="info">
  intersectionWith([arrays], [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* [arrays] (...Array): 待检查的数组。
* [comparator] (Function): comparator（比较器）调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
arrayUtil.intersectionWith(objects, others, arrayUtil.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```

### 将 array 中的所有元素转换为由 separator 分隔的字符串

这个方法类似 arrayUtil.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。

<Alert type="info">
  join(array, [separator=','])
</Alert>

#### 参数

* [arrays] (...Array): 待检查的数组。
* [separator=','] (string): 分隔元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

### 获取array中的最后一个元素

<Alert type="info">
  join(array, [separator=','])
</Alert>

#### 参数

* [arrays] (...Array): 待检查的数组。
* [separator=','] (string): 分隔元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```

### 移除数组array中所有和给定值相等的元素

<Alert type="info">
  pullAll(array, values)
</Alert>

#### 参数

* array (Array): 要修改的数组。
* values (Array): 要移除值的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [1, 2, 3, 1, 2, 3];
 
arrayUtil.pullAll(array, [2, 3]);
// => [1, 1]
```

### 移除数组array中所有和给定值相等的元素

这个方法类似于 arrayUtil.pullAll ，区别是这个方法接受一个 iteratee（迭代函数）

<Alert type="info">
  pullAllBy(array, values, [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要修改的数组。
* values (Array): 要移除值的数组。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): iteratee（迭代器）调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
arrayUtil.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
// => [{ 'x': 2 }]
```

### 移除数组array中所有和给定值相等的元素

这个方法类似于 arrayUtil.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较

<Alert type="info">
  pullAllWith(array, values, [comparator])
</Alert>

#### 参数

* array (Array): 要修改的数组。
* values (Array): 要移除值的数组。
* [comparator] (Function): comparator（比较器）调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
arrayUtil.pullAllWith(array, [{ 'x': 3, 'y': 4 }], arrayUtil.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```

### 根据索引 indexes，移除array中对应的元素

根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。

<Alert type="info">
  pullAt(array, [indexes])
</Alert>

#### 参数

* array (Array): 要修改的数组。
* [indexes] (...(number|number[])): 要移除元素的索引。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [5, 10, 15, 20];
var evens = arrayUtil.pullAt(array, 1, 3);
 
console.log(array);
// => [5, 15]
 
console.log(evens);
// => [10, 20]
```

### 移除数组中predicate（断言）返回为真值的所有元素

移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组。predicate（断言） 会传入3个参数： (value, index, array)。

<Alert type="info">
  remove(array, [predicate=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要修改的数组。
* [predicate=arrayUtil.identity] (Array|Function|Object|string): 每次迭代调用的函数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var array = [1, 2, 3, 4];
var evens = arrayUtil.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```

### 评估插入到数组中 尽可能小的索引位置

使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。

<Alert type="info">
  sortedIndex(array, value)
</Alert>

#### 参数

* array (Array): 要检查的数组。
* value (*): 要评估的值。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.sortedIndex([30, 50], 40);
// => 1
```


### 评估插入到数组中 尽可能小的索引位置（迭代函数）

这个方法类似 sortedIndex ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）元素，返回结果和value 值比较来计算排序。iteratee 会传入一个参数：(value)。


<Alert type="info">
  sortedIndexBy(array, value, [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* value (*): 要评估的值。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var objects = [{ 'x': 4 }, { 'x': 5 }];
 
arrayUtil.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0
 
// The `arrayUtil.property` iteratee shorthand.
arrayUtil.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0
```

### 排序并且去重

这个方法类似 uniq，除了它会优化排序数组。

<Alert type="info">
  sortedUniq(array)
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.sortedUniq([1, 1, 2]);
// => [1, 2]
```


### 排序去重（迭代器版）

这个方法类似 uniq，除了它会优化排序数组。

<Alert type="info">
  sortedUniqBy(array, [iteratee])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [iteratee] (Function): 迭代函数，调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
```

### 从array数组的起始元素开始提取n个元素

创建一个数组切片，从array数组的起始元素开始提取n个元素。

<Alert type="info">
  take(array, [n=1])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [n=1] (number): 要提取的元素个数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.take([1, 2, 3]);
// => [1]
 
arrayUtil.take([1, 2, 3], 2);
// => [1, 2]
 
arrayUtil.take([1, 2, 3], 5);
// => [1, 2, 3]
 
arrayUtil.take([1, 2, 3], 0);
// => []
```


### 从array数组的起始元素开始提取元素，直到 predicate 返回假值

从array数组的起始元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。

<Alert type="info">
  takeWhile(array, [predicate=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [predicate=arrayUtil.identity] (Array|Function|Object|string): 每次迭代调用的函数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false},
  { 'user': 'pebbles', 'active': true }
];
 
arrayUtil.takeWhile(users, function(o) { return !o.active; });
// => objects for ['barney', 'fred']
 
// The `arrayUtil.matches` iteratee shorthand.
arrayUtil.takeWhile(users, { 'user': 'barney', 'active': false });
// => objects for ['barney']
 
// The `arrayUtil.matchesProperty` iteratee shorthand.
arrayUtil.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']
 
// The `arrayUtil.property` iteratee shorthand.
arrayUtil.takeWhile(users, 'active');
// => []
```


### 从array数组的最后元素往前提取n个元素

创建一个数组切片，从array数组的最后一个元素开始提取n个元素。

<Alert type="info">
  takeRight(array, [n=1])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [n=1] (number): 要提取的元素个数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.takeRight([1, 2, 3]);
// => [3]
 
arrayUtil.takeRight([1, 2, 3], 2);
// => [2, 3]
 
arrayUtil.takeRight([1, 2, 3], 5);
// => [1, 2, 3]
 
arrayUtil.takeRight([1, 2, 3], 0);
// => []
```

### 从array数组的最后一个元素开始提取元素，直到 predicate 返回假值

从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。

<Alert type="info">
  takeRightWhile(array, [predicate=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [predicate=arrayUtil.identity] (Array|Function|Object|string): 每次迭代调用的函数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
arrayUtil.takeRightWhile(users, function(o) { return !o.active; });
// => objects for ['fred', 'pebbles']
 
arrayUtil.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
// => objects for ['pebbles']
 
arrayUtil.takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']
 
arrayUtil.takeRightWhile(users, 'active');
// => []
```

### 创建一个按顺序的并集数组

创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用 SameValueZero做等值比较。

<Alert type="info">
  union([arrays])
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.union([2], [1, 2]);
// => [2, 1]
```

### 创建一个按顺序的并集数组（迭代器）

这个方法类似 union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。

<Alert type="info">
  unionBy([arrays], [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。


#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
arrayUtil.unionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

### 创建一个按顺序的并集数组（comparator版）

这个方法类似 union ，除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。

<Alert type="info">
  unionWith([arrays], [comparator])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [comparator] (Function): 比较函数，调用每个元素。


#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
arrayUtil.unionWith(objects, others, arrayUtil.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```

### 创建一个去重后的array数组副本

<Alert type="info">
  uniq(array)
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.uniq([2, 1, 2]);
// => [2, 1]
```

### 创建一个去重后的array数组副本(迭代器版)

这个方法类似 uniq ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 调用时会传入一个参数：(value)。

<Alert type="info">
  uniqBy(array, [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): 迭代函数，调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
arrayUtil.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

### 创建一个去重后的array数组副本(comparator版)

这个方法类似 uniq， 除了它接受一个 comparator 调用比较arrays数组的每一个元素。 comparator 调用时会传入2个参数： (arrVal, othVal)。

<Alert type="info">
  uniqWith(array, [comparator])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [comparator] (Function): 比较函数，调用每个元素。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
arrayUtil.uniqWith(objects, arrayUtil.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
```

### 接收多个数组并分组

这个方法类似于 zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。

<Alert type="info">
  unzip(array)
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var zipped = arrayUtil.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
 
arrayUtil.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```

### 接收多个数组并分组

这个方法类似于 arrayUtil.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。

<Alert type="info">
  unzip(array)
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var zipped = arrayUtil.zip(['fred', 'barney'], [30, 40], [true, false]);
// => [['fred', 30, true], ['barney', 40, false]]
 
arrayUtil.unzip(zipped);
// => [['fred', 'barney'], [30, 40], [true, false]]
```

### 接收多个数组并分组（迭代器）

此方法类似于 unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。


<Alert type="info">
  unzipWith(array, [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [iteratee=arrayUtil.identity] (Function): 这个函数用来组合重组的值。


#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var zipped = arrayUtil.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
 
arrayUtil.unzipWith(zipped, arrayUtil.add);
// => [3, 30, 300]
```

### 创建一个剔除所有给定值的新数组

创建一个剔除所有给定值的新数组，剔除值的时候，使用 SameValueZero做相等比较。

<Alert type="info">
  without(array, [values])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [values] (...*): 要剔除的值。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.without([2, 1, 2, 3], 1, 2);
// => [3]
```

### 创建一个不重复值的数组

创建一个不重复值的数组，使用 symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。

<Alert type="info">
  xor([arrays])
</Alert>

#### 参数

* array (Array): 要检查的数组。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.xor([2, 1], [2, 3]);
// => [1, 3]
```

### 创建一个不重复值的数组（迭代器）

这个方法类似 xor ，除了它接受 iteratee（迭代器），这个迭代器 调用每一个 arrays（数组）的每一个值，以生成比较的新值。iteratee 调用一个参数： (value).

<Alert type="info">
  xorBy([arrays], [iteratee=arrayUtil.identity])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [iteratee=arrayUtil.identity] (Array|Function|Object|string): 调用每一个元素的迭代函数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

arrayUtil.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]
 
arrayUtil.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```

### 创建一个不重复值的数组（comparator）

该方法是像 xor，除了它接受一个 comparator ，以调用比较数组的元素。 comparator 调用2个参数：(arrVal, othVal).

<Alert type="info">
  xorWith([arrays], [comparator])
</Alert>

#### 参数

* array (Array): 要检查的数组。
* [comparator] (Function): 调用每一个元素的比较函数。

#### 🌰 例子

```js
import { arrayUtil } from '@nicecode/tools';

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
arrayUtil.xorWith(objects, others, arrayUtil.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
```




