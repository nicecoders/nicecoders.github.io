"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tools = require("@nicecode/tools");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Demo = function Demo() {
  return /*#__PURE__*/_react.default.createElement("div", null, "\u662F\u5426\u5728PC\u7AEF\uFF1A", String(_tools.checkDevice.isPc()));
};

var _default = Demo;
exports.default = _default;