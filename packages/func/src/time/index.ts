
//时间差计算

import dayjs from "dayjs";

/*
 * startDate==>开始时间
 * endDate==>结束时间
 * 事例：diffTime(data.createTime,new Date())
 *
 * */
export const formateDuration = (diff: number) => {
  //计算出相差天数
  var days = Math.floor(diff / (24 * 3600 * 1000));

  //计算出小时数
  var leave1 = diff % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
  var hours = Math.floor(leave1 / (3600 * 1000));
  //计算相差分钟数
  var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
  var minutes = Math.floor(leave2 / (60 * 1000));

  //计算相差秒数
  var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
  var seconds = Math.round(leave3 / 1000);

  var returnStr = seconds + '秒';

  if (minutes > 0) {
    returnStr = minutes + '分'; //+ returnStr;
  }

  if (hours > 0) {
    returnStr = hours + '小时'; // + returnStr;
  }

  if (days > 0) {
    returnStr = days + '天'; //+ returnStr;
  }

  return returnStr;
}

//检索默认时间
export function generateTime() {
  let endDateTime = dayjs().endOf('day').unix();
  let startDateTime = dayjs().startOf('day').unix();
  return { startDateTime, endDateTime };
}

/**
 * 格式化时间为 00:00
 * @param seconds 时间，单位秒
 * @returns
 */
export function formatDurationTime(seconds: number) {
  var minutes = Math.floor(seconds / 60) || 0;
  var remainingSeconds = Math.floor(seconds % 60);
  return (minutes < 10 ? `0${minutes}` : minutes) + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
}
