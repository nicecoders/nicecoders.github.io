/* eslint-disable class-methods-use-this */
import type { ColorGenInput, HSBA } from '@rc-component/color-picker';
import { Color as RcColor } from '@rc-component/color-picker';
import { Numberify, RGBA } from '@ctrl/tinycolor'

export const toHexFormat = (value?: string, alpha?: boolean) =>
  value?.replace(/[^\w/]/gi, '').slice(0, alpha ? 8 : 6) || '';

export const getHex = (value?: string, alpha?: boolean) => (value ? toHexFormat(value, alpha) : '');

export interface Color
  extends Pick<
    RcColor,
    'toHsb' | 'toHsbString' | 'toHex' | 'toHexString' | 'toRgb' | 'toRgbString'
  > {}

export class ColorFactory {
  /** Original Color object */
  private metaColor: RcColor;

  constructor(color: ColorGenInput<Color>) {
    this.metaColor = new RcColor(color as ColorGenInput);
    if (!color) {
      this.metaColor.setAlpha(0);
    }
  }

  toHsb():  Numberify<HSBA> {
    return this.metaColor.toHsb();
  }

  toHsbString() {
    return this.metaColor.toHsbString();
  }

  toHex() {
    return getHex(this.toHexString(), this.metaColor.getAlpha() < 1);
  }

  toHexString() {
    return this.metaColor.getAlpha() === 1
      ? this.metaColor.toHexString()
      : this.metaColor.toHex8String();
  }

  toRgb(): Numberify<RGBA> {
    return this.metaColor.toRgb();
  }

  toRgbString() {
    return this.metaColor.toRgbString();
  }
}
