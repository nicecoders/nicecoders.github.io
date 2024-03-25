import * as React from 'react';

const fullClone = {
  ...React,
};
// @ts-ignore
const { useId } = fullClone;

const useEmptyId = () => '';

const useThemeKey = typeof useId === 'undefined' ? useEmptyId : useId;

export default useThemeKey;
