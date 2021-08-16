"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _add = _interopRequireDefault(require("lodash/add"));

var _subtract = _interopRequireDefault(require("lodash/subtract"));

var _ceil = _interopRequireDefault(require("lodash/ceil"));

var _floor = _interopRequireDefault(require("lodash/floor"));

var _max = _interopRequireDefault(require("lodash/max"));

var _maxBy = _interopRequireDefault(require("lodash/maxBy"));

var _divide = _interopRequireDefault(require("lodash/divide"));

var _multiply = _interopRequireDefault(require("lodash/multiply"));

var _mean = _interopRequireDefault(require("lodash/mean"));

var _meanBy = _interopRequireDefault(require("lodash/meanBy"));

var _min = _interopRequireDefault(require("lodash/min"));

var _minBy = _interopRequireDefault(require("lodash/minBy"));

var _round = _interopRequireDefault(require("lodash/round"));

var _sum = _interopRequireDefault(require("lodash/sum"));

var _sumBy = _interopRequireDefault(require("lodash/sumBy"));

var _clamp = _interopRequireDefault(require("lodash/clamp"));

var _inRange = _interopRequireDefault(require("lodash/inRange"));

var _random = _interopRequireDefault(require("lodash/random"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  add: _add.default,
  subtract: _subtract.default,
  multiply: _multiply.default,
  divide: _divide.default,
  ceil: _ceil.default,
  floor: _floor.default,
  max: _max.default,
  maxBy: _maxBy.default,
  mean: _mean.default,
  meanBy: _meanBy.default,
  min: _min.default,
  minBy: _minBy.default,
  round: _round.default,
  sum: _sum.default,
  sumBy: _sumBy.default,
  clamp: _clamp.default,
  inRange: _inRange.default,
  random: _random.default // 返回随机数

};
exports.default = _default;