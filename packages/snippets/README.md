
## 下载应用

> 在 **vscode** 应用商店搜索并下载 **nicecode-react-js-ts-snippets** 即可。 

## javascript-snippets

> `imp` => `import xx from xx`

> `imd` => `import { XX } from 'XX'`

> `ime` => `import * as XX from 'XX'`

> `exp` => `export default XX`

> `clg` => `console.log(XX)`

> `deas` => `const { XX } = XX`

## react-snippets

> `imr` => `import React, {} from 'react'`

> `useState` => `const [xx, setXX] = useState(XX)`

> `useEffect` => `useEffect(() => { XX }, [XX])`

> `useDispatch` => `const dispatch = useDispatch()`

> `useSelector` => `const XX = useSelector(state => state.XX)`

...more

## umi-snippets

`tsx -> 生成`

```jsx | pure
import { } from 'react'
import { connect, ConnectProps } from 'umi'
import styles from './index.less'


interface IXX extends ConnectProps {
}


export default connect(({}: {}) => ({
}))((props: IXX) => {
  return (
    <div className={styles.XX}></div>
  )
})
```

`mts -> 生成`

```js | pure
// 2022-08-26 - by dev
import { ImmerReducer, Effect } from 'umi';
import { SubscriptionsMapObject } from 'dva';


export interface XXModelState {
}


export interface XXModelType {
    namespace: 'XX';
    state: XXModelState;
    effects: {
    };
    reducers: {
        save: ImmerReducer<XXModelState>;
        reset: ImmerReducer<XXModelState>;
    };
    subscriptions: SubscriptionsMapObject;
}


const initialState: XXModelState = {
}


const XXModel: XXModelType = {
    namespace: 'XX',
    state: initialState,
    effects: {
    },
    reducers: {
        save(state, { payload }: any) {
            return { ...state, ...payload }
        },
        reset(state, { payload }: any) {
            return {  ...initialState }
        }
    },
    subscriptions: {}
};


export default XXModel;
```