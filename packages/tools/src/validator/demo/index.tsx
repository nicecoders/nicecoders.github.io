import React from 'react'
import { validator } from '@nicecode/tools'

export default () => {
  return <div>手机号正则：{String(validator('mobile'))}</div>;
};
 