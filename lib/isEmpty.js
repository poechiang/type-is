"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _type = _interopRequireDefault(require("./type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(value) {
  var type = (0, _type["default"])(value);

  if (type === 'array' || type === 'string' || type === 'arguments') {
    return value.length <= 0;
  } else if (type === 'object') {
    return Object.entries(value).length <= 0;
  }

  return !value;
};

exports["default"] = _default;