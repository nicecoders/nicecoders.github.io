---
nav:
  title: 函数库
  path: /tools
group:
  title: floatUtil
  order: 3
---

## floatUtil

数字运算方法合集

### add：加法

```js
import { floatUtil } from '@nicecode/tools';

const val = floatUtil.add(1, 3)   // --> 4
```

### subtract：减法

```js
import { floatUtil } from '@nicecode/tools';

const val = floatUtil.subtract(7, 3)   // --> 4
```

### multiply：乘法

```js
import { floatUtil } from '@nicecode/tools';

const val = floatUtil.multiply(7, 3)   // --> 21
```

### devide：除法

```js
import { floatUtil } from '@nicecode/tools';

const val = floatUtil.devide(6, 3)   // --> 2
```

### mean：求平均值

```js
import { floatUtil } from '@nicecode/tools';

const val = floatUtil.mean([2,4,6,8])   // --> 5
```

### meanBy：迭代器版求平均值

```js
import { floatUtil } from '@nicecode/tools';

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
floatUtil.meanBy(objects, function(o) { return o.n; });
// => 5
 
// The `floatUtil.property` iteratee shorthand.
floatUtil.meanBy(objects, 'n');
// => 5
```


### ceil：向上取整

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.ceil(4.006)   // --> 5
```

### floor：向下取整

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.floor(4.006)   // --> 4
```

### round：四舍五入

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.round(4.4)   // --> 4

floatUtil.round(4.6)   // --> 5
```

### sum：求和

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.sum([2,4,6,8])   // --> 20
```

### sumBy：迭代器版求和

```js
import { floatUtil } from '@nicecode/tools';

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
floatUtil.sumBy(objects, function(o) { return o.n; });
// => 20
 
// The `floatUtil.property` iteratee shorthand.
floatUtil.sumBy(objects, 'n');
// => 20
```

### max：最大值

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.max([2,4,6,8])   // --> 8
```

### maxBy：迭代器版求最大值

```js
import { floatUtil } from '@nicecode/tools';

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
floatUtil.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }
 
// The `floatUtil.property` iteratee shorthand.
floatUtil.maxBy(objects, 'n');
// => { 'n': 2 }
```


### min：最小值

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.min([2,4,6,8])   // --> 2
```

### minBy：迭代器版求最小值

```js
import { floatUtil } from '@nicecode/tools';

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
floatUtil.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }
 
// The `floatUtil.property` iteratee shorthand.
floatUtil.minBy(objects, 'n');
// => { 'n': 1 }
```


### inRange：判断是否在数字区间

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.inRange(3, 2, 4);
// => true
 
floatUtil.inRange(4, 8);
// => true
 
floatUtil.inRange(4, 2);
// => false
 
floatUtil.inRange(2, 2);
// => false
 
floatUtil.inRange(1.2, 2);
// => true
 
floatUtil.inRange(5.2, 4);
// => false
 
floatUtil.inRange(-3, -2, -6);
// => true
```

### random：返回一个随机数

```js
import { floatUtil } from '@nicecode/tools';

floatUtil.random(0, 5);
// => an integer between 0 and 5
 
floatUtil.random(5);
// => also an integer between 0 and 5
 
floatUtil.random(5, true);
// => a floating-point number between 0 and 5
 
floatUtil.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
```

### API

| 方法     | 说明  | 类型                |    说明 |
| -------- | ---- | ----------------- | ------ |
| sub      | 减法 | function(val, oth) | -      |
| add      | 加法 | function(val, oth) | -      |
| devide   | 除法 | function(val, oth) | -      |
| multiply | 乘法 | function(val, oth) | -      |
| mean | 平均值 | function(array) | -      |
| ceil | 向上取整 | ceil(val, precision) | precision: 保留几位小数      |
| floor | 向下取整 | floor(val, precision) | precision: 保留几位小数      |
| round | 四舍五入 | round(val, precision) | precision: 保留几位小数      |
| sum | 求和 | sum(array) | -      |
| sumBy | 求和 | sumBy(array, [iteratee=floatUtil.identity]) |  iteratee: 迭代函数     |
| max | 最大值 | max(array) |  返回数组最大值     |
| maxBy | 最大值 | max(array, [iteratee=floatUtil.identity]) |  iteratee: 迭代函数     |
| min | 最小值 | min(array) |  返回数组最小值     |
| minBy | 最小值 | minBy(array, [iteratee=floatUtil.identity]) |  iteratee: 迭代函数     |
| clamp | 限制区间返回 | clamp(number, lower, upper)   |  lower: 最小值, upper: 最大值    |
| inRange | 判断是否在数字区间 | inRange(number, (start=0)?, end)   |      |
| random | 返回一个随机数 | random(?(lower=0), ?(upper=1), ?floating)   |  lower: 最小值, upper: 最大值, floating: 是否含有小数    |

