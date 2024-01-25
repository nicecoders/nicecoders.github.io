import React from 'react';
import { InputNumber } from '@nicecode/meta';

const App: React.FC = () => <InputNumber min={1} max={10} defaultValue={3} bordered={false} />;

export default App;
