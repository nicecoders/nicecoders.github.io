import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks } from '../../theme/internal';

export type ComponentToken = {};
// @ts-ignore
interface AppToken extends FullToken<'App'> {}

// =============================== Base ===============================
const genBaseStyle: GenerateStyle<AppToken> = (token) => {
  const { componentCls, colorText, fontSize, lineHeight, fontFamily } = token;
  return {
    [componentCls]: {
      color: colorText,
      fontSize,
      lineHeight,
      fontFamily,
    },
  };
};
// @ts-ignore
export const prepareComponentToken: GetDefaultToken<'App'> = () => ({});

// ============================== Export ==============================
// @ts-ignore
export default genStyleHooks('App', genBaseStyle, prepareComponentToken);
