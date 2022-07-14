---
nav:
  title: 函数库
  path: /tools
group:
  title: langUtil
  order: 3
---

## langUtil

<Alert type="info">
  <strong>lang 方法合集</strong>
</Alert>

### 强制转为数组

<Alert type="info">
  castArray(value)
</Alert>

#### 参数

* value (*): 要处理的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.castArray(1);
// => [1]
 
langUtil.castArray({ 'a': 1 });
// => [{ 'a': 1 }]
 
langUtil.castArray('abc');
// => ['abc']
 
langUtil.castArray(null);
// => [null]
 
langUtil.castArray(undefined);
// => [undefined]
 
langUtil.castArray();
// => []
 
var array = [1, 2, 3];
console.log(langUtil.castArray(array) === array);
// => true
```

### 浅拷贝

<Alert type="info">
  clone(value)
</Alert>

#### 参数

* value (*): 要处理的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = langUtil.clone(objects);
console.log(shallow[0] === objects[0]);
// => true
```

### 深拷贝

<Alert type="info">
  cloneDeep(value)
</Alert>

#### 参数

* value (*): 要处理的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = langUtil.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```

### 检查 object是否符合 source

通过调用断言source的属性与 object 的相应属性值，检查 object是否符合 source.

<Alert type="info">
  conformsTo(object, source)
</Alert>

#### 参数

* object (*): 要处理的值。
* source (Object): 要断言属性是否符合的对象。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

var object = { 'a': 1, 'b': 2 };
 
langUtil.conformsTo(object, { 'b': function(n) { return n > 1; } });
// => true
 
langUtil.conformsTo(object, { 'b': function(n) { return n > 2; } });
// => false
```

### 检查两者值是否相等

<Alert type="info">
  eq(value, other)
</Alert>

#### 参数

* value (*): 要比较的值。
* other (*): 另一个要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

var object = { 'a': 1 };
var other = { 'a': 1 };
 
langUtil.eq(object, object);
// => true
 
langUtil.eq(object, other);
// => false
 
langUtil.eq('a', 'a');
// => true
 
langUtil.eq('a', Object('a'));
// => false
 
langUtil.eq(NaN, NaN);
// => true
```

### 判断是否是 Array

<Alert type="info">
  isArray(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isArray([1, 2, 3]);
// => true
 
langUtil.isArray(document.body.children);
// => false
 
langUtil.isArray('abc');
// => false
 
langUtil.isArray(langUtil.noop);
// => false
```

### 判断是否是类数组

<Alert type="info">
  isArrayLike(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isArrayLike([1, 2, 3]);
// => true
 
langUtil.isArrayLike(document.body.children);
// => true
 
langUtil.isArrayLike('abc');
// => true
 
langUtil.isArrayLike(langUtil.noop);
// => false
```

### 判断是否是类数组或对象

<Alert type="info">
  isArrayLikeObject(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isArrayLikeObject([1, 2, 3]);
// => true
 
langUtil.isArrayLikeObject(document.body.children);
// => true
 
langUtil.isArrayLikeObject('abc');
// => false
 
langUtil.isArrayLikeObject(langUtil.noop);
// => false
```

### 判断是否是boolean

<Alert type="info">
  isBoolean(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isBoolean(false);
// => true
 
langUtil.isBoolean(null);
// => false
```

### 判断是否是Date

<Alert type="info">
  isDate(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isDate(new Date); 
// => true
 
langUtil.isDate('Mon April 23 2012');
// => false
```

### 判断是否是 buffer

<Alert type="info">
  isBuffer(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isBuffer(new Buffer(2));
// => true
 
langUtil.isBuffer(new Uint8Array(2));
// => false
```

### 判断是否是 Dom 元素

<Alert type="info">
  isElement(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isElement(document.body);
// => true
 
langUtil.isElement('<body>');
// => false
```

### 判断是否为空

判断是否为一个空对象，集合，映射或者set。 判断的依据是除非是有枚举属性的对象，length 大于 0 的 arguments object, array, string 或类jquery选择器。

<Alert type="info">
  isEmpty(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isEmpty(null);
// => true
 
langUtil.isEmpty(true);
// => true
 
langUtil.isEmpty(1);
// => true
 
langUtil.isEmpty([1, 2, 3]);
// => false
 
langUtil.isEmpty({ 'a': 1 });
// => false
```

### 执行深比较来确定两者的值是否相等

它接受一个 customizer 用来定制比较值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入6个参数：(objValue, othValue [, index|key, object, other, stack])

> **注意: **这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps, numbers, Object objects, regexes, sets, strings, symbols, 以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和DOM节点比较。

<Alert type="info">
  isEqual(value, other, [customizer])
</Alert>

#### 参数

* value (*): 要比较的值。
* other (*): 另一个用来比较的值。
* [customizer] (Function): 用来定制比较值的函数。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

function isGreeting(value) {
  return /^h(?:i|ello)$/.test(value);
}
 
function customizer(objValue, othValue) {
  if (isGreeting(objValue) && isGreeting(othValue)) {
    return true;
  }
}
 
var array = ['hello', 'goodbye'];
var other = ['hi', 'goodbye'];
 
langUtil.isEqualWith(array, other, customizer);
// => true
```

### 执行深比较来确定两者的值是否相等

判断是否是 Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, 或者 URIError对象。

<Alert type="info">
  isError(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isError(new Error);
// => true
 
langUtil.isError(Error);
// => false
```

### 判断是否是原始有限数值

<Alert type="info">
  isFinite(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isFinite(3);
// => true
 
langUtil.isFinite(Number.MIN_VALUE);
// => true
 
langUtil.isFinite(Infinity);
// => false
 
langUtil.isFinite('3');
// => false
```

### 判断是否为函数

<Alert type="info">
  isFunction(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isFunction(_);
// => true
 
langUtil.isFunction(/abc/);
// => false
```

### 判断是否为整数

<Alert type="info">
  isInteger(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isInteger(3);
// => true
 
langUtil.isInteger(Number.MIN_VALUE);
// => false
 
langUtil.isInteger(Infinity);
// => false
 
langUtil.isInteger('3');
// => false
```

### 判断是否为 Map

<Alert type="info">
  isMap(value)
</Alert>

#### 参数

* value (*): 要比较的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isMap(new Map);
// => true
 
langUtil.isMap(new WeakMap);
// => false
```

### 比较来确定 object 是否含有和 source 完全相等的属性值

它接受一个 customizer 定制比较的值。 如果 customizer 返回 undefined 将会比较处理方法代替。 customizer 会传入5个参数：(objValue, srcValue, index|key, object, source)。

<Alert type="info">
  isMatch(object, source)
</Alert>

#### 参数

* object (Object): 要检查的对象。
* source (Object): 属性值相匹配的对象。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

var object = { 'a': 1, 'b': 2 };
 
langUtil.isMatch(object, { 'b': 2 });
// => true
 
langUtil.isMatch(object, { 'b': 1 });
// => false
```

### 判断是否是 NaN

> 注意: 这个方法基于 Number.isNaN，和全局的 isNaN 不同之处在于，全局的 isNaN对 于 undefined 和其他非数字的值返回 true。

<Alert type="info">
  isNaN(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isNaN(NaN);
// => true
 
langUtil.isNaN(new Number(NaN));
// => true
 
isNaN(undefined);
// => true
 
langUtil.isNaN(undefined);
// => false
```

### 判断是否是 undefined、null

> 另外还有：langUtil.isNull、langUtil.isUndefined 方法单独判断

<Alert type="info">
  isNil(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isNil(null);
// => true
 
langUtil.isNil(void 0);
// => true
 
langUtil.isNil(NaN);
// => false
```

### 判断是否是数字

> 注意: 要排除 Infinity, -Infinity, 以及 NaN 数值类型，用 langUtil.isFinite 方法。

<Alert type="info">
  isNumber(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isNumber(3);
// => true
 
langUtil.isNumber(Number.MIN_VALUE);
// => true
 
langUtil.isNumber(Infinity);
// => true
 
langUtil.isNumber('3');
// => false
```

### 判断是否是Object

<Alert type="info">
  isObject(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isObject({});
// => true
 
langUtil.isObject([1, 2, 3]);
// => true
 
langUtil.isObject(langUtil.noop);
// => true
 
langUtil.isObject(null);
// => false
```

### 判断是否是类对象

检查 value 是否是 类对象。 如果一个值是类对象，那么它不应该是 null，而且 typeof 后的结果是 "object"。

<Alert type="info">
  isObjectLike(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isObjectLike({});
// => true
 
langUtil.isObjectLike([1, 2, 3]);
// => true
 
langUtil.isObjectLike(langUtil.noop);
// => false
 
langUtil.isObjectLike(null);
// => false
```

### 判断是否是普通对象

检查 value 是否是普通对象。 也就是说该对象由 Object 构造函数创建，或者 [[Prototype]] 为 null 。

<Alert type="info">
  isObjectLike(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

function Foo() {
  this.a = 1;
}
 
langUtil.isPlainObject(new Foo);
// => false
 
langUtil.isPlainObject([1, 2, 3]);
// => false
 
langUtil.isPlainObject({ 'x': 0, 'y': 0 });
// => true
 
langUtil.isPlainObject(Object.create(null));
// => true
```

### 判断是否是正则表达式

检查 value 是否为RegExp对象。

<Alert type="info">
  isRegExp(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isRegExp(/abc/);
// => true
 
langUtil.isRegExp('/abc/');
// => false
```

### 判断是否是一个安全整数

检查 value 是否是一个安全整数。 一个安全整数应该是符合 IEEE-754 标准的非双精度浮点数。

<Alert type="info">
  isSafeInteger(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isSafeInteger(3);
// => true
 
langUtil.isSafeInteger(Number.MIN_VALUE);
// => false
 
langUtil.isSafeInteger(Infinity);
// => false
 
langUtil.isSafeInteger('3');
// => false
```

### 判断是否是一个 Set

<Alert type="info">
  isSet(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isSet(new Set);
// => true
 
langUtil.isSet(new WeakSet);
// => false
```

### 判断是否是一个 String

<Alert type="info">
  isString(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.isString('abc');
// => true
 
langUtil.isString(1);
// => false
```

### 转换 value 为一个数组

<Alert type="info">
  toArray(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.toArray({ 'a': 1, 'b': 2 });
// => [1, 2]
 
langUtil.toArray('abc');
// => ['a', 'b', 'c']
 
langUtil.toArray(1);
// => []
 
langUtil.toArray(null);
// => []
```


### 转换 value 为一个有限数字

<Alert type="info">
  toFinite(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.toFinite(3.2);
// => 3.2
 
langUtil.toFinite(Number.MIN_VALUE);
// => 5e-324
 
langUtil.toFinite(Infinity);
// => 1.7976931348623157e+308
 
langUtil.toFinite('3.2');
// => 3.2
```

### 转换 value 为一个普通对象

<Alert type="info">
  toPlainObject(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

function Foo() {
  this.b = 2;
}
 
Foo.prototype.c = 3;
 
langUtil.assign({ 'a': 1 }, new Foo);
// => { 'a': 1, 'b': 2 }
 
langUtil.assign({ 'a': 1 }, langUtil.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }
```

### 转换 value 为一个字符串

<Alert type="info">
  toString(value)
</Alert>

#### 参数

* value (*): 要检查的值。

#### 🌰 例子

```js
import { langUtil } from '@nicecode/tools';

langUtil.toString(null);
// => ''
 
langUtil.toString(-0);
// => '-0'
 
langUtil.toString([1, 2, 3]);
// => '1,2,3'
```