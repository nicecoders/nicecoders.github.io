### 安装相关依赖

```js
npm install @nicecode/vplayer --save
```

### 使用效果

#### 视频播放器

```jsx
import React, { useEffect, useRef } from 'react';
import { Vplayer } from '@nicecode/player';

export default () => {
  const vRef = useRef(null);

  useEffect(() => {}, []);

  return (
    <Vplayer
      ref={vRef}
      config={{
        poster:
          '//lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/byted-player-videos/1.0.0/poster.jpg',
        url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
      }}
    />
  );
};
```

#### 音乐播放器

```jsx
import React, { useEffect, useRef } from 'react';
import { Aplayer } from '@nicecode/player';

export default () => {
  const playerRef = useRef();

  return (
    <div>
      <Aplayer
        config={{
          url: [
            {
              src: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3',
              name: '林宥嘉·脆弱一分钟',
              poster:
                '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/poster-small.jpeg',
            },
          ],
        }}
      />
    </div>
  );
};
```

### 参考文档

https://v2.h5player.bytedance.com/
