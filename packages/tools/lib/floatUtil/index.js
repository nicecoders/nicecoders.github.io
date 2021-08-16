"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _add = _interopRequireDefault(require("lodash/add"));

var _ceil = _interopRequireDefault(require("lodash/ceil"));

var _floor = _interopRequireDefault(require("lodash/floor"));

var _max = _interopRequireDefault(require("lodash/max"));

var _divide = _interopRequireDefault(require("lodash/divide"));

var _multiply = _interopRequireDefault(require("lodash/multiply"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  add: _add.default,
  multiply: _multiply.default,
  divide: _divide.default,
  ceil: _ceil.default,
  floor: _floor.default,
  max: _max.default // 计算最大值

};
exports.default = _default;