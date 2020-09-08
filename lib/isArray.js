"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

var _type = _interopRequireDefault(require("./type.js"));

var _isEmpty = _interopRequireDefault(require("./isEmpty.js"));

var _isFunction = _interopRequireDefault(require("./isFunction.js"));

var _isWindow = _interopRequireDefault(require("./isWindow.js"));

var isArray = Array.isArray || function (value) {
  return (0, _getTypeRegex["default"])('array').test(_fnToStr["default"].call(value));
};

isArray.empty = function (value) {
  return isArray(value) && (0, _isEmpty["default"])(value);
};

isArray.like = function (value) {
  var length = !!value && value.length,
      type = (0, _type["default"])(value);

  if ((0, _isFunction["default"])(value) || (0, _isWindow["default"])(value)) {
    return false;
  }

  return type === "array" || length === 0 || (0, _type["default"])(length) === "number" && length > 0 && length - 1 in value;
};

var _default = isArray;
exports["default"] = _default;