"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isDocument = exports.xml = exports.html = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _jsdom = require("jsdom");

var _xmlhttprequest = require("xmlhttprequest");

var _location = _interopRequireDefault(require("location"));

var _navigator = _interopRequireDefault(require("navigator"));

var _HtmlNameTypeMap;

// import fnToStr from '../core/fnToStr.js';
// import getTypeRegex from '../core/getTypeRegex.js';
if (window == null) {
  window = (0, _jsdom.jsdom)().createWindow(); // assume window is a jsdom instance...
  // jsdom includes an incomplete version of XMLHttpRequest

  window.XMLHttpRequest = _xmlhttprequest.XMLHttpRequest; // trick jQuery into thinking CORS is supported (should be in node-XMLHttpRequest)

  window.XMLHttpRequest.prototype.withCredentials = false;

  if (window.location == null) {
    window.location = _location["default"];
  }

  if (window.navigator == null) {
    window.navigator = _navigator["default"];
  }
}

var document = document || window.document; // const typeOf = ( dom, type ) => getTypeRegex( type ).test( fnToStr.call( dom ) );
// const _instanceOf = ( dom, type ) => window && dom instanceOf window[ type ];

var getAttributeForDom = function getAttributeForDom(dom, attrName) {
  if (isHTMLElement(dom)) {
    return dom.getAttribute(attrName);
  }

  return null;
};

var isNode = function isNode(node) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Node';
  return window && dom instanceof window[type];
};

var isDocument = function isDocument(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isNode(dom, "".concat(type, "Document"));
};

exports.isDocument = isDocument;

var isElement = function isElement(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isNode(dom, "".concat(type, "Element"));
};

var isXMLElement = function isXMLElement(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isElement(dom, "XML".concat(type));
};

var isHTMLElement = function isHTMLElement(dom) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return isElement(dom, "HTML".concat(type));
};

var XmlNameTypeMap = {};

var _loop = function _loop() {
  var _Object$entries$_i = (0, _slicedToArray2["default"])(_Object$entries[_i], 2),
      tag = _Object$entries$_i[0],
      type = _Object$entries$_i[1];

  isXMLElement[tag] = function (dom) {
    return isXMLElement(dom, type);
  };
};

for (var _i = 0, _Object$entries = Object.entries(XmlNameTypeMap); _i < _Object$entries.length; _i++) {
  _loop();
}

var HtmlNameTypeMap = (_HtmlNameTypeMap = {
  a: 'Anchor',
  abbr: '',
  address: '',
  area: 'Area',
  article: '',
  aside: '',
  audio: 'Audio',
  b: '',
  base: 'Base',
  basefont: '',
  bdi: '',
  blockquote: '',
  body: 'Body',
  br: 'BR',
  button: 'Button',
  canvas: 'Canvas',
  caption: 'TableCaption',
  center: '',
  cite: '',
  code: '',
  col: 'TableCol',
  colgroup: '',
  command: '',
  datalist: 'DataList',
  dd: '',
  del: 'Mod',
  details: 'Details',
  dfn: '',
  dialog: 'Dialog',
  dir: 'Directory',
  div: 'Div',
  dl: 'DList',
  dt: '',
  em: '',
  embed: 'Embed',
  fieldset: 'fieldset',
  figcaption: '',
  figure: '',
  font: 'Font',
  footer: 'Footer',
  form: 'Form',
  frame: 'Frame',
  frameset: 'Frameset',
  heading: 'Heading',
  head: 'Head'
}, (0, _defineProperty2["default"])(_HtmlNameTypeMap, "heading", 'Heading'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "header", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "hr", 'HR'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "html", 'Html'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "i", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "iframe", 'IFrame'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "img", 'Image'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "input", 'Image'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "ins", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "kbd", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "keygen", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "label", 'Label'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "legend", 'Legend'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "li", 'LI'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "link", 'Link'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "main", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "map", 'Map'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "mark", 'Mark'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "marquee", 'Marquee'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "menu", 'Menu'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "menuitem", 'MenuItem'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "meta", 'Mata'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "meter", 'Meter'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "nav", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "noframes", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "noscript", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "object", 'Object'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "ol", 'OList'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "optgroup", 'OptGroup'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "option", 'Option'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "output", 'Oputput'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "p", 'Paragraph'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "param", 'Param'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "picture", 'Picture'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "pre", 'Pre'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "progress", 'Progress'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "q", 'Quote'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "rp", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "rt", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "ruby", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "samp", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "script", 'Script'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "section", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "select", 'Select'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "small", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "source", 'Source'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "span", 'Span'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "strike", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "strong", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "style", 'Style'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "sub", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "summary", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "sup", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "table", 'Table'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "tcell", 'TableCell'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "textarea", 'TextArea'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "time", 'Time'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "title", 'Title'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "tr", 'TableRow'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "track", 'Track'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "tt", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "u", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "ul", 'UList'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "var", ''), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "video", 'Video'), (0, _defineProperty2["default"])(_HtmlNameTypeMap, "wbr", ''), _HtmlNameTypeMap);

var _loop2 = function _loop2() {
  var _Object$entries2$_i = (0, _slicedToArray2["default"])(_Object$entries2[_i2], 2),
      tag = _Object$entries2$_i[0],
      type = _Object$entries2$_i[1];

  isHTMLElement[tag] = function (dom) {
    return type ? isHTMLElement(dom, type) : dom.tagName && dom.tagName.toLowerCase() === dom.toLowerCase();
  };
};

for (var _i2 = 0, _Object$entries2 = Object.entries(HtmlNameTypeMap); _i2 < _Object$entries2.length; _i2++) {
  _loop2();
}

isHTMLElement.button = function (dom) {
  return isHTMLElement(dom, 'Button') || isHTMLElement.input.button(dom);
};

isHTMLElement.heading.h1 = function (dom) {
  return isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h1';
};

isHTMLElement.heading.h2 = function (dom) {
  return isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h2';
};

isHTMLElement.heading.h3 = function (dom) {
  return isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h3';
};

isHTMLElement.heading.h4 = function (dom) {
  return isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h4';
};

isHTMLElement.heading.h5 = function (dom) {
  return isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h5';
};

isHTMLElement.heading.h6 = function (dom) {
  return isHTMLElement(dom, 'Heading') && dom.tagName && dom.tagName.toLowerCase() === 'h6';
};

isHTMLElement.input.button = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'button';
};

isHTMLElement.input.checkbox = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'checkbox';
};

isHTMLElement.input.color = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'color';
};

isHTMLElement.input.date = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'date';
};

isHTMLElement.input.datetime = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'datetime';
};

isHTMLElement.input.datetimeLocale = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'datetime-locale';
};

isHTMLElement.input.email = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'email';
};

isHTMLElement.input.file = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'file';
};

isHTMLElement.input.hidden = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'hidden';
};

isHTMLElement.input.image = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'image';
};

isHTMLElement.input.month = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'month';
};

isHTMLElement.input.number = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'number';
};

isHTMLElement.input.password = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'password';
};

isHTMLElement.input.radio = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'radio';
};

isHTMLElement.input.range = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'range';
};

isHTMLElement.input.reset = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'reset';
};

isHTMLElement.input.search = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'search';
};

isHTMLElement.input.submit = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'submit';
};

isHTMLElement.input.tel = function (dom) {
  return isHTMLElement(dom, 'Input') && getAttributeForDom(dom, 'type') === 'tel';
};

isHTMLElement.table.section = function (dom) {
  return isHTMLElement(dom, 'TableSection');
};

isHTMLElement.table.section.thead = function (dom) {
  return isHTMLElement(dom, 'TableSection') && dom.tagName.toLowerCase() === 'thead';
};

isHTMLElement.table.section.tbody = function (dom) {
  return isHTMLElement(dom, 'TableSection') && dom.tagName.toLowerCase() === 'tbody';
};

isHTMLElement.table.section.tfoot = function (dom) {
  return isHTMLElement(dom, 'TableSection') && dom.tagName.toLowerCase() === 'tfoot';
};

isHTMLElement.tcell.th = function (dom) {
  return isHTMLElement(dom, 'TableCell') && dom.tagName.toLowerCase() === 'th';
};

isHTMLElement.tcell.td = function (dom) {
  return isHTMLElement(dom, 'TableCell') && dom.tagName.toLowerCase() === 'td';
};

var html = isHTMLElement;
exports.html = html;
var xml = isXMLElement;
exports.xml = xml;
var _default = {
  html: html,
  xml: xml
};
exports["default"] = _default;