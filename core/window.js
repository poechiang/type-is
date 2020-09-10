"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsdom = require("jsdom");

var win = new _jsdom.JSDOM().window;

var _default = typeof window !== 'undefined' ? window : win;

exports["default"] = _default;