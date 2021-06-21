---
nav:
  title: 函数库
  path: /tools
group:
  title: stringUtil
  order: 4
---

## stringUtil

字符串处理方法合集

### 元转分

```js
import { stringUtil } from '@nicecode/tools';

let fen = stringUtil.toFen(String(222));
```

## API

| 方法       | 说明       | 类型     | 默认值 |
| ---------- | ---------- | -------- | ------ |
| isNull     | 空校验     | function | -      |
| isNumber   | 数字校验   | function | -      |
| filterNull | 空数据过滤 | function | -      |
| toYuan     | 分转化成元 | function | -      |
| toFen      | 元转化为分 | function | -      |
