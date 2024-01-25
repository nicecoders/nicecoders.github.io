---
nav:
  title: func
  order: 2
title: 相机相关
---

## isFaceCamera

```js
import { isFaceCamera } from '@nicecode/func'
```

## getDeviceType

```js
import { getDeviceType } from '@nicecode/func'
```

## deviceIDToDeviceKey

后端设备id/vmsid/dirid是三张表 合并在一起不保证唯一 前端生成唯一key

```js
import { deviceIDToDeviceKey } from '@nicecode/func'
```

## deviceToDeviceKey

后端设备id/vmsid/dirid是三张表 合并在一起不保证唯一 前端生成唯一key

```js
import { deviceToDeviceKey } from '@nicecode/func'
```

## deviceKeyToDeviceId

设备树key 转 后端设备原始id dirid 是 string/vms & camera 是 number 和后端保持一致

```js
import { deviceKeyToDeviceId } from '@nicecode/func'
```

## findCamerasByInDeviceTree

通过设备id或设备key在树里面找摄像头

```js
import { findCamerasByInDeviceTree } from '@nicecode/func'
```
