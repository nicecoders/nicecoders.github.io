export type ValidatorType =
  | 'phone'
  | 'email'   // email
  | 'mobile'
  | 'url'
  | 'password'
  | 'noChars'
  | 'postCode'
  | 'zh'
  | 'mac'
  | 'idCard'
  | 'ip';


/**
 * 正则匹配校验规则
 * @param type 类型
 * @returns RGX
 */
const Validator = (type: ValidatorType) =>  {
  if (!type) throw Error('请先输入校验类型！')

  const validatorList = {
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, // email
    mobile: /^1[0-9]{10}$/,
    phone: /^([0-9]{3,4}-)?[0-9]{7,8}$/,
    url: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.([a-zA-Z]{2,}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/,
    password: /(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?/_=+-]+)$)^[\w~!@#$%&*?/_=+-]+$/,  // 密码（数字、字母、符号两种及以上）
    idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
    ip: /(?=(\b|\D))(((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))\.){3}((\d{1,2})|(1\d{1,2})|(2[0-4]\d)|(25[0-5]))(?=(\b|\D))/,
    mac: /^[A-Fa-f0-9]{2}(-[A-Fa-f0-9]{2}){5}$|^[A-Fa-f0-9]{2}(:[A-Fa-f0-9]{2}){5}$/,  // mac 地址
    noChars: /^[\u4e00-\u9fa5a-zA-Z\d\s_]*$/,
    postCode: /^\d{6}$/,
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
  }

  return type && validatorList[type]
}

export default Validator;
