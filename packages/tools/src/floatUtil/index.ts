import add from 'lodash/add';
import subtract from 'lodash/subtract';
import ceil from 'lodash/ceil';
import floor from 'lodash/floor';
import max from  'lodash/max';
import maxBy from  'lodash/maxBy';
import divide from 'lodash/divide';
import multiply from 'lodash/multiply';
import mean from 'lodash/mean';
import meanBy from 'lodash/meanBy';
import min from 'lodash/min';
import minBy from 'lodash/minBy';
import round from 'lodash/round';
import sum from 'lodash/sum';
import sumBy from 'lodash/sumBy';
import clamp from 'lodash/clamp';
import inRange from 'lodash/inRange';
import random from 'lodash/random';

export default {
  add,            // 加法
  subtract,       // 减法
  multiply,       // 乘法
  divide,         // 除法
  ceil,           // 向上取舍
  floor,          // 向下取舍
  max,            // 计算最大值
  maxBy,           //  计算最大值，并可通过一个迭代函数计算
  mean,           //  计算平均值
  meanBy,         //  计算平均值, 可传入一个迭代器
  min,            // 最小值
  minBy,          //  计算最小值, 可传入一个迭代器
  round,          // 四舍五入
  sum,             // 总和
  sumBy,            //  返回总和，可传入一个迭代器
  clamp,            // 设置一个数字区间
  inRange,          // 判断是否在区间
  random            // 返回随机数
}

