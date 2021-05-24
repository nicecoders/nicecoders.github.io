"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tools = require("@nicecode/tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", null, "\u751F\u6210UUID: ", _tools.common.generateUUID());
};

exports.default = _default;