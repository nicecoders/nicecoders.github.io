---
nav:
  title: 函数库
  path: /tools
group:
  title: 常用函数：funcUtil
  order: 5
---

## 常用函数：funcUtil

<Alert type="info">
  <strong>常用函数方法合集</strong>
</Alert>

### 当被调用 n 次之前执行

当被调用 n 次之前执行，超过不执行

<Alert type="info">
  before(n, func)
</Alert>

#### 参数

- n (number): func 方法应该在调用多少次后才执行。
- func (Function): 用来执行的函数。

#### 🌰 例子

```jsx
import React from 'react';
import { funcUtil } from '@nicecode/func';

export default () => (
  <div
    style={{ cursor: 'pointer' }}
    onClick={() => funcUtil.before(5, () => alert('nicecode'))}
  >
    点我
  </div>
);
```

### 当被调用 n 次之后执行

before 的反向函数;此方法创建一个函数，当他被调用 n 或更多次之后将马上触发 func 。

<Alert type="info">
  after(n, func)
</Alert>

#### 参数

- n (number): func 方法应该在调用多少次后才执行。
- func (Function): 用来执行的函数。

#### 🌰 例子

```jsx
import React from 'react';
import { funcUtil } from '@nicecode/func';

var saves = ['profile', 'settings'];

var done = funcUtil.after(saves.length, function () {
  alert('nicecode!');
});

export default () => (
  <div style={{ cursor: 'pointer' }} onClick={() => done()}>
    我会在被点{saves.length}次后执行
  </div>
);
```

### 绑定 func 函数中的 this

创建一个调用 func 的函数，thisArg 绑定 func 函数中的 this，并且 func 函数会接收 partials 附加参数。

<Alert type="info">
  bind(func, thisArg, [partials])
</Alert>

#### 参数

- func (Function): 绑定的函数。
- thisArg (\*): func 绑定的 this 对象。
- [partials] (...\*): 附加的部分参数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

var greet = function (greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
};

var object = { user: 'fred' };

var bound = funcUtil.bind(greet, object, 'hi');
bound('!');
// => 'hi fred!'

// 给个占位符
var bound = funcUtil.bind(greet, object, _, '!');
bound('hi');
// => 'hi fred!'
```

### 绑定 func 函数中的 this

创建一个函数,在 object[key]上通过接收 partials 附加参数，调用这个方法。

这个方法与 bind 的不同之处在于允许重新定义绑定函数即使它还不存在。

<Alert type="info">
  bindKey(object, key, [partials])
</Alert>

#### 参数

- object (Object): 需要绑定函数的对象。
- key (string): 需要绑定函数对象的键。
- [partials] (...\*): 附加的部分参数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

var object = {
  user: 'fred',
  greet: function (greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  },
};

var bound = funcUtil.bindKey(object, 'greet', 'hi');
bound('!');
// => 'hi fred!'

object.greet = function (greeting, punctuation) {
  return greeting + 'ya ' + this.user + punctuation;
};

bound('!');
// => 'hiya fred!'

// 默认 _ 占位符
var bound = funcUtil.bindKey(object, 'greet', _, '!');
bound('hi');
// => 'hiya fred!'
```

### 防抖

创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（愚人码头注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。

> 注意: 如果 leading 和 trailing 选项为 true, 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用防抖方法。

> 如果 wait 为 0 并且 leading 为 false, func 调用将被推迟到下一个点，类似 setTimeout 为 0 的超时。

<Alert type="info">
  debounce(func, [wait=0], [options={}])
</Alert>

#### 参数

- func (Function): 要防抖动的函数。
- [wait=0] (number): 需要延迟的毫秒数。
- [options={}] (Object): 选项对象。
- [options.leading=false] (boolean): 指定在延迟开始前调用。
- [options.maxWait] (number): 设置 func 允许被延迟的最大值。
- [options.trailing=true] (boolean): 指定在延迟结束后调用。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

// 避免窗口在变动时出现昂贵的计算开销。
jQuery(window).on('resize', funcUtil.debounce(calculateLayout, 150));

// 当点击时 `sendMail` 随后就被调用。
jQuery(element).on(
  'click',
  funcUtil.debounce(sendMail, 300, {
    leading: true,
    trailing: false,
  }),
);

// 确保 `batchLog` 调用1次之后，1秒内会被触发。
var debounced = funcUtil.debounce(batchLog, 250, { maxWait: 1000 });
var source = new EventSource('/stream');
jQuery(source).on('message', debounced);

// 取消一个 trailing 的防抖动调用
jQuery(window).on('popstate', debounced.cancel);
```

### 节流

创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。

> 注意: 如果 leading 和 trailing 都设定为 true 则 func 允许 trailing 方式调用的条件为: 在 wait 期间多次调用。

> 如果 wait 为 0 并且 leading 为 false, func 调用将被推迟到下一个点，类似 setTimeout 为 0 的超时。

<Alert type="info">
  throttle(func, [wait=0], [options={}])
</Alert>

#### 参数

- func (Function): 要节流的函数。
- [wait=0] (number): 需要节流的毫秒数。
- [options={}] (Object): 选项对象。
- [options.leading=true] (boolean): 指定调用在节流开始前。
- [options.trailing=true] (boolean): 指定调用在节流结束后。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

// 避免在滚动时过分的更新定位
jQuery(window).on('scroll', funcUtil.throttle(updatePosition, 100));

// 点击后就调用 `renewToken`，5分钟内只能点击1次。
var throttled = funcUtil.throttle(renewToken, 300000, { trailing: false });
jQuery(element).on('click', throttled);

// 取消一个 trailing 的节流调用。
jQuery(window).on('popstate', throttled.cancel);
```

### 科里化函数

创建一个函数，该函数接收 func 的参数，要么调用 func 返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的 func 参数的函数，可以使用 func.length 强制需要累积的参数个数。

<Alert type="info">
  curry(func, [arity=func.length])
</Alert>

#### 参数

- func (Function): 用来柯里化（curry）的函数。
- [arity=func.length] (number): 需要提供给 func 的参数数量。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

var abc = function (a, b, c) {
  return [a, b, c];
};

var curried = funcUtil.curry(abc);

curried(1)(2)(3);
// => [1, 2, 3]

curried(1, 2)(3);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]
```

### 科里化函数（反向）

这个方法类似 curry。 除了它接受参数的方式用 partialRight 代替了 partial。

<Alert type="info">
  curryRight(func, [arity=func.length])
</Alert>

#### 参数

- func (Function): 用来柯里化（curry）的函数。
- [arity=func.length] (number): 需要提供给 func 的参数数量。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

var abc = function (a, b, c) {
  return [a, b, c];
};

var curried = funcUtil.curryRight(abc);

curried(3)(2)(1);
// => [1, 2, 3]

curried(2, 3)(1);
// => [1, 2, 3]

curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
curried(3)(1, _)(2);
// => [1, 2, 3]
```

### 延迟函数

延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给 func。

<Alert type="info">
  delay(func, wait, [args])
</Alert>

#### 参数

- func (Function): 要延迟的函数。
- wait (number): 要延迟的毫秒数。
- [args] (...\*): 会在调用时传入到 func 的参数。

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

funcUtil.delay(
  function (text) {
    console.log(text);
  },
  1000,
  'later',
);
// => 一秒后输出 'later'。
```

### 一次性函数

创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。

<Alert type="info">
  once(func)
</Alert>

#### 参数

- func (Function): 指定的触发的函数

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

var initialize = funcUtil.once(createApplication);
initialize();
initialize();
// `initialize` 只能调用 `createApplication` 一次
```

### 参数加工处理参数函数

创建一个函数，调用 func 时参数为相对应的 transforms 的返回值。

<Alert type="info">
  overArgs(func, [transforms=[funcUtil.identity]])
</Alert>

#### 参数

- func (Function): 指定的触发的函数
- [transforms=[funcUtil.identity]]: 加工传入参数的函数

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

function doubled(n) {
  return n * 2;
}

function square(n) {
  return n * n;
}

var func = funcUtil.overArgs(
  function (x, y) {
    return [x, y];
  },
  [square, doubled],
);

func(9, 3);
// => [81, 6]

func(10, 5);
// => [100, 10]
```

### 传播参数函数

创建一个函数，调用 func 时，this 绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply.

<Alert type="info">
  spread(func, [start=0])
</Alert>

#### 参数

- func (Function): 指定的触发的函数
- [start=0] (number): spread 参数的开始位置.

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

var say = funcUtil.spread(function (who, what) {
  return who + ' says ' + what;
});

say(['fred', 'hello']);
// => 'fred says hello'

var numbers = Promise.all([Promise.resolve(40), Promise.resolve(36)]);

numbers.then(
  funcUtil.spread(function (x, y) {
    return x + y;
  }),
);
// => a Promise of 76
```

### 获取 url 中的参数

<Alert type="info">
  getParameter(name: string, url: string = window.location.search)
</Alert>

#### 参数

- name: 参数名
- @param {String} [url=window.location.search] - 链接
- @return {String} 参数值

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

funcUtil.getParameter('name', 'http://nicecoders.github.io?name=xxx');
// => xxx
```

### 向 url 中添加 search 参数

<Alert type="info">
  addURLParameter(url: string, paramName: string, paramVal: string)
</Alert>

#### 参数

- url: 链接
- paramName: 参数名称
- paramVal: 参数值

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

funcUtil.addURLParameter('http://nicecoders.github.io', 'nicecode', 'nb');
// => http://nicecoders.github.io?nicecode=nb
```

### 更新 url 中的 search 参数

<Alert type="info">
  updateURLParameter: (url: string, paramName: string, paramVal: string)
</Alert>

#### 参数

- url: 链接
- paramName: 参数名称
- paramVal: 参数值

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

funcUtil.updateURLParameter(
  'http://nicecoders.github.io?nicecode=x',
  'nicecode',
  'nb',
);
// => http://nicecoders.github.io?nicecode=nb
```

### 移除 url 中的 search 参数

<Alert type="info">
  removeURLParameter(url: string, paramName: string)
</Alert>

#### 参数

- url: 链接
- paramName: 参数名称

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

funcUtil.removeURLParameter(
  'http://nicecoders.github.io?nicecode=nb',
  'nicecode',
);
// => http://nicecoders.github.io
```

### 通过 key 值获取 list 里的 value

<Alert type="info">
  getValueByKey: (key, map)
</Alert>

#### 参数

- key: 想转换的 key 值
- map: 需要遍历的数组

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

let list = [
  { key: 1, value: '男' },
  { key: 0, value: '女' },
];

funcUtil.getValueByKey(1, list);
// => 男
```

### 通过 value 值获取 list 里的 key

<Alert type="info">
  getKeyByValue(value, map)
</Alert>

#### 参数

- value: 想转换的 value 值
- map: 需要遍历的数组

#### 🌰 例子

```js
import { funcUtil } from '@nicecode/func';

let list = [
  { key: 1, value: '男' },
  { key: 0, value: '女' },
];

funcUtil.getKeyByValue('男', list);
// => 1
```

### copy 复制粘贴文案

<Alert type="info">
  copy(value, cb)
</Alert>

#### 参数

- value: 想复制的值
- cb: 回调函数

#### 🌰 例子

```jsx
import React from 'react';
import { funcUtil } from '@nicecode/func';

export default () => (
  <div onClick={() => funcUtil.copy('nicecode', () => alert('复制成功！'))}>
    复制：nicecode
  </div>
);
```
