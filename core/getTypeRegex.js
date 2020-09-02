"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(type) {
  return new RegExp("^\\[\\s*object\\s+".concat(type, "\\s*\\]$"), 'i');
};

exports["default"] = _default;