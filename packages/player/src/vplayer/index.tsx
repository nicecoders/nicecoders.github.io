import xgplayer from "xgplayer";
import type { IPlayerOptions } from 'xgplayer'
import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle, FC } from 'react'

interface IVplayer {
  config: IPlayerOptions
}

const Vplayer: FC<IVplayer> = forwardRef((props, ref) => {
  const { config = {} } = props
  const vRef = useRef()
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    if (vRef && vRef.current) {
      let _player = new xgplayer({
        el: vRef.current,
        url: '',
        fluid: true,
        playbackRate: [0.5, 0.75, 1, 1.5, 2],      //传入倍速可选数组
        volume: 0.6,       // 默认音量
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

export default Vplayer
