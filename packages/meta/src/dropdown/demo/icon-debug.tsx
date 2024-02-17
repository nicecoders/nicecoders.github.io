import { DownOutlined } from '@ant-design/icons';
import React from 'react';
import { Dropdown, Space } from '@nicecode/meta';

const App: React.FC = () => (
  <Space>
    <Dropdown.Button icon={<DownOutlined />} menu={{ items: [] }}>
      Submit
    </Dropdown.Button>
  </Space>
);

export default App;
