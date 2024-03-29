import { type CSSObject, unit } from '@ant-design/cssinjs';

import { resetComponent } from '../../style';
import type { FullToken, GenerateStyle, GetDefaultToken } from '../../theme/internal';
import { genStyleHooks, mergeToken } from '../../theme/internal';

export interface ComponentToken {
  /**
   * @desc 头像尺寸
   * @descEN Size of Avatar
   */
  containerSize: number;
  /**
   * @desc 大号头像尺寸
   * @descEN Size of large Avatar
   */
  containerSizeLG: number;
  /**
   * @desc 小号头像尺寸
   * @descEN Size of small Avatar
   */
  containerSizeSM: number;
  /**
   * @desc 头像文字大小
   * @descEN Font size of Avatar
   */
  textFontSize: number;
  /**
   * @desc 大号头像文字大小
   * @descEN Font size of large Avatar
   */
  textFontSizeLG: number;
  /**
   * @desc 小号头像文字大小
   * @descEN Font size of small Avatar
   */
  textFontSizeSM: number;
  /**
   * @desc 头像组间距
   * @descEN Spacing between avatars in a group
   */
  groupSpace: number;
  /**
   * @desc 头像组重叠宽度
   * @descEN Overlapping of avatars in a group
   */
  groupOverlapping: number;
  /**
   * @desc 头像组边框颜色
   * @descEN Border color of avatars in a group
   */
  groupBorderColor: string;
}
// @ts-ignore
type AvatarToken = FullToken<'Avatar'> & {
  avatarBgColor: string;
  avatarBg: string;
  avatarColor: string;
};

const genBaseStyle: GenerateStyle<AvatarToken> = (token) => {
  const {
    antCls,
    componentCls,
    iconCls,
    avatarBg,
    avatarColor,
  // @ts-ignore
    containerSize,
    // @ts-ignore
    containerSizeLG,
  // @ts-ignore
    containerSizeSM,
    // @ts-ignore
    textFontSize,
  // @ts-ignore
    textFontSizeLG,
  // @ts-ignore
    textFontSizeSM,
    borderRadius,
    borderRadiusLG,
    borderRadiusSM,
    lineWidth,
    lineType,
    calc,
  } = token;

  // Avatar size style
  const avatarSizeStyle = (size: number, fontSize: number, radius: number): CSSObject => ({
    width: size,
    height: size,
    lineHeight: unit(calc(size).sub(calc(lineWidth).mul(2)).equal()),
    borderRadius: '50%',

    [`&${componentCls}-square`]: {
      borderRadius: radius,
    },

    [`${componentCls}-string`]: {
      position: 'absolute',
      left: {
        _skip_check_: true,
        value: '50%',
      },
      transformOrigin: '0 center',
    },

    [`&${componentCls}-icon`]: {
      fontSize,
      [`> ${iconCls}`]: {
        margin: 0,
      },
    },
  });

  return {
    [componentCls]: {
      ...resetComponent(token),
      position: 'relative',
      display: 'inline-block',
      overflow: 'hidden',
      color: avatarColor,
      whiteSpace: 'nowrap',
      textAlign: 'center',
      verticalAlign: 'middle',
      background: avatarBg,
      border: `${unit(lineWidth)} ${lineType} transparent`,

      [`&-image`]: {
        background: 'transparent',
      },

      [`${antCls}-image-img`]: {
        display: 'block',
      },

      ...avatarSizeStyle(containerSize, textFontSize, borderRadius),

      [`&-lg`]: {
        ...avatarSizeStyle(containerSizeLG, textFontSizeLG, borderRadiusLG),
      },

      [`&-sm`]: {
        ...avatarSizeStyle(containerSizeSM, textFontSizeSM, borderRadiusSM),
      },

      '> img': {
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
  };
};

const genGroupStyle: GenerateStyle<AvatarToken> = (token) => {
  // @ts-ignore
  const { componentCls, groupBorderColor, groupOverlapping, groupSpace } = token;

  return {
    [`${componentCls}-group`]: {
      display: 'inline-flex',

      [`${componentCls}`]: {
        borderColor: groupBorderColor,
      },

      [`> *:not(:first-child)`]: {
        marginInlineStart: groupOverlapping,
      },
    },
    [`${componentCls}-group-popover`]: {
      [`${componentCls} + ${componentCls}`]: {
        marginInlineStart: groupSpace,
      },
    },
  };
};
// @ts-ignore
export const prepareComponentToken: GetDefaultToken<'Avatar'> = (token) => {
  const {
    controlHeight,
    controlHeightLG,
    controlHeightSM,
    fontSize,
    fontSizeLG,
    fontSizeXL,
    fontSizeHeading3,
    marginXS,
    marginXXS,
    colorBorderBg,
  } = token;
  return {
    containerSize: controlHeight,
    containerSizeLG: controlHeightLG,
    containerSizeSM: controlHeightSM,
    textFontSize: Math.round((fontSizeLG + fontSizeXL) / 2),
    textFontSizeLG: fontSizeHeading3,
    textFontSizeSM: fontSize,
    groupSpace: marginXXS,
    groupOverlapping: -marginXS,
    groupBorderColor: colorBorderBg,
  };
};

export default genStyleHooks(
  // @ts-ignore
  'Avatar',
  (token) => {
    const { colorTextLightSolid, colorTextPlaceholder } = token;
    const avatarToken = mergeToken<AvatarToken>(token, {
      avatarBg: colorTextPlaceholder,
      avatarColor: colorTextLightSolid,
    });
    return [genBaseStyle(avatarToken), genGroupStyle(avatarToken)];
  },
  prepareComponentToken,
);
