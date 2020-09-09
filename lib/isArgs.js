"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex"));

var _isEmpty = _interopRequireDefault(require("./isEmpty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isArgs = function isArgs(value) {
  return (0, _getTypeRegex["default"])('arguments').test(_fnToStr["default"].call(value));
};

isArgs.empty = function (value) {
  return isArgs(value) && (0, _isEmpty["default"])(value);
};

var _default = isArgs;
exports["default"] = _default;