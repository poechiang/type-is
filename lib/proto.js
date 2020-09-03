"use strict";

var _extend = _interopRequireDefault(require("extend"));

var _fnToStr = _interopRequireDefault(require("../core/fnToStr.js"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex.js"));

var _type = _interopRequireDefault(require("./type.js"));

var _isArgs = _interopRequireDefault(require("./isArgs.js"));

var _isArray = _interopRequireDefault(require("./isArray.js"));

var _isBool = _interopRequireDefault(require("./isBool.js"));

var _isDate = _interopRequireDefault(require("./isDate.js"));

var _isEmpty = _interopRequireDefault(require("./isEmpty.js"));

var _isError = _interopRequireDefault(require("./isError.js"));

var _isFunction = _interopRequireDefault(require("./isFunction.js"));

var _isObject = _interopRequireDefault(require("./isObject.js"));

var _isNumber = _interopRequireDefault(require("./isNumber.js"));

var _isPromise = _interopRequireDefault(require("./isPromise.js"));

var _isRegExp = _interopRequireDefault(require("./isRegExp.js"));

var _isString = _interopRequireDefault(require("./isString.js"));

var _isSymbol = _interopRequireDefault(require("./isSymbol.js"));

var _isWindow = _interopRequireDefault(require("./isWindow.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var extendObj = function extendObj() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  var deep = objects[0],
      list = objects.slice(1);

  if (_typeof(deep) === 'object') {
    return _extend["default"].apply(void 0, [this, deep].concat(_toConsumableArray(list)));
  } else {
    return _extend["default"].apply(void 0, [deep, this].concat(_toConsumableArray(list)));
  }
};

if (!Object.prototype.extend) {
  Object.defineProperty(Object.prototype, 'extend', {
    value: extendObj
  });
}

if (!Object.extend) {
  Object.defineProperty(Object, 'extend', {
    value: extendObj
  });
}

if (!Object.type) {
  Object.defineProperty(Object, 'type', {
    value: function value() {
      return (0, _type["default"])(this);
    }
  });
}

if (!Object.prototype.is) {
  Object.defineProperty(Object.prototype, 'is', {
    value: function value(type) {
      return (0, _getTypeRegex["default"])(type).test(_fnToStr["default"].call(this));
    }
  });
  Object.defineProperty(Object.prototype, 'isArgs', {
    value: function value() {
      return (0, _isArgs["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isDate', {
    value: function value() {
      return (0, _isDate["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyArgs', {
    value: function value() {
      return _isArgs["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isArray', {
    value: function value() {
      return (0, _isArray["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyArray', {
    value: function value() {
      return _isArray["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'likeArray', {
    value: function value() {
      return _isArray["default"].like(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isBool', {
    value: function value() {
      return (0, _isBool["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmpty', {
    value: function value() {
      return (0, _isEmpty["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isError', {
    value: function value() {
      return (0, _isError["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isFunction', {
    value: function value() {
      return (0, _isFunction["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isObject', {
    value: function value() {
      return (0, _isObject["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyObject', {
    value: function value() {
      return _isObject["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isPromise', {
    value: function value() {
      return (0, _isPromise["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isPlainObject', {
    value: function value() {
      return _isObject["default"].plain(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isNumber', {
    value: function value() {
      return (0, _isNumber["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isFloatNumber', {
    value: function value() {
      return _isNumber["default"]["float"](this);
    }
  });
  Object.defineProperty(Object.prototype, 'isIntNumber', {
    value: function value() {
      return _isNumber["default"]["int"](this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEvenIntNumber', {
    value: function value() {
      return _isNumber["default"].even(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isOddIntNumber', {
    value: function value() {
      return _isNumber["default"].odd(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isRegExp', {
    value: function value() {
      return (0, _isRegExp["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isSymbol', {
    value: function value() {
      return (0, _isSymbol["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isString', {
    value: function value() {
      return (0, _isString["default"])(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyString', {
    value: function value() {
      return _isString["default"].empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isWindow', {
    value: function value() {
      return (0, _isWindow["default"])(this);
    }
  });
}