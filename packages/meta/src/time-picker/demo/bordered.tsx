import React from 'react';
import { TimePicker } from '@nicecode/meta';

const { RangePicker } = TimePicker;

const App: React.FC = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);

export default App;
