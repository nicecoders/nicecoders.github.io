---
category: Components
title: 毛玻璃
group:
  title: css
---

```jsx
import React from 'react'
import { FrostedGlass } from '@nicecode/funny'
import maskImg from './img/dji.svg'

export default () => {
  return (
    <FrostedGlass 
      frontBg="https://sp-webfront.skypixel.com/skypixel/v2/public/website/assets/1535027674204-f6eca6369ec03e70262b58b0e25cda7b.jpg" 
      backBg="https://sp-webfront.skypixel.com/skypixel/v2/public/website/assets/1535027674204-f6eca6369ec03e70262b58b0e25cda7b.jpg" 
      maskImage={maskImg}
    />
  )
}
```
