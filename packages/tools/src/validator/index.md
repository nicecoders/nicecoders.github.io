---
nav:
  title: 函数库
  path: /tools
group:
  title: validator
  order: 5
---

## validator

常见正则校验合集

### 手机号正则

```js
import { validator } from '@nicecode/tools';

let specStrReg = validator('specStr')

```

## API

| 方法     | 说明                               | 类型   | 默认值 |
| -------- | ---------------------------------- | ------ | ------ |
| string   | 字符串校验                         | RegExp | -      |
| phone    | 电话号码                           | RegExp | -      |
| mobile   | 手机号码                           | RegExp | -      |
| url      | 链接                               | RegExp | -      |
| password | 密码（数字、字母、符号两种及以上） | RegExp | -      |
| idCard   | 身份证号                           | RegExp | -      |
| mac      | mac 地址                           | RegExp | -      |
| noChars  | 字符串                             | RegExp | -      |
| postCode | 邮政编码                           | RegExp | -      |
| zh       | 中文                               | RegExp | -      |
| ip       | ip 地址                            | RegExp | -      |
| specStr  | 特殊字符校验                         | RegExp | -      |
