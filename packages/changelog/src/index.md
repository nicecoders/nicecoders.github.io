---
nav:
  title: 规范工具
  path: /changelog
group:
  title: changelog 自动化生成
  order: 1
---

## changelog 自动化生成

### 1. 安装依赖包

```js
cnpm i conventional-changelog-cli @nicecode/changelog --save-dev
```

### 2. 创建以下命令

```json
{
  ...
  "script": {
    "log": "conventional-changelog --config @nicecode/changelog -i CHANGELOG.md -s -r 0",
  }
}
```
