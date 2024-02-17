import React, { useRef, useEffect, FC } from 'react';
import './index.less'

interface FrostedGlassProps {
  title: string
  frontBg: string
  backBg: string;
  maskImage: string;
}

const FrostedGlass: FC<FrostedGlassProps> = (props) => {
  const { title = '', backBg, frontBg, maskImage } = props;

  useEffect(() => {
  }, [])

  return (
    <div className="frostedGlass">
        <div className="frostedGlass_bg" style={{ backgroundImage: `url(${backBg})` }} ></div>
        <div className="frostedGlass_mask" style={{ backgroundImage: `url(${frontBg})`, maskImage: `url(${maskImage})` }}></div>
        <div className="frostedGlass_slogan">{title}</div>
    </div>
  )
}

export default FrostedGlass
