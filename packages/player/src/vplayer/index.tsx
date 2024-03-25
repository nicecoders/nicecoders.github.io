import xgplayer from "xgplayer";
import type { IPlayerOptions } from 'xgplayer'
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, FC } from 'react'

interface IVplayer extends IPlayerOptions {
}

interface IVPlayerRef {

}

const Vplayer: FC<IVplayer> = forwardRef<IVPlayerRef, IVplayer>((props, ref) => {
  const vRef = useRef(null)
  const [player, setPlayer] = useState<IPlayerOptions | null>(null)

  useEffect(() => {
    if (vRef && vRef.current) {
      let _player = new xgplayer({
        el: vRef.current,
        fluid: true,
        playbackRate: [0.5, 0.75, 1, 1.5, 2],      //传入倍速可选数组
        volume: 0.6,       // 默认音量
        ...props
      });
      // @ts-ignore
      setPlayer(_player)
    }
  }, [props])

  useImperativeHandle(ref, () => {
    return {
      // @ts-ignore
      off: () => player?.off()
    }
  });

  return (
    <div ref={vRef} ></div>
  )
})

export default Vplayer
