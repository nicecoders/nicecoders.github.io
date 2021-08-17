---
nav:
  title: 函数库
  path: /tools
group:
  title: checkDevice
  order: 10
---

## checkDevice

<Alert type="info">
  <strong>判断环境</strong>
</Alert>

### isIos

```js
import { checkDevice } from '@nicecode/tools';

const Demo = () => {
  const isIos = checkDevice.isIos();

  return <div>是否在 Ios 设备端：{isIos}</div>;
};

export default Demo;
```

### isAndroid

```js
import { checkDevice } from '@nicecode/tools';

const Demo = () => {
  const isAndroid = checkDevice.isAndroid();

  return <div>是否在安卓设备中：{isAndroid}</div>;
};

export default Demo;
```

### isQQ

```js
import { checkDevice } from '@nicecode/tools';

const Demo = () => {
  const isQQ = checkDevice.isQQ();

  return <div>是否在 QQ 中：{isQQ}</div>;
};

export default Demo;
```

## API

| 方法                | 说明                       | 类型     | 默认值 |
| ------------------- | -------------------------- | -------- | ------ |
| isIos               | 判断是否在 IOS 设备内      | function | -      |
| isAndroid           | 判断是否在 Android 设备内  | function | -      |
| isWeChat            | 判断是否在微信客户端内     | function | -      |
| isWxWorker          | 判断是否在企业微信客户端内 | function | -      |
| isDingTalk          | 判断是否在钉钉客户端内     | function | -      |
| isFeiShu            | 判断是否在飞书客户端内     | function | -      |
| isAliPay            | 判断是否在支付宝客户端内   | function | -      |
| isJRApp             | 判断是否在京东金融客户端内 | function | -      |
| isQQ                | 判断是否在 QQ 客户端内     | function | -      |
| isPc                | 判断是否在 PC 环境         | function | -      |
| inAlipayminiprogram | 判断是否在支付宝小程序内   | function | -      |
| getSceneType        | 获取场景类型               | function | -      |
