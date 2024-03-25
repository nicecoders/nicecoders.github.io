import React, { useEffect, FC } from 'react';
import './index.less'

interface HollowTextProps {
  title: string;
}

const HollowText: FC<HollowTextProps> = (props) => {
  const { title = '' } = props;

  useEffect(() => {
  }, [])

  return (
    <div className="hollowText">
        <div className="bg"></div>
        <div className="text">
          {title}
        </div>
    </div>
  )
}

export default HollowText
