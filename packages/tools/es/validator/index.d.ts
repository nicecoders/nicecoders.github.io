export declare type ValidatorType = 'phone' | 'email' | 'mobile' | 'url' | 'password' | 'noChars' | 'postCode' | 'zh' | 'mac' | 'idCard' | 'ip';
/**
 * 正则匹配校验规则
 * @param type 类型
 * @returns RGX
 */
declare const Validator: (type: ValidatorType) => RegExp;
export default Validator;
