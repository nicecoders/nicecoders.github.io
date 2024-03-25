import camelCase from 'lodash/camelCase'
import capitalize from 'lodash/capitalize'
import endsWith from 'lodash/endsWith'
import escape from 'lodash/escape'
import escapeRegExp from 'lodash/escapeRegExp'
import kebabCase from 'lodash/kebabCase'
import lowerCase from 'lodash/lowerCase'
import lowerFirst from 'lodash/lowerFirst'
import pad from 'lodash/pad'
import padEnd from 'lodash/padEnd'
import padStart from 'lodash/padStart'
import repeat from 'lodash/repeat'
import replace from 'lodash/replace'
import split from 'lodash/split'
import startCase from 'lodash/startCase'
import startsWith from 'lodash/startsWith'
import trim from 'lodash/trim'
import trimEnd from 'lodash/trimEnd'
import trimStart from 'lodash/trimStart'
import truncate from 'lodash/truncate'

///<summary>获得字符串实际长度，中文2，英文1</summary>
///<param name="str">要获得长度的字符串</param>
export const getStrLength = (str: string) => {
  var realLength = 0,
    len = str.length,
    charCode = -1;

  for (var i = 0; i < len; i++) {
    charCode = str.charCodeAt(i);
    if (charCode >= 0 && charCode <= 128) realLength += 1;
    else realLength += 2;
  }
  return realLength;
};

/**
 * js截取字符串，中英文都能用
 * @param str：需要截取的字符串
 * @param len: 需要截取的长度
 */
export const cutString =  (str: string, len: number) => {
  var str_length = 0;
  var str_len = 0;
  let str_cut = new String();
  str_len = str.length;
  for (var i = 0; i < str_len; i++) {
    let a = str.charAt(i);
    str_length++;
    if (escape(a).length > 4) {
      //中文字符的长度经编码之后大于4
      str_length++;
    }
    str_cut = str_cut.concat(a);
    if (str_length >= len) {
      str_cut = str_cut.concat('...');
      return str_cut;
    }
  }
  //如果给定字符串小于指定长度，则返回源字符串；
  if (str_length < len) {
    return str;
  }
};

export default {
  /**
   * 驼峰字符串
   */
  camelCase,
  /**
   * 首字母大写
   */
  capitalize,
  /**
   * 检查字符串string是否以给定的target字符串结尾。
   */
  endsWith,
  /**
   * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
   */
  escape,
  /**
   * 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .
   */
  escapeRegExp,
  /**
   * 转换字符串string为用 - 连接
   */
  kebabCase,
  /**
   * 转换字符串string以空格分开单词，并转换为小写
   */
  lowerCase,
  /**
   * 转换字符串string的首字母为小写
   */
  lowerFirst,
  /**
   * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度
   */
  pad,
  /**
   * 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分
   */
  padEnd,
  /**
   * 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分
   */
  padStart,
  /**
   * 重复 N 次给定字符串。
   */
  repeat,
  /**
   * 替换string字符串中匹配的pattern为给定的replacement
   */
  replace,
  /**
   * 根据separator 拆分字符串string
   */
  split,
  /**
   * 转换 string 字符串为 start case.
   */
  startCase,
  /**
   * 检查字符串string是否以 target 开头
   */
  startsWith,
  /**
   * 移除指定字符，默认移除空格
   */
  trim,
  /**
   * 移除后面字符，默认移除空格
   */
  trimEnd,
  /**
   * 移除前面字符，默认移除空格
   */
  trimStart,
  /**
   * 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."
   */
  truncate
};
