
<Alert type="info">
  项目案例用 react 作为演示，实际使用中不依赖任何框架，<Badge>开箱即用</Badge>
</Alert>

## 使用步骤

### 1. 安装依赖包

```
npm i @nicecode/tools --save

// or yarn add @nicecode/tools
```

### 2. 在项目中引用

本文以引用 common 模块为例
```
import { common } from '@nicecode/tools'

common.generateUUID()
```
