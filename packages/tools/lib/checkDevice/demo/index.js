"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tools = require("@nicecode/tools");

var Demo = function Demo() {
  return /*#__PURE__*/_react.default.createElement("div", null, "\u662F\u5426\u5728PC\u7AEF\uFF1A", String(_tools.checkDevice.isPc()));
};

var _default = Demo;
exports.default = _default;