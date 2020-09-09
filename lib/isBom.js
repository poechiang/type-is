"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNavigator = exports.isHistory = exports.isLocation = exports.isScreen = void 0;

var _isDom = require("./isDom");

var _fnToStr = _interopRequireDefault(require("../core/fnToStr"));

var _getTypeRegex = _interopRequireDefault(require("../core/getTypeRegex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isXMLDocument = function isXMLDocument(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0, _isDom.isDocument)(dom, "XML".concat(type));
};

var isHTMLDocument = function isHTMLDocument(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0, _isDom.isDocument)(dom, "HTML".concat(type));
};

var isWindow = function isWindow(value) {
  return value !== null && value === value.window;
};

var isScreen = function isScreen(value) {
  return (0, _getTypeRegex["default"])('screen').test(_fnToStr["default"].call(value));
};

exports.isScreen = isScreen;

var isLocation = function isLocation(value) {
  return (0, _getTypeRegex["default"])('location').test(_fnToStr["default"].call(value));
};

exports.isLocation = isLocation;

var isHistory = function isHistory(value) {
  return (0, _getTypeRegex["default"])('history').test(_fnToStr["default"].call(value));
};

exports.isHistory = isHistory;

var isNavigator = function isNavigator(value) {
  return (0, _getTypeRegex["default"])('navigator').test(_fnToStr["default"].call(value));
};

exports.isNavigator = isNavigator;
isWindow.screen = isScreen;
isWindow.location = isLocation;
isWindow.history = isHistory;
isWindow.navigator = isNavigator;
isWindow.htmlDocument = isHTMLDocument;
isWindow.xmlDocument = isXMLDocument;
var _default = isWindow;
exports["default"] = _default;