"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isNumber = function isNumber(value) {
  return (0, _getTypeRegex["default"])('number').test(_fnToStr["default"].call(value));
};

isNumber["float"] = function (value) {
  if (!isNumber(value)) {
    return false;
  }

  if (isNumber.infinity(value)) {
    return true;
  }

  return value !== 0 && ~~value !== value;
};

isNumber.infinity = function (value) {
  return value === Infinity || value === -Infinity;
};

isNumber["int"] = function (value) {
  return isNumber(value) && !isNumber.nan(value) && (isNumber.infinity(value) || value % 1 === 0);
};

isNumber.even = function (value) {
  return isNumber.infinity(value) || isNumber["int"](value) && !isNumber.nan(value) && value % 2 === 0;
};

isNumber.odd = function (value) {
  return isNumber.infinity(value) || isNumber["int"](value) && !isNumber.nan(value) && value % 2 !== 0;
};

isNumber.nan = isNaN;
var _default = isNumber;
exports["default"] = _default;