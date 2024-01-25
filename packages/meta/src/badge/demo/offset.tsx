import React from 'react';
import { Avatar, Badge } from '@nicecode/meta';

const App: React.FC = () => (
  <Badge count={5} offset={[10, 10]}>
    <Avatar shape="square" size="large" />
  </Badge>
);

export default App;
