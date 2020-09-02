"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

var _isEmpty = _interopRequireDefault(require("./isEmpty.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var protoOf = Object.getPrototypeOf;
var class2Type = {};
var ownProp = class2Type.hasOwnProperty;

var isObject = function isObject(value) {
  return (0, _getTypeRegex["default"])('object').test(_fnToStr["default"].call(value));
};

isObject.empty = function (value) {
  return isObject(value) && (0, _isEmpty["default"])(value);
};

isObject.plain = function (value) {
  var proto, Ctor;

  if (!value) {
    return false;
  }

  proto = protoOf(value);

  if (!proto) {
    return true;
  }

  Ctor = propertyOf(proto, "constructor");
  return typeof Ctor === "function" && ownProp.toString.call(Ctor) === ownProp.toString.call(Object);
};

var _default = isObject;
exports["default"] = _default;