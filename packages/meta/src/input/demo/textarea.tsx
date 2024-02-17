import React from 'react';
import { Input } from '@nicecode/meta';

const { TextArea } = Input;

const App: React.FC = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
);

export default App;
