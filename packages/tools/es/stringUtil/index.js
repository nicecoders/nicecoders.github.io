import camelCase from 'lodash/camelCase';
import capitalize from 'lodash/capitalize';
import endsWith from 'lodash/endsWith';
import escape from 'lodash/escape';
import escapeRegExp from 'lodash/escapeRegExp';
import kebabCase from 'lodash/kebabCase';
import lowerCase from 'lodash/lowerCase';
import lowerFirst from 'lodash/lowerFirst';
import pad from 'lodash/pad';
import padEnd from 'lodash/padEnd';
import padStart from 'lodash/padStart';
import repeat from 'lodash/repeat';
import replace from 'lodash/replace';
import split from 'lodash/split';
import startCase from 'lodash/startCase';
import startsWith from 'lodash/startsWith';
import trim from 'lodash/trim';
import trimEnd from 'lodash/trimEnd';
import trimStart from 'lodash/trimStart';
import truncate from 'lodash/truncate';
export default {
  /**
   * 驼峰字符串
   */
  camelCase: camelCase,

  /**
   * 首字母大写
   */
  capitalize: capitalize,

  /**
   * 检查字符串string是否以给定的target字符串结尾。
   */
  endsWith: endsWith,

  /**
   * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
   */
  escape: escape,

  /**
   * 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .
   */
  escapeRegExp: escapeRegExp,

  /**
   * 转换字符串string为用 - 连接
   */
  kebabCase: kebabCase,

  /**
   * 转换字符串string以空格分开单词，并转换为小写
   */
  lowerCase: lowerCase,

  /**
   * 转换字符串string的首字母为小写
   */
  lowerFirst: lowerFirst,

  /**
   * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度
   */
  pad: pad,

  /**
   * 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分
   */
  padEnd: padEnd,

  /**
   * 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分
   */
  padStart: padStart,

  /**
   * 重复 N 次给定字符串。
   */
  repeat: repeat,

  /**
   * 替换string字符串中匹配的pattern为给定的replacement
   */
  replace: replace,

  /**
   * 根据separator 拆分字符串string
   */
  split: split,

  /**
   * 转换 string 字符串为 start case.
   */
  startCase: startCase,

  /**
   * 检查字符串string是否以 target 开头
   */
  startsWith: startsWith,

  /**
   * 移除指定字符，默认移除空格
   */
  trim: trim,

  /**
   * 移除后面字符，默认移除空格
   */
  trimEnd: trimEnd,

  /**
   * 移除前面字符，默认移除空格
   */
  trimStart: trimStart,

  /**
   * 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."
   */
  truncate: truncate
};