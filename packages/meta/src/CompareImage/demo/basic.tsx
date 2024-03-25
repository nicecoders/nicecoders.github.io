
import React, { useRef } from 'react';
import { CompareImage, Space, Button } from '@nicecode/meta'

const props = {
  label: "目标图",
  openRoll:true,
  dataSource:[
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      score: '0.5'
    },
    {
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      score: '0.8'
    },
  ]
}

export default () => {
  const ref = useRef(null)

  return (
    <Space>
      <Button onClick={() => ref.current?.handleIndexChange(-1)}>上一张</Button>
      <Button onClick={() => ref.current?.handleIndexChange(1)}>下一张</Button>
      <CompareImage {...props} ref={ref} />
    </Space>
  )
}
