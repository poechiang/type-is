"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _isNull = _interopRequireDefault(require("./isNull"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(value) {
  return !(0, _isNull["default"])(value) && value === value.window;
};

exports["default"] = _default;