"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

var _default = function _default(value) {
  return (0, _getTypeRegex["default"])('promise').test(_fnToStr["default"].call(value));
};

exports["default"] = _default;