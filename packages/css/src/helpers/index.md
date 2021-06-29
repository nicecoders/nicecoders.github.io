---
nav:
  title: css
  path: /css
group:
  title: 工具类
  order: 3
---

# 工具类

## 清除浮动

使用方式：clearfix


```js
import '@nicecode/css';

export default () => {
  return (
    <div className="clearfix">
      <div style={{ float: 'right' }}>居右</div>
      <div style={{ float: 'left' }}>居左</div>
    </div>
  );
};
```

## 关闭按钮

使用方式：btn-close

按钮大小会根据当前元素的宽高来决定

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  return (
    <div>
      <div className="btn-close"></div>
      <div
        className="btn-close"
        style={{ width: '30px', height: '30px' }}
      ></div>
    </div>
  );
};
```

## 边框：border

### 基础

使用方式：**{type}**

type 枚举列表,如下：

1. border
2. bt
3. br
4. bb
5. bl
6. bt-0
7. br-0
...

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    display: 'inline-block',
    margin: '10px',
    width: '100px',
    height: '100px',
    fontSize: '12px',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#f5f5f5',
  };

  return (
    <div>
      <div className="border" style={style}>
        border
      </div>
      <div className="bt" style={style}>
        border-top
      </div>
      <div className="br" style={style}>
        border-right
      </div>
      <div className="bb" style={style}>
        border-bottom
      </div>
      <div className="bl" style={style}>
        border-left
      </div>
      <div className="border bl-0" style={style}>
        border-left-0
      </div>
    </div>
  );
};
```

### 拓展

使用方式：**border-{type}**

type 枚举列表,如下：

1. primary
2. info
3. success
4. warning
5. danger
6. light
7. dark
8. white

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    display: 'inline-block',
    margin: '10px',
    width: '100px',
    fontSize: '12px',
    height: '100px',
    lineHeight: '100px',
    textAlign: 'center',
    background: '#f5f5f5',
  };

  return (
    <div>
      <div className="border border-primary" style={style}>
        border-primary
      </div>
      <div className="border border-dark" style={style}>
        border-dark
      </div>
      <div className="border border-success" style={style}>
        border-success
      </div>
      <div className="border border-warning" style={style}>
        border-warning
      </div>
      <div className="border border-danger" style={style}>
        border-danger
      </div>
      <div className="border border-info" style={style}>
        border-info
      </div>
      <div className="border border-white" style={style}>
        border-white
      </div>
    </div>
  );
};
```

## 颜色：color

### 文字

使用方式：**text-{type}**

type 枚举列表,如下：

1. primary
2. info
3. success
4. warning
5. danger
6. light
7. dark

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    display: 'inline-block',
    margin: '10px',
    padding: '10px'
  };

  return (
    <div>
      <div className="text-primary" style={style}>
        text-primary
      </div>
      <div className="text-info" style={style}>
        text-info
      </div>
      <div className="text-dark bg-light" style={style}>
        text-light
      </div>
      <div className="text-dark" style={style}>
        text-dark
      </div>
      <div className="text-success" style={style}>
        text-success
      </div>
      <div className="text-danger" style={style}>
        text-danger
      </div>
      <div className="text-warning" style={style}>
        text-warning
      </div>
      <div className="text-black-50" style={style}>
        text-black-50
      </div>
      <div className="text-white-50 bg-dark" style={style}>
        text-warning
      </div>
    </div>
  );
};
```

### 背景：background

使用方式：**bg-{type}**

type 枚举列表,如下：

1. primary
2. info
3. success
4. warning
5. danger
6. light
7. dark

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    display: 'inline-block',
    margin: '10px',
    color: '#fff',
    padding: '10px'
  };

  return (
    <div>
      <div className="bg-primary" style={style}>
        text-primary
      </div>
      <div className="bg-info" style={style}>
        text-info
      </div>
      <div className="bg-light text-dark" style={style}>
        text-light
      </div>
      <div className="bg-dark" style={style}>
        text-dark
      </div>
      <div className="bg-success" style={style}>
        text-success
      </div>
      <div className="bg-danger" style={style}>
        text-danger
      </div>
      <div className="bg-warning" style={style}>
        text-warning
      </div>
    </div>
  );
};
```

## 圆角：border-radius

使用方式：**rounded-{type}**

type 枚举列表,如下：

1. rounded-pill
2. rounded-top
3. rounded-right
4. rounded-bottom
5. rounded-left
6. rounded-0
7. rounded-circle

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    display: 'inline-block',
    margin: '10px',
    width: '100px',
    fontSize: '12px',
    color: '#fff',
    height: '50px',
    lineHeight: '50px',
    textAlign: 'center',
    background: '#000',
  };

  return (
    <div>
      <div className="rounded" style={style}>
        rounded
      </div>
      <div className="rounded-top" style={style}>
        rounded-top
      </div>
      <div className="rounded-right" style={style}>
        rounded-right
      </div>
      <div className="rounded-bottom" style={style}>
        rounded-bottom
      </div>
      <div className="rounded-left" style={style}>
        rounded-left
      </div>
      <div className="rounded-0" style={style}>
        rounded-0
      </div>
      <div className="rounded-pill" style={style}>
        rounded-pill
      </div>
      <div className="rounded-circle" style={style}>
        rounded-circle
      </div>
    </div>
  );
};
```

## display 属性

使用方式：**d-{type}**

type 枚举列表,如下：

1. none
2. inline
3. inline-block
4. block
5. table
6. table-cell
7. table-row
8. flex
9. inline-flex

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    margin: '10px',
    padding: '8px',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '50px',
    textAlign: 'center',
    background: '#000',
  };

  return (
    <div>
      <div className="d-block" style={style}>
        d-block
      </div>
      <div className="d-flex" style={style}>
        d-flex
      </div>
      <div className="d-none" style={style}>
        d-none
      </div>
      <div className="d-inline-block" style={style}>
        d-inline-block
      </div>
    </div>
  );
};
```

## 浮动：float

使用方式：**float-{type}**

type 枚举列表,如下：

1. left
2. right
3. none

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    margin: '10px',
    padding: '8px',
    fontSize: '12px',
    color: '#fff',
    lineHeight: '50px',
    textAlign: 'center',
  };

  return (
    <div>
      <div className="bg-success float-left" style={style}>
        float-left
      </div>
      <div className="bg-warning float-right" style={style}>
        float-right
      </div>
      <div className="float-none bg-info" style={style}>
        float-none
      </div>
    </div>
  );
};
```

## 用户选择事件：user-select

使用方式：**user-select-{type}**

type 枚举列表,如下：

1. all
2. none
3. auto

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    margin: '6px'
  };

  return (
    <div>
      <div className="user-select-all" style={style}>
        user-select-all，选我选我
      </div>
      <div className="user-select-auto" style={style}>
        user-select-auto， 选我选我
      </div>
      <div className="user-select-none" style={style}>
        user-select-none， 选我选我
      </div>
    </div>
  );
};
```

## 溢出：overflow

使用方式：**overflow-{type}**

type 枚举列表,如下：

1. hidden
2. visible
3. auto
4. scroll

```jsx
import React from 'react';
import '@nicecode/css';

export default () => {
  let style = {
    display: 'inline-block',
    verticalAlign: 'top',
    margin: '6px',
    padding: '6px',
    height: '100px',
    width: '200px',
    background: '#f5f5f5',
  };

  return (
    <div>
      <div className="overflow-hidden" style={style}>
        overflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hidden
      </div>
      <div className="overflow-auto" style={style}>
        overflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-autooverflow-auto
      </div>
      <div className="overflow-visible" style={style}>
        overflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visibleoverflow-visible
      </div>
      <div className="overflow-scroll" style={style}>
        overflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scrolloverflow-scroll
      </div>
    </div>
  );
};
```
