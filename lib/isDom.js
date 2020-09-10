"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.isDocument = exports.xml = exports.html = void 0;

var _window = _interopRequireDefault(require("../core/window"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isNode = function isNode(node) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Node';
  return !!_window["default"] && node instanceof _window["default"][type];
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

var getAttributeForDom = function getAttributeForDom(dom, attrName) {
  if (isHTMLElement(dom)) {
    return dom.getAttribute(attrName);
  }

  return null;
};

var XmlNameTypeMap = {};

var _loop = function _loop() {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      tag = _Object$entries$_i[0],
      type = _Object$entries$_i[1];

  isXMLElement[tag] = function (dom) {
    return isXMLElement(dom, type);
  };
};

for (var _i = 0, _Object$entries = Object.entries(XmlNameTypeMap); _i < _Object$entries.length; _i++) {
  _loop();
}

var HtmlNameTypeMap = {
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
  head: 'Head',
  header: '',
  hr: 'HR',
  html: 'Html',
  i: '',
  iframe: 'IFrame',
  img: 'Image',
  input: 'Image',
  ins: '',
  kbd: '',
  keygen: '',
  label: 'Label',
  legend: 'Legend',
  li: 'LI',
  link: 'Link',
  main: '',
  map: 'Map',
  mark: 'Mark',
  marquee: 'Marquee',
  menu: 'Menu',
  menuitem: 'MenuItem',
  // firefox
  meta: 'Mata',
  meter: 'Meter',
  nav: '',
  noframes: '',
  noscript: '',
  object: 'Object',
  ol: 'OList',
  optgroup: 'OptGroup',
  option: 'Option',
  output: 'Oputput',
  p: 'Paragraph',
  param: 'Param',
  picture: 'Picture',
  pre: 'Pre',
  progress: 'Progress',
  q: 'Quote',
  rp: '',
  rt: '',
  ruby: '',
  samp: '',
  script: 'Script',
  section: '',
  select: 'Select',
  small: '',
  source: 'Source',
  span: 'Span',
  strike: '',
  strong: '',
  style: 'Style',
  sub: '',
  summary: '',
  sup: '',
  table: 'Table',
  tcell: 'TableCell',
  textarea: 'TextArea',
  time: 'Time',
  title: 'Title',
  tr: 'TableRow',
  track: 'Track',
  tt: '',
  u: '',
  ul: 'UList',
  "var": '',
  video: 'Video',
  wbr: ''
};

var _loop2 = function _loop2() {
  var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
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