---
nav:
  title: func
title: 其它
order: 4
---

## 获取谷歌浏览器版本

```js
import { getChromeVersion } from '@nicecode/func'

const version = getChromeVersion()
```
## 检索默认时间

```jsx
import React from 'react'
import { generateTime } from '@nicecode/func'

const obj = generateTime()

export default () => <div>{JSON.stringify(obj)}</div>
```

## 获取字符串实际长度

```jsx
import React from 'react'
import { getStrLength } from '@nicecode/func'

const str = getStrLength('测试手动阀手动阀213123dfads')

export default () => <div>实际长度为：{str}</div>
```

## 截取字符串

```jsx
import React from 'react'
import { cutStr } from '@nicecode/func'

const oldStr = '测试手动阀手动阀213123dfads'
const str = cutStr(oldStr, 6)

export default () => <div>原始数据：{oldStr}<br/> 截取后：{str}</div>
```

## 是否是谷歌浏览器

```jsx
import React from 'react'
import { isChrome } from '@nicecode/func'

const isC = isChrome()

export default () => <div>是否chrome环境：{isC ? '是' :  '否'}</div>
```
