---
nav:
  title: 函数库
  path: /tools
group:
  title: collectUtil
  order: 6
---

## collectUtil

<Alert type="info">
  <strong>集合类方法合集</strong>
</Alert>

### 通过条件计算

创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数。 iteratee 调用一个参数：(value)。

<Alert type="info">
  countBy(collection, [iteratee=_.identity])
</Alert>

#### 参数

* collection (Array|Object): 一个用来迭代的集合。
* [iteratee=_.identity] (Array|Function|Object|string): 一个迭代函数，用来转换key（键）。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

_.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }
 
_.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
```

### 通过条件排序

创建一个元素数组。 以 iteratee 处理的结果升序排序。 这个方法执行稳定排序，也就是说相同元素会保持原始排序。 iteratees 调用1个参数： (value)。

<Alert type="info">
  sortBy(collection, [iteratees=[_.identity]])
</Alert>

#### 参数

* collection (Array|Object): 一个用来迭代的集合。
* [iteratees=[_.identity]] (...(Array|Array[]|Function|Function[]|Object|Object[]|string|string[])): 这个函数决定排序。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, function(o) { return o.user; });
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 
_.sortBy(users, 'user', function(o) {
  return Math.floor(o.age / 10);
});
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

### 从集合中获得一个随机元素

<Alert type="info">
  sample(collection)
</Alert>

#### 参数

* collection (Array|Object): 一个用来迭代的集合。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

_.sample([1, 2, 3, 4]);
// => 2
```

### 从集合中获得n个随机元素

<Alert type="info">
  sampleSize(collection, [n=1])
</Alert>

#### 参数

* collection (Array|Object): 一个用来迭代的集合。
* [n=1] (number): 取样的元素个数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

_.sampleSize([1, 2, 3], 2);
// => [3, 1]
 
_.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
```

### 打乱集合

<Alert type="info">
  shuffle(collection)
</Alert>

#### 参数

* collection (Array|Object): 要打乱的集合。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

_.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
```

### 返回集合长度

返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。

<Alert type="info">
  size(collection)
</Alert>

#### 参数

* collection (Array|Object): 要检查的集合

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

_.size([1, 2, 3]);
// => 3
 
_.size({ 'a': 1, 'b': 2 });
// => 2
 
_.size('pebbles');
// => 7
```

### 判断真假值，并返回数组

创建一个分成两组的元素数组，第一组包含predicate（断言函数）返回为 truthy（真值）的元素，第二组包含predicate（断言函数）返回为 falsey（假值）的元素。predicate 调用1个参数：(value)。

<Alert type="info">
  partition(collection, [predicate=_.identity])
</Alert>

#### 参数

* collection (Array|Object): 要检查的集合
* [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var users = [
  { 'user': 'barney',  'age': 36, 'active': false },
  { 'user': 'fred',    'age': 40, 'active': true },
  { 'user': 'pebbles', 'age': 1,  'active': false }
];
 
_.partition(users, function(o) { return o.active; });
// => objects for [['fred'], ['barney', 'pebbles']]
 
_.partition(users, { 'age': 1, 'active': false });
// => objects for [['pebbles'], ['barney', 'fred']]
 
_.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]
 
_.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
```

### 升降序排列数组

此方法类似于 sortBy，除了它允许指定 iteratee（迭代函数）结果如何排序。 如果没指定 orders（排序），所有值以升序排序。 否则，指定为"desc" 降序，或者指定为 "asc" 升序，排序对应值。

<Alert type="info">
  orderBy(collection, [iteratees=[_.identity]], [orders])
</Alert>

#### 参数

* collection (Array|Object): 要检查的集合
* [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 排序的迭代函数。
* [orders] (string[]): iteratees迭代函数的排序顺序。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 34 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 36 }
];
 
// 以 `user` 升序排序 再  `age` 以降序排序。
_.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
```

### 遍历集合中的每个元素后返回的结果

创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：(value, index|key, collection).

<Alert type="info">
  orderBy(collection, [iteratees=[_.identity]], [orders])
</Alert>

#### 参数

* collection (Array|Object): 要检查的集合
* [iteratees=[_.identity]] (Array[]|Function[]|Object[]|string[]): 排序的迭代函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] 
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
_.map(users, 'user');
// => ['barney', 'fred']
```