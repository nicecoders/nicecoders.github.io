import React from 'react';
import { Button, Radio } from 'antd'

export default ({ title }: { title: string }) => {
    console.log(Button)
    return (
        <div>
            <Radio>
                <Radio.Group value="123">aaa</Radio.Group>
            </Radio>
            <Button type="primary" >{title}</Button>
        </div>
    )
};
