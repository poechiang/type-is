"use strict";

var _extend = _interopRequireDefault(require("extend"));

var _type = _interopRequireDefault(require("./type.js"));

var _is = require("./is.js");

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
    enumerable: false,
    configerable: false,
    writable: false,
    value: extendObj
  });
}

if (!Object.extend) {
  Object.defineProperty(Object, 'extend', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: extendObj
  });
}

if (!Object.type) {
  Object.defineProperty(Object, 'type', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _type["default"])(this);
    }
  });
}

if (!Object.prototype.is) {
  Object.defineProperty(Object.prototype, 'is', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value(type) {
      return getTypeRegex(type).test(fnToStr.call(this));
    }
  });
  Object.defineProperty(Object.prototype, 'isArgs', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isArgs)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyArgs', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isArgs.empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isArray', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isArray)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyArray', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isArray.empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'likeArray', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isArray.like(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isBool', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isBool)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmpty', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isEmpty)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isError', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isError)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isFunction', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isFunction)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isObject', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isObject)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyObject', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isObject.empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isPromise', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isPromise)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isPlainObject', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isObject.plain(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isNumber', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isNumber)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isFloatNumber', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isNumber["float"](this);
    }
  });
  Object.defineProperty(Object.prototype, 'isInfiniteNumber', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isNumber.infinite(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isIntNumber', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isNumber["int"](this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEvenIntNumber', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isNumber.even(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isOddIntNumber', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isNumber.odd(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isNaN', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return isNaN(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isRegExp', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isRegExp)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isSymbol', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isSymbol)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isString', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isString)(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isEmptyString', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return _is.isString.empty(this);
    }
  });
  Object.defineProperty(Object.prototype, 'isWindow', {
    enumerable: false,
    configerable: false,
    writable: false,
    value: function value() {
      return (0, _is.isWindow)(this);
    }
  });
}