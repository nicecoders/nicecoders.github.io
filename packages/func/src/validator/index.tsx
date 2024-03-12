export interface ValidatorType {
  /**
   * @description       类型
   * @default           -
   */
  type: | 'phone'   // 电话号码
  | 'email'   // email
  | 'mobile'  // 手机号码
  | 'url'     // 链接
  | 'password'  // 密码
  | 'noChars'   //  只能输入汉字
  | 'postCode'  // 邮编
  | 'zh'  // 中文
  | 'mac' // mac 码
  | 'idCard'  // 身份证号码
  | 'ip'  // ip地址
  | 'ipv4'
  | 'int' // 整数
  | 'float'   // 浮点数
  | 'wechat'  // 微信号
  | 'carNum'  // 车牌号
  | 'alphabet'  // 只能输入字母
  | 'fileName'  // 文件名称
  | 'color16' // 16进制颜色
  | 'specStr'   // 特殊字符串
  | 'space'   // 校验空格
}


/**
 * 正则匹配校验规则
 * @param type 类型
 * @returns RGX
 */
const Validator = (type: ValidatorType['type']) =>  {
  if (!type) throw Error('请先输入校验类型！')

  const validatorList = {
    email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/, // email
    mobile: /^[1][3456789][0-9]{9}$/,
    phone: /^([0-9]{3,4}-)?[0-9]{7,8}$/,
    url: /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
    password: /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?/_=+-]+)$)^[\w~!@#$%&*?/_=+-]+$/,  // 密码（数字、字母、符号两种及以上）
    idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    ip: /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/,
    mac: /^[A-Fa-f0-9]{2}(-[A-Fa-f0-9]{2}){5}$|^[A-Fa-f0-9]{2}(:[A-Fa-f0-9]{2}){5}$/,  // mac 地址
    noChars: /^[\u4e00-\u9fa5a-zA-Z\d\s_]*$/,
    postCode: /^\d{6}$/,
    alphabet: /^[a-zA-Z]+$/,
    wechat: /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/,
    zh: new RegExp(`[${[
      '\u2000-\u206F', // 常用标点
      '\u2E80-\u2EFF', // CJK 部首补充
      '\u2F00-\u2FDF', // 康熙字典部首
      '\u2FF0-\u2FFF', // 表意文字描述符
      '\u3000-\u303F', // CJK 符号和标点
      '\u31C0-\u31EF', // CJK 笔画
      '\u3300-\u33FF', // CJK 兼容
      '\u3400-\u4DBF', // CJK 统一表意符号扩展 A
      '\u4E00-\u9FBF', // CJK 统一表意符号
      '\uF900-\uFAFF', // CJK 兼容象形文字
      '\uFE30-\uFE4F', // CJK 兼容形式
      '\uFF00-\uFFEF', // 半型及全型形式【针对部分中文标点符号】
    ].join('')}]`),
    color16: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    int: /^[-+]?\d*$/,
    float: /^[-\+]?\d+(\.\d+)?$/,
    space: /^[^\s]*$/g,
    fileName: (arr) => {
      arr = arr.map(name => `.${name}`).join('|')
      return new RegExp(`(${arr})$`)
    },
    carNum: /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/,
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
    specStr: new RegExp(/[(\ )(\~)(\~)(\!)(\！)(\@)(\#)(\$)(\￥)(\%)(\^)(\……)(\&)(\*)(\()(\（)(\))(\）)(\-)(\_))(\——)(\+)(\=)(\[)(\【)(\])(\】)(\{)(\})(\|))(\、))(\)(\\)(\;)(\；)(\:)(\：)(\')(\‘)(\’)(\")(\“)(\”)(\,)(\，)(\.)(\。)(\/)(\《)(\<)(\>)(\》)(\?)(\？)(\)]+/)
  }

  return validatorList[type]
}

export default Validator;
