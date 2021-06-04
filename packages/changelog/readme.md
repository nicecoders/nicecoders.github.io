## 快速上手

### 1. 安装依赖包

```js
cnpm i conventional-changelog-cli @nicecode/changelog --save-dev
```

### 2. 创建以下命令

```json
{
  ...
  "script": {
    "log": "conventional-changelog --config node_modules/@nicecode/changelog -i CHANGELOG.md -s -r 0",
  }
}
```
