---
nav:
  title: 规范工具
  path: /changelog
group:
  title: snippets 代码片段
  order: 4
  path: /snippets
---

# snippets 代码片段

## 快速上手

1. 第一步：在 .vscode 目录下创建${对应语言}.code-snippets 文件
2. 第二步：将下列相关 json 复制导入文件即可

## react.code-snippets

### 1. 依赖 umi 的 .tsx 模板

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

### 2. 依赖 umi 的 model.ts 模板

```json
{
	"model模板": {
		"prefix": "mts",
		"body": [
      "// $CURRENT_YEAR-$CURRENT_MONTH-$CURRENT_DATE - by dev",
			"import { ImmerReducer, Effect } from 'umi';",
			"import { SubscriptionsMapObject } from 'dva';",
			"\n",
			"export interface $1ModelState {",
			"}",
			"\n",
			"export interface $1ModelType {",
			"    namespace: '$1';",
			"    state: $1ModelState;",
			"    effects: {",
			"    };",
			"    reducers: {",
			"        save: ImmerReducer<$1ModelState>;",
			"        reset: ImmerReducer<$1ModelState>;",
  			"    };",
			"    subscriptions: SubscriptionsMapObject;",
			"}",
			"\n",
			"const initialState: $1ModelState = {",
			"}",
			"\n",
			"const $1Model: $1ModelType = {",
			"    namespace: '$1',",
			"    state: initialState,",
			"    effects: {",
			"        // *getFormList({ payload }, { call, put }) {",
			"        //    const response = yield call(getCaseForm, payload);",
			"        //    yield put({",
			"        //        type: 'save',",
			"        //        payload: response,",
			"        //    });",
			"        //},",
			"    },",
			"    reducers: {",
			"        save(state, { payload }: any) {",
			"            return { ...state, ...payload }",
			"        },",
			"        reset(state, { payload }: any) {",
			"            return {  ...initialState }",
			"        }",
			"    },",
			"    subscriptions: {}",
			"};",
			"\n",

			"export default $1Model;"
		]
	}
}
```