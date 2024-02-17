import React from 'react';
import { Watermark } from '@nicecode/meta';

const App: React.FC = () => (
  <Watermark content="Lambo">
    <div style={{ height: 500 }} />
  </Watermark>
);

export default App;
