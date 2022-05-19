## 使用步骤

### 1. 安装依赖包

```js
npm i @nicecode/tools --save
npm i babel-plugin-import --save-dev
```

### 2. 配置 .babelrc（babel.config.js）

<Alert type="warning">
  属于可选配置，主要是提供按需加载
</Alert>

```json
{
  ...,
  plugins: [
    [
      "import", {
        "libraryName": "@nicecode/tools",
        "camel2DashComponentName": false
      }
    ]
  ]
}

```

### 3. 在项目中使用

> 本文以 mathUtil 通用模块为例

```js
import { mathUtil } from '@nicecode/tools';

mathUtil.castArray(1);
// => [1]
```

## 模块列表

| 模块        | 说明             |
| ----------- | ---------------- |
| arrayUtil   | 数组方法合集     |
| langUtil    | lang 方法合集    |
| mathUtil    | 数字方法合集     |
| arrayUtil   | 数组方法合集     |
| funcUtil    | 常用函数方法合集 |
| collectUtil | 集合类方法合集   |
| floatUtil   | 数字处理工具集   |
| stringUtil  | 字符串方法集     |
| objUtil     | 对象类方法       |
| validator   | 正则表达式合集   |
| checkDevice | 环境判断工具集   |
| 更多模块... | 开发中...        |

## join us

[Nicecoders Team](https://github.com/nicecoders/nicecode)
