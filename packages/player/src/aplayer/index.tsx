import "xgplayer";
import type { IPlayerOptions } from 'xgplayer';
import Music from 'xgplayer-music';
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, FC } from 'react'

interface IAplayer {
  config: IPlayerOptions
}

const Aplayer: FC<IAplayer> = forwardRef((props, ref) => {
  const { config = {} } = props
  const vRef = useRef()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (vRef && vRef.current) {
      let _player = new Music({
        el: vRef.current,
        fluid: true,
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
        },
        ...config
      });
      setPlayer(_player)
    }
  }, [config])

  useImperativeHandle(ref, () => { return { off: () => player.off()} });

  return (
    <div ref={vRef} ></div>
  )
})

export default Aplayer
