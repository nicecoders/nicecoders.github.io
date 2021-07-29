---
nav:
  title: 函数库
  path: /tools
group:
  title: common
  order: 2
---

## common

通用方法合集

### 生成 UUID

```js
import { common } from '@nicecode/tools';

let uuid = common.generateUUID();
```

## API

| 方法               | 说明                      | 类型     | 默认值 |
| ------------------ | ------------------------- | -------- | ------ |
| generateUUID       | 生成 uuid                 | function | -      |
| getDeviceId        | 获取 deviceId             | function | -      |
| getParameter       | 获取 url 中的参数         | function | -      |
| addURLParameter    | 向 url 中添加 search 参数 | function | -      |
| updateURLParameter | 更新 url 中的 search 参数 | function | -      |
| removeURLParameter | 删除 url 中的 search 参数 | function | -      |
| getValueByKey | 通过 Key 获取 Value | function | -      |
| getKeyByValue | 通过 Value 获取 Key | function | -      |
