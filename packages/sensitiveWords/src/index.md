---
nav:
  title: 其它
  path: /other
  second: 
    title: 敏感词库
    order: 7
group:
  title: 敏感词库
  order: 1
  path: /sensitivewords
---

# 敏感词库

<embed src="../readme.md"></embed>

:::info
  <strong>欢迎提交补充: <a>https://github.com/nicecoders/nicecoders.github.io</a></strong>
:::

```jsx
import React, { useEffect } from 'react';
import words from '@nicecode/sensitivewords';

export default () => {
  return (
    <div>
      <p
        style={{
          padding: '5px 10px',
          color: '#aaa',
          fontSize: '16px',
          fontWeight: 'bold',
          background: '#eee',
        }}
      >
        目前共收纳了<em>{words.length}</em>个单词
      </p>
      {words.map((word) => (
        <span
          style={{
            display: 'inline-block',
            margin: '12px',
            padding: '6px 12px',
            color: '#fff',
            background: '#000',
            borderRadius: '4px',
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
};
```
