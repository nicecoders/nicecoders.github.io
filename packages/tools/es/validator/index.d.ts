export declare type ValidatorType = 'string' | 'phone' | 'email' | 'mobile' | 'onlyString' | 'url' | 'password' | 'ip';
/**
 * 正则匹配校验规则
 * @param type 类型
 * @returns RGX
 */
declare const Validator: (type: ValidatorType) => any;
export default Validator;
