import React from 'react'
import { timeUtil } from '@nicecode/tools'

export default () => {
  return <div>时间格式化：{timeUtil.parseTime(new Date())}</div>;
};
