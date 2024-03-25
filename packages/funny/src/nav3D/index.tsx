import React, { useState, useEffect, FC } from 'react';
import './index.less'

interface Nav3dProps {
  items: {
    label: string;
    value: string;
    link?: string
  }[];
  selectedKey: string;
  onSelect?: (item: Nav3dProps['items'][0]) => void;
}

const nav3D: FC<Nav3dProps> = (props) => {
  const { items = [], selectedKey, onSelect } = props;
  const [selectKey, setSelectedKey] = useState(selectedKey)

  useEffect(() => {
  }, [])

  const handleSelect = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, item: Nav3dProps['items'][0]) => {
    e.preventDefault()
    setSelectedKey(item.value)
    onSelect?.(item)
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
