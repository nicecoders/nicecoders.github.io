export declare type ValidatorType = 'phone' | 'email' | 'mobile' | 'url' | 'password' | 'noChars' | 'postCode' | 'zh' | 'mac' | 'idCard' | 'ip' | 'ipv4' | 'int' | 'float' | 'wechat' | 'carNum' | 'alphabet' | 'fileName' | 'color16' | 'specStr';
/**
 * 正则匹配校验规则
 * @param type 类型
 * @returns RGX
 */
declare const Validator: (type: ValidatorType) => RegExp | ((arr: any) => RegExp);
export default Validator;
