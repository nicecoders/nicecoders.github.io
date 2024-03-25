import React from 'react';
import Marquee from 'react-fast-marquee';
import { Alert } from '@nicecode/meta';

const App: React.FC = () => (
  <Alert
    banner
    message={
      <Marquee pauseOnHover gradient={false}>
        I can be a React component, multiple React components, or just some text.
      </Marquee>
    }
  />
);

export default App;
