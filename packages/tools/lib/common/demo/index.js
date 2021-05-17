"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _tools = require("@nicecode/tools");

var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", null, "\u751F\u6210UUID: ", _tools.common.generateUUID());
};

exports.default = _default;