"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isWindow = exports.isUndefined = exports.isString = exports.isSymbol = exports.isRegExp = exports.isNumber = exports.isNull = exports.isObject = exports.isPromise = exports.isFunction = exports.isError = exports.isEmpty = exports.isDate = exports.isBool = exports.isArray = exports.isArgs = void 0;

var _extend = _interopRequireDefault(require("extend"));

var _type = _interopRequireDefault(require("./type.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var protoObj = Object.prototype,
    protoOf = Object.getPrototypeOf;
var fnToStr = protoObj.toString;
var class2Type = {};
var ownProp = class2Type.hasOwnProperty;
/**
 * 生成类型检测正则表达式
 *
 * @param                             {string}
 * @return                            {bool}
 * @author      poe.ch
 * @DateTime    2020-08-29T06:18:03+0800
 * @version     1.0.0
 */

var getTypeRegex = function getTypeRegex(type) {
  return new RegExp("^\\[\\s*object\\s+".concat(type, "\\s*\\]$"), 'i');
};

var propertyOf = function propertyOf(owner, prop) {
  return ownProp.call(owner, prop) && owner[prop];
};

var isArgs = function isArgs(value) {
  return getTypeRegex('arguments').test(fnToStr.call(value));
};

exports.isArgs = isArgs;

isArgs.empty = function (value) {
  return isArgs(value) && isEmpty(value);
};

var isArray = Array.isArray || function (value) {
  return getTypeRegex('array').test(fnToStr.call(value));
};

exports.isArray = isArray;

isArray.empty = function (value) {
  return isArray(value) && isEmpty(value);
};

isArray.like = function (value) {
  var length = !!value && value.length,
      type = (0, _type["default"])(value);

  if (isFunction(value) || isWindow(value)) {
    return false;
  }

  return type === "array" || length === 0 || (0, _type["default"])(length) === "number" && length > 0 && length - 1 in value;
};

var isBool = function isBool(value) {
  return getTypeRegex('boolean').test(fnToStr.call(value));
};

exports.isBool = isBool;

var isDate = function isDate(value) {
  return getTypeRegex('date').test(fnToStr.call(value));
};

exports.isDate = isDate;

var isEmpty = function isEmpty(value) {
  var type = (0, _type["default"])(value);

  if (type === 'array' || type === 'string' || type === 'arguments') {
    return value.length <= 0;
  } else if (type === 'object') {
    return Object.entries(value).length <= 0;
  }

  return !value;
};

exports.isEmpty = isEmpty;

var isError = function isError(value) {
  return getTypeRegex('error').test(fnToStr.call(value));
};

exports.isError = isError;

var isFunction = function isFunction(value) {
  return getTypeRegex('function').test(fnToStr.call(value));
};

exports.isFunction = isFunction;

var isObject = function isObject(value) {
  return getTypeRegex('object').test(fnToStr.call(value));
};

exports.isObject = isObject;

isObject.empty = function (value) {
  return isObject(value) && isEmpty(value);
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

var isNull = function isNull(value) {
  return getTypeRegex('null').test(fnToStr.call(value));
};

exports.isNull = isNull;

var isNumber = function isNumber(value) {
  return getTypeRegex('number').test(fnToStr.call(value));
};

exports.isNumber = isNumber;

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

var isPromise = function isPromise(value) {
  return getTypeRegex('promise').test(fnToStr.call(value));
};

exports.isPromise = isPromise;

var isRegExp = function isRegExp(value) {
  return getTypeRegex('regexp').test(fnToStr.call(value));
};

exports.isRegExp = isRegExp;

var isString = function isString(value) {
  return getTypeRegex('string').test(fnToStr.call(value));
};

exports.isString = isString;

isString.empty = function (value) {
  return getTypeRegex('string').test(fnToStr.call(value)) && value.length <= 0;
};

var isSymbol = function isSymbol(value) {
  return getTypeRegex('symbol').test(fnToStr.call(value));
};

exports.isSymbol = isSymbol;

var isUndefined = function isUndefined(value) {
  return getTypeRegex('undefined').test(fnToStr.call(value));
};

exports.isUndefined = isUndefined;

var isWindow = function isWindow(value) {
  return !isNull(value) && obj === obj.window;
};

exports.isWindow = isWindow;

var is = function is(value) {
  var fns = {
    args: function args() {
      return isArgs(value);
    },
    array: function array() {
      return isArray(value);
    },
    bool: function bool() {
      return isBool(value);
    },
    date: function date() {
      return isDate(value);
    },
    empty: function empty() {
      return isEmpty(value);
    },
    error: function error() {
      return isError(value);
    },
    "function": function _function() {
      return isFunction(value);
    },
    object: function object() {
      return isObject(value);
    },
    promise: function promise() {
      return isPromise(value);
    },
    "null": function _null() {
      return isNull(value);
    },
    number: function number() {
      return isNumber(value);
    },
    regexp: function regexp() {
      return isRegExp(value);
    },
    symbol: function symbol() {
      return isSymbol(value);
    },
    string: function string() {
      return isString(value);
    },
    undefined: function undefined() {
      return isUndefined(value);
    },
    window: function window() {
      return isWindow(value);
    },
    type: function type() {
      return (0, _type["default"])(value);
    }
  };

  fns.args.empty = function () {
    return isArgs.empty(value);
  };

  fns.array.empty = function () {
    return isArray.empty(value);
  };

  fns.array.like = function () {
    return isArray.like(value);
  };

  fns.number["float"] = function () {
    return isNumber["float"](value);
  };

  fns.number.infinity = function () {
    return isNumber.infinity(value);
  };

  fns.number["int"] = function () {
    return isNumber["int"](value);
  };

  fns.number.even = function () {
    return isNumber.even(value);
  };

  fns.number.odd = function () {
    return isNumber.odd(value);
  };

  fns.number.nan = function () {
    return isNumber.nan(value);
  };

  fns.object.empty = function () {
    return isObject.empty(value);
  };

  fns.object.plain = function () {
    return isObject.plain(value);
  };

  fns.string.empty = function () {
    return isString.empty(value);
  };

  return fns;
};

(0, _extend["default"])(true, is, {
  args: isArgs,
  array: isArray,
  bool: isBool,
  date: isDate,
  empty: isEmpty,
  error: isError,
  "function": isFunction,
  object: isObject,
  promise: isPromise,
  "null": isNull,
  number: isNumber,
  regexp: isRegExp,
  symbol: isSymbol,
  string: isString,
  undefined: isUndefined,
  widnow: isWindow,
  type: _type["default"]
});
var _default = is;
exports["default"] = _default;