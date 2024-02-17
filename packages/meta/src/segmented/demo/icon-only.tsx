import React from 'react';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Segmented } from '@nicecode/meta';

const Demo: React.FC = () => (
  <Segmented
    options={[
      { value: 'List', icon: <BarsOutlined /> },
      { value: 'Kanban', icon: <AppstoreOutlined /> },
    ]}
  />
);

export default Demo;
