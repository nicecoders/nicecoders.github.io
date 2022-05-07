import { FC } from 'react';
import type { IBase } from '../common/BaseType'

export interface Ibar extends IBase {

}

const Bar: FC<Ibar> = ({
  className
}) => {

  // @ts-ignore
  return <div className={className}>123</div>
}

export default Bar
