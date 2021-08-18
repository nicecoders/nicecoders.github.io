import countBy from 'lodash/countBy';
import sortBy from 'lodash/sortBy';
import sample from 'lodash/sample';
import sampleSize from 'lodash/sampleSize';
import shuffle from 'lodash/shuffle';
import size from 'lodash/size';
import partition from 'lodash/partition';
import orderBy from 'lodash/orderBy';
import map from 'lodash/map';
export default {
  /**
   * 通过条件计算函数
   */
  countBy: countBy,

  /**
   * 通过条件排序
   */
  sortBy: sortBy,

  /**
   * 通过条件升降序
   */
  orderBy: orderBy,

  /**
   * 从集合中随机获得一个值
   */
  sample: sample,

  /**
   * 从collection（集合）中获得 n 个随机元素。
   */
  sampleSize: sampleSize,

  /**
   * 打乱集合
   */
  shuffle: shuffle,

  /**
   * 返回集合的长度
   */
  size: size,

  /**
   * 返回两个真假值得数组
   */
  partition: partition,

  /**
   * 遍历集合中的每个元素后返回的结果
   */
  map: map
};