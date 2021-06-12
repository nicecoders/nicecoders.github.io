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
    "log": "conventional-changelog --n node_modules/@nicecode/changelog -i CHANGELOG.md -s -r 0",
  }
  ...
}
```

> 0 是在原来的文件基础上添加日志，1 是添加历史记录所有日志

## join us

[Nicecoders Team](https://github.com/nicecoders/nicecode)
