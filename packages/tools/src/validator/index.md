---
nav:
  title: 函数库
  path: /tools
group:
  title: validator
  order: 20
---

## validator

<Alert type="info">
  <strong>常见正则</strong>
</Alert>

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
| ipv4  | ipv4网络校验                         | RegExp | -      |
| int  | 整数校验                         | RegExp | -      |
| float  | 小数校验                         | RegExp | -      |
| wechat  | 微信号校验                         | RegExp | -      |
| carNum  | 车牌号校验                         | RegExp | -      |
| alphabet  | 字母校验                         | RegExp | -      |
| fileName  | 文件名校验                         | function(type) => void | -      |
| color16  | 16进制颜色符                         | RegExp | -      |
