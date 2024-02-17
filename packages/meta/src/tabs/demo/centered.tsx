import React from 'react';
import { Tabs, ConfigProvider } from '@nicecode/meta';
import type { TabsProps } from '@nicecode/meta';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: '场景图',
  },
  {
    key: '2',
    label: '对比图',
  }
];

const App: React.FC = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemActiveColor: '#333',
            titleFontSize: 18,
            itemSelectedColor: '#333'
          },
        },
      }}
    >
      <Tabs
        defaultActiveKey="1"
        centered
        items={items}
      />
    </ConfigProvider>
  )
};

export default App;
