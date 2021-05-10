import _includesInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/includes";
import _classCallCheck from "@babel/runtime-corejs3/helpers/classCallCheck";

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
var App = function App() {
  var _this = this;

  _classCallCheck(this, App);

  /**
   * IOS环境判断
   *
   * @return {Boolean} true-是，false-否
   */
  this.isIos = function () {
    return /CPU.+Mac OS X/i.test(navigator.userAgent);
  };
  /**
   * Android环境判断
   *
   * @return {Boolean} true-是，false-否
   */


  this.isAndroid = function () {
    return /Android|Adr/i.test(navigator.userAgent);
  };
  /**
   * 判断是否在微信客户端内
   *
   * @return {Boolean} true-是，false-否
   */


  this.isWeChat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  };
  /**
   * 判断是否在支付宝客户端内
   *
   * @return {Boolean} true-是，false-否
   */


  this.isAliPay = function () {
    return /AlipayClient/i.test(navigator.userAgent);
  };
  /**
   * 判断是否在京东金融客户端内
   *
   * @return {Boolean} true-是，false-否
   */


  this.isJRApp = function () {
    return /jdjr|jdapp/i.test(navigator.userAgent);
  };
  /**
   * 判断是否在第三方合作App内
   *
   * @return {Boolean} true-是，false-否
   */


  this.isThirdApp = function () {
    return /jimi-thirdapp-/i.test(navigator.userAgent);
  };
  /**
   * 判断是否在QQ客户端内【非qq浏览器环境】
   *
   * @return {Boolean} true-是，false-否
   */


  this.isQQ = function () {
    var userAgent = navigator.userAgent;
    return /QQ/i.test(userAgent) && !/mqqbrowser/i.test(userAgent); // mqqbrowser-QQ浏览器环境
  };
  /**
   * 判断是否在PC环境
   *
   * @return {Boolean} true-是，false-否
   */


  this.isPc = function () {
    return !/iPhone|iPad|iPod|Android|Mobile|SymbianOS|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent);
  };
  /**
   * 判断是否在支付宝小程序内
   * @returns {Boolean} true-是，false-否
   */


  this.inAlipayminiprogram = function () {
    var ua = navigator.userAgent.toLowerCase();

    if (ua.match(/alipayclient/i) && ua.match(/miniprogram/)) {
      return true;
    }

    return false;
  };
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


  this.getSceneType = function () {
    var _context, _context2;

    if (_this.inAlipayminiprogram()) {
      return 'alipayMiniPrograms';
    }

    if (_this.isAliPay()) {
      return 'alipayClient';
    }

    if (_this.isWeChat()) {
      return 'wxClient';
    }

    if (_includesInstanceProperty(_context = navigator.userAgent.toLowerCase()).call(_context, 'jdapp')) {
      return 'jdJr';
    }

    if (_includesInstanceProperty(_context2 = navigator.userAgent.toLowerCase()).call(_context2, 'jdjr')) {
      return 'jdJr';
    }

    return 'wap';
  };
};

export default new App();