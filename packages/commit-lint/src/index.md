---
nav:
  title: 规范工具
  path: /changelog
group:
  title: git 定制提交规范
  order: 3
  path: /commit-lint
---

## git 定制提交规范

## 快速上手

### 1. 安装相关依赖库

```shall
cnpm i husky commitlint @nicecode/commit-lint --save-dev
```

### 2. 在 package.json 中引入以下配置。

```json
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}
```

### 3. 在项目根路径下创建 .commitlint.js 或者 commitlint.config.js

具体配置可以参考 commitlint 官方，例子：

```js
module.exports = {
  extends: ["@nicecode/commit-lint"],
};
```

## 建议

可以搭配 husky 和 lint-stage 效果更佳。它能在你每次提交代码前校验你的代码格式并修复错误的代码格式，具体配置可以参考当前根目录下的 package.json 和 .eslintrc.
