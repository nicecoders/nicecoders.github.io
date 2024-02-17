import { useLocalStorageState } from 'ahooks';
import { Options } from 'ahooks/lib/createUseStorageState';

export const isShowDoubleCheck = (key: string) => {
  const v = localStorage.getItem(key);
  return v === '1' ? true : false;
};

export default function useDoubleCheck(key: string, initialState: Options<unknown> | undefined) {
  //是否关闭二次提示
  const [value, setValue] = useLocalStorageState(key, initialState);
  return [value, setValue];
}
