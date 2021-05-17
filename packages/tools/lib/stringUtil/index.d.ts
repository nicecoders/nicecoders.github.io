/**
 * 字符串操作
 *
 * isNull - 空校验
 * isNumber - 数字校验
 * filterNull - 空数据过滤
 * toYuan - 分转化成元
 * toFen - 元转化为分
 */
declare class StringUtil {
    /**
     * 空校验
     * 空数据集合：undefined,'undefined',null,'null','(null)','NaN',''
     *
     * @param {String} str - 字符串
     * @return {Boolean} true-空，false-非空
     * @example
     *
     * isNull();
     * // => true
     *
     * isNull('undefined');
     * // => true
     */
    isNull: (str: string) => boolean;
    /**
     * 数字校验
     *
     * @param {String} str - 字符串
     * @return {Boolean} true-数字，false-非数字
     * @example
     *
     * isNumber('20');
     * // => true
     *
     * isNumber('.2');
     * // => false
     */
    isNumber: (str: string) => boolean;
    /**
     * 空数据过滤
     *
     * @param {String} str - 字符串
     * @param {String} [format=''] - 格式化
     * @return {String} 过滤后的数据
     * @example
     *
     * filterNull('xxx');
     * // => xxx
     *
     * filterNull();
     * // =>
     *
     * filterNull(null, '--');
     * // => --
     */
    filterNull: (str: string, format?: string) => string;
    /**
     * 分->元
     * 为防止浮点数及大数运算精度丢失，故采用字符串形式解析
     *
     * @param {String} str - 分
     * @param {String} [format='0.00'] - 格式化
     * @return {String} 元
     * @example
     */
    toYuan: (str: string | number, format?: string) => string;
    /**
     * 元->分
     * 为防止浮点数及大数运算精度丢失，故采用字符串形式解析
     *
     * @param {String} str - 元
     * @param {String} [format='0'] - 格式化
     * @return {String} 分
     * @example
     *
     */
    toFen: (str: string | number, format?: string) => string;
}
declare const _default: StringUtil;
export default _default;
