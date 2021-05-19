/*
 * @Author: your name
 * @Date: 2021-05-19 22:11:41
 * @LastEditTime: 2021-05-19 23:15:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \nicecode\packages\tools\src\validator\demo\index.tsx
 */
import React from 'react'
import { validator } from '@nicecode/tools'

export default () => {
  return <div>手机号正则：{String(validator('mobile'))}</div>;
};
