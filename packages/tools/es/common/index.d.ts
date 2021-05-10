/**
 * 通用方法
 *
 * generateUUID - 生成uuid
 * getDeviceId - 获取deviceId
 * getParameter - 获取url中的参数
 * addURLParameter - 向url中添加search参数
 * updateURLParameter - 更新url中的search参数
 * removeURLParameter - 删除url中的search参数
 */
declare class Common {
    /**
     * 生成uuid
     *
     * @return uuid
     * @example
     *
     * generateUUID();
     * // => cd2f4b1f-daf2-451c-a9a6-db716c1d82bb
     */
    generateUUID: () => string;
    /**
     * 获取deviceId
     *
     * @param {String} [key='deviceId'] - 存储标识
     */
    getDeviceId: (key?: string) => string;
    /**
     * 获取url中的参数
     *
     * @param {String} name - 参数名
     * @param {String} [url=window.location.search] - 链接
     * @return {String} 参数值
     * @example
     *
     * getParameter('name', 'http://www.w3school.com?name=xxx');
     * // => xxx
     */
    getParameter: (name: string, url?: string) => string;
    /**
     * 向url中添加search参数
     *
     * @param {String} url - 链接
     * @param {String} paramName - 参数名称
     * @param {String} paramVal - 参数值
     * @return {String} 拼接好的url
     */
    addURLParameter: (url: string, paramName: string, paramVal: string) => string;
    /**
     * 更新url中的search参数
     *
     * @param {String} url - 链接
     * @param {String} paramName - 参数名称
     * @param {String} paramVal - 参数值
     * @return {String} 更新参数后的url
     */
    updateURLParameter: (url: string, paramName: string, paramVal: any) => string;
    /**
     * 删除url中的search参数
     *
     * @param {String} url - 链接
     * @param {String} paramName - 参数名称
     * @return {String} 删除参数后的url
     */
    removeURLParameter: (url: string, paramName: string) => string;
}
declare const _default: Common;
export default _default;
