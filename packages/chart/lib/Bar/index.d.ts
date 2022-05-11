import { FC } from 'react';
import type { IBase } from '../common/BaseType';
export interface Ibar extends IBase {
    /**
     * @description       数据格式
     * @default           []
     */
    data: Array<{
        name: string;
        value: number;
    }>;
    /**
     * @description       类型
     * @default           canvas
     */
    type?: 'svg' | 'canvas';
}
declare const Bar: FC<Ibar>;
export default Bar;
