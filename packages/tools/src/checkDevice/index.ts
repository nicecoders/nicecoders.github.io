/**
 * app交互
 *
 * isIos - 判断是否在IOS设备内
 * isAndroid - 判断是否在Android设备内
 * isWeChat - 判断是否在微信客户端内
 * isWxWorker - 判断是否在企业微信客户端内
 * isDingTalk - 判断是否在钉钉客户端内
 * isFeiShu - 判断是否在飞书客户端内
 * isAliPay - 判断是否在支付宝客户端内
 * isJRApp - 判断是否在京东金融客户端内
 * isThirdApp - 判断是否在第三方合作App内
 * isQQ - 判断是否在QQ客户端内
 * isPc - 判断是否在PC环境
 * isChrome - 判断是否在Chrome浏览器
 * inAlipayminiprogram - 判断是否在支付宝小程序内
 * getSceneType - 获取场景类型
 */
class App {
  /**
   * IOS环境判断
   *
   * @return {Boolean} true-是，false-否
   */
  isIos = () => /CPU.+Mac OS X/i.test(navigator.userAgent);

  /**
   * Android环境判断
   *
   * @return {Boolean} true-是，false-否
   */
  isAndroid = () => /Android|Adr/i.test(navigator.userAgent);

  /**
   * 判断是否在微信客户端内
   *
   * @return {Boolean} true-是，false-否
   */
  isWeChat = () => /MicroMessenger/i.test(navigator.userAgent);

  /**
   * 判断是否在企业微信客户端内
   *
   * @return {Boolean} true-是，false-否
   */
  isWxWorker = () => /wxwork/i.test(navigator.userAgent);

  /**
   * 判断是否在钉钉客户端内
   *
   * @return {Boolean} true-是，false-否
   */
  isDingTalk = () => /dingtalk/i.test(navigator.userAgent);

  /**
   * 判断是否在飞书客户端内
   *
   * @return {Boolean} true-是，false-否
   */
  isFeiShu = () => /lark/i.test(navigator.userAgent);

  /**
   * 判断是否在支付宝客户端内
   *
   * @return {Boolean} true-是，false-否
   */
  isAliPay = () => /AlipayClient/i.test(navigator.userAgent);

  /**
   * 判断是否在京东金融客户端内
   *
   * @return {Boolean} true-是，false-否
   */
  isJRApp = () => /jdjr|jdapp/i.test(navigator.userAgent);

  /**
   * 判断是否在第三方合作App内
   *
   * @return {Boolean} true-是，false-否
   */
  isThirdApp = () => /jimi-thirdapp-/i.test(navigator.userAgent);

  /**
   * 判断是否在QQ客户端内【非qq浏览器环境】
   *
   * @return {Boolean} true-是，false-否
   */
  isQQ = () => {
    const userAgent = navigator.userAgent;
    return /QQ/i.test(userAgent) && !/mqqbrowser/i.test(userAgent); // mqqbrowser-QQ浏览器环境
  };

  /**
   * 判断是否在PC环境
   *
   * @return {Boolean} true-是，false-否
   */
  isPc = () =>
    !/iPhone|iPad|iPod|Android|Mobile|SymbianOS|Windows Phone|BlackBerry|webOS/i.test(
      navigator.userAgent,
    );

  /**
   * 判断是否在支付宝小程序内
   * @returns {Boolean} true-是，false-否
   */
  isAlipayMiniProgram = () => {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.match(/alipayclient/i) && ua.match(/miniprogram/)) {
      return true;
    }
    return false;
  };

  // 判断是否是浏览器环境
  isBrowser = () => {
    return !!(
      typeof window !== 'undefined' &&
      window.document &&
      window.document.createElement
    );
  }

  // 判断是否是 chrome 浏览器
  isChrome = () =>{
    const winNav = this.isBrowser() && window.navigator;
    const vendorName = winNav && winNav?.vendor;
    const userAgent = winNav && winNav.userAgent;

    //@ts-ignore
    const isChromium = isBrowser && typeof chrome !== 'undefined';

    //@ts-ignore
    const isOpera = isBrowser && typeof opr !== 'undefined';
    const isIEedge = userAgent && userAgent.indexOf('Edge') > -1;

    const isIOSChrome = !!(userAgent && userAgent.match('CriOS'));
    const isDesktopChrome = isChromium && vendorName === 'Google Inc.' && !isOpera && !isIEedge;

    return isIOSChrome || isDesktopChrome;
  }

  /**
   * 获取场景类型
   *
   * alipayClient - 支付宝客户端
   * wxClient - 微信客户端
   * wxWorkClient - 企业微信客户端
   * dingTalkClient - 钉钉客户端
   * larkClient - 飞书客户端
   * jdIos - 京东iOS
   * jdAndroid - 京东安卓
   * jdjrIos - 京东金融iOS
   * jdjrAndroid - 京东金融安卓
   * wap - 手机浏览器
   * alipayMiniPrograms - 支付宝小程序
   *
   * @return {String} 场景类型
   */
  getSceneType = () => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (this.isAlipayMiniProgram()) {
      return 'alipayMiniPrograms';
    } else if (this.isAliPay()) {
      return 'alipayClient';
    } else if (this.isWeChat()) {
      return 'wxClient';
    } else if (this.isWxWorker()) {
      return 'wxWorkClient';
    } else if (this.isDingTalk()) {
      return 'dingTalkClient';
    } else if (this.isFeiShu()) {
      return 'larkClient';
    } else if (userAgent.includes('jdapp')) {
      return 'jdJr';
    } else if (userAgent.includes('jdjr')) {
      return 'jdJr';
    } else if (this.isChrome()) {
      return 'chrome'
    } else {
      return 'wap';
    }
  };
}

export default new App();
