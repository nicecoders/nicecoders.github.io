function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 * inAlipayminiprogram - 判断是否在支付宝小程序内
 * getSceneType - 获取场景类型
 */
var App = function App() {
  var _this = this;

  _classCallCheck(this, App);

  this.isIos = function () {
    return /CPU.+Mac OS X/i.test(navigator.userAgent);
  };

  this.isAndroid = function () {
    return /Android|Adr/i.test(navigator.userAgent);
  };

  this.isWeChat = function () {
    return /MicroMessenger/i.test(navigator.userAgent);
  };

  this.isWxWorker = function () {
    return /wxwork/i.test(navigator.userAgent);
  };

  this.isDingTalk = function () {
    return /dingtalk/i.test(navigator.userAgent);
  };

  this.isFeiShu = function () {
    return /lark/i.test(navigator.userAgent);
  };

  this.isAliPay = function () {
    return /AlipayClient/i.test(navigator.userAgent);
  };

  this.isJRApp = function () {
    return /jdjr|jdapp/i.test(navigator.userAgent);
  };

  this.isThirdApp = function () {
    return /jimi-thirdapp-/i.test(navigator.userAgent);
  };

  this.isQQ = function () {
    var userAgent = navigator.userAgent;
    return /QQ/i.test(userAgent) && !/mqqbrowser/i.test(userAgent); // mqqbrowser-QQ浏览器环境
  };

  this.isPc = function () {
    return !/iPhone|iPad|iPod|Android|Mobile|SymbianOS|Windows Phone|BlackBerry|webOS/i.test(navigator.userAgent);
  };

  this.inAlipayminiprogram = function () {
    var ua = navigator.userAgent.toLowerCase();

    if (ua.match(/alipayclient/i) && ua.match(/miniprogram/)) {
      return true;
    }

    return false;
  };

  this.getSceneType = function () {
    var userAgent = navigator.userAgent.toLowerCase();

    if (_this.inAlipayminiprogram()) {
      return 'alipayMiniPrograms';
    }

    if (_this.isAliPay()) {
      return 'alipayClient';
    }

    if (_this.isWeChat()) {
      return 'wxClient';
    }

    if (_this.isWxWorker()) {
      return 'wxWorkClient';
    }

    if (_this.isDingTalk()) {
      return 'dingTalkClient';
    }

    if (_this.isFeiShu()) {
      return 'larkClient';
    }

    if (userAgent.includes('jdapp')) {
      return 'jdJr';
    }

    if (userAgent.includes('jdjr')) {
      return 'jdJr';
    }

    return 'wap';
  };
};

export default new App();