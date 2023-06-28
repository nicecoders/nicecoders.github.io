
# 接口代码自动生成

`mofish` 是一个代码生成工具，其可根据 [YApi](https://github.com/YMFE/yapi) 或 [Swagger](https://swagger.io/) 的接口定义生成 TypeScript 或 JavaScript 的接口类型及其请求函数代码。

## 特性

- 支持多服务器、多项目、多分类
- 支持预处理接口信息
- 可自定义类型或函数名称
- 完整的注释
- 支持生成 React Hooks 的请求代码
- 支持参数路径
- 支持上传文件
- 支持生成 JavaScript 代码
- 支持 Swagger

## 环境要求

首先得有 [Node.js](https://nodejs.org/en/)，并确保其版本 `>= 10.19.0`。同时：

- 对于基于 YApi 的项目，要求 YApi 的版本必须 `>= 1.5.12`。
- 对于基于 Swagger 的项目，仅支持 `Swagger 2` 和 `OpenAPI 3`。

## 安装

选择你常用的包管理器将 `@nicecode/mofish` 加入项目依赖即可：

```bash
# npm
npm i @nicecode/mofish

# yarn
yarn add @nicecode/mofish

# pnpm
pnpm add @nicecode/mofish
```


## 使用

注意在swagger模式下无法分离api文件和按需引入接口，每个项目都在一个接口文件中，yapi模式可以通过 ID 筛选分类

### 生成配置文件

```bash
npx mofish init
```


```js
// mofish.config.ts
import { defineConfig } from 'yapi-to-typescript'

export default defineConfig([
  {
    serverUrl: 'http://localhost:3000', // 接口服务地址，支持swagger
    typesOnly: false,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    devEnvName: 'dev',
    prodEnvName: 'prod',
    outputFilePath: interfaceInfo => `api/${interfaceInfo._category.name}.ts`,   // 接口输出文件路径
    requestFunctionFilePath: 'utils/request.ts',   // 请求函数路径
    dataKey: 'data',
    comment: {
      category: false,
      tag: false,
      requestHeader: false
    },
    projects: [ // 项目列表，对应单个项目swagger文档链接
      {
        token: 'ce517e50453e14f9b00039538235720a23337590f107455eaa6fb65a6bda7f22',  // yapi token,在对应项目中获取，swagger模式下可不传
        categories: [
          {
            id: [272, 308, 425],   // 接口分类id，对应yapi链接：/api/cat_${id}  0为全部
            getRequestFunctionName(interfaceInfo, changeCase) {
              // 以接口全路径生成请求函数名
              return changeCase.camelCase(interfaceInfo.path)
            },
          },
        ],
      },
    ],
  },
])
```


### 生成代码

使用以下命令生成代码：

```bash
npx mofish
```

如果要使用自定义的配置文件：

```bash
npx mofish -c config/mofish.ts
```
