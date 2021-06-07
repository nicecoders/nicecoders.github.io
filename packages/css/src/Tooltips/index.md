---
nav:
  title: css
  path: /css
group:
  title: Tooltip 提示
  order: 2
---

# Tooltip 提示

## 位置控制

通过设置 data-nc-pos 属性实现

```jsx
import React from 'react';
import '../../dist/nicecode.css';

export default () => {
  const style = {
    display: 'inline-block',
    padding: '12px',
    margin: '24px',
    textAlign: 'center',
    width: '200px',
    border: '1px solid #aaa',
    borderRadius: '3px',
  };

  return (
    <div>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="up">
        正上方!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="up-left">
        左上角!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="up-right">
        右上角!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="left">
        左边!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="right">
        右边!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="down-left">
        左下角!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="down">
        正下方!
      </p>
      <p style={style} aria-label="嗨，宝贝!" data-nc-pos="down-right">
        右下角!
      </p>
    </div>
  );
};
```

## 长度控制

通过设置 data-nc-length 属性实现

```jsx
import React from 'react';
import '../../dist/nicecode.css';

export default () => {
  const style = {
    display: 'inline-block',
    padding: '12px',
    margin: '24px',
    textAlign: 'center',
    width: '200px',
    border: '1px solid #aaa',
    borderRadius: '3px',
  };

  return (
    <div>
      <p
        style={style}
        data-nc-length="small"
        data-nc-pos="up"
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        small Tooltip
      </p>
      <p
        style={style}
        data-nc-length="medium"
        data-nc-pos="up"
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        medium Tooltip
      </p>
      <p
        style={style}
        data-nc-length="large"
        data-nc-pos="up"
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        large Tooltip
      </p>
      <p
        style={style}
        data-nc-length="xlarge"
        data-nc-pos="up"
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        Xlarge Tooltip
      </p>
      <p
        style={style}
        data-nc-length="fit"
        data-nc-pos="up"
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        和父级 dom 同宽
      </p>
    </div>
  );
};
```

## 关闭动效

通过设置 data-nc-blunt 属性实现

```jsx
import React from 'react';
import '../../dist/nicecode.css';

export default () => {
  const style = {
    display: 'inline-block',
    padding: '12px',
    margin: '24px',
    textAlign: 'center',
    width: '200px',
    border: '1px solid #aaa',
    borderRadius: '3px',
  };

  return (
    <div>
      <p
        style={style}
        data-nc-pos="up"
        data-nc-blunt
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        no Animation
      </p>
    </div>
  );
};
```

## 可控展示

通过设置 data-nc-visible 实现

```jsx
import React from 'react';
import '../../dist/nicecode.css';

export default () => {
  const style = {
    display: 'inline-block',
    padding: '12px',
    margin: '24px',
    textAlign: 'center',
    width: '200px',
    border: '1px solid #aaa',
    borderRadius: '3px',
  };

  return (
    <div>
      <p
        style={style}
        data-nc-pos="up"
        data-nc-visible
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        一直显示
      </p>
    </div>
  );
};
```

## 自定义样式

```css
/* Add this to your CSS */
.tooltip-red {
  --nc-color: red;
}

.tooltip-big-text {
  --nc-font-size: 20px;
}

.tooltip-slide {
  --nc-move: 30px;
}
```

```jsx
import React from 'react';
import '../../dist/nicecode.css';

export default () => {
  const style = {
    display: 'inline-block',
    padding: '12px',
    margin: '24px',
    textAlign: 'center',
    width: '200px',
    border: '1px solid #aaa',
    borderRadius: '3px',
    '--nc-color': 'red',
    '--nc-font-size': '20px',
    '--nc-move': '30px',
  };

  return (
    <div>
      <p
        style={style}
        data-nc-pos="up"
        aria-label="如果说你是海上的烟火，我是浪花的泡沫，某一刻你的光照亮了我。"
      >
        一直显示
      </p>
    </div>
  );
};
```

## API

| 属性            | 说明     | 类型    | 默认值 |
| --------------- | -------- | ------- | ------ |
| data-nc-pos     | 弹出位置 | string  | -      |
| aria-label      | 弹出文案 | string  | -      |
| data-nc-visible | 即时展示 | boolean | false  |
| data-nc-blunt   | 关闭动效 | boolean | false  |
| data-nc-length  | 宽度     | string  | Xlarge |
