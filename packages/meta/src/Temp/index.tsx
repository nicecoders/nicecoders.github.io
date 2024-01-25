import React, { FC } from 'react'
import { Button } from '@nicecode/meta'
import type { ButtonProps } from 'antd/lib/button'

interface IButtonDemo extends ButtonProps {

}

const ButtonDemo: FC<IButtonDemo> = (props) => {
  const { children } = props

  return (
    <Button {...props} >{children}</Button>
  )
}

export default ButtonDemo
