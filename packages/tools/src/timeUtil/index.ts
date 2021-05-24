/**
 * 日期时间操作
 *
 * parseTime - 日期时间格式化
 */
class timeUtil {
  /**
   * 日期时间格式化
   *
   * @param {any} time - 日期时间
   * @param {String} format - 默认格式化：{y}-{m}-{d} {h}:{i}:{s} 带星期格式化：{y}-{m}-{d} {h}:{i}:{s} 星期{a}
   * @return {String} 格式化后的数据
   * @example
   *
   * parseTime('20');
   * // => true
   *
   * parseTime('.2');
   * // => false
   */
  parseTime = (time: any, format: '{y}-{m}-{d} {h}:{i}:{s}') => {
    if (!time) {
      return null;
    }
    format = format || '{y}-{m}-{d} {h}:{i}:{s}'
    let date;
    if (typeof time === 'object') {
      date = time;
    } else {
      if (('' + time).length === 10) time = parseInt(time) * 1000;
      date = new Date(time);
    }
    const formatObj = {
      y: date.getFullYear(),
      m: date.getMonth() + 1,
      d: date.getDate(),
      h: date.getHours(),
      i: date.getMinutes(),
      s: date.getSeconds(),
      a: date.getDay(),
    };
    const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
      let value = formatObj[key];
      if (key === 'a')
        return ['一', '二', '三', '四', '五', '六', '日'][value - 1];
      if (result.length > 0 && value < 10) {
        value = '0' + value;
      }
      return value || 0;
    });
    return time_str;
  };
}

export default new timeUtil();
