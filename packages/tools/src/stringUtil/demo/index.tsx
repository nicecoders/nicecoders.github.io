import React from 'react'
import { stringUtil } from '@nicecode/tools'

export default () => {
  return <div>元转分：{stringUtil.toFen(String(222))}</div>;
};
