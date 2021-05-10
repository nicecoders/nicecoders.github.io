import React from 'react';
import { checkDevice } from '@nicecode/tools'


const Demo: React.FC<any> = () => {
  return (
    <div>是否在PC端：{String(checkDevice.isPc())}</div>
  )
}

export default Demo;
