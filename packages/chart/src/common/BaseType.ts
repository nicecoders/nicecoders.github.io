import { CSSProperties } from 'react'

export interface IBase {
  /**
   * @description       样式类名称
   * @default           -
   */
  className?: string;

  /**
   * @description       样式
   * @default           -
   */
  style?: CSSProperties;
}
