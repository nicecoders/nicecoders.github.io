---
nav:
  title: hooks
  order: 2
title: hooks 列表
toc: content
---

## useRafLoop

```js
import { useRafLoop } from '@nicecode/hooks'
```

## useActivateWrapper

```js
import { useActivateWrapper } from '@nicecode/hooks'
```

## useCustomCompareEffect

```js
import { useCustomCompareEffect } from '@nicecode/hooks'
```

## useBoolLocalStorage

```js
import { useBoolLocalStorage } from '@nicecode/hooks'
```

## useDeepEffect

```js
import { useDeepEffect } from '@nicecode/hooks'
```

## useDeepMemo

```js
import { useDeepMemo } from '@nicecode/hooks'
```

## useDoubleCheck

```js
import { useDoubleCheck } from '@nicecode/hooks'
```

## useIMEComposition

```js
import { useIMEComposition } from '@nicecode/hooks'
```

## useSocket

```js
import React, { useRef, useMemo } from 'react';
import { useWebSocket } from 'ahooks';

enum ReadyState {
  Connecting = 0,
  Open = 1,
  Closing = 2,
  Closed = 3,
}

export default () => {
  const messageHistory = useRef<any[]>([]);

  const { readyState, sendMessage, latestMessage, disconnect, connect } = useWebSocket(
    'ws://10.0.0.7:30003/socket.io/?EIO=3&transport=websocket',
  );

  let data = {
    
  }

  const sendMsg = () => {
    sendMessage([
      '',
      '{\"extraHeaders\":{\"authorization\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MDQwMTM0NzgsImp0aSI6IjI1MDYiLCJpYXQiOjE3MDM3NTQyNzgsInVzZXJJZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImRhdGFSaWdodCI6MiwiY2FtZXJhUmlnaHQiOjEsImdwdVJpZ2h0IjoxLCJ1c2VybGVhZGVySWQiOjAsIm9yZ2FuaXphdGlvbklkIjoxLCJyb2xlSWQiOjF9.sVeRo-p3Bw337voTVAvoKha6W9595BrrYyx3_16uEwU\"}}'
    ])
  }

  return (
    <div onClick={() => sendMsg()} >测试</div>
  )
}
```
