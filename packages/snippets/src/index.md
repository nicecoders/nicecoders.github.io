---
nav:
  title: 规范工具
  path: /changelog
group:
  title: snippets 代码片段
  order: 4
  path: /snippets
---

## snippets 代码片段

### react.code-snippets

```json
{
	"函数组件模板": {
		"prefix": "tsx",
		"body": [
			"// $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE - by dev",
			"\n",
			"import { } from 'react'",
			"import { connect, ConnectProps } from 'umi'",
			"import {} from 'antd-mobile'",
			"import styles from './index.less'",
            "\n",
            "interface I$1 extends ConnectProps {",
            "}",
            "\n",
            "export default connect(({}: {}) => ({",
			"}))((props: I$1) => {",
            "  return (",
            "    <div className={styles.$1}>$1</div>",
            "  )",
            "}",
		],
		"description": "umi 函数组件模板"
	}
}
```