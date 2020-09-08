"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

var isString = function isString(value) {
  return (0, _getTypeRegex["default"])('string').test(_fnToStr["default"].call(value));
};

isString.empty = function (value) {
  return (0, _getTypeRegex["default"])('string').test(_fnToStr["default"].call(value)) && value.length <= 0;
};

var _default = isString;
exports["default"] = _default;