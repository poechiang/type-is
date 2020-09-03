"use strict";

var _extend = _interopRequireDefault(require("extend"));

var _type = _interopRequireDefault(require("./lib/type.js"));

var _isArgs = _interopRequireDefault(require("./lib/isArgs.js"));

var _isArray = _interopRequireDefault(require("./lib/isArray.js"));

var _isBool = _interopRequireDefault(require("./lib/isBool.js"));

var _isDate = _interopRequireDefault(require("./lib/isDate.js"));

var _isEmpty = _interopRequireDefault(require("./lib/isEmpty.js"));

var _isError = _interopRequireDefault(require("./lib/isError.js"));

var _isFunction = _interopRequireDefault(require("./lib/isFunction.js"));

var _isObject = _interopRequireDefault(require("./lib/isObject.js"));

var _isNull = _interopRequireDefault(require("./lib/isNull.js"));

var _isNumber = _interopRequireDefault(require("./lib/isNumber.js"));

var _isPromise = _interopRequireDefault(require("./lib/isPromise.js"));

var _isRegExp = _interopRequireDefault(require("./lib/isRegExp.js"));

var _isString = _interopRequireDefault(require("./lib/isString.js"));

var _isSymbol = _interopRequireDefault(require("./lib/isSymbol.js"));

var _isUndefined = _interopRequireDefault(require("./lib/isUndefined.js"));

var _isWindow = _interopRequireDefault(require("./lib/isWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var is = function is(value) {
  var fns = {
    args: function args() {
      return (0, _isArgs["default"])(value);
    },
    array: function array() {
      return (0, _isArray["default"])(value);
    },
    bool: function bool() {
      return (0, _isBool["default"])(value);
    },
    date: function date() {
      return (0, _isDate["default"])(value);
    },
    empty: function empty() {
      return (0, _isEmpty["default"])(value);
    },
    error: function error() {
      return (0, _isError["default"])(value);
    },
    "function": function _function() {
      return (0, _isFunction["default"])(value);
    },
    object: function object() {
      return (0, _isObject["default"])(value);
    },
    promise: function promise() {
      return (0, _isPromise["default"])(value);
    },
    "null": function _null() {
      return (0, _isNull["default"])(value);
    },
    number: function number() {
      return (0, _isNumber["default"])(value);
    },
    regexp: function regexp() {
      return (0, _isRegExp["default"])(value);
    },
    symbol: function symbol() {
      return (0, _isSymbol["default"])(value);
    },
    string: function string() {
      return (0, _isString["default"])(value);
    },
    undefined: function undefined() {
      return (0, _isUndefined["default"])(value);
    },
    window: function window() {
      return (0, _isWindow["default"])(value);
    },
    type: function type() {
      return (0, _type["default"])(value);
    }
  };

  fns.args.empty = function () {
    return _isArgs["default"].empty(value);
  };

  fns.array.empty = function () {
    return _isArray["default"].empty(value);
  };

  fns.array.like = function () {
    return _isArray["default"].like(value);
  };

  fns.number["float"] = function () {
    return _isNumber["default"]["float"](value);
  };

  fns.number.infinity = function () {
    return _isNumber["default"].infinity(value);
  };

  fns.number["int"] = function () {
    return _isNumber["default"]["int"](value);
  };

  fns.number.even = function () {
    return _isNumber["default"].even(value);
  };

  fns.number.odd = function () {
    return _isNumber["default"].odd(value);
  };

  fns.number.nan = function () {
    return _isNumber["default"].nan(value);
  };

  fns.object.empty = function () {
    return _isObject["default"].empty(value);
  };

  fns.object.plain = function () {
    return _isObject["default"].plain(value);
  };

  fns.string.empty = function () {
    return _isString["default"].empty(value);
  };

  return fns;
};

(0, _extend["default"])(true, is, {
  args: _isArgs["default"],
  array: _isArray["default"],
  bool: _isBool["default"],
  date: _isDate["default"],
  empty: _isEmpty["default"],
  error: _isError["default"],
  "function": _isFunction["default"],
  object: _isObject["default"],
  promise: _isPromise["default"],
  "null": _isNull["default"],
  number: _isNumber["default"],
  regexp: _isRegExp["default"],
  symbol: _isSymbol["default"],
  string: _isString["default"],
  undefined: _isUndefined["default"],
  widnow: _isWindow["default"],
  type: _type["default"]
});
module.exports = is;