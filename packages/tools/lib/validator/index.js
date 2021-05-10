"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

/**
 * 正则匹配校验规则
 * @param type 类型
 * @returns RGX
 */
var Validator = function Validator(type) {
  if (!type) throw Error('请先输入校验类型！');
  var validatorList = {
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    mobile: /^1[0-9]{10}$/,
    phone: /^([0-9]{3,4}-)?[0-9]{7,8}$/,
    url: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.([a-zA-Z]{2,}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
    password: /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?/_=+-]+)$)^[\w~!@#$%&*?/_=+-]+$/,
    idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    ip: /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/,
    mac: /^[A-Fa-f0-9]{2}(-[A-Fa-f0-9]{2}){5}$|^[A-Fa-f0-9]{2}(:[A-Fa-f0-9]{2}){5}$/,
    noChars: /^[\u4e00-\u9fa5a-zA-Z\d\s_]*$/,
    postCode: /^\d{6}$/,
    zh: new RegExp("[".concat(["\u2000-\u206F", "\u2E80-\u2EFF", "\u2F00-\u2FDF", "\u2FF0-\u2FFF", "\u3000-\u303F", "\u31C0-\u31EF", "\u3300-\u33FF", "\u3400-\u4DBF", "\u4E00-\u9FBF", "\uF900-\uFAFF", "\uFE30-\uFE4F", "\uFF00-\uFFEF" // 半型及全型形式【针对部分中文标点符号】
    ].join(''), "]"))
  };
  return type && validatorList[type];
};

var _default = Validator;
exports.default = _default;