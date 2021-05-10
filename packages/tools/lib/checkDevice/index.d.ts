/**
 * app交互
 *
 * isIos - 判断是否在IOS设备内
 * isAndroid - 判断是否在Android设备内
 * isWeChat - 判断是否在微信客户端内
 * isAliPay - 判断是否在支付宝客户端内
 * isJRApp - 判断是否在京东金融客户端内
 * isThirdApp - 判断是否在第三方合作App内
 * isQQ - 判断是否在QQ客户端内
 * isPc - 判断是否在PC环境
 * inAlipayminiprogram - 判断是否在支付宝小程序内
 * getSceneType - 获取场景类型
 */
declare class App {
    /**
     * IOS环境判断
     *
     * @return {Boolean} true-是，false-否
     */
    isIos: () => boolean;
    /**
     * Android环境判断
     *
     * @return {Boolean} true-是，false-否
     */
    isAndroid: () => boolean;
    /**
     * 判断是否在微信客户端内
     *
     * @return {Boolean} true-是，false-否
     */
    isWeChat: () => boolean;
    /**
     * 判断是否在支付宝客户端内
     *
     * @return {Boolean} true-是，false-否
     */
    isAliPay: () => boolean;
    /**
     * 判断是否在京东金融客户端内
     *
     * @return {Boolean} true-是，false-否
     */
    isJRApp: () => boolean;
    /**
     * 判断是否在第三方合作App内
     *
     * @return {Boolean} true-是，false-否
     */
    isThirdApp: () => boolean;
    /**
     * 判断是否在QQ客户端内【非qq浏览器环境】
     *
     * @return {Boolean} true-是，false-否
     */
    isQQ: () => boolean;
    /**
     * 判断是否在PC环境
     *
     * @return {Boolean} true-是，false-否
     */
    isPc: () => boolean;
    /**
     * 判断是否在支付宝小程序内
     * @returns {Boolean} true-是，false-否
     */
    inAlipayminiprogram: () => boolean;
    /**
     * 获取场景类型
     *
     * alipayClient - 支付宝客户端
     * wxClient - 微信客户端
     * jdIos - 京东iOS
     * jdAndroid - 京东安卓
     * jdjrIos - 京东金融iOS
     * jdjrAndroid - 京东金融安卓
     * wap - 手机浏览器
     * alipayMiniPrograms - 支付宝小程序
     *
     * @return {String} 场景类型
     */
    getSceneType: () => "alipayMiniPrograms" | "alipayClient" | "wxClient" | "jdJr" | "wap";
}
declare const _default: App;
export default _default;
