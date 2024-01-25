//@ts-nocheck
import { useLocalStorageState } from 'ahooks';

export default (key: string, initValue = true) => {
  //弹窗显示
  const [v, setV] = useLocalStorageState(key, initValue, {
    raw: false,
    serializer: (v) => (v ? '1' : '0'),
    deserializer: (v) => (v === '1' ? true : false),
  });
  return [v, setV] as [boolean, React.Dispatch<React.SetStateAction<boolean>>];
};
