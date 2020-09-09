"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * 获取给定参数的类型的字筗串表示
 *
 * @param                             {value}
 * @return                            {string}
 * @author      poe.ch
 * @DateTime    2020-08-29T06:19:18+0800
 * @version     1.0.0
 */
var _default = function _default(value) {
  var matches = _fnToStr["default"].call(value).match(/^\[\s*object\s*(\w+)\s*\]$/);

  if (!matches) {
    return null;
  }

  return matches[1].toLowerCase();
};

exports["default"] = _default;