---
nav:
  title: 图表库
  path: /chart
group:
  title: 柱状图
  order: 2
  path: /bar
---

# 柱状图

## 简单示范

```jsx
import React from 'react';
import { Bar } from '@nicecode/chart';

export default ({}) => {
  const data = [
    { name: 'questions', value: 17 },
    { name: 'schools', value: 25 },
    { name: 'philosophers', value: 38 },
  ];

  return (
    <div>
      <h2>canvas 版</h2>
      <Bar data={data} />
      <h2>svg 版</h2>
      <Bar data={data} type="svg" />
    </div>
  );
};
```

<API></API>
