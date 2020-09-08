"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

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

var _isBom = _interopRequireDefault(require("./lib/isBom.js"));

var _isDom = require("./lib/isDom.js");

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
      return (0, _isBom["default"])(value);
    },
    type: function type() {
      return (0, _type["default"])(value);
    },
    xml: function xml() {
      return (0, _isDom.xml)(value);
    },
    html: function html() {
      return (0, _isDom.html)(value);
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

  fns.window.screen = function () {
    return _isBom["default"].screen(value);
  };

  fns.window.location = function () {
    return _isBom["default"].location(value);
  };

  fns.window.navigator = function () {
    return _isBom["default"].navigator(value);
  };

  fns.window.history = function () {
    return _isBom["default"].history(value);
  };

  fns.window.document = function () {
    return _isBom["default"].document(value);
  };

  fns.xml.document = function () {
    return _isDom.xml.document(value);
  };

  ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'basefont', 'bdi', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'command', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'dir', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'font', 'footer', 'form', 'frame', 'frameset', 'heading', 'head', 'header', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noframes', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'td', 'textarea', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr'].map(function (m) {
    fns.html[m] = function () {
      return _isDom.html[m](value);
    };
  })[('h1', 'h2', 'h3', 'h4', 'h5', 'h6')].map(function (m) {
    fns.html.heading[m] = _isDom.html.heading[m](value);
  })[('button', 'checkbox', 'color', 'date', 'datetime', 'datetimeLocale', 'email', 'file', 'hidden', 'image', 'month', 'number', 'password', 'radio', 'range', 'reset', 'search', 'search', 'submit', 'tel', 'date')].map(function (m) {
    fns.html.input[m] = _isDom.html.input[m](value);
  });

  fns.html.table.section = function () {
    return _isDom.html.table.section(value);
  };

  ['thead', 'tbody', 'tfoot'].map(function (m) {
    fns.html.table.section[m] = _isDom.html.table.section[m](value);
  });
  ['head', 'cell'].map(function (m) {
    fns.html.td[m] = _isDom.html.td[m](value);
  });

  fns.html.document = function () {
    return _isDom.html.document(value);
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
  widnow: _isBom["default"],
  type: _type["default"],
  html: _isDom.html,
  xml: _isDom.xml
});
module.exports = is;