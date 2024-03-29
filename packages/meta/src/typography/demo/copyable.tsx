import React from 'react';
import { SmileFilled, SmileOutlined } from '@ant-design/icons';
import { Typography } from '@nicecode/meta';

const { Paragraph, Text } = Typography;

const App: React.FC = () => (
  <>
    <Paragraph copyable>This is a copyable text.</Paragraph>
    <Paragraph copyable={{ text: 'Hello, Ant Design!' }}>Replace copy text.</Paragraph>
    <Paragraph
      copyable={{
        icon: [<SmileOutlined key="copy-icon" />, <SmileFilled key="copied-icon" />],
        tooltips: ['click here', 'you clicked!!'],
      }}
    >
      Custom Copy icon and replace tooltips text.
    </Paragraph>
    <Paragraph copyable={{ tooltips: false }}>Hide Copy tooltips.</Paragraph>
    <Text copyable />
  </>
);

export default App;
