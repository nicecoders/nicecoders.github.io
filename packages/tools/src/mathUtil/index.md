---
nav:
  title: 函数库
  path: /tools
group:
  title: 数学方法：mathUtil
  order: 3
---

## 数学方法：mathUtil

<Alert type="info">
  <strong>数字方法合集</strong>
</Alert>

### add：加法

```js
import { mathUtil } from '@nicecode/func';

const val = mathUtil.add(1, 3)   // --> 4
```

### subtract：减法

```js
import { mathUtil } from '@nicecode/func';

const val = mathUtil.subtract(7, 3)   // --> 4
```

### multiply：乘法

```js
import { mathUtil } from '@nicecode/func';

const val = mathUtil.multiply(7, 3)   // --> 21
```

### devide：除法

```js
import { mathUtil } from '@nicecode/func';

const val = mathUtil.devide(6, 3)   // --> 2
```

### mean：求平均值

```js
import { mathUtil } from '@nicecode/func';

const val = mathUtil.mean([2,4,6,8])   // --> 5
```

### meanBy：迭代器版求平均值

```js
import { mathUtil } from '@nicecode/func';

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
mathUtil.meanBy(objects, function(o) { return o.n; });
// => 5
 
// The `mathUtil.property` iteratee shorthand.
mathUtil.meanBy(objects, 'n');
// => 5
```


### ceil：向上取整

```js
import { mathUtil } from '@nicecode/func';

mathUtil.ceil(4.006)   // --> 5
```

### floor：向下取整

```js
import { mathUtil } from '@nicecode/func';

mathUtil.floor(4.006)   // --> 4
```

### round：四舍五入

```js
import { mathUtil } from '@nicecode/func';

mathUtil.round(4.4)   // --> 4

mathUtil.round(4.6)   // --> 5
```

### sum：求和

```js
import { mathUtil } from '@nicecode/func';

mathUtil.sum([2,4,6,8])   // --> 20
```

### sumBy：迭代器版求和

```js
import { mathUtil } from '@nicecode/func';

var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 
mathUtil.sumBy(objects, function(o) { return o.n; });
// => 20
 
// The `mathUtil.property` iteratee shorthand.
mathUtil.sumBy(objects, 'n');
// => 20
```

### max：最大值

```js
import { mathUtil } from '@nicecode/func';

mathUtil.max([2,4,6,8])   // --> 8
```

### maxBy：迭代器版求最大值

```js
import { mathUtil } from '@nicecode/func';

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
mathUtil.maxBy(objects, function(o) { return o.n; });
// => { 'n': 2 }
 
// The `mathUtil.property` iteratee shorthand.
mathUtil.maxBy(objects, 'n');
// => { 'n': 2 }
```


### min：最小值

```js
import { mathUtil } from '@nicecode/func';

mathUtil.min([2,4,6,8])   // --> 2
```

### minBy：迭代器版求最小值

```js
import { mathUtil } from '@nicecode/func';

var objects = [{ 'n': 1 }, { 'n': 2 }];
 
mathUtil.minBy(objects, function(o) { return o.n; });
// => { 'n': 1 }
 
// The `mathUtil.property` iteratee shorthand.
mathUtil.minBy(objects, 'n');
// => { 'n': 1 }
```


### inRange：判断是否在数字区间

```js
import { mathUtil } from '@nicecode/func';

mathUtil.inRange(3, 2, 4);
// => true
 
mathUtil.inRange(4, 8);
// => true
 
mathUtil.inRange(4, 2);
// => false
 
mathUtil.inRange(2, 2);
// => false
 
mathUtil.inRange(1.2, 2);
// => true
 
mathUtil.inRange(5.2, 4);
// => false
 
mathUtil.inRange(-3, -2, -6);
// => true
```

### random：返回一个随机数

```js
import { mathUtil } from '@nicecode/func';

mathUtil.random(0, 5);
// => an integer between 0 and 5
 
mathUtil.random(5);
// => also an integer between 0 and 5
 
mathUtil.random(5, true);
// => a floating-point number between 0 and 5
 
mathUtil.random(1.2, 5.2);
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
| sumBy | 求和 | sumBy(array, [iteratee=mathUtil.identity]) |  iteratee: 迭代函数     |
| max | 最大值 | max(array) |  返回数组最大值     |
| maxBy | 最大值 | max(array, [iteratee=mathUtil.identity]) |  iteratee: 迭代函数     |
| min | 最小值 | min(array) |  返回数组最小值     |
| minBy | 最小值 | minBy(array, [iteratee=mathUtil.identity]) |  iteratee: 迭代函数     |
| clamp | 限制区间返回 | clamp(number, lower, upper)   |  lower: 最小值, upper: 最大值    |
| inRange | 判断是否在数字区间 | inRange(number, (start=0)?, end)   |      |
| random | 返回一个随机数 | random(?(lower=0), ?(upper=1), ?floating)   |  lower: 最小值, upper: 最大值, floating: 是否含有小数    |

