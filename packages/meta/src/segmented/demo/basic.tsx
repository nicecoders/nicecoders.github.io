import React from 'react';
import { Segmented } from '@nicecode/meta';

const Demo: React.FC = () => (
  <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
);

export default Demo;
