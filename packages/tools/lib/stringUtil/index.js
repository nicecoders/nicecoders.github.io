"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _capitalize = _interopRequireDefault(require("lodash/capitalize"));

var _endsWith = _interopRequireDefault(require("lodash/endsWith"));

var _escape = _interopRequireDefault(require("lodash/escape"));

var _escapeRegExp = _interopRequireDefault(require("lodash/escapeRegExp"));

var _kebabCase = _interopRequireDefault(require("lodash/kebabCase"));

var _lowerCase = _interopRequireDefault(require("lodash/lowerCase"));

var _lowerFirst = _interopRequireDefault(require("lodash/lowerFirst"));

var _pad = _interopRequireDefault(require("lodash/pad"));

var _padEnd = _interopRequireDefault(require("lodash/padEnd"));

var _padStart = _interopRequireDefault(require("lodash/padStart"));

var _repeat = _interopRequireDefault(require("lodash/repeat"));

var _replace = _interopRequireDefault(require("lodash/replace"));

var _split = _interopRequireDefault(require("lodash/split"));

var _startCase = _interopRequireDefault(require("lodash/startCase"));

var _startsWith = _interopRequireDefault(require("lodash/startsWith"));

var _trim = _interopRequireDefault(require("lodash/trim"));

var _trimEnd = _interopRequireDefault(require("lodash/trimEnd"));

var _trimStart = _interopRequireDefault(require("lodash/trimStart"));

var _truncate = _interopRequireDefault(require("lodash/truncate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  /**
   * 驼峰字符串
   */
  camelCase: _camelCase.default,

  /**
   * 首字母大写
   */
  capitalize: _capitalize.default,

  /**
   * 检查字符串string是否以给定的target字符串结尾。
   */
  endsWith: _endsWith.default,

  /**
   * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
   */
  escape: _escape.default,

  /**
   * 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" in .
   */
  escapeRegExp: _escapeRegExp.default,

  /**
   * 转换字符串string为用 - 连接
   */
  kebabCase: _kebabCase.default,

  /**
   * 转换字符串string以空格分开单词，并转换为小写
   */
  lowerCase: _lowerCase.default,

  /**
   * 转换字符串string的首字母为小写
   */
  lowerFirst: _lowerFirst.default,

  /**
   * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度
   */
  pad: _pad.default,

  /**
   * 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分
   */
  padEnd: _padEnd.default,

  /**
   * 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分
   */
  padStart: _padStart.default,

  /**
   * 重复 N 次给定字符串。
   */
  repeat: _repeat.default,

  /**
   * 替换string字符串中匹配的pattern为给定的replacement
   */
  replace: _replace.default,

  /**
   * 根据separator 拆分字符串string
   */
  split: _split.default,

  /**
   * 转换 string 字符串为 start case.
   */
  startCase: _startCase.default,

  /**
   * 检查字符串string是否以 target 开头
   */
  startsWith: _startsWith.default,

  /**
   * 移除指定字符，默认移除空格
   */
  trim: _trim.default,

  /**
   * 移除后面字符，默认移除空格
   */
  trimEnd: _trimEnd.default,

  /**
   * 移除前面字符，默认移除空格
   */
  trimStart: _trimStart.default,

  /**
   * 截断string字符串，如果字符串超出了限定的最大值。 被截断的字符串后面会以 omission 代替，omission 默认是 "..."
   */
  truncate: _truncate.default
};
exports.default = _default;