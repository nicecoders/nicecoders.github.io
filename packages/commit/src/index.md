---
nav:
  title: 规范工具
  path: /changelog
group:
  title: git 提交定制化模板
  order: 2
  path: /commit
---

## git 提交定制化模板

## 快速上手

### 1. 安装相关依赖包

> cnpm i commitizen @nicecode/commit --save-dev

### 2. 在 package.json 中加入以下内容

```json
{
  ...
  "config": {
    "commitizen": {
      "path": "@nicecode/commit"
    }
  },
}
```

### 3. 在 package.json 中创建以下 script 命令

```json
{
  "cz": "git add . && git cz"
}
```

### 4. 运行命令

```
npm run cz
```
