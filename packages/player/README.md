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
            src: 'https://jzx-h5.oss-cn-hangzhou.aliyuncs.com/static/This%20Is%20The%20New%20Shit.mp3',
            name: 'this is a new shit',
            vid: '000001',
            poster: 'https://tva1.sinaimg.cn/large/008i3skNly1gtky1tx9q8j605g05ggll02.jpg'
          }
        ],
        volume: 0.8,
        height: 60,
        preloadNext: true,
        switchKeepProgress: false,
        abCycle: {
          start: 3,
          end: 9,
          loop: true
        }
      });
    }
  }, [])

  return (
    <div ref={playerRef}>
    </div>
  );
};
```