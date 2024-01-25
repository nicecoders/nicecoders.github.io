import { useState, useRef, useCallback } from 'react';
import { useActivate, useUnactivate } from 'react-activation';
import { noop, isFunction } from '@nicecode/func';
import { useLatest, useMount, useUnmount } from 'ahooks';

export const useUnActivateWrapper = (cb: () => void) => {
  const latestCb = useLatest(cb);
  const handle = useCallback(() => {
    const cb = latestCb.current ? latestCb.current : noop;
    cb();
  }, []);
  useUnactivate(handle);
  useUnmount(handle);
};

export const useActivateWrapper = (cb: any) => {
  const latestCb = useLatest(cb);
  let retRef = useRef(noop);

  const handle = useCallback(() => {
    const cb = latestCb.current ? latestCb.current : noop;
    retRef.current = cb();
  }, []);

  const unMountHandle = useCallback(() => {
    if (isFunction(retRef.current)) {
      retRef.current();
    }
  }, []);

  useActivate(handle);
  useMount(handle);

  useUnActivateWrapper(unMountHandle);

  return null;
};

export const useActivateState = () => {
  const [isActive, setIsActive] = useState(false);
  useActivateWrapper(() => {
    setIsActive(true);
    return () => {
      setIsActive(false);
    };
  });
  return isActive;
};

export default useActivateWrapper;
