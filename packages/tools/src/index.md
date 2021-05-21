---
nav:
  title: 函数库
  path: /tools
group:
  title: 快速上手
  order: 1
---

<!-- ```jsx
/**
 * inline: true
 */

import React from 'react';

export default () => '我会被直接嵌入';
``` -->


# 快速上手

<Alert type="info">
  项目案例用 react 作为演示，实际使用中不依赖任何框架，<Badge>开箱即用</Badge>
</Alert>


### 安装依赖包

```
npm i @nicecode/tools --save

// or yarn add @nicecode/tools
```

### 使用

本文以引用 common 模块为例
```
import { common } from '@nicecode/tools'

common.generateUUID()
```


