## 介绍

原子组件，基于 antd 开发。

## 安装

> pnpm install @nicecode/meta

## 使用

```jsx
import React from 'react';
import { Button } from '@nicecode/meta'
import { doubleClick } from '@nicecode/meta'

export default () => {
  return (
    <Button type="primary" onClick={() => doubleClick()} >按我啊!</Button>
  )
}
```
