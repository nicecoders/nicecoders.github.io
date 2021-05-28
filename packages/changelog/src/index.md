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
    "log": "conventional-changelog -p @nicecode/changelog -i CHANGELOG.md -s -r 0",
  }
}
/*配置项说明：
-p custom-config 指定风格
-i CHANGELOG.md 指定输出的文件名称
-s -r 0 指定增量更新，不会覆盖以前的更新日志
-n ./changelog-option.js 指定自定义配置
*/
```
