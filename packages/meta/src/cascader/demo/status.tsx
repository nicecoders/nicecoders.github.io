import React from 'react';
import { Cascader, Space } from '@nicecode/meta';

const App: React.FC = () => (
  <Space direction="vertical">
    <Cascader status="error" placeholder="Error" />
    <Cascader status="warning" multiple placeholder="Warning multiple" />
  </Space>
);

export default App;
