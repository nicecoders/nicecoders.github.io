import React from 'react';
import { Watermark } from '@nicecode/meta';

const App: React.FC = () => (
  <Watermark content={['Nice Code', 'Happy Working']}>
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
