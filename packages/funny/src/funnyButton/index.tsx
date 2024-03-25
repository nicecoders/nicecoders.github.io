import React, { useEffect, FC } from 'react';
import './index.less'

interface FunnyButtonProps {
  mode: 'normal' | 'ease' | 'wave'
  title: string
}

const FunnyButton: FC<FunnyButtonProps> = (props) => {
  const { mode = 'normal', title = '-' } = props;

  useEffect(() => {
  }, [])

  return (
    <div className={`btn button-${mode}`}>
        <span className="mas">{title}</span>
        <button type="button" name="Hover">{title}</button>
    </div>
  )
}

export default FunnyButton
