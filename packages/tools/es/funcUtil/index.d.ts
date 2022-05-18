declare const _default: {
    /**
     * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
     */
    before: any;
    /**
     * 当被调用n次之后执行
     */
    after: any;
    /**
     * 创建一个 debounced（防抖动）函数，该函数会从上一次被调用后，延迟 wait 毫秒后调用 func 方法。 debounced（防抖动）函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options（选项） 对象决定如何调用 func 方法，options.leading 与|或 options.trailing 决定延迟前后如何触发（愚人码头注：是 先调用后等待 还是 先等待后调用）。 func 调用时会传入最后一次提供给 debounced（防抖动）函数 的参数。 后续调用的 debounced（防抖动）函数返回是最后一次 func 调用的结果。
     */
    debounce: any;
    /**
     * 创建一个节流函数，在 wait 秒内最多执行 func 一次的函数。 该函数提供一个 cancel 方法取消延迟的函数调用以及 flush 方法立即调用。 可以提供一个 options 对象决定如何调用 func 方法， options.leading 与|或 options.trailing 决定 wait 前后如何触发。 func 会传入最后一次传入的参数给这个函数。 随后调用的函数返回是最后一次 func 调用的结果。
     */
    throttle: any;
    /**
     * 创建一个函数，该函数接收 func 的参数，要么调用func返回的结果，如果 func 所需参数已经提供，则直接返回 func 所执行的结果。或返回一个函数，接受余下的func 参数的函数，可以使用 func.length 强制需要累积的参数个数。
     */
    curry: any;
    /**
     * 这个方法类似 curry。 除了它接受参数的方式用 partialRight 代替了 partial。
     */
    curryRight: any;
    /**
     * 延迟 wait 毫秒后调用 func。 调用时，任何附加的参数会传给func。
     */
    delay: any;
    /**
     * 创建一个只能调用 func 一次的函数。 重复调用返回第一次调用的结果。 func 调用时， this 绑定到创建的函数，并传入对应参数。
     */
    once: any;
    /**
     * 创建一个函数，调用func时参数为相对应的transforms的返回值。
     */
    overArgs: any;
    /**
     * 创建一个函数，调用func时，this绑定到创建的新函数，把参数作为数组传入，类似于 Function#apply.
     */
    spread: any;
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
     * 获取url中的参数
     *
     * @param {String} name - 参数名
     * @param {String} [url=window.location.search] - 链接
     * @return {String} 参数值
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
    /**
    * 通过 key 获取 value
    * @param key 需要转换的值
    * @param map array | map
    */
    getValueByKey: (key: any, map: string[] | Map<any, any> | {
        key: any;
        value: any;
    }[]) => any;
    getKeyByValue: (value: any, map: Map<any, any>) => any;
    /**
     *
     * @param value 想复制的文案
     * @param cb 复制后回调
     * @returns
     */
    copy: (value: string | number, cb: any) => Promise<unknown>;
};
export default _default;
