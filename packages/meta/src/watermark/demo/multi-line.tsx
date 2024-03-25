import React from 'react';
import { Watermark } from '@nicecode/meta';

const App: React.FC = () => (
  <Watermark content={['nicecode nicecode', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
