import React from 'react';
import { Avatar, Space } from '@nicecode/meta';

const App: React.FC = () => (
  <Space>
    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
      A
    </Avatar>
    <Avatar shape="circle" src="http://abc.com/not-exist.jpg">
      ABC
    </Avatar>
  </Space>
);

export default App;
