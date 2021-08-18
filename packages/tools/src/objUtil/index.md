---
nav:
  title: 函数库
  path: /tools
group:
  title: objUtil
  order: 7
---

## objUtil

<Alert type="info">
  <strong>对象类方法</strong>
</Alert>


### 创建一个值来自 object 的paths 的数组

创建一个数组，值来自 object 的paths路径相应的值。


<Alert type="info">
  at(object, [paths])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [paths] (...(string|string[])): 要获取的对象的元素路径，单独指定或者指定在数组中。


#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
 
objUtil.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
```

### 分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上

分配来源对象的可枚举属性到目标对象所有解析为 undefined 的属性上。 来源对象从左到右应用。 一旦设置了相同属性的值，后续的将被忽略掉。

<Alert type="info">
  defaults(object, [sources])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [sources] (...Object): 来源对象。


#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

objUtil.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
// => { 'a': 1, 'b': 2 }

objUtil.defaults({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
// => { 'a': { 'b': 2, 'c': 3 } }
```

### 返回最先被 predicate 判断为真值的元素 key

这个方法类似 find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。

<Alert type="info">
  findKey(object, [predicate=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [predicate=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
objUtil.findKey(users, function(o) { return o.age < 40; });
// => 'barney' (iteration order is not guaranteed)
 
objUtil.findKey(users, { 'age': 1, 'active': true });
// => 'pebbles'
 
objUtil.findKey(users, ['active', false]);
// => 'fred'
 
objUtil.findKey(users, 'active');
// => 'barney'
```

### 反向返回最先被 predicate 判断为真值的元素 key

这个方法类似 find 。 除了它返回最先被 predicate 判断为真值的元素 key，而不是元素本身。

<Alert type="info">
  findLastKey(object, [predicate=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [predicate=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var users = {
  'barney':  { 'age': 36, 'active': true },
  'fred':    { 'age': 40, 'active': false },
  'pebbles': { 'age': 1,  'active': true }
};
 
objUtil.findLastKey(users, function(o) { return o.age < 40; });
// => returns 'pebbles' assuming `objUtil.findKey` returns 'barney'
 
objUtil.findLastKey(users, { 'age': 36, 'active': true });
// => 'barney'
 
objUtil.findLastKey(users, ['active', false]);
// => 'fred'
 
objUtil.findLastKey(users, 'active');
// => 'pebbles'
```

### 遍历对象的自身和继承的可枚举属性

使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。

<Alert type="info">
  forIn(object, [predicate=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [iteratee=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
objUtil.forIn(new Foo, function(value, key) {
  console.log(key);
});
// => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)
```

### 反向遍历对象的自身和继承的可枚举属性

这个方法类似 forIn。 除了它是反方向开始遍历object的。

<Alert type="info">
  forInRight(object, [predicate=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [iteratee=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
objUtil.forInRight(new Foo, function(value, key) {
  console.log(key);
});
// => 输出 'c', 'b', 然后 'a'， `forIn` 会输出 'a', 'b', 然后 'c'。
```

### 遍历自身的可枚举属性

> 不包括原型链上的属性和方法

<Alert type="info">
  forOwn(object, [iteratee=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [iteratee=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
objUtil.forOwn(new Foo, function(value, key) {
  console.log(key);
});
// => 输出 'a' 然后 'b' (无法保证遍历的顺序)。
```

### 反向遍历自身的可枚举属性

> 不包括原型链上的属性和方法

<Alert type="info">
  forOwnRight(object, [iteratee=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [iteratee=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

function Foo() {
  this.a = 1;
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
objUtil.forOwnRight(new Foo, function(value, key) {
  console.log(key);
});
// =>  输出 'b' 然后 'a'， `objUtil.forOwn` 会输出 'a' 然后 'b'
```

### 根据 object对象的path路径获取值

<Alert type="info">
  get(object, path, [defaultValue])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* path (Array|string): 要获取属性的路径。
* [defaultValue] (*): 如果解析值是 undefined ，这值会被返回。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
objUtil.get(object, 'a[0].b.c');
// => 3
 
objUtil.get(object, ['a', '0', 'b', 'c']);
// => 3
 
objUtil.get(object, 'a.b.c', 'default');
// => 'default'
```

### 检查 path 是否是object对象的属性

<Alert type="info">
  has(object, path)
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* path (Array|string): 要获取属性的路径。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': { 'b': 2 } };
var other = objUtil.create({ 'a': objUtil.create({ 'b': 2 }) });
 
objUtil.has(object, 'a');
// => true
 
objUtil.has(object, 'a.b');
// => true
 
objUtil.has(object, ['a', 'b']);
// => true

objUtil.has(object, 'b');
// => false
 
objUtil.has(other, 'a');
// => true


objUtil.has(other, 'b');
// => false
```

### 创建一个object键值倒置后的对象

创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。

<Alert type="info">
  invert(object)
</Alert>

#### 参数

* object (Object): 要迭代的对象。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': 1, 'b': 2, 'c': 1 };
 
objUtil.invert(object);
// => { '1': 'c', '2': 'b' }
```

### 调用object对象path上的方法

<Alert type="info">
  invoke(object, path, [args])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* path (Array|string): 用来调用的方法路径。
* [args] (...*): 调用的方法的参数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': [{ 'b': { 'c': [1, 2, 3, 4] } }] };
 
objUtil.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
```

### 创建一个加工过键值 key 的对象

反向版 mapValues。 这个方法创建一个对象，对象的值与object相同，并且 key 是通过 iteratee 运行 object 中每个自身可枚举属性名字符串 产生的。iteratee调用三个参数： (value, key, object)。

<Alert type="info">
  mapKeys(object, [iteratee=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [iteratee=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

objUtil.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
  return key + value;
});
// => { 'a1': 1, 'b2': 2 }
```

### 创建一个加工过键值 value 的对象

创建一个对象，这个对象的key与object对象相同，值是通过 iteratee 运行 object 中每个自身可枚举属性名字符串产生的。 iteratee调用三个参数： (value, key, object)。

<Alert type="info">
  mapValues(object, [iteratee=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [iteratee=objUtil.identity] (Function): 每次迭代时调用的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var users = {
  'fred':    { 'user': 'fred',    'age': 40 },
  'pebbles': { 'user': 'pebbles', 'age': 1 }
};
 
objUtil.mapValues(users, function(o) { return o.age; });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 
objUtil.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
```

### 递归合并对象

递归合并 sources 来源对象自身和继承的可枚举属性到 object 目标对象。如果目标值存在，被解析为undefined的sources 来源对象属性将被跳过。数组和普通对象会递归合并，其他对象和值会被直接分配覆盖。源对象从从左到右分配。后续的来源对象属性会覆盖之前分配的属性。它接受一个 customizer，调用以产生目标对象和来源对象属性的合并值。如果customizer 返回 undefined，将会由合并处理方法代替。 customizer调用与7个参数：(objValue, srcValue, key, object, source, stack)。

<Alert type="info">
  merge(object, [sources], customizer)
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [sources] (...Object): 来源对象。
* customizer (Function): 这个函数定制合并值。


#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
objUtil.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

function customizer(objValue, srcValue) {
  if (objUtil.isArray(objValue)) {
    return objValue.concat(srcValue);
  }
}
 
var object = { 'a': [1], 'b': [2] };
var other = { 'a': [3], 'b': [4] };
 
objUtil.merge(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }
```

### 返回忽略属性之外的object

这个对象忽略 predicate（断言函数）判断不是真值的属性后，object自身和继承的可枚举属性组成。predicate调用与2个参数：(value, key)。

<Alert type="info">
  omit(object, [predicate=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [predicate=objUtil.identity] (Function): 调用每一个属性的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
objUtil.omitBy(object, objUtil.isNumber);
// => { 'b': '2' }
```

### 返回指定属性的object

创建一个对象，这个对象组成为从 object 中经 predicate 判断为真值的属性。 predicate调用2个参数：(value, key)。

<Alert type="info">
  omit(object, [predicate=objUtil.identity])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* [predicate=objUtil.identity] (Function): 调用每一个属性的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': 1, 'b': '2', 'c': 3 };
 
objUtil.pickBy(object, objUtil.isNumber);
// => { 'a': 1, 'c': 3 }
```

### 返回指定 path 的属性

设置 object对象中对应 path 属性路径上的值，如果path不存在，则创建。 缺少的索引属性会创建为数组，而缺少的属性会创建为对象。 如果 customizer 返回 undefined 将会有它的处理方法代替。 customizer 调用3个参数： (nsValue, key, nsObject)。

<Alert type="info">
  set(object, path, value, [customizer])
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* path (Array|string): 要设置的对象路径。
* value (*): 要设置的值。
* [customizer] (Function): 这个函数用来定制分配的值。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = {};
 
objUtil.set(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }
```

### 移除指定 path 的属性

<Alert type="info">
  unset(object, path)
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* path (Array|string): 要设置的对象路径。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': [{ 'b': { 'c': 7 } }] };
objUtil.unset(object, 'a[0].b.c');
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
 
objUtil.unset(object, ['a', '0', 'b', 'c']);
// => true
 
console.log(object);
// => { 'a': [{ 'b': {} }] };
```

### 更新指定 path 的属性

<Alert type="info">
  update(object, path, updater)
</Alert>

#### 参数

* object (Object): 要迭代的对象。
* path (Array|string): 要设置的对象路径。
* updater (Function): 用来生成设置值的函数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/tools';

var object = { 'a': [{ 'b': { 'c': 3 } }] };
 
objUtil.update(object, 'a[0].b.c', function(n) { return n * n; });
console.log(object.a[0].b.c);
// => 9
 
objUtil.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
console.log(object.x[0].y.z);
// => 0
```

