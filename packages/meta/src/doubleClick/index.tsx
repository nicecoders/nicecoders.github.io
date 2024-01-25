//@ts-nocheck
import { noop } from '@nicecode/func';
import { Modal, Checkbox } from '@nicecode/meta';
import { useDoubleCheck } from '@nicecode/hooks';
const { confirm } = Modal;

//二次确认
export const doubleCheck = (title = '警告', option?) => {
  const {
    okFunc = noop,
    cancelFunc = noop,
    doubleCheckKey,
    doubleCheckTitle = '不再询问',
    ...others
  } = option || {};

  return confirm({
    title,
    // type: 'warning',
    onCancel: async (isOk) => {
      if (isOk) {
        await okFunc();
      } else {
        await cancelFunc();
      }
    },
    ...(doubleCheckKey
      ? {
          renderFooterRight: () => {
            const [value, setValue] = useDoubleCheck(doubleCheckKey);
            return (
              <div>
                <Checkbox
                  checked={value}
                  onChange={(v) => {
                    setValue(v);
                  }}
                >
                  {doubleCheckTitle}
                </Checkbox>
              </div>
            );
          },
        }
      : {}),
    ...others,
  });
};

export default doubleCheck;
