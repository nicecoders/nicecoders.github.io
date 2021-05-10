import React from 'react'
import Validator from '../index';

export default () => {
  const test = Validator('email');
  console.log(test);
  return <div>123</div>;
};
