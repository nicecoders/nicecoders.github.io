## 使用方式

```js
import words from '@nicecode/sensitivewords';

console.log(words)
```

## 示例

```jsx
import React, { useEffect } from 'react'
import words from '@nicecode/sensitivewords';

export default () => {

  return (
    <div>
      {words.map(word => <span style={{ display: 'inline-block', margin: '12px', padding: '6px 12px', color: '#fff', background: '#000', borderRadius: '4px' }}>{word}</span>)}
    </div>
  );
};

```


## join us

[Nicecoders Team](https://github.com/nicecoders/nicecode)
