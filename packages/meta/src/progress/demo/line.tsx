import React from 'react';
import { Progress } from '@nicecode/meta';

const App: React.FC = () => (
  <>
    <Progress percent={30} />
    <Progress percent={50} status="active" />
    <Progress percent={70} status="exception" />
    <Progress percent={100} />
    <Progress percent={50} showInfo={false} />
  </>
);

export default App;
