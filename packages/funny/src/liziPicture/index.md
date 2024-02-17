---
category: Components
title: 粒子化图片
group:
  title: Canvas
  order: 6
---

```jsx
import React, { useEffect, useRef } from 'react'
import { LiziPicture } from '@nicecode/funny'

import img1 from './imgs/1.jpg'
import img2 from './imgs/2.jpg'
import img3 from './imgs/3.jpg'

export default () => {
  const canvasRef = useRef()
  
  useEffect(() => {
    new LiziPicture({
        warp: canvasRef && canvasRef.current,
        imgsUrl: [img1, img2, img3],
        radius: 1,
    });
  }, [])

  return (
    <canvas ref={canvasRef} width="500px" height="500px"></canvas>
  )
}
```
