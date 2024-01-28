import React, { useRef, useState, useEffect, FC } from 'react';
import { noop } from '@nicecode/func'
import './index.less'

interface Nav3dProps {
  items: {
    label: string;
    value: string;
    link?: string
  }[];
  selectedKey: string;
  onSelect: (item: Nav3dProps['items']) => void;
}

const nav3D: FC<Nav3dProps> = (props) => {
  const { items = [], selectedKey, onSelect = noop } = props;
  const [selectKey, setSelectedKey] = useState(selectedKey)

  useEffect(() => {
  }, [])

  const handleSelect = (e, item: Nav3dProps['items'][0]) => {
    e.preventDefault()
    setSelectedKey(item.value)
  }

  return (
    <div className='ribbon'>
      {items.map(item =>(
        (<a className={`${selectKey === item.value ? 'ribbon-active' : ''}`} onClick={e => handleSelect(e, item)} key={item.value}><span>{item.label}</span></a>)
      ))}
		</div>
  )
}

export default nav3D
