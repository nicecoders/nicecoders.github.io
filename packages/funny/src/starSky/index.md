---
category: Components
title: 星空
group:
  title: Canvas
  order: 6
---

```jsx
import React, { useRef, useEffect } from 'react'
import { StarSky } from '@nicecode/funny'

export default () => {
  const canvasRef = useRef()
  
  useEffect(() => {
    new StarSky({
        canvas: canvasRef.current,
        width: 500,
        height: 300
    })
  }, [])

  return (
    <canvas ref={canvasRef} width="500px" height="500px"></canvas>
  )
}
```
