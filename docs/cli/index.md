---
nav:
  title: 脚手架
  path: /cli
group:
  title: 脚手架
  order: 1
---

# 脚手架

## 目前已有脚手架列表

| 名称                | 说明                       | 技术栈 |
| ------------------- | -------------------------- | -------- |
| nextJs               | 基于 React 的服务端渲染方案      |  nextJs + axios + antd  |
| ReactJs             | 基于 React 的业务型脚手架      |   umiJs + axios + antd   |
| TaroJs             | 基于React 的多端适配方案      |   TaroJs 全家桶  |
| Vue             | 基于 Vue 的业务型脚手架      |   vueJs 全家桶   |
| Gulp             | 基于 Gulp 的清凉型脚手架      |   --   |



## 快速上手

### 1. 安装相关依赖

```js
// 推荐
yarn global add @nicecode/cli 

// or
// npm install @nicecode/cli -g
```

### 2. 运行命令

```js
// 查看脚手架版本号，是否安装成功
nice -V
```

### 3. 使用并选择模板

```js
nice create ${项目名称}
```