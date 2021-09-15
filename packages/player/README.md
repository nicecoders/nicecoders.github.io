### 安装相关依赖

```js
npm install @nicecode/vplayer --save
```

### 使用效果

#### 视频播放器

```jsx
import React, { useEffect, useRef } from 'react'
import { Vplayer } from '@nicecode/player'

export default () => {
  const playerRef = useRef()

  useEffect(() => {
    if (playerRef && playerRef.current) {
      let player = new Vplayer({
        el: playerRef.current,
        fluid: true,
        url: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/mp4/xgplayer-demo-360p.mp4',
        playbackRate: [0.5, 0.75, 1, 1.5, 2],      //传入倍速可选数组
        volume: 0.6       // 默认音量
      });
    }
  }, [])

  return (
    <div ref={playerRef}>
    </div>
  );
};
```

#### 音乐播放器

```jsx
import React, { useEffect, useRef } from 'react'
import { Aplayer } from '@nicecode/player'

export default () => {
  const playerRef = useRef()

  useEffect(() => {
    if (playerRef && playerRef.current) {
      let player = new Aplayer({
        el: playerRef.current,
        fluid: true,
        url: [
          {
            src: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/audio.mp3', 
            name: '林宥嘉·脆弱一分钟', 
            poster: '//sf1-cdn-tos.huoshanstatic.com/obj/media-fe/xgplayer_doc_video/music/poster-small.jpeg'
          }
        ],
        volume: 0.8,
        height: 50,
        preloadNext: true,
        volumeShow: true,
        switchKeepProgress: false,
        crossOrigin: 'anonymous',
        abCycle: {
          // start: 3,
          // end: 9,
          loop: true
        }
      });
    }
  }, [])

  return (
    <div>
      <div ref={playerRef}>
      </div>
    </div>
    
  );
};
```

### 参考文档

https://v2.h5player.bytedance.com/