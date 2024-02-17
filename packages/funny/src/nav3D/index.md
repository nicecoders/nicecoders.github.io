---
category: Components
title: Nav3D 3d导航
group:
  title: css
  order: 6
---

```jsx
import React from 'react'
import { Nav3d } from '@nicecode/funny'

const navs = [
  { label: '123', value: '1' },
  { label: '444', value: '2' },
  { label: '666', value: '3' },
]

export default () => {
  return (
    <Nav3d items={navs} />
  )
}
```
