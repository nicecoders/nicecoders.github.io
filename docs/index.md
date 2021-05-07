---
title: dumi - A doc tool can assist you to develop libraries & write docs.
order: 10
hero:
  title: dumi
  desc: 📖 A doc tool can assist you to develop libraries & write docs.
  actions:
    - text: Getting Started
      link: /docs/getting-started
features:
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/881dc458-f20b-407b-947a-95104b5ec82b/k79dm8ih_w144_h144.png
    title: Out of the box
    desc: Elegant default configrations and convention routing assist developers to get started as simple as possible, that focus all attentions on developing libraries & writting docs
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/d1ee0c6f-5aed-4a45-a507-339a4bfe076c/k7bjsocq_w144_h144.png
    title: For developing libraries
    desc: Rich Markdown extensions are not limited to rendering component demos, making component documents not only easy to write and manage, but also beautiful and easy to use
  - icon: https://gw.alipayobjects.com/zos/bmw-prod/b8570f4d-c1b1-45eb-a1da-abff53159967/kj9t990h_w144_h144.png
    title: Theme system
    desc: Progressive custom theme capabilities, ranging from expanding your own Markdown tags to customizing complete theme packages, are up to you
footer: Open-source MIT Licensed | Copyright © 2019-present<br />Powered by self
---

## Getting Started

Create first doc in manual way

```bash
// Create dir for libraries
$ mkdir library && cd library

// Install dumi
$ npm i dumi

// Create docs
$ mkdir docs && echo '# Hello dumi!' > docs/index.md

// Preview docs
$ npx dumi dev
```
