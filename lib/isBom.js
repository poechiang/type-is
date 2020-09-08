"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isNavigator = exports.isHistory = exports.isLocation = exports.isScreen = void 0;

var _isDom = require("../isDom.js");

/**
 * 	Object
 * 		EventTarget
 * 			Node
 * 				Docment
 * 					HTMLDocument
 * 				Element
 * 					HTMLELEMENT
 */
if (window == null) {
  window = jsdom().createWindow(); // assume window is a jsdom instance...
  // jsdom includes an incomplete version of XMLHttpRequest

  window.XMLHttpRequest = XMLHttpRequest; // trick jQuery into thinking CORS is supported (should be in node-XMLHttpRequest)

  window.XMLHttpRequest.prototype.withCredentials = false;

  if (window.location == null) {
    window.location = location;
  }

  if (window.navigator == null) {
    window.navigator = navigator;
  }
}

var isXMLDocument = function isXMLDocument(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0, _isDom.isDocument)(dom, "XML".concat(type));
};

var isHTMLDocument = function isHTMLDocument(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return (0, _isDom.isDocument)(dom, "HTML".concat(type));
};

var isWindow = function isWindow(value) {
  return !isNull(value) && obj === obj.window;
};

var isScreen = function isScreen(value) {
  return getTypeRegex('screen').test(fnToStr.call(value));
};

exports.isScreen = isScreen;

var isLocation = function isLocation(value) {
  return getTypeRegex('location').test(fnToStr.call(value));
};

exports.isLocation = isLocation;

var isHistory = function isHistory(value) {
  return getTypeRegex('history').test(fnToStr.call(value));
};

exports.isHistory = isHistory;

var isNavigator = function isNavigator(value) {
  return getTypeRegex('navigator').test(fnToStr.call(value));
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