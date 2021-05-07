---
title: pineapple - 埃里克的工具库合集
order: 10
hero:
  title: pineapple
  desc: 📖 我暂时还不想开源的一套自用工具库合集
  actions:
    - text: 快速上手
      link: /zh-CN/components/foo
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: 开箱即用
    desc: 考究的默认配置和约定式的目录结构，帮助开发者零成本上手，让所有注意力都能放在文档编写和组件开发上
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: 为组件开发而生
    desc: 丰富的 Markdown 扩展，不止于渲染组件 demo，使得组件的文档不仅易于编写、管理，还好看、好用
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png
    title: 主题系统
    desc: 渐进式的自定义主题能力，小到扩展自己的 Markdown 标签，大到自定义完整主题包，全由你定
footer: Open-source MIT Licensed | Copyright © 2021-present<br />Powered by eric.J
---

## 轻松上手

手动创建第一篇文档

```bash
// 创建组件开发的目录
$ mkdir library && cd library

// 安装 dumi
$ npm i dumi

// 创建文档
$ mkdir docs && echo '# Hello dumi!' > docs/index.md

// 预览文档
$ npx dumi dev
```
