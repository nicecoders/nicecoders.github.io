import React from 'react';
import loading from './loading.svg'

export default () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <image src={loading} />
      <p>客官，您慢点儿...</p>
    </div>
  );
};
